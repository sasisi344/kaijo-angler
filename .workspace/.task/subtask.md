# サブタスク一覧（2026-09-25 クエリ分析より）

W37 `クエリ.csv`/`ページ.csv`の分析（[[weekly-task]]参照）で見つかった取りこぼしSEOのうち、個別対応する3件をここに記録する。

---

## [ ] 1. 最重要: 新旧URL統合のためGSCインデックス登録リクエスト

**背景**: `/blog/{slug}/`（旧URL）→`/fishing-facility/{slug}/`（新URL）への301リダイレクトは2026-07-14実装済みでコード側は正常（true 301・サイトマップはクリーン・内部リンクも旧URL残存なし、を確認済み）。しかし2ヶ月以上経過した現在もW37データで新旧URLペアが存在する103施設のうち、表示回数・クリックともに**64%が旧URL側に残ったまま**（旧: 表示回数17,574/クリック844、新: 表示回数9,928/クリック470）。Googleのインデックス統合が自然には進んでいないため、手動でのインデックス登録リクエストで統合を促進する。

**やること**: GSCログイン時に、以下の新URLに対して「URL検査」→「インデックス登録をリクエスト」を実行。あわせて余力があれば対応する旧URLを「削除（一時的に非表示）」ツールで外すと統合が早まる可能性がある。

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

## [x] 2. 「釣り堀」一般語クエリの競合調査（2026-09-27 調査完了・クローズ）

**背景**: 「釣り堀 大阪」(228imp/39.3位)・「釣り堀 関西」(197imp/35.9位)・「釣り堀 関東」(124imp/35.4位)・「大阪 釣り堀」(124imp/37.6位)など、地域名＋「釣り堀」（海上限定なし）の一般語で表示回数はあるがクリック0・30〜40位に沈んでいる。合計800imp超。

**懸念点（指摘済み）**: 「釣り堀」単体は淡水釣り堀（管理釣り場）も検索意図に含むため、海上釣り堀専門サイトが完全に上位を取るのは本質的に難しい可能性がある。

**やること**: 対応判断の前に、まず上位表示されている競合サイトの顔ぶれを確認する。
- 「釣り堀 大阪」「釣り堀 関西」等で実際に検索し、上位10件が淡水系（管理釣り場まとめサイト等）中心か、海上釣り堀も混在しているかを確認
- 混在していれば入り込む余地あり → `column/ranking/kansai/`等の既存記事タイトル・見出しへの短い言い回し追加を検討
- 淡水系サイトが完全に占有していれば費用対効果が低いため見送り判断

## 調査結果

### 「釣り堀 大阪」
1位が「大阪のおすすめ釣り堀7選！定番人気や初心者でも手ぶらで楽しめる場所など紹介」で淡水と海水が混在している。当サイトでも紹介している「サザン」「海釣ぽ～と田尻
」「海上釣り堀 オーパ！！」が含まれているので割合は半々。1つの施設紹介が詳しいわけじゃなく画像も特にないんだけど1位。2位も同様にキュレーション系で旅行紹介の一部。
3位に「東大阪釣堀センター公式サイト」「4位に海上釣り堀・岬」5位に「大阪海上釣り堀サザン」で6位に養魚場があるので海上釣り堀の比率が高いが、これは私がそこを検索した実績があるのでソートされているかもしれない。

クエリ検索したうえでの考えはドメインパワーによるものだと思うが、キュレーション系には勝てる見込みがあると思う。ただ当サイトは海上釣り堀と海釣り施設に限定しているため、やはり「釣り堀」だけのクエリ取得は難しいかもしれないが、ここを解決すれば他の地域でも光明が出るはず。

- 1位のURL: https://www.nap-camp.com/mag/78686
- 2位のURL: https://iko-yo.net/facilities?prefecture_ids%5B%5D=27&tags%5B%5D=%E9%87%A3%E3%82%8A%E5%A0%80

### 判定

「釣り堀 大阪」上位6件中3件が海上釣り堀サイト（東大阪釣堀センター公式・海上釣り堀岬・大阪海上釣り堀サザン）で、淡水系キュレーションサイトによる完全占有ではなかった。1・2位のキュレーション系は個別施設の情報が薄く画像もない状態でドメインパワーのみで上位を取っているため、コンテンツの深さでは対抗可能な見込みがある一方、「釣り堀」という一般語単体でのドメインパワー勝負にはなお不利。

→ **見送りではなく「軽い言い回し追加」で様子見が妥当**と判断しクローズ。`column/ranking/kansai/`等の既存タイトル・見出しに「釣り堀」という言い回しを追加する改善点を[[weekly-task]]に記録し、大規模な新規コンテンツ投資はせず低コストな調整から始める。

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
