# ブロック11: 優先順位 101〜106位（施設データ更新）

進め方・入力項目の定義は[[README]]。完了した施設は見出しの `[ ]` を `[x]` に。B項目は対象外（A項目のみ）。

ブロック合計表示回数: 25　／　完了: 2/6

---
### [ ] 101. マリンガーデン・レジャー — `marine-garden-leisure`
- 記事: `src/content/blog/fishing-facility/center-japan/fukui/marine-garden-leisure/index.mdx`　fukui／center-japan／最終更新 2026-03-22
- GSC（W40・過去3か月・新旧合算）: 表示 9 / クリック 4（新URL 8 ・旧URL 1）
- 推定タイプ: **釣り堀型**　現行の料金表記: 11,000円
- 既存データの欠け: なし
- 確認メモ: 本文に放流の言及あり→放流魚の抽出元
- 更新（A=全施設必須）: [ ] facilityType　[ ] stocked_fish/wild_fish　[ ] price_min/max・price_type・includes_gear　[ ] beginner/family/hands_free　[ ] needs_ferry・所要時間　[ ] reservation(enum)＋URL　[ ] official_site・sns　[ ] verified_at
- 更新（B=上位のみ）: [ ] open_months・closed_days　[ ] peak_months　[ ] takeout_rule　[ ] rod_length_limit　[ ] 放流履歴の遡及収集

### [x] 102. 奄美シーランド — `amami-sealand`
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

### [x] 105. 尼崎市立魚つり公園 — `amagasaki-city-sea-fishing-park`
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

---

## 調査結果（2026-10-06）

確度: ◎公式で確認／△検索要約・まとめサイトのみ。**⚠は記事との食い違い・要照合**。

| # | 施設 | frontmatter反映 | 確認できた事実 | 要照合・未確認 |
|---|---|---|---|---|
| 101 | マリンガーデン・レジャー | sea-pond（分類のみ） | 公式 `marine-garden.net` は名前解決できず（ENOTFOUND） | 記事の`website_url`が現存するか確認し、公式サイトを特定して更新。料金（11,000円）・予約・竿の規定・放流魚を電話（0770-32-1557）で確認 |
| 102 | 奄美シーランド | other（分類のみ） | △鹿児島県大島郡龍郷町中勝1562・営業10:00〜20:00・ジェットスキーが主力メニューで、釣りは「海釣り・船釣り体験」のプラン（120分16,000円〜、180分24,000円〜の情報）。◎アソビューのページ上でも釣りプランの詳細は確認できず | ⚠**釣り堀ではなく船釣り体験の可能性**。記事の「90分コース12,000円〜/120分コース15,000円〜」は情報源（120分16,000円〜）と不一致。公式サイトを特定し、記事の施設分類（`facilityType`）と料金・予約を確認 |
| 103 | 本部釣りイカダ 海生活 | other（筏）／**渡船あり** ◎ | 公式（`marine-life.jp`）：「沖に浮かべた連結イカダまで船で片道10〜15分程」・手ぶらパック（竿・エサ・仕掛け・渡し料金込み）/渡船のみ（料金表）・予約 電話 0980-47-5349／オンライン（oki-raku.net）・受付8:00頃〜17:00頃・日中釣り受付 8:00〜11:00／12:30〜15:30・出航 8:30〜11:15／13:00〜（17:00最終帰港）・**LJ着用義務**（受付で貸出）・レンタル竿あり | 公式で料金額・定休日の確認が必要（記事は手ぶらパック8,500円〜/渡船のみ3,600円〜）。電話番号が記事（0980-48-3532）と公式（0980-47-5349）で異なる→照合 |
| 104 | 小島養漁場 | sea-pond（分類のみ） | 公式 `kojima-fm.jp` は証明書エラーで取得できず | Chromeで確認。料金（記事は1日券7,000円/半日券4,000円/ナイター2,500円）・予約（記事は「不要」）・竿の規定・釣った魚の扱いを確認 |
| 105 | 尼崎市立魚つり公園 | sea-park（分類のみ） | ◎尼崎市公式：大人830円・小人（6〜16歳未満）410円・見学 大人200円/小人100円・5・6・11月6:00〜19:00／7〜10月5:00〜20:00／12〜4月7:00〜17:00・**火曜休**（祝日の場合は翌平日）・年末年始休・臨時休園あり・レンタルあり。△貸竿1,500円（仕掛け付）/1,300円（仕掛け無） | 竿の規定は公式に記載なし。記事の料金（大人830円/子供410円）は一致 |
| 106 | 大阪海上釣り堀サザン | sea-pond／予約推奨／**本数1** ◎ | 公式（`sazanfisher.com`）：**複数竿の使用と撒き餌が禁止**（＝1人1本）・予約 電話 080-8332-0993 またはWeb（6:00〜19:00受付）・**予約なしでも当日空きがあれば参加可**・受付 6:00〜6:30・営業 7:00〜14:00・悪天候・台風時は早上がり/中止・放流はマダイ/シマアジ/カンパチ/ハマチなど季節・イベントごと | 公式トップに料金・定休日の記載なし（記事は男性12,100円/女性・小学生7,700円）。記事の「渡船/送迎」の記述を照合して`needs_ferry`を記入。記事の電話（072-482-0316）と公式の予約専用（080-8332-0993）を照合 |

### 所見
- 数値で記入できた本数: サザン1。渡船は本部（海生活）で確定
- **施設の分類が怪しい**: 奄美シーランド（船釣り体験が中心でジェットスキー事業者）。診断の「放流のある海上釣り堀だけを対象」とする絞り込みに入れないよう、`other`にした
- 公式サイトが取得できない施設（マリンガーデン・小島養漁場）が2つ

---

## 個別記事対応タスク（2026-10-06）

- [x] **奄美シーランド**（`amami-sealand`）【最優先】: 釣り堀ではなく船釣り体験が中心かを公式（奄美大島龍郷町）で確認し、記事の施設説明・`facilityType`（現在`other`）を決める。コース料金（記事は90分12,000円〜/120分15,000円〜。他情報は120分16,000円〜）・予約・営業時間（10:00〜20:00）を照合
- [ ] **本部釣りイカダ 海生活**（`motobu-fishing-ikada-umiseikatsu`）: 公式 `marine-life.jp` の料金表で手ぶらパック・渡船のみの料金を確認し、記事の「8,500円〜/3,600円〜」と照合。連結イカダまで船で片道10〜15分・LJ着用義務・受付/出航時間（8:30〜11:15、13:00〜、最終帰港17:00）を反映。電話番号（記事 0980-48-3532／公式 0980-47-5349）を照合
- [ ] **大阪海上釣り堀サザン**（`osaka-sea-fishing-southern`）: 複数竿・撒き餌が禁止（1人1本）を本文に明記。予約は電話 080-8332-0993 またはWeb、予約なしでも当日空きがあれば参加可を反映。営業7:00〜14:00・受付6:00〜6:30。料金（記事は男性12,100円/女性・小学生7,700円）・定休日を公式の別ページで確認し、`needs_ferry`（記事の渡船/送迎の言及）を記入
- [x] **尼崎市立魚つり公園**（`amagasaki-city-sea-fishing-park`）: 市公式の営業時間（5・6・11月6:00〜19:00／7〜10月5:00〜20:00／12〜4月7:00〜17:00）・火曜休（祝日の場合は翌平日）・年末年始休・臨時休園を記事と照合。竿の本数を魚つり公園（06-6417-3000）で確認して記入
- [ ] **小島養漁場**（`koshima-sea-fishing-pond`）: 公式 `kojima-fm.jp`（Chrome）で料金（1日券7,000円/半日券4,000円/ナイター2,500円）・予約（記事は「不要（当日受付OK）」）・竿の規定・釣った魚の扱いを確認
- [ ] **マリンガーデン・レジャー**（`marine-garden-leisure`）: 記事の`website_url`（`marine-garden.net`、接続不可）が現存するか確認し、公式サイトを特定して更新。電話（0770-32-1557）で料金（11,000円）・予約・竿の規定・放流魚を確認
