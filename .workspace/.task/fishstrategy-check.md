# 魚種別記事（tactics/fish-strategy）リライト方針チェック

[[weekly-task]] W28-Act「コンテンツ構造の課題・中期対応」から切り出した中期タスク。`tactics/fish-strategy/`配下の魚種別サブ記事の「量産感」対策として、個別記事のリライト方針を決める。

## 背景・現状確認

- 対象は14魚種（aji-asaba-kamasu, buri, chinu, fugu, hiramasa, isaki, ishidai, kanpachi, kawahagi, kue, madai, mejina, shimaji, suzuki）×サブページ（advanced/gourmet/intermediate/theory、buri・hiramasa・ishidai・kanpachiのみ`strategy`もあり`gourmet`なし）
- 非空行数を実測したところ、ほぼ全サブページが128〜140行の狭いレンジに収束（例外なし）。`advanced`の見出し構成を比較すると、fugu「なぜ〜が重要か→底の条件→診断手順→定点攻撃→季節変化→FAQ→まとめ」とchinu「なぜ〜が必要か→理論→セッティング→アタリ→季節→FAQ→まとめ」でほぼ同型の骨格に魚種固有の話題を当てはめている構造が確認できた
- ⚠️ [[gsc-postreflesh-task]]フェーズ1で「本文の文字数・内部リンク数等のテンプレ特徴は順位とほぼ無相関」という結論が出ているが、これは施設記事（`fishing-facility/`）を対象にした分析であり、`fish-strategy`の魚種別記事では未検証。同じ結論を転用できるとは限らないため、着手前にフェーズ1で改めて確認する
- 3ヶ月GSCデータ（`access-data/2026-0621-3month-page.csv`、2026-06-21取得・要更新）で`fish-strategy`配下を抽出したところ、`isaki/gourmet`（新旧URL合算クリック10・表示179）が突出して強く、大半は表示回数一桁〜数十件・クリック0のロングテールに分布。表示回数が比較的多い候補：`shimaji`（表示113・クリック3）、`kue/gourmet`（表示78・クリック1）、`kue`（表示69・クリック1）

## TODO（作業順）

### フェーズ1：診断（テンプレ構造とGoogle評価の相関確認）

- [x] 14魚種×advancedページの見出し（`grep '^##'`）を一覧化し比較した結果、パイロット3魚種（isaki/shimaji/kue、リライト前）だけでなく未着手だった11魚種も含め、ほぼ全記事が「現象解説→理論→手順→タックル設定→季節別調整→よくある失敗（FAQ）→まとめ」という同一骨格に収束していることを確認（2026-07-09）
- [ ] 施設記事と同様の手法（[[gsc-postreflesh-task]]の`scripts/analyze-facility-ranking.mjs`的アプローチ）での定量相関分析は未実施。次回GSCデータ更新時にリライト前後比較と合わせて実施予定

### フェーズ2：優先度トリアージ

- [x] 3ヶ月GSCページデータ（`access-data/2026-0621-3month-page.csv`、新旧URL表記ゆれを合算）で魚種別表示回数を集計し優先順位を確定（2026-07-09、パイロット済みisaki/shimaji/kueを除く）：chinu(115) ＞ mejina(74) ＞ ishidai(60) ＞ madai(60) ＞ suzuki(49) ＞ kawahagi(33) ＞ hiramasa(35) ＞ fugu(27) ＞ kanpachi(26) ＞ buri(17) ＞ aji-asaba-kamasu(12)
- [x] 表示回数がほぼゼロの記事も含め、今回は11魚種全てを一括対応（ユーザー指示により優先度順トリアージより網羅性を優先）

### フェーズ3：リライト方針の実装（優先度上位から）

- [x] パイロット対象を優先度上位3魚種（isaki・shimaji・kue、各advanced/gourmet/intermediate/theoryの計12ファイル）に決定。3魚種の並列エージェントで着手し、効果検証後に残り11魚種へ横展開する
- [x] 権威性補強のQ&Aセクションは「マスターへの質問形式」ではなく「経験者が陥りやすい罠」のニュアンスで新設（師匠に尋ねる体裁ではなく、経験者自身が実際にハマった失敗・勘違いを一人称/経験談として語る形式）。12ファイル全てに1セクションずつ追加済み（2026-07-08）。あわせて各ファイルでH2見出し2〜3個の並び順を入れ替え、他魚種の同名サブページと完全一致しないよう構造にばらつきを付与。`lastmod`もフロントマターに追加済み。非空行数は127〜139行で従来レンジ（128〜140行）から逸脱なし。`astro check`でエラーなしを確認済み
- [x] 残り11魚種（aji-asaba-kamasu, buri, chinu, fugu, hiramasa, ishidai, kanpachi, kawahagi, madai, mejina, suzuki）全44ファイルに同じパターンを横展開完了（2026-07-09）。5並列エージェントで実施。各ファイルに魚種固有の一人称失敗談セクションを追加、H2見出しを1〜3個並び替え。非空行数は128〜143行のレンジに収束。`<strong>`表記・`~/`import規約を遵守（`**`混入なし）。`astro build`で464ページ生成・エラーなしを確認（既存の`astro.config.ts`型エラー1件のみ、今回変更とは無関係）。これで14魚種×全サブページ（計56ファイル）の「量産感」対策が完了
- [x] 見出しの並び順・段落構成のばらつきは、パイロット3魚種＋今回の11魚種で全て個別対応済み。魚種間で骨格が完全一致する組み合わせはなし

### フェーズ4：効果測定

- [ ] リライト後、次回GSCエクスポートで該当ページの表示回数・CTR・順位の変化を確認する>W30あたりで（14魚種全てが2026-07-08〜09にリライト済みのため、比較対象はW28以前 vs W30以降）
- [ ] 効果が出れば方針の有効性が確認できたことになる。出なければテンプレ感以外の要因（競合構造・クエリの質等、[[gsc-postreflesh-task]]の考え方を参照）を再検討する

## 参照

- 対象ディレクトリ：`src/content/blog/tactics/fish-strategy/<魚種>/<advanced|gourmet|intermediate|theory|strategy>/index.mdx`
- 元データ：`.workspace/.task/access-data/2026-0621-3month-page.csv`（月次更新が必要、[[next-task]]のGSC再分析フローと合わせて更新する）
- 関連タスク：[[weekly-task]]（W28-Act 中期対応の発生元）、[[gsc-postreflesh-task]]（施設記事での類似分析・手法の参考）
