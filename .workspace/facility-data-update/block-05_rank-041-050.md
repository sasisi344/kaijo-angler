# ブロック05: 優先順位 41〜50位（施設データ更新）

進め方・入力項目の定義は[[README]]。完了した施設は見出しの `[ ]` を `[x]` に。B項目は対象外（A項目のみ）。

ブロック合計表示回数: 2,214　／　完了: 0/10

---
### [ ] 41. マルスイ海産 — `marusui-kaisan`
- 記事: `src/content/blog/fishing-facility/west-japan/mie/marusui-kaisan/index.mdx`　mie／west-japan／最終更新 2026-03-22
- GSC（W40・過去3か月・新旧合算）: 表示 240 / クリック 7（新URL 170 ・旧URL 70）
- 推定タイプ: **要確認**　現行の料金表記: 大人 4,500円
- 既存データの欠け: 電話・営業時間・公式サイト・place_id・評価
- 確認メモ: 渡船/送迎船の言及あり→`needs_ferry`確認／本文に放流の言及あり→放流魚の抽出元
- 更新（A=全施設必須）: [ ] facilityType　[ ] stocked_fish/wild_fish　[ ] price_min/max・price_type・includes_gear　[ ] beginner/family/hands_free　[ ] needs_ferry・所要時間　[ ] reservation(enum)＋URL　[ ] official_site・sns　[ ] verified_at
- 更新（B=上位のみ）: [ ] open_months・closed_days　[ ] peak_months　[ ] takeout_rule　[ ] rod_length_limit　[ ] 放流履歴の遡及収集

### [ ] 42. 下関フィッシングパーク — `shimonoseki-fishing-park`
- 記事: `src/content/blog/fishing-facility/west-japan/yamaguchi/shimonoseki-fishing-park/index.mdx`　yamaguchi／west-japan／最終更新 2026-03-22
- GSC（W40・過去3か月・新旧合算）: 表示 238 / クリック 5（新URL 222 ・旧URL 16）
- 推定タイプ: **海釣り公園型**　現行の料金表記: 大人 830円（4時間） / レンタル 1,000円
- 既存データの欠け: 電話・営業時間・公式サイト・place_id・評価
- 更新（A=全施設必須）: [ ] facilityType　[ ] stocked_fish/wild_fish　[ ] price_min/max・price_type・includes_gear　[ ] beginner/family/hands_free　[ ] needs_ferry・所要時間　[ ] reservation(enum)＋URL　[ ] official_site・sns　[ ] verified_at
- 更新（B=上位のみ）: [ ] open_months・closed_days　[ ] peak_months　[ ] takeout_rule　[ ] rod_length_limit　[ ] 放流履歴の遡及収集

### [ ] 43. フィッシングランド日向 — `fishing-land-hyuga`
- 記事: `src/content/blog/fishing-facility/center-japan/fukui/fishing-land-hyuga/index.mdx`　fukui／center-japan／最終更新 2026-03-22
- GSC（W40・過去3か月・新旧合算）: 表示 235 / クリック 5（新URL 215 ・旧URL 20）
- 推定タイプ: **釣り堀型**　現行の料金表記: 11,000円
- 既存データの欠け: なし
- 確認メモ: 本文に放流の言及あり→放流魚の抽出元／予約表記: 「要予約（公式サイト参照）」→enum化
- 更新（A=全施設必須）: [ ] facilityType　[ ] stocked_fish/wild_fish　[ ] price_min/max・price_type・includes_gear　[ ] beginner/family/hands_free　[ ] needs_ferry・所要時間　[ ] reservation(enum)＋URL　[ ] official_site・sns　[ ] verified_at
- 更新（B=上位のみ）: [ ] open_months・closed_days　[ ] peak_months　[ ] takeout_rule　[ ] rod_length_limit　[ ] 放流履歴の遡及収集

### [ ] 44. あなたに逢い鯛。釣り堀 — `anatani-aitai-fishing`
- 記事: `src/content/blog/fishing-facility/west-japan/mie/anatani-aitai-fishing/index.mdx`　mie／west-japan／最終更新 2026-03-22
- GSC（W40・過去3か月・新旧合算）: 表示 224 / クリック 8（新URL 153 ・旧URL 71）
- 推定タイプ: **釣り堀型**　現行の料金表記: 男性 13,000円 / 女性 11,000円
- 既存データの欠け: 電話・営業時間・公式サイト・place_id・評価
- 確認メモ: 本文に放流の言及あり→放流魚の抽出元
- 更新（A=全施設必須）: [ ] facilityType　[ ] stocked_fish/wild_fish　[ ] price_min/max・price_type・includes_gear　[ ] beginner/family/hands_free　[ ] needs_ferry・所要時間　[ ] reservation(enum)＋URL　[ ] official_site・sns　[ ] verified_at
- 更新（B=上位のみ）: [ ] open_months・closed_days　[ ] peak_months　[ ] takeout_rule　[ ] rod_length_limit　[ ] 放流履歴の遡及収集

### [ ] 45. 海上釣り堀オーパ — `kaijo-tsuribori-opa`
- 記事: `src/content/blog/fishing-facility/west-japan/osaka/kaijo-tsuribori-opa/index.mdx`　osaka／west-japan／最終更新 2026-03-22
- GSC（W40・過去3か月・新旧合算）: 表示 221 / クリック 11（新URL 85 ・旧URL 136）
- 推定タイプ: **釣り堀型**　現行の料金表記: 一般コース：男性12,100円 / 女性8,800円 / 子供6,600円
- 既存データの欠け: place_id
- 確認メモ: 本文に放流の言及あり→放流魚の抽出元／予約表記: 「要予約（電話・公式サイト）」→enum化
- 更新（A=全施設必須）: [ ] facilityType　[ ] stocked_fish/wild_fish　[ ] price_min/max・price_type・includes_gear　[ ] beginner/family/hands_free　[ ] needs_ferry・所要時間　[ ] reservation(enum)＋URL　[ ] official_site・sns　[ ] verified_at
- 更新（B=上位のみ）: [ ] open_months・closed_days　[ ] peak_months　[ ] takeout_rule　[ ] rod_length_limit　[ ] 放流履歴の遡及収集

### [ ] 46. フィッシングパーク土肥 — `fishing-park-toi`
- 記事: `src/content/blog/fishing-facility/center-japan/shizuoka/fishing-park-toi/index.mdx`　shizuoka／center-japan／最終更新 2026-03-22
- GSC（W40・過去3か月・新旧合算）: 表示 217 / クリック 12（新URL 217 ・旧URL 0）
- 推定タイプ: **釣り堀型**　現行の料金表記: 1,500円（竿・エサ込）
- 既存データの欠け: なし
- 確認メモ: 予約表記: 「不要（団体は要予約）」→enum化
- 更新（A=全施設必須）: [ ] facilityType　[ ] stocked_fish/wild_fish　[ ] price_min/max・price_type・includes_gear　[ ] beginner/family/hands_free　[ ] needs_ferry・所要時間　[ ] reservation(enum)＋URL　[ ] official_site・sns　[ ] verified_at
- 更新（B=上位のみ）: [ ] open_months・closed_days　[ ] peak_months　[ ] takeout_rule　[ ] rod_length_limit　[ ] 放流履歴の遡及収集

### [ ] 47. 海上釣堀 岬 — `kaijo-tsuribori-misaki`
- 記事: `src/content/blog/fishing-facility/west-japan/osaka/kaijo-tsuribori-misaki/index.mdx`　osaka／west-japan／最終更新 2026-08-17
- GSC（W40・過去3か月・新旧合算）: 表示 217 / クリック 4（新URL 208 ・旧URL 9）
- 推定タイプ: **釣り堀型**　現行の料金表記: 一般コース：11,000円 / サンクスコース：5,500円
- 既存データの欠け: place_id
- 確認メモ: 本文に放流の言及あり→放流魚の抽出元／予約表記: 「要予約（電話・公式サイト）」→enum化
- 更新（A=全施設必須）: [ ] facilityType　[ ] stocked_fish/wild_fish　[ ] price_min/max・price_type・includes_gear　[ ] beginner/family/hands_free　[ ] needs_ferry・所要時間　[ ] reservation(enum)＋URL　[ ] official_site・sns　[ ] verified_at
- 更新（B=上位のみ）: [ ] open_months・closed_days　[ ] peak_months　[ ] takeout_rule　[ ] rod_length_limit　[ ] 放流履歴の遡及収集

### [ ] 48. カタタの釣堀 — `kakata-fishing-pond`
- 記事: `src/content/blog/fishing-facility/west-japan/wakayama/kakata-fishing-pond/index.mdx`　wakayama／west-japan／最終更新 2026-03-22
- GSC（W40・過去3か月・新旧合算）: 表示 216 / クリック 7（新URL 12 ・旧URL 204）
- 推定タイプ: **釣り堀型**　現行の料金表記: 大物コース 12,400円 / 小物コース 3,680円（2時間）
- 既存データの欠け: 電話・営業時間・公式サイト・place_id・評価
- 確認メモ: 本文に放流の言及あり→放流魚の抽出元／予約表記: 「要予約（電話・公式サイト）」→enum化
- 更新（A=全施設必須）: [ ] facilityType　[ ] stocked_fish/wild_fish　[ ] price_min/max・price_type・includes_gear　[ ] beginner/family/hands_free　[ ] needs_ferry・所要時間　[ ] reservation(enum)＋URL　[ ] official_site・sns　[ ] verified_at
- 更新（B=上位のみ）: [ ] open_months・closed_days　[ ] peak_months　[ ] takeout_rule　[ ] rod_length_limit　[ ] 放流履歴の遡及収集

### [ ] 49. 小浜市漁協・釣り筏 — `obama-city-fishing-coop-raft`
- 記事: `src/content/blog/fishing-facility/center-japan/fukui/obama-city-fishing-coop-raft/index.mdx`　fukui／center-japan／最終更新 2026-03-22
- GSC（W40・過去3か月・新旧合算）: 表示 206 / クリック 15（新URL 150 ・旧URL 56）
- 推定タイプ: **釣り堀型**　現行の料金表記: 4,000円
- 既存データの欠け: なし
- 確認メモ: 渡船/送迎船の言及あり→`needs_ferry`確認
- 更新（A=全施設必須）: [ ] facilityType　[ ] stocked_fish/wild_fish　[ ] price_min/max・price_type・includes_gear　[ ] beginner/family/hands_free　[ ] needs_ferry・所要時間　[ ] reservation(enum)＋URL　[ ] official_site・sns　[ ] verified_at
- 更新（B=上位のみ）: [ ] open_months・closed_days　[ ] peak_months　[ ] takeout_rule　[ ] rod_length_limit　[ ] 放流履歴の遡及収集

### [ ] 50. うみんぐ大島 — `umingu-oshima`
- 記事: `src/content/blog/fishing-facility/west-japan/fukuoka/umingu-oshima/index.mdx`　fukuoka／west-japan／最終更新 2026-03-22
- GSC（W40・過去3か月・新旧合算）: 表示 200 / クリック 4（新URL 178 ・旧URL 22）
- 推定タイプ: **釣り堀型**　現行の料金表記: 釣り堀 6,000円 / 堤防 620円
- 既存データの欠け: 電話・営業時間・公式サイト・place_id・評価
- 確認メモ: 渡船/送迎船の言及あり→`needs_ferry`確認／本文に放流の言及あり→放流魚の抽出元／予約表記: 「釣り堀は要予約」→enum化
- 更新（A=全施設必須）: [ ] facilityType　[ ] stocked_fish/wild_fish　[ ] price_min/max・price_type・includes_gear　[ ] beginner/family/hands_free　[ ] needs_ferry・所要時間　[ ] reservation(enum)＋URL　[ ] official_site・sns　[ ] verified_at
- 更新（B=上位のみ）: [ ] open_months・closed_days　[ ] peak_months　[ ] takeout_rule　[ ] rod_length_limit　[ ] 放流履歴の遡及収集
