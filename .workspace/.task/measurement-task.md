# 効果測定タスク（データ待ち・判定待ち）

GSC/GA4の将来データが揃わないと判定できないタスクを個別管理する。優先実行タスクは[[weekly-task]]、手動作業は[[subtask]]を参照。1件ずつ対応できるよう、各項目に「測定対象・判定に必要なデータ・判定基準・取得タイミング」を持たせる。完了したら[x]にして`archive/task/`へ移す。

最終更新: 2026-10-04（w41 のメモと M9 を追記）

> **w41 以降の読み方**: GSC は7日単位。単週では判定せず **w41〜w44 の4週合算**で判定する（w41 の GSC は前回が3か月のため WoW 不可。w40÷13 の週平均と比較）。詳細は `access-data/CLAUDE.md`。

---

## M1. GA4 `affiliate_id`別クリックの確認（新規・Tier1の効果測定）

- **測定対象**: `affiliatecard_click`の商品（セット）別クリック数。`affiliate_id`は2026-09-30登録のため、この日以降のデータのみ
- **取得タイミング**: W41〜W42（1〜2週分が溜まってから）
- **判定に必要なデータ**: GA4探索レポートで`affiliate_id`×`placement`×`facility_id`のイベント数
- **判定基準**: 上位クリック商品と魚種の対応を確認 → [[subtask]]項目6（タックル再編成）の入れ替え優先度・項目3手順4の配置優先度に反映
- 補足: 9/20時点で`affiliatecard_click`は過去28日15件と少ないため、母数が足りなければ期間を延ばす
- **w41メモ（2026-10-04）**: w41 のエクスポートに `affiliate_id` 列がなく判定不能。`affiliatecard_click` は9イベント／8日（w40は12）。エクスポートへの列追加は[[weekly-task]]のw41 Tier2で起票

## M2. ranking 2記事（kansai / kanto-tokai）の「釣り堀」表現調整の効果

- **測定対象**: 2026-09-29にdescription・冒頭を調整した`column/ranking/kansai`・`kanto-tokai`
- **取得タイミング**: W41以降のGSC
- **判定に必要なデータ**: 「釣り堀 大阪」「釣り堀 関西」「釣り堀 関東」等の一般語クエリの表示回数・順位・CTR、および既存の上位クエリ「関西 海上 釣り堀 ランキング」（4.3位）が維持されているか
- **判定基準**: 一般語の表示回数・順位が改善、かつ既存上位クエリが悪化していなければ他地域ランキングへ横展開。悪化していれば元に戻す
- **w41メモ（2026-10-04）**: 7日では判定不能（一般語クエリの表示は「釣り堀 大阪」1・「関西 釣り堀」1・「大阪 釣り堀」3 程度）。`kansai` は表示99・順位7.2・CTR10.1%、「関西 海上 釣り堀 ランキング」は順位3.5で既存上位クエリは維持。`kanto-tokai` は w41 のページ CSV に行がない。過去も表示がほぼなく（3か月17表示、w40）、クエリ「海上 釣り堀 ランキング 関東」（3か月375表示・順位6.2）の表示は別URLに出ている可能性が高い。**`kanto-tokai` の変更効果は表示が少なく判定不能**のため、表示先URLの確認を先に行う（[[weekly-task]]のw41 Tier2）。判定は w44（4週合算）

## M3. W29で悪化と判定された施設記事の再判定（残3件）

- **対象**: `umizuri-port-tajiri`・`matsunase-fishing-park`・`tsuri-ikada-fukaura`（`kariyawan-fishing-center`は悪化継続確認済み）
- **取得タイミング**: 次回GSC取得（301リダイレクトの新旧URL分裂は2026-09-20時点で実質解消しクリーンな再測定が可能）
- **備考**: `matsunase-fishing-park`はコミット`7a3d9d0`で内容差別化済み、個別保留は解消
- **w41メモ（2026-10-04）**: w41（7日）と w40÷13 の週平均の比較。`umizuri-port-tajiri` 3クリック／69表示（平均2.8／58）で横ばい以上、`kariyawan-fishing-center` 2／18（平均1.1／33）、`tsuri-ikada-fukaura` 0／17（0.6／32）、`matsunase-fishing-park` は w41 に行なし（平均0.7／14）。表示が小さく単週では判定せず、w44（4週合算）で再判定

## M4. 旧URL（`/blog/`）統合の進捗

- **測定対象**: 新旧URLペア103施設のクリック・表示回数の旧URL側比率（W40時点: クリック比率80.1%→40.8%）
- **重点**: 旧URL側が増えた6施設（`waita-sea-fishing-pier`・`kashikojima-fishing-park-kaiyuen`・`mukai-pearl-marine`・`wakasa-takahama-sea-fishing-park`・`asamushi-sea-fishing-park`・`shimanami-kaido-fishing-park`）
- **前提**: [[subtask]]項目1（GSCインデックス登録リクエスト。Tier1の49件は手動チェック済み、Tier2は未着手）と項目4（更新済み記事の再インデックス）の実施後に測定
- **判定基準**: 旧URL側クリックが減少し新URL側へ移行していれば完了。増え続ける施設は削除ツールでの一時非表示を検討
- **w41メモ（2026-10-04）**: 7日で旧 `/blog/` URL（`/blog/intelligence/` を除く）はクリック5／227（2.2%）・表示44／4,801（0.9%）。重点6施設は旧URL側の行がすべてなし（新URL側のみ）。w44 まで同水準なら**完了としてクローズ**（w40 の40.8%は3か月累計のため直接比較しない）

## M5. 施設名単体クエリのCTR0%（仮説の検証）

- **仮説**: 「パールマリン」「海上釣り堀海遊」「高橋渡船」「あっとしー明石」等はタイトルに施設名が入っており、タイトルでは改善せずローカルパック（マップ枠）や公式サイトにクリックを奪われている
- **検証手順**: [[subtask]]項目5（対象57件、順位9位以内のA層11件を最優先）に従い、実際に検索して見え方を確認。判定は同項目の判定メモ欄に記入
- **補足**: サイト平均CTR4.6%は安定しているため緊急性は低い

## M6. 観光×海上釣り堀マネタイズ施策のgo/no-go判断

- **測定対象**: `gothere_click`（過去28日で8件・母数不足）の設置面別・施設別内訳（GA4カスタムディメンション`placement`/`facility_id`は2026-09-20登録済み）
- **取得タイミング**: あと1〜2週
- **判定後に動くタスク**（判定待ちの持ち越し）:
  - GoThere 2箇所目設置（本文中盤）／Geolocation APIによる出発地自動取得（[[gothere-task]]1・2）
  - `column/travel/`の新規エリア展開（紀伊半島・関東・東海）着手判断（[[next-task]]）
  - `column/travel/`他記事（`kanagawa-miura-trip`・`hamanako-unagi-trip`等）の被リンクゼロ横展開確認（[[next-task]]）
- 関連: [[project-monetization-tourism]]
- **w41メモ（2026-10-04）**: GA4 エクスポートに `gothere_click` の行がなく、発火ゼロか未出力か不明（[[weekly-task]]のw41 Tier2で切り分け）。出発地の参考として w41 の市区町村別セッションは大阪68・名古屋21・広島19・京都18・福岡15・東京23区計約45（(not set) 140、Singapore 28 はボット疑いで除外）。GoThere の出発地プリセットの優先順は大阪→名古屋→広島→京都→福岡が候補

## M7. VC（ASP）管理画面での宿泊/レンタカー成約数確認

- 管理画面ログインが必要なため未実施。手動確認が必要（M6の判断材料）

## M8. 診断アプリ・「今週末はここ！」枠の効果（新規・[[diagnosis-app-task]]）

- **測定対象**: 診断完了率（`diagnosis_start`→`diagnosis_complete`）、結果クリック率、結果経由の`gothere_click`・`affiliatecard_click`・VC成約
- **取得タイミング**: 公開から2〜4週間後
- **判定基準**: 診断経由の施設記事遷移後の`gothere_click`率が通常記事経由を上回れば、全記事への導線展開（フェーズ3）へ。完了率が低ければ質問数を削減

## M9. 2026-09-21・09-23 の施設改善（タイトル/メタ・FAQ・情報最新化）の効果（新規・w41）

- **測定対象**: 2026-09-21 のCTR0%×page1相当10施設のタイトル/メタ改善、2026-09-23 の5施設（`kaijo-tsuribori-kaiyu`・`family-tsuribori-tsutteminde`・`totto-park-koshima`・`shinojima-tsuri-tengoku`・`naoetsu-port-3rd-east-breakwater`）の情報最新化・FAQ新設、および `tsuyu-rainy-day-strategy`・`sendai-port-central-park-sea-square`（[[weekly-task]]のw41 Tier2）。実施内容は[`archive/task/weak-query-improvement-list.md`](../archive/task/weak-query-improvement-list.md)
- **ベースライン**: w37・w40 の3か月 CTR（例: `kaijo-tsuribori-kaiyu` 0.9%・`totto-park-koshima` 1.3%・`sendai-port-central-park-sea-square` 3.4%・`tsuyu-rainy-day-strategy` 4.8%）。w41 単週は `kaijo-tsuribori-kaiyu` 0.7%（表示136）・`totto-park-koshima` 1.1%（表示181）でまだ改善なし
- **取得タイミング**: w44（w41〜w44 の4週合算）。再インデックス前の期間が混ざるため、[[subtask]]項目4（再インデックス）の実施日を確認してから判定
- **判定基準**: 4週合算の CTR がベースラインより改善していれば施策を他施設へ横展開。改善しなければタイトルではなく本文・検索意図側（ローカルパック等）の仮説に切り替え（[[measurement-task#M5. 施設名単体クエリのCTR0%（仮説の検証）|M5]]と合流）
