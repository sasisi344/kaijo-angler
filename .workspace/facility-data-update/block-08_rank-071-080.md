# ブロック08: 優先順位 71〜80位（施設データ更新）

進め方・入力項目の定義は[[README]]。完了した施設は見出しの `[ ]` を `[x]` に。B項目は対象外（A項目のみ）。

ブロック合計表示回数: 723　／　完了: 0/10

---
### [ ] 71. 湯の児フィッシングパーク — `yunoko-fishing-park`
- 記事: `src/content/blog/fishing-facility/west-japan/kumamoto/yunoko-fishing-park/index.mdx`　kumamoto／west-japan／最終更新 2026-08-17
- GSC（W40・過去3か月・新旧合算）: 表示 93 / クリック 2（新URL 69 ・旧URL 24）
- 推定タイプ: **海釣り公園型**　現行の料金表記: 大人 600円 / 子供 300円 / レンタルセット 1,500円
- 既存データの欠け: place_id
- 更新（A=全施設必須）: [ ] facilityType　[ ] stocked_fish/wild_fish　[ ] price_min/max・price_type・includes_gear　[ ] beginner/family/hands_free　[ ] needs_ferry・所要時間　[ ] reservation(enum)＋URL　[ ] official_site・sns　[ ] verified_at
- 更新（B=上位のみ）: [ ] open_months・closed_days　[ ] peak_months　[ ] takeout_rule　[ ] rod_length_limit　[ ] 放流履歴の遡及収集

### [ ] 72. つり堀傳八屋 — `tsuribori-denpachiya`
- 記事: `src/content/blog/fishing-facility/west-japan/mie/tsuribori-denpachiya/index.mdx`　mie／west-japan／最終更新 2026-03-22
- GSC（W40・過去3か月・新旧合算）: 表示 91 / クリック 2（新URL 88 ・旧URL 3）
- 推定タイプ: **釣り堀型**　現行の料金表記: 男性 13,500円 / 女性 11,500円 / 子供 5,000円
- 既存データの欠け: 電話・営業時間・公式サイト・place_id・評価
- 確認メモ: 本文に放流の言及あり→放流魚の抽出元
- 更新（A=全施設必須）: [ ] facilityType　[ ] stocked_fish/wild_fish　[ ] price_min/max・price_type・includes_gear　[ ] beginner/family/hands_free　[ ] needs_ferry・所要時間　[ ] reservation(enum)＋URL　[ ] official_site・sns　[ ] verified_at
- 更新（B=上位のみ）: [ ] open_months・closed_days　[ ] peak_months　[ ] takeout_rule　[ ] rod_length_limit　[ ] 放流履歴の遡及収集

### [ ] 73. 石田フィッシャリーナ 釣り桟橋 — `ishida-fisherina`
- 記事: `src/content/blog/fishing-facility/center-japan/toyama/ishida-fisherina/index.mdx`　toyama／center-japan／最終更新 2026-03-22
- GSC（W40・過去3か月・新旧合算）: 表示 82 / クリック 5（新URL 34 ・旧URL 48）
- 推定タイプ: **海釣り公園型**　現行の料金表記: 入場無料
- 既存データの欠け: なし
- 確認メモ: 料金に数値なし／無料施設
- 更新（A=全施設必須）: [ ] facilityType　[ ] stocked_fish/wild_fish　[ ] price_min/max・price_type・includes_gear　[ ] beginner/family/hands_free　[ ] needs_ferry・所要時間　[ ] reservation(enum)＋URL　[ ] official_site・sns　[ ] verified_at
- 更新（B=上位のみ）: [ ] open_months・closed_days　[ ] peak_months　[ ] takeout_rule　[ ] rod_length_limit　[ ] 放流履歴の遡及収集

### [ ] 74. 天草観光海上釣り堀 楽つり — `amakusa-rakutsuri`
- 記事: `src/content/blog/fishing-facility/west-japan/kumamoto/amakusa-rakutsuri/index.mdx`　kumamoto／west-japan／最終更新 2026-07-09
- GSC（W40・過去3か月・新旧合算）: 表示 82 / クリック 1（新URL 42 ・旧URL 40）
- 推定タイプ: **釣り堀型**　現行の料金表記: 大人 3,000円 / 子供 2,000円（1時間・竿エサ込）
- 既存データの欠け: 営業時間・place_id
- 確認メモ: 予約表記: 「要予約（電話推奨）」→enum化
- 更新（A=全施設必須）: [ ] facilityType　[ ] stocked_fish/wild_fish　[ ] price_min/max・price_type・includes_gear　[ ] beginner/family/hands_free　[ ] needs_ferry・所要時間　[ ] reservation(enum)＋URL　[ ] official_site・sns　[ ] verified_at
- 更新（B=上位のみ）: [ ] open_months・closed_days　[ ] peak_months　[ ] takeout_rule　[ ] rod_length_limit　[ ] 放流履歴の遡及収集

### [ ] 75. 天草釣堀レジャーランド — `amakusa-leisure-land`
- 記事: `src/content/blog/fishing-facility/west-japan/kumamoto/amakusa-leisure-land/index.mdx`　kumamoto／west-japan／最終更新 2026-03-22
- GSC（W40・過去3か月・新旧合算）: 表示 75 / クリック 1（新URL 17 ・旧URL 58）
- 推定タイプ: **釣り堀型**　現行の料金表記: 入場料 500円 / 1時間 2,000円
- 既存データの欠け: なし
- 確認メモ: 渡船/送迎船の言及あり→`needs_ferry`確認／本文に放流の言及あり→放流魚の抽出元／料金が入場料のみ（釣り堀型の料金要確認）
- 更新（A=全施設必須）: [ ] facilityType　[ ] stocked_fish/wild_fish　[ ] price_min/max・price_type・includes_gear　[ ] beginner/family/hands_free　[ ] needs_ferry・所要時間　[ ] reservation(enum)＋URL　[ ] official_site・sns　[ ] verified_at
- 更新（B=上位のみ）: [ ] open_months・closed_days　[ ] peak_months　[ ] takeout_rule　[ ] rod_length_limit　[ ] 放流履歴の遡及収集

### [ ] 76. 釣り堀 正徳丸 — `tsuribori-shotokumaru`
- 記事: `src/content/blog/fishing-facility/west-japan/mie/tsuribori-shotokumaru/index.mdx`　mie／west-japan／最終更新 2026-03-22
- GSC（W40・過去3か月・新旧合算）: 表示 69 / クリック 1（新URL 69 ・旧URL 0）
- 推定タイプ: **釣り堀型**　現行の料金表記: 男性 12,500円 / 女性 10,500円 / 子供 5,500円
- 既存データの欠け: 電話・営業時間・公式サイト・place_id・評価
- 確認メモ: 本文に放流の言及あり→放流魚の抽出元
- 更新（A=全施設必須）: [ ] facilityType　[ ] stocked_fish/wild_fish　[ ] price_min/max・price_type・includes_gear　[ ] beginner/family/hands_free　[ ] needs_ferry・所要時間　[ ] reservation(enum)＋URL　[ ] official_site・sns　[ ] verified_at
- 更新（B=上位のみ）: [ ] open_months・closed_days　[ ] peak_months　[ ] takeout_rule　[ ] rod_length_limit　[ ] 放流履歴の遡及収集

### [ ] 77. 海上釣り堀福寿丸 — `kaijo-tsuribori-fukujumaru`
- 記事: `src/content/blog/fishing-facility/west-japan/mie/kaijo-tsuribori-fukujumaru/index.mdx`　mie／west-japan／最終更新 2026-03-22
- GSC（W40・過去3か月・新旧合算）: 表示 64 / クリック 0（新URL 60 ・旧URL 4）
- 推定タイプ: **釣り堀型**　現行の料金表記: 男性 14,000円 / 女性 12,000円（会員割引あり）
- 既存データの欠け: 電話・営業時間・公式サイト・place_id・評価
- 確認メモ: 本文に放流の言及あり→放流魚の抽出元
- 更新（A=全施設必須）: [ ] facilityType　[ ] stocked_fish/wild_fish　[ ] price_min/max・price_type・includes_gear　[ ] beginner/family/hands_free　[ ] needs_ferry・所要時間　[ ] reservation(enum)＋URL　[ ] official_site・sns　[ ] verified_at
- 更新（B=上位のみ）: [ ] open_months・closed_days　[ ] peak_months　[ ] takeout_rule　[ ] rod_length_limit　[ ] 放流履歴の遡及収集

### [ ] 78. 淡路じゃのひれフィッシングパーク — `awaji-janohire-fishing-park`
- 記事: `src/content/blog/fishing-facility/west-japan/hyogo/awaji-janohire-fishing-park/index.mdx`　hyogo／west-japan／最終更新 2026-03-22
- GSC（W40・過去3か月・新旧合算）: 表示 63 / クリック 1（新URL 20 ・旧URL 43）
- 推定タイプ: **釣り堀型**　現行の料金表記: 男性 12,000円 / 女性・子供 8,000円
- 既存データの欠け: 電話・営業時間・公式サイト・place_id・評価
- 確認メモ: 本文に放流の言及あり→放流魚の抽出元／予約表記: 「要予約（電話・公式サイト）」→enum化
- 更新（A=全施設必須）: [ ] facilityType　[ ] stocked_fish/wild_fish　[ ] price_min/max・price_type・includes_gear　[ ] beginner/family/hands_free　[ ] needs_ferry・所要時間　[ ] reservation(enum)＋URL　[ ] official_site・sns　[ ] verified_at
- 更新（B=上位のみ）: [ ] open_months・closed_days　[ ] peak_months　[ ] takeout_rule　[ ] rod_length_limit　[ ] 放流履歴の遡及収集

### [ ] 79. 海上釣堀 湯浅 — `kaijo-tsuribori-yuasa`
- 記事: `src/content/blog/fishing-facility/west-japan/wakayama/kaijo-tsuribori-yuasa/index.mdx`　wakayama／west-japan／最終更新 2026-03-22
- GSC（W40・過去3か月・新旧合算）: 表示 53 / クリック 2（新URL 18 ・旧URL 35）
- 推定タイプ: **釣り堀型**　現行の料金表記: 男性 11,000円 / 女性 7,500円 / 子供 5,500円
- 既存データの欠け: 電話・営業時間・公式サイト・place_id・評価
- 確認メモ: 本文に放流の言及あり→放流魚の抽出元／予約表記: 「要予約（電話・ネット）」→enum化
- 更新（A=全施設必須）: [ ] facilityType　[ ] stocked_fish/wild_fish　[ ] price_min/max・price_type・includes_gear　[ ] beginner/family/hands_free　[ ] needs_ferry・所要時間　[ ] reservation(enum)＋URL　[ ] official_site・sns　[ ] verified_at
- 更新（B=上位のみ）: [ ] open_months・closed_days　[ ] peak_months　[ ] takeout_rule　[ ] rod_length_limit　[ ] 放流履歴の遡及収集

### [ ] 80. 海上釣り堀 幸丸 — `kaijo-tsuribori-yukimaru`
- 記事: `src/content/blog/fishing-facility/west-japan/kochi/kochi/kaijo-tsuribori-yukimaru/index.mdx`　kochi／west-japan／最終更新 2026-03-22
- GSC（W40・過去3か月・新旧合算）: 表示 51 / クリック 0（新URL 51 ・旧URL 0）
- 推定タイプ: **釣り堀型**　現行の料金表記: 一般 13,000円 / トライアル 5,000円
- 既存データの欠け: 電話・営業時間・公式サイト・place_id・評価
- 確認メモ: 渡船/送迎船の言及あり→`needs_ferry`確認／本文に放流の言及あり→放流魚の抽出元／予約表記: 「要予約（渡船利用のため）」→enum化
- 更新（A=全施設必須）: [ ] facilityType　[ ] stocked_fish/wild_fish　[ ] price_min/max・price_type・includes_gear　[ ] beginner/family/hands_free　[ ] needs_ferry・所要時間　[ ] reservation(enum)＋URL　[ ] official_site・sns　[ ] verified_at
- 更新（B=上位のみ）: [ ] open_months・closed_days　[ ] peak_months　[ ] takeout_rule　[ ] rod_length_limit　[ ] 放流履歴の遡及収集
