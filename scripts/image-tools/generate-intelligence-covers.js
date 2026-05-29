/**
 * intelligence カテゴリ カバー画像一括生成
 *
 * カテゴリ特性:
 *   - 週報・月報・季節特集の釣況データレポート
 *   - 週報(8本)・月報(3本)・特集(4本) の3タイプで表情を変える
 *
 * ワンポイント（多出する投稿から抽出）:
 *   週報 → 「季節 × 魚種の活性」を象徴するシーン（水温上昇・放流・爆釣）
 *   月報 → 1ヶ月を総括する俯瞰感（広域の海・ヒートマップ的な全体感）
 *   特集 → テーマを1枚で語る力強い構図（桜鯛・青物・GW混雑・エリア対比）
 *
 * 画像スタイル共通:
 *   - ドキュメンタリー・報道写真的な臨場感
 *   - 季節感・時刻感を光で表現（朝光・黄金時間帯・夕焼け）
 *   - データ・数字の雰囲気は出さず、あくまで「現場の空気」を切り取る
 */

import { execSync } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const CONTENT_BASE = path.resolve(__dirname, '../../src/content/blog/intelligence');
const SCRIPT = path.join(__dirname, 'generate-image.js');

const articles = [
  // ── 週報 ──────────────────────────────────────────────────────────────
  {
    slug: '2026-03-w13',
    // 3月後半・水温上昇・シマアジ放流・桜鯛始動
    prompt: 'Striped jack (シマアジ) and sea bream swimming actively near surface in late winter ocean, pale cherry blossom light filtering through water',
  },
  {
    slug: '2026-04-w01',
    // 4月第1週・春の始まり・桜鯛モード突入
    prompt: 'Cherry blossom petals floating on calm ocean surface at dawn, fishing rod silhouette in early spring morning light',
  },
  {
    slug: '2026-04-w02',
    // 4月第2週・桜鯛ピーク・澄み潮
    prompt: 'Large vibrant red sea bream in crystal-clear spring water, cherry blossom pink hue on its body, peak spawning season colors',
  },
  {
    slug: '2026-04-w03',
    // 4月第3週・GW前哨戦・予約競争
    prompt: 'Fishing pier at golden hour with several anglers preparing tackle, pre-holiday busy atmosphere, warm spring evening light',
  },
  {
    slug: '2026-04-w04',
    // 4月第4週・GW直前・全エリア高活性
    prompt: 'School of yellowtail and sea bream visible just below surface in clear water, multiple fish active simultaneously, afternoon sunlight',
  },
  {
    slug: '2026-05-w01',
    // 5月第1週・GW爆釣・青物台頭
    prompt: 'Powerful yellowtail leaping from ocean surface during golden week, spray of water, action shot, vibrant early summer energy',
  },
  {
    slug: '2026-05-w02',
    // 5月第2週・GW後の穴場期・プレッシャー消滅
    prompt: 'Peaceful empty fishing pier on calm morning after holiday rush, clear turquoise water with fish visible below, quiet solitude',
  },
  {
    slug: '2026-05-w03',
    // 5月第3週・青物本格開幕・カンパチ覚醒
    prompt: 'Large amberjack (カンパチ) charging through blue early summer water, powerful muscular fish, sunbeams from above, action energy',
  },
  {
    slug: '2026-05-w04',
    // 5月第4週・梅雨前・気圧変化・駆け込み
    prompt: 'Dark overcast sky gathering before rainy season over fishing pier, dramatic pre-storm atmosphere, fish active near surface',
  },
  {
    slug: '2026-05-w05',
    // 5月第5週・梅雨入り・雨天釣行
    prompt: 'Rain falling on ocean surface during rainy season, fishing lines descending through rippled water, moody atmospheric light',
  },

  // ── 月報 ──────────────────────────────────────────────────────────────
  {
    slug: '2026-03-summary',
    // 3月総括・春の始まり・低水温からの回復
    prompt: 'Wide aerial view of fishing pond facility in early spring, gentle fog lifting over ocean, first warm light of the season',
  },
  {
    slug: '2026-04-summary',
    // 4月総括・桜鯛フィーバー・GW直前
    prompt: 'Panoramic spring ocean view with cherry blossoms on shore, multiple sea bream visible below crystalline surface, peak spring season',
  },
  {
    slug: '2026-05-summary',
    // 5月総括・GW激戦・初夏開幕
    prompt: 'Early summer fishing scene at sunrise, anglers silhouetted against golden horizon, multiple species visible in warm blue water',
  },

  // ── 特集 ──────────────────────────────────────────────────────────────
  {
    slug: 'spring-2026-madai-report',
    // 桜鯛シーズン完全分析・3〜5月データ保存版
    prompt: 'Single magnificent cherry-colored sea bream (桜鯛) in perfect profile against deep blue water, spawning season peak coloration, scientific specimen beauty',
  },
  {
    slug: 'gw-2026-special-report',
    // GW総括・混雑・釣果・コスパ
    prompt: 'Aerial view of crowded fishing facility during golden week holiday, many anglers on platforms, lively holiday atmosphere, blue ocean surrounding',
  },
  {
    slug: 'summer-bluefish-forecast',
    // 初夏青物シーズン予測・6月以降
    prompt: 'Large school of yellowtail and amberjack in warm turquoise summer water, powerful formation swimming together, summer abundance energy',
  },
  {
    slug: 'kansai-vs-kanto-spring',
    // 関西vs関東・春の比較レポート
    prompt: 'Split aerial view contrasting two fishing regions: left side shows Kansai bay coast with warmer water, right shows Kanto Pacific coast, spring season',
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
  console.log('\n✅ intelligence カバー画像生成完了');
}

run();
