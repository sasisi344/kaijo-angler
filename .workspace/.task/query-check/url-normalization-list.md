# 分析レポート：GSCデータに基づくURL正規化が必要なページリスト (2026-04-08)

Google Search Consoleのクエリ分析に基づき、検索結果にスラッシュ（/）の有無で重複して表示され、SEO評価が分散している可能性が高いURLを特定しました。

## 1. 重複が確認されたURLペア

以下のURLは、スラッシュあり・なしの両方でインプレッションを分け合っています。

| 施設名・ページ名 | スラッシュありURL (正規) | スラッシュなしURL (重複) |
| :--- | :--- | :--- |
| 海釣り公園みかた | `.../blog/sea-fishing-park-mikata/` | `.../blog/sea-fishing-park-mikata` |
| 釣ってみんで釣り堀 | `.../blog/family-tsuribori-tsutteminde/` | `.../blog/family-tsuribori-tsutteminde` |

## 2. 派生型・アンカー付き重複

これらは「目次（#）」へのリンクが直接検索結果に出ているため、評価がさらに分散しています。

| 施設名・ページ名 | URL | 状態 |
| :--- | :--- | :--- |
| 関西 海上釣り堀 ランキング | `.../matomekiji-kansai/` | `#index_id0` 等、多数のアンカーURLが独自に露出 |
| 脇田海釣り桟橋 | `.../wakitaturisanbashi-kyusyu/` | `#index_id0` 等、アンカーURLが露出 |
| 海上釣堀湯浅 | `.../yuasa-wakayama/` | `#index_id0` 等、アンカーURLが露出 |

## 3. 推奨アクション

1.  **Astro設定の確認 (`astro.config.ts`)**:
    *   `trailingSlash: 'always'` が設定されているか確認。
    *   ビルド後の出力がスラッシュありに統一されるようにする。

2.  **Canonicalタグの徹底**:
    *   各ページの `<head>` 内に `<link rel="canonical" href="https://kaijo-fishing.com/..." />` が正しく出力されているか確認。特に末尾スラッシュを含めた正規URLを指すようにする。

3.  **サーバーサイドでの統一 (301リダイレクト)**:
    *   `.htaccess` または `edge function` 等を使用し、スラッシュなしURLへのアクセスをスラッシュありへ301リダイレクトする。

4.  **目次IDの固定化**:
    *   `#index_id0` のような動的なIDを、`#feature` や `#price` などの固定IDに変更し、検索結果の見た目を安定させる。

---
作成者: Antigravity / 日時: 2026-04-08
