import fs from 'fs';

const CSV = process.argv[2] || '.workspace/.task/access-data/2026-0621-3monthquery.csv';

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

const lines = fs.readFileSync(CSV, 'utf-8').split(/\r?\n/).slice(1).filter(Boolean);
const rows = [];
for (const line of lines) {
  const cols = parseCsvLine(line);
  if (cols.length < 5) continue;
  const [query, clicksStr, imprStr, ctrStr, posStr] = cols;
  rows.push({ query, clicks: Number(clicksStr), impressions: Number(imprStr), position: Number(posStr) });
}

const totalClicks = rows.reduce((a, r) => a + r.clicks, 0);
const totalImpr = rows.reduce((a, r) => a + r.impressions, 0);

function bucket(name, keywords) {
  const matched = rows.filter((r) => keywords.some((k) => r.query.includes(k)));
  const clicks = matched.reduce((a, r) => a + r.clicks, 0);
  const impr = matched.reduce((a, r) => a + r.impressions, 0);
  console.log(`${name}: n=${matched.length}  clicks=${clicks} (${(clicks / totalClicks * 100).toFixed(1)}%)  impressions=${impr} (${(impr / totalImpr * 100).toFixed(1)}%)`);
  return matched;
}

console.log(`total: n=${rows.length} clicks=${totalClicks} impressions=${totalImpr}\n`);

bucket('施設の営業状況系（閉鎖/休業/再開/現在/閉園など）', ['閉鎖', '休業', '閉園', '再開', '現在', '現状', '休止', '閉店']);
bucket('比較・ランキング系（ランキング/おすすめ/比較/一覧）', ['ランキング', 'おすすめ', '比較', '一覧']);
bucket('料金系（料金/円/価格）', ['料金', '円', '価格']);
bucket('魚種・攻略系（攻略/釣り方/仕掛け）', ['攻略', '釣り方', '仕掛け']);

console.log('\n--- Top 20 queries by impressions ---');
for (const r of [...rows].sort((a, b) => b.impressions - a.impressions).slice(0, 20)) {
  console.log(`${r.query}: clicks=${r.clicks} impr=${r.impressions} pos=${r.position}`);
}
