---
week: 2026-W30
source: 01_diary/weekly/2026/07-W30.md
---

# 週報PPDCAタスク（2026-W30）

## タスク

- [x] `/blog/{slug}` 配下の404 URLから対応する `/fishing-facility/.../{slug}` への301リダイレクトを設定する（まずはクリック上位5件を優先）
  - [x] `/blog/itoman-ikada-tsurigu-no-zousan` → `/fishing-facility/itoman-ikada-tsurigu-no-zousan`
  - [x] `/blog/himeji-city-fishing-center` → `/fishing-facility/himeji-city-fishing-center`
  - [x] `/blog/shibushi-bay-daikoku-dolphin-land`
  - [x] `/blog/yuharai-pond`
  - [x] `/blog/nanko-fishing-park`
  - 実装は `public/.htaccess`（`scripts/maintenance/generate-htaccess.mjs`経由で生成）に真の301として追加。副次的に `facility-redirects.ts` 側137件も本番URLとズレていた分を同期修正済み（commit 4219b90, 2026-07-20 デプロイ・実機確認済み）
- [ ] リダイレクト設定後、Search ConsoleのURL検査ツールで該当ページの再インデックスを申請する（手動対応が必要・未実施）

## 根拠

- 📊 GA4で「Error 404 — 海上アングラー」となった`/blog/`配下のランディングページが78件検出（合計セッション192、全体656の約29%）
- 📊 このうちGoogle検索結果として現在も表示・クリックされているものがGSCクリック578件・表示回数10,887件（サイト全体クリックの約61%）を占める
- 📊 旧`/blog/{slug}`から新`/fishing-facility/{...}/{slug}`へのURL構造変更後、301リダイレクトが未設定と推測される

## 参照

- 週報ノート: `01_diary/weekly/2026/07-W30.md`（🎣海上アングラー セクション「5. ⚠️ 異常値・技術アラート」「Act候補」）

---

### 5. ⚠️ 異常値・技術アラート
- **404エラーLP（最重要）**: GA4で「Error 404 — 海上アングラー」となった`/blog/`配下のランディングページが**78件**検出。合計セッション192（全体656の約29%）、うちGoogle検索結果として現在も表示・クリックされているものが**クリック578／表示回数10,887（サイト全体クリックの約61%）**を占める。上位5件（セッション降順）:
  - `/blog/fukuoka-city-sea-fishing-park`（sessions 10, GSC clicks 1 / impr 40）
  - `/blog/himeji-city-fishing-center`（sessions 10, GSC clicks 58 / impr 588）※正しいURLは`/fishing-facility/himeji-city-fishing-center`
  - `/blog/maizuru-shinkai-park`（sessions 9, GSC clicks 19 / impr 343）※正しいURLは`/fishing-facility/maizuru-shinkai-park`
  - `/blog/kashikojima-fishing-park-kaiyuen`（sessions 9, GSC clicks 22 / impr 258）※正しいURLは`/fishing-facility/kashikojima-fishing-park-kaiyuen`
  - `/blog/itoman-ikada-tsurigu-no-zousan`（sessions 8, GSC clicks 76 / impr 505）※正しいURLは`/fishing-facility/itoman-ikada-tsurigu-no-zousan`
  - 旧`/blog/{slug}`から新`/fishing-facility/{...}/{slug}`へのURL構造変更後、301リダイレクトが未設定と推測される。
- 順位・CTRの急落（クエリ.csv・3か月間の2期間比較）:
  - 「関西 海上 釣り堀 ランキング」: 順位4.4→6.7・CTR19.2%→7.2%（表示回数495→386、クリック95→28）と大幅悪化。人気クエリだけに機会損失が大きい
  - 「直島 釣り」: 順位11.7→39.3（27.6ランク後退）
  - 「佐世保 釣り堀」: 順位11.8→28.2
  - 「仮屋湾遊漁センター」: 順位19.7→42.6
  - 「和歌山マリーナシティ 海釣り公園」: 順位22.9→35.0
- その他の異常値: 姫路市立遊漁センター関連クエリ（姫路 遊漁センター 現在／姫路遊漁センター／姫路遊漁センター 閉園）が軒並み新規発生・急上昇。休園報道による指名検索の急増と推測され、記事を最新情報に更新すれば取り込める需要

### Do（実施施策）
- 

### Check（前週からの改善・要因仮説）
- 数値変化: セッション+4.0%・UU+5.7%・エンゲージメント率+2.6ptと軒並みプラス
- 推定要因（ページ/クエリのどれに起因？）: GSCクリック上位5ページが全て`/blog/`配下の404URLと一致しており、検索流入の過半数がサイト内で404を踏んでいる状態。セッション自体は増加傾向にあるが、CVや回遊が発生せず機会損失が大きい

### Act候補（データ由来ドラフト・このサイト単独の全候補）
- [x] 【最優先・技術】`/blog/{slug}`→`/fishing-facility/.../{slug}`への301リダイレクトを設定（まずはクリック上位5件: itoman-ikada-tsurigu-no-zousan / himeji-city-fishing-center / shibushi-bay-daikoku-dolphin-land / yuharai-pond / nanko-fishing-park）
- [ ] リダイレクト設定後、Search ConsoleのURL検査ツールで該当ページの再インデックスをリクエスト
- [ ] 404化している78件の一覧を洗い出し、内部リンク・サイトマップ・SNS過去投稿に残る旧`/blog/`リンクを新URLへ置換
- [ ] 「姫路市立遊漁センター」記事を休園関連の最新情報に更新（指名検索が急増中、需要を取り込む）
- [ ] 「関西 海上 釣り堀 ランキング」記事の順位・CTR急落（4.4→6.7位、19.2%→7.2%）の原因調査とリライト
