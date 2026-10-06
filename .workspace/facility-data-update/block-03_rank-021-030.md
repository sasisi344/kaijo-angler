# ブロック03: 優先順位 21〜30位（施設データ更新）

進め方・入力項目の定義は[[README]]。完了した施設は見出しの `[ ]` を `[x]` に。B項目は余力があれば実施。

ブロック合計表示回数: 4,103　／　完了: 2/10

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

### [x] 27. 海釣りランド — `sea-fishing-land`
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

### [x] 29. フィッシングブリッジ赤崎 — `fishing-bridge-akasaki`
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

---

## 調査結果（2026-10-06）

確度: ◎公式で確認／△検索要約・まとめサイトのみ。**⚠は記事との食い違い・要照合**。このブロックは筏・渡船系が多く、**竿の本数・長さの規定が公式に記載されていない施設が大半**（`rod_count_limit`/`rod_length_limit`は全件未記入）。

| # | 施設 | frontmatter反映 | 確認できた事実 | 要照合・未確認 |
|---|---|---|---|---|
| 21 | 賢島フィッシングパーク海遊苑 | sea-pond（分類のみ） | 2時間1竿3,500円（竿・餌込）・子供2,000円・9:00〜17:00・要予約・TEL 090-3300-8127 △ | 竿の本数・長さ未確認。公式 `kaiyuuen.com` で確認 |
| 22 | 敦賀市海釣り公園 | sea-park（分類のみ） | 敦賀新港フェリーターミナル横の親水公園。投げ釣りは周囲に注意（禁止ではない）△ | 本数・営業時間・清掃協力金とも未確認。港都つるが観光協会 0770-22-8167 |
| 23 | 鵜方浜釣センター | なし | 渡船（筏・カセとも）4,000円（子供料金あり）・日の出前〜17:30・休みは1/1のみ・筏の相乗りなし・LJ着用義務・TEL 090-4863-3225（西尾渡船） △ | 竿の規定は記載なし。**運営は西尾渡船**。記事の料金（大人4,000円/小人2,000円）と照合 |
| 24 | 仮屋湾遊漁センター | なし | 4コース（A 3,000円・B 5,000円・C 8,000円・D 5,000円、学生は別料金）・入場のみ500円・7:00〜16:00・木曜休・貸竿500円・TEL 0955-52-3045 △ | 竿の本数・予約の要否は未確認（玄海町サイトで確認） |
| 25 | つり筏 深浦 | なし | 大人3,000円・中学生2,500円・小学生1,500円・夏5:30〜18:00／冬7:00〜16:30・無休・貸竿セット500円・LJ着用必須（レンタルあり）・TEL 090-3785-4216 △ | 予約電話が情報源で異なる（088-857-0011／渡船振興会）。公式 `fukaura-tosen.com` で確認。竿の規定なし |
| 26 | いかだ釣りの東海 | sea-pond（分類のみ） | イケス30分3,000円/1時間5,200円（竿1本につき）・「竿は1人1本・1本針」・エサはオキアミ限定・集魚器/ルアー禁止・TEL 0557-67-1611 △ | ⚠記事の料金（30分3,000円）は一致。予約は団体のみ必須（記事は先着順）。公式サイトを特定して本数を確認してから記入 |
| 27 | 海釣りランド（御立岬公園・芦北町） | sea-park（分類のみ） | ◎公式（`otachimisaki.com`）：入場料 大人800円・中学生以下400円、見学料 大人300円/中学生以下200円、セット（入場料・道具・エサ込）2,100円、8:00〜17:00、**水・木曜休**。**料金は運営者本人が正しいと確認（2026-10-06）** | ⚠記事の料金（大人700円・子供300円・手ぶら2,000円）が古い→更新が必要。定休日の記載も照合。竿の規定は記載なし |
| 28 | 由良海つり公園（和歌山） | なし | 釣り公園（大人1,650円/小人1,100円）＋釣堀ランド（大人12,000円・女性8,000円・小人6,000円・要予約・5〜9月7:00〜13:00）・木曜休・TEL 0738-65-3263 △ | 2ゾーンのため`facilityType`を1つに決められない。⚠記事の料金（釣堀12,000円・筏2,000円）と照合 |
| 29 | フィッシングブリッジ赤崎 | sea-park／`status: suspended` | ◎石川県の公式観光サイトに**「令和6年能登半島地震により被災・立入禁止」**と記載。再開情報は見つからず（能登町ふるさと振興課 0768-62-8526）。**運営者本人が「まだ臨時休業中」と確認（2026-10-06）**→`status: suspended`を付与（注意バナーのみ表示） | ⚠記事の本文・description・営業時間（「24時間開放」）は休業に触れていないまま。個別対応で直す |
| 30 | 筏釣り 高橋渡船 | なし | ◎公式：高校生以上4,000円・中学生3,000円・小学生2,000円・未満1,000円・6:00〜17:00・**電話予約のみ**（090-5719-1091）・エサ/弁当/飲料の販売なし・竿の規定は記載なし | ⚠記事の料金（4,000円）は一致。定休日・LJの記載は公式になし |

### 所見
- **竿の本数・長さを数値で書ける施設はなし**。筏・渡船・イケス系は規定が公式に載っていないことが多く、「空欄＝不明または制限なし」の運用で足りる
- **最優先は赤崎**（被災・立入禁止の可能性。誤った案内になる恐れ）。次に海釣りランドの料金不一致
- 検索の取り違えに注意: 「海釣りランド」を検索すると別施設（天草釣堀レジャーランド）が出る。正しくは御立岬公園内（`otachimisaki.com`）

---

## 個別記事対応タスク（2026-10-06）

- [x] **フィッシングブリッジ赤崎**（`fishing-bridge-akasaki`）【最優先・2026-10-06 反映済み（title/description/本文の注意書き/営業時間/地域ハブ）。再開見込みの確認のみ残る】 臨時休業中は確認済み・`status: suspended`は付与済み。残り: description（宮津の例のように「【重要：…休業中】」を冒頭に）、本文冒頭の注意書き、営業時間「24時間開放」の記述、`lastmod`を直す。再開見込みは能登町ふるさと振興課（0768-62-8526）で確認
- [x] **海釣りランド**（`sea-fishing-land`）: 料金を更新（確認済み: 入場料 大人800円・中学生以下400円／セット2,100円＝入場料・道具・エサ込／見学料 大人300円・中学生以下200円。記事は700円/300円/手ぶら2,000円）。`average_price`・title・description・本文の表を直す。定休日（水・木）・営業時間（8:00〜17:00）を記事と照合
- [ ] **賢島フィッシングパーク海遊苑**（`kashikojima-fishing-park-kaiyuen`）: 公式 `kaiyuuen.com` で料金（2時間3,500円・子供2,000円）・営業時間・予約・竿の本数を確認
- [ ] **敦賀市海釣り公園**（`tsuruga-city-sea-fishing-park`）: 敦賀市・港都つるが観光協会で営業時間・清掃協力金・竿の本数・投げ釣りの可否を確認
- [ ] **鵜方浜釣センター**（`ugata-hamatsuri-center`）: 西尾渡船の公式（`nishiotosen.com`）で料金（4,000円・子供料金）・営業時間・LJ義務・相乗りなしを記事に反映。運営者名を記事で確認
- [ ] **仮屋湾遊漁センター**（`kariyawan-fishing-center`）: 玄海町の公式案内でコース料金・営業時間（7:00〜16:00、木曜休）・予約の要否・竿の本数を確認し、記事と照合
- [ ] **つり筏 深浦**（`tsuri-ikada-fukaura`）: 公式 `fukaura-tosen.com` で料金・営業時間・予約先電話を確認（情報源で電話が異なる）。LJ着用必須・貸竿セット500円を本文に反映
- [ ] **いかだ釣りの東海**（`ikadatsuri-tokai`）: 公式サイトで本数（1人1本・1本針の情報あり）・エサのオキアミ限定・団体予約のみ必須かを確認し、記事（先着順）を直す。確認できたら`rod_count_limit`を記入
- [ ] **由良海つり公園**（`yura-sea-fishing-park`）: 釣り公園と釣堀ランドの料金・営業時間を公式で確認（釣り公園1,650円/1,100円、釣堀ランド12,000円/8,000円/6,000円）。`facilityType`の扱いを決める
- [ ] **筏釣り 高橋渡船**（`raft-fishing-takahashi`）: 公式で定休日・LJ・レンタルの有無を電話確認（公式ページに記載なし）。電話予約のみ・エサの販売なしを本文に明記
