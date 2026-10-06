# ブロック09: 優先順位 81〜90位（施設データ更新）

進め方・入力項目の定義は[[README]]。完了した施設は見出しの `[ ]` を `[x]` に。B項目は対象外（A項目のみ）。

ブロック合計表示回数: 436　／　完了: 3/10

---
### [ ] 81. フィッシングパーク大三島 — `fishing-park-omishima`
- 記事: `src/content/blog/fishing-facility/west-japan/ehime/fishing-park-omishima/index.mdx`　ehime／west-japan／最終更新 2026-03-22
- GSC（W40・過去3か月・新旧合算）: 表示 50 / クリック 3（新URL 23 ・旧URL 27）
- 推定タイプ: **釣り堀型**　現行の料金表記: 桟橋 1,000円 / 釣り堀 3,500円
- 既存データの欠け: 電話・営業時間・公式サイト・place_id・評価
- 確認メモ: 本文に放流の言及あり→放流魚の抽出元
- 更新（A=全施設必須）: [ ] facilityType　[ ] stocked_fish/wild_fish　[ ] price_min/max・price_type・includes_gear　[ ] beginner/family/hands_free　[ ] needs_ferry・所要時間　[ ] reservation(enum)＋URL　[ ] official_site・sns　[ ] verified_at
- 更新（B=上位のみ）: [ ] open_months・closed_days　[ ] peak_months　[ ] takeout_rule　[ ] rod_length_limit　[ ] 放流履歴の遡及収集

### [ ] 82. 雑賀崎シーパーク — `saikakizaki-seapark`
- 記事: `src/content/blog/fishing-facility/west-japan/wakayama/saikakizaki-seapark/index.mdx`　wakayama／west-japan／最終更新 2026-03-22
- GSC（W40・過去3か月・新旧合算）: 表示 48 / クリック 4（新URL 10 ・旧URL 38）
- 推定タイプ: **釣り堀型**　現行の料金表記: 一般 13,200円 / チョイ釣り 2,200円（1尾）
- 既存データの欠け: 電話・営業時間・公式サイト・place_id・評価
- 確認メモ: 渡船/送迎船の言及あり→`needs_ferry`確認／予約表記: 「要予約（一般コース） / チョイ釣りは当日可」→enum化
- 更新（A=全施設必須）: [ ] facilityType　[ ] stocked_fish/wild_fish　[ ] price_min/max・price_type・includes_gear　[ ] beginner/family/hands_free　[ ] needs_ferry・所要時間　[ ] reservation(enum)＋URL　[ ] official_site・sns　[ ] verified_at
- 更新（B=上位のみ）: [ ] open_months・closed_days　[ ] peak_months　[ ] takeout_rule　[ ] rod_length_limit　[ ] 放流履歴の遡及収集

### [x] 83. 海上釣り堀 水宝（すいほう） — `suihou-fishing-pond`
- 記事: `src/content/blog/fishing-facility/west-japan/hyogo/suihou-fishing-pond/index.mdx`　hyogo／west-japan／最終更新 2026-03-22
- GSC（W40・過去3か月・新旧合算）: 表示 48 / クリック 0（新URL 32 ・旧URL 16）
- 推定タイプ: **釣り堀型**　現行の料金表記: 男性 14,000円 / 女性・子供 8,000円（渡船料込）
- 既存データの欠け: 電話・営業時間・公式サイト・place_id・評価
- 確認メモ: 渡船/送迎船の言及あり→`needs_ferry`確認／本文に放流の言及あり→放流魚の抽出元／予約表記: 「要予約（電話・公式サイト）」→enum化
- 更新（A=全施設必須）: [ ] facilityType　[ ] stocked_fish/wild_fish　[ ] price_min/max・price_type・includes_gear　[ ] beginner/family/hands_free　[ ] needs_ferry・所要時間　[ ] reservation(enum)＋URL　[ ] official_site・sns　[ ] verified_at
- 更新（B=上位のみ）: [ ] open_months・closed_days　[ ] peak_months　[ ] takeout_rule　[ ] rod_length_limit　[ ] 放流履歴の遡及収集

### [ ] 84. 海上釣堀和光 — `kaijo-tsuribori-wako`
- 記事: `src/content/blog/fishing-facility/west-japan/mie/kaijo-tsuribori-wako/index.mdx`　mie／west-japan／最終更新 2026-03-22
- GSC（W40・過去3か月・新旧合算）: 表示 45 / クリック 2（新URL 37 ・旧URL 8）
- 推定タイプ: **釣り堀型**　現行の料金表記: 大人 13,000円 / 女性 10,000円
- 既存データの欠け: 電話・営業時間・公式サイト・place_id・評価
- 確認メモ: 本文に放流の言及あり→放流魚の抽出元
- 更新（A=全施設必須）: [ ] facilityType　[ ] stocked_fish/wild_fish　[ ] price_min/max・price_type・includes_gear　[ ] beginner/family/hands_free　[ ] needs_ferry・所要時間　[ ] reservation(enum)＋URL　[ ] official_site・sns　[ ] verified_at
- 更新（B=上位のみ）: [ ] open_months・closed_days　[ ] peak_months　[ ] takeout_rule　[ ] rod_length_limit　[ ] 放流履歴の遡及収集

### [x] 85. 海上釣堀辨屋 — `kaijo-tsuribori-benya`
- 記事: `src/content/blog/fishing-facility/west-japan/mie/kaijo-tsuribori-benya/index.mdx`　mie／west-japan／最終更新 2026-03-22
- GSC（W40・過去3か月・新旧合算）: 表示 45 / クリック 1（新URL 45 ・旧URL 0）
- 推定タイプ: **釣り堀型**　現行の料金表記: 大人 13,000円 / 女性・中学生 10,000円
- 既存データの欠け: 電話・営業時間・公式サイト・place_id・評価
- 確認メモ: 本文に放流の言及あり→放流魚の抽出元
- 更新（A=全施設必須）: [ ] facilityType　[ ] stocked_fish/wild_fish　[ ] price_min/max・price_type・includes_gear　[ ] beginner/family/hands_free　[ ] needs_ferry・所要時間　[ ] reservation(enum)＋URL　[ ] official_site・sns　[ ] verified_at
- 更新（B=上位のみ）: [ ] open_months・closed_days　[ ] peak_months　[ ] takeout_rule　[ ] rod_length_limit　[ ] 放流履歴の遡及収集

### [ ] 86. 釣り堀はまかつ — `tsuribori-hamakatsu`
- 記事: `src/content/blog/fishing-facility/west-japan/nagasaki/tsuribori-hamakatsu/index.mdx`　nagasaki／west-japan／最終更新 2026-03-22
- GSC（W40・過去3か月・新旧合算）: 表示 43 / クリック 0（新URL 35 ・旧URL 8）
- 推定タイプ: **釣り堀型**　現行の料金表記: 男性 11,000円 / 女性 7,700円 / 子供 5,500円
- 既存データの欠け: 電話・営業時間・公式サイト・place_id・評価
- 確認メモ: 本文に放流の言及あり→放流魚の抽出元
- 更新（A=全施設必須）: [ ] facilityType　[ ] stocked_fish/wild_fish　[ ] price_min/max・price_type・includes_gear　[ ] beginner/family/hands_free　[ ] needs_ferry・所要時間　[ ] reservation(enum)＋URL　[ ] official_site・sns　[ ] verified_at
- 更新（B=上位のみ）: [ ] open_months・closed_days　[ ] peak_months　[ ] takeout_rule　[ ] rod_length_limit　[ ] 放流履歴の遡及収集

### [ ] 87. みうら海王 — `miura-kaiou`
- 記事: `src/content/blog/fishing-facility/east-japan/kanagawa/miura-kaiou/index.mdx`　kanagawa／east-japan／最終更新 2026-03-22
- GSC（W40・過去3か月・新旧合算）: 表示 42 / クリック 1（新URL 32 ・旧URL 10）
- 推定タイプ: **釣り堀型**　現行の料金表記: 16,500円（男性・税込）
- 既存データの欠け: なし
- 確認メモ: 渡船/送迎船の言及あり→`needs_ferry`確認／本文に放流の言及あり→放流魚の抽出元／予約表記: 「要予約（電話または公式サイト）」→enum化
- 更新（A=全施設必須）: [ ] facilityType　[ ] stocked_fish/wild_fish　[ ] price_min/max・price_type・includes_gear　[ ] beginner/family/hands_free　[ ] needs_ferry・所要時間　[ ] reservation(enum)＋URL　[ ] official_site・sns　[ ] verified_at
- 更新（B=上位のみ）: [ ] open_months・closed_days　[ ] peak_months　[ ] takeout_rule　[ ] rod_length_limit　[ ] 放流履歴の遡及収集

### [ ] 88. ブルーパーク阿納 — `blue-park-ano`
- 記事: `src/content/blog/fishing-facility/center-japan/fukui/blue-park-ano/index.mdx`　fukui／center-japan／最終更新 2026-03-22
- GSC（W40・過去3か月・新旧合算）: 表示 39 / クリック 2（新URL 39 ・旧URL 0）
- 推定タイプ: **釣り堀型**　現行の料金表記: 3,000円〜10,000円
- 既存データの欠け: なし
- 確認メモ: 予約表記: 「要予約（公式サイト参照）」→enum化
- 更新（A=全施設必須）: [ ] facilityType　[ ] stocked_fish/wild_fish　[ ] price_min/max・price_type・includes_gear　[ ] beginner/family/hands_free　[ ] needs_ferry・所要時間　[ ] reservation(enum)＋URL　[ ] official_site・sns　[ ] verified_at
- 更新（B=上位のみ）: [ ] open_months・closed_days　[ ] peak_months　[ ] takeout_rule　[ ] rod_length_limit　[ ] 放流履歴の遡及収集

### [ ] 89. 爆釣 美浜フィッシングパーク — `bakucho-mihama-fishing-park`
- 記事: `src/content/blog/fishing-facility/center-japan/aichi/bakucho-mihama-fishing-park/index.mdx`　aichi／center-japan／最終更新 2026-03-22
- GSC（W40・過去3か月・新旧合算）: 表示 39 / クリック 0（新URL 27 ・旧URL 12）
- 推定タイプ: **釣り堀型**　現行の料金表記: 6,000円〜12,000円
- 既存データの欠け: なし
- 確認メモ: 本文に放流の言及あり→放流魚の抽出元／予約表記: 「要確認（公式サイト参照）」→enum化
- 更新（A=全施設必須）: [ ] facilityType　[ ] stocked_fish/wild_fish　[ ] price_min/max・price_type・includes_gear　[ ] beginner/family/hands_free　[ ] needs_ferry・所要時間　[ ] reservation(enum)＋URL　[ ] official_site・sns　[ ] verified_at
- 更新（B=上位のみ）: [ ] open_months・closed_days　[ ] peak_months　[ ] takeout_rule　[ ] rod_length_limit　[ ] 放流履歴の遡及収集

### [x] 90. 新潟東港第2東防波堤管理釣り場 — `niigata-east-port-2nd-east-breakwater`
- 記事: `src/content/blog/fishing-facility/center-japan/niigata/niigata-east-port-2nd-east-breakwater/index.mdx`　niigata／center-japan／最終更新 2026-03-22
- GSC（W40・過去3か月・新旧合算）: 表示 37 / クリック 0（新URL 25 ・旧URL 12）
- 推定タイプ: **海釣り公園型**　現行の料金表記: 入場料 1,500円
- 既存データの欠け: なし
- 確認メモ: 料金が入場料のみ（釣り堀型の料金要確認）／予約表記: 「推奨（Web予約あり）」→enum化
- 更新（A=全施設必須）: [ ] facilityType　[ ] stocked_fish/wild_fish　[ ] price_min/max・price_type・includes_gear　[ ] beginner/family/hands_free　[ ] needs_ferry・所要時間　[ ] reservation(enum)＋URL　[ ] official_site・sns　[ ] verified_at
- 更新（B=上位のみ）: [ ] open_months・closed_days　[ ] peak_months　[ ] takeout_rule　[ ] rod_length_limit　[ ] 放流履歴の遡及収集

---

## 調査結果（2026-10-06）

確度: ◎公式で確認／△検索要約・まとめサイトのみ。**⚠は記事との食い違い・要照合**。

| # | 施設 | frontmatter反映 | 確認できた事実 | 要照合・未確認 |
|---|---|---|---|---|
| 81 | フィッシングパーク大三島 | other（桟橋＋釣堀の複合・分類のみ） | △釣堀 9:00〜15:00・桟橋 8:30〜16:30・水曜休・年末年始休・ノーマル（アジ）/チャレンジ（タイ）コース 各3,500円（竿・LJ込）・アジ5匹/タイ2匹まで持ち帰り・見学 大人200円/小人100円・TEL 0897-83-0136（大三島漁協） | 公式（大三島漁協）が証明書エラーで取得できず→Chromeで確認。記事の「桟橋1,000円/釣り堀3,500円」を照合。竿の規定は記載なし |
| 82 | 雑賀崎シーパーク | sea-pond（分類のみ） | ◎公式（`saikazaki-seapark.com`）：一般予約（相席）男性13,200円・女性9,900円・子供5,500円・見学1,100円・チョイ釣り（予約不要）2尾4,400円/1尾2,200円（1時間以内）・貸竿1,500円・おまかせセット3,500円・8:00〜13:00（受付7:30〜）・チョイ釣り 平日9:00〜12:00/土日9:00〜14:00・**火曜休**・1/1休・リリース禁止（チョイ釣り） | 記事の料金（一般13,200円・チョイ釣り2,200円）は一致。コースにより予約要否が違うため`reservation_type`は未記入。竿の規定・渡船は記載なし（記事は桟橋で歩いて渡れる） |
| 83 | 海上釣り堀 水宝 | sea-pond／渡船あり／予約必須／本数1 ◎ | 公式（`suihoh.com`）：大人（高校生以上）14,000円・女性/中学生11,000円・小学生8,000円（**渡船料込み**）・「お一人様竿1本・針1本で釣る料金。複数竿は人数分の料金加算」・見学 大人1,000円/小学生以下500円・貸竿2,000円（針2本付）・貸切 平日15名以上/土日祝20名以上・料理サービス有料（クエは不可）。△姫路港集合・送迎船「水宝丸」・TEL 079-327-1243・竿1本・針1本・ルアー/撒き餌禁止 | ⚠**記事の「女性・子供8,000円」が不一致**（公式は女性/中学生11,000円・小学生8,000円）。営業時間・定休日は公式の別ページで確認 |
| 84 | 海上釣堀和光 | sea-pond／予約必須／本数1 ◎ | 公式（`fishing-wako.com`）：大人13,000円・女性10,000円・子供（小学生以下）6,000円・貸切 平日52,000円〜/土日祝78,000円〜・貸竿＋リール2,000円・「竿は一人様1本まで」・撒き餌/ルアー/サビキ禁止・ゴミ・余りの餌は持ち帰り・出船6:30・終了14:00・電話（0599-64-3888）またはメール（カレンダー）予約 | 記事の料金（大人13,000円/女性10,000円）は一致。子供6,000円・貸切の記載、定休日（公式に記載なし）を照合 |
| 85 | 海上釣堀辨屋 | sea-pond／予約必須（分類・予約） | ◎公式（`benya.tv`）：乗合 大人14,000円・女性/中学生11,000円・子供（小6まで）5,000円・貸切 小筏 平日84,000円〜/土日祝112,000円〜・大筏 平日112,000円〜/土日祝140,000円〜・貸竿1,500円（浮き仕掛け）・スタンプ（10回で50%割引）・弁当1,000円・電話予約 090-8868-2033・納竿13:30。△竿1本・針1本・4.5m以上禁止（貸切は複数竿OK） | ⚠**記事の「大人13,000円/女性・中学生10,000円」が古い**（14,000円/11,000円）。竿の規定は公式の「お願い」ページで確認してから記入（「4.5m以上禁止」は釣堀紀州と同様に運営者確認に食い違いがあったため、公式原文を確認） |
| 86 | 釣り堀はまかつ | sea-pond／予約必須 ◎ | 公式（`hamakatu.com`）：電話予約のみ（月〜土9:00〜15:00・予約なしの来店は断る場合あり）0956-75-2057・受付7:00〜・釣り8:00〜正午・日曜休（月〜土営業）・放流はヤズ/ハマチ/タイ/ヒラス/カンパチ/イサキ/スズキ/アラ他。△竿1本・長さ4m以内・ルアー/サビキ/撒き餌禁止・釣り座は抽選 | 公式トップに料金の記載なし。記事の「男性11,000円/女性7,700円/子供5,500円」を公式の料金ページで確認。竿の規定は公式で確認してから記入 |
| 87 | みうら海王 | sea-pond／渡船あり／予約必須／本数1 ◎ | 公式（`miura-kaiou.com`）：男性16,500円・女性13,200円・子供11,000円（税込）・見学・渡船3,300円（女性・子どものみ・男性の見学/渡船は不可）・貸切 1人16,500円（土日祝10名〜/平日6名〜）・「お一人様竿一本が基本。複数人で2本出す場合は金額上位2人分」・アミエビ等の撒き餌禁止・**火曜休（祝日は営業）**・キャンセル 3日前17時まで30%/2日前50%/前日80%/当日100%・TEL 046-880-0505 | 記事の料金（16,500円）は一致。営業時間・放流魚は公式に記載なし |
| 88 | ブルーパーク阿納 | sea-pond（分類のみ） | 公式 `www4.ocn.ne.jp/~bluepark/` は接続できず（ENOTFOUND） | 記事の`website_url`が現存するか確認（公式サイトの特定・更新）。料金（3,000円〜10,000円）・予約・竿の規定を電話（0770-52-1111）で確認 |
| 89 | 爆釣 美浜フィッシングパーク | sea-pond（分類のみ） | 公式 `bakuchoumihama.jimdo.com` はSSLハンドシェイク失敗で取得できず | Chromeで確認。料金（6,000円〜12,000円）・予約（記事は「要確認」）・竿の規定・放流魚を確認 |
| 90 | 新潟東港第2東防波堤管理釣り場 | sea-park（分類のみ） | ◎公式（`happyfishing.jp`）：2026年度開放中・日により営業時間が違う（例: 10/6 6:00〜17:00）・強風/波浪予報時は「未定」・予約システムあり（詳細は下層ページ）・Water Safety Guideへのリンク | 料金・予約方法・竿の規定は公式トップに記載なし。記事の「入場料1,500円」「推奨（Web予約あり）」を下層ページで照合 |

### 所見
- 数値で記入できた本数: 水宝1・和光1・みうら海王1。**渡船の有無（`needs_ferry`）が確定できたのは水宝・みうら海王の2施設**
- **料金が古い・不一致の記事**: 辨屋（13,000円→14,000円、女性11,000円）・水宝（女性・子供の料金区分）。公式に料金の記載がない施設（はまかつ・新潟東港・阿納・美浜）は下層ページの確認が必要
- 公式サイトが取得できない施設が3つ（大三島・阿納・美浜）あり、Chromeでの確認に回す

---

## 個別記事対応タスク（2026-10-06）

- [x] **海上釣堀辨屋**（`kaijo-tsuribori-benya`）【最優先】: 料金を公式に更新（乗合 大人14,000円・女性/中学生11,000円・子供〔小6まで〕5,000円、貸切 小筏 平日84,000円〜/土日祝112,000円〜・大筏 平日112,000円〜/土日祝140,000円〜、貸竿1,500円、スタンプ10回で50%割引、弁当1,000円、早帰り12:30〜）。納竿13:30・電話予約（090-8868-2033・20時まで）を反映。竿の規定（竿1本・針1本・4.5m以上禁止の情報）は公式の「辨屋からのお願い」ページ（`benya.tv/onegai/`）で原文を確認してから`rod_count_limit`/`rod_length_limit`を記入
- [x] **海上釣り堀 水宝（すいほう）**（`suihou-fishing-pond`）【最優先】: 料金区分を公式に更新（大人〔高校生以上〕14,000円・女性/中学生11,000円・小学生8,000円。いずれも渡船料込み）。竿1本・針1本（複数竿は人数分加算）、貸竿2,000円（針2本付）、見学 大人1,000円/小学生以下500円、貸切（平日15名以上/土日祝20名以上）、料理サービス有料（クエは不可）を反映。姫路港集合・送迎船の記述（`needs_ferry: true`）を照合。営業時間・定休日は公式の別ページで確認
- [ ] **みうら海王**（`miura-kaiou`）: 料金（男性16,500円・女性13,200円・子供11,000円、見学・渡船3,300円〔女性・子どものみ〕）、貸切（1人16,500円）、キャンセル規定（3日前17時まで30%/2日前50%/前日80%/当日100%）、火曜休（祝日は営業）、竿は1本が基本（複数人で2本出す場合は上位2人分の料金）、アミエビ等の撒き餌禁止を記事と照合・反映
- [ ] **海上釣堀和光**（`kaijo-tsuribori-wako`）: 子供6,000円・貸切（平日52,000円〜/土日祝78,000円〜）・貸竿＋リール2,000円・出船6:30・終了14:00・竿は1人1本・撒き餌/ルアー/サビキ禁止・ゴミ持ち帰りを記事に反映。定休日を電話（0599-64-3888）で確認
- [ ] **釣り堀はまかつ**（`tsuribori-hamakatsu`）: 公式 `hamakatu.com` の料金ページで料金（記事は男性11,000円/女性7,700円/子供5,500円）を確認して照合。電話予約のみ（月〜土9:00〜15:00・予約なしの来店は断る場合あり）・日曜休・釣り8:00〜正午・受付7:00〜を反映。竿1本・4m以内の情報（△）を公式で確認して`rod_length_limit`/`rod_count_limit`を記入
- [ ] **雑賀崎シーパーク**（`saikakizaki-seapark`）: 料金（一般13,200円/女性9,900円/子供5,500円/見学1,100円、ちょい釣り 2尾4,400円・1尾2,200円）・営業時間（8:00〜13:00、ちょい釣り 平日9:00〜12:00/土日9:00〜14:00）・火曜休・リリース禁止（チョイ釣り）を記事と照合。貸竿1,500円・おまかせセット3,500円を反映
- [x] **新潟東港第2東防波堤管理釣り場**（`niigata-east-port-2nd-east-breakwater`）: 公式 `happyfishing.jp` の下層ページで料金（1,500円）・Web予約の方法・竿の規定・LJを確認し、記事の「推奨（Web予約あり）」と照合。開放日が日々変わる旨を本文に明記
- [ ] **フィッシングパーク大三島**（`fishing-park-omishima`）: 公式（大三島漁協 `jf-omishima.or.jp`・Chrome）で料金（桟橋・釣堀。ノーマル/チャレンジ各3,500円〔竿・LJ込〕）・営業時間（釣堀9:00〜15:00・桟橋8:30〜16:30）・水曜休・持ち帰り（アジ5匹/タイ2匹）・入園の人数制限（最大20組・1組最長1時間）を確認し、記事と照合
- [ ] **ブルーパーク阿納**（`blue-park-ano`）: 記事の`website_url`（ocn.ne.jp、接続不可）が現存するかを確認し、公式サイトを特定して更新。電話（0770-52-1111）で料金（3,000円〜10,000円）・予約・竿の規定・営業時間を確認
- [ ] **爆釣 美浜フィッシングパーク**（`bakucho-mihama-fishing-park`）: 公式（jimdo、Chrome）で料金（6,000円〜12,000円）・予約（記事は「要確認」）・竿の規定・放流魚・営業時間を確認し、`reservation_type`を記入
