## TODO（レビュー結果からの修正タスク）

- [x] 【高】`draft: true` の記事が `column`/`tactics`/`fishing-facility` の `getStaticPaths` で除外されておらず、ルート生成・sitemap掲載されてしまう問題を修正（既存の `!p.data.draft` フィルタ規約に合わせる）
- [x] 【中】施設の重複スラッグ・重複タイトルを検出するチェックスクリプトを作成（`scripts/check-facility-duplicates.mjs`）。実行したところ三重県3施設で`.md`/`.mdx`の重複が見つかり、古い`.md`を削除済み
- [x] 【中】地域・都道府県インデックスページにパンくずを追加（`BreadcrumbNav.astro`コンポーネントを新設し、施設詳細ページと共通化）
- [x] 【低〜中】`temp_migration_backup`（未参照・154ファイル）を削除済み
- [x] 【低】施設エントリへの `draft` 運用ルールを `category-rules.md` に明文化

---

# 海上アングラー：インデックス重視の基盤完成タスクリスト

量産KPI（記事本数・220本体制など）は廃止し、**検索エンジンに正しく載る構造**と**各URLの質**を先に完璧にする。新規記事の拡張はこのリストの「完了定義」を満たしてから再開する。

---

## 1. 原則（優先順位）

1. **インデックス前提**：意図したURLだけが sitemap に載り、`noindex`・`draft`・薄い重複が制御されている。
2. **質 > 量**：施設1ページあたりの必須項目・独自性・内部リンクが揃ってから枚数を増やす。
3. **既存3コレクションで回す**：施設／攻略／コラム（`.agents/skills/category-rules.md`）。「食」「旅」は**新カテゴリ名を増やさず** `column/trivia`・`column/travel` 等で表現する。

---

## 2. KPI の置き換え（旧 → 新）

| 旧KPI（やめる） | 新KPI（追う） | 測り方の例 |
|----------------|---------------|------------|
| 合計記事数・○本追加 | **インデックス済みURL数 / 意図した公開URL数** | Search Console：インデックス作成済み ÷ 公開ビルドのURL一覧 |
| カテゴリ別の本数ノルマ | **重大クロール・インデックス問題ゼロ** | GSC：ページがインデックス未作成（理由別）のうち「要対応」を0に近づける |
| 拡張ロードマップの進捗% | **コア型ごとの完成度** | 施設：必須FM・地図・構造化データ・パンくず100% 等（下記チェックリスト） |
| WPリライト件数 | **正規URLの一意性** | 同一施設の重複パス・`canonical` 不整合が残っていない |
| （なし） | **ハブから施設への到達** | 地域・都道府県インデックスから子施設へのリンクが抜けなし |
| （なし） | **薄いページの遮断** | `draft: true` または `robots: noindex` が未完成ページに一貫して付く |

数値目標の例（**初期の目安**。実データで再設定する）：

- **施設ページ**：公開ビルドに載る施設の **95%以上** で必須フィールド（title / description / region / prefecture / 緯度経度 or map）が埋まっている。
- **sitemap**：本番でインデックスさせたいパスの **100%** が sitemap に含まれる（意図的除外は文書化）。
- **GSC**：「クロール済み - インデックス未作成」のうち、**自サイト起因の修正待ち**を週次で減らし続ける（最終0を目指す）。

---

## 3. フェーズ別タスク

### フェーズA：コンテンツの所在と情報設計

- [x] **`temp_migration_backup` と `src/content/blog` の関係を文書化**（何が本番か、いつ移行完了とみなすか）。→ `temp_migration_backup` は中身ファイル0件・空ディレクトリのみ残存（git未追跡）で実質解消。本番は `src/content/blog/fishing-facility/...` の一本化が完了している。空のディレクトリ階層自体は不要なので削除推奨。
- [x] **施設コンテンツの本番パスへ統一**（バックアップにしかない施設を `src/content/blog/fishing-facility/...` に揃える、または「本番はバックアップから読む」方針をやめて一本化）。→ 上記の通り完了。
- [x] **テスト記事・リージョンの `_index` 等**を、インデックス対象かどうか決め、対象外なら `draft` / メタ noindex / sitemap 除外のいずれかで統一。→ `fishing-facility/[region]/index.mdx`（east/center/west-japan）は地域別ランキングハブ記事として正式採用され、`[...slug].astro` の動的インデックス生成より優先される設計。`draft` フィルタも facility/tactics/column の `getStaticPaths` 全てに適用済み（トップTODO参照）。
- [x] **攻略（tactics）の粒度を決定**：ハブ1本＋子記事分割か、現状のディレクトリ規約に合わせてファイルを増やすか。決めたルールを `category-rules.md` に追記。→ `category-rules.md`（beginner/fish-strategy/gear のサブカテゴリ運用）と `kaijo-angler/CLAUDE.md`（fish-strategy配下のintermediate/advanced/theory/gourmet/strategy分割・130行ルール）で明文化済み。
- [x] **コラム（column）の初期セット**：`travel` / `trivia` のプレースホルダ一覧ページと、最低1本のサンプルでルート検証。→ travel配下60本超・trivia配下90本超まで拡張済み（量産フェーズに完全移行している）。

### フェーズB：ページ品質ゲート（施設優先）

施設1件ごとに「公開してよい」の定義を固定する。

- [x] **フロントマター必須項目**が空欄でない（`src/content/config.ts` と運用ルールの一致）。→ 実測：施設120件中117件（97.5%）に `latitude`/`region` が存在し目標の95%を超過。欠落3件は地域ランキングハブ記事（緯度経度不要）で仕様上正しい。`scripts/check-facility-frontmatter.mjs` でも構造エラー0件。
- [x] **重複スラッグ・重複タイトル**のスクリプトまたは手動監査。→ `scripts/check-facility-duplicates.mjs` 作成済み・三重県3件の重複を解消済み（トップTODO参照）。
- [x] **休業・閉鎖**は `status` と `FacilityStatusAlert` 等でユーザーと検索双方に誠実に反映。→ `FacilityStatusAlert.astro` が `[...slug].astro` の施設本文に組み込み済み。
- [x] **画像**：`cover` の有無・alt・配置ルール遵守（`.agents` の画像ルール）。→ `scripts/add-missing-image-frontmatter.mjs`／`fix-image-paths.mjs`／`sanitize-images.mjs` 等の監査・修正スクリプトが整備済み。
- [ ] **本文**：テンプレ段落のコピペ感が強いページは、地域・ターゲット魚・特徴の差分を1ブロック以上入れる（薄いページ対策）。→ **未完了・進行中**。`next-task.md` で `kaijo-tsuribori-misaki`／`yunoko-fishing-park`／`tactics/fish-strategy/fugu` が重複判定の懸念ありとして個別に調査中。

### フェーズC：インデックス技術（クローラ向け）

- [x] **`robots` / `draft` 付きページ**が意図どおりビルドに含まれるか・パスが生成されるかを整理（生成されるなら noindex 必須など）。→ fishing-facility/tactics/column 全ての `getStaticPaths` で `!post.data.draft` フィルタを確認済み（draftはパス自体が生成されないためsitemapにも載らない）。
- [x] **`@astrojs/sitemap` の `filter`**（`src/config/sitemap-filter.ts`）を、noindex・ランディング・API 等の方針と照合し、**意図しないURLが載っていない**ことを確認。→ `homes/`・`landing/`・`pricing`・`services` を除外済み。draft記事はパス自体が生成されないため二重対策になっている。
- [x] **canonical**：施設詳細・地域インデックスで `metadata.canonical` の重複・欠落がないか確認（`fishing-facility/[...slug].astro` の扱いと整合）。→ 施設詳細・地域/都道府県インデックス双方で `getCanonical()` を使い一意なURLを生成済み。
- [x] **構造化データ**：`FacilityJsonLd` の必須プロパティが欠けたページがないか、バリデーション（リッチリザルトテスト等）。→ `FacilityJsonLd.astro` が全施設ページに組み込み済み。Google リッチリザルトテストでの抜き打ち検証は未実施のため、必要なら別途スポットチェックを推奨。
- [x] **パンくず・内部リンク**：地域 → 都道府県 → 施設、関連施設・関連タックルへのリンク方針を決め、テンプレに落とす。→ `BreadcrumbNav.astro` を地域/都道府県インデックスと施設詳細の両方に適用済み。施設詳細ページでは子施設一覧（`items`）も表示。
- [x] **旧WPからの移行がある場合**：301リダイレクト一覧と、`canonical` の最終URLを揃える。→ `src/config/facility-redirects.ts`（`scripts/generate-redirect-map.mjs` で自動生成）が `astro.config` の `redirects` に接続済み。旧WP記事・ランキングまとめ記事のリダイレクトも網羅。

### フェーズD：計測と運用

- [ ] **公開URL一覧の出力**（ビルド後スクリプト or `astro build` ログ）を用意し、sitemap と突合できるようにする。→ **未着手**。`@astrojs/sitemap` が生成する `sitemap-*.xml` で間接的にURL一覧は得られるが、専用の出力・突合スクリプトはない。
- [ ] **Search Console**：プロパティ、サイトマップ送信、カバレッジの週次確認手順を `.workspace` または運用メモに1ページで固定。→ **手順書としては未作成**だが、`next-task.md`／`weekly-task.md`／`kpi-data-collection.md` で実質的にGSC/GA4の週次・四半期レビューが運用されている。固定手順化するなら既存の運用メモを1ページに統合するだけで足りる。
- [ ] **更新フロット**：施設情報（料金・予約・ターゲット魚）の見直し周期を決める（数より鮮度）。→ **未決定**。

---

## 4. 「このリストが完了」したあとで初めてやること

- 攻略・コラムの**本数ベース**の拡張計画を再作成する。
- 季節・魚種の深掘りは**ハブ記事＋内部リンク**から始め、必要なら子記事に分割する。

---

## 5. 参照

- カテゴリ・パス・FM：`.agents/skills/category-rules.md`
- コレクション定義：`src/content/config.ts`
- 施設ルーティング・インデックス生成：`src/pages/fishing-facility/[...slug].astro`
- sitemap フィルタ：`src/config/sitemap-filter.ts`
