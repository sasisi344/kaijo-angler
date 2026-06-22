# GSC分析後の改善タスク（フェーズB「テンプレ感対策」の実務化）

## 背景・調査結果サマリ

`content-expansion-roadmap.md` フェーズB「本文のテンプレ感対策」を実行するにあたり、GSC週次/3ヶ月データと施設記事のフロントマターを突き合わせて検証した。

- **本文の文字数・魚種数・内部リンク数・公開からの経過日数・Google評価値 ― いずれも順位・表示回数とほぼ無相関**（相関係数すべて±0.2以内、3ヶ月データ n=118 で再確認）。テンプレ的な記事の「均一なリライト」は順位向上にはROIが低い。
- **クエリ別データ（3ヶ月）では、クリックの33%が「閉鎖・休業・再開・現在」等の営業状況系クエリに集中**。`sea-fishing-park-mikata`（休業）や`himeji-city-fishing-center`（閉園情報）のように、公式サイトが答えていない情報ギャップを埋めた記事は平均2〜6位という高順位を獲得している。
- **Web検索で競合確認した結果、順位が弱い施設（fukuoka-city-sea-fishing-park、wakayama-marinacity-fishing-park、matsunase-fishing-park）は公式サイト・じゃらん・いこーよ・トリップアドバイザー等の大手ポータルが検索上位を独占**しており、単独記事のリライトで追い抜くのは構造的に困難。
- 結論：**順位を決めているのは「テンプレ感」ではなく「競合構造（公式サイト・大手ポータルの強さ）」と「情報ギャップ（公式が答えていない鮮度情報）の有無」**。全120記事の均一リライトではなく、トリアージして「勝てる案件」に絞るべき。

診断スクリプト：`scripts/analyze-facility-ranking.mjs`（GSCエクスポートCSVを引数で渡せる。フォーマット自動判定）

---

## TODO（作業順）

### フェーズ1：仕組みの定着（基盤）

- [x] GSCページ単位データと施設フロントマターを突き合わせる診断スクリプトを作成（`scripts/analyze-facility-ranking.mjs`）
- [x] 3ヶ月分のページ別データ（`access-data/2026-0621-3month-page.csv`）で検証し、テンプレ特徴の無相関を確認
- [x] クエリ別データ（`access-data/2026-0621-3monthquery.csv`）で需要の質（営業状況系クエリの優位性）を確認
- [ ] 月次でGSCエクスポート（ページ単位）を取得し`scripts/analyze-facility-ranking.mjs`を再実行する運用を固定する

### フェーズ2：競合構造のトリアージ（「需要はあるが順位/CTRが弱い」候補の判定）

`scripts/analyze-facility-ranking.mjs`で抽出した「impressions≥10かつ position>15またはCTR0%」の47件について、施設名でWeb検索し、公式サイト・じゃらん／いこーよ／トリップアドバイザー等の大手ポータルが上位を占めているか確認する。

→ 2026-06-22時点で47件全件の判定が完了。

**判定済み（公式・大手ポータルが優勢 → 単独記事で勝つのは困難、優先度を下げる）**
- [x] fukuoka-city-sea-fishing-park（impr=268, pos=23.6）
- [x] wakayama-marinacity-fishing-park（impr=264, pos=21.5）
- [x] matsunase-fishing-park（impr=224, pos=20.0）

**判定済み（休業・閉鎖中につき構造的にCTRが低い → 現状の`FacilityStatusAlert`運用で十分、追加対応不要）**
- [x] sea-fishing-pond-kaikei（impr=333, pos=17.2, status: suspended）
- [x] shinojima-tsuri-tengoku（impr=275, pos=17.4, status: closed）
- [x] miyazu-city-marine-fishing-park（2026-06-22 Web検索で新規発見）― 宮津市公式サイト確認：指定管理者の人員不足（船舶免許保有者確保困難）により令和8年度（2026年度）も運営休止継続中。記事に`status`フィールドが無く未反映 → **要対応：`status: suspended`を追加し本文に休止情報を明記**

**⚠️ 事実確認の結果、4記事を削除済み（2026-06-22対応完了）**
- [x] oarai-sea-fishing-center ― 2026-06-03「東日本の補完」バッチで追加。住所・電話番号が曖昧（地番なし）でWeb検索でも実在する海上釣り堀が見つからず、記事を削除
- [x] edogawa-sea-fishing-park ― 同バッチ。東京湾・江戸川区エリアに海上釣り堀型施設は実在せず、記事を削除
- [x] sanriku-sea-fishing-park ― 同バッチ。frontmatterの住所が「岩手県大船渡市**または**宮古市周辺」という未確定表記で、実在しないことを確認し記事を削除
- [x] iwaki-sea-fishing-center ― 同バッチ。いわき市小名浜周辺に堤防釣り・遊漁船はあるが海上釣り堀型施設は実在せず、記事を削除
- 海上釣り堀（生け簀型）は瀬戸内海・若狭湾・志摩半島など波の穏やかな西日本の内湾に集中する業態で、茨城〜東北の太平洋側（波の荒いエリア）にはそもそも存在しにくい構造的理由がある。同バッチで他に追加された記事がないか今後の棚卸しで再確認する余地あり
- 4記事への唯一の内部リンク（`column/travel/april-family-friendly-facilities`の「2. 大洗海釣り公園」）は実在施設の「城ヶ島J'sFishing」に差し替え済み

**判定済み（公式・大手ポータルが優勢 → 単独記事で勝つのは困難、優先度を下げる）**（2026-06-22 Web検索で追加判定）
- [x] araibenten-sea-fishing-park（impr=221, pos=22.4）― 観光協会公式(hamanako-kosai.jp)＋釣り専門メディア(イシグロ/フィッシング遊)＋TripAdvisorが上位独占、自社記事はSERP上に出てこない
- [x] kariyawan-fishing-center（impr=218, pos=17.4）― 施設公式(kariyawan.com)＋TSURI HACK＋じゃらん/いこーよ/ことりっぷ/玄海町公式が多重に優勢
- [x] akaguri-sea-fishing-park（impr=156, pos=21.9）― おおい町観光協会・町公式・ふくいドットコム（観光行政系）が複数ページで独占、自社記事の入り込む余地が薄い
- [x] suma-sea-fishing-park（impr=139, pos=19.6）― 2024年11月リニューアルが市公式＋PR Times/Yahooニュース/Kiss PRESS等ニュースメディアで広く既報済み。今から新規性で差別化するのは困難
- [x] yura-sea-fishing-park（impr=129, pos=21.5）― 由良町観光協会公式（複数ページ）＋るるぶ/じゃらん/Yahooトラベル/釣具屋.comが優勢
- [x] kobe-hiraiso-sea-fishing-park（impr=124, pos=28.3）― 市公式(kobeumiduri.jp)＋Wikipedia＋Feel KOBE公式観光が上位。Wikipedia競合は突破困難
- [x] saltlake-hiketa-adoike（impr=102, pos=34.7）― 運営会社公式(saltlake-hiketa.co.jp)が体験施設・レストランまで含む充実した複合施設サイトを持ち、専門ポータルもTSURI HACK等で固められている
- [x] hiruga-sea-fishing-pond（impr=176, pos=17.8）― ふくいドットコム（県公式観光、2ページ）＋若狭美浜観光協会公式＋管理釣り場専門ポータル(kanritsuriba.com)が優勢

**判定済み（公式・大手ポータルの支配が薄く情報ギャップあり → フェーズ3で差別化コンテンツ追加対象）**（2026-06-22 Web検索で追加判定）
- [x] fishing-park-toi（impr=213, pos=16.3）― SERP内に自社記事（新URL/旧URL）が2件とも出現済みで一定の存在感あり。生け簀内外で料金が変わる独自システムがあり「料金体系」のFAQ化で差別化余地
- [x] obama-city-fishing-coop-raft（impr=179, pos=15.6）― 「小浜市漁協」公式の単独サイトはなく、はとう渡船・深田渡船・金丸渡船・はやし渡船・大住渡船など個人渡船業者が分散。複数渡船を比較・横断する記事は他に存在せず情報ギャップが大きい
- [x] suihou-fishing-pond（impr=171, pos=18.0）― 自社記事(kaijo-fishing.com)がSERP上位グループに既出。公式(suihoh.com)以外は専門ポータル中心で大手ポータルの支配はない
- [x] fishing-park-omishima（impr=137, pos=23.1）― じゃらん/いこーよ等の大手ポータルは出現せず、しまなみ海道地域メディア(Shimanabi等)や今治市公式・漁協支所公式に分散。情報ギャップで勝てる可能性あり
- [x] kaijo-tsuribori-misaki（impr=131, pos=23.5）※`next-task.md`で薄いページ調査中の案件と同一。対応方針は既に確定済み（タックル商品リンク削除＋Googleレビュー取り込みでオリジナル性確保）→ フェーズ3実施時にそのまま反映
- [x] ikadatsuri-tokai（impr=112, pos=17.3）― 自社記事(kaijo-fishing.com)がSERP上に既出。施設公式＋熱海市観光協会以外は個人ブログ・地域メディア中心で大手ポータル支配は弱い
- [x] amakusa-leisure-land（impr=112, pos=20.4）― 施設公式＋地域観光協会中心で、じゃらん/いこーよ程度はあるがトリップアドバイザー等の最強ポータルは未出現。情報ギャップの余地あり
- [x] saikakizaki-seapark（impr=106, pos=19.0）― 施設公式（複数ページ）が中心で、じゃらん以外の全国大手ポータルは目立たず分散的。情報ギャップで勝てる可能性中
- [x] kashikojima-fishing-park-kaiyuen（impr=105, pos=15.9）― 施設公式＋観光三重公式＋じゃらんが中心の中堅競合。圧倒的優位の競合は見当たらない
- [x] jumbo-fishing-mura（impr=102, pos=20.9）― させぼ市地域メディア・観光ポータルに閉じた競合構造で、全国大手ポータルの支配は薄い。情報ギャップで勝てる可能性あり

**判定済み（残り24件、impressions<90 ＝ 低優先度バッチ。公式・大手ポータルが優勢 → 優先度を下げる）**（2026-06-22 Web検索で判定）
- [x] shimonoseki-fishing-park ― 山口県観光公式（複数ページ）＋TSURI HACKが優勢
- [x] fishing-land-hyuga ― ひるが海上釣堀と同一エリア（日向湖）。ふくいドットコム（県公式観光、複数ページ）が優勢
- [x] wakasa-takahama-sea-fishing-park ― 若狭高浜観光協会公式（複数ページ）＋ふくいドットコムが優勢
- [x] fishing-rainbow ― ふくいドットコム＋wakasabay.jp等、福井・三方五湖エリアの観光協会公式が軒並み強い
- [x] awaji-janohire-fishing-park ― リゾート運営の施設公式サイトが非常に充実（情報量で模倣困難）
- [x] umingu-oshima ― 宗像市公式＋福岡市観光公式（よかなび）＋TSURI HACKが優勢

**判定済み（残り24件、impressions<90 ＝ 低優先度バッチ。公式・大手ポータルの支配が薄く情報ギャップあり → 時間があればフェーズ3対象に追加）**（2026-06-22 Web検索で判定）
- [x] kaijo-tsuribori-maruya ― 専門メディア（イシグロ/TSURI HACK/TSURINEWS等）中心、汎用大手ポータル（じゃらん等）の支配なし
- [x] naize-fishing-center ― 個人サイト・SNS中心で施設公式すら見当たらず、情報ギャップが大きい
- [x] ishida-fisherina ― 県公式観光はあるが情報が薄く、専門色の強い競合のみ
- [x] kaijo-tsuribori-benya ― TSURI HACK以外は個人ブログ・地域メディア中心
- [x] tsuribori-kishu ― 施設公式は充実しているが汎用大手ポータルは不在
- [x] marusui-kaisan ― 競合が個人体験記・SNS中心で極めて分散的（CTR=0%施設でもあり要併用対応）
- [x] kaijo-tsuribori-taikoubou ― 施設専用公式サイトが存在せず、じゃらん程度＋個人ブログのみ
- [x] fishing-park-triton ― 施設公式＋観光協会はあるが汎用大手ポータル不在
- [x] kaijo-tsuribori-fukujumaru ― 競合が旧式の施設公式＋個人ブログのみで極めて薄い（CTR=0%施設でもあり要併用対応）
- [x] tsuribori-shotokumaru ― TSURI HACK等専門メディア中心で汎用大手ポータル不在
- [x] kaijo-tsuribori-monkey ― 自社記事(kaijo-fishing.com)がSERP上に既出、じゃらんはあるが優勢ではない
- [x] kaijo-tsuribori-wako ― 自社記事(kaijo-fishing.com)がSERP上に既出、専門メディア(TSURINEWS等)中心
- [x] naoetsu-port-3rd-east-breakwater ― NPO運営公式はあるが個人ブログ・専門サイト中心（CTR=0%施設でもあり要併用対応）
- [x] jogashima-js-fishing ― 自社記事(kaijo-fishing.com)がSERP上に既出、観光協会はあるが汎用ポータルは限定的
- [x] hamabe-tosen-kaijo-tsuribori ― 自社記事(kaijo-fishing.com)の新旧URLがSERP最上位を占めており既に優位。フェーズ3で優先度を上げてもよい
- [x] motobu-fishing-ikada-umiseikatsu ― 旅行メディアはあるがトリップアドバイザー等の最強ポータル不在
- [x] kamae-sea-fishing-tsunchaoh ― 観光協会・専門メディア中心で汎用大手ポータル不在（CTR=0%施設でもあり要併用対応）
- [x] koshima-sea-fishing-pond ― 専門メディア・釣具店ブログ中心で汎用大手ポータル不在（CTR=0%施設でもあり要併用対応）

### フェーズ3：「勝てる」案件への差別化コンテンツ追加

フェーズ2で「公式サイトが弱い／情報ギャップがある」と判定された施設のみ対象（2026-06-22判定分・表示回数の多い順）：

高優先度（impressions≥90）：fishing-park-toi, obama-city-fishing-coop-raft, suihou-fishing-pond, fishing-park-omishima, kaijo-tsuribori-misaki, ikadatsuri-tokai, amakusa-leisure-land, saikakizaki-seapark, kashikojima-fishing-park-kaiyuen, jumbo-fishing-mura

低優先度（impressions<90、時間があれば）：hamabe-tosen-kaijo-tsuribori（自社記事が既にSERP最上位、優先度を上げてもよい）, kaijo-tsuribori-monkey, kaijo-tsuribori-wako, jogashima-js-fishing, kaijo-tsuribori-maruya, naize-fishing-center, ishida-fisherina, kaijo-tsuribori-benya, tsuribori-kishu, marusui-kaisan, kaijo-tsuribori-taikoubou, fishing-park-triton, kaijo-tsuribori-fukujumaru, tsuribori-shotokumaru, naoetsu-port-3rd-east-breakwater, motobu-fishing-ikada-umiseikatsu, kamae-sea-fishing-tsunchaoh, koshima-sea-fishing-pond

**別途要対応**：
- [x] miyazu-city-marine-fishing-park ― `status: suspended`を追加し本文に休止情報を明記済み（休業中につき差別化コンテンツ追加の対象外）
- [x] oarai-sea-fishing-center ― 実在しない施設と判定、記事削除済み（上記「⚠️」参照）

- [x] 各施設の最新の営業状況（休業・閉鎖・再開・リニューアル等）を確認し、本文・`status`フィールドに反映 → miyazu-city-marine-fishing-parkに`status: suspended`反映済み。oarai-sea-fishing-center等4件は実在しないと判定し記事削除済み（上記「⚠️」参照）
- [x] 公式サイトが答えていないロングテール意図をFAQとして追加（2026-06-22対応・高優先度10件すべて完了）：
  - fishing-park-toi ― イケス内外の料金差・雨天時等FAQ4件
  - obama-city-fishing-coop-raft ― 渡船業者5社（はとう/深田/金丸/はやし/大住）の選び方ガイドを本文に新設＋FAQ4件
  - suihou-fishing-pond ― 初心者向け魚種・年齢制限・荒天時運航・発着点選びFAQ4件
  - fishing-park-omishima ― 桟橋/釣り堀の選び方・レンタル無料範囲・観光との時間配分FAQ3件
  - kaijo-tsuribori-misaki ― next-task.mdの既存方針を反映：Googleレビュー要約セクションを本文に新設（タックル商品リンクは元々無し）＋FAQ3件
  - ikadatsuri-tokai ― 30分プランの十分性・徒歩道のり・子供連れ・現地調理FAQ4件
  - amakusa-leisure-land ― 混雑時・雨天判断・キープシステム・権兵島アクセスFAQ4件（記事内の確定事実(bbq_area: false等)に整合させて作成）
  - saikakizaki-seapark ― 釣り堀/ちょい釣りの選び方・当日参加の代替案・子供利用FAQ3件
  - kashikojima-fishing-park-kaiyuen ― 竿の共有・釣果ゼロ時・アクセス・雨天時FAQ4件
  - jumbo-fishing-mura ― 当日混雑・リリースの満足感・コース選び・入り江の波FAQ4件
- [x] 上記以外の施設（公式・大手ポータルが優勢と判定された案件）は本文リライトを見送り、リソースを他施設に再配分（対応不要・現状維持で確定）

### フェーズ4：CTR改善（タイトル・メタディスクリプション）

テンプレ感（本文）よりクリック率に直結する要素。

- [x] CTR=0%の施設のtitle見直し完了（2026-06-22）。marusui-kaisanは元々title内に価格表記済みのため変更なし。残り11件のtitleに具体的料金を追加：
  - shimonoseki-fishing-park（大人830円）, kaijo-tsuribori-maruya（13,700円）, naize-fishing-center（4,000円〜）, ishida-fisherina（入場無料）, kaijo-tsuribori-fukujumaru（女性12,000円〜）, umingu-oshima（堤防620円〜）, kaijo-tsuribori-monkey（3時間5,500円〜）, kaijo-tsuribori-wako（女性10,000円〜）, naoetsu-port-3rd-east-breakwater（入場料1,500円）, kamae-sea-fishing-tsunchaoh（女性9,500円〜）, koshima-sea-fishing-pond（半日4,000円〜）
  - oarai-sea-fishing-centerは記事削除済みのため対象外
- [x] 「料金」系クエリの該当ページにtitleで具体的な金額を明記（2026-06-22対応）。クエリ別の高表示回数施設のうち、titleに価格が無かった10件を追加修正：totto-park-koshima（大人1,500円）, mukai-pearl-marine（大人6,600円）, futomi-flower-isotsuri-center（1,500円）, anatani-aitai-fishing（女性11,000円〜）, kaijo-tsuribori-at-sea（女性7,700円〜）, suihou-fishing-pond（女性8,000円〜）, jogashima-js-fishing（7,150円〜）, hiruga-sea-fishing-pond（11,000円）, original-maker-sea-fishing-park（920円）, amakusa-leisure-land（入場料500円）。「とっとパーク小島」「あなたに逢い鯛」等のクエリで言及される施設名と実記事のtitleが一致するよう調整済み
- [x] 「ランキング/比較」系クエリ対応（2026-06-22）。`fishing-facility/east-japan`・`west-japan`・`center-japan`の3地域インデックスページのtitle/descriptionに、各エリアの実施設数（東日本9・西日本79・中日本25）を明記し「ランキングTOP3｜全○施設比較」という具体的な表現に変更。west-japanには「九州」も明記（九州系クエリ27件のカバー漏れ対策）。あわせてeast-japan本文中の三浦半島施設名の重複記載バグ（みうら海王の欠落）も修正
- 三重県・九州の単体ランキングクエリ（impr一桁〜数十件）は専用ページが無いため対応見送り（投資対効果が低い）

### フェーズ5：モニタリング運用

**次回実行：W27（2026-06-29〜2026-07-05、7月最初週）。`.workspace/.task/next-task.md`に手順を記載済み。**

- [ ] 月次で`scripts/analyze-facility-ranking.mjs`を最新GSCエクスポートで再実行し、フェーズ2のトリアージリストを更新
- [ ] フェーズ3で対応した施設の順位・CTRが改善したか、次回エクスポートで効果検証
- [ ] 「勝てない」と判定した施設も、競合（公式サイト等）の状況が変わっていないか半年ごとに再確認

---

## 参照

- 診断スクリプト：`scripts/analyze-facility-ranking.mjs`
- クエリ分析：`scripts/analyze-query-mix.mjs`
- 地域密度分析：`scripts/analyze-region-density.mjs`
- 元データ：`.workspace/.task/access-data/2026-0621-3month-page.csv`、`2026-0621-3monthquery.csv`
- 関連タスク：`.workspace/.task/content-expansion-roadmap.md`（フェーズB）、`.workspace/.task/next-task.md`（misaki/yunoko/fugu個別調査）
