# ブロック11: 優先順位 101〜106位（施設データ更新）

進め方・入力項目の定義は[[README]]。完了した施設は見出しの `[ ]` を `[x]` に。B項目は対象外（A項目のみ）。

ブロック合計表示回数: 25　／　完了: 0/6

---
### [ ] 101. マリンガーデン・レジャー — `marine-garden-leisure`
- 記事: `src/content/blog/fishing-facility/center-japan/fukui/marine-garden-leisure/index.mdx`　fukui／center-japan／最終更新 2026-03-22
- GSC（W40・過去3か月・新旧合算）: 表示 9 / クリック 4（新URL 8 ・旧URL 1）
- 推定タイプ: **釣り堀型**　現行の料金表記: 11,000円
- 既存データの欠け: なし
- 確認メモ: 本文に放流の言及あり→放流魚の抽出元
- 更新（A=全施設必須）: [ ] facilityType　[ ] stocked_fish/wild_fish　[ ] price_min/max・price_type・includes_gear　[ ] beginner/family/hands_free　[ ] needs_ferry・所要時間　[ ] reservation(enum)＋URL　[ ] official_site・sns　[ ] verified_at
- 更新（B=上位のみ）: [ ] open_months・closed_days　[ ] peak_months　[ ] takeout_rule　[ ] rod_length_limit　[ ] 放流履歴の遡及収集

### [ ] 102. 奄美シーランド — `amami-sealand`
- 記事: `src/content/blog/fishing-facility/west-japan/kagoshima/amami-sealand/index.mdx`　kagoshima／west-japan／最終更新 2026-03-22
- GSC（W40・過去3か月・新旧合算）: 表示 5 / クリック 0（新URL 3 ・旧URL 2）
- 推定タイプ: **要確認**　現行の料金表記: 90分コース 12,000円〜 / 120分コース 15,000円〜
- 既存データの欠け: 電話・営業時間・公式サイト・place_id・評価
- 確認メモ: 予約表記: 「要予約（公式サイト・電話）」→enum化
- 更新（A=全施設必須）: [ ] facilityType　[ ] stocked_fish/wild_fish　[ ] price_min/max・price_type・includes_gear　[ ] beginner/family/hands_free　[ ] needs_ferry・所要時間　[ ] reservation(enum)＋URL　[ ] official_site・sns　[ ] verified_at
- 更新（B=上位のみ）: [ ] open_months・closed_days　[ ] peak_months　[ ] takeout_rule　[ ] rod_length_limit　[ ] 放流履歴の遡及収集

### [ ] 103. 本部釣りイカダ 海生活 — `motobu-fishing-ikada-umiseikatsu`
- 記事: `src/content/blog/fishing-facility/west-japan/okinawa/motobu-fishing-ikada-umiseikatsu/index.mdx`　okinawa／west-japan／最終更新 2026-07-09
- GSC（W40・過去3か月・新旧合算）: 表示 4 / クリック 0（新URL 4 ・旧URL 0）
- 推定タイプ: **要確認**　現行の料金表記: 手ぶらパック 8,500円〜 / 渡船のみ 3,600円〜
- 既存データの欠け: place_id
- 確認メモ: 渡船/送迎船の言及あり→`needs_ferry`確認／本文に放流の言及あり→放流魚の抽出元／予約表記: 「要予約（公式サイト・電話）」→enum化
- 更新（A=全施設必須）: [ ] facilityType　[ ] stocked_fish/wild_fish　[ ] price_min/max・price_type・includes_gear　[ ] beginner/family/hands_free　[ ] needs_ferry・所要時間　[ ] reservation(enum)＋URL　[ ] official_site・sns　[ ] verified_at
- 更新（B=上位のみ）: [ ] open_months・closed_days　[ ] peak_months　[ ] takeout_rule　[ ] rod_length_limit　[ ] 放流履歴の遡及収集

### [ ] 104. 小島養漁場 — `koshima-sea-fishing-pond`
- 記事: `src/content/blog/fishing-facility/west-japan/osaka/koshima-sea-fishing-pond/index.mdx`　osaka／west-japan／最終更新 2026-03-22
- GSC（W40・過去3か月・新旧合算）: 表示 3 / クリック 0（新URL 3 ・旧URL 0）
- 推定タイプ: **釣り堀型**　現行の料金表記: 1日券：7,000円 / 半日券：4,000円 / ナイター：2,500円
- 既存データの欠け: place_id
- 確認メモ: 本文に放流の言及あり→放流魚の抽出元／予約表記: 「不要（当日受付OK）」→enum化
- 更新（A=全施設必須）: [ ] facilityType　[ ] stocked_fish/wild_fish　[ ] price_min/max・price_type・includes_gear　[ ] beginner/family/hands_free　[ ] needs_ferry・所要時間　[ ] reservation(enum)＋URL　[ ] official_site・sns　[ ] verified_at
- 更新（B=上位のみ）: [ ] open_months・closed_days　[ ] peak_months　[ ] takeout_rule　[ ] rod_length_limit　[ ] 放流履歴の遡及収集

### [ ] 105. 尼崎市立魚つり公園 — `amagasaki-city-sea-fishing-park`
- 記事: `src/content/blog/fishing-facility/west-japan/hyogo/amagasaki-city-sea-fishing-park/index.mdx`　hyogo／west-japan／最終更新 2026-03-22
- GSC（W40・過去3か月・新旧合算）: 表示 2 / クリック 0（新URL 2 ・旧URL 0）
- 推定タイプ: **海釣り公園型**　現行の料金表記: 大人 830円 / 子供 410円
- 既存データの欠け: 電話・営業時間・公式サイト・place_id・評価
- 更新（A=全施設必須）: [ ] facilityType　[ ] stocked_fish/wild_fish　[ ] price_min/max・price_type・includes_gear　[ ] beginner/family/hands_free　[ ] needs_ferry・所要時間　[ ] reservation(enum)＋URL　[ ] official_site・sns　[ ] verified_at
- 更新（B=上位のみ）: [ ] open_months・closed_days　[ ] peak_months　[ ] takeout_rule　[ ] rod_length_limit　[ ] 放流履歴の遡及収集

### [ ] 106. 大阪海上釣り堀サザン — `osaka-sea-fishing-southern`
- 記事: `src/content/blog/fishing-facility/west-japan/osaka/osaka-sea-fishing-southern/index.mdx`　osaka／west-japan／最終更新 2026-03-22
- GSC（W40・過去3か月・新旧合算）: 表示 2 / クリック 0（新URL 2 ・旧URL 0）
- 推定タイプ: **釣り堀型**　現行の料金表記: 男性：12,100円 / 女性・小学生：7,700円
- 既存データの欠け: place_id
- 確認メモ: 渡船/送迎船の言及あり→`needs_ferry`確認／本文に放流の言及あり→放流魚の抽出元／予約表記: 「要予約（電話・公式サイト）」→enum化
- 更新（A=全施設必須）: [ ] facilityType　[ ] stocked_fish/wild_fish　[ ] price_min/max・price_type・includes_gear　[ ] beginner/family/hands_free　[ ] needs_ferry・所要時間　[ ] reservation(enum)＋URL　[ ] official_site・sns　[ ] verified_at
- 更新（B=上位のみ）: [ ] open_months・closed_days　[ ] peak_months　[ ] takeout_rule　[ ] rod_length_limit　[ ] 放流履歴の遡及収集
