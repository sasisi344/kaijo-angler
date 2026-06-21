# GSC分析後の改善タスク（フェーズB「テンプレ感対策」の実務化）

## 背景・調査結果サマリ

`content-expansion-roadmap.md` フェーズB「本文のテンプレ感対策」を実行するにあたり、GSC週次/3ヶ月データと施設記事のフロントマターを突き合わせて検証した。

- **本文の文字数・魚種数・内部リンク数・公開からの経過日数・Google評価値 ― いずれも順位・表示回数とほぼ無相関**（相関係数すべて±0.2以内、3ヶ月データ n=118 で再確認）。テンプレ的な記事の「均一なリライト」は順位向上にはROIが低い。
- **クエリ別データ（3ヶ月）では、クリックの33%が「閉鎖・休業・再開・現在」等の営業状況系クエリに集中**。`sea-fishing-park-mikata`（休業）や`himeji-city-fishing-center`（閉園情報）のように、公式サイトが答えていない情報ギャップを埋めた記事は平均2〜6位という高順位を獲得している。
- **Web検索で競合確認した結果、順位が弱い施設（fukuoka-city-sea-fishing-park、wakayama-marinacity-fishing-park、matsunase-fishing-park）は公式サイト・じゃらん・いこーよ・トリップアドバイザー等の大手ポータルが検索上位を独占**しており、単独記事のリライトで追い抜くのは構造的に困難。
- 結論：**順位を決めているのは「テンプレ感」ではなく「競合構造（公式サイト・大手ポータルの強さ）」と「情報ギャップ（公式が答えていない鮮度情報）の有無」**。全120記事の均一リライトではなく、トリアージして「勝てる案件」に絞るべき。

診断スクリプト：`scripts/analyze-facility-ranking.mjs`（GSCエクスポートCSVを引数で渡せる。フォーマット自動判定）

---

## TODO（作業順）

### フェーズ1：仕組みの定着（基盤）

- [x] GSCページ単位データと施設フロントマターを突き合わせる診断スクリプトを作成（`scripts/analyze-facility-ranking.mjs`）
- [x] 3ヶ月分のページ別データ（`access-data/2026-0621-3month-page.csv`）で検証し、テンプレ特徴の無相関を確認
- [x] クエリ別データ（`access-data/2026-0621-3monthquery.csv`）で需要の質（営業状況系クエリの優位性）を確認
- [ ] 月次でGSCエクスポート（ページ単位）を取得し`scripts/analyze-facility-ranking.mjs`を再実行する運用を固定する

### フェーズ2：競合構造のトリアージ（「需要はあるが順位/CTRが弱い」候補の判定）

`scripts/analyze-facility-ranking.mjs`で抽出した「impressions≥10かつ position>15またはCTR0%」の47件について、施設名でWeb検索し、公式サイト・じゃらん／いこーよ／トリップアドバイザー等の大手ポータルが上位を占めているか確認する。

**判定済み（公式・大手ポータルが優勢 → 単独記事で勝つのは困難、優先度を下げる）**
- [x] fukuoka-city-sea-fishing-park（impr=268, pos=23.6）
- [x] wakayama-marinacity-fishing-park（impr=264, pos=21.5）
- [x] matsunase-fishing-park（impr=224, pos=20.0）

**判定済み（休業・閉鎖中につき構造的にCTRが低い → 現状の`FacilityStatusAlert`運用で十分、追加対応不要）**
- [x] sea-fishing-pond-kaikei（impr=333, pos=17.2, status: suspended）
- [x] shinojima-tsuri-tengoku（impr=275, pos=17.4, status: closed）

**未判定（要Web検索、表示回数の多い順 ＝ ROIが高い順）**
- [ ] araibenten-sea-fishing-park（impr=221, pos=22.4）
- [ ] kariyawan-fishing-center（impr=218, pos=17.4）
- [ ] fishing-park-toi（impr=213, pos=16.3）
- [ ] obama-city-fishing-coop-raft（impr=179, pos=15.6）
- [ ] hiruga-sea-fishing-pond（impr=176, pos=17.8）
- [ ] suihou-fishing-pond（impr=171, pos=18.0）
- [ ] akaguri-sea-fishing-park（impr=156, pos=21.9）
- [ ] suma-sea-fishing-park（impr=139, pos=19.6）
- [ ] fishing-park-omishima（impr=137, pos=23.1）
- [ ] kaijo-tsuribori-misaki（impr=131, pos=23.5）※`next-task.md`で薄いページ調査中の案件と同一
- [ ] yura-sea-fishing-park（impr=129, pos=21.5）
- [ ] kobe-hiraiso-sea-fishing-park（impr=124, pos=28.3）
- [ ] ikadatsuri-tokai（impr=112, pos=17.3）
- [ ] amakusa-leisure-land（impr=112, pos=20.4）
- [ ] saikakizaki-seapark（impr=106, pos=19.0）
- [ ] kashikojima-fishing-park-kaiyuen（impr=105, pos=15.9）
- [ ] jumbo-fishing-mura（impr=102, pos=20.9）
- [ ] saltlake-hiketa-adoike（impr=102, pos=34.7）

**未判定（残り29件、impressions<90 ＝ 優先度低・時間があれば対応）**
- [ ] shimonoseki-fishing-park / kaijo-tsuribori-maruya / naize-fishing-center / ishida-fisherina / kaijo-tsuribori-benya / fishing-land-hyuga / wakasa-takahama-sea-fishing-park / tsuribori-kishu / fishing-rainbow / jogashima-js-fishing / marusui-kaisan / miyazu-city-marine-fishing-park / awaji-janohire-fishing-park / kaijo-tsuribori-taikoubou / fishing-park-triton / kaijo-tsuribori-fukujumaru / oarai-sea-fishing-center / umingu-oshima / tsuribori-shotokumaru / kaijo-tsuribori-monkey / kaijo-tsuribori-wako / naoetsu-port-3rd-east-breakwater / hamabe-tosen-kaijo-tsuribori / motobu-fishing-ikada-umiseikatsu / kamae-sea-fishing-tsunchaoh / koshima-sea-fishing-pond

### フェーズ3：「勝てる」案件への差別化コンテンツ追加

フェーズ2で「公式サイトが弱い／情報ギャップがある」と判定された施設のみ対象。

- [ ] 各施設の最新の営業状況（休業・閉鎖・再開・リニューアル等）を確認し、本文・`status`フィールドに反映
- [ ] 公式サイトが答えていないロングテール意図（「子供は何歳から」「○○は釣れるか」「雨天時は」等）をFAQとして追加
- [ ] 上記以外の施設（公式・大手ポータルが優勢と判定された案件）は本文リライトを見送り、リソースを他施設に再配分

### フェーズ4：CTR改善（タイトル・メタディスクリプション）

テンプレ感（本文）よりクリック率に直結する要素。

- [ ] CTR=0%の施設（shimonoseki-fishing-park, kaijo-tsuribori-maruya, naize-fishing-center, ishida-fisherina, marusui-kaisan, kaijo-tsuribori-fukujumaru, oarai-sea-fishing-center, umingu-oshima, kaijo-tsuribori-monkey, kaijo-tsuribori-wako, naoetsu-port-3rd-east-breakwater, kamae-sea-fishing-tsunchaoh, koshima-sea-fishing-pond）のtitle・description見直し
- [ ] 「料金」系クエリ（表示回数12.1%だがクリック5.9%）の該当ページで、title/descriptionに具体的な金額を明記
- [ ] 「ランキング/比較」系クエリ（表示回数11.2%だがクリック8.6%）の該当ページで、具体的な施設数・順位表現を明記

### フェーズ5：モニタリング運用

- [ ] 月次で`scripts/analyze-facility-ranking.mjs`を最新GSCエクスポートで再実行し、フェーズ2のトリアージリストを更新
- [ ] フェーズ3で対応した施設の順位・CTRが改善したか、次回エクスポートで効果検証
- [ ] 「勝てない」と判定した施設も、競合（公式サイト等）の状況が変わっていないか半年ごとに再確認

---

## 参照

- 診断スクリプト：`scripts/analyze-facility-ranking.mjs`
- クエリ分析：`scripts/analyze-query-mix.mjs`
- 地域密度分析：`scripts/analyze-region-density.mjs`
- 元データ：`.workspace/.task/access-data/2026-0621-3month-page.csv`、`2026-0621-3monthquery.csv`
- 関連タスク：`.workspace/.task/content-expansion-roadmap.md`（フェーズB）、`.workspace/.task/next-task.md`（misaki/yunoko/fugu個別調査）
