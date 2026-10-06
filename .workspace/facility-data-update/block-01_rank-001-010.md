# ブロック01: 優先順位 1〜10位（施設データ更新）

進め方・入力項目の定義は[[README]]。完了した施設は見出しの `[ ]` を `[x]` に。**B項目（上位のみ）は第1ブロックの10施設で実施**。

ブロック合計表示回数: 15,337　／　完了: 1/10

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

### [x] 8. 海上釣り堀あっとしー（@sea） — `kaijo-tsuribori-at-sea`
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

---

## 調査結果（2026-10-06・Webで一次情報を確認した範囲。frontmatter未反映）

確度: ◎公式サイトで確認／○公式の転載・自治体ページ／△検索要約のみ（要裏取り）。**記事と食い違う事実は ⚠**。

| # | 施設 | 竿の長さ制限 | 確認できた事実 | 記事との食い違い |
|---|---|---|---|---|
| 1 | 南港魚つり園護岸 | **制限なし（記載なし）**。竿出し1人1本・持込本数は無制限 ◎ | 入園無料／投げ釣り禁止（ルアー可）／レンタル竿1,000円（サビキ付）／4〜11月5:00〜19:00・12〜3月7:00〜17:00・水曜休 ◎。公式は `nankou-uotsuri-en.com` | ⚠公式URL（記事 `.jp`→`.com`）／⚠電話（記事 06-6612-2020→公式 050-1742-4835）。放流の記載なし（本文の「放流」言及は要再確認） |
| 2 | 糸満イカダ | 未確認 | 大人2,800円・小学生2,300円・幼児1,800円（△）／受付は店舗→港から船で約5分／電話 098-995-3117／レンタル1,000円〜 △ | 料金は別サイトで2,300/1,800/1,300円の記載もあり→公式確認が必要 |
| 3 | 舞鶴親海公園 | 長さ制限は未確認。**竿1人3本まで・投げ釣り禁止・夜間禁止・護岸以外禁止** △ | 無料／7〜19時（6〜8月）・7〜17時（12〜3月）△ | 公式（舞鶴市）未確認 |
| 4 | とっとパーク小島 | 未確認（長さ制限の記載は見つからず） | 大人1,500円・小人750円／15時以降は大人1,000円・小人500円 △／**団子釣り禁止・ペット不可** △ | ⚠イブニング料金の金額（記事は「15時以降あり」のみ）。放流の有無は未確認 |
| 5 | 志布志湾大黒イルカランド | 未確認 | 入園：大人1,500円・小中学生1,000円・幼児700円／10:00〜17:00（最終16:00）／電話 0987-27-3939／**釣った魚は全買取（リリース禁止）** △ | 公式 `irukaland.com` はWebFetchが証明書エラー。ブラウザで要確認 |
| 6 | 仙台港中央公園（海の広場） | 未確認（宮城県の「海の広場利用ルール」PDFに詳細） | 仙台塩釜港内で釣りができるのは海の広場のみ／**フェンス外側の下投げ以外の投げ釣り禁止・撒き餌禁止（アミカゴは可）**／7:00〜18:00（年末年始17:00）○（宮城県 2025-10-20掲載） | — |
| 7 | 釣ってみんで釣り堀 | 竿1本・持込不可 | **屋内**釣り堀／平日10:00〜18:00・土日祝9:00〜19:00・無休／利用料700円（竿・エサ込）・魚代2,950円/匹／TEL 080-2997-3679 △ | 古い掲載（550円・2,200円）の媒体あり。公式の最新確認が必要 |
| 8 | 海上釣り堀あっとしー | **3.5mまで（竿1本・針1本・枝針禁止）** ◎ | 男性13,200円・女性/子ども8,800円（税込）／陸続きで**渡船不要**／完全予約制 090-1089-1191／水・木休／Instagram `@at_sea1191`／放流4回（7:00頃〜9:00頃）◎ | ⚠**料金が記事と不一致**（記事 男性11,000円・女性/子ども7,700円→公式 13,200円/8,800円）。⚠記事は渡船の言及あり→公式は陸続き |
| 9 | 脇田海釣り桟橋 | 長さ未確認。**竿1人2本まで・釣り台のみ・投げ釣りとルアー禁止・救命胴衣貸与** △ | 大人1,000円・小中学生500円／手ぶらセット800円／3〜10月6:00〜16:30・11〜2月7:00〜16:30／火曜休／TEL 093-741-3610 △ | 公式（北九州市）未確認 |
| 10 | 海上釣り堀 海遊 | 未確認（「竿1本につき3名以上不可」） | 乗合：男性13,000円・女性/中学生10,000円・子供7,500円／貸竿1,500円／10:30〜15:00／水曜休／TEL 080-5628-4447／渡船（小方港→阿多田島汽船→阿多田港） △ | ⚠料金が記事と不一致（記事 男性12,000円・女性9,000円）。公式 `kaiyuu-turibori.com` はWebFetch証明書エラー→ブラウザで要確認 |

### 所見
- `rod_length_limit` が**数値で確認できたのは あっとしー(3.5m) のみ**。他は「長さ制限の記載なし」か未確認。「記載なし」は制限なしの証明ではないため、**確認できない施設は空欄（標準候補を出す）**で運用する想定どおり
- 竿の**本数**制限（1本・2本・3本）は複数施設で出てくる。タックル出し分けには長さより本数のほうが効く可能性があり、`rod_count_limit` を別項目にするか要判断
- **料金の陳腐化を2件確認**（あっとしー・海遊）。診断の予算フィルタ前に `verified_at` の運用が必須
- WebFetchで取れない公式（`kaiyuu-turibori.com`・`irukaland.com`・`nankou-uotsuri-en.jp`）はChromeで開いて確認する必要がある

---

## 実施済み・個別記事対応タスク（2026-10-06）

### 実施済み
- `config.ts` に任意項目を追加（`facilityType`をenum化、`facility_details`に`rod_length_limit`/`rod_count_limit`/`stocked_fish`/`wild_fish`/`price_*`/`beginner_friendly`/`family_friendly`/`hands_free`/`needs_ferry`/`ferry_info`/`access_minutes`/`reservation_type`/`reservation_url`/`sns`/`verified_at`）。`astro sync`・`check-facility-frontmatter.mjs` 通過
- **方針**: 竿の本数は**上限本数の数値**（`rod_count_limit`）。公式で数値が確認できたものだけ記入し、**制限なし・不明は未記入**
- frontmatter反映（公式確認済みのみ）: 南港（sea-park・本数1）／あっとしぃー（sea-pond・長さ3.5m・本数1・渡船なし・予約必須・Instagram）／脇田（sea-park・本数2・北九州市公式）
- 表記修正: 「あっとしー」→公式表記「あっとしぃー」（施設記事・ranking/kansai・travel 3本・west-japan index・`facilities-geo.json`。アクセスデータCSVは過去実績のため未変更）

### 未反映（確認待ち）— 本数・長さ
- 舞鶴: 検索では「3本まで」だが舞鶴市の公式ページに記載なし→公式（指定管理者 ふるる／市土木課 0773-66-1053）で確認してから記入
- 糸満・とっとパーク・志布志・仙台（県のPDF「海の広場利用ルール」）・釣ってみんで・海遊: 竿の長さ・本数とも未確認

### 個別記事対応タスク（施設情報の修正は記事ごとに実施）
- [x] **あっとしぃー**: 料金を公式に更新（男性13,200円・女性/子ども8,800円・サンセットコース6,600円）、渡船の記述を削除（陸続きで渡船不要）、定休日（水・木）・釣り時間（7:00〜12:00）・放流4回を公式に合わせる。公式サイトURLを記事の `at-sea.jp` から `at-sea-akashi.com` へ（要確認）。竿3.5mまで・1人1本を本文の「ルール」に明記
- [ ] **海遊**: 料金（乗合 男性13,000円など）を公式で確認して更新。公式 `kaiyuu-turibori.com` はChromeで確認
- [ ] **南港**: 公式URL `nankou-uotsuri-en.jp`→`.com`、電話 06-6612-2020→050-1742-4835。「放流」の言及が公式にあるか確認。竿出しは1人1本・投げ釣り禁止（ルアー可）を本文に明記
- [ ] **とっとパーク小島**: イブニング料金（15時以降 大人1,000円・小人500円）の金額を本文へ。団子釣り禁止を明記
- [ ] **脇田**: 営業時間・定休日（火曜）を北九州市公式に合わせる（記事と食い違いの可能性）。竿は1人2本・投げ釣り/ルアー禁止を明記
- [ ] **糸満イカダ**: 料金（2,800円/2,300円/1,800円）を公式で確認
- [ ] **志布志**: 全買取ルール・営業時間（10:00〜17:00、最終16:00）を本文と照合
- [ ] **釣ってみんで**: 公式の最新料金・営業時間を確認（媒体により料金が異なる）
- [ ] **舞鶴・仙台**: 公式のルールで投げ釣り・本数を確認して本文に反映
