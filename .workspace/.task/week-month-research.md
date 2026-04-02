# 海上アングラーの週間・月間マガジン作成（プラン）

リサーチで週間と月間の情報を収集し、そのデータをもとにインタラクティブな「海上釣り堀ヒートマップ」と「デジタルマガジン」を作成・公開します。

### 1.1 リサーチ戦略（キーワードベース）
- <strong>週刊（Weekly）</strong>:
  - <strong>対象データ</strong>: 最新のSNS投稿、釣りブログ。
  - <strong>抽出手法</strong>: <strong>「対象魚名（マダイ、ブリ、シマアジ等）」のKW頻出度</strong>をエリア別に集計。
  - <strong>メリット</strong>: 施設名が明記されていない投稿からも「そのエリアの活性度」を推定可能。洋上の釣果（遊漁船等）と区別するため、釣り堀周辺の位置情報を持つデータを優先。
- <strong>月刊（Monthly）</strong>:
  - <strong>対象データ</strong>: 週刊データの蓄積 + 各施設公式サイトの月間集計。
  - <strong>抽出手法</strong>: 週刊のまとめに加え、<strong>「施設名」を含む詳細な釣果情報</strong>を収集。施設ごとの月間MVP魚種などを特定。

### 1.2 試験運用フェーズ (2026年2月・3月期)
- 過去のデータに基づき、スクレイピングスクリプトの効率化と解析精度の検証を行う。
- この期間のデータを用いて、ヒートマップの「アツさ」の閾値をチューニングする。

### 1.3 データ保存
- `.workspace/data/intel/YYYY-MM-DD.json` に集計結果を蓄積。

## 2. ヒートマップ実現の技術構成

### ライブラリ選定
- <strong>地図基盤</strong>: <strong>Leaflet</strong>（既存の `package.json` に導入済み）。
- <strong>ヒートマップ表示</strong>: <strong>Leaflet.heat</strong>。
  - 施設ごとの座標（各記事の `latitude/longitude` メタデータ）に「活性度」を重み付けして描画。
- <strong>表示管理</strong>: 特定のページ（週間・月間マガジン）でのみ使用するコンポーネントとして実装。

### インストール手順
```bash
# Leaflet.heat の追加が必要
npm install leaflet.heat
```

- [x] <strong>Step 1</strong>: 既存の施設記事から座標データを一括抽出するスクリプトの作成
- [x] <strong>Step 2</strong>: サンプルデータによる Leaflet ヒートマップのプロトタイプ作成（コンポーネント化）
- [x] <strong>Step 3</strong>: <strong>2026年2月・3月期データによるスクリプトの効率化とデータ抽出ロードマップ作成</strong>
### 追加ルール & 改善 (2026-04-01)
- <strong>サムネイルの共通化</strong>: `intelligence` カテゴリのサムネイルは、都度生成せず `src/assets/images/intelligence-default.png` を共通利用する。
- <strong>ヒートマップの相対評価</strong>: 抽出KWの最大カウントを「赤（1.0）」とする相対スケールを採用。これにより、絶対数が少なくても盛り上がり箇所が視覚的に強調される。
- <strong>強調タグの変換</strong>: 生産段階の記事では、`**太字**` を `<strong>太字</strong>` に変換して出力する。
- <strong>テンプレート更新</strong>: 上記ルールに基づき、テンプレートおよび既存記事（2026-03分）を更新済み。
- [x] <strong>Step 4</strong>: 週刊・月間マガジンの「記事テンプレート」作成（データセット定義含む）
- [x] <strong>Step 5</strong>: <strong>本番自動化パイプライン（インテリジェンス・オートメーション）の構築</strong>
  - [x] 収集スクリプト (`collect.js`) の作成
  - [x] AI解析・構造化プロンプトの固定化 (`analyze.js`)
  - [x] 自動MDX生成エンジン (`generate.js`) の実装
  - [x] GitHub Actions による定期実行ワークフローの設定
- [x] <strong>Step 6</strong>: マガジン記事ページへのヒートマップ埋め込みと公開

---

## 3. 運用・オートメーション計画 (2026-04-01 追記)

情報の「鮮度」と「信頼性」を維持するため、以下のスケジュールでパイプラインを完全自動実行します。

### 実行スケジュール (Scheduled Tasks)
- <strong>週刊マガジン (Weekly)</strong>:
    - <strong>タイミング</strong>: <strong>毎週木曜日 22:00 (JST)</strong>
    - <strong>内容</strong>: 直近7日間のデータ収集・解析・投稿生成。
- <strong>月刊マガジン (Monthly)</strong>:
    - <strong>タイミング</strong>: <strong>毎月末日 23:59 (JST)</strong>
    - <strong>内容</strong>: 当月1ヶ月分の集計データに基づくトレンドレポート生成。

### オートメーション・アーキテクチャ
| フェーズ | 役割 | 実行環境 |
| :--- | :--- | :--- |
| <strong>収集 (Collect)</strong> | 指定KWによるSNS/ブログのデータ抽出 | Node.js (scripts/) |
| <strong>解析 (Analyze)</strong> | Gemini API によるデータの正規化・JSON化 | Node.js + Gemini |
| <strong>生成 (Generate)</strong> | JSONから `strong` タグ付きMDXの生成 | Node.js (Template-based) |
| <strong>公開 (Deploy)</strong> | Git Commit & Push / Build | GitHub Actions |

## 検討事項
- **リサーチ頻度**: 週次で全地域を自動スクレイピングし、AIに「アツい地域」を特定させる。
- **更新日**: 毎週木曜日（週間）と月末（月間）の更新を基本とする。
