# 魚種別記事（tactics/fish-strategy）リライト方針チェック

[[weekly-task]] W28-Act「コンテンツ構造の課題・中期対応」から切り出した中期タスク。`tactics/fish-strategy/`配下の「量産感」対策から始まり、W29でサイト全体のリライト方針確定まで拡張。

## 完了サマリー（フェーズ1〜3、2026-07-08〜09完了）

- 14魚種×全サブページ（計56ファイル）の「量産感」対策リライトを完了。診断で全記事が「現象解説→理論→手順→タックル設定→季節別調整→FAQ→まとめ」の同一骨格に収束していることを確認したうえで、各ファイルに<strong>魚種固有の一人称失敗談セクション</strong>を追加、H2見出しを1〜3個並び替えて魚種間の骨格完全一致を解消。`lastmod`付与、`<strong>`表記・`~/`import規約遵守、`astro build`正常確認済み
- 優先度トリアージ（3ヶ月GSC表示回数）: chinu(115) ＞ mejina(74) ＞ ishidai(60) ＞ madai(60) ＞ suzuki(49) ＞ kawahagi(33) ＞ hiramasa(35) ＞ fugu(27) ＞ kanpachi(26) ＞ buri(17) ＞ aji-asaba-kamasu(12)。パイロットは isaki/shimaji/kue
- 未実施のまま残: テンプレ構造×順位の定量相関分析（[[gsc-postreflesh-task]]の施設記事手法の転用検証）→ フェーズ4の効果測定と合わせて実施

## フェーズ4：効果測定（未完了・W30〜）

- [ ] リライト後、次回GSCエクスポートで該当ページの表示回数・CTR・順位の変化を確認する（W30あたり）。14魚種全てが2026-07-08〜09リライトのため、比較対象は<strong>W28以前 vs W30以降</strong>。W29データ（下記）は移行期でベースラインとしてのみ使用
- [ ] 効果が出れば方針の有効性が確認できたことになる。出なければテンプレ感以外の要因（競合構造・クエリの質等、[[gsc-postreflesh-task]]の考え方を参照）を再検討する
- W29ベースライン（GSC 7/04-7/11、新旧URL正規化合算）: fish-strategy全体で表示282・クリック10・CTR3.5%・平均順位8.0。魚種別表示: shimaji(53) madai(39) isaki(36) chinu(29) kanpachi(22) fugu(18) kue(18) suzuki(16) mejina(10) hiramasa(9) kawahagi(7) buri(6) aji-asaba-kamasu(5) ishidai(4)
- ⚠️ isaki/gourmet はクリック週2.3→0に落ちたが順位は10.5→5.8に改善。`/blog/`旧URLの404化（2026-07-07のコレクション分離）による流入分断が濃厚で、リライト起因とみなさない。301設定（[[weekly-PPDCA-task-07W29]]）後のW30データで再判定する

## W29 サイト全体解析（2026-07-14実施）

データ: `.workspace/.task/access-data/weekly-report/2026/W29/`（GSC 7/04-7/11 vs 前4週 6/06-7/04、GA4 7/04-7/11）。集計は新旧URL（`/blog/`prefix・trailing slash）を正規化合算。

### セクション別パフォーマンス（今週クリック / 表示 / CTR / 平均順位）

| セクション | クリック | 表示 | CTR | 順位 | 前4週平均比 |
|---|---|---|---|---|---|
| 施設記事（旧`/blog/`URL） | 190 | 3477 | 5.5% | 10.0 | クリック+43% |
| 施設記事（新`/fishing-facility/`URL） | 17 | 412 | 4.1% | 17.5 | 微増 |
| trivia | 17 | 297 | 5.7% | 7.8 | 横ばい |
| fish-strategy | 10 | 282 | 3.5% | 8.0 | 表示-21% |
| ranking | 8 | 144 | 5.6% | 10.3 | 表示+24% |
| 地域インデックス | 7 | 395 | 1.8% | 22.3 | 横ばい |
| gear / travel / beginner | 各5/6/2 | 107/88/79 | - | - | travel好調 |
| intelligence | 0 | 3 | 0% | - | 表示20/週→3に消滅 |

### 主要な発見

1. <strong>サイトの検索流入の約85%が旧`/blog/`URL経由</strong>（クリック190/週）で、2026-07-07のコレクション分離以降これらが404になっている。GA4でも404が201セッション（全体の31.9%）。<strong>301リダイレクト（[[weekly-PPDCA-task-07W29]]タスク済み）が全リライト施策の前提条件</strong>。リダイレクト対象は上位数件ではなく旧`/blog/`配下155URL全件（tactics/column含む）
2. Googleの評価自体は好調に上昇中: 旧URLベースでもクリック週132.8→190（+43%）。姫路(24clk・CTR13.0%)・糸満(19clk・15.2%)・イルカランド(17clk・12.5%)・脇田(12clk)が牽引。若狭高浜は「レビュー」「釣果」等の新クエリで表示され始めておりCTR20.8%と極めて高い
3. fish-strategyの表示減（-21%）はURL移行の分断が主因とみられ、リライト評価はW30以降に持ち越し
4. intelligence記事はインデックスからほぼ消滅（表示3）。検索流入は期待せずSNS/回遊用と割り切るのが現実的

### リライト方針（確定）

効果順・依存順に3層。<strong>fish-strategyは効果測定中のためW30まで追加変更禁止</strong>（測定を汚さない）。

<strong>A. タイトル・meta description改善（高表示×低CTR、1ページ目在住）</strong> — 対象: 表示100+でCTR3%以下の施設記事
- nanko-fishing-park（表示261・CTR1.1%・順位8.9）
- kaijo-tsuribori-at-sea（表示176・CTR1.1%・順位10.4）
- family-tsuribori-tsutteminde（表示158・CTR1.3%・順位9.5）※クエリ「釣ってみんで釣り堀」表示56・CTR1.8%
- mukai-pearl-marine（表示133・CTR3.0%・順位8.2）
- shinojima-tsuri-tengoku（表示104・CTR1.9%・順位10.4）

<strong>B. 内部リンク強化で順位11〜15→1ページ目押し上げ（CTRは既に高くタイトル改変不要）</strong>
- wakasa-takahama-sea-fishing-park（CTR20.8%・順位11.8）— CTRサイト最高。順位が上がればそのままクリック増
- seapark-nyu（CTR11.9%・順位14.4）
- wakayama-marinacity-fishing-park（CTR10.8%・順位13.8）

<strong>C. コンテンツ強化（順位10〜20×表示30+、中期）</strong>
- maizuru-shinkai-park(95) / kamoike-sea-fishing-park(88) / takashima-tobishima-isotsuri-park(88) / shinmaiko-marine-park-fishing(82) / umizuri-port-tajiri(70・順位8.4→12.3と悪化) / asamushi-sea-fishing-park(54・順位16.4) / matsunase-fishing-park(45・順位悪化12.5→16.8) / kariyawan-fishing-center(44・順位悪化15.7→18.2) / miyazu-city-marine-fishing-park(41・CTR0%)
- 悪化組（umizuri-port-tajiri, matsunase, kariyawan, tsuri-ikada-fukaura=前4週平均クリック2.8→0）は404流入分断の影響と区別がつかないため、<strong>301設定→再クロール後のW30データで悪化が続く場合のみ着手</strong>

### 週次タスクへの反映

W29の実行タスクは [[weekly-PPDCA-task-07W29]] に記載（301リダイレクト＝既存タスク、A層タイトル改善、B層内部リンク強化）。C層と悪化組はW30判断。

## 参照

- 対象ディレクトリ：`src/content/blog/tactics/fish-strategy/<魚種>/<advanced|gourmet|intermediate|theory|strategy>/index.mdx`
- W29データ：`.workspace/.task/access-data/weekly-report/2026/W29/`（集計スクリプトは使い捨て・scratchpadで実行）
- 3ヶ月データ：`.workspace/.task/access-data/2026-0621-3month-page.csv`（要更新、[[next-task]]のGSC再分析フローと合わせて）
- 関連タスク：[[weekly-task]]（W28-Act 発生元）、[[gsc-postreflesh-task]]（施設記事での類似分析）、[[weekly-PPDCA-task-07W29]]（W29実行タスク）
