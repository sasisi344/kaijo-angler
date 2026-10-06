# ブロック06: 優先順位 51〜60位（施設データ更新）

進め方・入力項目の定義は[[README]]。完了した施設は見出しの `[ ]` を `[x]` に。B項目は対象外（A項目のみ）。

ブロック合計表示回数: 1,569　／　完了: 5/10

---
### [ ] 51. 内瀬釣りセンター — `naize-fishing-center`
- 記事: `src/content/blog/fishing-facility/west-japan/mie/naize-fishing-center/index.mdx`　mie／west-japan／最終更新 2026-03-22
- GSC（W40・過去3か月・新旧合算）: 表示 181 / クリック 7（新URL 168 ・旧URL 13）
- 推定タイプ: **釣り堀型**　現行の料金表記: 大人 4,000円 / 女性・中学生 3,500円 / 小学生 2,500円
- 既存データの欠け: 電話・営業時間・公式サイト・place_id・評価
- 確認メモ: 渡船/送迎船の言及あり→`needs_ferry`確認
- 更新（A=全施設必須）: [ ] facilityType　[ ] stocked_fish/wild_fish　[ ] price_min/max・price_type・includes_gear　[ ] beginner/family/hands_free　[ ] needs_ferry・所要時間　[ ] reservation(enum)＋URL　[ ] official_site・sns　[ ] verified_at
- 更新（B=上位のみ）: [ ] open_months・closed_days　[ ] peak_months　[ ] takeout_rule　[ ] rod_length_limit　[ ] 放流履歴の遡及収集

### [x] 52. 松名瀬フィッシングパーク — `matsunase-fishing-park`
- 記事: `src/content/blog/fishing-facility/west-japan/mie/matsunase-fishing-park/index.mdx`　mie／west-japan／最終更新 2026-03-22
- GSC（W40・過去3か月・新旧合算）: 表示 178 / クリック 9（新URL 8 ・旧URL 170）
- 推定タイプ: **要確認**　現行の料金表記: 1日 11,000円 / 半日 7,000円
- 既存データの欠け: 電話・営業時間・公式サイト・place_id・評価
- 確認メモ: 渡船/送迎船の言及あり→`needs_ferry`確認／本文に放流の言及あり→放流魚の抽出元
- 更新（A=全施設必須）: [ ] facilityType　[ ] stocked_fish/wild_fish　[ ] price_min/max・price_type・includes_gear　[ ] beginner/family/hands_free　[ ] needs_ferry・所要時間　[ ] reservation(enum)＋URL　[ ] official_site・sns　[ ] verified_at
- 更新（B=上位のみ）: [ ] open_months・closed_days　[ ] peak_months　[ ] takeout_rule　[ ] rod_length_limit　[ ] 放流履歴の遡及収集

### [x] 53. 桜島海づり公園 — `sakurajima-sea-fishing-park`
- 記事: `src/content/blog/fishing-facility/west-japan/kagoshima/sakurajima-sea-fishing-park/index.mdx`　kagoshima／west-japan／最終更新 2026-03-22
- GSC（W40・過去3か月・新旧合算）: 表示 173 / クリック 1（新URL 161 ・旧URL 12）
- 推定タイプ: **海釣り公園型**　現行の料金表記: 大人 200円 / 小人 100円（4時間・貸竿込）
- 既存データの欠け: 電話・営業時間・公式サイト・place_id・評価
- 更新（A=全施設必須）: [ ] facilityType　[ ] stocked_fish/wild_fish　[ ] price_min/max・price_type・includes_gear　[ ] beginner/family/hands_free　[ ] needs_ferry・所要時間　[ ] reservation(enum)＋URL　[ ] official_site・sns　[ ] verified_at
- 更新（B=上位のみ）: [ ] open_months・closed_days　[ ] peak_months　[ ] takeout_rule　[ ] rod_length_limit　[ ] 放流履歴の遡及収集

### [x] 54. オリジナルメーカー海づり公園 — `original-maker-sea-fishing-park`
- 記事: `src/content/blog/fishing-facility/east-japan/chiba/original-maker-sea-fishing-park/index.mdx`　chiba／east-japan／最終更新 2026-03-22
- GSC（W40・過去3か月・新旧合算）: 表示 158 / クリック 7（新URL 133 ・旧URL 25）
- 推定タイプ: **海釣り公園型**　現行の料金表記: 一般 920円
- 既存データの欠け: なし
- 確認メモ: 予約表記: 「不要（釣りレッスンは要予約）」→enum化
- 更新（A=全施設必須）: [ ] facilityType　[ ] stocked_fish/wild_fish　[ ] price_min/max・price_type・includes_gear　[ ] beginner/family/hands_free　[ ] needs_ferry・所要時間　[ ] reservation(enum)＋URL　[ ] official_site・sns　[ ] verified_at
- 更新（B=上位のみ）: [ ] open_months・closed_days　[ ] peak_months　[ ] takeout_rule　[ ] rod_length_limit　[ ] 放流履歴の遡及収集

### [ ] 55. 日明かんしんつり公園 — `hiake-kaikyo-fishing-park`
- 記事: `src/content/blog/fishing-facility/west-japan/fukuoka/hiake-kaikyo-fishing-park/index.mdx`　fukuoka／west-japan／最終更新 2026-03-22
- GSC（W40・過去3か月・新旧合算）: 表示 155 / クリック 10（新URL 155 ・旧URL 0）
- 推定タイプ: **要確認**　現行の料金表記: 入場無料
- 既存データの欠け: 電話・営業時間・公式サイト・place_id・評価
- 確認メモ: 料金に数値なし／無料施設
- 更新（A=全施設必須）: [ ] facilityType　[ ] stocked_fish/wild_fish　[ ] price_min/max・price_type・includes_gear　[ ] beginner/family/hands_free　[ ] needs_ferry・所要時間　[ ] reservation(enum)＋URL　[ ] official_site・sns　[ ] verified_at
- 更新（B=上位のみ）: [ ] open_months・closed_days　[ ] peak_months　[ ] takeout_rule　[ ] rod_length_limit　[ ] 放流履歴の遡及収集

### [ ] 56. 海上釣り堀まるや — `kaijo-tsuribori-maruya`
- 記事: `src/content/blog/fishing-facility/center-japan/shizuoka/kaijo-tsuribori-maruya/index.mdx`　shizuoka／center-japan／最終更新 2026-03-22
- GSC（W40・過去3か月・新旧合算）: 表示 154 / クリック 2（新URL 75 ・旧URL 79）
- 推定タイプ: **釣り堀型**　現行の料金表記: 大人 13,700円
- 既存データの欠け: なし
- 確認メモ: 渡船/送迎船の言及あり→`needs_ferry`確認／本文に放流の言及あり→放流魚の抽出元／予約表記: 「必須（要電話予約）」→enum化
- 更新（A=全施設必須）: [ ] facilityType　[ ] stocked_fish/wild_fish　[ ] price_min/max・price_type・includes_gear　[ ] beginner/family/hands_free　[ ] needs_ferry・所要時間　[ ] reservation(enum)＋URL　[ ] official_site・sns　[ ] verified_at
- 更新（B=上位のみ）: [ ] open_months・closed_days　[ ] peak_months　[ ] takeout_rule　[ ] rod_length_limit　[ ] 放流履歴の遡及収集

### [ ] 57. 浜部渡船 海上釣り堀 — `hamabe-tosen-kaijo-tsuribori`
- 記事: `src/content/blog/fishing-facility/west-japan/tokushima/hamabe-tosen-kaijo-tsuribori/index.mdx`　tokushima／west-japan／最終更新 2026-07-09
- GSC（W40・過去3か月・新旧合算）: 表示 147 / クリック 7（新URL 124 ・旧URL 23）
- 推定タイプ: **釣り堀型**　現行の料金表記: 3,000円（30分制限 / 5匹まで）
- 既存データの欠け: place_id
- 確認メモ: 渡船/送迎船の言及あり→`needs_ferry`確認／本文に放流の言及あり→放流魚の抽出元／予約表記: 「要予約（公式サイト・電話）」→enum化
- 更新（A=全施設必須）: [ ] facilityType　[ ] stocked_fish/wild_fish　[ ] price_min/max・price_type・includes_gear　[ ] beginner/family/hands_free　[ ] needs_ferry・所要時間　[ ] reservation(enum)＋URL　[ ] official_site・sns　[ ] verified_at
- 更新（B=上位のみ）: [ ] open_months・closed_days　[ ] peak_months　[ ] takeout_rule　[ ] rod_length_limit　[ ] 放流履歴の遡及収集

### [x] 58. つりぼりマルヨ — `tsuribori-maruyo`
- 記事: `src/content/blog/fishing-facility/west-japan/mie/tsuribori-maruyo/index.mdx`　mie／west-japan／最終更新 2026-03-22
- GSC（W40・過去3か月・新旧合算）: 表示 143 / クリック 4（新URL 50 ・旧URL 93）
- 推定タイプ: **釣り堀型**　現行の料金表記: 大人 13,000円 / 女性 10,000円 / 子供 5,000円
- 既存データの欠け: 電話・営業時間・公式サイト・place_id・評価
- 確認メモ: 渡船/送迎船の言及あり→`needs_ferry`確認／本文に放流の言及あり→放流魚の抽出元
- 更新（A=全施設必須）: [ ] facilityType　[ ] stocked_fish/wild_fish　[ ] price_min/max・price_type・includes_gear　[ ] beginner/family/hands_free　[ ] needs_ferry・所要時間　[ ] reservation(enum)＋URL　[ ] official_site・sns　[ ] verified_at
- 更新（B=上位のみ）: [ ] open_months・closed_days　[ ] peak_months　[ ] takeout_rule　[ ] rod_length_limit　[ ] 放流履歴の遡及収集

### [x] 59. 直江津港第3東防波堤 管理釣り場 — `naoetsu-port-3rd-east-breakwater`
- 記事: `src/content/blog/fishing-facility/center-japan/niigata/naoetsu-port-3rd-east-breakwater/index.mdx`　niigata／center-japan／最終更新 2026-03-22
- GSC（W40・過去3か月・新旧合算）: 表示 141 / クリック 2（新URL 25 ・旧URL 116）
- 推定タイプ: **海釣り公園型**　現行の料金表記: 入場料 1,500円
- 既存データの欠け: なし
- 確認メモ: 料金が入場料のみ（釣り堀型の料金要確認）／予約表記: 「事前予約不可（前日16時以降に順番待ち受付番号を取得）」→enum化
- 更新（A=全施設必須）: [ ] facilityType　[ ] stocked_fish/wild_fish　[ ] price_min/max・price_type・includes_gear　[ ] beginner/family/hands_free　[ ] needs_ferry・所要時間　[ ] reservation(enum)＋URL　[ ] official_site・sns　[ ] verified_at
- 更新（B=上位のみ）: [ ] open_months・closed_days　[ ] peak_months　[ ] takeout_rule　[ ] rod_length_limit　[ ] 放流履歴の遡及収集

### [ ] 60. 海上釣り堀 太公望 — `kaijo-tsuribori-taikoubou`
- 記事: `src/content/blog/fishing-facility/center-japan/shizuoka/kaijo-tsuribori-taikoubou/index.mdx`　shizuoka／center-japan／最終更新 2026-03-22
- GSC（W40・過去3か月・新旧合算）: 表示 139 / クリック 7（新URL 104 ・旧URL 35）
- 推定タイプ: **釣り堀型**　現行の料金表記: ファミリーコース 5,000円（渡船・竿・エサ込）
- 既存データの欠け: なし
- 確認メモ: 渡船/送迎船の言及あり→`needs_ferry`確認／予約表記: 「不要（予約優先）」→enum化
- 更新（A=全施設必須）: [ ] facilityType　[ ] stocked_fish/wild_fish　[ ] price_min/max・price_type・includes_gear　[ ] beginner/family/hands_free　[ ] needs_ferry・所要時間　[ ] reservation(enum)＋URL　[ ] official_site・sns　[ ] verified_at
- 更新（B=上位のみ）: [ ] open_months・closed_days　[ ] peak_months　[ ] takeout_rule　[ ] rod_length_limit　[ ] 放流履歴の遡及収集

---

## 調査結果（2026-10-06）

確度: ◎公式で確認／△検索要約・まとめサイトのみ。**⚠は記事との食い違い・要照合**。

| # | 施設 | frontmatter反映 | 確認できた事実 | 要照合・未確認 |
|---|---|---|---|---|
| 51 | 内瀬釣りセンター | なし | △筏・カセ 大人4,000円/子供2,500円、海上釣堀 大人12,000円・女性10,000円・子供5,000円・貸切100,000円・貸竿1,000円・「竿はひとり1本、撒き餌・サビキ禁止」・筏 夏6:00〜17:00／冬6:30〜16:30・釣堀 〜14:00・TEL 090-3158-1110 | ⚠記事の料金「大人4,000円/女性・中学生3,500円/小学生2,500円」は筏の料金か要確認（釣堀は別料金）。公式 `ohyamanet.com/~zenme/` で確認。渡船の有無 |
| 52 | 松名瀬フィッシングパーク | other（陸上釣り堀）／本数1 ◎ | 公式（`fishing-park.jp`）：「竿は1本、針も1本」「5m以上の竿は使用禁止」・ルアー/サビキ/ギジエ/撒き餌禁止・予約は**前日20時までの電話のみ**・電話 0598-59-0233／080-8261-3292・定休日は不定休・営業 8:00〜16:00・**陸上の釣り堀**（ヒラメ養殖の丸年水産） | **運営者が公式を確認し、調査内容が正しいと確認（2026-10-06）**：陸上釣り堀・1日券9,000円（ヒラメのお土産付き）・4時間券6,000円・貸切プラン お一人様15,000円・ファミリーパック9,000円（大人1人＋子供1人、ヒラメのお土産付き）・バーベキュースペース場所代1,500円・トイレ/水道/自販機/休憩室/大型駐車場完備。⚠**記事の料金（1日11,000円/半日7,000円）と「渡船」の記述は不一致→更新が必要**。竿の長さは「5m以上禁止」＝未満のため未記入 |
| 53 | 桜島海づり公園 | sea-park／本数制限の記載なし（2026-10-06訂正） ◎ | ~~鹿児島市公式：「釣糸の使用は1人2本まで」~~（運営者確認で記載なしと確定）・投げ釣り禁止・**貸竿は無料**・4〜9月6:00〜19:00／10月〜18:00／11〜3月7:00〜17:00・年中無休・TEL 099-293-3937 | ⚠**料金が令和7年10月から変更予定**（市の料金表PDF）。記事の「大人200円/小人100円（4時間・貸竿込）」を照合 |
| 54 | オリジナルメーカー海づり公園 | sea-park／本数2 ◎ | 公式：「1人で3本以上の釣り糸を用いての釣りは禁止」・釣り料 一般920円/高齢者460円・見学220円・**中学生以下・障がい者は無料**・貸竿1,000円・LJ無料貸出・マンツーマンレッスン8,800円/ターム（完全予約制、0436-21-0419）・4〜10月6:00〜19:00／11〜3月7:00〜17:00・**月曜休（7〜10月は毎日）**・危険な投げ釣り/ペット/日傘/パラソル禁止 | 記事の料金（一般920円）は一致。中学生以下無料・休園日・営業時間を記事と照合 |
| 55 | 日明かんしんつり公園 | sea-park（分類のみ） | △入場無料・無料駐車場・4〜10月6:00〜18:00／11〜3月7:00〜17:00・投げ釣り禁止・TEL 093-591-2557 | 竿の本数は記載なし。北九州市の公式で確認 |
| 56 | 海上釣り堀まるや | sea-pond／渡船あり ◎ | 公式：通常便 大人13,700円・子ども6,000円・渡船のみ3,000円／午後便（土日祝13:30〜16:00）大人11,200円／貸切1筏111,000円／受付7:00・出港8:00・釣り開始8:15・終了13:30／毎日1回放流／**「完全貸切制の施設」**・TEL 080-5118-8080 | 記事の料金（大人13,700円）は一致。予約の仕組み（記事は「必須（要電話予約）」）と「完全貸切制」の意味を照合。竿の規定は記載なし |
| 57 | 浜部渡船 海上釣り堀 | なし | △30分3,000円（5匹まで・竿・餌込）・要予約・10:00〜16:00・不定休・捌き500円・TEL 0884-76-2707 | 公式 `mitoko-hamabe.com` のトップは渡船（磯）の案内で、海上釣り堀の下層ページ（`/fishing`）は未取得。竿の規定・渡船の仕組みを確認 |
| 58 | つりぼりマルヨ | sea-pond（分類のみ） | △竿は1人1本・1本針（貸切除く）・サビキ/撒き餌/ルアー禁止・火曜休・5〜9月頃6:30〜13:30／10〜4月頃7:00〜14:00・陸と桟橋で往来・TEL 0596-77-0404・毎月4日は大放流 | **運営者確認（2026-10-06）: 令和8年6月1日から値上げ。フリー 男性14,000円・女性10,000円・子供5,000円**。⚠記事の13,000円は古い→更新が必要。竿1人1本・1本針は公式 `maruyo.jp`（接続エラー）をChromeで確認できてから`rod_count_limit: 1`を記入 |
| 59 | 直江津港第3東防波堤 管理釣り場 | sea-park／先着順 ◎ | 公式（`happyfishing-n.jp`）：予約から**順番待ち**へ切替（管理棟に発券機）・開放日・時間は日々公式に掲載（例: 10/6は6:00〜、10/7〜8は大型船入出港で終日閉鎖）・TEL 070-4375-5452 | 料金・竿の規定は公式トップに記載なし。記事の入場料1,500円・「前日16時以降に順番待ち受付番号」を公式の下層ページで照合 |
| 60 | 海上釣り堀 太公望 | なし | **運営者確認（2026-10-06）: 公式ページはもともと存在しない**（アソビュー等の旅行プラン掲載のみ）→**現状維持**。△ファミリーコース 釣り料5,500円＋参加1,100円（受付から最長1時間・貸竿1本につきタイ2尾・アジ3尾まで）・渡船500円/人（小学生以上）・水曜休・受付8:00〜15:00・道具持込禁止 | 公式サイトがないため対応不要（記事のURLがじゃらんなのは正しい） |

### 所見
- 数値で記入できた本数: オリジナルメーカー2・松名瀬1。**公式が長さを「◯m以上禁止」と書く施設**（松名瀬 5m以上）は「◯mまで」と意味が違うため`rod_length_limit`は未記入のまま
- **料金が古い疑いが強い記事**: 松名瀬・マルヨ・太公望。桜島は令和7年10月の改定で記事が古い可能性
- 渡船が絡む施設（内瀬・浜部・太公望・まるや）は`needs_ferry`と予約の仕組みを個別に確認する必要がある

---

## 個別記事対応タスク（2026-10-06）

- [x] **松名瀬フィッシングパーク**（`matsunase-fishing-park`）【最優先】: 公式確認済みの内容で更新（1日券9,000円〔ヒラメのお土産付き〕・4時間券6,000円・ファミリーパック9,000円〔大人1人＋子供1人、ヒラメのお土産付き〕・貸切プラン お一人様15,000円・バーベキュースペース場所代1,500円。記事の1日11,000円/半日7,000円は古い）。陸上釣り堀なので「渡船」の記述を直す。トイレ・水道・自販機・休憩室・大型駐車場が完備の点も本文に。竿は1本・針1本・5m以上禁止、ルアー/サビキ/ギジエ/撒き餌禁止、予約は前日20時までの電話のみ（LINE・メール不可）、営業8:00〜16:00・不定休を本文に反映
- [x] **つりぼりマルヨ**（`tsuribori-maruyo`）【最優先】: 料金を令和8年6月1日改定後に更新（フリー 男性14,000円・女性10,000円・子供5,000円。記事は13,000円/10,000円/5,000円）。営業時間・定休日（火曜）・予約先を公式 `maruyo.jp`（Chrome）で確認。竿は1人1本・1本針（貸切除く）、サビキ/撒き餌/ルアー禁止を確認でき次第、`rod_count_limit: 1`を記入し本文にも明記
- [x] **海上釣り堀 太公望**（`kaijo-tsuribori-taikoubou`）: 公式ページはもともと存在せず、旅行プランサイト（アソビュー等）のプラン設定のみ→**現状維持（対応不要・運営者確認 2026-10-06）**
- [x] **桜島海づり公園**（`sakurajima-sea-fishing-park`）【公式 umiduri-kouen.com で確認し更新済み 2026-10-06: 大人300円/小人150円・超過70円/30円・見学150円/70円・回数券・貸竿は無料（先着・数に制限）・水深6〜9m・溶岩地形】令和7年10月改定後の料金表（市のPDF）で記事の「大人200円/小人100円（4時間・貸竿込）」を更新。貸竿が無料であること（エサ・仕掛けは別途購入）・投げ釣り禁止を本文に明記（竿の本数制限は記載なし）
- [x] **オリジナルメーカー海づり公園**（`original-maker-sea-fishing-park`）: 中学生以下・障がい者は無料、月曜休（7〜10月は毎日）、営業時間（4〜10月6:00〜19:00／11〜3月7:00〜17:00）、釣り糸は2本まで・日傘/パラソル禁止・ペット禁止を本文に反映。レッスン（8,800円/ターム・完全予約制）の記載を照合
- [ ] **内瀬釣りセンター**（`naize-fishing-center`）: 記事の料金（大人4,000円/女性・中学生3,500円/小学生2,500円）が筏か釣堀かを確認し、釣堀（大人12,000円/女性10,000円/子供5,000円）との区別を本文で明確に。竿は1人1本・撒き餌/サビキ禁止（△）を公式で確認して記入。`needs_ferry`を確認
- [ ] **海上釣り堀まるや**（`kaijo-tsuribori-maruya`）: 「完全貸切制」の意味（1筏貸切のみか、個別乗船も可か）と予約方法を電話（080-5118-8080）で確認し、記事の「必須（要電話予約）」と照合。午後便（土日祝13:30〜16:00 大人11,200円）の記載を確認
- [ ] **浜部渡船 海上釣り堀**（`hamabe-tosen-kaijo-tsuribori`）: 公式 `mitoko-hamabe.com/fishing` で料金（30分3,000円・5匹まで）・営業時間（10:00〜16:00）・予約・渡船の仕組み・竿の規定を確認。`needs_ferry`を記入
- [x] **直江津港第3東防波堤 管理釣り場**（`naoetsu-port-3rd-east-breakwater`）: 公式 `happyfishing-n.jp` の下層ページで料金（1,500円）・竿の規定・LJ・開放日の確認方法を照合。開放日が日々変わる旨を本文に明記
- [ ] **日明かんしんつり公園**（`hiake-kaikyo-fishing-park`）: 北九州市・管理事務所（093-591-2557）で竿の本数・営業時間・禁止事項を確認して記入
