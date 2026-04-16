# サイト構成・SEO・コーディング改善タスク

`kaijo-angler` の現状レビューに基づく作業一覧。優先度は目安。

---

## 優先度：高

### SEO / 設定

- [x] **`src/config.yaml` のメタ整合**
  - `metadata.openGraph.site_name` を `AstroWind` から **海上アングラー**（または正式サイト名）に変更
  - `twitter.handle` / `twitter.site` を実運用アカウントに合わせる（未使用なら削除またはコメント方針を決める）

- [x] **釣り場詳細ページの OG / メタ強化**（`src/pages/fishing-facility/[...slug].astro`）
  - 施設ごとに `openGraph`（特に **画像**）を渡す（ブログ記事 `src/pages/[...blog]/index.astro` と同様の方針）
  - 必要なら `canonical` をフロントマターと揃える（記事側の `merge` パターンを参考）

- [x] **テンプレート由来ページのインデックス制御**
  - `src/pages/homes/*`・`landing/*`・デモ色の強い `pricing` / `services` など、本番で不要なら **`metadata.robots` で noindex** またはルート削除
  - ナビ・サイトマップからデモURLへの導線を切る（残す場合は理由を明記）

---

## 優先度：中

### SEO

- [x] **エリア・県インデックスのタイトル・説明**（同 `[...slug].astro` の `type === 'index'`）
  - `title` から生の slug（例: `east-japan/hokkaido`）をやめ、**都道府県名・エリア名の日本語表記**にする
  - 各インデックス用の **`description`**（meta）を追加

- [x] **釣り場トップ**（`src/pages/fishing-facility/index.astro`）
  - 必要ならページ専用の **`description`** を `metadata` に明示（現状はサイトデフォルトに依存）

- [x] **構造化データ（JSON-LD）**
  - 施設ページに **LocalBusiness / TouristAttraction** 等を検討（フロントマターにある住所・座標・営業時間を流し込む）
  - パンくずを主要テンプレートに載せる場合は **BreadcrumbList** スキーマとセットで検討

- [x] **サイトマップの調整**（`astro.config.ts` の `@astrojs/sitemap`）
  - noindex にしたURL・削除したURLと **二重にならないよう** `filter` 等で整理

### パフォーマンス・品質

- [x] **画像の最適化**
  - 施設カード等の `<img>` を **`astro:assets` の `<Image />`** や `getImage` に置き換え可能な箇所から対応
  - 適宜 `width` / `height`、`loading="lazy"`、`alt` の見直し

- [x] **都道府県リンクの動的化**（`fishing-facility/[...slug].astro` 内の固定 `<ul>`）
  - `getCollection('fishing-facility')` から **実在する県スラッグ** を生成し、ハードコードを削減（リンク切れ防止）

---

## 優先度：低

### コンテンツ配信・計測

- [x] **RSS の範囲**（`src/pages/rss.xml.ts`）
  - ブログのみでよいか、釣り場更新を **別フィード** で出すか方針決定

- [x] **View Transitions**（`src/layouts/Layout.astro` の `ClientRouter`）
  - アナリティクス・広告・スクロール挙動に問題がないか確認（問題あれば無効化や条件付きを検討）

### リファクタ

- [x] **`getCollection('fishing-facility')` の呼び出し集約**
  - 同一ビルドパス内で複数回取っている箇所を **1回にまとめられるか** 検討

- [x] **インライン `<script>` の分離**（`fishing-facility/[...slug].astro`）
  - フィルタ・「もっと見る」ロジックを **外部スクリプト or クライアントコンポーネント** に切り出し

- [x] **`Metadata.astro` のマージ順**
  - 新規ページ追加時に **意図しない noindex** が付かないか、デフォルト層をドキュメント化またはテスト

---

## 参照ファイル（主）

| 領域 | パス |
|------|------|
| サイト・OG・Twitter デフォルト | `src/config.yaml` |
| 共通メタ | `src/components/common/Metadata.astro` |
| 釣り場ルート | `src/pages/fishing-facility/[...slug].astro`, `index.astro` |
| ブログ記事メタ例 | `src/pages/[...blog]/index.astro` |
| Astro 設定・sitemap | `astro.config.ts` |
| robots | `public/robots.txt`（ビルド後の扱いは vendor 統合も確認） |

---

## メモ

- コミットは依頼時のみ（プロジェクト規約）。
- 本タスクはレビュー時点のコードベースに基づく。実装後はビルド・主要URLのメタタグ実表示を確認すること。