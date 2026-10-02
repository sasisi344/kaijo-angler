# ブロック02: 優先順位 11〜20位（施設データ更新）

進め方・入力項目の定義は[[README]]。完了した施設は見出しの `[ ]` を `[x]` に。B項目は余力があれば実施。

ブロック合計表示回数: 7,340　／　完了: 0/10

---
### [ ] 11. 鴨池海づり公園 — `kamoike-sea-fishing-park`
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

### [ ] 14. 浅虫海釣り公園 — `asamushi-sea-fishing-park`
- 記事: `src/content/blog/fishing-facility/east-japan/aomori/asamushi-sea-fishing-park/index.mdx`　aomori／east-japan／最終更新 2026-03-22
- GSC（W40・過去3か月・新旧合算）: 表示 769 / クリック 26（新URL 406 ・旧URL 363）
- 推定タイプ: **海釣り公園型**　現行の料金表記: 700円〜1,500円
- 既存データの欠け: なし
- 確認メモ: 予約表記: 「不要（先着順）」→enum化
- 更新（A=全施設必須）: [ ] facilityType　[ ] stocked_fish/wild_fish　[ ] price_min/max・price_type・includes_gear　[ ] beginner/family/hands_free　[ ] needs_ferry・所要時間　[ ] reservation(enum)＋URL　[ ] official_site・sns　[ ] verified_at
- 更新（B=上位のみ）: [ ] open_months・closed_days　[ ] peak_months　[ ] takeout_rule　[ ] rod_length_limit　[ ] 放流履歴の遡及収集

### [ ] 15. 海釣ぽーと田尻 — `umizuri-port-tajiri`
- 記事: `src/content/blog/fishing-facility/west-japan/osaka/umizuri-port-tajiri/index.mdx`　osaka／west-japan／最終更新 2026-03-22
- GSC（W40・過去3か月・新旧合算）: 表示 756 / クリック 36（新URL 430 ・旧URL 326）
- 推定タイプ: **釣り堀型**　現行の料金表記: 一日コース：男性11,000円 / 女性・子供5,500円
- 既存データの欠け: place_id
- 確認メモ: 本文に放流の言及あり→放流魚の抽出元／予約表記: 「要予約（電話・公式サイト）」→enum化
- 更新（A=全施設必須）: [ ] facilityType　[ ] stocked_fish/wild_fish　[ ] price_min/max・price_type・includes_gear　[ ] beginner/family/hands_free　[ ] needs_ferry・所要時間　[ ] reservation(enum)＋URL　[ ] official_site・sns　[ ] verified_at
- 更新（B=上位のみ）: [ ] open_months・closed_days　[ ] peak_months　[ ] takeout_rule　[ ] rod_length_limit　[ ] 放流履歴の遡及収集

### [ ] 16. 由良海洋釣堀 — `yura-marine-fishing-pond`
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

### [ ] 18. 福岡市海づり公園 — `fukuoka-city-sea-fishing-park`
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

### [ ] 20. 苫小牧港海釣り施設（一本防波堤） — `tomakomai-port-sea-fishing-facility`
- 記事: `src/content/blog/fishing-facility/east-japan/hokkaido/tomakomai-facility/tomakomai-port-sea-fishing-facility/index.mdx`　hokkaido／east-japan／最終更新 2026-03-22
- GSC（W40・過去3か月・新旧合算）: 表示 557 / クリック 8（新URL 416 ・旧URL 141）
- 推定タイプ: **海釣り公園型**　現行の料金表記: 1,500円（大人）
- 既存データの欠け: なし
- 確認メモ: 予約表記: 「不要（先着順100名）」→enum化
- 更新（A=全施設必須）: [ ] facilityType　[ ] stocked_fish/wild_fish　[ ] price_min/max・price_type・includes_gear　[ ] beginner/family/hands_free　[ ] needs_ferry・所要時間　[ ] reservation(enum)＋URL　[ ] official_site・sns　[ ] verified_at
- 更新（B=上位のみ）: [ ] open_months・closed_days　[ ] peak_months　[ ] takeout_rule　[ ] rod_length_limit　[ ] 放流履歴の遡及収集
