import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const WP_XML_PATH = '.workspace/data-set/wordpress-log/WordPress.2026-03-20.xml';
const ASTRO_CONTENT_DIR = 'src/content/blog/fishing-facility';
const OUTPUT_FILE = '.workspace/redirect-map.md';

function cleanTitle(title) {
    if (!title) return '';
    let t = title;
    // Removing prefixes or special markers
    t = t.replace(/【.*?】/g, ''); 
    t = t.replace(/^閉店[｜|]/g, '');
    t = t.replace(/^【休止中】/g, '');
    
    // Removing detailed text after separators
    t = t.replace(/[｜|:：].*/, ''); 
    
    // Cleaning up symbols and spaces
    t = t.replace(/[！!？?　\s\(\)（）]/g, ''); 
    return t.trim();
}

function getAstroArticles(dir) {
    const articles = [];
    function traverse(currentPath) {
        const items = fs.readdirSync(currentPath);
        if (items.includes('index.md')) {
            const content = fs.readFileSync(path.join(currentPath, 'index.md'), 'utf-8');
            const { data } = matter(content);
            // URLパスを生成 (Astroの設定に合わせて適宜調整が必要)
            // ここでは src/content/blog/fishing-facility/ 以降の構造をベースにする
            const relativePath = path.relative(ASTRO_CONTENT_DIR, currentPath).replace(/\\/g, '/');
            articles.push({
                title: data.title,
                clean: cleanTitle(data.title),
                currentPath: `/fishing-facility/${relativePath}/`
            });
        }
        items.forEach(item => {
            const fullPath = path.join(currentPath, item);
            if (fs.statSync(fullPath).isDirectory()) {
                traverse(fullPath);
            }
        });
    }
    traverse(dir);
    return articles;
}

function getWpPosts(xmlPath) {
    const xml = fs.readFileSync(xmlPath, 'utf-8');
    const itemRegex = /<item>([\s\S]*?)<\/item>/g;
    const posts = [];
    let match;
    while ((match = itemRegex.exec(xml)) !== null) {
        const item = match[1];
        const titleMatch = item.match(/<title><!\[CDATA\[([\s\S]*?)\]\]><\/title>/) || item.match(/<title>([\s\S]*?)<\/title>/);
        const linkMatch = item.match(/<link>([\s\S]*?)<\/link>/);
        const postTypeMatch = item.match(/<wp:post_type><!\[CDATA\[([\s\S]*?)\]\]><\/wp:post_type>/) || item.match(/<wp:post_type>([\s\S]*?)<\/wp:post_type>/);
        const statusMatch = item.match(/<wp:status><!\[CDATA\[([\s\S]*?)\]\]><\/wp:status>/) || item.match(/<wp:status>([\s\S]*?)<\/wp:status>/);

        if (postTypeMatch && postTypeMatch[1] === 'post' && statusMatch && statusMatch[1] === 'publish') {
            const title = titleMatch ? titleMatch[1] : '';
            const link = linkMatch ? linkMatch[1] : '';
            const url = new URL(link);
            posts.push({
                title,
                clean: cleanTitle(title),
                oldPath: url.pathname
            });
        }
    }
    return posts;
}

console.log('--- Analyzing WordPress Logs and Astro Articles ---');
const astroArticles = getAstroArticles(ASTRO_CONTENT_DIR);
const wpPosts = getWpPosts(WP_XML_PATH);

console.log(`WP Posts found: ${wpPosts.length}`);
console.log(`Astro Articles found: ${astroArticles.length}\n`);

const mappings = [];
const unmatchedWp = [];

wpPosts.forEach(wp => {
    // 【まとめ】や 記事タイトルに 'ガイド' 形式じゃないものを想定して除外。
    // 旧URLに matome が含まれるものは施設紹介ではないため除外
    if (wp.oldPath.includes('matome')) return;

    // 1. 完全一致（クリーン後）
    let match = astroArticles.find(a => a.clean === wp.clean);
    
    // 2. 部分一致（どちらかがどちらかを含む）
    if (!match) {
        match = astroArticles.find(a => a.clean.includes(wp.clean) || wp.clean.includes(a.clean));
    }

    if (match) {
        mappings.push({
            title: wp.title,
            oldPath: wp.oldPath,
            newPath: match.currentPath
        });
    } else {
        unmatchedWp.push(wp);
    }
});

let markdown = `# URL Redirect Map Report\n\n`;
markdown += `Matched: ${mappings.length}\n`;
markdown += `Unmatched WP: ${unmatchedWp.length}\n\n`;

markdown += `## Matched List\n\n`;
markdown += `| WP Title | Old URL | New URL |\n`;
markdown += `| :--- | :--- | :--- |\n`;
mappings.forEach(m => {
    markdown += `| ${m.title} | ${m.oldPath} | ${m.newPath} |\n`;
});

if (unmatchedWp.length > 0) {
    markdown += `\n## Unmatched WP Posts\n\n`;
    markdown += `| WP Title | Old URL |\n`;
    markdown += `| :--- | :--- |\n`;
    unmatchedWp.forEach(u => {
        markdown += `| ${u.title} | ${u.oldPath} |\n`;
    });
}

fs.writeFileSync(OUTPUT_FILE, markdown);
console.log(`Report generated: ${OUTPUT_FILE}`);

// 2026-07-29: 旧WordPress の日付型URL（/2025/07/... 133件）は
// W29 GSCでクリック0・表示39回、GA4セッション0だったため削除した。
// それに伴い、このスクリプトが持っていた2つの出力を廃止:
//   - src/config/facility-redirects.ts の生成（設定ごと削除済み）
//   - public/.htaccess の生成（scripts/maintenance/generate-htaccess.mjs に一本化。
//     こちらを走らせると 800件超のリダイレクトを133件で上書きしてしまうため）
// 現在はWordPressエクスポートとの突き合わせレポート出力のみを担う。
