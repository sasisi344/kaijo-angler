# ブロック08: 優先順位 71〜80位（施設データ更新）

進め方・入力項目の定義は[[README]]。完了した施設は見出しの `[ ]` を `[x]` に。B項目は対象外（A項目のみ）。

ブロック合計表示回数: 723　／　完了: 4/10

---
### [ ] 71. 湯の児フィッシングパーク — `yunoko-fishing-park`
- 記事: `src/content/blog/fishing-facility/west-japan/kumamoto/yunoko-fishing-park/index.mdx`　kumamoto／west-japan／最終更新 2026-08-17
- GSC（W40・過去3か月・新旧合算）: 表示 93 / クリック 2（新URL 69 ・旧URL 24）
- 推定タイプ: **海釣り公園型**　現行の料金表記: 大人 600円 / 子供 300円 / レンタルセット 1,500円
- 既存データの欠け: place_id
- 更新（A=全施設必須）: [ ] facilityType　[ ] stocked_fish/wild_fish　[ ] price_min/max・price_type・includes_gear　[ ] beginner/family/hands_free　[ ] needs_ferry・所要時間　[ ] reservation(enum)＋URL　[ ] official_site・sns　[ ] verified_at
- 更新（B=上位のみ）: [ ] open_months・closed_days　[ ] peak_months　[ ] takeout_rule　[ ] rod_length_limit　[ ] 放流履歴の遡及収集

### [x] 72. つり堀傳八屋 — `tsuribori-denpachiya`
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

### [x] 75. 天草釣堀レジャーランド — `amakusa-leisure-land`
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

### [x] 78. 淡路じゃのひれフィッシングパーク — `awaji-janohire-fishing-park`
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

### [x] 80. 海上釣り堀 幸丸 — `kaijo-tsuribori-yukimaru`
- 記事: `src/content/blog/fishing-facility/west-japan/kochi/kochi/kaijo-tsuribori-yukimaru/index.mdx`　kochi／west-japan／最終更新 2026-03-22
- GSC（W40・過去3か月・新旧合算）: 表示 51 / クリック 0（新URL 51 ・旧URL 0）
- 推定タイプ: **釣り堀型**　現行の料金表記: 一般 13,000円 / トライアル 5,000円
- 既存データの欠け: 電話・営業時間・公式サイト・place_id・評価
- 確認メモ: 渡船/送迎船の言及あり→`needs_ferry`確認／本文に放流の言及あり→放流魚の抽出元／予約表記: 「要予約（渡船利用のため）」→enum化
- 更新（A=全施設必須）: [ ] facilityType　[ ] stocked_fish/wild_fish　[ ] price_min/max・price_type・includes_gear　[ ] beginner/family/hands_free　[ ] needs_ferry・所要時間　[ ] reservation(enum)＋URL　[ ] official_site・sns　[ ] verified_at
- 更新（B=上位のみ）: [ ] open_months・closed_days　[ ] peak_months　[ ] takeout_rule　[ ] rod_length_limit　[ ] 放流履歴の遡及収集

---

## 調査結果（2026-10-06）

確度: ◎公式で確認／△検索要約・まとめサイトのみ。**⚠は記事との食い違い・要照合**。

| # | 施設 | frontmatter反映 | 確認できた事実 | 要照合・未確認 |
|---|---|---|---|---|
| 71 | 湯の児フィッシングパーク | sea-park（分類のみ） | △入園 大人600円・子ども300円・入園セット（入園料・貸竿・サビキカゴ込）大人1,500円/子ども1,200円・「竿の持込は1人2本まで」・赤土禁止・12歳未満は保護者同伴・4月と10〜3月 8:00〜17:00／5〜9月 7:00〜19:00・月曜休（祝日の場合は翌日）・年末年始休・TEL 0966-63-3870 | 水俣市の公式（`go-minamata.jp`）が403で取得できず→Chromeで確認し、確認できたら`rod_count_limit: 2`を記入。記事の「子供300円・レンタルセット1,500円」を照合 |
| 72 | つり堀傳八屋 | sea-pond／予約必須／本数1（乗合） ◎ | 公式（`denpachiya.net`）：男性14,000円・女性12,000円・子供5,000円・見学1,000円・ニコニコデー男女7,000円・**竿は乗合1本／貸切2本まで（令和8年3月9日〜）**・出船6:30頃・納竿13:30・早上がり11:40頃・電話予約（9:00〜16:00）0599-64-3232・回数券あり（男性11枚13万円・女性11枚12万円）。△竿の長さは4.0mまで・1本針・撒き餌/ルアー/サビキ禁止 | ⚠**記事の「男性13,500円/女性11,500円」が古い**（14,000円/12,000円）。竿の長さ4.0mは公式で未確認のため未記入（公式ページは長く、約18万字の後半は未読） |
| 73 | 石田フィッシャリーナ 釣り桟橋 | sea-park（分類のみ） | 既存タスク（[[subtask]]項目8・next-task）で別途対応 | — |
| 74 | 天草観光海上釣り堀 楽つり | sea-pond（分類のみ） | ◎公式（`rakutsuri.com`）：住所 熊本県天草市五和町二江4913・TEL 0969-33-0881・不定休・えさ・釣り具一式レンタル込み | 料金・営業時間・予約・竿の規定は公式トップに記載なし。記事の「大人3,000円/子供2,000円（1時間・竿エサ込）」「要予約（電話推奨）」を電話で照合 |
| 75 | 天草釣堀レジャーランド | sea-pond／予約不要 ◎ | 公式（`turiland.jp`）：**入場料 大人700円・子ども300円**・釣堀 1時間3,000円〜6時間11,000円（30分単位）・貸竿600円・氷200円・エサ400円〜・8:00〜16:00・**釣堀は予約なしで利用可（荒天時は問い合わせ）**・釣った魚は無料で持ち帰り可・電話 0964-59-0188・定休日は営業カレンダー（日曜・祝日が休業の傾向）・レンタル釣り具あり | ⚠**記事の「入場料500円/1時間2,000円」が古い**（入場700円・釣堀1時間3,000円〜）。「渡船/送迎」の言及は公式に記載なし→記事を照合して`needs_ferry`を記入 |
| 76 | 釣り堀 正徳丸 | sea-pond／予約必須 ◎ | 公式（`syoutokumaru.com`・貸切ページ）：小枠（E〜J枠 8×8m）平日4名66,000円〜6名81,000円・土日祝81,000円〜（最大8名）・大枠（A〜D枠 15×15m）平日8名108,000円・土日祝121,500円〜（最大14名）・追加料金 大人13,500円/女性11,500円/中学生9,000円/子供5,500円・「竿は2本までで1本針」（貸切）・エサ釣りのみ（ルアー/ワーム禁止）・撒き餌ご遠慮・マダイ1尾保証・完全予約制（電話のみ）・現金のみ・雨天決行・キャンセル 2日前50%/当日100%（平日はなし） | ⚠記事の「男性12,500円/女性10,500円/子供5,500円」と、公式の貸切・追加料金（13,500円/11,500円/5,500円）が合わない。乗合の料金は貸切ページに記載なし→公式の別ページで確認。営業時間・定休日も記載なし。竿「2本まで」は貸切の規定のため`rod_count_limit`は未記入 |
| 77 | 海上釣り堀福寿丸 | sea-pond／予約必須 ◎ | 公式（`fukujyumaru.com`）：男性14,000円・女性12,000円・子供（小学生以下）5,000円（氷込）・放流はブリ/ワラサ/マダイ/シマアジ/イサキ/イシダイなど・電話予約 0599-64-3122・乗船場は南伊勢町迫間浦の迫間浦漁港荷揚場 | 記事の料金（男性14,000円/女性12,000円）は一致。会員割引・営業時間・定休日・竿の規定は公式トップに記載なし（「ご利用の注意点」ページで確認） |
| 78 | 淡路じゃのひれフィッシングパーク | sea-pond（分類のみ） | 公式（`janohire.co.jp`）：チャレンジコース（大マス）/レギュラーコース（中マス）男性（高校生以上）14,000円・女性/中学生10,000円・小学生以下5,000円・マダイ釣りコース5,500円（竿・エサ込、**当日受付・予約不可**）・貸切 平日70,000円〜（6名まで）/土日120,000円〜（8名〜）/年末140,000円・貸竿2,000円・**前日15:00までの電話予約（マダイ釣りコース以外）**・撒きエサ/2本針/サビキ/ルアー禁止・8:00〜16:00・第1・第3金曜休（5月は第2・第4、8月は第1・第4） | ⚠**記事の「男性12,000円/女性・子供8,000円」が古い**（14,000円/10,000円/5,000円）。コースによって予約要否が違うため`reservation_type`は未記入。竿の本数・長さは記載なし |
| 79 | 海上釣堀 湯浅 | sea-pond（分類のみ） | △男性10,800円・女性/子供5,400円（まとめサイト情報）・夏7:00〜13:00／冬7:30〜13:30・木曜休（祝日は営業）・1か月前から予約・TEL 080-4063-9508 | 公式 `yuasa-tsuribori.com` のトップに料金・予約の詳細なし（「利用案内」ページで確認）。⚠記事の「男性11,000円/女性7,500円/子供5,500円」と照合 |
| 80 | 海上釣り堀 幸丸 | sea-pond／渡船あり／予約必須 ◎ | 公式（`sachimarusuisan.com`）：**令和8年5月10日〜**釣り放題コース 大人14,000円・小学生9,000円（渡船料込み）・ちょい釣りコース（1匹）4,000円・追加釣り3,500円/匹・竿・エサ付2,000円・エサのみ500円・7:00〜11:30（季節変動）・**木曜休**・**海上釣り堀/筏/カセは完全予約制**・TEL 0888-57-0830・キャンセル 当日100%/前日50%・カセ/筏は14〜16時までで大人4,000〜4,500円 | ⚠**記事の「一般13,000円/トライアル5,000円」が古い**（14,000円・ちょい釣り4,000円）。竿の長さ・本数は記載なし |

### 所見
- 数値で記入できた本数: 傳八屋（乗合1。貸切は2本）。**同じ施設でも乗合と貸切で本数が違う**ため、`rod_count_limit`は乗合（通常の利用）の値を入れる運用にした
- **料金が古い記事が多い**: 傳八屋・じゃのひれ・天草レジャーランド・幸丸（いずれも公式で確認）。湯浅・正徳丸も要照合。診断の予算フィルタに使う前に最優先で直す
- 公式サイトがトップに情報を載せていない施設（楽つり・湯浅）が多く、下層ページの確認が必要

---

## 個別記事対応タスク（2026-10-06）

- [x] **海上釣り堀 幸丸**（`kaijo-tsuribori-yukimaru`）【最優先】: 令和8年5月10日改定の料金に更新（釣り放題 大人14,000円・小学生9,000円〔渡船料込み〕、ちょい釣り4,000円、追加釣り3,500円/匹、竿・エサ付2,000円、エサのみ500円）。営業7:00〜11:30（季節変動）・木曜休・完全予約制・キャンセル規定（当日100%/前日50%）・カセ/筏の料金を反映。「渡船料込み」を本文に明記
- [x] **つり堀傳八屋**（`tsuribori-denpachiya`）【最優先】: 料金を公式に更新（男性14,000円・女性12,000円・子供5,000円・見学1,000円・ニコニコデー7,000円）。竿は乗合1本／貸切2本まで（令和8年3月9日〜）を本文に明記。出船6:30頃・納竿13:30・電話予約（9:00〜16:00）・回数券（男性11枚13万円・女性11枚12万円）を反映。竿の長さ（4.0mまで）を公式で確認して`rod_length_limit`を記入
- [x] **淡路じゃのひれフィッシングパーク**（`awaji-janohire-fishing-park`）【最優先】: 料金を公式に更新（チャレンジ/レギュラーコース 男性14,000円・女性/中学生10,000円・小学生以下5,000円、マダイ釣りコース5,500円〔竿・エサ込、当日受付・予約不可〕、貸切 平日70,000円〜）。前日15:00までの電話予約（マダイ釣りコース除く）・撒きエサ/2本針/サビキ/ルアー禁止・8:00〜16:00・第1・第3金曜休を反映
- [x] **天草釣堀レジャーランド**（`amakusa-leisure-land`）【最優先】: 入場料（大人700円・子ども300円）と釣堀料金（1時間3,000円〜6時間11,000円〔30分単位〕）に更新。貸竿600円・氷200円・エサ400円〜・8:00〜16:00・予約なしで利用可・釣った魚は無料で持ち帰り可を反映。「渡船/送迎」の記述が実際の施設情報かを確認して`needs_ferry`を記入
- [ ] **釣り堀 正徳丸**（`tsuribori-shotokumaru`）: 公式の貸切プラン（小枠8×8m 平日4名66,000円〜・大枠15×15m 平日8名108,000円）と追加料金（13,500円/11,500円/中学生9,000円/子供5,500円）を、記事の「男性12,500円/女性10,500円/子供5,500円」と照合。乗合の料金・営業時間・定休日を公式の別ページで確認。貸切は竿2本まで・1本針・エサ釣りのみ・マダイ1尾保証・キャンセル規定を本文に反映
- [ ] **海上釣堀 湯浅**（`kaijo-tsuribori-yuasa`）: 公式 `yuasa-tsuribori.com` の「利用案内」ページで料金（まとめサイトは男性10,800円/女性・子供5,400円）・営業時間・定休日（木曜）・予約（1か月前〜）・竿の規定を確認し、記事の「男性11,000円/女性7,500円/子供5,500円」と照合
- [ ] **海上釣り堀福寿丸**（`kaijo-tsuribori-fukujumaru`）: 公式の「ご利用の注意点」ページで竿・禁止事項、会員割引、営業時間・定休日を確認。乗船場（迫間浦漁港荷揚場）・電話予約（0599-64-3122）を記事と照合
- [ ] **天草観光海上釣り堀 楽つり**（`amakusa-rakutsuri`）: 電話（0969-33-0881）で料金・営業時間・予約・竿の規定を確認し、記事の「大人3,000円/子供2,000円（1時間・竿エサ込）」「要予約（電話推奨）」と照合。不定休の旨を本文に
- [ ] **湯の児フィッシングパーク**（`yunoko-fishing-park`）: 水俣市の公式（Chrome）で竿の本数（1人2本の情報あり）・営業時間（4月と10〜3月 8:00〜17:00／5〜9月 7:00〜19:00）・月曜休・年末年始休・12歳未満は保護者同伴・赤土禁止を確認し、`rod_count_limit`を記入、記事と照合
- [ ] **石田フィッシャリーナ**（`ishida-fisherina`）: 既存タスク（next-task／[[subtask]]項目8）で対応中。本ブロックでは追加対応なし
