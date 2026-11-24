# kaijo-angler — Claude Code プロジェクトルール

## 記事の強調（太字）表記ルール

**記事本文（MDX/Markdown）内の強調は `<strong>` タグを使用する。**

- `**太字**`（Markdown bold）は使用しない
- `<strong>強調テキスト</strong>` を使用する
- テーブルのセル内も同様に `<strong>` を使用する

理由：Markdown の bold 記法（`**`）は日本語テキストの一部文字（半角・全角混在）で意図せず解除されるケースがあり、`<strong>` タグの方が確実にレンダリングされる。

### 対象ファイル

`src/content/blog/` 配下の全 `.mdx` ファイルが対象。

### 例

```mdx
<!-- NG -->
これは**重要な情報**です。

<!-- OK -->
これは<strong>重要な情報</strong>です。
```

---

## コンテンツ作成ガイドライン

- **魚種に関わる記事（魚種攻略・施設・ランキング・タックル・マガジン）は、本文を書く前に `kaijo-fish-knowledge` スキルを通し、`.data-set/fish-knowledge/{slug}.md` を最優先ナレッジとして読む**。ナレッジに無い事実・一人称の体験談・出所のない数値は書かない
- **数値（料金・営業時間・休み・アクセスの所要時間）の正本は、施設紹介の単独記事**（2026-11-15 ユーザー決定）。まとめ・ランキング・旅行記事の数値が施設記事と食い違ったら施設記事に合わせる。施設記事が公式と違うときは、先に施設記事を公式に合わせて直し（`verified_at` を更新）、そのあとでまとめ側を直す。まとめ側だけを直さない
- タイトル・見出し・description に「【2026年最新版】」のような年の「最新」表記を付けない（2026-11-15 ユーザー決定。年の終盤に古く見えるため）
- `src/content/blog/tactics/fish-strategy/` の各サブ記事（intermediate/advanced/theory/gourmet/strategy）は 130 非空行以上を維持する
- 魚種 index.mdx は 150〜200 総行を目安にする
- **1記事に統合する魚種**（2026-11-17 ユーザー決定。`.workspace/_inbox/rewrite-rebuild-order.md` RB-20〜32）: ブリ・ヒラマサ・クエ・メジナ・イシダイ・スズキ・クロダイ。統合後はサブ記事を持たず、index の行数に上限を設けない。統合が済むまでは上の2行が当てはまる
- カワハギは魚種別攻略の記事を持たない（2026-11-17 ユーザー決定。メインの対象魚になりにくいため）。施設の frontmatter の対象魚には入れてよい
- frontmatter は `title`, `description`, `publishDate`, `category`, `tags`, `image`, `lastmod` を使用する
- `slug:` フィールドは不要（Astro Content Layer が自動生成）
- `created:` フィールドはスキーマにないため使用しない
- **`src/content/config.ts`（スキーマ）は、ユーザーの確認なしに変更しない**。1記事で複数店舗を扱う場合も、スキーマは増やさず `google_maps` / `facility_details` を1組に統合する（詳細は `kaijo-content-schema` スキル）

## 休業情報だけの deploy（2026-11-24 ユーザーの包括承認）

ルート `CLAUDE.md` の「deploy が走る変更は、main に入れる前に承認をもらう」の例外。次の範囲だけの変更は、承認の表を出さずに main へ入れてよい。

- <strong>範囲</strong>: 公式の告知（URL あり）に基づく、施設記事の `seasonal_closures`・`verified_at`・`status` の休止と再開、本文の休業の記述、同じ施設が出るまとめ・ランキング・トップの追随
- <strong>範囲の外（今までどおり承認）</strong>: 閉業、記事の削除と301、順位の入れ替え、料金・営業時間の変更、公式の告知がない情報
- <strong>条件</strong>: ビルド成功、push は1日1回まで、公開後に本番の `/api/facilities.json` を確かめて事後に報告する
- 電話確認はしない。公式に告知・記載がない項目は現状のまま置き、「未確認」の表記を新しく足さない
- 手順と確認の頻度（通年で月1回ほか）: `.workspace/_inbox/2026-11-21-KA-PORTAL-09-closure-ops.md`

## import パス

MDX ファイルからコンポーネントを import する場合は `~/` エイリアスを使用する（`@/` は使用不可）。

```ts
import TackleCard from "~/components/common/TackleCard.astro";
```

## 主なパス

- アクセスデータ: 正本は `.workspace/access-data/api/`。w42 までの週次は `.workspace/.task/access-data/`（ルールは同フォルダの `CLAUDE.md`）
- 画像生成: `scripts/image-tools/generate-image.js`（手順は `.agents/skills/image-create.md`。記事にプロンプトを書いた段階で実行してよい。2026-11-06 ユーザー決定）
- 旧URLのリダイレクト: `src/config/blog-legacy-redirects.ts`

## タスク管理（GitHub Project 統合、2026-09-25〜）

ブログ横断の中期〜長期タスクは GitHub Project で一元管理: https://github.com/users/sasisi344/projects/1 （「ブログ運営タスク」）。カンバン列は `Backlog → Todo → In Progress → Done`。短期〜中期の目標タスクは Start date / End date を設定し、ロードマップビューで期間の進捗を管理する。新規タスクは `gh issue create --repo sasisi344/kaijo-angler` でIssue化 → `gh project item-add 1 --owner sasisi344 --url <issue-url>` でボードに追加。詳細は `344ob/344ob/07_workspace/.agents/blog-registry.md` 参照。日々の細かい実行タスクは `.workspace/.task/` が引き続き正本。
