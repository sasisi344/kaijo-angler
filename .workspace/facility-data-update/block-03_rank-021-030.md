# ブロック03: 優先順位 21〜30位（施設データ更新）

進め方・入力項目の定義は[[README]]。完了した施設は見出しの `[ ]` を `[x]` に。B項目は余力があれば実施。

ブロック合計表示回数: 4,103　／　完了: 0/10

---
### [ ] 21. 賢島フィッシングパーク海遊苑 — `kashikojima-fishing-park-kaiyuen`
- 記事: `src/content/blog/fishing-facility/west-japan/mie/kashikojima-fishing-park-kaiyuen/index.mdx`　mie／west-japan／最終更新 2026-03-22
- GSC（W40・過去3か月・新旧合算）: 表示 482 / クリック 41（新URL 188 ・旧URL 294）
- 推定タイプ: **釣り堀型**　現行の料金表記: 2時間 3,500円（竿・エサ込み）
- 既存データの欠け: 電話・営業時間・公式サイト・place_id・評価
- 確認メモ: 本文に放流の言及あり→放流魚の抽出元
- 更新（A=全施設必須）: [ ] facilityType　[ ] stocked_fish/wild_fish　[ ] price_min/max・price_type・includes_gear　[ ] beginner/family/hands_free　[ ] needs_ferry・所要時間　[ ] reservation(enum)＋URL　[ ] official_site・sns　[ ] verified_at
- 更新（B=上位のみ）: [ ] open_months・closed_days　[ ] peak_months　[ ] takeout_rule　[ ] rod_length_limit　[ ] 放流履歴の遡及収集

### [ ] 22. 敦賀市海釣り公園 — `tsuruga-city-sea-fishing-park`
- 記事: `src/content/blog/fishing-facility/center-japan/fukui/tsuruga-city-sea-fishing-park/index.mdx`　fukui／center-japan／最終更新 2026-03-22
- GSC（W40・過去3か月・新旧合算）: 表示 467 / クリック 27（新URL 362 ・旧URL 105）
- 推定タイプ: **海釣り公園型**　現行の料金表記: 無料（清掃協力金500円）
- 既存データの欠け: なし
- 確認メモ: 無料施設
- 更新（A=全施設必須）: [ ] facilityType　[ ] stocked_fish/wild_fish　[ ] price_min/max・price_type・includes_gear　[ ] beginner/family/hands_free　[ ] needs_ferry・所要時間　[ ] reservation(enum)＋URL　[ ] official_site・sns　[ ] verified_at
- 更新（B=上位のみ）: [ ] open_months・closed_days　[ ] peak_months　[ ] takeout_rule　[ ] rod_length_limit　[ ] 放流履歴の遡及収集

### [ ] 23. 鵜方浜釣センター — `ugata-hamatsuri-center`
- 記事: `src/content/blog/fishing-facility/west-japan/mie/ugata-hamatsuri-center/index.mdx`　mie／west-japan／最終更新 2026-03-22
- GSC（W40・過去3か月・新旧合算）: 表示 447 / クリック 22（新URL 148 ・旧URL 299）
- 推定タイプ: **釣り堀型**　現行の料金表記: 大人 4,000円 / 小人 2,000円
- 既存データの欠け: 電話・営業時間・公式サイト・place_id・評価
- 確認メモ: 渡船/送迎船の言及あり→`needs_ferry`確認／本文に放流の言及あり→放流魚の抽出元
- 更新（A=全施設必須）: [ ] facilityType　[ ] stocked_fish/wild_fish　[ ] price_min/max・price_type・includes_gear　[ ] beginner/family/hands_free　[ ] needs_ferry・所要時間　[ ] reservation(enum)＋URL　[ ] official_site・sns　[ ] verified_at
- 更新（B=上位のみ）: [ ] open_months・closed_days　[ ] peak_months　[ ] takeout_rule　[ ] rod_length_limit　[ ] 放流履歴の遡及収集

### [ ] 24. 仮屋湾遊漁センター — `kariyawan-fishing-center`
- 記事: `src/content/blog/fishing-facility/west-japan/saga/kariyawan-fishing-center/index.mdx`　saga／west-japan／最終更新 2026-03-22
- GSC（W40・過去3か月・新旧合算）: 表示 431 / クリック 14（新URL 244 ・旧URL 187）
- 推定タイプ: **釣り堀型**　現行の料金表記: 3,000円〜10,000円（コース別）
- 既存データの欠け: 電話・営業時間・公式サイト・place_id・評価
- 確認メモ: 本文に放流の言及あり→放流魚の抽出元／予約表記: 「要確認（定置網貸切は要予約）」→enum化
- 更新（A=全施設必須）: [ ] facilityType　[ ] stocked_fish/wild_fish　[ ] price_min/max・price_type・includes_gear　[ ] beginner/family/hands_free　[ ] needs_ferry・所要時間　[ ] reservation(enum)＋URL　[ ] official_site・sns　[ ] verified_at
- 更新（B=上位のみ）: [ ] open_months・closed_days　[ ] peak_months　[ ] takeout_rule　[ ] rod_length_limit　[ ] 放流履歴の遡及収集

### [ ] 25. つり筏 深浦 — `tsuri-ikada-fukaura`
- 記事: `src/content/blog/fishing-facility/west-japan/kochi/kochi/tsuri-ikada-fukaura/index.mdx`　kochi／west-japan／最終更新 2026-07-09
- GSC（W40・過去3か月・新旧合算）: 表示 411 / クリック 8（新URL 237 ・旧URL 174）
- 推定タイプ: **釣り堀型**　現行の料金表記: 3,000円（1日）
- 既存データの欠け: 電話・営業時間・公式サイト・place_id・評価
- 確認メモ: 渡船/送迎船の言及あり→`needs_ferry`確認／予約表記: 「要予約（渡船利用のため）」→enum化
- 更新（A=全施設必須）: [ ] facilityType　[ ] stocked_fish/wild_fish　[ ] price_min/max・price_type・includes_gear　[ ] beginner/family/hands_free　[ ] needs_ferry・所要時間　[ ] reservation(enum)＋URL　[ ] official_site・sns　[ ] verified_at
- 更新（B=上位のみ）: [ ] open_months・closed_days　[ ] peak_months　[ ] takeout_rule　[ ] rod_length_limit　[ ] 放流履歴の遡及収集

### [ ] 26. いかだ釣りの東海 — `ikadatsuri-tokai`
- 記事: `src/content/blog/fishing-facility/center-japan/shizuoka/ikadatsuri-tokai/index.mdx`　shizuoka／center-japan／最終更新 2026-03-22
- GSC（W40・過去3か月・新旧合算）: 表示 395 / クリック 8（新URL 259 ・旧URL 136）
- 推定タイプ: **釣り堀型**　現行の料金表記: 30分 3,000円（竿・エサ込）
- 既存データの欠け: なし
- 確認メモ: 渡船/送迎船の言及あり→`needs_ferry`確認／本文に放流の言及あり→放流魚の抽出元／予約表記: 「不要（先着順）」→enum化
- 更新（A=全施設必須）: [ ] facilityType　[ ] stocked_fish/wild_fish　[ ] price_min/max・price_type・includes_gear　[ ] beginner/family/hands_free　[ ] needs_ferry・所要時間　[ ] reservation(enum)＋URL　[ ] official_site・sns　[ ] verified_at
- 更新（B=上位のみ）: [ ] open_months・closed_days　[ ] peak_months　[ ] takeout_rule　[ ] rod_length_limit　[ ] 放流履歴の遡及収集

### [ ] 27. 海釣りランド — `sea-fishing-land`
- 記事: `src/content/blog/fishing-facility/west-japan/kumamoto/sea-fishing-land/index.mdx`　kumamoto／west-japan／最終更新 2026-07-09
- GSC（W40・過去3か月・新旧合算）: 表示 392 / クリック 19（新URL 159 ・旧URL 233）
- 推定タイプ: **海釣り公園型**　現行の料金表記: 大人 700円 / 子供 300円 / 手ぶら 2,000円
- 既存データの欠け: place_id
- 更新（A=全施設必須）: [ ] facilityType　[ ] stocked_fish/wild_fish　[ ] price_min/max・price_type・includes_gear　[ ] beginner/family/hands_free　[ ] needs_ferry・所要時間　[ ] reservation(enum)＋URL　[ ] official_site・sns　[ ] verified_at
- 更新（B=上位のみ）: [ ] open_months・closed_days　[ ] peak_months　[ ] takeout_rule　[ ] rod_length_limit　[ ] 放流履歴の遡及収集

### [ ] 28. 由良海つり公園 — `yura-sea-fishing-park`
- 記事: `src/content/blog/fishing-facility/west-japan/wakayama/yura-sea-fishing-park/index.mdx`　wakayama／west-japan／最終更新 2026-03-22
- GSC（W40・過去3か月・新旧合算）: 表示 378 / クリック 18（新URL 271 ・旧URL 107）
- 推定タイプ: **釣り堀型**　現行の料金表記: 釣堀：大人 12,000円 / 筏：2,000円
- 既存データの欠け: 電話・営業時間・公式サイト・place_id・評価
- 確認メモ: 本文に放流の言及あり→放流魚の抽出元／予約表記: 「要予約（釣堀は完全予約制）」→enum化
- 更新（A=全施設必須）: [ ] facilityType　[ ] stocked_fish/wild_fish　[ ] price_min/max・price_type・includes_gear　[ ] beginner/family/hands_free　[ ] needs_ferry・所要時間　[ ] reservation(enum)＋URL　[ ] official_site・sns　[ ] verified_at
- 更新（B=上位のみ）: [ ] open_months・closed_days　[ ] peak_months　[ ] takeout_rule　[ ] rod_length_limit　[ ] 放流履歴の遡及収集

### [ ] 29. フィッシングブリッジ赤崎 — `fishing-bridge-akasaki`
- 記事: `src/content/blog/fishing-facility/center-japan/ishikawa/fishing-bridge-akasaki/index.mdx`　ishikawa／center-japan／最終更新 2026-03-22
- GSC（W40・過去3か月・新旧合算）: 表示 358 / クリック 20（新URL 133 ・旧URL 225）
- 推定タイプ: **海釣り公園型**　現行の料金表記: 無料
- 既存データの欠け: なし
- 確認メモ: 料金に数値なし／無料施設
- 更新（A=全施設必須）: [ ] facilityType　[ ] stocked_fish/wild_fish　[ ] price_min/max・price_type・includes_gear　[ ] beginner/family/hands_free　[ ] needs_ferry・所要時間　[ ] reservation(enum)＋URL　[ ] official_site・sns　[ ] verified_at
- 更新（B=上位のみ）: [ ] open_months・closed_days　[ ] peak_months　[ ] takeout_rule　[ ] rod_length_limit　[ ] 放流履歴の遡及収集

### [ ] 30. 筏釣り 高橋渡船 — `raft-fishing-takahashi`
- 記事: `src/content/blog/fishing-facility/west-japan/kochi/kochi/raft-fishing-takahashi/index.mdx`　kochi／west-japan／最終更新 2026-07-09
- GSC（W40・過去3か月・新旧合算）: 表示 342 / クリック 23（新URL 241 ・旧URL 101）
- 推定タイプ: **釣り堀型**　現行の料金表記: 4,000円（1日）
- 既存データの欠け: 電話・営業時間・公式サイト・place_id・評価
- 確認メモ: 渡船/送迎船の言及あり→`needs_ferry`確認／予約表記: 「要予約（渡船利用のため）」→enum化
- 更新（A=全施設必須）: [ ] facilityType　[ ] stocked_fish/wild_fish　[ ] price_min/max・price_type・includes_gear　[ ] beginner/family/hands_free　[ ] needs_ferry・所要時間　[ ] reservation(enum)＋URL　[ ] official_site・sns　[ ] verified_at
- 更新（B=上位のみ）: [ ] open_months・closed_days　[ ] peak_months　[ ] takeout_rule　[ ] rod_length_limit　[ ] 放流履歴の遡及収集
