# 新旧URL統合のGSCインデックス登録・旧URL非表示（完了: 2026-10-06）

`subtask.md` 項目1（旧: 最重要）の全文アーカイブ。W37 `ページ.csv` の分析で見つかった「`/blog/{slug}/`（旧URL）→`/fishing-facility/{slug}/`（新URL）の統合が進まない」問題への手動対応。

## 作業内容・結果

| 日付 | 内容 |
|---|---|
| 2026-07-14 | 旧→新URLの301リダイレクト実装（コード側は正常と確認済み） |
| 2026-09-25 | W37データから新旧URL統合の遅れを検出（103施設のうち表示回数・クリックの64%が旧URL側に残存）。GSCインデックス登録リクエスト（Tier1 49件／Tier2 23件）をタスク化 |
| 2026-09-27 | エラーURLを調査。`sanriku-sea-fishing-park`は施設記事削除済みで404（リスト生成ミス・対応不要）。`ishida-fisherina`はサイト側に問題なし（リクエスト上限の可能性） |
| 2026-09-29 | W40追記: 旧URL側クリックが増えていた6施設（waita / kashikojima / mukai-pearl / wakasa-takahama / asamushi / shimanami-kaido）を最優先で登録 |
| 2026-10-06 | 6施設を含む旧URLをGSC「削除」ツール（このURLのみ）で一時非表示。新URLは Tier1・Tier2（`ishida-fisherina`含む）とも全件インデックス登録済みを確認 |

**持ち越し**: `ishida-fisherina`は登録済みだが「石田フィッシャリーナ」の施設名クエリで1ページ目に出ないため、記事強化を `subtask.md` 項目8・`next-task.md` に起票。旧→新URLのクリック移行はW41以降の週報で確認する。

**メモ（手順上の注意）**
- GSC「削除」ツールは必ず「このURLのみを削除」を使う。`/blog/` プレフィックス指定は、今も `/blog/` 配下にある intelligence 記事（23件）まで消えるため不可
- 削除ツールの効果は約6か月の一時的なもの。恒久対応は301リダイレクト

---

## 以下、移行前の原文（2026-10-06 時点）

## [ ] 1. 最重要: 新旧URL統合のためGSCインデックス登録リクエスト

**背景**: `/blog/{slug}/`（旧URL）→`/fishing-facility/{slug}/`（新URL）への301リダイレクトは2026-07-14実装済みでコード側は正常（true 301・サイトマップはクリーン・内部リンクも旧URL残存なし、を確認済み）。しかし2ヶ月以上経過した現在もW37データで新旧URLペアが存在する103施設のうち、表示回数・クリックともに**64%が旧URL側に残ったまま**（旧: 表示回数17,574/クリック844、新: 表示回数9,928/クリック470）。Googleのインデックス統合が自然には進んでいないため、手動でのインデックス登録リクエストで統合を促進する。

**やること**: GSCログイン時に、以下の新URLに対して「URL検査」→「インデックス登録をリクエスト」を実行。あわせて余力があれば対応する旧URLを「削除（一時的に非表示）」ツールで外すと統合が早まる可能性がある。

## [x] W40追記（2026-09-29）: 旧URL側クリックが逆に増えている6施設を最優先に（実行済み・改善済み）

W40データ（過去3ヶ月比較）で旧`/blog/`URL側のクリックが前期間より増えていた施設。下記新URLをTier1内でもさらに先頭で登録し、余力があれば対応する旧URLをGSC「削除」ツールで一時非表示にする。

| 新URL（登録対象） | 旧URL（削除ツール候補） | 旧URLクリック（前期間→W40） |
|---|---|---|
| https://kaijo-fishing.com/fishing-facility/waita-sea-fishing-pier/ index登録済み | https://kaijo-fishing.com/blog/waita-sea-fishing-pier/ | 6→29 |
| https://kaijo-fishing.com/fishing-facility/kashikojima-fishing-park-kaiyuen/ index登録済み | https://kaijo-fishing.com/blog/kashikojima-fishing-park-kaiyuen/ | 5→27 |
| https://kaijo-fishing.com/fishing-facility/mukai-pearl-marine/ index登録済み | https://kaijo-fishing.com/blog/mukai-pearl-marine/ | 6→21 |
| https://kaijo-fishing.com/fishing-facility/wakasa-takahama-sea-fishing-park/ index登録済み | https://kaijo-fishing.com/blog/wakasa-takahama-sea-fishing-park/ | 2→13 |
| https://kaijo-fishing.com/fishing-facility/asamushi-sea-fishing-park/ index登録済み | https://kaijo-fishing.com/blog/asamushi-sea-fishing-park/ | 1→12 |
| https://kaijo-fishing.com/fishing-facility/shimanami-kaido-fishing-park/ index登録済み | https://kaijo-fishing.com/blog/shimanami-kaido-fishing-park/ | 1→12 |

> 旧URLを非表示にして現在のURLをすべてindex登録確認済。

（`sea-fishing-park-mikata`は旧URL140→0クリックで新URLへ移行済みのため対象外。`ishida-fisherina`は2026-10-06にindex登録確認済み。施設名クエリの順位強化は項目8で対応）

## [x] エラーが出たURL（調査済み・2026-09-27／実行済み・改善済み）

- `https://kaijo-fishing.com/fishing-facility/sanriku-sea-fishing-park/`（インデックス登録リクエストに失敗する＝404）
> そもそも施設が存在しないので、誤って生成されたものをアップしたと判断。URLは登録されてない。
  → **原因判明・サイトの不具合ではない**。三陸海釣り公園の施設記事は`2026-06-22`のコミット`030e4a2`（"phase3"）で意図的に削除済み（`iwaki-sea-fishing-center`等と同時）。`src/config/blog-legacy-redirects.ts`側も`/blog/sanriku-sea-fishing-park/`→`/fishing-facility/`（一覧トップ）に正しく設定されており対応は不要。本Tier2リストは「旧URL表示回数」だけを機械的に基準に新URLを組み立てて生成したため、新URL側が実在するかを確認していなかったのが原因。**Tier2リストから除外し対応不要**（下記リストからも削除済み）
- `https://kaijo-fishing.com/fishing-facility/ishida-fisherina/`（インデックス未登録：URLのインデックス登録に問題があり失敗する）
> 2026-10-06index登録確認。ただ「石田フィッシャリーナ」のクエリでは1ページ目に表示されていない。競合を参照してより強化する必要がある。
  → 本番環境で確認した限りサイト側は完全に健全（HTTP 200・`<meta name="robots" content="index,follow">`・`<link rel="canonical">`が自URLを正しく自己参照・`robots.txt`全許可・`sitemap-0.xml`に含まれることを確認済み）。技術的な原因が見当たらないため、**GSCの「インデックス登録をリクエスト」1日あたりの上限に達していた可能性が高い**（Tier1で49件を連続実行した直後にTier2でエラーになったタイミングと整合）。→ 2026-10-06に再リクエストして登録確認済み（上記引用）。残課題は順位の強化で、項目8に起票



### Tier1（旧URL表示回数 100以上・49件、優先登録）

```
https://kaijo-fishing.com/fishing-facility/nanko-fishing-park/ index済
https://kaijo-fishing.com/fishing-facility/kaijo-tsuribori-at-sea/ index済
https://kaijo-fishing.com/fishing-facility/itoman-ikada-tsurigu-no-zousan/ index済
https://kaijo-fishing.com/fishing-facility/mukai-pearl-marine/ index済
https://kaijo-fishing.com/fishing-facility/family-tsuribori-tsutteminde/ index済
https://kaijo-fishing.com/fishing-facility/waita-sea-fishing-pier/ index済
https://kaijo-fishing.com/fishing-facility/shibushi-bay-daikoku-dolphin-land/ index
https://kaijo-fishing.com/fishing-facility/maizuru-shinkai-park/
https://kaijo-fishing.com/fishing-facility/shinmaiko-marine-park-fishing/
https://kaijo-fishing.com/fishing-facility/sendai-port-central-park-sea-square/
https://kaijo-fishing.com/fishing-facility/umizuri-port-tajiri/
https://kaijo-fishing.com/fishing-facility/kamoike-sea-fishing-park/
https://kaijo-fishing.com/fishing-facility/kaijo-tsuribori-kaiyu/
https://kaijo-fishing.com/fishing-facility/shinojima-tsuri-tengoku/
https://kaijo-fishing.com/fishing-facility/yuharai-pond/
https://kaijo-fishing.com/fishing-facility/asamushi-sea-fishing-park/
https://kaijo-fishing.com/fishing-facility/totto-park-koshima/
https://kaijo-fishing.com/fishing-facility/kashikojima-fishing-park-kaiyuen/
https://kaijo-fishing.com/fishing-facility/ugata-hamatsuri-center/
https://kaijo-fishing.com/fishing-facility/tsuri-ikada-fukaura/
https://kaijo-fishing.com/fishing-facility/seapark-nyu/
https://kaijo-fishing.com/fishing-facility/kariyawan-fishing-center/
https://kaijo-fishing.com/fishing-facility/fishing-bridge-akasaki/
https://kaijo-fishing.com/fishing-facility/matsunase-fishing-park/
https://kaijo-fishing.com/fishing-facility/yura-marine-fishing-pond/
https://kaijo-fishing.com/fishing-facility/sea-fishing-land/
https://kaijo-fishing.com/fishing-facility/takashima-tobishima-isotsuri-park/
https://kaijo-fishing.com/fishing-facility/fishing-park-sasukeya/
https://kaijo-fishing.com/fishing-facility/naoshima-fishing-park/
https://kaijo-fishing.com/fishing-facility/saltlake-hiketa-adoike/
https://kaijo-fishing.com/fishing-facility/hiruga-sea-fishing-pond/
https://kaijo-fishing.com/fishing-facility/tsuribori-kishu/
https://kaijo-fishing.com/fishing-facility/yura-sea-fishing-park/
https://kaijo-fishing.com/fishing-facility/tomakomai-port-sea-fishing-facility/
https://kaijo-fishing.com/fishing-facility/ikadatsuri-tokai/
https://kaijo-fishing.com/fishing-facility/kaijo-tsuribori-opa/
https://kaijo-fishing.com/fishing-facility/miyazu-city-marine-fishing-park/
https://kaijo-fishing.com/fishing-facility/tsuribori-maruyo/
https://kaijo-fishing.com/fishing-facility/obama-city-fishing-coop-raft/
https://kaijo-fishing.com/fishing-facility/hasamaura-fishing-center/
https://kaijo-fishing.com/fishing-facility/wakasa-takahama-sea-fishing-park/
https://kaijo-fishing.com/fishing-facility/naoetsu-port-3rd-east-breakwater/
https://kaijo-fishing.com/fishing-facility/kaijo-tsuribori-tairyomaru/
https://kaijo-fishing.com/fishing-facility/kaijo-tsuribori-maruya/
https://kaijo-fishing.com/fishing-facility/atami-port-sea-fishing-facility/
https://kaijo-fishing.com/fishing-facility/shodoshima-furusatomura-fishing-pier/
https://kaijo-fishing.com/fishing-facility/tsuruga-city-sea-fishing-park/
https://kaijo-fishing.com/fishing-facility/raft-fishing-takahashi/
https://kaijo-fishing.com/fishing-facility/shimanami-kaido-fishing-park/
https://kaijo-fishing.com/fishing-facility/fishing-park-hikari/
```
> [!forAI]
> 手動チェック完了。すべてインデックス登録済。

### Tier2（旧URL表示回数 30〜99・23件、余力があれば。当初24件中`sanriku-sea-fishing-park`は削除済み施設のため除外）

```
https://kaijo-fishing.com/fishing-facility/kaijo-tsuribori-yuasa/
https://kaijo-fishing.com/fishing-facility/saikakizaki-seapark/
https://kaijo-fishing.com/fishing-facility/ousatsu-sea-fishing-center/
https://kaijo-fishing.com/fishing-facility/anatani-aitai-fishing/
https://kaijo-fishing.com/fishing-facility/fukuoka-city-sea-fishing-park/
https://kaijo-fishing.com/fishing-facility/shinkamigoto-sea-fishing-pond/
https://kaijo-fishing.com/fishing-facility/marusui-kaisan/
https://kaijo-fishing.com/fishing-facility/jumbo-fishing-mura/
https://kaijo-fishing.com/fishing-facility/sakurajima-sea-fishing-park/
https://kaijo-fishing.com/fishing-facility/fishing-park-omishima/
https://kaijo-fishing.com/fishing-facility/susawan-fishing-park/
https://kaijo-fishing.com/fishing-facility/iwaki-sea-fishing-center/
https://kaijo-fishing.com/fishing-facility/ishida-fisherina/
https://kaijo-fishing.com/fishing-facility/amakusa-rakutsuri/
https://kaijo-fishing.com/fishing-facility/original-maker-sea-fishing-park/
https://kaijo-fishing.com/fishing-facility/futomi-flower-isotsuri-center/
https://kaijo-fishing.com/fishing-facility/himeji-city-fishing-center/
https://kaijo-fishing.com/fishing-facility/kaijo-tsuribori-taikoubou/
https://kaijo-fishing.com/fishing-facility/suihou-fishing-pond/
https://kaijo-fishing.com/fishing-facility/kaijo-tsuribori-misaki/
https://kaijo-fishing.com/fishing-facility/fishing-land-hyuga/
https://kaijo-fishing.com/fishing-facility/amakusa-leisure-land/
https://kaijo-fishing.com/fishing-facility/suma-sea-fishing-park/
```

残り30件（旧URL表示回数30未満）は優先度低のため今回は対象外。全103件のフルリストは`.data-set`ではなく本分析のセッションログ参照、または再度`ページ.csv`から再集計可能。

**判断根拠データ**: `.workspace/.task/access-data/weekly-report/2026/W37/ページ.csv`
