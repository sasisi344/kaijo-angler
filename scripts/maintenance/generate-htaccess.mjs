import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const BLOG_LEGACY_CONFIG = 'src/config/blog-legacy-redirects.ts';
const CONTENT_DIR = 'src/content/blog';
const FACILITY_CONTENT_DIR = 'src/content/blog/fishing-facility';
// column / tactics はコンテンツのディレクトリ構造がそのままURLになる。
// intelligence は移行対象外で現在も /blog/intelligence/{slug}/ が本番URLのため、
// ここに含めてはいけない（含めると稼働中の記事23件を404へ飛ばしてしまう）。
const MIRRORED_SECTIONS = ['column', 'tactics'];
const HTACCESS_FILE = 'public/.htaccess';

// 2026-W31 PPDCA: W30では上位5件のみをハードコードしていたため、毎週404が出るたびに
// 手作業で追記する運用になっていた。ここではソースを分けて全件を機械的に生成する:
//   1. blog-legacy-redirects.ts … postCollection分離で404化した /blog/{slug}（W29実データ由来・287件）
//   2. コンテンツ実体から導出   … 全施設の /blog/{slug} と、階層付き
//      /fishing-facility/{region}/{pref}/{slug}（実際のページはフラットURLのみ）
//   3. column/tactics のフラット旧URL + 包括ルール
//
// 旧WordPress の日付型URL（/2025/07/... 133件）は 2026-07-29 に削除済み
// （W29 GSCでクリック0・表示39回、GA4セッション0）。
//
// mod_alias の Redirect は前方一致のため `/blog/foo`（末尾スラッシュなし）にマッチしない。
// GA4で観測される404は末尾スラッシュなしが多いので、RedirectMatch + `/?$` で両形式を拾う。

/** `'key': 'value',` 形式の行を Record として読む（TSをimportせずに済ませる） */
function readRedirectRecord(file) {
  const record = {};
  const content = fs.readFileSync(file, 'utf-8');
  content.split('\n').forEach((line) => {
    const match = line.match(/'([^']+)':\s*'([^']+)'/);
    if (match) record[match[1]] = match[2];
  });
  return record;
}

/** 施設記事を走査して { dirPath, slug } を返す */
function readFacilities(dir) {
  const facilities = [];
  function traverse(currentPath) {
    for (const item of fs.readdirSync(currentPath)) {
      const fullPath = path.join(currentPath, item);
      if (fs.statSync(fullPath).isDirectory()) {
        traverse(fullPath);
        continue;
      }
      if (item !== 'index.mdx' && item !== 'index.md') continue;
      const { data } = matter(fs.readFileSync(fullPath, 'utf-8'));
      if (data.draft) continue;
      const dirPath = path
        .relative(FACILITY_CONTENT_DIR, currentPath)
        .replace(/\\/g, '/');
      // slug 未指定の記事は階層パスがそのまま実URLになる（地方/県のindexページ）
      if (!data.slug || !dirPath) continue;
      facilities.push({ dirPath, slug: data.slug });
    }
  }
  traverse(dir);
  return facilities;
}

/** column/tactics/intelligence 配下の記事パス（= 現行URLパス）を列挙する */
function readMirroredArticles(section) {
  const articles = [];
  const root = path.join(CONTENT_DIR, section);
  if (!fs.existsSync(root)) return articles;
  (function traverse(currentPath) {
    for (const item of fs.readdirSync(currentPath)) {
      const fullPath = path.join(currentPath, item);
      if (fs.statSync(fullPath).isDirectory()) {
        traverse(fullPath);
        continue;
      }
      if (item !== 'index.mdx' && item !== 'index.md') continue;
      const { data } = matter(fs.readFileSync(fullPath, 'utf-8'));
      if (data.draft) continue;
      const rel = path.relative(CONTENT_DIR, currentPath).replace(/\\/g, '/');
      articles.push({ urlPath: `/${rel}/`, basename: rel.split('/').pop() });
    }
  })(root);
  return articles;
}

/** 正規表現メタ文字を含むパスは想定外なので明示的に弾く */
function assertSafePath(p) {
  if (!/^\/[A-Za-z0-9/_-]*\/?$/.test(p)) {
    throw new Error(`RedirectMatch に使えない文字を含むパス: ${p}`);
  }
}

try {
  const rules = new Map(); // source(正規化・末尾スラッシュなし) -> target

  const addRule = (from, to) => {
    const source = from.replace(/\/+$/, '');
    const target = to.endsWith('/') ? to : `${to}/`;
    assertSafePath(source);
    assertSafePath(target);
    if (source === target.replace(/\/+$/, '')) return; // 自己参照ループを防ぐ
    if (!rules.has(source)) rules.set(source, target);
  };

  const sections = [];

  // 1. /blog/ 配下の実データ由来リダイレクト
  const blogLegacy = readRedirectRecord(BLOG_LEGACY_CONFIG);
  const legacyStart = rules.size;
  Object.entries(blogLegacy).forEach(([from, to]) => addRule(from, to));
  sections.push(['/blog/ legacy (blog-legacy-redirects.ts)', rules.size - legacyStart]);

  // 2. コンテンツ実体から導出（実データに現れていない施設も先回りで網羅）
  const facilities = readFacilities(FACILITY_CONTENT_DIR);
  const derivedStart = rules.size;
  facilities.forEach(({ dirPath, slug }) => {
    const canonical = `/fishing-facility/${slug}/`;
    addRule(`/blog/${slug}/`, canonical);
    addRule(`/fishing-facility/${dirPath}/`, canonical);
    addRule(`/blog/fishing-facility/${dirPath}/`, canonical);
  });
  sections.push(['施設コンテンツから導出', rules.size - derivedStart]);

  // 3. column / tactics / intelligence のフラット旧URL（/blog/{basename}）
  //    実データ上、旧URLは「/blog/{basename}」と「/blog/{現行パス}」の2形態が混在する。
  //    後者は末尾の包括ルールで拾うので、ここでは basename が一意なものだけを個別展開する。
  const mirrored = MIRRORED_SECTIONS.flatMap(readMirroredArticles);
  const byBasename = new Map();
  mirrored.forEach((a) => {
    byBasename.set(a.basename, (byBasename.get(a.basename) || []).concat(a.urlPath));
  });
  const facilitySlugs = new Set(facilities.map((f) => f.slug));
  const flatStart = rules.size;
  const ambiguous = [];
  for (const [basename, paths] of byBasename) {
    // 同名 basename が複数（例: 魚種ごとの theory / intermediate）や施設slugと衝突する場合は
    // 一意に決められないので生成しない（誤リダイレクトを作らない方を優先）
    if (paths.length > 1 || facilitySlugs.has(basename)) {
      ambiguous.push(basename);
      continue;
    }
    addRule(`/blog/${basename}/`, paths[0]);
  }
  sections.push(['column/tactics のフラット旧URL', rules.size - flatStart]);

  let htaccessContent = `# This file is auto-generated by scripts/maintenance/generate-htaccess.mjs\n`;
  htaccessContent += `# 編集はスクリプト側で行うこと（手書きの追記は次回生成で失われる）\n\n`;
  htaccessContent += `ErrorDocument 404 /404.html\n\n`;
  htaccessContent += `<IfModule mod_alias.c>\n`;
  for (const [source, target] of rules) {
    htaccessContent += `  RedirectMatch 301 ^${source}/?$ ${target}\n`;
  }
  // 4. 包括ルール（必ず最後 = 個別ルールが優先される）
  //    旧 /blog/ 配下には現行パスをそのまま含む形（/blog/column/trivia/xxx/ 等）も存在する。
  //    今後追加される記事も自動的に救われるよう、残りはまとめてプレフィックスを剥がす。
  htaccessContent += `\n  # fallback: /blog/{現行パス} → /{現行パス}（新規記事も自動でカバー）\n`;
  // ※ intelligence は現役URLなので対象外
  htaccessContent += `  RedirectMatch 301 ^/blog/(column|tactics|fishing-facility)/(.*)$ /$1/$2\n`;

  htaccessContent += `</IfModule>\n`;

  fs.writeFileSync(HTACCESS_FILE, htaccessContent);
  console.log(`.htaccess created successfully at ${HTACCESS_FILE}`);
  sections.forEach(([label, count]) => console.log(`  - ${label}: ${count}件`));
  console.log(`  = 個別ルール 合計 ${rules.size}件 + 包括ルール1件`);
  if (ambiguous.length) {
    console.log(
      `  ※ 一意に決まらず /blog/{basename} を生成しなかったslug: ${ambiguous.length}件 ` +
        `(${ambiguous.slice(0, 8).join(', ')}${ambiguous.length > 8 ? ' …' : ''})`,
    );
  }
} catch (error) {
  console.error(`Failed to generate .htaccess: ${error}`);
  process.exitCode = 1;
}
