# Astroコーディング改善タスク

`kaijo-angler` のAstro固有コードレビューに基づく作業一覧。優先度は目安。

---

## 優先度：高

- [x] **`getStaticPaths` から `allFacilityPosts` props を除去**
  - 対象: `src/pages/fishing-facility/[...slug].astro`
  - 全施設データを全ページの props に含めているため、施設数N件で配列参照がN倍メモリに乗る
  - props から `allFacilityPosts` を削除し、ページ本体で `getFishingFacilityEntries()` を呼び直す（キャッシュが効くので重複コストなし）

- [x] **`ensureDate` を共通ユーティリティに集約**
  - 対象: `src/pages/fishing-facility/[...slug].astro`、`src/pages/fishing-facility/index.astro`
  - 同じ関数が型なし `(d: any)` で2ファイルに重複定義されている
  - `src/utils/date-helpers.ts` に `ensureDate(d: Date | string | unknown): Date` として切り出す

---

## 優先度：中

- [x] **`Astro.site` フォールバックを呼び出し側に追加**
  - 対象: `src/pages/fishing-facility/[...slug].astro:133-142`
  - `Astro.site` が `undefined` のとき JSON-LD の画像URLが無音で欠落する
  - `FacilityJsonLd.astro` 内のフォールバックパターン（`Astro.site ?? new URL(...)`）を呼び出し側にも適用する

- [x] **`FacilityPageListItem` 型を `Pick<>` で絞る**
  - 対象: `src/pages/fishing-facility/[...slug].astro:24-29`
  - `FFPost['data']` の全フィールドを継承しているが、実際に `items` マップで使うフィールドは限定的
  - `Pick<FFPost['data'], 'title' | 'description' | 'excerpt' | 'facility_details' | 'google_maps'>` に絞ることで型エラーを早期検出できる

- [x] **amenity 真値判定ロジックを共有ユーティリティ化**
  - 対象: `src/pages/fishing-facility/[...slug].astro`（テンプレート側）、`src/scripts/facility-parent-grid.ts`（クライアント側）
  - テンプレートでは `=== true || === 'true' || === 'あり' || !!val` と柔軟に判定しているが、スクリプト側は文字列比較のみ
  - `normalizeAmenityValue(val: unknown): boolean` として共有化し、テンプレート変更時の同期崩れを防ぐ

---

## 優先度：低

- [x] **script 初期化ガードのパターン統一**
  - 対象: `src/scripts/facility-parent-grid.ts`、`src/scripts/fishing-facility-top-load-more.ts`
  - 前者は DOM の `dataset` を使うガード、後者は `window.__kaijoAngler...` プロパティを使うガードで統一されていない
  - モジュールスコープの `let initialized = false` パターンに揃える

- [x] **日付フィールド取得を `getPrimaryDate()` に集約**
  - 対象: `[...slug].astro`、`index.astro`、`facilities-rss.xml.ts` など複数ファイル
  - `publishDate || date || updated || lastmod` という OR チェーンが各所に散在
  - `src/utils/date-helpers.ts`（上記 `ensureDate` と同じファイルでよい）に `getPrimaryDate(data)` として集約

- [x] **API エンドポイントの画像型キャストを `ImageMetadata` で型安全に**
  - 対象: `src/pages/api/facilities.json.ts:14-19`
  - `(image as { src: string }).src` という anonymous object キャストを `import type { ImageMetadata } from 'astro'` で置き換える

---

## 参照ファイル（主）

| 領域                           | パス                                                                                   |
| ------------------------------ | -------------------------------------------------------------------------------------- |
| 釣り場ルート（メイン）         | `src/pages/fishing-facility/[...slug].astro`                                           |
| 釣り場トップ                   | `src/pages/fishing-facility/index.astro`                                               |
| コレクション取得ユーティリティ | `src/utils/fishing-facility-collection.ts`                                             |
| エリアラベルユーティリティ     | `src/utils/fishing-facility-areas.ts`                                                  |
| クライアントスクリプト         | `src/scripts/facility-parent-grid.ts`、`src/scripts/fishing-facility-top-load-more.ts` |
| API エンドポイント             | `src/pages/api/facilities.json.ts`                                                     |
| コンテンツスキーマ             | `src/content/config.ts`                                                                |

---

## メモ

- コミットは依頼時のみ（プロジェクト規約）。
- 高優先の2件（`getStaticPaths` props 整理・`ensureDate` 集約）は独立しており、どちらから着手しても可。
- 低優先の `getPrimaryDate` は `ensureDate` と同じファイルにまとめると効率的。
