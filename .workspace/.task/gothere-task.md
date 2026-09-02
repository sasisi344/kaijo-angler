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

- [ ] 中盤（施設紹介・料金セクションの後など）に2箇所目を置く価値があるか、GA4の`gothere_click`実績（設置面別）が出そろってから判断する
- [ ] 判断材料が揃うまでは着手しない。位置決めは記事ごとの手動判断になる見込みが高く、スクリプト一括処理は不向き

## 2. Geolocation API による出発地の自動取得（任意）

`go-there-phase1.md` Phase 2持ち越し項目。ブラウザのGeolocationで読者の現在地を取得し、出発地別の「おすすめの行き方」を自動表示する案。

- [ ] 費用対効果が不明。まずはアクセスガイド記事（手動選択式）のクリック実績を見て、自動化する価値があるか判断する
- [ ] 実装する場合の論点：位置情報取得の同意UI、取得失敗時のフォールバック（現状の手動選択式のまま）、プライバシーポリシーへの追記要否

## 3. フェリー必須フラグ（施設frontmatter拡張）

`go-there-phase1.md` Phase 2持ち越し項目。離島施設（例：小豆島・五島列島・奄美大島・篠島等）はフェリー必須だが、現状は本文の手書き記述のみで構造化されていない。

- [ ] 対象施設の洗い出し（本文で「渡船」「フェリー」「高速船」に言及している施設を`grep`で抽出）
- [ ] frontmatnterに`access_notes.ferry_required: true`等のフラグを追加する価値があるか検討。用途は主に将来的な検索・フィルタリング機能向けで、現状のGoThere表示には必須ではない
- [ ] 優先度低。3-1（施設→アクセスガイド内部リンク）で離島施設は個別に文脈確認済みのため、当面は現状維持でよい

## 4. GoThere/AffiliateCard クリック実績の定点観測

- [ ] GA4で`gothere_click`（facility_id / link_type）・`affiliatecard_click`（affiliate_id / link_type / placement / shop）を確認できる状態になっているか、初回計測を確認する
- [ ] `weekly-task.md`の9月第3週PDCA（[[travel-task]] Phase 4-2）と合わせて、面別・エリア別のクリック傾向を見る
- [ ] `next-task.md`にある「TABILMO P1クリック実績計測」「観光導線ブロックのgo/no-go判断」とも連動するため、判断はまとめて行う

---

## 進め方の原則

1. 上記1〜3はいずれも「今すぐ価値があるか不明」な改善案であり、travel-taskのように今日中に一括実装する性質のものではない。**4（クリック実績の定点観測）を先に行い、データが出てから1〜3の着手要否を判断する**
2. 新規コンポーネント開発はしない。既存の`GoThere.astro`／`AffiliateCard.astro`の表示条件・設置面の調整に留める
