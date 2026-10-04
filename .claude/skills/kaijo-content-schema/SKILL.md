---
name: kaijo-content-schema
description: >-
  kaijo-angler の記事 frontmatter と `src/content/config.ts`（Zod スキーマ）の扱いを決めるときに使う。
  施設記事（fishing-facility）の google_maps / facility_details の書き方、1記事で複数店舗を扱うときの記録方法、
  config.ts にフィールドを追加・変更したいときの手順と承認ルールを定める。「スキーマを変えたい」
  「frontmatter に項目を足したい」「2店舗を1記事で書く」「config.ts を触る」と言われたら先に参照する。
---

# kaijo-angler コンテンツスキーマ運用ルール

`src/content/config.ts` が frontmatter の正本。記事側の書き方と、スキーマを変える側の手順を分けて定める。

## 1. コレクション一覧

| コレクション | 対象 | 備考 |
|---|---|---|
| `post` | `src/content/blog/` のうち下記3つ以外（intelligence など） | |
| `fishing-facility` | `src/content/blog/fishing-facility/**` | 施設記事。`google_maps` / `facility_details` を持つ |
| `tactics` | `src/content/blog/tactics/**` | |
| `column` | `src/content/blog/column/**` | |
| `affiliates` | `src/content/affiliates/**/*.{json,yaml}` | AffiliateCard の id の実体 |

## 2. スキーマの性質（落とし穴）

- `z.object` は**未知のキーを黙って捨てる**。typo や未定義キー（`created:` など）を書いてもビルドは通るが、値はどこにも届かない。**ビルドが通る＝使われる、ではない**
- 施設記事の `slug:` は URL を決めるため**必須**（CLAUDE.md の「slug 不要」は施設記事には当てはまらない）
- 施設記事の frontmatter の雛形は `.agents/skills/frontmatter.md`

## 3. 施設記事のフィールドと消費側

`google_maps` / `facility_details` は**1記事につき1施設分の単一値**として読まれる。

| フィールド | 読んでいる場所 |
|---|---|
| `google_maps.address` / `phone` / `latitude` / `longitude` | `src/pages/fishing-facility/[...slug].astro`（構造化データ・地図） |
| `google_maps.latitude` / `longitude`、`facility_details.amenities.parking`、`prefecture` | `src/components/widgets/GoThere.astro` |
| `google_maps.business_hours`、`facility_details.average_price` / `target_fish` / `amenities.rental_tackle` / `toilet` | 同上 `[...slug].astro` の一覧カードとフィルタ |
| `google_maps.latitude` / `longitude` / `rating`、`target_fish`、`rental_tackle`、`toilet` | `src/pages/api/facilities.json.ts` |

## 4. 1記事で複数店舗を扱うとき

スキーマは増やさず、**1記事=1組の `google_maps` / `facility_details`** に統合する（横浜釣り堀王国で採用）。

- `address` / `phone` / `latitude` / `longitude` / `map_url` / `parking`: **主店舗（本店）の値**。構造化データ・GoThere・API が1組しか読めないため
- `business_hours` / `average_price`: 店舗名を付けて併記する（例: `本店 10:00〜18:00／三日月店 10:00〜18:50`）
- `target_fish`: 全店舗の魚種の和集合（一覧のフィルタに全店の魚種で引っかかるようにする）
- 副店舗の住所・電話・地図リンク・料金表は**本文の比較表**に書く。frontmatter には入れない
- 避けること: `branches` のような配列で副店舗を frontmatter に持つ。消費側が読まないため、書いても表示にも API にも出ない

## 5. config.ts を変更する手順

`config.ts` の変更は記事外のコード変更。**ユーザーに確認してから**行う。先にスキーマを変えて事後報告にしない。

1. **本当に必要か確認**: 既存フィールドの併記・本文への記載で足りないか。足りるなら変更しない
2. **消費側を確認**: 追加するフィールドを読むコード（上記3節のファイル）があるか。読む側を作らないなら足さない
3. **任意項目で追加**: `.optional()` にして既存記事を壊さない。必須化は全記事の修正が前提
4. **検証**: `pnpm astro sync` を実行し、`node scripts/check-facility-frontmatter.mjs` で既存の施設記事に影響が出ていないか見る
5. **ドキュメント更新**: `.agents/skills/frontmatter.md`（雛形）と本ファイルの3節の表を更新する
6. 変更を戻すときは `git checkout -- src/content/config.ts`（他の未コミット変更がないことを確認してから）

## 6. 関連メモ

- `.agents/skills/frontmatter.md` 内の `node scripts/update-facility-data.mjs` は現存しない。実体は `scripts/maintenance/facility-updates/update-facility-{east,center,west}.mjs`（`.env` の `MAPS_API_KEY` が必要。実行前に内容を読む）
