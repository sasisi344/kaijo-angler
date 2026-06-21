import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

function getAllFiles(dir, acc = []) {
  for (const e of fs.readdirSync(dir)) {
    const full = path.join(dir, e);
    if (fs.statSync(full).isDirectory()) getAllFiles(full, acc);
    else acc.push(full);
  }
  return acc;
}

const FACILITY_DIR = 'src/content/blog/fishing-facility';
const idxFiles = getAllFiles(FACILITY_DIR).filter(
  (f) => path.basename(f) === 'index.mdx' || path.basename(f) === 'index.md',
);
const meta = new Map();
for (const f of idxFiles) {
  const slug = path.basename(path.dirname(f));
  const rel = path.relative(FACILITY_DIR, f).split(path.sep).join('/');
  const parts = rel.split('/');
  meta.set(slug, { region: parts[0], prefecture: parts[1] });
}
const prefCount = new Map();
for (const v of meta.values()) {
  const key = `${v.region}/${v.prefecture}`;
  prefCount.set(key, (prefCount.get(key) || 0) + 1);
}

// Read 3-month page CSV (same parser logic as analyze-facility-ranking.mjs, "上位のページ" format)
const CSV = process.argv[2] || '.workspace/.task/access-data/2026-0621-3month-page.csv';
function parseCsvLine(line) {
  const cols = [];
  let cur = '';
  let inQuotes = false;
  for (let i = 0; i < line.length; i++) {
    const ch = line[i];
    if (inQuotes) {
      if (ch === '"') { if (line[i + 1] === '"') { cur += '"'; i++; } else inQuotes = false; }
      else cur += ch;
    } else {
      if (ch === '"') inQuotes = true;
      else if (ch === ',') { cols.push(cur); cur = ''; }
      else cur += ch;
    }
  }
  cols.push(cur);
  return cols;
}
function extractSlugFromUrl(p) {
  const parts = p.split('?')[0].split('/').filter(Boolean);
  return parts[parts.length - 1];
}

const lines = fs.readFileSync(CSV, 'utf-8').split(/\r?\n/);
const bySlug = new Map();
for (let i = 1; i < lines.length; i++) {
  const line = lines[i];
  if (!line) continue;
  const cols = parseCsvLine(line);
  if (cols.length < 5) continue;
  const [pagePath, clicksStr, imprStr, , posStr] = cols;
  const impressions = Number(imprStr);
  const position = Number(posStr);
  if (!pagePath || isNaN(impressions) || isNaN(position)) continue;
  const slug = extractSlugFromUrl(pagePath);
  if (!meta.has(slug)) continue;
  if (!bySlug.has(slug)) bySlug.set(slug, { impressions: 0, clicks: 0, weightedPosSum: 0 });
  const agg = bySlug.get(slug);
  agg.impressions += impressions;
  agg.clicks += Number(clicksStr);
  agg.weightedPosSum += position * impressions;
}

const rows = [];
for (const [slug, agg] of bySlug.entries()) {
  if (agg.impressions < 1) continue;
  const { region, prefecture } = meta.get(slug);
  const siblingCount = prefCount.get(`${region}/${prefecture}`) || 1;
  rows.push({
    slug,
    region,
    prefecture,
    siblingCount,
    impressions: agg.impressions,
    avgPosition: agg.weightedPosSum / agg.impressions,
    ctr: agg.clicks / agg.impressions,
  });
}

function avg(arr) { return arr.reduce((a, b) => a + b, 0) / arr.length; }
function corr(xs, ys) {
  const n = xs.length;
  const mx = avg(xs), my = avg(ys);
  let num = 0, dx2 = 0, dy2 = 0;
  for (let i = 0; i < n; i++) { const dx = xs[i] - mx, dy = ys[i] - my; num += dx * dy; dx2 += dx * dx; dy2 += dy * dy; }
  return num / Math.sqrt(dx2 * dy2);
}

console.error(`n=${rows.length}`);
console.error('siblingCount(同一都道府県内の施設数) vs position:', corr(rows.map(r => r.siblingCount), rows.map(r => r.avgPosition)).toFixed(3));
console.error('siblingCount vs impressions:', corr(rows.map(r => r.siblingCount), rows.map(r => r.impressions)).toFixed(3));

console.error('\n--- region別 平均順位・平均表示回数 ---');
const byRegion = new Map();
for (const r of rows) {
  if (!byRegion.has(r.region)) byRegion.set(r.region, []);
  byRegion.get(r.region).push(r);
}
for (const [region, list] of byRegion.entries()) {
  console.error(`${region}: n=${list.length} avgPos=${avg(list.map(r => r.avgPosition)).toFixed(2)} avgImpr=${avg(list.map(r => r.impressions)).toFixed(1)}`);
}

console.error('\n--- prefecture別（施設数3以上） ---');
const byPref = new Map();
for (const r of rows) {
  const key = `${r.region}/${r.prefecture}`;
  if (!byPref.has(key)) byPref.set(key, []);
  byPref.get(key).push(r);
}
for (const [pref, list] of [...byPref.entries()].filter(([, l]) => l.length >= 3).sort((a, b) => b[1].length - a[1].length)) {
  console.error(`${pref}: n=${list.length} avgPos=${avg(list.map(r => r.avgPosition)).toFixed(2)} avgImpr=${avg(list.map(r => r.impressions)).toFixed(1)} avgCtr=${(avg(list.map(r => r.ctr)) * 100).toFixed(1)}%`);
}
