/**
 * 施設記事のテンプレ的特徴（本文量・魚種数・rating・公開からの経過日数・内部リンク数）と
 * GSCの検索パフォーマンス（表示回数・掲載順位・CTR）の相関を見るための診断スクリプト。
 *
 * 使い方: node scripts/analyze-facility-ranking.mjs [GSCエクスポートCSVのパス]
 * デフォルトは直近の週次レポート（.workspace/.task/access-data/weekly-report/2026/kaijo-gsc-w24.csv）。
 * GSC Looker Studio エクスポート（ランディング ページ + クエリ文字列 タブ）形式と、
 * 単純な Query,Page,Clicks,Impressions,CTR,Position 形式の両方に対応。
 */
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const csvPath = process.argv[2] || '.workspace/.task/access-data/weekly-report/2026/kaijo-gsc-w24.csv';
const FACILITY_DIR = 'src/content/blog/fishing-facility';

function getAllFiles(dir, acc = []) {
  for (const entry of fs.readdirSync(dir)) {
    const full = path.join(dir, entry);
    if (fs.statSync(full).isDirectory()) getAllFiles(full, acc);
    else acc.push(full);
  }
  return acc;
}

function extractSlugFromUrl(p) {
  const parts = p.split('?')[0].split('/').filter(Boolean);
  return parts[parts.length - 1];
}

function bodyCharCount(content) {
  const stripped = content
    .replace(/<[^>]+>/g, '')
    .replace(/import .*?;\n/g, '')
    .replace(/```[\s\S]*?```/g, '')
    .replace(/[#*_>\-`]/g, '')
    .trim();
  return stripped.length;
}

function parseCsvLine(line) {
  const cols = [];
  let cur = '';
  let inQuotes = false;
  for (let i = 0; i < line.length; i++) {
    const ch = line[i];
    if (inQuotes) {
      if (ch === '"') {
        if (line[i + 1] === '"') { cur += '"'; i++; } else inQuotes = false;
      } else cur += ch;
    } else {
      if (ch === '"') inQuotes = true;
      else if (ch === ',') { cols.push(cur); cur = ''; }
      else cur += ch;
    }
  }
  cols.push(cur);
  return cols;
}

function parseRows(csvPath) {
  const raw = fs.readFileSync(csvPath, 'utf-8');
  const lines = raw.split(/\r?\n/);
  const lookerHeaderIdx = lines.findIndex((l) => l.startsWith('ランディング'));
  const rows = [];
  if (lookerHeaderIdx !== -1) {
    // Looker Studio export: Page,Clicks,Impressions,CTR,Position,...
    for (let i = lookerHeaderIdx + 1; i < lines.length; i++) {
      const line = lines[i];
      if (!line || line.trim() === '') continue;
      const cols = line.split(',');
      if (cols.length < 10) continue;
      const pagePath = cols[0];
      if (!pagePath || pagePath.startsWith('総計')) continue;
      rows.push({
        pagePath,
        clicks: Number(cols[1]),
        impressions: Number(cols[2]),
        position: Number(cols[4]),
      });
    }
  } else if (lines[0].startsWith('上位のページ')) {
    // GSC "上位のページ" export: Page,Clicks,Impressions,CTR,Position
    for (let i = 1; i < lines.length; i++) {
      const line = lines[i];
      if (!line) continue;
      const cols = parseCsvLine(line);
      if (cols.length < 5) continue;
      const [pagePath, clicksStr, imprStr, , posStr] = cols;
      const impressions = Number(imprStr);
      const position = Number(posStr);
      if (!pagePath || isNaN(impressions) || isNaN(position)) continue;
      rows.push({ pagePath, clicks: Number(clicksStr), impressions, position });
    }
  } else {
    // Plain Query,Page,Clicks,Impressions,CTR,Position export
    for (let i = 1; i < lines.length; i++) {
      const line = lines[i];
      if (!line) continue;
      const cols = parseCsvLine(line);
      if (cols.length < 6) continue;
      const pagePath = cols[1];
      const impressions = Number(cols[3]);
      const position = Number(cols[5]);
      if (!pagePath || isNaN(impressions) || isNaN(position)) continue;
      rows.push({ pagePath, clicks: Number(cols[2]), impressions, position });
    }
  }
  return rows;
}

function countInternalLinks(slugs) {
  const blogFiles = getAllFiles('src/content/blog').filter((f) => f.endsWith('.mdx') || f.endsWith('.md'));
  const linkCount = new Map(slugs.map((s) => [s, 0]));
  for (const f of blogFiles) {
    const content = fs.readFileSync(f, 'utf-8');
    for (const s of slugs) {
      const escaped = s.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
      const re = new RegExp('/' + escaped + '(/|"|\\)|\\s)', 'g');
      const matches = content.match(re);
      if (matches) linkCount.set(s, linkCount.get(s) + matches.length);
    }
  }
  return linkCount;
}

function avg(arr) {
  return arr.reduce((a, b) => a + b, 0) / arr.length;
}

function corr(xs, ys) {
  const n = xs.length;
  const mx = avg(xs);
  const my = avg(ys);
  let num = 0, dx2 = 0, dy2 = 0;
  for (let i = 0; i < n; i++) {
    const dx = xs[i] - mx, dy = ys[i] - my;
    num += dx * dy;
    dx2 += dx * dx;
    dy2 += dy * dy;
  }
  return num / Math.sqrt(dx2 * dy2);
}

// --- main ---
const facilityIndexFiles = getAllFiles(FACILITY_DIR).filter(
  (f) => path.basename(f) === 'index.mdx' || path.basename(f) === 'index.md',
);
const slugIndex = new Map();
for (const f of facilityIndexFiles) slugIndex.set(path.basename(path.dirname(f)), f);
const slugs = [...slugIndex.keys()];
const linkCounts = countInternalLinks(slugs);

const rows = parseRows(csvPath);

// Aggregate GSC rows by slug (Looker export has multiple rows per page — query-level breakdown)
const bySlug = new Map();
for (const row of rows) {
  const slug = extractSlugFromUrl(row.pagePath);
  if (!slugIndex.has(slug)) continue; // not a facility page (tactics/column/etc.)
  if (!bySlug.has(slug)) bySlug.set(slug, { slug, impressions: 0, clicks: 0, weightedPosSum: 0 });
  const agg = bySlug.get(slug);
  agg.impressions += row.impressions;
  agg.clicks += row.clicks;
  agg.weightedPosSum += row.position * row.impressions;
}

const results = [];
for (const agg of bySlug.values()) {
  const file = slugIndex.get(agg.slug);
  const { data, content } = matter(fs.readFileSync(file, 'utf-8'));
  const publishDate = data.publishDate;
  results.push({
    slug: agg.slug,
    impressions: agg.impressions,
    clicks: agg.clicks,
    ctr: agg.impressions > 0 ? agg.clicks / agg.impressions : 0,
    avgPosition: agg.impressions > 0 ? agg.weightedPosSum / agg.impressions : null,
    charCount: bodyCharCount(content),
    targetFishCount: (data.facility_details?.target_fish || []).length,
    ratingValue: data.google_maps?.rating ?? null,
    ageDays: publishDate ? Math.round((Date.now() - new Date(publishDate).getTime()) / 86400000) : null,
    linkCount: linkCounts.get(agg.slug) ?? 0,
  });
}
results.sort((a, b) => b.impressions - a.impressions);

const withImpr = results.filter((r) => r.impressions >= 1 && r.avgPosition != null);
const withEnoughImpr = withImpr.filter((r) => r.impressions >= 10);
const withRating = withImpr.filter((r) => r.ratingValue != null);

console.error(`source: ${csvPath}`);
console.error(`matched ${results.length} facility slugs (${withImpr.length} with impressions>=1)\n`);

console.error('--- correlation with position / impressions ---');
const feats = [
  ['charCount', withImpr.map((r) => r.charCount)],
  ['targetFishCount', withImpr.map((r) => r.targetFishCount)],
  ['ageDays', withImpr.map((r) => r.ageDays)],
  ['linkCount', withImpr.map((r) => r.linkCount)],
];
const posArr = withImpr.map((r) => r.avgPosition);
const imprArr = withImpr.map((r) => r.impressions);
for (const [name, arr] of feats) {
  console.error(`${name}: vs position=${corr(arr, posArr).toFixed(3)}  vs impressions=${corr(arr, imprArr).toFixed(3)}`);
}
if (withRating.length > 1) {
  const ratingArr = withRating.map((r) => r.ratingValue);
  console.error(`ratingValue (n=${withRating.length}): vs position=${corr(ratingArr, withRating.map((r) => r.avgPosition)).toFixed(3)}  vs impressions=${corr(ratingArr, withRating.map((r) => r.impressions)).toFixed(3)}`);
}
if (withEnoughImpr.length > 1) {
  console.error(`\nposition vs CTR (n=${withEnoughImpr.length}, impressions>=10): ${corr(withEnoughImpr.map((r) => r.avgPosition), withEnoughImpr.map((r) => r.ctr)).toFixed(3)}`);
}

console.error('\n--- top 10 by impressions (likely demand-driven, not content-driven) ---');
for (const r of results.slice(0, 10)) {
  console.error(`${r.slug}: impr=${r.impressions} pos=${r.avgPosition?.toFixed(1)} char=${r.charCount} links=${r.linkCount} rating=${r.ratingValue}`);
}

console.error('\n--- underperformers: demand exists (impressions>=10) but position>15 or ctr=0 ---');
for (const r of withEnoughImpr.filter((r) => r.avgPosition > 15 || r.ctr === 0)) {
  console.error(`${r.slug}: impr=${r.impressions} pos=${r.avgPosition.toFixed(1)} ctr=${(r.ctr * 100).toFixed(1)}% — 個別レビュー対象`);
}
