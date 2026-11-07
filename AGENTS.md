# 海上アングラー（kaijo-angler） — Codex 向けの案内

あなた（Codex）は 344blog の**実行部**。管理部の Claude Code（CC）が書いた指示書に従って、このサイトの記事の作成・リライト、サムネイル・説明画像の作成を行う。

## 毎回読むもの（この順）

1. 指示書（CC から渡されたプロンプト、または `.workspace/codex/orders/` のファイル）
2. 共通ルール: `C:\Users\sasis\344blog\hq\org\codex-worker.md`（体験を作らない・範囲外を変えない・コミットしない・報告書の形式）
3. ワークスペースの共通ルール: `C:\Users\sasis\344blog\CLAUDE.md` の「筆者プロフィール」と「サイトごとに出す経歴」
4. このサイトの `CLAUDE.md` と、下の「サイトの規約」

`CLAUDE.md` は Claude Code 向けに書かれている。「Claude」は実行者のあなたと読み替える。ただし、ルール・スキルの改訂、タスクファイルの更新、コミット、プロジェクトの管理・設計の指示は CC の仕事なので行わない。このサイトはまだ `.task-management/` に移行していない（タスクは `.workspace/.task/` にあり、CC が管理する）。改善提案は報告書にだけ書く。

報告書は `.workspace/codex/reports/YYYY-MM-DD-<タスクID>.md` に書く。

## サイトの規約

| 作業 | 読むもの |
|---|---|
| 文体・語り手・筆者の経緯（正本） | `.agents/skills/kaijo-writing-rule.md` |
| カテゴリ・フォルダ・frontmatter | `.agents/skills/category-rules.md`、`.agents/skills/frontmatter.md`、`.claude/skills/kaijo-content-schema/SKILL.md` |
| 魚種に触れる記事 | `.claude/skills/kaijo-fish-knowledge/SKILL.md`、`.data-set/fish-knowledge/{slug}.md` |
| 施設の記事 | `.agents/skills/point-rule.md` |
| ランキング・まとめ | `.agents/skills/ranking-article-rule.md`、`.claude/skills/kaijo-matome-hub/SKILL.md` |
| データの探し方 | `.agents/skills/research-rules.md` |
| カード・コンポーネントの挿し方 | `.claude/skills/kaijo-ui-components/SKILL.md` |
| アフィリエイトの売り方 | `.claude/skills/kaijo-affiliate-sales/SKILL.md` |
| 画像 | `.workspace/codex/image-style.md`（比率はこちらの 16:9 を正とする）、`.agents/skills/image-create.md` |

- 語り手は「海釣りから管理釣り場を経て、海上釣り堀を調べ始めた私（さしし）」。一人称は「私」。釣行回数と IT・ブログの経歴は書かない
- 訪問・釣行・試食の体験は、`.data-set/fish-knowledge/` の【一次】と、指示書の「材料」にあるものだけ書く
- 「確実に釣れる」は書かない。ライティング規約 1.2 の「確実な釣果」も記事の表現には使わない。放流の日・量・魚種は、公式で確認できた施設だけ書く
- 記事の強調は `<strong>`。`**` は使わない。import は `~/`
- `src/content/config.ts` は変えない。新規記事に `slug:` は書かない（ライティング規約と食い違うときは `CLAUDE.md` を正とする）。既存記事の slug は変えない
- 【要検証】の内容は本文に新規で書かない（`.data-set/fish-knowledge/README.md` を正とする）
- `kaijo-fish-knowledge` にある「ナレッジへの追記」は、指示書の対象に `.data-set/` があるときだけ行う。ないときは、調べたことを出典URL・取得日・【要検証】付きで報告書に書く。ナレッジのない魚種や、【一次】が空欄で書けない箇所も報告書に書く（運営者への確認は CC が行う）
- 確認: `$env:ASTRO_TELEMETRY_DISABLED=1; node node_modules/astro/astro.js build`（PowerShell）。サンドボックスでは `npm` と `pnpm` が動かず、テレメトリを切らないと権限エラーで止まる

## バッチの進め方

- 1つの指示書に複数の記事が入る（バッチ。順番は `C:\Users\sasis\344blog\hq\roadmap\kaijo-angler.md`）。指示書にある記事だけを、書いてある順に書く
- 途中で CC の検収を待たない。検収は書き終えたあとに CC が行う。止まる条件に当たった記事は、その箇所を飛ばして報告書に書き、次の記事へ進む
- ビルドはバッチの最後に1回でよい
- 報告書はバッチで1つ（`<タスクID>` はバッチの ID）。「やったこと」と「止めた箇所」は記事ごとに分ける
- 検索エンジンへの登録の依頼はしない

## 画像

- 画像のトーンとキャラクター性の正本: `.workspace/codex/image-style.md`（このサイト専用。ほかのサイトの型を使わない）
- 記事に画像生成プロンプトを書いた段階で、画像を生成して埋め込んでよい（2026-11-06 ユーザー決定）。手段は Codex でも API でもよい。指示書の「画像」欄が `生成しない` のときだけ、画像マーカーを置き、サムネイル案を報告書の「画像計画」に書く
