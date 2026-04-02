import fs from 'fs';
import path from 'path';

/**
 * PHASE 3: MDX Generation
 * Standardizing structure with <strong> tags and Heatmap integration
 */

function generateMDX(analyzedPath) {
    const analyzed = JSON.parse(fs.readFileSync(analyzedPath, 'utf8'));
    const rawPath = analyzedPath.replace('analyzed-intelligence.json', 'raw-intelligence.json');
    const raw = JSON.parse(fs.readFileSync(rawPath, 'utf8'));

    console.log(`Generating MDX from: ${analyzedPath}...`);

    // Prepare heatmap weights
    const weights = {};
    raw.facility_rankings.forEach(f => {
        weights[f.slug] = f.score;
    });

    const dateStr = new Date().toISOString().split('T')[0];
    const isMonthly = raw.mode === 'monthly';
    const typeLabel = isMonthly ? "月間レポート" : "週間マガジン";

    const mdx = `---
publishDate: ${dateStr}
title: "${analyzed.title}"
description: "${analyzed.summary.substring(0, 100)}..."
excerpt: "${analyzed.summary}"
image: ~/assets/images/intelligence-cover.jpg
category: intelligence
tags:
  - 釣り場インテリジェンス
  - ${isMonthly ? "月間まとめ" : "週間報告"}
  - 爆釣速報
---

import FishingHeatmap from '~/components/widgets/FishingHeatmap.astro';
import BlogCard from '~/components/blog/BlogCard.astro';

## 📝 今週のサマリー

${analyzed.summary}

<FishingHeatmap 
  title="${typeLabel}：活性度ヒートマップ" 
  subtitle="リサーチデータから抽出した施設ごとの期待度評価"
  weights={${JSON.stringify(weights)}} 
/>

## 🐟 ターゲット魚種・コンディション

${analyzed.target_species.map(s => `### ${s.name}
${s.description}`).join('\n\n')}

## 🚀 注目キーワード

${analyzed.trending_keywords.map(k => `- **${k.keyword}** (Relevance: ${Math.round(k.score * 100)}%)`).join('\n')}

<div class="bg-blue-50 dark:bg-slate-800 p-6 rounded-xl border border-blue-100 dark:border-slate-700 my-8">
  <h3 class="text-blue-900 dark:text-blue-200 mt-0">💡 攻略アドバイス</h3>
  ${analyzed.strategy_advice}
</div>

## 🎯 今週のおすすめ施設

${analyzed.facility_links.map(f => `- **${f.slug}**：${f.comment}`).join('\n')}

---

**⚠️ 免責事項**
本レポートはインターネット上の公開情報および独自のアルゴリズムに基づいて生成された予測値です。実際の釣果を保証するものではありません。釣行の際は必ず各施設の公式サイトを確認してください。
`;

    // Save to blog content
    const year = new Date().getFullYear();
    const month = String(new Date().getMonth() + 1).padStart(2, '0');
    let weekPart = "";

    if (!isMonthly) {
        const d = new Date();
        const firstDayOfMonth = new Date(d.getFullYear(), d.getMonth(), 1);
        const diff = d.getDate() + firstDayOfMonth.getDay();
        weekPart = `w${Math.ceil(diff / 7)}`;
    } else {
        weekPart = "summary";
    }

    const finalSlug = `${year}-${month}-${weekPart}`;
    const outputDir = path.resolve(`src/content/blog/intelligence/${finalSlug}`);
    if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

    fs.writeFileSync(path.join(outputDir, 'index.mdx'), mdx);
    console.log(`Generated MDX article: ${outputDir}/index.mdx`);
}

const analyzedPath = process.argv[2];
if (analyzedPath) generateMDX(analyzedPath);
