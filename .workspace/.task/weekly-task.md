# 海上アングラー：週間タスク

日曜日にアクセスデータの収集を実行し、データをもとに先週と比較してレポートを作成。改善点を作成して実行する。

- **優先実行タスク**: 本ファイル（Tier別）
- **効果測定・判定待ちタスク**: [[measurement-task]]（個別に対応しやすいよう分離）
- **GSC手動作業・詳細設計**: [[subtask]]
- 完了済み・過去の実行ログ: [`archive/task/weekly-task-2026-09-22_09-30.md`](../archive/task/weekly-task-2026-09-22_09-30.md)、[`archive/task/weekly-task-2026-09-13_09-21.md`](../archive/task/weekly-task-2026-09-13_09-21.md)、W25〜W28は各`weekly-PPDCA-task-*.md`

方針（2026-09-30）: ブログはアクセスがそれなりにあるため、**しばらく物販（アフィリエイト）強化を重視**する。サイト平均CTR4.6%は安定しており、タイトルの大幅改善は緊急性なし。

---

## Tier1（最優先）

- [ ] **タックルカードの魚種別再編成とid設計 — まずResearch（[[subtask]]項目6）**
  - 海上釣り堀で使われるタックルを魚種別に調査（メディア紹介＋Amazon・楽天・Yahoo!のユーザーレビュー）→ 魚種×カテゴリの推奨タックル表を作る
  - 続けてid命名規則・リンク統一（`tag=`付与漏れ解消）・`targetFish`整理・旧→新id一括置換
  - **第1弾完了（2026-09-30）**: [[tackle-research-phase1]]（既存カードの誤対応を発見: kue/ishidai/suzuki/bluefish。レビュー取得と第2弾が未了）
  - **方針決定（2026-09-30）**: 底物竿=シマノ ハードロッカー S83MH、`fish`パラメータは魚種ごとに別カード。管理は[[affiliate-tags/物販/README|affiliate-tags/物販]]（ルール・魚種別台帳）
  - 着手順: シマアジ・クエ・イシダイ・マダイ → 青物・クロダイ → ヒラメ・アオリイカ・根魚
  - 完了後に[[subtask]]項目3手順4（施設のメイン魚種に対応するセットの優先配置）へ。効果は[[measurement-task]] M1

- [ ] **施設別の竿長さ制限データ収集と`rod_length_limit`追加（[[subtask]]項目7）**: 施設記事に竿の長さ制限の記載がないことが判明。タックル出し分けの前提

## Tier2（手動作業・GSC）

- [ ] **GSCインデックス登録リクエスト**（[[subtask]]項目1: Tier1 49件は手動チェック済み。Tier2 23件・`ishida-fisherina`再実行が未着手）
- [ ] **更新済み記事のGSC再インデックス登録**（[[subtask]]項目4: A→B→Cの順。1日の上限に注意）
- [ ] **施設名クエリのCTR検証**（[[subtask]]項目5: A層11件から。検証結果は[[measurement-task]] M5）

## Tier3（任意・低優先）

- [ ] **`analyze-facility-ranking.mjs`のスクリプト誤検出フィルタ追加**: `east-japan`/`west-japan`など地域インデックスページが施設として誤検出される問題（次回の判読を楽にする改善）

---

## 効果測定タスク（→ [[measurement-task]] へ移動）

M1 `affiliate_id`別クリック／M2 ranking調整の効果／M3 W29悪化3施設の再判定／M4 旧URL統合の進捗／M5 施設名CTR0%の検証／M6 観光マネタイズgo/no-go（GoThere 2箇所目・travel展開判断を含む）／M7 VC成約数確認
