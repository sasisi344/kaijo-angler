# KPI 改善タスク深堀り — サイト構成レビュー反映版

作成日: 2026-07-08
参照:
- KPI シート: `.workspace/.task/kpi-data-collection.md`（2026-07-08 前提修正済み）
- 戦略: `.workspace/.task/travel-category/travel-hub.md`（GoThere 主軸）
- コンテンツ仕分け: [travel-content-report.md](./travel-content-report.md) / [travelplan.md](./travelplan.md)
- 週次データ: `.workspace/.task/access-data/weekly-report/2026/`（W24〜W28 取得済み）

---

## 0. 現状診断（なぜ深堀りが必要か）

| 事実 | 影響 |
| --- | --- |
| KPI シートは 2026-05-28 作成後、<strong>全項目未記入</strong>のまま | ベースラインが存在せず、施策効果（GoThere・リライト）が測れない |
| §I 四半期レビューは「3・6・9・12月末」設定 → <strong>6月末分が期限超過</strong> | 今週中に初回記録を行う必要がある |
| 2026-07-07 に重複 URL（/blog/ 二重化・約649記事）を解消 | GSC の評価統合が今後数週間動く。<strong>今がベースライン取得の最適タイミング</strong>（統合前の分断データと統合後を区別できる） |
| GoThere は 35 施設に展開済みだが<strong>クリック計測が未設計</strong> | 主 KPI「月200クリック」が定義だけ存在し検証不能 |
| KPI シートの URL フィルタ・ハブ一覧が旧構成のまま | → 2026-07-08 に修正済み（§B 注記・§H ensei-guide 追加・§J 新設） |
| 週次 PDCA（W24〜W28）でサイト全体データは取得済み | §A/§B の一部はゼロから収集しなくても週次データから概算ベースラインを転記できる |

---

## Phase 1: ベースライン記録（今週・最優先）— 約1.5h

四半期レビュー期限超過分の初回記録。KPI シートの収集手順に従うが、以下の追加ルールを守る。

- [ ] **B: カテゴリ別オーガニックセッション（10分）**
  - GA4 ランディングページで `/column/travel/`・`/fishing-facility/`・`/tactics/` を取得
  - ⚠️ `/blog/column/travel/...` 等の旧 URL 分を<strong>必ず合算</strong>（正規表現フィルタ `^/(blog/)?column/travel/`）
- [ ] **D-1〜D-2: GSC クエリ TOP30（20分）**
  - CSV は `.workspace/.task/access-data/` に日付付きで保存（既存の命名規則 `2026-MMDD-...csv` に合わせる）
  - ページフィルタも両プレフィックス対応
- [ ] **A: ビジネスリーチ（5分）**
- [ ] **F: Core Web Vitals（5分）** — Astro 移行済みのため「不良ゼロ」の確認のみ
- [ ] **§I 四半期レビュー表に転記**（Q2 末分として。URL 統合直後のため「参考値」注記を付ける）
- [ ] 既存 W24〜W28 週次レポートからサイト全体のクリック・表示・CTR 推移を §I の補足として転記（収集済みデータの再利用）

## Phase 2: GoThere クリック計測の実装（今週〜来週）— 主 KPI の計測基盤

戦略の主軸（travel-hub.md）なのに効果検証手段がない、最大のギャップ。

- [ ] 計測方式を決定：GA4 標準の `click` イベント＋`link_url` では GoThere 経由かどうか判別できないため、<strong>GoThere.astro 内のリンクに識別子を付与</strong>する
  - 案1: ラッパー div に `data-gothere` を付け、GA4 のカスタムイベント（小さな inline script で `gtag('event', 'gothere_click', {...})`）
  - 案2: AffiliateCard に `utm_content=gothere` 相当のパラメータ透過（ASP リンク改変可否を先に確認）
- [ ] 実装後、GA4 探索レポートを保存し「月次 GoThere クリック」を §J に記録開始
- [ ] 1ヶ月データが溜まったら「施設あたりクリック」で Phase 3（残り81施設展開）の費用対効果を判断

## Phase 3: クエリマスタ 50 件（§E）× コンテンツ仕分けの接続 — 来週以降・60〜90分

§E は単独作業にせず、travel-content-report.md の P1〜P4 と突き合わせて「データで裏取りした優先順位」に変換する。

- [ ] GSC CSV（Phase 1 で取得済み）からインプレッション上位30件を転記
- [ ] 意図クラスタ表の「埋め合わせ候補」20件を追加し 50 件マスタ完成
- [ ] 各クエリの「担い URL」を紐付け、以下を検証：
  - 遠征系クエリ（配送・クーラーボックス・前泊）に担い URL があるか → なければ travelplan.md の新規2本（魚の配送ガイド・クーラーボックス選び）の優先度をデータで確定
  - C 群（月別記事15本）の統合判断：<strong>流入クエリが付いていない記事を統合候補として確定</strong>（report §3-3 の「実施前に GSC で流入確認」をここで消化）
  - D 群 3 本（wakayama-kii / oita-saganoseki / nagasaki-goto）の孤立解消リライトが拾えるクエリの確認

## Phase 4: 内部リンク健全性チェック（§H）— P1 リライトとセットで・30分

- [ ] §H の表（ensei-guide 追加済み・7ハブ）を埋める
- [ ] 判明済みの欠落を先に修正してから計測する：
  - [ ] サブガイド3本（ise-shima / hamanako / chiba-minamiboso）→ ensei-guide 逆リンク追加（travelplan.md 記載の小修正）
  - [ ] D 群 3 本の内部リンク 0 → 5本以上（travel-content-report P1）
- [ ] 「孤立記事数 3 → 0」を §I の KPI 行に反映

## Phase 5: 競合監査（§G）— クエリマスタ完成後・60分

- [ ] 監査対象 10 件は §E の「インプレッション多 × 順位 6〜15 位」ゾーンから選ぶ（勝ち筋のあるページに絞る）
- [ ] チェックリスト7項目のうち「読者タイプ別結論表」「時点明記」は travel-content-report §3-2 の横断施策と同一 → 監査結果をリライト仕様に直結させる

---

## 実行順序と依存関係

```
Phase 1（ベースライン）─┬→ Phase 3（クエリマスタ）→ Phase 5（競合監査）
                        └→ §I 四半期レビュー初回記録
Phase 2（GoThere計測）──→ 1ヶ月後に Phase 3 展開判断（残り81施設）
Phase 4（内部リンク）───→ 独立実行可。P1 リライトと同時が効率的
```

## 判断待ち・凍結中（着手しない）

- access-setouchi 新規作成：travel-hub.md の凍結対象。Phase 3 でクエリ需要を確認してから再評価
- 九州ハブ：同上（スポーク4本は既存）
- C 群 6 本の統合（リダイレクト）：Phase 3 の流入確認が前提。SEO 影響があるため単独判断しない
