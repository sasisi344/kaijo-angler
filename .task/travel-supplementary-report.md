# 記事側の補完施策 — 実行レポート

対象：`travelplan.md` §「記事側の補完施策」4項目
実施日：2026-07-08

---

## 1. 宿泊予約リンクの挿入ポイント設計 → 実装済み

**決定**：第一候補どおり、ensei-guide の「前泊のすすめ」セクションに設置。GoThere と同じアフィリ先（じゃらんnet／楽天トラベル）を再利用し、新規 ASP 契約は不要。

**実装**：`src/content/blog/column/travel/access/ensei-guide/index.mdx`

- 「前泊のすすめ」セクション末尾に `<AffiliateCard id="travel/jalan-net" />` `<AffiliateCard id="travel/rakuten-travel" />` を追加
- 「主要都市からの移動費・所要時間まとめ」セクション末尾に新規幹線・飛行機ラストマイル向けの短い解説＋`<AffiliateCard id="travel/jalan-rentacar" />` を追加（§3 と連動）

**副産物（バグ修正）**：`AffiliateCard.astro` はコード上に `isService` 分岐（travel/ 系アフィリ専用の表示ロジック）が用意されていたが、記事側で一度も呼ばれておらず未検証だった。今回が実質初の本番投入だったため、以下の潜在バグが表面化し修正した。

1. 画像抽出ロジックが ValueCommerce のトラッキング用バナー画像（`gifbanner`/`jsbanner`）を「商品画像」として誤抽出し、広告バナーがカードに表示されていた → `valuecommerce.com/servlet/` を除外フィルタに追加
2. `isService` 分岐の CTA リンクに `rel="nofollow"` が付与されておらず、GoThere 側の実装（nofollow あり）と不整合だった → 追加

`pnpm astro check`（0 エラー）・`pnpm astro build`（463 ページ生成・0 エラー）で確認済み。

**見送った第二候補**：モデルプラン10本の宿泊セクションへの同時展開は今回は行わない。travel-hub.md の「追加記事数0」の思想に沿い、まず ensei-guide 1箇所での挿入効果（§4のクリック計測）を見てから、必要なら横展開する方が過剰な物量投下を避けられる。

---

## 2. 「施設×最寄り宿」のデータ整備 → 意図的に見送り（理由を記録）

travel-hub.md §2.2/2.4 で設計されている `affiliateRegion`（じゃらん・楽天のエリアコード）による深いリンク（例：`?area={code}`）は、**現状コードベースに実装例・検証済みの URL フォーマットが存在しない**ことを確認した。

調査結果：

- `AffiliateCard.astro` には Amazon/楽天市場/Yahoo!ショッピングの商品検索については ValueCommerce の `vc_url=` パラメータでディープリンクする実装がある（`rakutenSearch` / `yahooSearch`）
- 一方、じゃらんnet・楽天トラベルの**宿泊エリア検索**用ディープリンク（`?area=` や `?f_area=`）は本サイトのどこにも実装・検証履歴がない
- 未検証のエリアコードを115施設分でっち上げて埋め込むと、リンク切れ・的外れな検索結果のリスクがあり、アフィリエイト成果にもマイナス

**判断**：`facility-access.ts` のような専用データモデルの新規構築は今回は行わない。現状の汎用リンク（GoThere・ensei-guideとも同一の「じゃらんnet／楽天トラベルのトップページ」への遷移）で機会損失は限定的と判断。エリアコード方式は、実際の ASP 管理画面でディープリンク仕様を確認できた場合、または §4 のクリック計測で十分なボリュームが確認できてから投資判断する。

---

## 3. レンタカー導線の検討 → 対応済み（既存実装の整合確認＋記事側を補強）

- GoThere.astro 側はすでに `facility_details.amenities.parking` の有無でレンタカー枠の表示/非表示を制御済み（実装は完了している）
- 記事側（ensei-guide）には「新幹線・飛行機で来た場合のラストワンマイル」の説明が欠けていたため、§1 で追記。GoThere のレンタカー枠と文言・リンク先（じゃらんレンタカー）を揃え、二重管理にならないようにした

追加のデータモデル（フェリー必須フラグ等）は travel-hub.md Phase 2（Geolocation 対応）の範囲であり、今回のスコープ外。

---

## 4. 効果測定 → ローカルのGA4/GSC週次エクスポートで暫定確認（本格計測は要GA4手動作業）

`.workspace/.task/access-data/weekly-report/2026/W24〜W28`（2026-05-30〜2026-07-04）のCSVを確認した。

**わかったこと**：

- travel column配下の個別記事は週あたり1〜3ユーザー程度とまだ小さい（新設記事が多いため想定内）
- ensei-guide は2026-07-08公開のため、直近週（W28まで）のエクスポートには**まだ計測期間が含まれておらず、セッション実績なし**
- これらのページレベルエクスポートには**イベント単位のデータ（`gothere_click` 等）が含まれていない**。GoThere・AffiliateCard経由のクリックを追うには、GA4の探索レポートでイベント名 `gothere_click` を `link_type` ディメンションで分解する必要があり（`kpi-data-collection.md` §J に手順記載済み）、これはGA4管理画面での手動作業が必要でこの場では自動化できない

**推奨アクション**：

1. ensei-guide公開・AffiliateCard設置から2〜4週間後を目安に、`kpi-data-collection.md` §J の手順でGA4探索レポートを作成し、`gothere_click` イベント数と `link_type=jalan/rakuten/rentacar` の内訳を確認する
2. 同時に `kpi-data-collection.md` §B・§C（travelカテゴリのオーガニックセッション・ランディングページ別）も埋める。ensei-guide単体の流入が積み上がってきたタイミングで、今回追加した宿泊/レンタカーCTAのクリック率を評価する

---

## 変更ファイル一覧

- `src/content/blog/column/travel/access/ensei-guide/index.mdx`（AffiliateCard 3箇所追加）
- `src/components/common/AffiliateCard.astro`（バナー画像誤抽出の修正、nofollow追加）
- `.task/travel-supplementary-report.md`（本レポート）
