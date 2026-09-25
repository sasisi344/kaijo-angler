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

- `src/content/blog/tactics/fish-strategy/` の各サブ記事（intermediate/advanced/theory/gourmet/strategy）は 130 非空行以上を維持する
- 魚種 index.mdx は 150〜200 総行を目安にする
- frontmatter は `title`, `description`, `publishDate`, `category`, `tags`, `image`, `lastmod` を使用する
- `slug:` フィールドは不要（Astro Content Layer が自動生成）
- `created:` フィールドはスキーマにないため使用しない

## import パス

MDX ファイルからコンポーネントを import する場合は `~/` エイリアスを使用する（`@/` は使用不可）。

```ts
import TackleCard from "~/components/common/TackleCard.astro";
```

## タスク管理（GitHub Project 統合、2026-09-25〜）

ブログ横断の中期〜長期タスクは GitHub Project で一元管理: https://github.com/users/sasisi344/projects/1 （「ブログ運営タスク」）。カンバン列は `Backlog → Todo → In Progress → Done`。短期〜中期の目標タスクは Start date / End date を設定し、ロードマップビューで期間の進捗を管理する。新規タスクは `gh issue create --repo sasisi344/kaijo-angler` でIssue化 → `gh project item-add 1 --owner sasisi344 --url <issue-url>` でボードに追加。詳細は `344ob/07_workspace/.agents/blog-registry.md` 参照。日々の細かい実行タスクは `.workspace/.task/` が引き続き正本。
