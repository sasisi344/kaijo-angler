# ブロック06: 優先順位 51〜60位（施設データ更新）

進め方・入力項目の定義は[[README]]。完了した施設は見出しの `[ ]` を `[x]` に。B項目は対象外（A項目のみ）。

ブロック合計表示回数: 1,569　／　完了: 0/10

---
### [ ] 51. 内瀬釣りセンター — `naize-fishing-center`
- 記事: `src/content/blog/fishing-facility/west-japan/mie/naize-fishing-center/index.mdx`　mie／west-japan／最終更新 2026-03-22
- GSC（W40・過去3か月・新旧合算）: 表示 181 / クリック 7（新URL 168 ・旧URL 13）
- 推定タイプ: **釣り堀型**　現行の料金表記: 大人 4,000円 / 女性・中学生 3,500円 / 小学生 2,500円
- 既存データの欠け: 電話・営業時間・公式サイト・place_id・評価
- 確認メモ: 渡船/送迎船の言及あり→`needs_ferry`確認
- 更新（A=全施設必須）: [ ] facilityType　[ ] stocked_fish/wild_fish　[ ] price_min/max・price_type・includes_gear　[ ] beginner/family/hands_free　[ ] needs_ferry・所要時間　[ ] reservation(enum)＋URL　[ ] official_site・sns　[ ] verified_at
- 更新（B=上位のみ）: [ ] open_months・closed_days　[ ] peak_months　[ ] takeout_rule　[ ] rod_length_limit　[ ] 放流履歴の遡及収集

### [ ] 52. 松名瀬フィッシングパーク — `matsunase-fishing-park`
- 記事: `src/content/blog/fishing-facility/west-japan/mie/matsunase-fishing-park/index.mdx`　mie／west-japan／最終更新 2026-03-22
- GSC（W40・過去3か月・新旧合算）: 表示 178 / クリック 9（新URL 8 ・旧URL 170）
- 推定タイプ: **要確認**　現行の料金表記: 1日 11,000円 / 半日 7,000円
- 既存データの欠け: 電話・営業時間・公式サイト・place_id・評価
- 確認メモ: 渡船/送迎船の言及あり→`needs_ferry`確認／本文に放流の言及あり→放流魚の抽出元
- 更新（A=全施設必須）: [ ] facilityType　[ ] stocked_fish/wild_fish　[ ] price_min/max・price_type・includes_gear　[ ] beginner/family/hands_free　[ ] needs_ferry・所要時間　[ ] reservation(enum)＋URL　[ ] official_site・sns　[ ] verified_at
- 更新（B=上位のみ）: [ ] open_months・closed_days　[ ] peak_months　[ ] takeout_rule　[ ] rod_length_limit　[ ] 放流履歴の遡及収集

### [ ] 53. 桜島海づり公園 — `sakurajima-sea-fishing-park`
- 記事: `src/content/blog/fishing-facility/west-japan/kagoshima/sakurajima-sea-fishing-park/index.mdx`　kagoshima／west-japan／最終更新 2026-03-22
- GSC（W40・過去3か月・新旧合算）: 表示 173 / クリック 1（新URL 161 ・旧URL 12）
- 推定タイプ: **海釣り公園型**　現行の料金表記: 大人 200円 / 小人 100円（4時間・貸竿込）
- 既存データの欠け: 電話・営業時間・公式サイト・place_id・評価
- 更新（A=全施設必須）: [ ] facilityType　[ ] stocked_fish/wild_fish　[ ] price_min/max・price_type・includes_gear　[ ] beginner/family/hands_free　[ ] needs_ferry・所要時間　[ ] reservation(enum)＋URL　[ ] official_site・sns　[ ] verified_at
- 更新（B=上位のみ）: [ ] open_months・closed_days　[ ] peak_months　[ ] takeout_rule　[ ] rod_length_limit　[ ] 放流履歴の遡及収集

### [ ] 54. オリジナルメーカー海づり公園 — `original-maker-sea-fishing-park`
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

### [ ] 58. つりぼりマルヨ — `tsuribori-maruyo`
- 記事: `src/content/blog/fishing-facility/west-japan/mie/tsuribori-maruyo/index.mdx`　mie／west-japan／最終更新 2026-03-22
- GSC（W40・過去3か月・新旧合算）: 表示 143 / クリック 4（新URL 50 ・旧URL 93）
- 推定タイプ: **釣り堀型**　現行の料金表記: 大人 13,000円 / 女性 10,000円 / 子供 5,000円
- 既存データの欠け: 電話・営業時間・公式サイト・place_id・評価
- 確認メモ: 渡船/送迎船の言及あり→`needs_ferry`確認／本文に放流の言及あり→放流魚の抽出元
- 更新（A=全施設必須）: [ ] facilityType　[ ] stocked_fish/wild_fish　[ ] price_min/max・price_type・includes_gear　[ ] beginner/family/hands_free　[ ] needs_ferry・所要時間　[ ] reservation(enum)＋URL　[ ] official_site・sns　[ ] verified_at
- 更新（B=上位のみ）: [ ] open_months・closed_days　[ ] peak_months　[ ] takeout_rule　[ ] rod_length_limit　[ ] 放流履歴の遡及収集

### [ ] 59. 直江津港第3東防波堤 管理釣り場 — `naoetsu-port-3rd-east-breakwater`
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
