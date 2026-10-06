# ブロック02: 優先順位 11〜20位（施設データ更新）

進め方・入力項目の定義は[[README]]。完了した施設は見出しの `[ ]` を `[x]` に。B項目は余力があれば実施。

ブロック合計表示回数: 7,340　／　完了: 6/10

---
### [x] 11. 鴨池海づり公園 — `kamoike-sea-fishing-park`
- 記事: `src/content/blog/fishing-facility/west-japan/kagoshima/kamoike-sea-fishing-park/index.mdx`　kagoshima／west-japan／最終更新 2026-07-07
- GSC（W40・過去3か月・新旧合算）: 表示 993 / クリック 37（新URL 640 ・旧URL 353）
- 推定タイプ: **海釣り公園型**　現行の料金表記: 大人 600円 / 小人 200円（4時間）
- 既存データの欠け: 電話・営業時間・公式サイト・place_id・評価
- 更新（A=全施設必須）: [ ] facilityType　[ ] stocked_fish/wild_fish　[ ] price_min/max・price_type・includes_gear　[ ] beginner/family/hands_free　[ ] needs_ferry・所要時間　[ ] reservation(enum)＋URL　[ ] official_site・sns　[ ] verified_at
- 更新（B=上位のみ）: [ ] open_months・closed_days　[ ] peak_months　[ ] takeout_rule　[ ] rod_length_limit　[ ] 放流履歴の遡及収集

### [ ] 12. 迎パールマリン — `mukai-pearl-marine`
- 記事: `src/content/blog/fishing-facility/west-japan/nagasaki/mukai-pearl-marine/index.mdx`　nagasaki／west-japan／最終更新 2026-03-22
- GSC（W40・過去3か月・新旧合算）: 表示 969 / クリック 29（新URL 432 ・旧URL 537）
- 推定タイプ: **要確認**　現行の料金表記: 乗り合い：大人 6,600円 / 貸切：110,000円〜
- 既存データの欠け: 電話・営業時間・公式サイト・place_id・評価
- 確認メモ: 渡船/送迎船の言及あり→`needs_ferry`確認
- 更新（A=全施設必須）: [ ] facilityType　[ ] stocked_fish/wild_fish　[ ] price_min/max・price_type・includes_gear　[ ] beginner/family/hands_free　[ ] needs_ferry・所要時間　[ ] reservation(enum)＋URL　[ ] official_site・sns　[ ] verified_at
- 更新（B=上位のみ）: [ ] open_months・closed_days　[ ] peak_months　[ ] takeout_rule　[ ] rod_length_limit　[ ] 放流履歴の遡及収集

### [ ] 13. 和歌山マリーナシティ海釣り公園 — `wakayama-marinacity-fishing-park`
- 記事: `src/content/blog/fishing-facility/west-japan/wakayama/wakayama-marinacity-fishing-park/index.mdx`　wakayama／west-japan／最終更新 2026-07-07
- GSC（W40・過去3か月・新旧合算）: 表示 836 / クリック 31（新URL 570 ・旧URL 266）
- 推定タイプ: **釣り堀型**　現行の料金表記: 公園 1,000円 / 釣り堀 11,000円〜
- 既存データの欠け: 電話・営業時間・公式サイト・place_id・評価
- 確認メモ: 本文に放流の言及あり→放流魚の抽出元／予約表記: 「釣り堀は要予約 / 公園は当日可」→enum化
- 更新（A=全施設必須）: [ ] facilityType　[ ] stocked_fish/wild_fish　[ ] price_min/max・price_type・includes_gear　[ ] beginner/family/hands_free　[ ] needs_ferry・所要時間　[ ] reservation(enum)＋URL　[ ] official_site・sns　[ ] verified_at
- 更新（B=上位のみ）: [ ] open_months・closed_days　[ ] peak_months　[ ] takeout_rule　[ ] rod_length_limit　[ ] 放流履歴の遡及収集

### [x] 14. 浅虫海釣り公園 — `asamushi-sea-fishing-park`
- 記事: `src/content/blog/fishing-facility/east-japan/aomori/asamushi-sea-fishing-park/index.mdx`　aomori／east-japan／最終更新 2026-03-22
- GSC（W40・過去3か月・新旧合算）: 表示 769 / クリック 26（新URL 406 ・旧URL 363）
- 推定タイプ: **海釣り公園型**　現行の料金表記: 700円〜1,500円
- 既存データの欠け: なし
- 確認メモ: 予約表記: 「不要（先着順）」→enum化
- 更新（A=全施設必須）: [ ] facilityType　[ ] stocked_fish/wild_fish　[ ] price_min/max・price_type・includes_gear　[ ] beginner/family/hands_free　[ ] needs_ferry・所要時間　[ ] reservation(enum)＋URL　[ ] official_site・sns　[ ] verified_at
- 更新（B=上位のみ）: [ ] open_months・closed_days　[ ] peak_months　[ ] takeout_rule　[ ] rod_length_limit　[ ] 放流履歴の遡及収集

### [x] 15. 海釣ぽーと田尻 — `umizuri-port-tajiri`
- 記事: `src/content/blog/fishing-facility/west-japan/osaka/umizuri-port-tajiri/index.mdx`　osaka／west-japan／最終更新 2026-03-22
- GSC（W40・過去3か月・新旧合算）: 表示 756 / クリック 36（新URL 430 ・旧URL 326）
- 推定タイプ: **釣り堀型**　現行の料金表記: 一日コース：男性11,000円 / 女性・子供5,500円
- 既存データの欠け: place_id
- 確認メモ: 本文に放流の言及あり→放流魚の抽出元／予約表記: 「要予約（電話・公式サイト）」→enum化
- 更新（A=全施設必須）: [ ] facilityType　[ ] stocked_fish/wild_fish　[ ] price_min/max・price_type・includes_gear　[ ] beginner/family/hands_free　[ ] needs_ferry・所要時間　[ ] reservation(enum)＋URL　[ ] official_site・sns　[ ] verified_at
- 更新（B=上位のみ）: [ ] open_months・closed_days　[ ] peak_months　[ ] takeout_rule　[ ] rod_length_limit　[ ] 放流履歴の遡及収集

### [x] 16. 由良海洋釣堀 — `yura-marine-fishing-pond`
- 記事: `src/content/blog/fishing-facility/east-japan/yamagata/yura-marine-fishing-pond/index.mdx`　yamagata／east-japan／最終更新 2026-03-22
- GSC（W40・過去3か月・新旧合算）: 表示 681 / クリック 30（新URL 478 ・旧URL 203）
- 推定タイプ: **釣り堀型**　現行の料金表記: 1,300円（大人）
- 既存データの欠け: なし
- 確認メモ: 本文に放流の言及あり→放流魚の抽出元／予約表記: 「不要（混雑時は待ち時間あり）」→enum化
- 更新（A=全施設必須）: [ ] facilityType　[ ] stocked_fish/wild_fish　[ ] price_min/max・price_type・includes_gear　[ ] beginner/family/hands_free　[ ] needs_ferry・所要時間　[ ] reservation(enum)＋URL　[ ] official_site・sns　[ ] verified_at
- 更新（B=上位のみ）: [ ] open_months・closed_days　[ ] peak_months　[ ] takeout_rule　[ ] rod_length_limit　[ ] 放流履歴の遡及収集

### [ ] 17. シーパーク丹生 — `seapark-nyu`
- 記事: `src/content/blog/fishing-facility/center-japan/fukui/seapark-nyu/index.mdx`　fukui／center-japan／最終更新 2026-03-22
- GSC（W40・過去3か月・新旧合算）: 表示 606 / クリック 48（新URL 396 ・旧URL 210）
- 推定タイプ: **釣り堀型**　現行の料金表記: 4,000円〜11,000円
- 既存データの欠け: なし
- 確認メモ: 本文に放流の言及あり→放流魚の抽出元
- 更新（A=全施設必須）: [ ] facilityType　[ ] stocked_fish/wild_fish　[ ] price_min/max・price_type・includes_gear　[ ] beginner/family/hands_free　[ ] needs_ferry・所要時間　[ ] reservation(enum)＋URL　[ ] official_site・sns　[ ] verified_at
- 更新（B=上位のみ）: [ ] open_months・closed_days　[ ] peak_months　[ ] takeout_rule　[ ] rod_length_limit　[ ] 放流履歴の遡及収集

### [x] 18. 福岡市海づり公園 — `fukuoka-city-sea-fishing-park`
- 記事: `src/content/blog/fishing-facility/west-japan/fukuoka/fukuoka-city-sea-fishing-park/index.mdx`　fukuoka／west-japan／最終更新 2026-03-22
- GSC（W40・過去3か月・新旧合算）: 表示 603 / クリック 10（新URL 540 ・旧URL 63）
- 推定タイプ: **海釣り公園型**　現行の料金表記: 大人 1,000円（4時間利用）
- 既存データの欠け: 電話・営業時間・公式サイト・place_id・評価
- 更新（A=全施設必須）: [ ] facilityType　[ ] stocked_fish/wild_fish　[ ] price_min/max・price_type・includes_gear　[ ] beginner/family/hands_free　[ ] needs_ferry・所要時間　[ ] reservation(enum)＋URL　[ ] official_site・sns　[ ] verified_at
- 更新（B=上位のみ）: [ ] open_months・closed_days　[ ] peak_months　[ ] takeout_rule　[ ] rod_length_limit　[ ] 放流履歴の遡及収集

### [ ] 19. 新舞子マリンパーク魚釣り施設 — `shinmaiko-marine-park-fishing`
- 記事: `src/content/blog/fishing-facility/center-japan/aichi/shinmaiko-marine-park-fishing/index.mdx`　aichi／center-japan／最終更新 2026-03-22
- GSC（W40・過去3か月・新旧合算）: 表示 570 / クリック 12（新URL 75 ・旧URL 495）
- 推定タイプ: **海釣り公園型**　現行の料金表記: 無料
- 既存データの欠け: なし
- 確認メモ: 料金に数値なし／無料施設
- 更新（A=全施設必須）: [ ] facilityType　[ ] stocked_fish/wild_fish　[ ] price_min/max・price_type・includes_gear　[ ] beginner/family/hands_free　[ ] needs_ferry・所要時間　[ ] reservation(enum)＋URL　[ ] official_site・sns　[ ] verified_at
- 更新（B=上位のみ）: [ ] open_months・closed_days　[ ] peak_months　[ ] takeout_rule　[ ] rod_length_limit　[ ] 放流履歴の遡及収集

### [x] 20. 苫小牧港海釣り施設（一本防波堤） — `tomakomai-port-sea-fishing-facility`
- 記事: `src/content/blog/fishing-facility/east-japan/hokkaido/tomakomai-facility/tomakomai-port-sea-fishing-facility/index.mdx`　hokkaido／east-japan／最終更新 2026-03-22
- GSC（W40・過去3か月・新旧合算）: 表示 557 / クリック 8（新URL 416 ・旧URL 141）
- 推定タイプ: **海釣り公園型**　現行の料金表記: 1,500円（大人）
- 既存データの欠け: なし
- 確認メモ: 予約表記: 「不要（先着順100名）」→enum化
- 更新（A=全施設必須）: [ ] facilityType　[ ] stocked_fish/wild_fish　[ ] price_min/max・price_type・includes_gear　[ ] beginner/family/hands_free　[ ] needs_ferry・所要時間　[ ] reservation(enum)＋URL　[ ] official_site・sns　[ ] verified_at
- 更新（B=上位のみ）: [ ] open_months・closed_days　[ ] peak_months　[ ] takeout_rule　[ ] rod_length_limit　[ ] 放流履歴の遡及収集

---

## 調査結果（2026-10-06）

確度: ◎公式（自治体・施設公式）で確認／△検索要約・まとめサイトのみ。**⚠は記事との食い違い・要照合**。竿の本数は`rod_count_limit`（上限本数の数値）、長さは`rod_length_limit`。確認できないものは未記入。

| # | 施設 | frontmatter反映 | 確認できた事実 | 要照合・未確認 |
|---|---|---|---|---|
| 11 | 鴨池海づり公園 | sea-park／本数制限の記載なし（2026-10-06訂正）／確認日 ◎ | ~~「釣糸の使用は1人2本まで」~~（運営者確認で記載なしと確定）・投げ釣り禁止・まき餌禁止（アミカゴ除く）・年中無休・4〜9月6:00〜19:00／10月6:00〜18:00／11〜3月7:00〜17:00・TEL 099-252-1021（鹿児島市） | ⚠**料金が令和7年10月から変更予定**（市ページ。記事は大人600円/小人200円）→料金表PDFを確認。「釣糸」を竿本数として扱った |
| 12 | 迎パールマリン | facilityTypeなし | 乗合 大人6,600円・子5,500円／貸切110,000円〜／通年7:00〜17:00／完全予約制・10名以下は出港中止の可能性／TEL 0956-66-2334 △ | 竿の長さ・本数・渡船の有無・公式サイトとも未確認（移動式イカダ＋船） |
| 13 | 和歌山マリーナシティ海釣り公園 | なし | 釣り公園（波止）と海洋釣り堀の2ゾーン／釣り堀は「竿は1人1本」△／釣り堀 終日10,300円・半日7,200円・貸竿1,500円△／火曜休／TEL 073-448-0020 | ⚠記事は釣り堀11,000円〜→料金改定の可能性。2ゾーンのためfacilityTypeを1つに決められない。公式で確認 |
| 14 | 浅虫海釣り公園 | sea-park／本数2／先着順 ◎ | 持込み竿は2本まで・投げ釣りは周囲確認の注意（長さ記載なし）・入園150円/70円・つり台700円/500円・竿500円・火曜休／**営業は4/29〜10/12（2026年度）**9:00〜17:00（10月は〜16:00）・TEL 017-752-2810（青森市・更新2026-06-17） | ⚠記事の料金「700円〜1,500円」と営業期間・時間を照合。今季の営業は終了間近（10/12まで） |
| 15 | 海釣ぽーと田尻 | sea-pond／本数1／渡船なし／予約必須 ◎ | 「一人一本・一本針」・2本竿は追加料金5,500円・撒き餌/紀州団子/複数針/ルアー禁止・火曜休・釣り時間8:00〜13:00・専用桟橋・放流は公式で「1日2回」・TEL 072-465-0099・貸竿1,500円 | ⚠料金（公式取得ページはエンジョイ5,500円等。記事は「一日コース 男性11,000円/女性・子供5,500円」）、放流回数を記事と照合。竿の長さ3.5mまでは他サイト情報のみ（公式で未確認のため未記入） |
| 16 | 由良海洋釣堀 | sea-pond（分類のみ） | 営業は**4/18〜10/18の土日祝のみ（海水浴期間は毎日）**9:00〜17:00／大人1,300円・小700円／竿・餌・仕掛けは**持込禁止（貸竿込み）**／持ち帰り7匹まで／1回2時間／TEL 0235-73-2666 △ | 竿の本数は記載なし。営業日・時間を記事と照合。今季営業は10/18まで |
| 17 | シーパーク丹生 | なし | 営業7:00〜15:00・TEL 0770-39-1900 △ | ⚠**情報源で食い違い**（定休日が木曜／月曜、料金体系も別）。竿の本数も「1人1本」との情報はあるが公式未確認。公式 `www1.kl.mmnet-ai.ne.jp/~nyu/` に接続できず |
| 18 | 福岡市海づり公園 | sea-park／本数3 ◎ | 「1人で使用できる竿は3本まで（入場者が多い時は1本）」・サビキ/アミカゴ/浮きかごの遠投禁止（釣台から約5m以内は可）・ルアーは指定場所の平日のみ・ヤエン禁止・まき餌はアミ/沖アミのみ（福岡市漁協 公式） | 混雑時は1本。営業時間（月別）・料金の記事との照合 |
| 19 | 新舞子マリンパーク魚釣り施設 | sea-park（分類のみ） | 「1人2本まで」「ダンゴ釣り・ウキフカセ禁止」「5:15〜20:00 年中無休・無料」△（公式 `marine-park.jp` はWebFetchが証明書エラー） | 公式をChromeで確認してから本数を記入 |
| 20 | 苫小牧港海釣り施設（一本防波堤） | sea-park／本数2／先着順 ◎ | 「サオは1人2本以内」・入場 大人1,500円/中学生1,000円/小学生500円・駐車800円・LJ貸出500円・4〜11月の土日祝6:00開場（9月〜17時、10月〜16時閉場）・予約制ではなく来場順・100人超で待機・小学生未満入場不可 | ⚠記事の開場期間（4〜10月とする記事あり）を公式の「4〜11月」と照合 |

### 所見
- 本数が公式で数値化できたのは 田尻1・浅虫2・福岡市3・苫小牧2。**長さ制限は田尻の3.5mが他サイト由来のみ**で、公式確認できたのは block-01 のあっとしぃー（3.5m）だけ
- **料金が改定済み・改定予定の可能性**: 鴨池（令和7年10月変更予定）・和歌山マリーナシティ・田尻。診断の予算フィルタに使う前に個別確認が必要
- **営業期間が限られる施設**: 浅虫（〜10/12）・由良（〜10/18）・苫小牧（〜11月）。診断で「今行けるか」を出すには`open_months`が要る（B項目）

---

## 個別記事対応タスク（2026-10-06）

施設情報の修正は記事ごとに実施する。完了したら `[x]` にし、`needs-confirmation.md` の該当施設も更新する。

- [x] **鴨池海づり公園**（`kamoike-sea-fishing-park`）【公式 umiduri-kouen.com で確認し更新済み 2026-10-06: 大人900円/小人300円・超過150円/70円・見学150円/70円・回数券・貸竿1本300円・駐車1時間70円・水深21〜25m】令和7年10月改定後の料金表（市の料金表PDF）で記事の大人600円/小人200円（4時間）・超過料金を更新。投げ釣り禁止・まき餌禁止（アミカゴ除く）を本文に明記（竿の本数制限は記載なし）。営業時間（4〜9月6:00〜19:00／10月〜18:00／11〜3月7:00〜17:00）・年中無休・電話 099-252-1021 を記事と照合
- [ ] **迎パールマリン**（`mukai-pearl-marine`）: 公式サイト・電話（0956-66-2334）で竿の長さ・本数、渡船の有無、10名以下の出港中止条件を確認。乗合6,600円/5,500円・貸切110,000円〜・営業7:00〜17:00を記事と照合
- [ ] **和歌山マリーナシティ海釣り公園**（`wakayama-marinacity-fishing-park`）: 2024年7月リニューアル後の料金を公式で確認（釣り堀 終日10,300円・半日7,200円の情報あり。記事は11,000円〜）。釣り堀は竿1人1本（要公式確認）。波止ゾーンと釣り堀ゾーンで`facilityType`をどうするか決める
- [x] **浅虫海釣り公園**（`asamushi-sea-fishing-park`）: 今年度の営業期間（4/29〜10/12）・営業時間（9:00〜17:00、10月は〜16:00）・火曜休園を記事と照合。料金（入園150円/70円・つり台700円/500円・竿500円）を記事の「700円〜1,500円」と照合。持込み竿2本までを本文に明記
- [x] **海釣ぽーと田尻**（`umizuri-port-tajiri`）: 料金コース（公式はエンジョイ5,500円ほか）を記事の「一日コース 男性11,000円/女性・子供5,500円」と照合。放流は公式で1日2回なので記事の回数を確認。竿は1人1本・1本針、2本竿は追加5,500円、撒き餌/紀州団子/ルアー禁止を本文に明記。竿の長さ上限を公式で確認できたら`rod_length_limit`を記入
- [x] **由良海洋釣堀**（`yura-marine-fishing-pond`）: 営業期間（4/18〜10/18の土日祝のみ・海水浴期間は毎日）・9:00〜17:00・料金（大人1,300円/小700円）・持ち帰り7匹まで・1回2時間・竿/餌/仕掛けの持込禁止（貸竿込み）を公式（鶴岡市・海の駅ゆら）で確認し、記事を更新
- [ ] **シーパーク丹生**（`seapark-nyu`）: 定休日（木曜か月曜か）・料金体系・営業時間（7:00〜15:00、受付13:00まで）を公式（丹生観光協会）か電話（0770-39-1900）で確認して記事を更新。竿の本数（1人1本の情報あり）も同時に確認して記入
- [x] **福岡市海づり公園**（`fukuoka-city-sea-fishing-park`）: 営業時間（月別）・料金（4時間1,000円/500円）を公式（umizuri.com）と照合。竿は3本まで（混雑時は1本）・サビキ/アミカゴ/浮きかごの遠投禁止・ルアーは指定場所の平日のみ・ヤエン禁止・まき餌はアミ/沖アミのみ、を本文に明記
- [ ] **新舞子マリンパーク魚釣り施設**（`shinmaiko-marine-park-fishing`）: 公式（`marine-park.jp`）をChromeで開き、竿の本数（2本の情報あり）・ダンゴ釣り/ウキフカセ禁止・利用時間（5:15〜20:00）を確認。確認できたら`rod_count_limit`を記入し本文にも明記
- [x] **苫小牧港海釣り施設（一本防波堤）**（`tomakomai-port-sea-fishing-facility`）: 公式の開場期間（4〜11月の土日祝、6:00開場、9月〜17時・10月〜16時閉場）と記事の記載を照合。入場料（大人1,500円/中学生1,000円/小学生500円）・駐車800円・LJ貸出500円・小学生未満不可・予約不要（100人超で待機）を記事に反映。竿は1人2本以内を本文に明記
