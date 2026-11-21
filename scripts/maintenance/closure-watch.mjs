#!/usr/bin/env node
// Read-only monthly review; only --out explicitly writes the generated report.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import matter from 'gray-matter';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const args = {};
for (let i = 2; i < process.argv.length; i++) {
  const key = process.argv[i];
  if (key === '--verbose' || key === '--help') args[key] = true;
  else if (['--today', '--from-days', '--to-days', '--out'].includes(key)) {
    const value = process.argv[++i];
    if (!value || value.startsWith('--')) throw new Error(`${key}: 値が必要です`);
    args[key] = value;
  } else throw new Error(`不明な引数: ${key}`);
}
if (args['--help']) {
  console.log('node scripts/maintenance/closure-watch.mjs [--today YYYY-MM-DD] [--from-days 14] [--to-days 7] [--verbose] [--out path]');
  process.exit(0);
}
const dateString = (value) => value instanceof Date ? value.toISOString().slice(0, 10) : String(value ?? '');
function day(value) {
  const s = dateString(value);
  const n = Date.parse(`${s}T00:00:00Z`);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(s) || !Number.isFinite(n) || new Date(n).toISOString().slice(0, 10) !== s) {
    throw new Error(`日付が不正です: ${s}`);
  }
  return n / 86400000;
}
const today = args['--today'] ?? new Intl.DateTimeFormat('sv-SE', { timeZone: 'Asia/Tokyo', year: 'numeric', month: '2-digit', day: '2-digit' }).format(new Date());
const now = day(today);
function days(key, fallback) {
  const s = args[key] ?? String(fallback);
  if (!/^\d+$/.test(s) || !Number.isSafeInteger(Number(s))) throw new Error(`${key}: 0以上の整数が必要です`);
  return Number(s);
}
const fromDays = days('--from-days', 14), toDays = days('--to-days', 7);
function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => e.isDirectory() ? walk(path.join(dir, e.name)) : /\.mdx?$/.test(e.name) ? [path.join(dir, e.name)] : []);
}
const facilities = walk(path.join(root, 'src/content/blog/fishing-facility')).sort().map((file) => {
  const { data } = matter(fs.readFileSync(file, 'utf8'));
  return { data, file: path.relative(root, file).replaceAll('\\', '/') };
});
const periods = facilities.flatMap(({ data, file }) => (data.facility_details?.seasonal_closures ?? []).map((c) => {
  day(c.from);
  for (const key of ['to', 'reopen', 'verified_at']) if (c[key]) day(c[key]);
  return { name: data.title, file, ...c };
}));
const cell = (s) => dateString(s).replaceAll('|', '\\|').replace(/\r?\n/g, ' ');
const lines = ['# 休業告知の確認', '', `判定日: ${today}（日本時間）。通年で月1回確認。期日は当日を含め0〜指定日数、確認日は35日超で抽出。`, ''];
function table(title, headers, rows) {
  lines.push(`## ${title}`, '', `件数: ${rows.length}`, '', `| ${headers.join(' | ')} |`, `| ${headers.map(() => '---').join(' | ')} |`, ...rows.map((r) => `| ${r.map(cell).join(' | ')} |`), '');
}
const headers = ['施設名', 'パス', 'from', 'to', 'reopen', 'verified_at', 'source_url'];
const row = (p) => [p.name, p.file, p.from, p.to, p.reopen, p.verified_at, p.source_url];
table('1. 期間付き休業の全一覧', headers, periods.map(row));
const near = periods.flatMap((p) => {
  const result = [];
  for (const [key, limit] of [['from', fromDays], [p.to ? 'to' : 'reopen', toDays]]) {
    if (!p[key]) continue;
    const delta = day(p[key]) - now;
    if (delta >= 0 && delta <= limit) result.push([...row(p), key, delta]);
  }
  return result;
});
table(`2. 期日が近い（開始${fromDays}日以内／終了・再開${toDays}日以内）`, [...headers, '該当日', 'あと日数'], near);
table('3. to のない期間（再開日未定として確認）', headers, periods.filter((p) => !p.to).map(row));
table('4. 確認から35日超・確認日未記入', headers, periods.filter((p) => !p.verified_at || now - day(p.verified_at) > 35).map(row));
const ledger = fs.readFileSync(path.join(root, '.data-set/winter-facility-status.md'), 'utf8').split(/\r?\n/);
let columns;
const pending = [];
for (const line of ledger) {
  if (!line.startsWith('|')) continue;
  const cells = line.split('|').slice(1, -1).map((s) => s.trim());
  if (cells.includes('冬の営業')) { columns = cells; continue; }
  if (columns && cells[columns.indexOf('冬の営業')]?.includes('要確認')) pending.push([cells[0], cells[columns.indexOf('確認日')]]);
}
table('5. 台帳の「冬の営業」が要確認', ['施設のフォルダ名', '確認日'], pending);
lines.push('## 6. 閉業・休止', '');
for (const status of ['closed', 'suspended']) {
  const list = facilities.filter((f) => f.data.status === status);
  lines.push(`- ${status}: ${list.length}施設`);
  if (args['--verbose']) table(status, ['施設名', 'パス'], list.map((f) => [f.data.title, f.file]));
}
const output = lines.join('\n') + '\n';
if (args['--out']) {
  const target = path.resolve(args['--out']);
  // Never overwrite inputs, including facility data or the ledger.
  if (fs.existsSync(target)) throw new Error(`既存ファイルには書き込みません: ${target}`);
  if (!/\.md$/i.test(target)) throw new Error('--out は新規の .md ファイルを指定してください');
  fs.writeFileSync(target, output, { flag: 'wx' });
}
process.stdout.write(output);
