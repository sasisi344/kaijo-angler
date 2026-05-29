/**
 * tactics/gear カテゴリ カバー画像一括生成
 *
 * カテゴリ特性:
 *   - タックル・装備の選び方・メンテナンスを扱う製品解説系記事
 *   - 道具そのもの（竿・リール・ライン・小物）のクローズアップ・フラットレイが主体
 *   - 比較・構成・セットアップを視覚化した製品写真スタイル
 */

import { execSync } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const CONTENT_BASE = path.resolve(__dirname, '../../src/content/blog/tactics/gear');
const SCRIPT = path.join(__dirname, 'generate-image.js');

// カテゴリ共通のワンポイント（多出する投稿から抽出）:
//   竿・リール・ライン・仕掛け・小物・ライフジャケット・クーラーボックス
// → 製品クローズアップ / フラットレイ / 白〜ダーク背景 が共通の強み
const articles = [
  {
    slug: 'beginner-tackle-set',
    prompt: 'Complete beginner sea fishing rod and spinning reel combo laid flat on wooden deck, tackle box beside it, organized setup for first-time angler',
  },
  {
    slug: 'bluefish-power-tackle',
    prompt: 'Heavy-duty offshore fishing rod with large spinning reel loaded with thick PE line, closeup showing powerful drag system, dark dramatic background',
  },
  {
    slug: 'cooler-box-selection',
    prompt: 'Large fishing cooler box open on pier showing crushed ice with fresh sea bream and yellowtail inside, moisture condensation on surface',
  },
  {
    slug: 'harris-importance',
    prompt: 'Coil of transparent fluorocarbon fishing leader line on dark background, multiple spools of different lb ratings arranged side by side',
  },
  {
    slug: 'myakuzuri-gear',
    prompt: 'Ultra-sensitive fishing rod tip (ソリッド穂先) extreme closeup, delicate curved tip with fishing line attached, shallow depth of field',
  },
  {
    slug: 'reel-and-line',
    prompt: 'Spinning reel side profile on white surface showing drag knob and spool loaded with braided PE line, clean product photography',
  },
  {
    slug: 'rod-selection',
    prompt: 'Multiple fishing rods of different lengths and flex ratings leaning against railing, showing variety of tip thicknesses, ocean in background',
  },
  {
    slug: 'safety-gear-guide',
    prompt: 'Bright orange life jacket and UV protective fishing shirt laid flat on pier, safety equipment for sea fishing, clean composition',
  },
  {
    slug: 'small-goods-essentials',
    prompt: 'Flat lay of essential fishing accessories: stainless pliers, fish grip tool, landing net, hook remover, arranged neatly on dark surface',
  },
  {
    slug: 'uki-setup',
    prompt: 'Traditional sea fishing float rig with red-and-white bobber, sinker, and hook assembled and hanging against blue sky, complete setup',
  },
  {
    slug: 'knot-strength-test',
    prompt: 'Macro closeup of a fishing hook tied with neat internal knot to fluorocarbon leader, knot detail sharp against blurred background',
  },
  {
    slug: 'tackle-maintenance-care',
    prompt: 'Spinning reel disassembled on clean cloth showing internal parts, maintenance oil and brush beside it, gear care routine',
  },
];

async function run() {
  for (let i = 0; i < articles.length; i++) {
    const { slug, prompt } = articles[i];
    const outputPath = path.join(CONTENT_BASE, slug, 'cover.jpg');
    console.log(`\n[${i + 1}/${articles.length}] ${slug}`);
    try {
      execSync(`node "${SCRIPT}" "${prompt}" "${outputPath}"`, {
        stdio: 'inherit',
        cwd: path.resolve(__dirname, '../..'),
      });
    } catch (err) {
      console.error(`  ✗ Failed: ${err.message}`);
    }
  }
  console.log('\n✅ gear カバー画像生成完了');
}

run();
