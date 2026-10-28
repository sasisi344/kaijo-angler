# 筆者ペルソナ変更に合わせた既存記事のリライト計画

作成: 2026-10-28 ／ タスク: [[next-task]] 3 ／ 規約の正本: `.agents/skills/kaijo-writing-rule.md` 1.1・「一人称と視点」「NG表現（煽り）」、`.agents/skills/point-rule.md` 1.6.5（いずれも 2026-10-27 改訂）

## 1. なぜやるか

2026-10-27 に筆者ペルソナを確定した（40代後半・釣り歴20年以上、海釣り→淡水の管理釣り場→海上釣り堀を知って調べ始めた経緯、一人称は「私」）。あわせて煽り表現のNGと、施設記事に「釣り人の目で見た特徴と口コミの評価」の段を置くルールを足した。既存381記事はこの前に書かれている。

## 2. 現状（2026-10-28 grep で計測。`src/content/blog` の381記事）

| 項目 | 該当 | 規約 |
|---|---|---|
| 本文の煽り語（最強125・圧倒的96・徹底解説86・奇跡14・A級6・これでもかと2） | 171本・329箇所（うち title/description に32本） | NG表現（煽り）。魅力は料金・魚種・アクセスなどの事実で伝える |
| 見出し「施設基本情報と料金システムの**完全テーブル化**」 | 94本・94見出し（定型文） | 同上 |
| 見出しの【】煽りラベル（「理由1：【二刀流】」「ポイント1：【抜群のコスパ】」など） | 約240見出し（施設記事が中心） | 【】煽りラベルは使わない。`【まとめ】`（point-rule 1.7）と `【2026年最新】` は対象外 |
| 施設記事の「釣り人の目で見た〜と口コミの評価」節 | 119本中 **0本** | point-rule 1.6.5 |
| 一人称「私」 | 1本 | 施設・釣法の評価は一人称で書く |
| 「私たち」 | 4本 | 3本は「人間一般」の意味で問題なし、1本は施設のコメント引用。**対象外** |
| IT・ブログの経歴 | 0本（「ブログ」の該当は施設の公式ブログ・SNS調査の話） | 対象外 |

## 3. 作業の種類と見積もり

トークン量は Claude の作業量の目安（記事を読む量＋編集量）。週の使用量に対する割合は、作業1回目のあとで実測して見直す。

| ID | 作業 | 対象 | やり方 | 1本あたり | 合計の目安 | 規模 |
|---|---|---|---|---|---|---|
| A1 | 「〜の完全テーブル化」見出しを「施設基本情報と料金システム」等に | 94本 | 一括置換（見出しへのアンカーリンクがないことは確認済み） | — | 1万 | S |
| A2 | 見出しの【】煽りラベルを、事実を言う見出しに（例:「理由1：【抜群のコスパ】ワンコインに近い低料金設定」→「理由1：ワンコインに近い低料金」） | 約240見出し | 記事ごとに該当行だけ編集。A3 と同じ回で処理 | 5千 | 50万 | M |
| A3 | 本文の煽り語を具体的な事実に。title/description の32本は施設名クエリの CTR に効くので、タイトル形式（point-rule 2.1）を守って直す | 171本・329箇所 | 該当行を grep →文脈を見て編集 | 4千 | 70万 | L |
| A4 | 施設記事に「釣り人の目で見た{施設名}と口コミの評価」節を追加（私の見立て2〜4点・口コミの傾向・照合テーブル） | 119本 | 記事を通読→Googleマップの評価点・件数を確認→節を書く | 3万 | 360万（上位15本なら45万） | L |
| A5 | 釣法・コラム記事に、釣り人としての判断を一人称で1〜2文（「私なら〜」） | 239本 | 該当段だけ読んで追記 | 1万 | 240万（上位10本なら10万） | L |

**全部で約720万トークン**。A1〜A3 は煽り表現の掃除で、合計120万。重いのは A4 と A5。

### A4 の注意

- **訪問したように書かない。** 「行ってみたら」「私が釣ったときは」は `.data-set/fish-knowledge/` の【一次】か、筆者の `> [!forAI]` の訪問記録がある場合だけ（現状、訪問記録のある記事は2本）。それ以外は公式情報と口コミからの見立てとして書く
- 口コミの評価点・件数は**確認日とセット**。Claude がブラウザで確認できなかった施設は評価点を書かず、見立てだけにする（筆者に確認を頼む施設は本文に `<!-- USER_NOTE: Googleマップの評価を確認 -->` を残す）
- 魚種に触れる記述は `kaijo-fish-knowledge` スキルを通す。`<strong>` で強調し、`lastmod` を更新する

## 4. 進め方（フェーズ）

| フェーズ | 内容 | 目安 | 状態 |
|---|---|---|---|
| 1 | A1（一括置換） | 1万 | 完了 2026-10-28（見出し94本＋浅虫海釣り公園の description 1箇所。`sed -i` は改行コードを CRLF に変えるため、perl で元のバイトを保って置換した） |
| 2 | A2＋A3 を title/description の32本 → 表示上位の記事順（付録）に | 120万 | 完了 2026-10-28（見出しラベル241箇所: 事実のラベル72は「ナイター営業｜〜」の形で残し、煽り165は削除、ラベルだけの4は括弧を外す。煽り語は191本・528行で0件に。タイトル変更8本はリンク文言も全記事で合わせ、タグ「コスパ最強」は「格安」に統合。実績は約25万トークン） |
| 3 | A4 を施設記事の表示上位15本（付録の fishing-facility を上から） | 45万 | 完了 2026-10-28（15本。Googleマップの評価点・件数・口コミの傾向を確認して節を追加し、frontmatter の rating も確認した値にそろえた。閉業の `himeji-city-fishing-center`・`sea-fishing-park-mikata` と、Googleマップの登録が同じ施設か確かめられなかった `tsuruga-city-sea-fishing-park` は外し、次点の `seapark-nyu`・`kaijo-tsuribori-at-sea`・`wakayama-marinacity-fishing-park` を入れた。効果測定は [[schedule-task]] M10） |
| 4 | A5 を釣法・コラムの表示上位10本 | 10万 | 未着手 |
| 5 | A4・A5 の残りを集中枠で（施設は `facility-priority.md` の優先度も見る） | 545万 | 未着手 |

- 効果測定: フェーズ2・3で直した記事と日付を [[schedule-task]] に1行足し、4週間後の週報で施設名クエリの CTR・順位を前の4週間と比べる（順位が落ちていないかの確認が主目的）

## 5. 付録：記事ごとの該当数（表示回数 w42 の多い順）

列: 表示(w42)＝GSC の表示回数（`access-data/weekly-report/2026/w42/ページ.csv`。0 はデータなし）／煽り語＝本文・frontmatter の煽り語の数／完全テーブル化＝A1の見出し数／見出し煽りラベル＝`【まとめ】`・`【20XX年】`を除く【】見出しの数。該当0かつ表示データなしの記事は省略

| 表示(w42) | 記事 | 煽り語 | 完全テーブル化 | 見出し煽りラベル |
|---:|---|---:|---:|---:|
| 373 | `column/travel/fish-shipping-guide` | 0 | 0 | 0 |
| 173 | `fishing-facility/east-japan/miyagi/sendai-port-central-park-sea-square` | 3 | 1 | 0 |
| 171 | `fishing-facility/west-japan/osaka/totto-park-koshima` | 5 | 1 | 3 |
| 151 | `fishing-facility/west-japan/hiroshima/kaijo-tsuribori-kaiyu` | 1 | 1 | 3 |
| 140 | `fishing-facility/west-japan/osaka/nanko-fishing-park` | 0 | 0 | 3 |
| 117 | `fishing-facility/west-japan/okinawa/itoman-ikada-tsurigu-no-zousan` | 0 | 0 | 3 |
| 104 | `tactics/gear/harris-importance` | 0 | 0 | 0 |
| 101 | `column/ranking/kansai` | 1 | 0 | 0 |
| 89 | `fishing-facility/west-japan/kagoshima/kamoike-sea-fishing-park` | 1 | 1 | 3 |
| 86 | `fishing-facility/west-japan/hyogo/himeji-city-fishing-center` | 0 | 0 | 3 |
| 79 | `fishing-facility/west-japan/miyazaki/shibushi-bay-daikoku-dolphin-land` | 0 | 0 | 3 |
| 75 | `column/travel/cooler-box-guide` | 0 | 0 | 0 |
| 72 | `fishing-facility/west-japan/mie/anatani-aitai-fishing` | 1 | 1 | 3 |
| 70 | `fishing-facility/west-japan/nagasaki/mukai-pearl-marine` | 1 | 1 | 3 |
| 70 | `fishing-facility/west-japan/kyoto/maizuru-shinkai-park` | 1 | 1 | 3 |
| 65 | `tactics/fish-strategy/suzuki/theory` | 1 | 0 | 0 |
| 65 | `tactics/fish-strategy/shimaji/theory` | 0 | 0 | 0 |
| 65 | `tactics/fish-strategy/mejina/theory` | 0 | 0 | 0 |
| 65 | `tactics/fish-strategy/madai/theory` | 2 | 0 | 0 |
| 65 | `tactics/fish-strategy/kue/theory` | 1 | 0 | 0 |
| 65 | `tactics/fish-strategy/kawahagi/theory` | 3 | 0 | 0 |
| 65 | `tactics/fish-strategy/kanpachi/theory` | 2 | 0 | 0 |
| 65 | `tactics/fish-strategy/ishidai/theory` | 5 | 0 | 0 |
| 65 | `tactics/fish-strategy/isaki/theory` | 0 | 0 | 0 |
| 65 | `tactics/fish-strategy/hiramasa/theory` | 0 | 0 | 0 |
| 65 | `tactics/fish-strategy/fugu/theory` | 1 | 0 | 0 |
| 65 | `tactics/fish-strategy/chinu/theory` | 1 | 0 | 0 |
| 65 | `tactics/fish-strategy/buri/theory` | 0 | 0 | 0 |
| 65 | `tactics/fish-strategy/aji-asaba-kamasu/theory` | 1 | 0 | 0 |
| 61 | `fishing-facility/west-japan/fukuoka/fukuoka-city-sea-fishing-park` | 0 | 1 | 3 |
| 57 | `fishing-facility/west-japan/tokushima/family-tsuribori-tsutteminde` | 0 | 0 | 3 |
| 55 | `fishing-facility/center-japan/fukui/sea-fishing-park-mikata` | 0 | 0 | 0 |
| 54 | `fishing-facility/center-japan/fukui/tsuruga-city-sea-fishing-park` | 2 | 1 | 0 |
| 54 | `fishing-facility/center-japan/fukui/seapark-nyu` | 3 | 1 | 0 |
| 51 | `fishing-facility/west-japan/hyogo/kaijo-tsuribori-at-sea` | 3 | 1 | 3 |
| 49 | `tactics/fish-strategy/suzuki/intermediate` | 2 | 0 | 0 |
| 49 | `tactics/fish-strategy/shimaji/intermediate` | 0 | 0 | 0 |
| 49 | `tactics/fish-strategy/mejina/intermediate` | 2 | 0 | 0 |
| 49 | `tactics/fish-strategy/madai/intermediate` | 0 | 0 | 0 |
| 49 | `tactics/fish-strategy/kue/intermediate` | 3 | 0 | 0 |
| 49 | `tactics/fish-strategy/kawahagi/intermediate` | 0 | 0 | 0 |
| 49 | `tactics/fish-strategy/kanpachi/intermediate` | 0 | 0 | 0 |
| 49 | `tactics/fish-strategy/ishidai/intermediate` | 2 | 0 | 0 |
| 49 | `tactics/fish-strategy/isaki/intermediate` | 0 | 0 | 0 |
| 49 | `tactics/fish-strategy/hiramasa/intermediate` | 0 | 0 | 0 |
| 49 | `tactics/fish-strategy/fugu/intermediate` | 0 | 0 | 0 |
| 49 | `tactics/fish-strategy/chinu/intermediate` | 1 | 0 | 0 |
| 49 | `tactics/fish-strategy/buri/intermediate` | 1 | 0 | 0 |
| 49 | `tactics/fish-strategy/aji-asaba-kamasu/intermediate` | 0 | 0 | 0 |
| 45 | `fishing-facility/west-japan/wakayama/wakayama-marinacity-fishing-park` | 2 | 1 | 3 |
| 45 | `fishing-facility/west-japan/osaka/kaijo-tsuribori-misaki` | 6 | 1 | 3 |
| 45 | `fishing-facility/west-japan/fukuoka/waita-sea-fishing-pier` | 6 | 1 | 3 |
| 44 | `fishing-facility/west-japan/osaka/umizuri-port-tajiri` | 3 | 1 | 3 |
| 44 | `fishing-facility/center-japan/shizuoka/araibenten-sea-fishing-park` | 4 | 1 | 0 |
| 44 | `column/trivia/hook-size-science` | 0 | 0 | 0 |
| 41 | `fishing-facility/west-japan/mie/naize-fishing-center` | 2 | 1 | 3 |
| 38 | `fishing-facility/west-japan/fukuoka/hiake-kaikyo-fishing-park` | 1 | 1 | 3 |
| 38 | `fishing-facility/east-japan` | 0 | 0 | 1 |
| 37 | `fishing-facility/east-japan/yamagata/yura-marine-fishing-pond` | 1 | 1 | 0 |
| 37 | `fishing-facility/east-japan/hokkaido/yuharai-pond` | 1 | 0 | 0 |
| 37 | `column/trivia/cloudy-day-advantage` | 0 | 0 | 0 |
| 36 | `fishing-facility/east-japan/aomori/asamushi-sea-fishing-park` | 3 | 2 | 0 |
| 35 | `fishing-facility/east-japan/chiba/original-maker-sea-fishing-park` | 4 | 1 | 0 |
| 34 | `fishing-facility/west-japan/mie/ugata-hamatsuri-center` | 1 | 1 | 3 |
| 33 | `column/ranking/chugoku-shikoku` | 0 | 0 | 0 |
| 32 | `column/trivia/tana-basics` | 0 | 0 | 0 |
| 31 | `tactics/fish-strategy/suzuki/advanced` | 1 | 0 | 0 |
| 31 | `tactics/fish-strategy/shimaji/advanced` | 0 | 0 | 0 |
| 31 | `tactics/fish-strategy/mejina/advanced` | 1 | 0 | 0 |
| 31 | `tactics/fish-strategy/madai/advanced` | 0 | 0 | 0 |
| 31 | `tactics/fish-strategy/kue/advanced` | 1 | 0 | 0 |
| 31 | `tactics/fish-strategy/kawahagi/advanced` | 1 | 0 | 0 |
| 31 | `tactics/fish-strategy/kanpachi/advanced` | 0 | 0 | 0 |
| 31 | `tactics/fish-strategy/ishidai/advanced` | 0 | 0 | 0 |
| 31 | `tactics/fish-strategy/isaki/advanced` | 0 | 0 | 0 |
| 31 | `tactics/fish-strategy/hiramasa/advanced` | 3 | 0 | 0 |
| 31 | `tactics/fish-strategy/fugu/advanced` | 0 | 0 | 0 |
| 31 | `tactics/fish-strategy/chinu/advanced` | 0 | 0 | 0 |
| 31 | `tactics/fish-strategy/buri/advanced` | 1 | 0 | 0 |
| 31 | `tactics/fish-strategy/aji-asaba-kamasu/advanced` | 1 | 0 | 0 |
| 30 | `tactics/fish-strategy/shimaji` | 1 | 0 | 0 |
| 30 | `fishing-facility/center-japan/fukui/obama-city-fishing-coop-raft` | 2 | 1 | 0 |
| 29 | `fishing-facility/west-japan/mie/marusui-kaisan` | 2 | 1 | 3 |
| 29 | `column/trivia/how-to-cook-kampachi` | 1 | 0 | 0 |
| 28 | `fishing-facility/west-japan/saga/kariyawan-fishing-center` | 1 | 1 | 3 |
| 28 | `column/ranking/nihonkai-hokuriku` | 1 | 0 | 0 |
| 27 | `fishing-facility/west-japan/yamaguchi/fishing-park-hikari` | 0 | 1 | 3 |
| 27 | `fishing-facility/west-japan/mie/fishing-park-sasukeya` | 3 | 1 | 3 |
| 27 | `fishing-facility/west-japan/kochi/kochi/raft-fishing-takahashi` | 2 | 0 | 3 |
| 26 | `tactics/gear/knot-strength-test` | 3 | 0 | 0 |
| 26 | `fishing-facility/center-japan` | 0 | 0 | 1 |
| 26 | `column/trivia/why-madai-red` | 0 | 0 | 0 |
| 26 | `column/trivia/fish-pressure-mechanism` | 0 | 0 | 0 |
| 25 | `fishing-facility/west-japan/kagoshima/sakurajima-sea-fishing-park` | 6 | 1 | 3 |
| 25 | `fishing-facility/east-japan/hokkaido/tomakomai-facility/tomakomai-port-sea-fishing-facility` | 1 | 1 | 0 |
| 25 | `fishing-facility/center-japan/shizuoka/ikadatsuri-tokai` | 1 | 1 | 0 |
| 25 | `column/trivia/tsuyu-rainy-day-strategy` | 0 | 0 | 0 |
| 23 | `fishing-facility/west-japan/ehime/searoad-yawatahama` | 0 | 1 | 3 |
| 22 | `fishing-facility/west-japan` | 0 | 0 | 1 |
| 22 | `fishing-facility/west-japan/wakayama/yura-sea-fishing-park` | 1 | 1 | 3 |
| 22 | `fishing-facility/center-japan/fukui/hiruga-sea-fishing-pond` | 0 | 1 | 0 |
| 20 | `fishing-facility/west-japan/osaka/kaijo-tsuribori-opa` | 2 | 1 | 3 |
| 20 | `fishing-facility/west-japan/kumamoto/sea-fishing-land` | 3 | 0 | 3 |
| 19 | `fishing-facility/west-japan/kochi/kochi/tsuri-ikada-fukaura` | 0 | 0 | 3 |
| 19 | `column/trivia/seat-selection-strategy` | 0 | 0 | 0 |
| 18 | `tactics/fish-strategy/kanpachi` | 3 | 0 | 0 |
| 18 | `fishing-facility/west-japan/kagawa/naoshima-fishing-park` | 2 | 1 | 3 |
| 17 | `fishing-facility/west-japan/mie/kashikojima-fishing-park-kaiyuen` | 2 | 1 | 3 |
| 17 | `fishing-facility/center-japan/shizuoka/fishing-park-toi` | 1 | 1 | 0 |
| 17 | `column/trivia/july-sea-temperature-lag-guide` | 0 | 0 | 0 |
| 16 | `tactics/gear` | 1 | 0 | 0 |
| 16 | `fishing-facility/west-japan/nagasaki/jumbo-fishing-mura` | 1 | 1 | 3 |
| 16 | `fishing-facility/west-japan/kumamoto/yunoko-fishing-park` | 1 | 0 | 3 |
| 16 | `fishing-facility/center-japan/aichi/shinojima-tsuri-tengoku` | 1 | 0 | 0 |
| 16 | `column/trivia/sashimi-value-comparison` | 0 | 0 | 0 |
| 16 | `column/trivia/night-fishing-biology` | 1 | 0 | 0 |
| 15 | `tactics/fish-strategy/ishidai` | 4 | 0 | 0 |
| 15 | `fishing-facility/west-japan/tokushima/hamabe-tosen-kaijo-tsuribori` | 1 | 0 | 3 |
| 15 | `column/trivia/october-best-season-tsunuke-guide` | 0 | 0 | 0 |
| 15 | `column/trivia/august-dead-bait-technique` | 0 | 0 | 0 |
| 14 | `tactics/fish-strategy/kue` | 4 | 0 | 0 |
| 14 | `fishing-facility/west-japan/wakayama/tsuribori-kishu` | 0 | 1 | 3 |
| 14 | `fishing-facility/west-japan/mie/tsuribori-maruyo` | 1 | 1 | 3 |
| 14 | `fishing-facility/west-japan/mie/kaijo-tsuribori-benya` | 1 | 1 | 3 |
| 14 | `fishing-facility/center-japan/shizuoka/kaijo-tsuribori-taikoubou` | 1 | 1 | 0 |
| 13 | `tactics/fish-strategy/suzuki/gourmet` | 0 | 0 | 0 |
| 13 | `tactics/fish-strategy/shimaji/gourmet` | 0 | 0 | 0 |
| 13 | `tactics/fish-strategy/mejina/gourmet` | 0 | 0 | 0 |
| 13 | `tactics/fish-strategy/madai/gourmet` | 1 | 0 | 0 |
| 13 | `tactics/fish-strategy/kue/gourmet` | 0 | 0 | 0 |
| 13 | `tactics/fish-strategy/kawahagi/gourmet` | 1 | 0 | 0 |
| 13 | `tactics/fish-strategy/isaki/gourmet` | 0 | 0 | 0 |
| 13 | `tactics/fish-strategy/fugu/gourmet` | 2 | 0 | 0 |
| 13 | `tactics/fish-strategy/chinu/gourmet` | 0 | 0 | 0 |
| 13 | `tactics/fish-strategy/aji-asaba-kamasu/gourmet` | 0 | 0 | 0 |
| 13 | `tactics/beginner/tide-basics` | 0 | 0 | 0 |
| 12 | `fishing-facility/center-japan/shizuoka/kaijo-tsuribori-maruya` | 2 | 1 | 0 |
| 11 | `tactics/beginner/bait-guide` | 1 | 0 | 0 |
| 11 | `fishing-facility/west-japan/mie/tsuribori-denpachiya` | 3 | 1 | 3 |
| 11 | `fishing-facility/west-japan/kagawa/saltlake-hiketa-adoike` | 1 | 1 | 3 |
| 11 | `fishing-facility/center-japan/ishikawa/fishing-bridge-akasaki` | 0 | 1 | 0 |
| 11 | `fishing-facility/center-japan/fukui/wakasa-takahama-sea-fishing-park` | 3 | 1 | 0 |
| 11 | `fishing-facility/center-japan/fukui/fishing-land-hyuga` | 3 | 1 | 0 |
| 11 | `fishing-facility/center-japan/fukui/akaguri-sea-fishing-park` | 1 | 1 | 0 |
| 11 | `column/trivia/summer-heat-fishing-tips` | 0 | 0 | 0 |
| 11 | `column/trivia/myaku-fishing-vs-uki` | 3 | 0 | 0 |
| 10 | `tactics/fish-strategy/isaki` | 1 | 0 | 0 |
| 10 | `fishing-facility/west-japan/yamaguchi/shimonoseki-fishing-park` | 2 | 1 | 3 |
| 10 | `fishing-facility/west-japan/fukuoka/umingu-oshima` | 1 | 1 | 3 |
| 9 | `tactics/fish-strategy/suzuki` | 1 | 0 | 0 |
| 9 | `tactics/fish-strategy/mejina` | 1 | 0 | 0 |
| 9 | `tactics/beginner/fish-senses` | 1 | 0 | 0 |
| 9 | `fishing-facility/west-japan/mie/kaijo-tsuribori-wako` | 2 | 1 | 3 |
| 9 | `column/trivia/fish-freezing-method` | 1 | 0 | 0 |
| 8 | `tactics/fish-strategy` | 3 | 0 | 0 |
| 8 | `fishing-facility/east-japan/kanagawa/miura-kaiou` | 3 | 1 | 0 |
| 8 | `column/trivia/shinkei-jime-benefits` | 0 | 0 | 0 |
| 8 | `column/ranking/mie-wakayama` | 1 | 0 | 0 |
| 7 | `tactics/gear/uki-setup` | 0 | 0 | 0 |
| 7 | `tactics/gear/rod-selection` | 0 | 0 | 0 |
| 7 | `fishing-facility/west-japan/mie/ousatsu-sea-fishing-center` | 1 | 1 | 3 |
| 7 | `fishing-facility/west-japan/mie/hasamaura-fishing-center` | 2 | 1 | 3 |
| 7 | `fishing-facility/west-japan/kyoto/miyazu-city-marine-fishing-park` | 1 | 1 | 3 |
| 7 | `fishing-facility/west-japan/hiroshima/shimanami-kaido-fishing-park` | 0 | 1 | 4 |
| 7 | `fishing-facility/east-japan/chiba/futomi-flower-isotsuri-center` | 1 | 1 | 0 |
| 7 | `fishing-facility/center-japan/aichi/shinmaiko-marine-park-fishing` | 2 | 1 | 0 |
| 7 | `column/trivia/wild-vs-farmed-taste` | 2 | 0 | 0 |
| 6 | `tactics/gear/beginner-tackle-set` | 1 | 0 | 0 |
| 6 | `tactics/beginner/fish-handling` | 0 | 0 | 0 |
| 6 | `fishing-facility/west-japan/wakayama/kaijo-tsuribori-yuasa` | 3 | 1 | 3 |
| 6 | `fishing-facility/west-japan/nagasaki/takashima-tobishima-isotsuri-park` | 4 | 1 | 3 |
| 6 | `fishing-facility/west-japan/nagasaki/shinkamigoto-sea-fishing-pond` | 2 | 1 | 3 |
| 6 | `fishing-facility/center-japan/toyama/ishida-fisherina` | 2 | 1 | 0 |
| 6 | `column/trivia/typhoon-closure-guide` | 0 | 0 | 0 |
| 6 | `column/travel/hamanako-unagi-trip` | 0 | 0 | 0 |
| 5 | `tactics/fish-strategy/kanpachi/strategy` | 0 | 0 | 0 |
| 5 | `tactics/fish-strategy/ishidai/strategy` | 1 | 0 | 0 |
| 5 | `tactics/fish-strategy/hiramasa/strategy` | 0 | 0 | 0 |
| 5 | `tactics/fish-strategy/buri/strategy` | 0 | 0 | 0 |
| 5 | `column/trivia/rental-tackle-honest-review` | 0 | 0 | 0 |
| 5 | `column/trivia/november-sudachi-buri-guide` | 0 | 0 | 0 |
| 5 | `column/trivia/morning-vs-afternoon-battle` | 0 | 0 | 0 |
| 5 | `column/trivia/july-night-fishing-bluefish-guide` | 0 | 0 | 0 |
| 4 | `tactics/gear/safety-gear-guide` | 0 | 0 | 0 |
| 4 | `tactics/fish-strategy/aji-asaba-kamasu` | 1 | 0 | 0 |
| 4 | `fishing-facility/west-japan/yamaguchi/susawan-fishing-park` | 1 | 1 | 3 |
| 4 | `fishing-facility/west-japan/mie/tsuribori-shotokumaru` | 7 | 1 | 3 |
| 4 | `fishing-facility/west-japan/hyogo/sea-fishing-pond-kaikei` | 4 | 1 | 3 |
| 4 | `fishing-facility/center-japan/niigata/niigata-east-port-2nd-east-breakwater` | 3 | 1 | 0 |
| 4 | `fishing-facility/center-japan/fukui/fishing-rainbow` | 2 | 1 | 0 |
| 4 | `column/trivia/why-fish-delicious` | 0 | 0 | 0 |
| 4 | `column/trivia/morning-magic-science` | 1 | 0 | 0 |
| 4 | `column/trivia/ikeus-management-secret` | 0 | 0 | 0 |
| 4 | `column/trivia/history-of-fishing-pond` | 0 | 0 | 0 |
| 4 | `column/trivia/august-summer-bluefish-time-strategy` | 0 | 0 | 0 |
| 4 | `column/travel/shimanami-cycling-fishing` | 0 | 0 | 0 |
| 4 | `column/travel/december-kagoshima-ibusuki-trip` | 0 | 0 | 0 |
| 3 | `tactics/gear/myakuzuri-gear` | 1 | 0 | 0 |
| 3 | `tactics/fish-strategy/fugu` | 1 | 0 | 0 |
| 3 | `tactics/fish-strategy/buri` | 3 | 0 | 0 |
| 3 | `tactics/beginner` | 0 | 0 | 0 |
| 3 | `fishing-facility/west-japan/mie/kaijo-tsuribori-fukujumaru` | 1 | 1 | 3 |
| 3 | `fishing-facility/west-japan/hyogo/suihou-fishing-pond` | 2 | 1 | 3 |
| 3 | `fishing-facility/center-japan/shizuoka/atami-port-sea-fishing-facility` | 2 | 1 | 0 |
| 3 | `column/trivia/june-summer-shift-signs-guide` | 0 | 0 | 0 |
| 3 | `column/trivia/january-kanburi-fat-science` | 0 | 0 | 0 |
| 3 | `column/trivia/family-vs-solo-fishing` | 0 | 0 | 0 |
| 3 | `column/travel/awaji-family-trip` | 0 | 0 | 0 |
| 3 | `column/travel/access/access-kyushu` | 0 | 0 | 0 |
| 3 | `column/travel/access/access-kanto` | 0 | 0 | 0 |
| 2 | `tactics/gear/cooler-box-selection` | 0 | 0 | 0 |
| 2 | `tactics/fish-strategy/tide-wind-calculation` | 0 | 0 | 0 |
| 2 | `tactics/fish-strategy/madai` | 1 | 0 | 0 |
| 2 | `tactics/fish-strategy/chinu` | 1 | 0 | 0 |
| 2 | `tactics/beginner/fishing-etiquette` | 0 | 0 | 0 |
| 2 | `fishing-facility/west-japan/wakayama/kakata-fishing-pond` | 2 | 1 | 3 |
| 2 | `fishing-facility/west-japan/nagasaki/tsuribori-hamakatsu` | 1 | 1 | 3 |
| 2 | `fishing-facility/west-japan/mie/matsunase-fishing-park` | 1 | 1 | 3 |
| 2 | `fishing-facility/west-japan/kumamoto/kaijo-tsuribori-tsuriichi` | 2 | 0 | 3 |
| 2 | `fishing-facility/west-japan/kumamoto/amakusa-rakutsuri` | 1 | 0 | 3 |
| 2 | `fishing-facility/west-japan/kumamoto/amakusa-leisure-land` | 0 | 0 | 3 |
| 2 | `fishing-facility/west-japan/kochi/kochi/kaijo-tsuribori-yukimaru` | 0 | 1 | 3 |
| 2 | `fishing-facility/west-japan/hyogo/kobe-hiraiso-sea-fishing-park` | 5 | 1 | 3 |
| 2 | `fishing-facility/west-japan/ehime/fishing-park-omishima` | 2 | 1 | 3 |
| 2 | `fishing-facility/center-japan/niigata/naoetsu-port-3rd-east-breakwater` | 2 | 1 | 0 |
| 2 | `fishing-facility/center-japan/aichi/bakucho-mihama-fishing-park` | 2 | 0 | 0 |
| 2 | `column/trivia/september-autumn-feeding-rig-guide` | 0 | 0 | 0 |
| 2 | `column/trivia/october-cold-snap-tana-prediction-guide` | 0 | 0 | 0 |
| 2 | `column/trivia/november-strong-pull-energy-science` | 2 | 0 | 0 |
| 2 | `column/trivia/november-bottom-fishing-guide` | 2 | 0 | 0 |
| 2 | `column/trivia/june-tackle-storage-mold-guide` | 0 | 0 | 0 |
| 2 | `column/trivia/cost-calculation-guide` | 0 | 0 | 0 |
| 2 | `column/trivia/bait-rotation` | 2 | 0 | 0 |
| 2 | `column/trivia/aging-fish-science` | 0 | 0 | 0 |
| 2 | `column/travel/september-silver-week-quiet-spots-guide` | 0 | 0 | 0 |
| 2 | `column/travel/nagasaki-goto-trip` | 0 | 0 | 0 |
| 2 | `column/travel/may-toshijima-toba-trip` | 0 | 0 | 0 |
| 2 | `column/travel/kumamoto-amakusa-trip` | 0 | 0 | 0 |
| 2 | `column/travel/april-family-friendly-facilities` | 0 | 0 | 0 |
| 2 | `column/travel/access/setouchi-access-guide` | 1 | 0 | 0 |
| 2 | `column/travel/access/ise-shima-access-guide` | 0 | 0 | 0 |
| 2 | `column/travel/access/hamanako-access-guide` | 0 | 0 | 0 |
| 2 | `column/travel/access/access-tokai` | 0 | 0 | 0 |
| 1 | `tactics/gear/bluefish-power-tackle` | 1 | 0 | 0 |
| 1 | `tactics/beginner/safety-guide` | 0 | 0 | 0 |
| 1 | `intelligence/kansai-vs-kanto-spring` | 2 | 0 | 0 |
| 1 | `fishing-facility/west-japan/osaka/koshima-sea-fishing-pond` | 3 | 1 | 3 |
| 1 | `fishing-facility/west-japan/oita/kamae-sea-fishing-tsunchaoh` | 0 | 1 | 3 |
| 1 | `fishing-facility/west-japan/mie/fishing-park-triton` | 0 | 1 | 3 |
| 1 | `fishing-facility/west-japan/kagawa/shodoshima-furusatomura-fishing-pier` | 1 | 0 | 3 |
| 1 | `fishing-facility/west-japan/hyogo/suma-sea-fishing-park` | 2 | 1 | 2 |
| 1 | `fishing-facility/east-japan/kanagawa/jogashima-js-fishing` | 0 | 1 | 0 |
| 1 | `fishing-facility/east-japan/chiba/hare-park-tateyama` | 0 | 0 | 0 |
| 1 | `fishing-facility/center-japan/ishikawa/notojima-sea-fishing-center` | 2 | 1 | 0 |
| 1 | `fishing-facility/center-japan/fukui/blue-park-ano` | 0 | 1 | 0 |
| 1 | `column/trivia/why-expensive-fish` | 0 | 0 | 0 |
| 1 | `column/trivia/september-shirasa-ebi-scatter-method` | 0 | 0 | 0 |
| 1 | `column/trivia/september-sea-temperature-boundary-guide` | 0 | 0 | 0 |
| 1 | `column/trivia/rainy-day-fishing-truth` | 0 | 0 | 0 |
| 1 | `column/trivia/oxygen-depletion-summer` | 0 | 0 | 0 |
| 1 | `column/trivia/may-spawning-tai-taste-guide` | 0 | 0 | 0 |
| 1 | `column/trivia/may-bait-stealer-dango-guide` | 0 | 0 | 0 |
| 1 | `column/trivia/line-material-science` | 1 | 0 | 0 |
| 1 | `column/trivia/july-morning-speed-strategy-guide` | 0 | 0 | 0 |
| 1 | `column/trivia/february-cold-resistant-bait-top5` | 0 | 0 | 0 |
| 1 | `column/trivia/december-year-end-fishing-strategy` | 2 | 0 | 0 |
| 1 | `column/trivia/beginner-vs-experienced-cost` | 0 | 0 | 0 |
| 1 | `column/trivia/april-bluefish-season-guide` | 0 | 0 | 0 |
| 1 | `column/trivia/april-beginner-3step-guide` | 0 | 0 | 0 |
| 1 | `column/travel/wakayama-kii-trip` | 3 | 0 | 0 |
| 1 | `column/travel/september-shimonoseki-fugu-trip` | 0 | 0 | 0 |
| 1 | `column/travel/oita-saganoseki-trip` | 0 | 0 | 0 |
| 1 | `column/travel/kanagawa-miura-trip` | 0 | 0 | 0 |
| 1 | `column/travel/january-minamiise-onsen-trip` | 0 | 0 | 0 |
| 1 | `column/travel/fukui-mikata-goko` | 0 | 0 | 0 |
| 1 | `column/travel/chiba-minamiboso-trip` | 0 | 0 | 0 |
| 1 | `column/travel/access/access-kinki` | 0 | 0 | 0 |
| 1 | `column/ranking/kyushu-okinawa` | 0 | 0 | 0 |
| 0 | `tactics/gear/tackle-maintenance-care` | 1 | 0 | 0 |
| 0 | `tactics/fish-strategy/myakuzuri-extreme-guide` | 1 | 0 | 0 |
| 0 | `tactics/fish-strategy/kawahagi` | 1 | 0 | 0 |
| 0 | `tactics/fish-strategy/hiramasa` | 4 | 0 | 0 |
| 0 | `tactics/beginner/essential-knots` | 2 | 0 | 0 |
| 0 | `intelligence/summer-bluefish-forecast` | 3 | 0 | 0 |
| 0 | `intelligence/2026-05-w05` | 1 | 0 | 0 |
| 0 | `intelligence/2026-05-w02` | 0 | 0 | 1 |
| 0 | `intelligence/2026-04-w02` | 0 | 0 | 1 |
| 0 | `intelligence/2026-04-w01` | 0 | 0 | 1 |
| 0 | `intelligence/2026-04-summary` | 1 | 0 | 0 |
| 0 | `intelligence/2026-03-w13` | 0 | 0 | 1 |
| 0 | `fishing-facility/west-japan/wakayama/saikakizaki-seapark` | 1 | 1 | 3 |
| 0 | `fishing-facility/west-japan/osaka/osaka-sea-fishing-southern` | 3 | 1 | 3 |
| 0 | `fishing-facility/west-japan/okinawa/motobu-fishing-ikada-umiseikatsu` | 0 | 0 | 3 |
| 0 | `fishing-facility/west-japan/mie/koueimaru` | 4 | 1 | 3 |
| 0 | `fishing-facility/west-japan/mie/kaijo-tsuribori-monkey` | 1 | 1 | 3 |
| 0 | `fishing-facility/west-japan/kagoshima/amami-sealand` | 3 | 1 | 3 |
| 0 | `fishing-facility/west-japan/hyogo/awaji-janohire-fishing-park` | 3 | 1 | 3 |
| 0 | `fishing-facility/west-japan/hyogo/amagasaki-city-sea-fishing-park` | 3 | 1 | 3 |
| 0 | `fishing-facility/west-japan/hiroshima/kaijo-tsuribori-tairyomaru` | 2 | 1 | 3 |
| 0 | `fishing-facility/center-japan/fukui/marine-garden-leisure` | 1 | 1 | 0 |
| 0 | `column/trivia/september-original-rig-craft-guide` | 2 | 0 | 0 |
| 0 | `column/trivia/november-kue-mahata-rig-guide` | 2 | 0 | 0 |
| 0 | `column/trivia/january-cold-line-stiffness-guide` | 2 | 0 | 0 |
| 0 | `column/trivia/february-tiny-float-thin-rig-guide` | 1 | 0 | 0 |
| 0 | `column/trivia/february-offseason-video-learning-guide` | 2 | 0 | 0 |
| 0 | `column/trivia/december-back-to-basics-yearly-review` | 1 | 0 | 0 |
| 0 | `column/travel/may-holiday-tsuribori-reservation` | 1 | 0 | 0 |
| 0 | `column/travel/access/ensei-guide` | 2 | 0 | 0 |
