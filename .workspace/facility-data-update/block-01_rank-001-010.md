# ブロック01: 優先順位 1〜10位（施設データ更新）

進め方・入力項目の定義は[[README]]。完了した施設は見出しの `[ ]` を `[x]` に。**B項目（上位のみ）は第1ブロックの10施設で実施**。

ブロック合計表示回数: 15,337　／　完了: 0/10

---
### [ ] 1. 南港魚つり園護岸 — `nanko-fishing-park`
- 記事: `src/content/blog/fishing-facility/west-japan/osaka/nanko-fishing-park/index.mdx`　osaka／west-japan／最終更新 2026-07-07
- GSC（W40・過去3か月・新旧合算）: 表示 2,828 / クリック 78（新URL 1867 ・旧URL 961）
- 推定タイプ: **海釣り公園型**　現行の料金表記: 無料（入場料・釣り代なし）
- 既存データの欠け: place_id
- 確認メモ: 本文に放流の言及あり→放流魚の抽出元／料金に数値なし／料金が入場料のみ（釣り堀型の料金要確認）／無料施設／予約表記: 「不要（当日入場OK）」→enum化
- 更新（A=全施設必須）: [ ] facilityType　[ ] stocked_fish/wild_fish　[ ] price_min/max・price_type・includes_gear　[ ] beginner/family/hands_free　[ ] needs_ferry・所要時間　[ ] reservation(enum)＋URL　[ ] official_site・sns　[ ] verified_at
- 更新（B=上位のみ）: [ ] open_months・closed_days　[ ] peak_months　[ ] takeout_rule　[ ] rod_length_limit　[ ] 放流履歴の遡及収集

### [ ] 2. 糸満イカダ — `itoman-ikada-tsurigu-no-zousan`
- 記事: `src/content/blog/fishing-facility/west-japan/okinawa/itoman-ikada-tsurigu-no-zousan/index.mdx`　okinawa／west-japan／最終更新 2026-07-09
- GSC（W40・過去3か月・新旧合算）: 表示 1,887 / クリック 288（新URL 1364 ・旧URL 523）
- 推定タイプ: **要確認**　現行の料金表記: 大人 2,800円 / 小人 2,300円
- 既存データの欠け: place_id
- 確認メモ: 渡船/送迎船の言及あり→`needs_ferry`確認／予約表記: 「要確認（電話予約推奨）」→enum化
- 更新（A=全施設必須）: [ ] facilityType　[ ] stocked_fish/wild_fish　[ ] price_min/max・price_type・includes_gear　[ ] beginner/family/hands_free　[ ] needs_ferry・所要時間　[ ] reservation(enum)＋URL　[ ] official_site・sns　[ ] verified_at
- 更新（B=上位のみ）: [ ] open_months・closed_days　[ ] peak_months　[ ] takeout_rule　[ ] rod_length_limit　[ ] 放流履歴の遡及収集

### [ ] 3. 舞鶴親海公園 — `maizuru-shinkai-park`
- 記事: `src/content/blog/fishing-facility/west-japan/kyoto/maizuru-shinkai-park/index.mdx`　kyoto／west-japan／最終更新 2026-03-22
- GSC（W40・過去3か月・新旧合算）: 表示 1,590 / クリック 80（新URL 1159 ・旧URL 431）
- 推定タイプ: **要確認**　現行の料金表記: 無料（清掃協力金300円推奨）
- 既存データの欠け: 電話・営業時間・公式サイト・place_id・評価
- 確認メモ: 無料施設
- 更新（A=全施設必須）: [ ] facilityType　[ ] stocked_fish/wild_fish　[ ] price_min/max・price_type・includes_gear　[ ] beginner/family/hands_free　[ ] needs_ferry・所要時間　[ ] reservation(enum)＋URL　[ ] official_site・sns　[ ] verified_at
- 更新（B=上位のみ）: [ ] open_months・closed_days　[ ] peak_months　[ ] takeout_rule　[ ] rod_length_limit　[ ] 放流履歴の遡及収集

### [ ] 4. とっとパーク小島 — `totto-park-koshima`
- 記事: `src/content/blog/fishing-facility/west-japan/osaka/totto-park-koshima/index.mdx`　osaka／west-japan／最終更新 2026-03-22
- GSC（W40・過去3か月・新旧合算）: 表示 1,560 / クリック 20（新URL 1249 ・旧URL 311）
- 推定タイプ: **海釣り公園型**　現行の料金表記: 大人：1,500円 / 小・中学生：750円（15時以降イブニング料金あり）
- 既存データの欠け: place_id
- 確認メモ: 本文に放流の言及あり→放流魚の抽出元／予約表記: 「不要（当日先着順・混雑時は整理券配布）」→enum化
- 更新（A=全施設必須）: [ ] facilityType　[ ] stocked_fish/wild_fish　[ ] price_min/max・price_type・includes_gear　[ ] beginner/family/hands_free　[ ] needs_ferry・所要時間　[ ] reservation(enum)＋URL　[ ] official_site・sns　[ ] verified_at
- 更新（B=上位のみ）: [ ] open_months・closed_days　[ ] peak_months　[ ] takeout_rule　[ ] rod_length_limit　[ ] 放流履歴の遡及収集

### [ ] 5. 志布志湾大黒イルカランド（天然釣堀） — `shibushi-bay-daikoku-dolphin-land`
- 記事: `src/content/blog/fishing-facility/west-japan/miyazaki/shibushi-bay-daikoku-dolphin-land/index.mdx`　miyazaki／west-japan／最終更新 2026-07-09
- GSC（W40・過去3か月・新旧合算）: 表示 1,424 / クリック 183（新URL 993 ・旧URL 431）
- 推定タイプ: **釣り堀型**　現行の料金表記: 入園料 1,500円 / 竿 700円 + 魚代
- 既存データの欠け: 電話・営業時間・公式サイト・place_id・評価
- 確認メモ: 本文に放流の言及あり→放流魚の抽出元
- 更新（A=全施設必須）: [ ] facilityType　[ ] stocked_fish/wild_fish　[ ] price_min/max・price_type・includes_gear　[ ] beginner/family/hands_free　[ ] needs_ferry・所要時間　[ ] reservation(enum)＋URL　[ ] official_site・sns　[ ] verified_at
- 更新（B=上位のみ）: [ ] open_months・closed_days　[ ] peak_months　[ ] takeout_rule　[ ] rod_length_limit　[ ] 放流履歴の遡及収集

### [ ] 6. 仙台港中央公園（海の広場） — `sendai-port-central-park-sea-square`
- 記事: `src/content/blog/fishing-facility/east-japan/miyagi/sendai-port-central-park-sea-square/index.mdx`　miyagi／east-japan／最終更新 2026-03-22
- GSC（W40・過去3か月・新旧合算）: 表示 1,358 / クリック 46（新URL 883 ・旧URL 475）
- 推定タイプ: **海釣り公園型**　現行の料金表記: 無料
- 既存データの欠け: なし
- 確認メモ: 料金に数値なし／無料施設
- 更新（A=全施設必須）: [ ] facilityType　[ ] stocked_fish/wild_fish　[ ] price_min/max・price_type・includes_gear　[ ] beginner/family/hands_free　[ ] needs_ferry・所要時間　[ ] reservation(enum)＋URL　[ ] official_site・sns　[ ] verified_at
- 更新（B=上位のみ）: [ ] open_months・closed_days　[ ] peak_months　[ ] takeout_rule　[ ] rod_length_limit　[ ] 放流履歴の遡及収集

### [ ] 7. 釣ってみんで釣り堀 — `family-tsuribori-tsutteminde`
- 記事: `src/content/blog/fishing-facility/west-japan/tokushima/family-tsuribori-tsutteminde/index.mdx`　tokushima／west-japan／最終更新 2026-09-23
- GSC（W40・過去3か月・新旧合算）: 表示 1,309 / クリック 25（新URL 785 ・旧URL 524）
- 推定タイプ: **釣り堀型**　現行の料金表記: 利用料 700円（竿・エサ込） ＋ 釣った魚代 2,950円/匹（固定）
- 既存データの欠け: place_id
- 確認メモ: 本文に放流の言及あり→放流魚の抽出元／予約表記: 「不可（先着順の受付制）」→enum化
- 更新（A=全施設必須）: [ ] facilityType　[ ] stocked_fish/wild_fish　[ ] price_min/max・price_type・includes_gear　[ ] beginner/family/hands_free　[ ] needs_ferry・所要時間　[ ] reservation(enum)＋URL　[ ] official_site・sns　[ ] verified_at
- 更新（B=上位のみ）: [ ] open_months・closed_days　[ ] peak_months　[ ] takeout_rule　[ ] rod_length_limit　[ ] 放流履歴の遡及収集

### [ ] 8. 海上釣り堀あっとしー（@sea） — `kaijo-tsuribori-at-sea`
- 記事: `src/content/blog/fishing-facility/west-japan/hyogo/kaijo-tsuribori-at-sea/index.mdx`　hyogo／west-japan／最終更新 2026-07-07
- GSC（W40・過去3か月・新旧合算）: 表示 1,169 / クリック 15（新URL 345 ・旧URL 824）
- 推定タイプ: **釣り堀型**　現行の料金表記: 男性 11,000円 / 女性・子供 7,700円
- 既存データの欠け: 電話・営業時間・公式サイト・place_id・評価
- 確認メモ: 渡船/送迎船の言及あり→`needs_ferry`確認／本文に放流の言及あり→放流魚の抽出元／予約表記: 「要予約（電話・公式サイト）」→enum化
- 更新（A=全施設必須）: [ ] facilityType　[ ] stocked_fish/wild_fish　[ ] price_min/max・price_type・includes_gear　[ ] beginner/family/hands_free　[ ] needs_ferry・所要時間　[ ] reservation(enum)＋URL　[ ] official_site・sns　[ ] verified_at
- 更新（B=上位のみ）: [ ] open_months・closed_days　[ ] peak_months　[ ] takeout_rule　[ ] rod_length_limit　[ ] 放流履歴の遡及収集

### [ ] 9. 脇田（わいた）海釣り桟橋 — `waita-sea-fishing-pier`
- 記事: `src/content/blog/fishing-facility/west-japan/fukuoka/waita-sea-fishing-pier/index.mdx`　fukuoka／west-japan／最終更新 2026-03-22
- GSC（W40・過去3か月・新旧合算）: 表示 1,137 / クリック 51（新URL 597 ・旧URL 540）
- 推定タイプ: **海釣り公園型**　現行の料金表記: 大人 1,000円 / レンタル 800円
- 既存データの欠け: 電話・営業時間・公式サイト・place_id・評価
- 確認メモ: 本文に放流の言及あり→放流魚の抽出元
- 更新（A=全施設必須）: [ ] facilityType　[ ] stocked_fish/wild_fish　[ ] price_min/max・price_type・includes_gear　[ ] beginner/family/hands_free　[ ] needs_ferry・所要時間　[ ] reservation(enum)＋URL　[ ] official_site・sns　[ ] verified_at
- 更新（B=上位のみ）: [ ] open_months・closed_days　[ ] peak_months　[ ] takeout_rule　[ ] rod_length_limit　[ ] 放流履歴の遡及収集

### [ ] 10. 海上釣り堀 海遊 — `kaijo-tsuribori-kaiyu`
- 記事: `src/content/blog/fishing-facility/west-japan/hiroshima/kaijo-tsuribori-kaiyu/index.mdx`　hiroshima／west-japan／最終更新 2026-03-22
- GSC（W40・過去3か月・新旧合算）: 表示 1,075 / クリック 10（新URL 742 ・旧URL 333）
- 推定タイプ: **釣り堀型**　現行の料金表記: 男性 12,000円 / 女性 9,000円
- 既存データの欠け: 電話・営業時間・公式サイト・place_id・評価
- 確認メモ: 渡船/送迎船の言及あり→`needs_ferry`確認／本文に放流の言及あり→放流魚の抽出元
- 更新（A=全施設必須）: [ ] facilityType　[ ] stocked_fish/wild_fish　[ ] price_min/max・price_type・includes_gear　[ ] beginner/family/hands_free　[ ] needs_ferry・所要時間　[ ] reservation(enum)＋URL　[ ] official_site・sns　[ ] verified_at
- 更新（B=上位のみ）: [ ] open_months・closed_days　[ ] peak_months　[ ] takeout_rule　[ ] rod_length_limit　[ ] 放流履歴の遡及収集
