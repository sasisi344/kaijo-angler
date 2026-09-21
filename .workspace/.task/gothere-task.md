# GoThere 追加改善 作業タスク

作成: 2026-09-02 ／ 前身: [[travel-task]]（Phase 2でGoThere本体・宿泊/レンタカーの出し分けを実装済み・アーカイブ済み）／ 統合元: `go-there-phase1.md`（2026-05-29、初期導入プラン。本タスクへ統合のうえ`.workspace/archive/task/`へ移動済み）

このタスクを以後のGoThere関連作業のメイン進行ファイルとする。

### `go-there-phase1.md` との統合結果（2026-09-02）

- コンポーネント本体の実装・34施設への展開手順（Step 1〜5）：**完了・不要**。GoThere.astroは既に113施設全件に設置済み（[[travel-task]] 2-3）
- 「Phase 2へ持ち越すもの」のうち、Geolocation API・フェリー必須フラグは本ファイルの1・3に統合
- 「施設メタデータ外部ファイル化（facility-access.ts）」：**不要と判断**。lat/lng・parkingは既に各施設frontmatterに格納済みで、travel-taskで`travel-area-links.json`/`travel-asp-profile.json`という形の外部データファイルも整備済みのため、あらためて別ファイルを作る動機がない
- 「残り136施設への展開」：**完了により不要**（113/113件に設置済み）
- 「宿泊プランあり/なしフラグ」：**完了により不要**。`metroPrefectures.list`による近隣/遠方判定（`hasLodging`/`isFar`）で実質同じ効果を実装済み

## 前提（travel-taskで完了済み・再対応不要）

- `GoThere.astro` は施設113本全件に設置済み（`travel-task.md` 2-3参照）
- 宿泊リンク（じゃらんnet／楽天トラベル）は `travel-area-links.json` の area→prefecture フォールバックでMyLink化済み
- レンタカーは `travel-asp-profile.json` の `rentacarByArea[].hubs[]` から取得（全50エリアが`jalan-mylink`、`option: none`は解消済み）
- 近隣日帰り施設（`metroPrefectures.list`）では宿泊訴求を出さない、遠方施設では「前泊」を主役にする出し分けは実装済み
- `AffiliateCard`/`GoThere`双方に`gtag`クリック計測（`affiliatecard_click`／`gothere_click`）実装済み、`placement`propも指定済み

---

## 1. GoThere 2箇所目の設置（本文中盤）

`travel-task.md` 2-3で「記事ごとに文脈が異なるため一括スクリプト化が難しい」として保留されていた項目。現在は全113本とも記事末尾（アクセス情報／FAQ直後）の1箇所のみ設置。

- [ ] **2026-09-20 PDCAで判定不能・持ち越し確定**。過去28日（8/23〜9/19）で`gothere_click`は8件（初回計測7件からほぼ横ばい）と依然母数不足。加えてGA4に`placement`/`facility_id`のカスタムディメンションが一度も登録されていなかったことが判明し、同日登録した（登録前のデータは遡って反映されないため、今回のPDCAでは設置面別の内訳はそもそも取得不可だった）。次回PDCA以降は面別データが取れる見込み
- [ ] 判断材料が揃うまでは着手しない。位置決めは記事ごとの手動判断になる見込みが高く、スクリプト一括処理は不向き

## 2. Geolocation API による出発地の自動取得（任意）

`go-there-phase1.md` Phase 2持ち越し項目。ブラウザのGeolocationで読者の現在地を取得し、出発地別の「おすすめの行き方」を自動表示する案。

- [ ] **2026-09-20 PDCAで判定不能・持ち越し確定**（理由は上記1と同じ＝`gothere_click`母数不足＋カスタムディメンション未登録が判明・登録済み）
- [ ] 実装する場合の論点：位置情報取得の同意UI、取得失敗時のフォールバック（現状の手動選択式のまま）、プライバシーポリシーへの追記要否

## 3. フェリー必須フラグ（施設frontmatter拡張）— 完了・見送りで確定（2026-09-03）

離島施設（フェリー言及13件: `nanko-fishing-park`／`sakurajima-sea-fishing-park`／`takashima-tobishima-isotsuri-park`／`shinkamigoto-sea-fishing-pond`／`shibushi-bay-daikoku-dolphin-land`／`shodoshima-furusatomura-fishing-pier`／`naoshima-fishing-park`／`kaijo-tsuribori-tairyomaru`／`kaijo-tsuribori-kaiyu`／`umingu-oshima`／`fishing-park-toi`／`tsuruga-city-sea-fishing-park`／`shinojima-tsuri-tengoku`）を洗い出し済み。frontmatterへの`access_notes.ferry_required`フラグ追加は将来の検索・フィルタリング機能向けのみで現状のGoThere表示には不要と判断し、**見送りで確定**（再提案があるまで着手しない）。

## 4. GoThere/AffiliateCard クリック実績の定点観測 — 初回計測完了（2026-09-03）

GA4（プロパティ「海の上のアングラー」497707830）で初回計測を確認。過去28日間（8/6〜9/2）で`gothere_click` 7件（ユーザー2人）・`affiliatecard_click` 3件（ユーザー1人）を検出。イベント自体は計測できているが、facility_id/link_type/placement別の内訳を見るには件数がまだ少なすぎる。

- [x] **2026-09-20再計測**：過去28日（8/23〜9/19）で`gothere_click` 8件（ほぼ横ばい）・`affiliatecard_click` 15件（5倍増）。`gothere_click`は依然面別分析に不十分。`affiliatecard_click`の伸びは次回施設別内訳が取れ次第要注目
- [ ] 次回PDCA（面別データが取得可能になって以降）で改めて設置面別・エリア別のクリック傾向を見る

---

## 進め方の原則

1. 上記1・2はいずれも「今すぐ価値があるか不明」な改善案であり、travel-taskのように今日中に一括実装する性質のものではない。クリック実績（4）が出そろってから着手要否を判断する
2. 新規コンポーネント開発はしない。既存の`GoThere.astro`／`AffiliateCard.astro`の表示条件・設置面の調整に留める
