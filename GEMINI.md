# 海上アングラー（kaijo-angler）の全体ルール

## 記事のカラー（特色）
全国の情報を扱うので、海上釣り堀サイトとして情報量は日本一だけでなく、日本の海上釣り堀＋観光面での知識では世界一のグローバルサイトを目指している。

## category-rule
.agents\skills\category-rules.md

## 釣り堀データ・地域データ
.data-set

## 画像生成ルール
- 画像生成には内部の画像生成ツールではなく、APIスクリプトを優先的に使用すること。
- 使用スクリプト: `scripts/image-tools/generate-image.js`
- プロンプト生成ルール: `.agents/skills/image-create.md` を厳守し、魚種の特定と適切なサイズ（16:9または6:4）を指定すること。

## ワークスペース構成と役割

- **src/content/blog/fishing-facility/**: メインコンテンツ（施設紹介記事）。地域・都道府県別に構造化。
- **scripts/**: プロジェクト管理・自動化用。
  - **image-tools/**: 画像生成スクリプト ([generate-image.js](file:///c:/Users/sasis/344dev/kaijo-angler/scripts/image-tools/generate-image.js)) と認証情報 ([.env](file:///c:/Users/sasis/344dev/kaijo-angler/scripts/image-tools/.env))。
  - **maintenance/**: メンテナンス用。
    - **facility-updates/**: 施設データのスクレイピング・更新ツール。
    - [check-missing-covers.mjs](file:///c:/Users/sasis/344dev/kaijo-angler/scripts/maintenance/check-missing-covers.mjs): カバー未設定記事の抽出。
    - [extract-tackle-data.mjs](file:///c:/Users/sasis/344dev/kaijo-angler/scripts/maintenance/extract-tackle-data.mjs): タックルデータの集計。
    - [generate-redirect-map.mjs](file:///c:/Users/sasis/344dev/kaijo-angler/scripts/maintenance/generate-redirect-map.mjs): リダイレクト用TS生成。
- **.data-set/**: 統合されたナレッジファイル、WPログなど。
- **.workspace/**: 下書き、タスク、およびレポート。
  - **_draft/**: 記事の下書き。
  - **TODO.md**: タスク管理ファイル。
  - **reports/**: 生成された集計レポート（リダイレクトマップ、タックル集計等）。
  - **logs/**: 各種実行ログ。
## 記事執筆・編集ルール (Editorial Standards)

### 強調表示（Emphasis）
- **【厳守】生産（Production）用コンテンツ**: `content/` フォルダ配下の清書ファイルでは、Markdownの強調（`**`）を一切使用せず、**HTMLの `<strong>` タグ**を直接記述すること。
    - 理由: レンダリングの安定化、およびSEO上のセマンティック強化のため。
    - 下書き（`_draft/`）段階では、作業効率優先で `**` を使用しても構いません。

### サムネイル・資産管理 (Assets)
- **インテリジェンス（Intelligence）カテゴリ**:
    - 週間・月間レポートには共通アセット `~/assets/images/intelligence-default.png` を使用し、生成コストを最適化する。
