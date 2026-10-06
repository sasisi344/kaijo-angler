# ブロック05: 優先順位 41〜50位（施設データ更新）

進め方・入力項目の定義は[[README]]。完了した施設は見出しの `[ ]` を `[x]` に。B項目は対象外（A項目のみ）。

ブロック合計表示回数: 2,214　／　完了: 4/10

---
### [ ] 41. マルスイ海産 — `marusui-kaisan`
- 記事: `src/content/blog/fishing-facility/west-japan/mie/marusui-kaisan/index.mdx`　mie／west-japan／最終更新 2026-03-22
- GSC（W40・過去3か月・新旧合算）: 表示 240 / クリック 7（新URL 170 ・旧URL 70）
- 推定タイプ: **要確認**　現行の料金表記: 大人 4,500円
- 既存データの欠け: 電話・営業時間・公式サイト・place_id・評価
- 確認メモ: 渡船/送迎船の言及あり→`needs_ferry`確認／本文に放流の言及あり→放流魚の抽出元
- 更新（A=全施設必須）: [ ] facilityType　[ ] stocked_fish/wild_fish　[ ] price_min/max・price_type・includes_gear　[ ] beginner/family/hands_free　[ ] needs_ferry・所要時間　[ ] reservation(enum)＋URL　[ ] official_site・sns　[ ] verified_at
- 更新（B=上位のみ）: [ ] open_months・closed_days　[ ] peak_months　[ ] takeout_rule　[ ] rod_length_limit　[ ] 放流履歴の遡及収集

### [x] 42. 下関フィッシングパーク — `shimonoseki-fishing-park`
- 記事: `src/content/blog/fishing-facility/west-japan/yamaguchi/shimonoseki-fishing-park/index.mdx`　yamaguchi／west-japan／最終更新 2026-03-22
- GSC（W40・過去3か月・新旧合算）: 表示 238 / クリック 5（新URL 222 ・旧URL 16）
- 推定タイプ: **海釣り公園型**　現行の料金表記: 大人 830円（4時間） / レンタル 1,000円
- 既存データの欠け: 電話・営業時間・公式サイト・place_id・評価
- 更新（A=全施設必須）: [ ] facilityType　[ ] stocked_fish/wild_fish　[ ] price_min/max・price_type・includes_gear　[ ] beginner/family/hands_free　[ ] needs_ferry・所要時間　[ ] reservation(enum)＋URL　[ ] official_site・sns　[ ] verified_at
- 更新（B=上位のみ）: [ ] open_months・closed_days　[ ] peak_months　[ ] takeout_rule　[ ] rod_length_limit　[ ] 放流履歴の遡及収集

### [x] 43. フィッシングランド日向 — `fishing-land-hyuga`
- 記事: `src/content/blog/fishing-facility/center-japan/fukui/fishing-land-hyuga/index.mdx`　fukui／center-japan／最終更新 2026-03-22
- GSC（W40・過去3か月・新旧合算）: 表示 235 / クリック 5（新URL 215 ・旧URL 20）
- 推定タイプ: **釣り堀型**　現行の料金表記: 11,000円
- 既存データの欠け: なし
- 確認メモ: 本文に放流の言及あり→放流魚の抽出元／予約表記: 「要予約（公式サイト参照）」→enum化
- 更新（A=全施設必須）: [ ] facilityType　[ ] stocked_fish/wild_fish　[ ] price_min/max・price_type・includes_gear　[ ] beginner/family/hands_free　[ ] needs_ferry・所要時間　[ ] reservation(enum)＋URL　[ ] official_site・sns　[ ] verified_at
- 更新（B=上位のみ）: [ ] open_months・closed_days　[ ] peak_months　[ ] takeout_rule　[ ] rod_length_limit　[ ] 放流履歴の遡及収集

### [x] 44. あなたに逢い鯛。釣り堀 — `anatani-aitai-fishing`
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

### [x] 46. フィッシングパーク土肥 — `fishing-park-toi`
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

---

## 調査結果（2026-10-06）

確度: ◎公式で確認／△検索要約・まとめサイトのみ。**⚠は記事との食い違い・要照合**。

| # | 施設 | frontmatter反映 | 確認できた事実 | 要照合・未確認 |
|---|---|---|---|---|
| 41 | マルスイ海産 | なし | ◎公式（`marusuikaisan.wixsite.com`）：筏7m×7m（3台）・カセ3人乗り（3隻）・大人4,500円・小学生以下半額・釣行は日の出〜日の入り・TEL 0597-28-2955。△尾鷲市三木浦 | 渡船の有無・予約・竿の規定は公式に記載なし（電話確認） |
| 42 | 下関フィッシングパーク | sea-park／本数2 ◎ | 「釣り竿の使用は2本まで／3本以上の糸は不可」・1日券1,250円/620円・基本釣り料（4時間）830円/410円・貸竿1,000円（サビキ付）/700円（仕掛無）・営業時間は月別（5〜10月5:00〜20:00ほか）・火曜休・投げ釣り/ルアー/釣台以外禁止 | 竿の長さは記載なし。記事の料金（830円・レンタル1,000円）は一致 |
| 43 | フィッシングランド日向 | sea-pond／予約必須／本数1 ◎ | 公式：**上級コース** 大人14,000円・女性12,000円・小学生以下7,000円（7:00〜14:00・竿1本＋交換用1本まで・**5.4m以内**）／**マニアコース** 大人7,000円・女性6,000円・小学生以下4,500円（〜11:00・**4m以内**）／見学300円／完全予約制／撒餌・複数バリ禁止／TEL 0770-45-2929 | ⚠**記事の料金11,000円は古い**（公式は上級14,000円。改定日は公式に記載なし／まとめでは2026-10-01以降）。コースごとに長さが違うため`rod_length_limit`は**未記入**（単一値で表せない） |
| 44 | あなたに逢い鯛。釣り堀 | sea-pond（分類のみ） | ◎公式：男性14,000円・女性12,000円・小学生以下6,000円・貸切 平日84,000円〜/土日祝112,000円〜・電話090-5437-1515またはLINE予約・7〜9月 6:00〜13:00／10〜6月 6:30〜13:30・放流はマダイ/ワラサ/ヒラマサ/カンパチ/シマアジ/ブリ/イシダイ/ハタマス/サクラマス/ヒラメ・貸竿2,000円・LJ300円。△「竿5m未満・1人1本」 | ⚠**記事の料金（男性13,000円/女性11,000円）が古い**。竿の規定は公式ページに記載なし→公式の別ページで確認してから記入 |
| 45 | 海上釣り堀オーパ | sea-pond（分類のみ） | △一般コース 男性12,100円・女性8,800円・6〜12歳6,600円・オーパコース16,500円・貸竿1,500円・竿は1人1本・1本針・TEL 072-499-1111（岬町谷川） | **公式 `tsuribori-opa.com` の取得結果が情報源と矛盾**（一般14,000円・月火休・送迎あり等、別施設と思われる内容）→採用せず。Chromeで公式を確認。営業時間も記事（7:00〜13:30）と照合 |
| 46 | フィッシングパーク土肥 | なし | ◎公式（土肥観光）：1セット（入場・竿・エサ、3時間）1,500円・釣った魚は買取・9:00〜16:00（最終入場15:00）・火曜休（荒天時も休み）・TEL 0558-98-2265 | 予約・竿の本数は記載なし（団体10名以上要予約は△）。`facilityType`は未確定のため未記入 |
| 47 | 海上釣堀 岬 | sea-pond（分類のみ） | ◎公式（`osaka-misaki.com`）：プレミアム11,000円・半日5,500円・サンクス5,500円（税込）・貸切 平日33,000円〜/土日祝66,000円〜・7:00〜12:00（受付5:30〜）・**水曜休**・TEL 072-486-1211。△竿1人1本・1本針 | 竿の規定は公式トップに記載なし。記事の料金（一般11,000円/サンクス5,500円）は一致。記事の定休日・時間を照合 |
| 48 | カタタの釣堀 | sea-pond／**長さ4m・本数1** ◎ | 公式：「4m以内の長さの竿」・1人1本・釣針1本・小物2時間3,680円（竿・エサ込）・大物 大人12,400円/女性9,200円/子供7,100円・貸竿1,550円・SNS投稿は許可制・集魚餌/ルアー禁止・TEL 0739-43-6990 | 記事の料金は一致。営業時間・定休日は公式ページに記載なし。予約の要否は電話番号のみで明記なし |
| 49 | 小浜市漁協・釣り筏 | なし | **未確認**（検索で出るのは三重県鳥羽市の「小浜釣り筏」＝別施設。福井県小浜の渡船各社は個別の事業者） | 記事の施設が福井の「小浜市漁協」の筏か、特定の事業者かを記事で確認してから公式を探す |
| 50 | うみんぐ大島 | なし | △入場 大人620円・小学生310円・釣堀6,000円/小学生3,800円・貸竿セット1,200円・釣堀は完全予約・「竿1人1本・1針」・LJ必須・サビキ/2本針/ルアー禁止・火曜休・神湊港から船25分 | 公式 `umi-ing.com` のトップは情報なし（下層ページ未取得）。`needs_ferry`（大島は離島）と竿の本数は公式で確認してから記入 |

### 所見
- 数値で記入できたのは、カタタ（4m・1本）・日向（1本）・下関（2本）。長さ制限を公式が明記する施設は、ここまでの50施設で あっとしぃー（3.5m）・カタタ（4m）の2施設のみ
- **料金が古い記事**: 日向（11,000円→公式14,000円）・あなたに逢い鯛（13,000円/11,000円→14,000円/12,000円）。診断の予算フィルタ前に必ず直す
- **日向は同じ施設でコースにより竿の長さが違う**（5.4m/4m）。タックルの出し分けでは、記事のコース別に注記する運用が必要

---

## 個別記事対応タスク（2026-10-06）

- [x] **フィッシングランド日向**（`fishing-land-hyuga`）【最優先】: 料金を公式に更新（上級 大人14,000円/女性12,000円/小学生以下7,000円、マニア 7,000円/6,000円/4,500円、見学300円）。営業時間（3月〜10月中旬 7:00〜14:00／10月中旬〜1月末 7:30〜13:30）、竿のコース別制限（1本＋交換用1本・5.4m/4m以内）、撒餌・複数バリ禁止を本文に反映。貸切は平日70,000円〜/土日祝112,000円〜
- [x] **あなたに逢い鯛。釣り堀**（`anatani-aitai-fishing`）【最優先】: 料金を公式に更新（男性14,000円/女性12,000円/小学生以下6,000円）。営業時間（7〜9月 6:00〜13:00、10〜6月 6:30〜13:30）・放流魚種・貸竿2,000円・LJ300円を反映。竿の長さ（5m未満・1人1本の情報）は公式の別ページで確認して`rod_length_limit`/`rod_count_limit`を記入
- [ ] **海上釣り堀オーパ**（`kaijo-tsuribori-opa`）: 公式をChromeで確認（料金・営業時間・定休日・竿の規定）。記事の「一般 男性12,100円」「7:00〜13:30」と照合し、確認できた竿の本数（1人1本）を記入
- [ ] **海上釣堀 岬**（`kaijo-tsuribori-misaki`）: 公式の営業時間（7:00〜12:00・受付5:30〜）・水曜休を記事と照合。竿の規定（1人1本・1本針の情報）を公式で確認して記入
- [ ] **カタタの釣堀**（`kakata-fishing-pond`）: 竿は4m以内・1人1本・釣針1本・集魚餌/ルアー禁止・ペット不可・SNS投稿は許可制を本文に明記。営業時間・定休日・予約方法を電話（0739-43-6990）で確認
- [x] **下関フィッシングパーク**（`shimonoseki-fishing-park`）: 竿は2本まで・投げ釣り/ルアー禁止・釣台以外禁止を本文に明記。営業時間（月別）・火曜休を記事と照合
- [ ] **マルスイ海産**（`marusui-kaisan`）: 電話（0597-28-2955）で渡船の有無・予約・竿の規定を確認。`needs_ferry`を記入。放流の言及（記事内）の根拠を確認
- [x] **フィッシングパーク土肥**（`fishing-park-toi`）: 予約の要否（団体のみか）・竿の本数・イケス外釣りの条件を電話（0558-98-2265）で確認。`facilityType`を決める
- [ ] **小浜市漁協・釣り筏**（`obama-city-fishing-coop-raft`）: 記事の対象事業者を確認し、公式（電話予約・渡船・料金4,000円）を特定する
- [ ] **うみんぐ大島**（`umingu-oshima`）: 公式 `umi-ing.com` の下層ページで釣堀料金・予約・竿の規定（1人1本・1針の情報）を確認。大島への渡船（神湊港から船約25分）を`needs_ferry: true`として記入する根拠を確認
