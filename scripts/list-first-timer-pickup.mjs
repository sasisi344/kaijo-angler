// 「はじめてでも安心」のおすすめ候補と、データ未入力の施設を一覧にする。
// 判定ロジックは src/utils/first-timer.ts が正本。ここではビルド済みの API 出力を読むだけ（ロジックを二重に持たない）。
//
// 使い方:
//   pnpm build
//   node scripts/list-first-timer-pickup.mjs [GSCページCSV] [facilities.json]
// 例:
//   node scripts/list-first-timer-pickup.mjs .workspace/.task/access-data/weekly-report/2026/w42/ページ.csv
import fs from 'fs';

const gscPath = process.argv[2];
const apiPath = process.argv[3] || 'dist/api/facilities.json';

if (!fs.existsSync(apiPath)) {
  console.error(`${apiPath} がありません。先に pnpm build を実行してください。`);
  process.exit(1);
}

const facilities = JSON.parse(fs.readFileSync(apiPath, 'utf8'));

// GSC ページCSV（上位のページ,クリック数,表示回数,...）から URL 末尾の slug ごとの表示回数を作る
const impressions = new Map();
if (gscPath) {
  const lines = fs.readFileSync(gscPath, 'utf8').replace(/^﻿/, '').split(/\r?\n/).slice(1);
  for (const line of lines) {
    const [url, , imp] = line.split(',');
    const m = url?.match(/\/fishing-facility\/([^/]+)\/?$/);
    if (m) impressions.set(m[1], (impressions.get(m[1]) ?? 0) + Number(imp || 0));
  }
}

const lastSegment = (id) => id.split('/').pop();
const rows = facilities.map((f) => ({
  slug: lastSegment(f.slug),
  title: f.title.replace(/\s*—.*$/, ''),
  region: f.region ?? '',
  prefecture: f.prefecture ?? '',
  level: f.firstTimer?.level ?? 'no-data',
  pick: f.firstTimer?.pick ?? false,
  impressions: impressions.get(lastSegment(f.slug)) ?? 0,
}));

const byImpressions = (a, b) => b.impressions - a.impressions || a.slug.localeCompare(b.slug);

const print = (label, list) => {
  console.log(`\n## ${label}（${list.length}件）\n`);
  if (list.length === 0) return;
  console.log('| 施設 | slug | 地域 | 判定 | GSC表示 |');
  console.log('|---|---|---|---|---|');
  for (const r of list) {
    console.log(`| ${r.title} | ${r.slug} | ${r.prefecture || r.region} | ${r.level} | ${r.impressions} |`);
  }
};

print('おすすめ候補（はじめてでも安心・準備すれば安心／確認12か月以内）', rows.filter((r) => r.pick).sort(byImpressions));
print('確認中（未確認の項目が多い）', rows.filter((r) => r.level === 'unknown').sort(byImpressions));
print('データ未入力（表示回数順＝確認の優先順）', rows.filter((r) => r.level === 'no-data').sort(byImpressions).slice(0, 30));
