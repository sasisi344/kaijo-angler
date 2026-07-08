# 旅行系コンテンツ強化プラン（travelplan）

目的：旅行アフィリエイト（宿泊・プラン予約）を強化するため、遠征釣行を軸にしたコンテンツ群を整備し、「遠征ガイド → 地域アクセスハブ → 施設ページ」の3層内部リンク構造を全エリアで完成させる。

作成日: 2026-07-08 / 更新: 2026-07-08（`.workspace/.task/travel-category/` の既存戦略資産を反映）

---

## 既存戦略との整合（必読）

`.workspace/.task/travel-category/travel-hub.md`（2026-05-29更新）に既決事項がある：

- <strong>コンテンツ積み上げは凍結済み</strong>。北陸・四国・九州の新規アクセスハブは「施設数が少なく投資対効果が薄い」として凍結
- 方針は<strong>機能型アプローチ「GoThere コンポーネント」</strong>（施設ページに位置情報×アフィリ直結リンクを設置、170施設に一括展開）へ転換済み
- KPI は「追加記事数 0・GoThere 経由クリック月200」

→ 本プランはこの決定を尊重しつつ、今回作成した遠征ガイド（全国版）を「凍結ハブの代替となる受け皿」と位置づける。<strong>access-setouchi の新規作成は凍結対象と衝突するため優先度を下げ、着手前に費用対効果を再判断する</strong>。アフィリ強化の主軸は GoThere 実装に置く。

### 利用可能な既存資産

| 資産 | パス | 用途 |
| --- | --- | --- |
| 記事テンプレート（H2骨格・品質チェックリスト付き） | `.workspace/.task/travel-category/travel-content-template.md` | 新規アクセス記事・リライト時に必ず使用 |
| Deep Research プロンプト集 | `.workspace/.task/travel-category/deep-research-prompts.md` | 新エリア調査の型（A→B/C/D→E の順で実行） |
| 交通調査レポート6本（2026年4月時点） | `.workspace/.task/travel-category/research-file/` | 淡路島／和歌山・白浜＋しまなみ広島〜愛媛／三重伊勢志摩＋浜名湖／千葉南房総＋三浦／熊本・天草／香川・小豆島 |

---

## 完了済み

- [x] 遠征釣行ガイド（全国版ハブ）を作成
  - `src/content/blog/column/travel/access/ensei-guide/index.mdx`
  - `_draft/ryokoukei.md` のノウハウ（移動費・釣具配送・魚のクール便・前泊）を再構成
  - 主要4都市（東京・名古屋・大阪・福岡）→ 瀬戸内・紀伊半島の移動費・時間テーブル
- [x] 既存アクセスハブ3本（access-kanto / access-kinki / access-tokai）の関連ページ欄に遠征ガイドへの双方向リンクを追加

---

## 新規記事の作成

### 優先度：高

- [x] **遠征用クーラーボックス選び（物販系記事）** — 完了（2026-07-08）
  - `src/content/blog/column/travel/cooler-box-guide/index.mdx` を新規作成
  - 3辺合計260cm規定・車/電車/飛行機別のサイズ選び・保冷剤アフィリ（logos-hyotenka-pack）を掲載
  - ensei-guide・fish-shipping-guide と双方向リンク

### 優先度：中

- [x] **釣った魚の配送 完全ガイド** — 完了（2026-07-08）
  - `src/content/blog/column/travel/fish-shipping-guide/index.mdx` を新規作成
  - クール便・発泡スチロール宅配便セット・営業所止め・受け取り設計のノウハウを独立記事化
  - ensei-guide・cooler-box-guide と双方向リンク（施設個別ページへのリンクは今後の横展開で追加）

※「紀伊半島 遠征特化記事」は既存 `wakayama-kii-trip` と被るため<strong>新規中止→リライトへ変更</strong>（下記参照。判定根拠は [travel-content-report.md](./travel-content-report.md)）

### 優先度：低（凍結対象と衝突 — 着手前に travel-hub.md の凍結判断を再評価すること）

- [ ] 瀬戸内アクセスハブ `access-setouchi`（中国・四国）
  - travel-hub.md で「四国ハブ」は凍結済み。ただし当時と違い（1）遠征ガイドからのリンク先需要（2）調査レポート「しまなみ・広島〜愛媛」「香川・小豆島」が既にあり調査コストほぼゼロ、という条件変化がある
  - 作成する場合は `travel-content-template.md` の骨格＋既存レポート2本で執筆し、新規調査はしない
- [ ] 九州アクセスハブ（凍結済み。着手するなら「熊本・天草」レポートを流用）
- [ ] 飛行機遠征ガイド（竿のハードケース・機内持ち込み規定・空港レンタカー）

---

## 既存記事の改善

詳細な仕分け（A〜D群の分類・C群15本の統合/強化判定）は [travel-content-report.md](./travel-content-report.md) 参照。

- [x] **【P1】孤立記事3本の内部リンク解消**（wakayama-kii-trip / oita-saganoseki-trip / nagasaki-goto-trip）
  - 3本とも内部リンク0本 → 解消済み（2026-07-08）。ensei-guide・アクセスハブ・施設ページへのリンクと「関連ページ」「情報の確認先」H2を追加。加えて九州スポーク4本（oita-saganoseki / nagasaki-goto / kumamoto-amakusa / december-kagoshima-ibusuki）を相互リンクで連結し、updatedDate も付与
- [x] **【P1】wakayama-kii-trip を「南紀遠征完全版」へリライト**（旧・紀伊半島新規タスクを充当）— 完了（2026-07-08）
  - 「このガイドが向いている人」結論表・前泊1泊2日構成・宿選び基準＋エリア別宿泊圏（串本駅周辺／勝浦温泉／那智勝浦）・時点明記（2026年7月時点）を追加。タイトルも「南紀遠征完全ガイド」に更新
- [x] **モデルプラン記事群に宿泊導線を追加** — 完了（2026-07-08、3並列フォークで実施）
  - 対象10本すべてに「宿泊先選び」セクション（宿選び基準＋エリア別宿泊圏）とensei-guideへのリンクを追加：wakayama-kii-trip（先行実施）/ shirahama-onsen-trip / ise-shima-model-plan / awaji-family-trip / kagawa-shodoshima-trip / shimanami-cycling-fishing / chiba-minamiboso-trip / fukui-mikata-goko / hamanako-unagi-trip / kanagawa-miura-trip / kumamoto-amakusa-trip
  - kanagawa-miura-tripは日帰り前提の記事のため「1泊にして早朝便を楽しみたい場合」という条件付き見出しに調整
  - ensei-guide側の「前泊のすすめ」リンク集にも不足していた5本（chiba-minamiboso / fukui-mikata-goko / hamanako-unagi / kanagawa-miura / kumamoto-amakusa）を追加し双方向リンク完成
  - `pnpm astro check` で0エラー確認済み
- [x] **県別施設ページ・主要施設ページから遠征ガイドへのリンク追加** — 完了（2026-07-08）
  - 白浜カタタ・淡路じゃのひれ・三重の辨屋・正徳丸の4施設ページのアクセスセクションにensei-guideへのリンクを追加
- [x] **access 系記事の情報鮮度チェック** — 完了（2026-07-08、WebSearchで粗チェック）
  - access-kanto/kinki/tokai/ensei-guideの主要区間（くろしお・しまかぜ・近鉄特急・新幹線）を確認。誤差は許容範囲内（閾値：所要時間30分・料金1,000円未満は据え置き）につき数値の書き換えは無し
  - 発見した記事間の内部不整合（ensei-guide vs access-tokai の「名古屋→賢島」所要時間・料金表記のズレ）は解消済み（約1時間50分・約3,000〜3,500円に統一）
  - 要確認扱い（未修正）：access-tokaiの「東京→浜松」ひかり/こだま料金差の表現（実際は同一運賃体系の可能性）、access-tokaiの「大阪難波→賢島」しまかぜ料金（参照出典が2022年6月時点で確度不足）。公式一次情報での確認が取れ次第、別途修正が必要
- [x] **ise-shima-access-guide / hamanako-access-guide / chiba-minamiboso-access-guide の関連ページ欄**にも遠征ガイドリンクを追加 — 完了（2026-07-08）

---

## 旅行アフィリエイト強化施策

### 主軸：GoThere コンポーネント実装（travel-hub.md の既定路線）

施設ページの「アクセス」セクション末尾に、出発地→施設のアフィリ直結リンク（電車=Yahoo!路線 / 飛行機=スカイスキャナー / 宿泊=じゃらん・楽天トラベル / レンタカー=じゃらんレンタカー）を出すコンポーネント。詳細設計は `travel-hub.md` §1〜3 参照。

- [x] Phase 1: `GoThere.astro` 実装（既に実装済みだったことを確認・2026-07-08）
  - `src/components/widgets/GoThere.astro`：Googleマップ経路リンク・じゃらんnet／楽天トラベル・じゃらんレンタカー（駐車場ありの施設のみ）を静的リンク出力
  - `facility-access.ts`のような独立スキーマは作らず、既存の`fishing-facility`コレクションの`google_maps`（lat/lng）・`facility_details.amenities.parking`を直接参照する設計。二重管理を避けられている
- [x] Phase 1→3: 全115施設（アーカイブ済み1施設を除く）に `<GoThere />` 設置 — 完了（2026-07-08）
  - 着手時点で35施設に展開済み（記事作成時に個別対応されていた）。今回スクリプトで残り77施設に機械的に追加（importとコンポーネント呼び出しをまとめめて挿入、`pnpm astro build`で463ページ生成・0エラーを確認）
  - 唯一の例外：`shodoshima-furusatomura-fishing-pier`（廃業済みのアーカイブ記事のため意図的に対象外）
- [x] クリック計測の実装 — 完了（2026-07-08、kpi-improvement-tasks.md Phase 2の主要ギャップを解消）
  - GoThere内の4種のリンク（maps/jalan/rakuten/rentacar）に`data-gothere-link` `data-gothere-facility` `data-gothere-type`属性を付与
  - `document`への委任イベントリスナー（初期化フラグでコンポーネント多重描画時の重複登録を防止）で`gtag('event', 'gothere_click', {facility_id, link_type})`を発火
  - ビルド後のHTMLで属性・スクリプトの出力を確認済み。GA4側でのイベント受信確認・探索レポート作成は未実施（要GA4管理画面アクセス）
- [ ] Phase 2（任意）: Geolocation による出発地推定・フェリー必須フラグでの枠切り替え
- KPI: GoThere 経由アフィリクリック 月200 → 計測基盤は整った。実測値の集計はGA4側の作業として残る

### 記事側の補完施策

詳細は [travel-supplementary-report.md](./travel-supplementary-report.md) 参照（2026-07-08実施）。

- [x] **宿泊予約リンクの挿入ポイントを設計** — 完了
  - 第一候補（ensei-guideの「前泊のすすめ」）に決定・実装。`<AffiliateCard id="travel/jalan-net">` / `id="travel/rakuten-travel"` を設置し、既存のGoThereと同じアフィリ先を再利用（新規ASP契約なし）
  - 実装過程で`AffiliateCard.astro`の潜在バグ（VCバナー画像の誤抽出・nofollow欠落）を発見・修正
  - 第二候補（モデルプラン10本の宿泊セクション）への横展開は見送り。まずensei-guide単体のクリック実績（§効果測定）を見てから判断
- [ ] **「施設×最寄り宿」のデータ整備** — 意図的に見送り（凍結ではなく判断保留）
  - `affiliateRegion`によるエリアコード深いリンクは、jalan/rakuten宿泊検索での検証済みURL仕様がコードベース内に存在せず、未検証コードの一括埋め込みはリンク切れリスクがあるため今回は実装しない
  - 実際のASP管理画面でディープリンク仕様を確認できた場合、またはクリック実績が十分に積み上がった場合に再判断
- [x] **レンタカー導線の検討** — 完了
  - GoThere側は実装済み（駐車場ありの施設のみレンタカー枠表示）を確認。ensei-guideに「新幹線・飛行機で来た場合のラストワンマイル」セクションを追加し`<AffiliateCard id="travel/jalan-rentacar">`を設置、GoThereと文言・リンク先を整合
- [x] **効果測定** — ローカルGA4/GSC週次エクスポート（W24〜W28）で暫定確認、本格計測は保留
  - travel記事は個別に週1〜3ユーザーとまだ小規模。ensei-guideは2026-07-08公開のためW28までのエクスポートに実績なし
  - ページ単位のエクスポートにはイベントデータ（`gothere_click`等）が含まれず、クリック計測にはGA4探索レポートでの手動確認が必要（`kpi-data-collection.md` §J参照）。2〜4週間後を目安に実施を推奨

---

## メモ

- 新規アクセス記事・リライトは `travel-content-template.md` の骨格（先に結論表→手段別→タイプ別おすすめ→チェックリスト→関連ページ→情報の確認先）と品質チェックリストに従う
- 調査レポート6本は「2026年4月時点」の情報。記事化する際は料金・ダイヤを公式で再確認し、本文に時点を明記する
- 紀伊半島深堀り・魚の配送ガイド等の執筆時は、該当レポート（伊勢志摩・和歌山白浜）を一次素材に使う
- 記事本文の強調は `<strong>` を使用（`**` 禁止）。CLAUDE.md 準拠
- column コレクションの frontmatter：title / publishDate / category / draft / tags / description / image（slug 不要、ディレクトリ名がURLになる）
- 内部リンクの正例：`/column/travel/access/access-kinki`、`/fishing-facility/west-japan/wakayama`、施設は flat slug（`/fishing-facility/kakata-fishing-pond/`）
- 料金・ダイヤは「目安＋公式確認の注記」スタイルで統一
