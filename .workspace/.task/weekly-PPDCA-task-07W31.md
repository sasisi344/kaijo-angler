---
week: 2026-W31
source: 01_diary/weekly/2026/07-W31.md
---

# 週報PPDCAタスク（2026-W31）

## タスク

- [x] 残存する旧`/blog/{slug}`の404 URL（今週GA4で計21セッション・13URL検出）から、対応する新URLへの301リダイレクトを追加する（W30で上位5件は対応済み・commit 4219b90。今回はその積み残し分）
  - [x] `/blog/ishida-fisherina`（4セッション）→ `/fishing-facility/ishida-fisherina/`（実在確認済み: `center-japan/toyama/ishida-fisherina`）
  - [x] `/fishing-facility/west-japan/mie/tsuribori-denpachiya`（3セッション）→ `/fishing-facility/tsuribori-denpachiya/`
  - [x] `/blog/kaijo-tsuribori-taikoubou`（3セッション）→ `/fishing-facility/kaijo-tsuribori-taikoubou/`
  - [x] `/blog/kaijo-tsuribori-monkey`（2セッション）→ `/fishing-facility/kaijo-tsuribori-monkey/`
  - [x] 残り9URL（各1セッション）→ W31のGA4生データがリポジトリに未取り込みのため個別特定は不可。代わりに**個別対応をやめて全件を機械生成する方式に変更**し、施設116件・column/tactics全記事を先回りで網羅（下記「実施内容」参照）
  - 実装は W30 と同じく `public/.htaccess`（`scripts/maintenance/generate-htaccess.mjs`経由）に真の301として追加
- [ ] 【W30からの引き継ぎ・未実施】リダイレクト設定後、Search ConsoleのURL検査ツールで該当ページの再インデックスを申請する（手動対応）
  - ※ 本タスクはコード側では対応不可。デプロイ後に手動実施が必要（W32へ再度引き継ぎ）

## 実施内容（2026-07-29）

`scripts/maintenance/generate-htaccess.mjs` を、ハードコード5件方式から**全件機械生成方式**へ書き換え。

| 生成ソース | 件数 |
| :--- | ---: |
| `/blog/` legacy（`blog-legacy-redirects.ts`・W29実データ由来） | 287 |
| 施設コンテンツから導出（`/blog/{slug}` と階層パス） | 249 |
| column/tactics のフラット旧URL | 146 |
| 包括ルール（`/blog/{現行パス}` → `/{現行パス}`） | 1 |
| **合計** | **683** |

あわせて<strong>旧WordPress の日付型URL（`/2025/07/...` 等133件）を削除</strong>。
W29 GSC実績で<strong>クリック0・表示39回（5URL のみ）</strong>、GA4セッション0と保持コストに見合わないため。

- `src/config/facility-redirects.ts` を削除
- `astro.config.ts` の `redirects` から除外（meta-refresh スタブ133ページも消滅、ビルド成果物 888→755ページ）
- `scripts/maintenance/generate-redirect-map.mjs` の出力から `facility-redirects.ts` 生成と `.htaccess` 生成を廃止
  （後者は放置すると 683件のリダイレクトを133件で上書きする事故になるため。突き合わせレポート出力のみ残置）

検証（`dist` 755ページとの突き合わせ）:

- 実コンテンツを潰すルール: 0件
- リンク先が存在しない（=404へ飛ばす）ルール: 0件
- 包括ルールが潰す実コンテンツ: 0件
- 置き換えられた meta-refresh スタブ: 287件（200+noindex → 真の301へ）

## 解析中に判明した事実

1. **`intelligence` カテゴリは移行対象外で、今も `/blog/intelligence/{slug}/` が本番URL**（実記事23件）。
   当初 `/blog/` プレフィックスを一律で剥がす包括ルールを書いたところ、この23件を全て404へ飛ばす内容になっていた。
   生成スクリプト側で intelligence を明示的に除外済み。**今後 `/blog/` 配下を一括処理する変更を入れる際は必ず除外すること。**
2. **`/fishing-facility/{region}/{pref}/{slug}` が404になる理由**: 施設記事は frontmatter の `slug:` でフラットURL化されており
   （116件中113件が指定済み、未指定の3件は地方indexで正しい挙動）、コンテンツの階層パスは実URLとして存在しない。
   GA4で検出された `/fishing-facility/west-japan/mie/tsuribori-denpachiya` の404はこれが原因。単発ではなく**113件分すべてが同じ潜在404**だったため、今回まとめて301化した。
   - 付随: プロジェクトの `CLAUDE.md` には「`slug:` フィールドは不要（Astro Content Layer が自動生成）」とあるが、施設記事に限っては `slug:` がURLを決定しており必須。記述の見直しを推奨。
3. **`blog-legacy-redirects.ts`（287件）は網羅的ではない**。W29のGSC/GA4で実際にクロール・クリックされたURLのみを収録しているため、
   今週の4件のうち3件（`ishida-fisherina` / `kaijo-tsuribori-taikoubou` / `kaijo-tsuribori-monkey`）は未収録だった。
   **毎週GA4で新しい404が出続けていたのはこれが原因**。コンテンツ実体から導出する方式に変えたことで、このリークは解消。
4. **`mod_alias` の `Redirect` は前方一致で、末尾スラッシュなしURLにマッチしない**。
   W30で追加した5件は `Redirect 301 /blog/{slug}/ ...` 形式だったため、`/blog/{slug}`（スラッシュなし）でのアクセスには効いていなかった可能性が高い。
   今回は全ルールを `RedirectMatch 301 ^{source}/?$` へ変更し、両形式を拾うようにした。
5. **旧`/blog/`URLには2形態が混在**: フラット形式（`/blog/{slug}/`）とパス写し形式（`/blog/column/trivia/{slug}/`）。
   実データ上どちらも存在するため、両方を生成対象にしている。
6. **旧WordPress の日付型URLは実質死んでいた**。W29 GSCで日付型URLは785行中5行のみ・合計クリック0/表示39回、GA4のLPには1件も出現せず。
   `facility-redirects.ts` の133件は全てこの形式だったため、丸ごと削除した。
7. `.workspace/.task/access-data/weekly-report/2026/` は **W29までしか存在しない**（W30・W31の生データが未取り込み）。
   このため今週の「残り9URL」は特定できなかった。週報の生成元データを毎週ここへ格納する運用にすると、次回以降の突き合わせが可能になる。

## 根拠

- 📊 今週もGA4で「Error 404 — 海上アングラー」LPが計21セッション/13URL計上。旧`/blog/`パスへの外部リンク・被リンクが404化したまま流入ロスが継続
- 📊 GSCクリックは依然として旧`/blog/…`パスに集中する一方、GA4のLPは新`/fishing-facility/…`パスで、URL移行の取りこぼしがCTR・回遊の機会損失になっている
- 📊（参考）セッション657（±0%）だがエンゲージメント率67.3%（+32%）・平均滞在55.3秒（+29%）と流入の質は改善傾向

## 参照

- 週報ノート: `01_diary/weekly/2026/07-W31.md`（🎣海上アングラー セクション「5. ⚠️ 異常値・技術アラート」「Act候補」）
- 前週タスク: `weekly-PPDCA-task-07W30.md`（上位5件リダイレクトは対応済み。再インデックス申請が未実施のまま引き継ぎ）
