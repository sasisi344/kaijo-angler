# 施設タイプの全件確認表（筆者確認用）

作成：2026-11-18／KA-PORTAL-02a／ローカル施設原稿から抽出。分類の確定・記事への反映は未実施。

## 記入方法

- 下の区分は現在の`facilityType`。正式な分類ではありません。施設名・県・元記事を見て、全件の「確定分類」と「確認日／メモ」を記入してください。
- 確定分類は`sea-pond`・`sea-park`・`other`。迷う場合は「保留」と理由を記入できます。現行3区分に収まらない場合も、先にメモへ残してください。
- 分類の境界は[改訂した調査レポート](2026-11-18-mainkw-top6-portal-audit.md#分類確認の進め方)の案を確認し、全件で同じ判断を使います。陸上の海水釣り堀は特に境界を確認する対象です。
- 確認後、最後の確認欄を`[x]`にしてください。空欄・「保留」は未確定として残します。
- 「状態」は記事の`status`値です。「指定なし」は営業確認済みという意味ではありません。分類と閉業・季節休業は別々に扱います。

## 抽出範囲

- 対象：`src/content/blog/fishing-facility/`の`.md`／`.mdx`で`facility_details`を持つ施設原稿。下書きも確認対象に含める方針で抽出（今回draft指定のある施設は0件）。
- 全118件。公開地図API115件だけでなく、APIに載らない3件も含めます。
- 現在の分類：sea-pond 51件、sea-park 33件、other 21件、未設定 13件。
- IDは原稿の保存位置から作った照合キー。公開URLと同一とは限りません。記事リンクはローカル原稿です。

| 現在区分 | 件数 |
|---|---:|
| sea-pond | 51 |
| sea-park | 33 |
| other | 21 |
| 未設定 | 13 |

## 現在：sea-pond（51件）

| ID／施設名 | 県パラメータ | 状態 | 確定分類（記入） | 確認日／メモ（記入） | 確認 |
|---|---|---|---|---|---|
| [爆釣 美浜フィッシングパーク](../../src/content/blog/fishing-facility/center-japan/aichi/bakucho-mihama-fishing-park/index.mdx)<br>`center-japan/aichi/bakucho-mihama-fishing-park` | aichi | 指定なし | — | — | [ ] |
| [ブルーパーク阿納](../../src/content/blog/fishing-facility/center-japan/fukui/blue-park-ano/index.mdx)<br>`center-japan/fukui/blue-park-ano` | fukui | 指定なし | — | — | [ ] |
| [フィッシングランド日向](../../src/content/blog/fishing-facility/center-japan/fukui/fishing-land-hyuga/index.mdx)<br>`center-japan/fukui/fishing-land-hyuga` | fukui | 指定なし | — | — | [ ] |
| [フィッシングレインボー](../../src/content/blog/fishing-facility/center-japan/fukui/fishing-rainbow/index.mdx)<br>`center-japan/fukui/fishing-rainbow` | fukui | 指定なし | — | — | [ ] |
| [ひるが海上釣堀](../../src/content/blog/fishing-facility/center-japan/fukui/hiruga-sea-fishing-pond/index.mdx)<br>`center-japan/fukui/hiruga-sea-fishing-pond` | fukui | 指定なし | — | — | [ ] |
| [マリンガーデン・レジャー](../../src/content/blog/fishing-facility/center-japan/fukui/marine-garden-leisure/index.mdx)<br>`center-japan/fukui/marine-garden-leisure` | fukui | 指定なし | — | — | [ ] |
| [フィッシングパーク土肥](../../src/content/blog/fishing-facility/center-japan/shizuoka/fishing-park-toi/index.mdx)<br>`center-japan/shizuoka/fishing-park-toi` | shizuoka | 指定なし | — | — | [ ] |
| [いかだ釣りの東海](../../src/content/blog/fishing-facility/center-japan/shizuoka/ikadatsuri-tokai/index.mdx)<br>`center-japan/shizuoka/ikadatsuri-tokai` | shizuoka | 指定なし | — | — | [ ] |
| [海上釣り堀まるや](../../src/content/blog/fishing-facility/center-japan/shizuoka/kaijo-tsuribori-maruya/index.mdx)<br>`center-japan/shizuoka/kaijo-tsuribori-maruya` | shizuoka | 指定なし | — | — | [ ] |
| [海上釣り堀 太公望](../../src/content/blog/fishing-facility/center-japan/shizuoka/kaijo-tsuribori-taikoubou/index.mdx)<br>`center-japan/shizuoka/kaijo-tsuribori-taikoubou` | shizuoka | 指定なし | — | — | [ ] |
| [太海フラワー磯釣りセンター](../../src/content/blog/fishing-facility/east-japan/chiba/futomi-flower-isotsuri-center/index.mdx)<br>`east-japan/chiba/futomi-flower-isotsuri-center` | chiba | 指定なし | — | — | [ ] |
| [城ヶ島J’s Fishing](../../src/content/blog/fishing-facility/east-japan/kanagawa/jogashima-js-fishing/index.mdx)<br>`east-japan/kanagawa/jogashima-js-fishing` | kanagawa | 指定なし | — | — | [ ] |
| [みうら海王](../../src/content/blog/fishing-facility/east-japan/kanagawa/miura-kaiou/index.mdx)<br>`east-japan/kanagawa/miura-kaiou` | kanagawa | 指定なし | — | — | [ ] |
| [由良海洋釣堀](../../src/content/blog/fishing-facility/east-japan/yamagata/yura-marine-fishing-pond/index.mdx)<br>`east-japan/yamagata/yura-marine-fishing-pond` | yamagata | 指定なし | — | — | [ ] |
| [海上釣り堀 海遊](../../src/content/blog/fishing-facility/west-japan/hiroshima/kaijo-tsuribori-kaiyu/index.mdx)<br>`west-japan/hiroshima/kaijo-tsuribori-kaiyu` | hiroshima | 指定なし | — | — | [ ] |
| [海上釣堀 大漁丸](../../src/content/blog/fishing-facility/west-japan/hiroshima/kaijo-tsuribori-tairyomaru/index.mdx)<br>`west-japan/hiroshima/kaijo-tsuribori-tairyomaru` | hiroshima | 指定なし | — | — | [ ] |
| [淡路じゃのひれフィッシングパーク](../../src/content/blog/fishing-facility/west-japan/hyogo/awaji-janohire-fishing-park/index.mdx)<br>`west-japan/hyogo/awaji-janohire-fishing-park` | hyogo | 指定なし | — | — | [ ] |
| [海上釣り堀あっとしぃー（@sea）](../../src/content/blog/fishing-facility/west-japan/hyogo/kaijo-tsuribori-at-sea/index.mdx)<br>`west-japan/hyogo/kaijo-tsuribori-at-sea` | hyogo | 指定なし | — | — | [ ] |
| [海上釣り堀 水宝（すいほう）](../../src/content/blog/fishing-facility/west-japan/hyogo/suihou-fishing-pond/index.mdx)<br>`west-japan/hyogo/suihou-fishing-pond` | hyogo | 指定なし | — | — | [ ] |
| [ソルトレイクひけた 安戸池](../../src/content/blog/fishing-facility/west-japan/kagawa/saltlake-hiketa-adoike/index.mdx)<br>`west-japan/kagawa/saltlake-hiketa-adoike` | kagawa | 指定なし | — | — | [ ] |
| [海上釣り堀 幸丸](../../src/content/blog/fishing-facility/west-japan/kochi/kochi/kaijo-tsuribori-yukimaru/index.mdx)<br>`west-japan/kochi/kochi/kaijo-tsuribori-yukimaru` | kochi | 指定なし | — | — | [ ] |
| [天草釣堀レジャーランド](../../src/content/blog/fishing-facility/west-japan/kumamoto/amakusa-leisure-land/index.mdx)<br>`west-japan/kumamoto/amakusa-leisure-land` | kumamoto | 指定なし | — | — | [ ] |
| [天草観光海上釣り堀 楽つり](../../src/content/blog/fishing-facility/west-japan/kumamoto/amakusa-rakutsuri/index.mdx)<br>`west-japan/kumamoto/amakusa-rakutsuri` | kumamoto | 指定なし | — | — | [ ] |
| [海上釣堀・釣りイカダ 釣り一](../../src/content/blog/fishing-facility/west-japan/kumamoto/kaijo-tsuribori-tsuriichi/index.mdx)<br>`west-japan/kumamoto/kaijo-tsuribori-tsuriichi` | kumamoto | 指定なし | — | — | [ ] |
| [あなたに逢い鯛。釣り堀](../../src/content/blog/fishing-facility/west-japan/mie/anatani-aitai-fishing/index.mdx)<br>`west-japan/mie/anatani-aitai-fishing` | mie | 指定なし | — | — | [ ] |
| [釣り公園佐助屋](../../src/content/blog/fishing-facility/west-japan/mie/fishing-park-sasukeya/index.mdx)<br>`west-japan/mie/fishing-park-sasukeya` | mie | 指定なし | — | — | [ ] |
| [フィッシングパークトリトン](../../src/content/blog/fishing-facility/west-japan/mie/fishing-park-triton/index.mdx)<br>`west-japan/mie/fishing-park-triton` | mie | 指定なし | — | — | [ ] |
| [はさま浦釣り堀センター](../../src/content/blog/fishing-facility/west-japan/mie/hasamaura-fishing-center/index.mdx)<br>`west-japan/mie/hasamaura-fishing-center` | mie | 指定なし | — | — | [ ] |
| [海上釣堀辨屋](../../src/content/blog/fishing-facility/west-japan/mie/kaijo-tsuribori-benya/index.mdx)<br>`west-japan/mie/kaijo-tsuribori-benya` | mie | 指定なし | — | — | [ ] |
| [海上釣り堀福寿丸](../../src/content/blog/fishing-facility/west-japan/mie/kaijo-tsuribori-fukujumaru/index.mdx)<br>`west-japan/mie/kaijo-tsuribori-fukujumaru` | mie | 指定なし | — | — | [ ] |
| [海上釣堀モンキー](../../src/content/blog/fishing-facility/west-japan/mie/kaijo-tsuribori-monkey/index.mdx)<br>`west-japan/mie/kaijo-tsuribori-monkey` | mie | 指定なし | — | — | [ ] |
| [海上釣堀和光](../../src/content/blog/fishing-facility/west-japan/mie/kaijo-tsuribori-wako/index.mdx)<br>`west-japan/mie/kaijo-tsuribori-wako` | mie | 指定なし | — | — | [ ] |
| [賢島フィッシングパーク海遊苑](../../src/content/blog/fishing-facility/west-japan/mie/kashikojima-fishing-park-kaiyuen/index.mdx)<br>`west-japan/mie/kashikojima-fishing-park-kaiyuen` | mie | 指定なし | — | — | [ ] |
| [相差海釣センター](../../src/content/blog/fishing-facility/west-japan/mie/ousatsu-sea-fishing-center/index.mdx)<br>`west-japan/mie/ousatsu-sea-fishing-center` | mie | 指定なし | — | — | [ ] |
| [つり堀傳八屋](../../src/content/blog/fishing-facility/west-japan/mie/tsuribori-denpachiya/index.mdx)<br>`west-japan/mie/tsuribori-denpachiya` | mie | 指定なし | — | — | [ ] |
| [つりぼりマルヨ](../../src/content/blog/fishing-facility/west-japan/mie/tsuribori-maruyo/index.mdx)<br>`west-japan/mie/tsuribori-maruyo` | mie | 指定なし | — | — | [ ] |
| [釣り堀 正徳丸](../../src/content/blog/fishing-facility/west-japan/mie/tsuribori-shotokumaru/index.mdx)<br>`west-japan/mie/tsuribori-shotokumaru` | mie | 指定なし | — | — | [ ] |
| [ジャンボフィッシング村](../../src/content/blog/fishing-facility/west-japan/nagasaki/jumbo-fishing-mura/index.mdx)<br>`west-japan/nagasaki/jumbo-fishing-mura` | nagasaki | 指定なし | — | — | [ ] |
| [新上五島町海上釣り堀](../../src/content/blog/fishing-facility/west-japan/nagasaki/shinkamigoto-sea-fishing-pond/index.mdx)<br>`west-japan/nagasaki/shinkamigoto-sea-fishing-pond` | nagasaki | 指定なし | — | — | [ ] |
| [釣り堀はまかつ](../../src/content/blog/fishing-facility/west-japan/nagasaki/tsuribori-hamakatsu/index.mdx)<br>`west-japan/nagasaki/tsuribori-hamakatsu` | nagasaki | 指定なし | — | — | [ ] |
| [かまえ海上釣り堀 釣っちゃ王](../../src/content/blog/fishing-facility/west-japan/oita/kamae-sea-fishing-tsunchaoh/index.mdx)<br>`west-japan/oita/kamae-sea-fishing-tsunchaoh` | oita | closed | — | — | [ ] |
| [海上釣堀 岬](../../src/content/blog/fishing-facility/west-japan/osaka/kaijo-tsuribori-misaki/index.mdx)<br>`west-japan/osaka/kaijo-tsuribori-misaki` | osaka | 指定なし | — | — | [ ] |
| [海上釣り堀オーパ](../../src/content/blog/fishing-facility/west-japan/osaka/kaijo-tsuribori-opa/index.mdx)<br>`west-japan/osaka/kaijo-tsuribori-opa` | osaka | 指定なし | — | — | [ ] |
| [小島養漁場](../../src/content/blog/fishing-facility/west-japan/osaka/koshima-sea-fishing-pond/index.mdx)<br>`west-japan/osaka/koshima-sea-fishing-pond` | osaka | 指定なし | — | — | [ ] |
| [大阪海上釣り堀サザン](../../src/content/blog/fishing-facility/west-japan/osaka/osaka-sea-fishing-southern/index.mdx)<br>`west-japan/osaka/osaka-sea-fishing-southern` | osaka | 指定なし | — | — | [ ] |
| [海釣ぽーと田尻](../../src/content/blog/fishing-facility/west-japan/osaka/umizuri-port-tajiri/index.mdx)<br>`west-japan/osaka/umizuri-port-tajiri` | osaka | 指定なし | — | — | [ ] |
| [浜部渡船 海上釣り堀](../../src/content/blog/fishing-facility/west-japan/tokushima/hamabe-tosen-kaijo-tsuribori/index.mdx)<br>`west-japan/tokushima/hamabe-tosen-kaijo-tsuribori` | tokushima | 指定なし | — | — | [ ] |
| [海上釣堀 湯浅](../../src/content/blog/fishing-facility/west-japan/wakayama/kaijo-tsuribori-yuasa/index.mdx)<br>`west-japan/wakayama/kaijo-tsuribori-yuasa` | wakayama | 指定なし | — | — | [ ] |
| [カタタの釣堀](../../src/content/blog/fishing-facility/west-japan/wakayama/kakata-fishing-pond/index.mdx)<br>`west-japan/wakayama/kakata-fishing-pond` | wakayama | 指定なし | — | — | [ ] |
| [雑賀崎シーパーク](../../src/content/blog/fishing-facility/west-japan/wakayama/saikakizaki-seapark/index.mdx)<br>`west-japan/wakayama/saikakizaki-seapark` | wakayama | 指定なし | — | — | [ ] |
| [釣堀紀州](../../src/content/blog/fishing-facility/west-japan/wakayama/tsuribori-kishu/index.mdx)<br>`west-japan/wakayama/tsuribori-kishu` | wakayama | 指定なし | — | — | [ ] |

## 現在：sea-park（33件）

| ID／施設名 | 県パラメータ | 状態 | 確定分類（記入） | 確認日／メモ（記入） | 確認 |
|---|---|---|---|---|---|
| [新舞子マリンパーク魚釣り施設](../../src/content/blog/fishing-facility/center-japan/aichi/shinmaiko-marine-park-fishing/index.mdx)<br>`center-japan/aichi/shinmaiko-marine-park-fishing` | aichi | 指定なし | — | — | [ ] |
| [あかぐり海釣公園](../../src/content/blog/fishing-facility/center-japan/fukui/akaguri-sea-fishing-park/index.mdx)<br>`center-japan/fukui/akaguri-sea-fishing-park` | fukui | 指定なし | — | — | [ ] |
| [敦賀市海釣り公園](../../src/content/blog/fishing-facility/center-japan/fukui/tsuruga-city-sea-fishing-park/index.mdx)<br>`center-japan/fukui/tsuruga-city-sea-fishing-park` | fukui | 指定なし | — | — | [ ] |
| [若狭高浜海釣り公園](../../src/content/blog/fishing-facility/center-japan/fukui/wakasa-takahama-sea-fishing-park/index.mdx)<br>`center-japan/fukui/wakasa-takahama-sea-fishing-park` | fukui | 指定なし | — | — | [ ] |
| [フィッシングブリッジ赤崎](../../src/content/blog/fishing-facility/center-japan/ishikawa/fishing-bridge-akasaki/index.mdx)<br>`center-japan/ishikawa/fishing-bridge-akasaki` | ishikawa | suspended | — | — | [ ] |
| [のとじま臨海公園「海づりセンター」](../../src/content/blog/fishing-facility/center-japan/ishikawa/notojima-sea-fishing-center/index.mdx)<br>`center-japan/ishikawa/notojima-sea-fishing-center` | ishikawa | 指定なし | — | — | [ ] |
| [直江津港第3東防波堤 管理釣り場](../../src/content/blog/fishing-facility/center-japan/niigata/naoetsu-port-3rd-east-breakwater/index.mdx)<br>`center-japan/niigata/naoetsu-port-3rd-east-breakwater` | niigata | 指定なし | — | — | [ ] |
| [新潟東港第2東防波堤管理釣り場](../../src/content/blog/fishing-facility/center-japan/niigata/niigata-east-port-2nd-east-breakwater/index.mdx)<br>`center-japan/niigata/niigata-east-port-2nd-east-breakwater` | niigata | 指定なし | — | — | [ ] |
| [新居弁天海釣公園](../../src/content/blog/fishing-facility/center-japan/shizuoka/araibenten-sea-fishing-park/index.mdx)<br>`center-japan/shizuoka/araibenten-sea-fishing-park` | shizuoka | 指定なし | — | — | [ ] |
| [熱海港海釣り施設](../../src/content/blog/fishing-facility/center-japan/shizuoka/atami-port-sea-fishing-facility/index.mdx)<br>`center-japan/shizuoka/atami-port-sea-fishing-facility` | shizuoka | 指定なし | — | — | [ ] |
| [石田フィッシャリーナ 釣り桟橋](../../src/content/blog/fishing-facility/center-japan/toyama/ishida-fisherina/index.mdx)<br>`center-japan/toyama/ishida-fisherina` | toyama | 指定なし | — | — | [ ] |
| [浅虫海釣り公園](../../src/content/blog/fishing-facility/east-japan/aomori/asamushi-sea-fishing-park/index.mdx)<br>`east-japan/aomori/asamushi-sea-fishing-park` | aomori | 指定なし | — | — | [ ] |
| [オリジナルメーカー海づり公園](../../src/content/blog/fishing-facility/east-japan/chiba/original-maker-sea-fishing-park/index.mdx)<br>`east-japan/chiba/original-maker-sea-fishing-park` | chiba | 指定なし | — | — | [ ] |
| [苫小牧港海釣り施設（一本防波堤）](../../src/content/blog/fishing-facility/east-japan/hokkaido/tomakomai-facility/tomakomai-port-sea-fishing-facility/index.mdx)<br>`east-japan/hokkaido/tomakomai-facility/tomakomai-port-sea-fishing-facility` | hokkaido | 指定なし | — | — | [ ] |
| [NX仙台港パーク（海の広場）](../../src/content/blog/fishing-facility/east-japan/miyagi/sendai-port-central-park-sea-square/index.mdx)<br>`east-japan/miyagi/sendai-port-central-park-sea-square` | miyagi | 指定なし | — | — | [ ] |
| [シーロード八幡浜](../../src/content/blog/fishing-facility/west-japan/ehime/searoad-yawatahama/index.mdx)<br>`west-japan/ehime/searoad-yawatahama` | ehime | 指定なし | — | — | [ ] |
| [福岡市海づり公園](../../src/content/blog/fishing-facility/west-japan/fukuoka/fukuoka-city-sea-fishing-park/index.mdx)<br>`west-japan/fukuoka/fukuoka-city-sea-fishing-park` | fukuoka | 指定なし | — | — | [ ] |
| [日明かんしんつり公園](../../src/content/blog/fishing-facility/west-japan/fukuoka/hiake-kaikyo-fishing-park/index.mdx)<br>`west-japan/fukuoka/hiake-kaikyo-fishing-park` | fukuoka | 指定なし | — | — | [ ] |
| [脇田（わいた）海釣り桟橋](../../src/content/blog/fishing-facility/west-japan/fukuoka/waita-sea-fishing-pier/index.mdx)<br>`west-japan/fukuoka/waita-sea-fishing-pier` | fukuoka | 指定なし | — | — | [ ] |
| [尼崎市立魚つり公園](../../src/content/blog/fishing-facility/west-japan/hyogo/amagasaki-city-sea-fishing-park/index.mdx)<br>`west-japan/hyogo/amagasaki-city-sea-fishing-park` | hyogo | 指定なし | — | — | [ ] |
| [神戸市立平磯海づり公園](../../src/content/blog/fishing-facility/west-japan/hyogo/kobe-hiraiso-sea-fishing-park/index.mdx)<br>`west-japan/hyogo/kobe-hiraiso-sea-fishing-park` | hyogo | 指定なし | — | — | [ ] |
| [須磨海づり公園](../../src/content/blog/fishing-facility/west-japan/hyogo/suma-sea-fishing-park/index.mdx)<br>`west-japan/hyogo/suma-sea-fishing-park` | hyogo | 指定なし | — | — | [ ] |
| [直島つり公園](../../src/content/blog/fishing-facility/west-japan/kagawa/naoshima-fishing-park/index.mdx)<br>`west-japan/kagawa/naoshima-fishing-park` | kagawa | 指定なし | — | — | [ ] |
| [鴨池海づり公園](../../src/content/blog/fishing-facility/west-japan/kagoshima/kamoike-sea-fishing-park/index.mdx)<br>`west-japan/kagoshima/kamoike-sea-fishing-park` | kagoshima | 指定なし | — | — | [ ] |
| [桜島海づり公園](../../src/content/blog/fishing-facility/west-japan/kagoshima/sakurajima-sea-fishing-park/index.mdx)<br>`west-japan/kagoshima/sakurajima-sea-fishing-park` | kagoshima | 指定なし | — | — | [ ] |
| [海釣りランド](../../src/content/blog/fishing-facility/west-japan/kumamoto/sea-fishing-land/index.mdx)<br>`west-japan/kumamoto/sea-fishing-land` | kumamoto | 指定なし | — | — | [ ] |
| [湯の児フィッシングパーク](../../src/content/blog/fishing-facility/west-japan/kumamoto/yunoko-fishing-park/index.mdx)<br>`west-japan/kumamoto/yunoko-fishing-park` | kumamoto | 指定なし | — | — | [ ] |
| [舞鶴親海公園](../../src/content/blog/fishing-facility/west-japan/kyoto/maizuru-shinkai-park/index.mdx)<br>`west-japan/kyoto/maizuru-shinkai-park` | kyoto | 指定なし | — | — | [ ] |
| [高島飛島磯釣り公園](../../src/content/blog/fishing-facility/west-japan/nagasaki/takashima-tobishima-isotsuri-park/index.mdx)<br>`west-japan/nagasaki/takashima-tobishima-isotsuri-park` | nagasaki | 指定なし | — | — | [ ] |
| [南港魚つり園護岸](../../src/content/blog/fishing-facility/west-japan/osaka/nanko-fishing-park/index.mdx)<br>`west-japan/osaka/nanko-fishing-park` | osaka | 指定なし | — | — | [ ] |
| [とっとパーク小島](../../src/content/blog/fishing-facility/west-japan/osaka/totto-park-koshima/index.mdx)<br>`west-japan/osaka/totto-park-koshima` | osaka | 指定なし | — | — | [ ] |
| [フィッシングパーク光](../../src/content/blog/fishing-facility/west-japan/yamaguchi/fishing-park-hikari/index.mdx)<br>`west-japan/yamaguchi/fishing-park-hikari` | yamaguchi | 指定なし | — | — | [ ] |
| [下関フィッシングパーク](../../src/content/blog/fishing-facility/west-japan/yamaguchi/shimonoseki-fishing-park/index.mdx)<br>`west-japan/yamaguchi/shimonoseki-fishing-park` | yamaguchi | 指定なし | — | — | [ ] |

## 現在：other（21件）

| ID／施設名 | 県パラメータ | 状態 | 確定分類（記入） | 確認日／メモ（記入） | 確認 |
|---|---|---|---|---|---|
| [小浜市漁協・釣り筏](../../src/content/blog/fishing-facility/center-japan/fukui/obama-city-fishing-coop-raft/index.mdx)<br>`center-japan/fukui/obama-city-fishing-coop-raft` | fukui | 指定なし | — | — | [ ] |
| [シーパーク丹生](../../src/content/blog/fishing-facility/center-japan/fukui/seapark-nyu/index.mdx)<br>`center-japan/fukui/seapark-nyu` | fukui | 指定なし | — | — | [ ] |
| [フィッシングパーク大三島](../../src/content/blog/fishing-facility/west-japan/ehime/fishing-park-omishima/index.mdx)<br>`west-japan/ehime/fishing-park-omishima` | ehime | 指定なし | — | — | [ ] |
| [うみんぐ大島](../../src/content/blog/fishing-facility/west-japan/fukuoka/umingu-oshima/index.mdx)<br>`west-japan/fukuoka/umingu-oshima` | fukuoka | 指定なし | — | — | [ ] |
| [生口島「つり堀公園」](../../src/content/blog/fishing-facility/west-japan/hiroshima/shimanami-kaido-fishing-park/index.mdx)<br>`west-japan/hiroshima/shimanami-kaido-fishing-park` | hiroshima | 指定なし | — | — | [ ] |
| [筏釣り 高橋渡船](../../src/content/blog/fishing-facility/west-japan/kochi/kochi/raft-fishing-takahashi/index.mdx)<br>`west-japan/kochi/kochi/raft-fishing-takahashi` | kochi | 指定なし | — | — | [ ] |
| [つり筏 深浦](../../src/content/blog/fishing-facility/west-japan/kochi/kochi/tsuri-ikada-fukaura/index.mdx)<br>`west-japan/kochi/kochi/tsuri-ikada-fukaura` | kochi | 指定なし | — | — | [ ] |
| [光栄丸](../../src/content/blog/fishing-facility/west-japan/mie/koueimaru/index.mdx)<br>`west-japan/mie/koueimaru` | mie | 指定なし | — | — | [ ] |
| [マルスイ海産](../../src/content/blog/fishing-facility/west-japan/mie/marusui-kaisan/index.mdx)<br>`west-japan/mie/marusui-kaisan` | mie | 指定なし | — | — | [ ] |
| [松名瀬フィッシングパーク](../../src/content/blog/fishing-facility/west-japan/mie/matsunase-fishing-park/index.mdx)<br>`west-japan/mie/matsunase-fishing-park` | mie | 指定なし | — | — | [ ] |
| [内瀬釣りセンター](../../src/content/blog/fishing-facility/west-japan/mie/naize-fishing-center/index.mdx)<br>`west-japan/mie/naize-fishing-center` | mie | 指定なし | — | — | [ ] |
| [鵜方浜釣センター](../../src/content/blog/fishing-facility/west-japan/mie/ugata-hamatsuri-center/index.mdx)<br>`west-japan/mie/ugata-hamatsuri-center` | mie | 指定なし | — | — | [ ] |
| [志布志湾大黒イルカランド（天然釣堀）](../../src/content/blog/fishing-facility/west-japan/miyazaki/shibushi-bay-daikoku-dolphin-land/index.mdx)<br>`west-japan/miyazaki/shibushi-bay-daikoku-dolphin-land` | miyazaki | 指定なし | — | — | [ ] |
| [迎パールマリン](../../src/content/blog/fishing-facility/west-japan/nagasaki/mukai-pearl-marine/index.mdx)<br>`west-japan/nagasaki/mukai-pearl-marine` | nagasaki | 指定なし | — | — | [ ] |
| [糸満釣り筏](../../src/content/blog/fishing-facility/west-japan/okinawa/itoman-ikada-tsurigu-no-zousan/index.mdx)<br>`west-japan/okinawa/itoman-ikada-tsurigu-no-zousan` | okinawa | 指定なし | — | — | [ ] |
| [本部釣りイカダ 海生活](../../src/content/blog/fishing-facility/west-japan/okinawa/motobu-fishing-ikada-umiseikatsu/index.mdx)<br>`west-japan/okinawa/motobu-fishing-ikada-umiseikatsu` | okinawa | 指定なし | — | — | [ ] |
| [仮屋湾遊漁センター](../../src/content/blog/fishing-facility/west-japan/saga/kariyawan-fishing-center/index.mdx)<br>`west-japan/saga/kariyawan-fishing-center` | saga | 指定なし | — | — | [ ] |
| [釣ってみんで釣り堀](../../src/content/blog/fishing-facility/west-japan/tokushima/family-tsuribori-tsutteminde/index.mdx)<br>`west-japan/tokushima/family-tsuribori-tsutteminde` | tokushima | 指定なし | — | — | [ ] |
| [和歌山マリーナシティ海釣り公園](../../src/content/blog/fishing-facility/west-japan/wakayama/wakayama-marinacity-fishing-park/index.mdx)<br>`west-japan/wakayama/wakayama-marinacity-fishing-park` | wakayama | 指定なし | — | — | [ ] |
| [由良海つり公園](../../src/content/blog/fishing-facility/west-japan/wakayama/yura-sea-fishing-park/index.mdx)<br>`west-japan/wakayama/yura-sea-fishing-park` | wakayama | 指定なし | — | — | [ ] |
| [須佐湾フィッシングパーク](../../src/content/blog/fishing-facility/west-japan/yamaguchi/susawan-fishing-park/index.mdx)<br>`west-japan/yamaguchi/susawan-fishing-park` | yamaguchi | 指定なし | — | — | [ ] |

## 現在：未設定（13件）

| ID／施設名 | 県パラメータ | 状態 | 確定分類（記入） | 確認日／メモ（記入） | 確認 |
|---|---|---|---|---|---|
| [篠島釣り天国](../../src/content/blog/fishing-facility/center-japan/aichi/shinojima-tsuri-tengoku/index.mdx)<br>`center-japan/aichi/shinojima-tsuri-tengoku` | aichi | closed | — | — | [ ] |
| [海釣り公園みかた](../../src/content/blog/fishing-facility/center-japan/fukui/sea-fishing-park-mikata/index.mdx)<br>`center-japan/fukui/sea-fishing-park-mikata` | fukui | closed | — | — | [ ] |
| [中日本・東海北陸の海上釣り堀・海釣り施設10選](../../src/content/blog/fishing-facility/center-japan/index.mdx)<br>`center-japan` | 未設定 | 指定なし | — | — | [ ] |
| [晴れパークたてやま](../../src/content/blog/fishing-facility/east-japan/chiba/hare-park-tateyama/index.mdx)<br>`east-japan/chiba/hare-park-tateyama` | chiba | 指定なし | — | — | [ ] |
| [九十九里海釣りセンター](../../src/content/blog/fishing-facility/east-japan/chiba/kujukuri-umitsuri-center/index.mdx)<br>`east-japan/chiba/kujukuri-umitsuri-center` | chiba | 指定なし | — | — | [ ] |
| [勇払マリーナ海上釣り堀](../../src/content/blog/fishing-facility/east-japan/hokkaido/yuharai-pond/index.mdx)<br>`east-japan/hokkaido/yuharai-pond` | hokkaido | closed | — | — | [ ] |
| [東日本の海上釣り堀・海釣り施設](../../src/content/blog/fishing-facility/east-japan/index.mdx)<br>`east-japan` | 未設定 | 指定なし | — | — | [ ] |
| [横浜釣り堀王国（横浜本店・ホテル三日月店）](../../src/content/blog/fishing-facility/east-japan/kanagawa/yokohama-tsuribori-okoku/index.mdx)<br>`east-japan/kanagawa/yokohama-tsuribori-okoku` | kanagawa | 指定なし | — | — | [ ] |
| [姫路市立遊漁センター](../../src/content/blog/fishing-facility/west-japan/hyogo/himeji-city-fishing-center/index.mdx)<br>`west-japan/hyogo/himeji-city-fishing-center` | hyogo | closed | — | — | [ ] |
| [家島海上釣り堀 海恵（かいえい）](../../src/content/blog/fishing-facility/west-japan/hyogo/sea-fishing-pond-kaikei/index.mdx)<br>`west-japan/hyogo/sea-fishing-pond-kaikei` | hyogo | closed | — | — | [ ] |
| [西日本の海上釣り堀・海釣り施設10選](../../src/content/blog/fishing-facility/west-japan/index.mdx)<br>`west-japan` | 未設定 | 指定なし | — | — | [ ] |
| [小豆島ふるさと村 釣り桟橋](../../src/content/blog/fishing-facility/west-japan/kagawa/shodoshima-furusatomura-fishing-pier/index.mdx)<br>`west-japan/kagawa/shodoshima-furusatomura-fishing-pier` | kagawa | closed | — | — | [ ] |
| [宮津市海洋つり場](../../src/content/blog/fishing-facility/west-japan/kyoto/miyazu-city-marine-fishing-park/index.mdx)<br>`west-japan/kyoto/miyazu-city-marine-fishing-park` | kyoto | suspended | — | — | [ ] |

## 全件確認後の処理

1. CCが118件の確認欄・確定分類・保留理由を照合し、未確定を勝手に埋めない。
2. 確定した値だけを対象施設記事へ反映する。施設名・URL・料金・営業状態の変更を混ぜない。
3. 記事・一覧・トップ・地図APIの分類と件数を再生成し、確認表との一致を検収する。
4. この表は確認記録として残し、運用の正本は記事パラメータへ戻す。二重入力の継続管理にはしない。
