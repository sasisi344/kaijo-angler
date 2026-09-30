# サブタスク一覧（2026-09-25 クエリ分析より）

W37 `クエリ.csv`/`ページ.csv`の分析（[[weekly-task]]参照）で見つかった取りこぼしSEOのうち、個別対応する3件をここに記録する。

---

## [ ] 1. 最重要: 新旧URL統合のためGSCインデックス登録リクエスト

**背景**: `/blog/{slug}/`（旧URL）→`/fishing-facility/{slug}/`（新URL）への301リダイレクトは2026-07-14実装済みでコード側は正常（true 301・サイトマップはクリーン・内部リンクも旧URL残存なし、を確認済み）。しかし2ヶ月以上経過した現在もW37データで新旧URLペアが存在する103施設のうち、表示回数・クリックともに**64%が旧URL側に残ったまま**（旧: 表示回数17,574/クリック844、新: 表示回数9,928/クリック470）。Googleのインデックス統合が自然には進んでいないため、手動でのインデックス登録リクエストで統合を促進する。

**やること**: GSCログイン時に、以下の新URLに対して「URL検査」→「インデックス登録をリクエスト」を実行。あわせて余力があれば対応する旧URLを「削除（一時的に非表示）」ツールで外すと統合が早まる可能性がある。

## W40追記（2026-09-29）: 旧URL側クリックが逆に増えている6施設を最優先に

W40データ（過去3ヶ月比較）で旧`/blog/`URL側のクリックが前期間より増えていた施設。下記新URLをTier1内でもさらに先頭で登録し、余力があれば対応する旧URLをGSC「削除」ツールで一時非表示にする。

| 新URL（登録対象） | 旧URL（削除ツール候補） | 旧URLクリック（前期間→W40） |
|---|---|---|
| https://kaijo-fishing.com/fishing-facility/waita-sea-fishing-pier/ | https://kaijo-fishing.com/blog/waita-sea-fishing-pier/ | 6→29 |
| https://kaijo-fishing.com/fishing-facility/kashikojima-fishing-park-kaiyuen/ | https://kaijo-fishing.com/blog/kashikojima-fishing-park-kaiyuen/ | 5→27 |
| https://kaijo-fishing.com/fishing-facility/mukai-pearl-marine/ | https://kaijo-fishing.com/blog/mukai-pearl-marine/ | 6→21 |
| https://kaijo-fishing.com/fishing-facility/wakasa-takahama-sea-fishing-park/ | https://kaijo-fishing.com/blog/wakasa-takahama-sea-fishing-park/ | 2→13 |
| https://kaijo-fishing.com/fishing-facility/asamushi-sea-fishing-park/ | https://kaijo-fishing.com/blog/asamushi-sea-fishing-park/ | 1→12 |
| https://kaijo-fishing.com/fishing-facility/shimanami-kaido-fishing-park/ | https://kaijo-fishing.com/blog/shimanami-kaido-fishing-park/ | 1→12 |

（`sea-fishing-park-mikata`は旧URL140→0クリックで新URLへ移行済みのため対象外。`ishida-fisherina`はクォータ上限の疑いで翌日以降の再実行待ち＝下記Tier2に残置）

## エラーが出たURL（調査済み・2026-09-27）

- `https://kaijo-fishing.com/fishing-facility/sanriku-sea-fishing-park/`（インデックス登録リクエストに失敗する＝404）
  → **原因判明・サイトの不具合ではない**。三陸海釣り公園の施設記事は`2026-06-22`のコミット`030e4a2`（"phase3"）で意図的に削除済み（`iwaki-sea-fishing-center`等と同時）。`src/config/blog-legacy-redirects.ts`側も`/blog/sanriku-sea-fishing-park/`→`/fishing-facility/`（一覧トップ）に正しく設定されており対応は不要。本Tier2リストは「旧URL表示回数」だけを機械的に基準に新URLを組み立てて生成したため、新URL側が実在するかを確認していなかったのが原因。**Tier2リストから除外し対応不要**（下記リストからも削除済み）
- `https://kaijo-fishing.com/fishing-facility/ishida-fisherina/`（インデックス未登録：URLのインデックス登録に問題があり失敗する）
  → 本番環境で確認した限りサイト側は完全に健全（HTTP 200・`<meta name="robots" content="index,follow">`・`<link rel="canonical">`が自URLを正しく自己参照・`robots.txt`全許可・`sitemap-0.xml`に含まれることを確認済み）。技術的な原因が見当たらないため、**GSCの「インデックス登録をリクエスト」1日あたりの上限に達していた可能性が高い**（Tier1で49件を連続実行した直後にTier2でエラーになったタイミングと整合）。→ **翌日以降にクォータがリセットされてから再度リクエストを試すこと**



### Tier1（旧URL表示回数 100以上・49件、優先登録）

```
https://kaijo-fishing.com/fishing-facility/nanko-fishing-park/
https://kaijo-fishing.com/fishing-facility/kaijo-tsuribori-at-sea/
https://kaijo-fishing.com/fishing-facility/itoman-ikada-tsurigu-no-zousan/
https://kaijo-fishing.com/fishing-facility/mukai-pearl-marine/
https://kaijo-fishing.com/fishing-facility/family-tsuribori-tsutteminde/
https://kaijo-fishing.com/fishing-facility/waita-sea-fishing-pier/
https://kaijo-fishing.com/fishing-facility/shibushi-bay-daikoku-dolphin-land/
https://kaijo-fishing.com/fishing-facility/maizuru-shinkai-park/
https://kaijo-fishing.com/fishing-facility/shinmaiko-marine-park-fishing/
https://kaijo-fishing.com/fishing-facility/sendai-port-central-park-sea-square/
https://kaijo-fishing.com/fishing-facility/umizuri-port-tajiri/
https://kaijo-fishing.com/fishing-facility/kamoike-sea-fishing-park/
https://kaijo-fishing.com/fishing-facility/kaijo-tsuribori-kaiyu/
https://kaijo-fishing.com/fishing-facility/shinojima-tsuri-tengoku/
https://kaijo-fishing.com/fishing-facility/yuharai-pond/
https://kaijo-fishing.com/fishing-facility/asamushi-sea-fishing-park/
https://kaijo-fishing.com/fishing-facility/totto-park-koshima/
https://kaijo-fishing.com/fishing-facility/kashikojima-fishing-park-kaiyuen/
https://kaijo-fishing.com/fishing-facility/ugata-hamatsuri-center/
https://kaijo-fishing.com/fishing-facility/tsuri-ikada-fukaura/
https://kaijo-fishing.com/fishing-facility/seapark-nyu/
https://kaijo-fishing.com/fishing-facility/kariyawan-fishing-center/
https://kaijo-fishing.com/fishing-facility/fishing-bridge-akasaki/
https://kaijo-fishing.com/fishing-facility/matsunase-fishing-park/
https://kaijo-fishing.com/fishing-facility/yura-marine-fishing-pond/
https://kaijo-fishing.com/fishing-facility/sea-fishing-land/
https://kaijo-fishing.com/fishing-facility/takashima-tobishima-isotsuri-park/
https://kaijo-fishing.com/fishing-facility/fishing-park-sasukeya/
https://kaijo-fishing.com/fishing-facility/naoshima-fishing-park/
https://kaijo-fishing.com/fishing-facility/saltlake-hiketa-adoike/
https://kaijo-fishing.com/fishing-facility/hiruga-sea-fishing-pond/
https://kaijo-fishing.com/fishing-facility/tsuribori-kishu/
https://kaijo-fishing.com/fishing-facility/yura-sea-fishing-park/
https://kaijo-fishing.com/fishing-facility/tomakomai-port-sea-fishing-facility/
https://kaijo-fishing.com/fishing-facility/ikadatsuri-tokai/
https://kaijo-fishing.com/fishing-facility/kaijo-tsuribori-opa/
https://kaijo-fishing.com/fishing-facility/miyazu-city-marine-fishing-park/
https://kaijo-fishing.com/fishing-facility/tsuribori-maruyo/
https://kaijo-fishing.com/fishing-facility/obama-city-fishing-coop-raft/
https://kaijo-fishing.com/fishing-facility/hasamaura-fishing-center/
https://kaijo-fishing.com/fishing-facility/wakasa-takahama-sea-fishing-park/
https://kaijo-fishing.com/fishing-facility/naoetsu-port-3rd-east-breakwater/
https://kaijo-fishing.com/fishing-facility/kaijo-tsuribori-tairyomaru/
https://kaijo-fishing.com/fishing-facility/kaijo-tsuribori-maruya/
https://kaijo-fishing.com/fishing-facility/atami-port-sea-fishing-facility/
https://kaijo-fishing.com/fishing-facility/shodoshima-furusatomura-fishing-pier/
https://kaijo-fishing.com/fishing-facility/tsuruga-city-sea-fishing-park/
https://kaijo-fishing.com/fishing-facility/raft-fishing-takahashi/
https://kaijo-fishing.com/fishing-facility/shimanami-kaido-fishing-park/
https://kaijo-fishing.com/fishing-facility/fishing-park-hikari/
```
> [!forAI]
> 手動チェック完了。すべてインデックス登録済。

### Tier2（旧URL表示回数 30〜99・23件、余力があれば。当初24件中`sanriku-sea-fishing-park`は削除済み施設のため除外）

```
https://kaijo-fishing.com/fishing-facility/kaijo-tsuribori-yuasa/
https://kaijo-fishing.com/fishing-facility/saikakizaki-seapark/
https://kaijo-fishing.com/fishing-facility/ousatsu-sea-fishing-center/
https://kaijo-fishing.com/fishing-facility/anatani-aitai-fishing/
https://kaijo-fishing.com/fishing-facility/fukuoka-city-sea-fishing-park/
https://kaijo-fishing.com/fishing-facility/shinkamigoto-sea-fishing-pond/
https://kaijo-fishing.com/fishing-facility/marusui-kaisan/
https://kaijo-fishing.com/fishing-facility/jumbo-fishing-mura/
https://kaijo-fishing.com/fishing-facility/sakurajima-sea-fishing-park/
https://kaijo-fishing.com/fishing-facility/fishing-park-omishima/
https://kaijo-fishing.com/fishing-facility/susawan-fishing-park/
https://kaijo-fishing.com/fishing-facility/iwaki-sea-fishing-center/
https://kaijo-fishing.com/fishing-facility/ishida-fisherina/
https://kaijo-fishing.com/fishing-facility/amakusa-rakutsuri/
https://kaijo-fishing.com/fishing-facility/original-maker-sea-fishing-park/
https://kaijo-fishing.com/fishing-facility/futomi-flower-isotsuri-center/
https://kaijo-fishing.com/fishing-facility/himeji-city-fishing-center/
https://kaijo-fishing.com/fishing-facility/kaijo-tsuribori-taikoubou/
https://kaijo-fishing.com/fishing-facility/suihou-fishing-pond/
https://kaijo-fishing.com/fishing-facility/kaijo-tsuribori-misaki/
https://kaijo-fishing.com/fishing-facility/fishing-land-hyuga/
https://kaijo-fishing.com/fishing-facility/amakusa-leisure-land/
https://kaijo-fishing.com/fishing-facility/suma-sea-fishing-park/
```

残り30件（旧URL表示回数30未満）は優先度低のため今回は対象外。全103件のフルリストは`.data-set`ではなく本分析のセッションログ参照、または再度`ページ.csv`から再集計可能。

**判断根拠データ**: `.workspace/.task/access-data/weekly-report/2026/W37/ページ.csv`

---

## [x] 2. 「釣り堀」一般語クエリの競合調査（2026-09-27 完了・全文は [archive/task/weekly-task-2026-09-22_09-30.md](../archive/task/weekly-task-2026-09-22_09-30.md) に移行）

結論: 「釣り堀 大阪」上位6件中3件が海上釣り堀サイトで淡水系の完全占有ではなく、大規模投資はせず`column/ranking/`のdescription・冒頭への軽い言い回し追加で対応済み（効果は [[measurement-task]] M2）。

---

## [ ] 3. アフィリエイト（タックル紹介）まわりの最適化

**背景**: ユーザー判断で新規追加。詳細設計はこれから個別に詰める。

**現状の把握（分析時点のスナップショット）**:
- `TackleCard`使用記事: 191件（tactics/fish-strategy含む全体）
- `AffiliateCard`使用記事: 17件のみ
- コンポーネント定義: [AffiliateCard.astro](../../src/components/common/AffiliateCard.astro) / [TackleCard.astro](../../src/components/common/TackleCard.astro) / [GoThere.astro](../../src/components/widgets/GoThere.astro)
- ルール: import は`~/`エイリアス使用、アフィリエイトIDはAffiliateCard/TackleCard/GoThere経由必須（直接ハードコード禁止）— `kaijo-ui-components`スキル参照

**論点（着手時に検討）**:
- AffiliateCardの適用率がTackleCardに比べて低い（17 vs 191）。CVに直結するタックル紹介の露出が施設記事内でどの程度最適化されているか要棚卸し
- 施設記事内でのタックル紹介の配置（本文中盤／末尾FAQ前後など）が固定パターンになっているか、それとも記事ごとにバラつきがあるか
- どの魚種・釣法向けタックルが実際にクリックされているか（GA4のaffiliatecard_click実績）を見てから紹介ロジックを調整すべきか

### 方針: 「魚種別」と「施設別」の最適化ギャップを埋めるアプローチ（2026-09-25追記）

**課題認識**: 海上釣り堀は「同じ釣り方でも施設によって放流魚種の構成が違う」特性があるため、タックル紹介を魚種軸で最適化するか施設軸で最適化するかで意見が分かれる。現状のデータ構造は既に部分的にこの二軸を持っている:

- **魚種軸のデータ**: `src/content/affiliates/tackle/`に魚種別「攻略セット」商品が既に10種類存在（`aji-strategy-set` / `chinu-strategy-set` / `madai-strategy-set` / `kue-strategy-set` / `ishidai-strategy-set` / `kawahagi-strategy-set` / `shimaji-strategy-set` / `suzuki-strategy-set` / `fugu-strategy-set` / `bluefish-strategy-set`）。`tactics/fish-strategy/`配下の魚種別攻略記事はこれらを使ってTackleCardを多用（191件の大半はここ）。
- **施設軸のデータ**: 各施設記事のfrontmatter（`facility_details.target_fish`、[content/config.ts:112](../../src/content/config.ts:112)）に放流魚種リストが既に入力済み（例: 糸満イカダなら「タマン／ミーバイ／チヌ／カーエー／グルクン」等）。

→ つまり**「この施設で釣れる魚種」と「その魚種向けの攻略セット」を突き合わせれば、施設記事側にも根拠のあるタックル選定ができる**。ゼロから設計するのではなく、既存の魚種別攻略セットを施設ごとの放流構成にマッピングし直す作業が本筋になる。

**やること（Research→マッピングの流れ）**:
1. 全116施設記事の`target_fish`を集計し、放流魚種の出現頻度・施設ごとの「顔となる魚種（メイン1〜2種）」を洗い出す
2. 既存の魚種別攻略セット10種と`target_fish`の表記ゆれ（例: 「チヌ（ミナミクロダイ）」→`chinu`）を突き合わせ、カバー率を確認する
3. 攻略セットが存在しない魚種（施設のtarget_fishには頻出するが対応する`*-strategy-set`が無いもの）を洗い出し、新規商品化 or 既存の近縁セットへの代替可否を判断する
4. 施設記事側のAffiliateCard/TackleCard配置を、汎用セットではなく「その施設のメイン魚種に対応した攻略セット」を優先表示する形に順次差し替える（GA4のaffiliatecard_click実績があれば優先順位の裏付けに使う）

#### 調査結果（2026-09-30、手順1〜3実施）

`fishing-facility`配下116記事のうち`target_fish`ありは115件。表記ゆれ（「ブリ（ハマチ）」「チヌ（クロダイ）」等）を正規表現で正規化し、既存セット10種＋`blue-target-set`との対応を集計した。

**a. セットのカバー状況（対象魚種を持つ施設数 → うち該当セットのTackleCardが未掲載の施設数）**

| セット | 該当施設 | 未掲載 |
|---|---|---|
| madai-strategy-set | 86 | 23 |
| blue-target-set（ブリ/カンパチ/ヒラマサ系） | 74 | 24 |
| aji-strategy-set | 58 | 18 |
| **shimaji-strategy-set** | 55 | **50** |
| chinu-strategy-set | 43 | 24 |
| **kue-strategy-set** | 34 | **32** |
| **ishidai-strategy-set** | 22 | **20** |
| suzuki-strategy-set | 18 | 13 |
| kawahagi-strategy-set | 11 | 8 |
| fugu-strategy-set | 6 | 5 |

→ 施設記事のTackleCardは汎用（airlegato-lifejacket 95・madai 63・logos-hyotenka 61・blue-target 55・umibozu-fishgrip 49・aji 41）に偏り、シマアジ・クエ・イシダイ向けは対象施設の大半で未掲載。**最も差し替え効果が大きいのはshimaji（50件）・kue（32件）・ishidai（20件）**。`AffiliateCard`は施設記事では0件。

**b. 攻略セットが存在しない頻出魚種（新規商品化候補）**

ヒラメ31・アオリイカ27・メバル26・イサキ15・カサゴ14・キス14・サヨリ13・カレイ12・メジナ/グレ13・アイナメ8・クロソイ7・タチウオ5・サワラ/サゴシ4・タコ4。
- 近縁セットで代替できそう: カサゴ/メバル/アイナメ/ソイ→根魚ライト系（新規1本）、メジナ/グレ→chinu、サワラ/サゴシ/フクラギ/ツバス→blue-target
- 新規セット候補: ヒラメ（活きアジ泳がせ）、アオリイカ（エギング）、メバル・根魚、イサキ

**c. 注意点**
- `madai-strategy-set`の`targetFish`は「真鯛」のみ、`chinu`は「マダイ」も含むなど魚種表記が揃っていない（マッピング時は表記ゆれ吸収が必要）
- `kawahagi`等の少数セットは需要が小さいの可能性があり、GA4のaffiliatecard_click実績を見てから優先度を決める

**次の一手（手順4）**: ①shimaji・kue・ishidaiの未掲載施設から、メイン魚種に該当する施設を対象にTackleCardを追加する ②GA4でセット別クリック実績を確認してから新規セット（ヒラメ・アオリイカ・根魚）を決める。未掲載施設の一覧は集計スクリプトで再生成可能。

---

## [ ] 4. 更新済み記事のGSC再インデックス登録（手動・2026-09-29追記）

**背景**: 直近のSEO施策で本文・title・メタを更新した記事は、Googleの再クロール待ちだと反映が遅い。新しいtitle/descriptionがSERPに出るまでの時間を縮めるため、GSC「URL検査」→「インデックス登録をリクエスト」を手動で実行する。項目1と同じく1日あたりの上限に注意し、A→B→Cの順で登録する。

#### A. 2026-09-29更新（`column/ranking`、description・冒頭文を「釣り堀」表現に調整）

| 記事タイトル | URL |
|---|---|
| 【2026年最新】関西の海上釣り堀おすすめランキング｜大阪・兵庫 全9施設を比較 | https://kaijo-fishing.com/column/ranking/kansai/ |
| 【2026年最新】関東・静岡・愛知の海上釣り堀おすすめランキング｜千葉・神奈川・静岡・愛知 全8施設を比較 | https://kaijo-fishing.com/column/ranking/kanto-tokai/ |

#### B. 2026-09-23更新（コミット`3f3205c`、機会損失上位5施設の公式情報反映・FAQ新設）

| 記事タイトル | URL |
|---|---|
| 【閉店】篠島釣り天国｜離島で楽しむ海釣り体験の記録（愛知県南知多町） | https://kaijo-fishing.com/fishing-facility/shinojima-tsuri-tengoku/ |
| 【新潟県】直江津港第3東防波堤 管理釣り場｜入場料1,500円・マダイ・クロダイの大物実績多数 | https://kaijo-fishing.com/fishing-facility/naoetsu-port-3rd-east-breakwater/ |
| 【広島県】海上釣り堀 海遊｜阿多田島の離島で高級魚14種が釣り放題！瀬戸内の爆釣パラダイス | https://kaijo-fishing.com/fishing-facility/kaijo-tsuribori-kaiyu/ |
| 【大阪府】とっとパーク小島｜大人1,500円・青物＆マダイ狙える関西屈指の絶景海釣り公園 | https://kaijo-fishing.com/fishing-facility/totto-park-koshima/ |
| 【徳島県】釣ってみんで釣り堀｜徳島新鮮なっとく市の屋内釣り堀・利用料700円で真鯛が狙える全天候型スポット | https://kaijo-fishing.com/fishing-facility/family-tsuribori-tsutteminde/ |

#### C. 2026-09-21更新（コミット`98c3542`、CTR0%施設のタイトル/メタ改善10件）

| 記事タイトル | URL |
|---|---|
| 【愛知県】爆釣 美浜フィッシングパーク｜女性・子供5,000円〜・高級魚が狙える知多半島の海上釣り堀 | https://kaijo-fishing.com/fishing-facility/bakucho-mihama-fishing-park/ |
| 【新潟県】新潟東港第2東防波堤管理釣り場｜入場料1,500円・NPOが開放するショアジギングの聖地 | https://kaijo-fishing.com/fishing-facility/niigata-east-port-2nd-east-breakwater/ |
| 【神奈川県】城ヶ島J’s Fishing｜1時間7,150円〜・徒歩で渡れる船酔い知らずの海上釣り堀 | https://kaijo-fishing.com/fishing-facility/jogashima-js-fishing/ |
| 【兵庫県】神戸市立平磯海づり公園｜大人1,000円・東垂水駅徒歩3分で行ける海づり公園 | https://kaijo-fishing.com/fishing-facility/kobe-hiraiso-sea-fishing-park/ |
| 【兵庫県】海上釣り堀 水宝（すいほう）｜8,000円〜・世界最大級のイケス群を姫路から船25分で攻略 | https://kaijo-fishing.com/fishing-facility/suihou-fishing-pond/ |
| 【高知県】海上釣り堀 幸丸｜1匹保証コース5,000円〜・高級魚釣り放題も選べる浦ノ内湾の海上釣り堀 | https://kaijo-fishing.com/fishing-facility/kaijo-tsuribori-yukimaru/ |
| 【三重県】フィッシングパークトリトン｜2匹補償4,000円〜・海上BBQ完備で鳥羽の恵みを満喫 | https://kaijo-fishing.com/fishing-facility/fishing-park-triton/ |
| 【三重県】海上釣り堀福寿丸｜女性12,000円〜・活きアジで青物連発の南伊勢本格派 | https://kaijo-fishing.com/fishing-facility/kaijo-tsuribori-fukujumaru/ |
| 【三重県】光栄丸｜10回で1回無料！5,000円で楽しめる南伊勢の筏釣りパラダイス | https://kaijo-fishing.com/fishing-facility/koueimaru/ |
| 【長崎県】釣り堀はまかつ｜女性7,700円〜・驚異の13魚種でブリ・マダイ舞う九州屈指の海上釣り堀 | https://kaijo-fishing.com/fishing-facility/tsuribori-hamakatsu/ |

※ `ishida-fisherina`（項目1のTier2）も翌日以降の再実行待ち。

---

## [ ] 5. 施設名クエリのCTR検証（W40 GSCデータ・CTR2%以下）

**背景・目的**: 「パールマリン」「海上釣り堀海遊」「高橋渡船」など施設名そのもののクエリでCTRが0〜2%に留まっている。W40では「タイトルに施設名が既に入っておりタイトル修正では改善しない可能性が高い」→「Googleのローカルパック（マップ枠）や公式サイトにクリックを奪われている仮説」まで立てたが未検証。サイト全体の平均CTRは4.6%前後で推移しており（初期から5%弱の範囲で安定）、**大幅なタイトル改善は緊急性が低い**という判断のもと、このリストは「競合が強いだけ」なのか「こちらの見せ方が外れている」のかを切り分けるための検証対象。

**データ元**: `access-data/weekly-report/2026/w40/クエリ.csv`（過去3ヶ月）から、CTR2%以下かつ表示回数20以上の施設名クエリを、`fishing-facility`各記事のタイトル・略称に突き合わせて抽出（57件）。順位で3層に分けた。

**検証の見方**:
- 順位10位前後ではCTR1〜2%は標準的な水準（概ね順位1位で30%前後、5位で5%前後、10位で1〜2%が目安）。**A層（順位9位以内）でCTRが低いものだけが「異常」＝要検証**。B層は順位相応の可能性が高く、C層は順位が課題でCTR検証の対象外。
- 各クエリでGoogle検索を実際に行い、①ローカルパック（マップ枠）が最上段に出ているか ②公式サイトが1位を占めているか ③当サイトの見え方（title・description・サイトリンク・画像の有無）に違和感がないか、を確認する。
- ⚠印は【閉店】【閉業】【休園】表記のある施設。閉業施設を探している人が多く、順位は高くてもクリックされにくいのは自然な挙動のため、優先度は低い。

#### A. 順位9位以内なのにCTR2%以下（最優先：競合が強いのか、こちらが外しているのかの切り分け対象）（11件）

| 施設 | クエリ | 表示回数 | クリック | CTR | 順位 | 備考 / 対象URL |
|---|---|---|---|---|---|---|
| 海上釣り堀 海遊 | 海上釣り堀 海遊 | 290 | 2 | 0.69% | 7.9 | https://kaijo-fishing.com/fishing-facility/kaijo-tsuribori-kaiyu/ |
| 迎パールマリン | パールマリン | 130 | 0 | 0% | 8.85 | https://kaijo-fishing.com/fishing-facility/mukai-pearl-marine/ |
| 海上釣り堀 海遊 | 海上釣り堀海遊 | 111 | 0 | 0% | 8.26 | https://kaijo-fishing.com/fishing-facility/kaijo-tsuribori-kaiyu/ |
| 筏釣り 高橋渡船 | 高橋渡船 | 57 | 0 | 0% | 7.07 | https://kaijo-fishing.com/fishing-facility/raft-fishing-takahashi/ |
| 苫小牧港海釣り施設（一本防波堤） | 苫小牧釣り堀 | 54 | 0 | 0% | 7.96 | https://kaijo-fishing.com/fishing-facility/tomakomai-port-sea-fishing-facility/ |
| フィッシングランド日向 | フィッシングランド日向 | 52 | 0 | 0% | 7.48 | https://kaijo-fishing.com/fishing-facility/fishing-land-hyuga/ |
| 海釣り公園みかた | 海釣公園みかた | 49 | 0 | 0% | 7.84 | ⚠閉店/休園等 https://kaijo-fishing.com/fishing-facility/sea-fishing-park-mikata/ |
| 海上釣り堀 海遊 | 海上 釣り堀 海 遊 | 41 | 0 | 0% | 7.88 | https://kaijo-fishing.com/fishing-facility/kaijo-tsuribori-kaiyu/ |
| 湯の児フィッシングパーク | 湯の児フィッシングパーク 料金 | 41 | 0 | 0% | 8.8 | https://kaijo-fishing.com/fishing-facility/yunoko-fishing-park/ |
| 海上釣り堀オーパ | 釣り堀 オーパ 攻略 | 34 | 0 | 0% | 7.76 | https://kaijo-fishing.com/fishing-facility/kaijo-tsuribori-opa/ |
| 南港魚つり園護岸 | 南港魚釣り園 料金 | 30 | 0 | 0% | 8.07 | https://kaijo-fishing.com/fishing-facility/nanko-fishing-park/ |

#### B. 順位9〜15位でCTR2%以下（順位相応の可能性あり。Aの結果を見てから判断）（21件）

| 施設 | クエリ | 表示回数 | クリック | CTR | 順位 | 備考 / 対象URL |
|---|---|---|---|---|---|---|
| とっとパーク小島 | とっとパーク小島 料金 | 588 | 6 | 1.02% | 9.51 | https://kaijo-fishing.com/fishing-facility/totto-park-koshima/ |
| 釣ってみんで釣り堀 | 釣ってみんで釣り堀 | 521 | 6 | 1.15% | 10.5 | https://kaijo-fishing.com/fishing-facility/family-tsuribori-tsutteminde/ |
| 海上釣り堀あっとしー（@sea） | あっとしー | 209 | 2 | 0.96% | 9.89 | https://kaijo-fishing.com/fishing-facility/kaijo-tsuribori-at-sea/ |
| 釣ってみんで釣り堀 | 釣ってみんでフィッシング | 141 | 0 | 0% | 10.98 | https://kaijo-fishing.com/fishing-facility/family-tsuribori-tsutteminde/ |
| とっとパーク小島 | とっ と パーク小島 料金 | 125 | 2 | 1.6% | 9.9 | https://kaijo-fishing.com/fishing-facility/totto-park-koshima/ |
| 篠島釣り天国 | 篠島 釣り天国 | 122 | 2 | 1.64% | 9.91 | ⚠閉店/休園等 https://kaijo-fishing.com/fishing-facility/shinojima-tsuri-tengoku/ |
| 篠島釣り天国 | 篠島釣り天国 | 116 | 1 | 0.86% | 9.72 | ⚠閉店/休園等 https://kaijo-fishing.com/fishing-facility/shinojima-tsuri-tengoku/ |
| 仙台港中央公園（海の広場） | 仙台港 釣り | 111 | 0 | 0% | 13.04 | https://kaijo-fishing.com/fishing-facility/sendai-port-central-park-sea-square/ |
| 苫小牧港海釣り施設（一本防波堤） | 釣り堀 苫小牧 | 84 | 0 | 0% | 10.45 | https://kaijo-fishing.com/fishing-facility/tomakomai-port-sea-fishing-facility/ |
| 脇田（わいた）海釣り桟橋 | わいた釣り桟橋 | 60 | 1 | 1.67% | 10.18 | https://kaijo-fishing.com/fishing-facility/waita-sea-fishing-pier/ |
| 海上釣り堀あっとしー（@sea） | あっとしー明石 | 53 | 0 | 0% | 11.66 | https://kaijo-fishing.com/fishing-facility/kaijo-tsuribori-at-sea/ |
| 仙台港中央公園（海の広場） | 仙台港釣り | 53 | 0 | 0% | 14.43 | https://kaijo-fishing.com/fishing-facility/sendai-port-central-park-sea-square/ |
| 海上釣り堀あっとしー（@sea） | 明石海上釣り堀 ＠sea あっとしー | 51 | 0 | 0% | 11.29 | https://kaijo-fishing.com/fishing-facility/kaijo-tsuribori-at-sea/ |
| 鴨池海づり公園 | 鴨池海釣り公園 料金 | 47 | 0 | 0% | 11.4 | https://kaijo-fishing.com/fishing-facility/kamoike-sea-fishing-park/ |
| とっとパーク小島 | とっとパーク小島 | 42 | 0 | 0% | 14.33 | https://kaijo-fishing.com/fishing-facility/totto-park-koshima/ |
| 内瀬釣りセンター | ないぜ釣りセンター | 40 | 0 | 0% | 9.9 | https://kaijo-fishing.com/fishing-facility/naize-fishing-center/ |
| 浜部渡船 海上釣り堀 | 浜部渡船 | 33 | 0 | 0% | 11.7 | https://kaijo-fishing.com/fishing-facility/hamabe-tosen-kaijo-tsuribori/ |
| 浅虫海釣り公園 | 浅虫海釣り公園 料金 | 24 | 0 | 0% | 11 | https://kaijo-fishing.com/fishing-facility/asamushi-sea-fishing-park/ |
| 内瀬釣りセンター | 内瀬釣りセンター | 24 | 0 | 0% | 11.38 | https://kaijo-fishing.com/fishing-facility/naize-fishing-center/ |
| とっとパーク小島 | とっとパーク小島 ライフジャケット | 20 | 0 | 0% | 11.55 | https://kaijo-fishing.com/fishing-facility/totto-park-koshima/ |
| 由良海洋釣堀 | 由良海洋釣堀 | 20 | 0 | 0% | 14.9 | https://kaijo-fishing.com/fishing-facility/yura-marine-fishing-pond/ |

#### C. 順位15位より下（CTR以前に順位が課題。CTR検証の対象外）（25件）

| 施設 | クエリ | 表示回数 | クリック | CTR | 順位 | 備考 / 対象URL |
|---|---|---|---|---|---|---|
| 迎パールマリン | 迎パールマリン | 157 | 2 | 1.27% | 15.08 | https://kaijo-fishing.com/fishing-facility/mukai-pearl-marine/ |
| 舞鶴親海公園 | 舞鶴親海公園 | 97 | 0 | 0% | 20.15 | https://kaijo-fishing.com/fishing-facility/maizuru-shinkai-park/ |
| シーパーク丹生 | シーパーク丹生 | 87 | 1 | 1.15% | 25.79 | https://kaijo-fishing.com/fishing-facility/seapark-nyu/ |
| 仮屋湾遊漁センター | 仮屋湾遊漁センター | 56 | 1 | 1.79% | 38.36 | https://kaijo-fishing.com/fishing-facility/kariyawan-fishing-center/ |
| 篠島釣り天国 | 篠島つり天国 | 53 | 0 | 0% | 18.38 | ⚠閉店/休園等 https://kaijo-fishing.com/fishing-facility/shinojima-tsuri-tengoku/ |
| 和歌山マリーナシティ海釣り公園 | 和歌山マリーナシティ 海釣り公園 | 47 | 0 | 0% | 28.19 | https://kaijo-fishing.com/fishing-facility/wakayama-marinacity-fishing-park/ |
| 和歌山マリーナシティ海釣り公園 | 和歌山マリーナシティ海釣り公園・釣り堀 | 46 | 0 | 0% | 22.96 | https://kaijo-fishing.com/fishing-facility/wakayama-marinacity-fishing-park/ |
| ソルトレイクひけた 安戸池 | 安戸池 | 46 | 0 | 0% | 40 | https://kaijo-fishing.com/fishing-facility/saltlake-hiketa-adoike/ |
| 釣り公園佐助屋 | 釣り公園 佐助屋 | 45 | 0 | 0% | 29.4 | https://kaijo-fishing.com/fishing-facility/fishing-park-sasukeya/ |
| フィッシングパーク光 | フィッシングパーク光 | 45 | 0 | 0% | 30.78 | https://kaijo-fishing.com/fishing-facility/fishing-park-hikari/ |
| 下関フィッシングパーク | 下関フィッシングパーク | 45 | 0 | 0% | 35.27 | https://kaijo-fishing.com/fishing-facility/shimonoseki-fishing-park/ |
| 海釣ぽーと田尻 | 釣り堀 田尻 | 44 | 0 | 0% | 36.41 | https://kaijo-fishing.com/fishing-facility/umizuri-port-tajiri/ |
| 海上釣堀 岬 | 釣り堀 岬 | 42 | 0 | 0% | 27.07 | https://kaijo-fishing.com/fishing-facility/kaijo-tsuribori-misaki/ |
| 高島飛島磯釣り公園 | 飛島磯釣り公園 | 41 | 0 | 0% | 34.56 | https://kaijo-fishing.com/fishing-facility/takashima-tobishima-isotsuri-park/ |
| 海上釣堀 岬 | 海上釣り堀 岬 | 40 | 0 | 0% | 28.05 | https://kaijo-fishing.com/fishing-facility/kaijo-tsuribori-misaki/ |
| 海釣ぽーと田尻 | 海上釣り堀 田尻 | 39 | 0 | 0% | 36.74 | https://kaijo-fishing.com/fishing-facility/umizuri-port-tajiri/ |
| うみんぐ大島 | うみんぐ大島 | 36 | 0 | 0% | 31 | https://kaijo-fishing.com/fishing-facility/umingu-oshima/ |
| 松名瀬フィッシングパーク | 松名瀬フィッシングパーク | 35 | 0 | 0% | 19.71 | https://kaijo-fishing.com/fishing-facility/matsunase-fishing-park/ |
| いかだ釣りの東海 | 海上釣堀 筏釣りの東海 | 35 | 0 | 0% | 26.37 | https://kaijo-fishing.com/fishing-facility/ikadatsuri-tokai/ |
| 舞鶴親海公園 | 舞鶴 釣り堀 | 34 | 0 | 0% | 16.94 | https://kaijo-fishing.com/fishing-facility/maizuru-shinkai-park/ |
| 宮津市海洋つり場 | 宮津市海洋つり場 | 30 | 0 | 0% | 36.27 | https://kaijo-fishing.com/fishing-facility/miyazu-city-marine-fishing-park/ |
| 福岡市海づり公園 | 福岡市 釣り堀 | 26 | 0 | 0% | 33.92 | https://kaijo-fishing.com/fishing-facility/fukuoka-city-sea-fishing-park/ |
| 福岡市海づり公園 | 福岡市海づり公園 | 21 | 0 | 0% | 37.05 | https://kaijo-fishing.com/fishing-facility/fukuoka-city-sea-fishing-park/ |
| 浅虫海釣り公園 | 浅虫海づり公園 | 21 | 0 | 0% | 45.95 | https://kaijo-fishing.com/fishing-facility/asamushi-sea-fishing-park/ |
| 由良海つり公園 | 由良海つり公園 | 20 | 0 | 0% | 28.7 | https://kaijo-fishing.com/fishing-facility/yura-sea-fishing-park/ |

**判定メモ欄（検証後に記入）**: 各クエリごとに「競合（公式/マップ枠）が強い」「こちらの見せ方が外れている」「閉業等で対応不要」のいずれかを記録する。「見せ方が外れている」と判定した施設のみtitle/descriptionの個別修正対象とする。

#### 追記（2026-09-30）表記揺れ修正・GA4計測準備
- 施設記事`target_fish`の表記揺れを正規化（67記事。マダイ/クロダイ/スズキ/メジナ/キス/ハタ類/アイゴに統一、括弧書きは削除）。`tackle/*.json`の`targetFish`「真鯛」→「マダイ」（14ファイル）。
- GA4カスタムディメンション`affiliate_id`（イベントスコープ）を2026-09-30に登録。**この日以降の**`affiliatecard_click`は商品（セット）別に集計可能。`link_type`/`shop`は未登録。
- 次回PDCA（W41以降、1〜2週分溜まってから）で商品別クリックを確認し、手順4の優先順位を決める。

---

## [ ] 6. 【Tier1】タックルカードの魚種別再編成とid設計（まずResearch・物販強化の前提タスク／2026-09-30登録）

**目的**: ブログはアクセスがあるため、しばらく物販強化を最優先にする。項目3（施設別タックル最適化）の手順4（カード追加）に入る前に、**既存カードの商品選定とid・リンク仕様を魚種軸で作り直し**、`affiliate_id`（GA4で2026-09-30登録済み）で商品別の成果を分析できる状態にする。

**前提（現状の課題）**
- `src/content/affiliates/tackle/`のリンク形式が混在: `amzn.to`短縮リンク／`amazon.co.jp/dp/...?tag=sasisi344-22`／`tag`なしの`dp`直リンク（例: `B0CKD8D6Y9`）。tagなしは成果が計上されない恐れがあるため要確認
- idが商品名ベースで魚種との対応が読み取れない（`madai-strategy-set`等の攻略セットと汎用品`airlegato-lifejacket`等が同列）。GA4の`affiliate_id`で魚種別に集計しづらい
- `targetFish`表記は2026-09-30に「マダイ」等へ統一済み。セットは魚種軸だが、単品（竿・ライン・針・ウキ）は魚種紐付けが弱い
- 施設記事のTackleCardは汎用品（ライフジャケット・氷点下パック・グリップ等）に偏り、シマアジ・クエ・イシダイ向けは対象施設の大半で未掲載（項目3の調査結果参照）

**やること**
1. **Research（商品選定）**: 海上釣り堀で実際に使われるタックルを魚種別（マダイ・青物・シマアジ・クロダイ・イシダイ・クエ/ハタ・ヒラメ・アオリイカ・根魚 等）に調査する
   - メディア紹介: 釣具メーカー公式の海上釣り堀特集、釣り雑誌・釣具店ブログ、YouTube等の施設別タックル解説
   - ユーザーレビュー: Amazon・楽天・Yahoo!のレビュー（評価数・低評価理由・海上釣り堀での使用報告）
   - 魚種ごとに「竿／リール／ライン／仕掛け／針／エサ・消耗品」の推奨構成と、価格帯（入門／標準）を決める
2. **id命名規則の策定**: 例 `tackle/{魚種}-{カテゴリ}-{通し番号 or ブランド}` のように、`affiliate_id`だけで魚種とカテゴリが判別できる形にする。旧idからの対応表（リダイレクト表）を作り、記事内`<TackleCard id="...">`を一括置換できるようにする
3. **リンク・パラメータの統一**: Amazon `tag=`の付与漏れ解消、楽天・Yahoo!リンクの有無を揃える。`AffiliateCard.astro`が送るイベント（`affiliate_id`/`link_type`/`placement`/`shop`）に必要なdata属性が全商品で埋まっているか確認。必要なら`link_type`・`shop`もGA4カスタムディメンションに追加登録
4. **`targetFish`・`methods`・`categories`の整理**: 魚種軸で検索・集計できるよう、単品にも魚種を持たせる。魚種セットが無い魚種（ヒラメ・アオリイカ・メバル/根魚・イサキ）の新規セット化を決める
5. **既存記事への反映**: 旧id→新idの一括置換 → 項目3手順4（施設のメイン魚種に対応するセットの優先配置）へ進む
6. **計測**: `affiliate_id`が溜まった段階（W41〜W42以降）で商品別クリックを確認し、入れ替え・配置の優先度を判断

**進捗（2026-09-30）**: Research第1弾（マダイ・シマアジ・イシダイ・クエ/ハタ・青物）を[[tackle-research-phase1]]に記録。既存カードのkue/ishidai/suzuki/bluefish/chinuに商品と対象魚種の不一致を確認。第2弾（ユーザーレビュー取得・他魚種・最終推奨表）が次。

**決定・作業フォルダ（2026-09-30）**: 底物竿はシマノ ハードロッカー S83MH（イシダイ・イシガキダイ・クエ/ハタ）。`fish`パラメータは魚種ごとに別カード・別id。ルール・魚種コード・商品タイプ・魚種別台帳を`.workspace/affiliate-tags/物販/`に作成（README／fish-parameters／product-types／fish/*.md 10魚種）。実装TODO（`config.ts`のスキーマにfish追加、`AffiliateCard.astro`のgtagにfish、GA4カスタムディメンション`fish`登録、`tackle/*.json`の魚種別フォルダ分割と旧→新id対応表）は同READMEに記載。

**成果物イメージ**: 魚種×カテゴリの推奨タックル表（`.workspace/.task/`配下）、新id命名規則、旧→新id対応表、更新後の`tackle/*.json`

**関連**: 項目3（施設別最適化・本タスク完了後に手順4へ）／[[kaijo-ui-components]]スキルのルール（アフィリエイトは必ずAffiliateCard/TackleCard/GoThere経由・idハードコード禁止）

---

## [ ] 7. 施設別の竿長さ制限データ収集と`rod_length_limit`追加（2026-09-30登録）

**背景**: タックルカードの竿を施設のルールに合わせて出し分けるため（[[affiliate-tags/物販/選定方針]]§3）。竿の推奨長さは2.5〜3.5m（8〜11ft）。施設の竿長さ制限が3.5m以上または不明なら標準候補、3.5m未満なら制限以下のみ、3.5m超の緩い施設では長め帯も許容、と区別する。

**判明した事実**: 当サイトの施設記事116件には竿の**長さ**制限の記載がない（「竿の制限: 1人2本まで」等、本数の記載が2件のみ）。`facility_details`にも該当フィールドなし。

**やること**
1. 優先施設（アクセスの多い施設・海上釣り堀）から公式サイト・予約ページ・SNSで竿長さ制限を調査（例: 釣堀紀州は4.5m以上禁止）。優先度はGSCのクリック上位から
2. `config.ts`の`facility_details`に`rod_length_limit`（number、m、任意）を追加し、施設記事のfrontmatterに記入。記事本文の「ルール・注意事項」にも表記
3. 制限が未確認の施設は空欄＝標準候補（2.5〜3.5m）を表示、と運用
4. TackleCardの竿を施設の`rod_length_limit`で絞り込む仕組み（後段。まずは記事ごとに手動で配置でも可）

**関連**: 項目6（タックルカード再編成）
