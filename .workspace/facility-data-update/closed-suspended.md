# 対象外: 閉店・休業施設（7件）

`status: closed|suspended`の施設。診断・分析の対象外。新規パラメータの追加は不要だが、**現在の状態が合っているか（再開していないか）**だけ定期的に確認する。

- [x] 篠島釣り天国 — `shinojima-tsuri-tengoku`（`status: closed`）　src/content/blog/fishing-facility/center-japan/aichi/shinojima-tsuri-tengoku/index.mdx　GSC表示 603（新URL 298・旧URL 305）>令和7年12月25日に閉業
- [x] 海釣り公園みかた — `sea-fishing-park-mikata`（`status: closed`）　src/content/blog/fishing-facility/center-japan/fukui/sea-fishing-park-mikata/index.mdx　GSC表示 1011（新URL 1011・旧URL 0）>公式HPはそのままだが閉業している。
- [x] 勇払マリーナ海上釣り堀 — `yuharai-pond`（`status: suspended`）　src/content/blog/fishing-facility/east-japan/hokkaido/yuharai-pond/index.mdx　GSC表示 829（新URL 579・旧URL 250）
- [x] 姫路市立遊漁センター — `himeji-city-fishing-center`（`status: closed`）　src/content/blog/fishing-facility/west-japan/hyogo/himeji-city-fishing-center/index.mdx　GSC表示 1555（新URL 1092・旧URL 463）
- [x] 家島海上釣り堀 海恵（かいえい） — `sea-fishing-pond-kaikei`（`status: suspended`）　src/content/blog/fishing-facility/west-japan/hyogo/sea-fishing-pond-kaikei/index.mdx　GSC表示 47（新URL 47・旧URL 0）>29年の歴史を経て閉業
- [x] 小豆島ふるさと村 釣り桟橋 — `shodoshima-furusatomura-fishing-pier`（`status: closed`）　src/content/blog/fishing-facility/west-japan/kagawa/shodoshima-furusatomura-fishing-pier/index.mdx　GSC表示 101（新URL 6・旧URL 95）>閉業確認
- [x] 宮津市海洋つり場 — `miyazu-city-marine-fishing-park`（`status: suspended`）　src/content/blog/fishing-facility/west-japan/kyoto/miyazu-city-marine-fishing-park/index.mdx　GSC表示 239（新URL 100・旧URL 139）>管理者の高齢化、施設維持の困難で2026年の令和8年度から当面の間休業。行政が運営しているので再開する可能性は採算性などビジネス面で希望が出たらの話になる。

---

## 状態確認の結果（2026-10-06・Web検索と公式ページ）

| 施設 | 記事の`status` | 確認できた現状 | 判定・対応 |
|---|---|---|---|
| 篠島釣り天国 | closed | ◎中日新聞：**2025年12月25日をもって閉業**（漁協運営・来場者減少・えさ代高騰）。1996年開業 | 一致。再開なし |
| 海釣り公園みかた | closed | 公式 `umitsurikouen.com`：**2023年11月28日付で「休業と営業終了」を告知**。検索結果には「2025年度は休業」の記載も（問い合わせ窓口も休止）。再開の情報なし | **運営者確認（2026-10-06）: 公式HPはそのまま残っているが閉業している** → `closed`のまま（記事も「2025年より閉業」で一致） |
| 勇払マリーナ海上釣り堀 | suspended | △2022年に北海道初として期間限定オープン。現在は営業休止（再開予定の情報なし） | 一致。運営者確認（2026-10-06）: 再開はなく終了のまま。**再開の見込みなし → `suspended`→`closed`に変更済み**（記事のタイトル・description・本文も「閉業」に更新） |
| 姫路市立遊漁センター | closed | △**老朽化を理由に令和5年末をもって休園**。施設の在り方を検討中で復旧の目途は立っていない。複数サイトで「休園中」 | **運営者確認（2026-10-06）: 公式HPがなくなっているため閉業と判断** → `closed`のまま（記事は「2024年3月31日で休園」「最新の扱いは公表を確認」と書いており、閉業の扱いに合わせた書き換えは任意） |
| 家島海上釣り堀 海恵 | suspended | △29年営業して閉店。オーナーは全国の釣り堀を研究した上で再開すると表明 | **運営者確認（2026-10-06）: 約29年の歴史を経て閉業** → **`suspended`→`closed`に変更済み**。記事のタイトル・description・本文・営業状況、west-japan indexとranking/kansaiの「休止中」を「閉業」に更新済み |
| 小豆島ふるさと村 釣り桟橋 | closed | ◎小豆島ふるさと村の公式お知らせ：「**海釣り桟橋の老朽化により危険個所があり、安全が確保されないことから廃止**」 | 一致（closed）。運営者確認（2026-10-06）: 閉業を確認 |
| 宮津市海洋つり場 | suspended | ◎宮津市公式（更新2026-03-27）：**令和8年度から当面休業**。指定管理者の高齢化・人員不足で船舶免許保有者の確保が困難。再開時期は未定、休止中に運営のあり方・老朽化対策を整理 | 一致（suspended）。運営者確認（2026-10-06）: 管理者の高齢化・施設維持の困難により令和8年度から当面休業。運営は行政のため、再開は採算性などビジネス面の見通しが立った場合に限られる |

### 追加で`suspended`になった施設
- **フィッシングブリッジ赤崎**（`fishing-bridge-akasaki`）: 令和6年能登半島地震により被災・立入禁止。運営者が臨時休業中を確認（2026-10-06）し、`status: suspended`を付与済み。本ファイルの対象に加える（再開の確認は能登町ふるさと振興課 0768-62-8526）

### 個別対応
- [x] **海釣り公園みかた**: `closed`か`suspended`かを確認（営業終了なら`closed`のまま、2025年度以降の休業扱いなら`suspended`）>閉業を確認
- [x] **姫路市立遊漁センター**: 姫路市に復旧の見込み（廃止か休園継続か）を確認し、`status`を決める>閉業しているかは不明だが公式HPがなくなっているので閉業
- [x] **勇払マリーナ海上釣り堀・家島海恵**: 再開の有無を電話で確認（年1回程度）>終了のまま
