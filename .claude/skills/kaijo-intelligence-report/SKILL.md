---
name: kaijo-intelligence-report
description: >-
  kaijo-angler の「intelligence」カテゴリ（週刊マガジン・月刊マガジン）記事を、最新ニュース・釣行レポ・釣具レビューの
  リサーチから記事執筆まで一気通貫で作るときに使う。リサーチ→`.data-set/magazine-data/`へのデータ格納→
  `src/content/blog/intelligence/`へのMDX執筆、という3フェーズを固定の収集方針・データ構造で回し、
  週次/月次で「一体感のある」データドリブン記事にする。「週刊マガジン作って」「月刊マガジン作って」「intelligence記事」
  「海上釣り堀の最新ニュースをリサーチして記事に」と言われたら参照する。
---

# kaijo-angler Intelligence（週刊・月刊マガジン）作成ルール

intelligence 記事は `src/content/blog/intelligence/` に置かれるが、Astro の collection としては
`postCollection`（`src/content/config.ts` の `fishing-facility`/`tactics`/`column` を除いた glob）に入る。
`category-rules.md` には intelligence の記載が**ない**ため、本ファイルが intelligence 系の唯一の正解。

作業は必ず次の3フェーズの順で行う。フェーズを飛ばして記事だけ書かない。

## フェーズ1：リサーチ（収集方針）

毎回同じ4本柱で集める。これを固定することで週/月をまたいだ記事に「一体感」が出る。

1. **ニュース・お知らせ** — 施設公式サイト・プレスリリース・地域ニュース（放流情報、休業/リニューアル、新規オープン等）
2. **釣行レポ・SNS/ブログ動向** — X・釣行ブログ・釣果報告サイトでの言及。魚種キーワードの出現頻度や急上昇ワードを拾う
3. **釣具レビュー・新製品情報** — メーカー公式・レビューサイトでの新製品/評判
4. **水温・気象データ** — 気象庁等の実データ（季節フェーズ判定の根拠にする）

- 実データの収集には `WebSearch` / `WebFetch` を使う。ハルシネーションを避けるため、根拠不明な数値・ランキングを断定調で書かない。出典URLは raw ログに残す。
- 対象期間は週刊＝直近7日、月刊＝対象月の全4〜5週分（既存の `W**` データを統合）。
- `.agents/skills/research-rules.md` にある魚種・タックル・地域データセット（`【DS】海上釣り堀_*.md`）も既存ナレッジとして併用する。

## フェーズ2：データ格納（`.data-set/magazine-data/`）

構造ルールは `.data-set/magazine-data/index.rules.md` が正。要点：

```
.data-set/magazine-data/
├── raw/{YYYY-MM-DD}-{weekly|monthly}-raw.txt   # 収集した生ログ（出典タグ付き）
└── {YYYY}/{MM}/{W**|summary}/
    ├── research-results.json                    # 構造化データ（intel.json という名前の回もある）
    └── intelligence-summary.md                   # なぜHot判定したか等のAIの思考メモ
```

- `raw/*.txt` は `[出典タグ] 内容` の形式で1行1件（例: `[Facility Update] 貞丸 本日の釣果: ...`, `[News] ...`, `[Gear Review] ...`）。実際に検索で拾った内容のみを書く。
- `research-results.json` の基本スキーマ（週次の例、`2026/04/W1/intel.json` 参照）:
  ```json
  {
    "period": { "start": "YYYY-MM-DD", "end": "YYYY-MM-DD" },
    "area_data": [
      { "id": "wakayama", "score": 100, "top_fish": "マダイ", "volume": 85, "facility_links": ["saikazaki-turibori"] }
    ],
    "hot_keywords": ["..."],
    "advice_summary": { "title": "...", "description": "..." },
    "news": [{ "source_url": "...", "summary": "..." }],
    "gear_reviews": [{ "product": "...", "source_url": "...", "summary": "..." }]
  }
  ```
  `news` / `gear_reviews` は本フローで新たに拾う実データ用に追加した項目（既存 `intel.json` にはまだ無いが、実ニュース・実レビューを扱うなら必須で入れる）。
- 月次は `summary/research-results.json` にその月の `W**` を統合（`2026/03/summary/research-results.json` の `monthly_mvp` / `average_activity` / `total_mentions` 形式を踏襲）。
- 各JSONに `timestamp` と `project_id: "kaijo-angler"` を入れる（月次は既存例参照）。
- ディレクトリの週番号表記は `W1`/`W13` のように**大文字W＋通番**（ISO週番号 or プロジェクト内通番）。

## フェーズ3：記事執筆（`src/content/blog/intelligence/`）

### パス・命名

- 週刊: `src/content/blog/intelligence/{YYYY-MM}-w{NN}/index.mdx`（フォルダ名は**小文字w**、その月の何本目の週刊記事かの通番。data-set側のISO週番号とは別物なので混同しない）
- 月刊: `src/content/blog/intelligence/{YYYY-MM}-summary/index.mdx`

### frontmatter テンプレート

```yaml
---
title: "【海上釣り堀週報】{年}年{月}月第{N}週：{メインテーマ}"
category: "Intelligence"
publishDate: "YYYY-MM-DD"
image: ~/assets/images/intelligence-default.png
description: "{200字前後。今週/今月の要点とユーザーメリット}"
tags: ["週刊マガジン", "ヒートマップ", "..."]   # 月刊は "月刊マガジン"
intelligence:
  week: "2026-W26"        # 週刊のみ。ISO週表記
  top_fish: ["カンパチ", "ブリ", "マダイ"]
  hot_area: "mie"          # 都道府県スラッグ
  # 月刊は week の代わりに month: "2026-06" / top_facilities: [...] / target_fish: [...]
---
```

- `image` は intelligence カテゴリ共通の `~/assets/images/intelligence-default.png` を使い回す。記事ごとに新規画像生成しない（コスト最適化の既存方針、[[feedback_cover_image_reuse]] と同じ考え方）。
- `category` は必ず `"Intelligence"`（英語・先頭大文字）で固定。
- `intelligence:` オブジェクトは `postCollection` の zod スキーマに列挙されていないフィールドだが、`z.object()` は未知キーを黙って無視するだけなのでビルドは通る。ただし将来 `.strict()` 化される可能性があるため、フィールド名は既存記事（`2026-06-w04`, `2026-06-summary`）と完全に揃える。

### 本文構成（既存記事のセクション順を踏襲）

1. `import FishingHeatmap from '~/components/widgets/FishingHeatmap.astro';` と `import TackleCard from '~/components/common/TackleCard.astro';`
2. `<FishingHeatmap title="..." subtitle="..." weights={{ "facility-slug": 9.6, ... }} />` — `weights` の施設slugは `src/content/blog/fishing-facility/**` に実在するものだけを使う
3. `## 📈 今週/今月のトレンド・インサイト` — フェーズ1で集めた実データに基づくキーワード・ランキング。表や箇条書き。数値の裏取りができないものは断定を避ける
4. `## 🎣 釣行計画アドバイス` or `## 🔮 来月/来週の予測` — 実データ＋既存タクティクスDSを根拠に
5. `## 📊 総括データ`（月刊）or 該当セクション
6. `## 🐚 おすすめ攻略アイテム` — `<TackleCard id="..." />`（フェーズ1の釣具レビューで実在確認した商品、または既存 `src/content/affiliates/tackle/*.json` の id）
7. 強調は `**bold**` ではなく `<strong>` タグ（[[kaijo_ui_components]] 系ルールと同じ、プロジェクト全体方針）
8. 締めに `> [!NOTE]` または `> [!IMPORTANT]` の一言アドバイス

## チェックリスト

- [ ] フェーズ1のリサーチで出典URLをraw ログに残したか（数値の裏取り不可なものを断定していないか）
- [ ] `.data-set/magazine-data/{YYYY}/{MM}/{W**|summary}/` に `research-results.json` と `intelligence-summary.md` を保存したか
- [ ] `FishingHeatmap` の `weights` に使った施設slugが `fishing-facility/**` に実在するか
- [ ] `TackleCard` の `id` が `src/content/affiliates/**` に実在するか（存在しないと本番で赤い警告ボックスが出る）
- [ ] `image` は使い回しの `intelligence-default.png` のままか（記事ごとの新規画像生成はしない）
- [ ] `category: "Intelligence"` と `intelligence:` フロントマターのキー名が既存記事と揃っているか
- [ ] 強調表現に `**` ではなく `<strong>` を使っているか
- [ ] 週刊フォルダ名 `w{NN}`（小文字・月内通番）と月刊フォルダ名 `-summary` になっているか
