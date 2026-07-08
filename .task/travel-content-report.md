# travel カテゴリ既存記事 解析レポート

作成日: 2026-07-08
対象: `src/content/blog/column/travel/` 全35本（travel直下28本＋access配下7本）
関連: [travelplan.md](./travelplan.md) / `.workspace/.task/travel-category/`（テンプレート・調査レポート）

---

## 1. 記事インベントリ：4グループに分類

### A群：アクセスハブ・ガイド（7本）— 品質基準クラス

| 記事 | 行数 | 状態 |
| --- | --- | --- |
| access/ensei-guide（遠征釣行ガイド・全国版） | 232 | 2026-07 新規。全ハブの親 |
| access/access-kanto / access-kinki / access-tokai | 168〜200 | テンプレ準拠。ensei-guide と双方向リンク済み |
| access/ise-shima-access-guide / hamanako-access-guide / chiba-minamiboso-access-guide | 188〜210 | テンプレ準拠。ensei-guide への逆リンク未設置 |

構成（先に結論表→手段別→FAQ→チェックリスト→情報の確認先）が統一され、E-E-A-T 上もっとも強いグループ。<strong>サイト内の品質ベンチマーク</strong>。

### B群：地域モデルプラン「完全ガイド」シリーズ（10本）— リライト済み・良好

2026-03 に統一リライト済み（travel-hub.md の「10本リライト完了」に該当）。110〜157行、施設×2＋アクセスハブ＋攻略記事への双方向リンクを持つ。

awaji-family-trip / chiba-minamiboso-trip / fukui-mikata-goko / hamanako-unagi-trip / ise-shima-model-plan / kagawa-shodoshima-trip / kanagawa-miura-trip / kumamoto-amakusa-trip / shimanami-cycling-fishing / shirahama-onsen-trip

弱点：<strong>宿泊の具体導線（前泊視点・宿選び基準）が弱い</strong>。「1泊2日」を謳いながら宿セクションが手薄で、旅行アフィリの着地点がない。

### C群：月別・季節記事（15本）— 薄い・要統合検討

【1月】〜【12月】の季節ネタ記事。<strong>60〜107行と薄く</strong>、H2は6〜9個あるが各セクションが2〜4行。施設リンクは1〜2本のみで、リンクの主先は trivia（雑学）記事。

april-family-friendly / august-obon / august-summer-release / december-kagoshima-ibusuki / february-chiba-strawberry / january-minamiise-onsen / july-naruto-whirlpool / june-all-weather / march-yuasa-yura / may-holiday-reservation / may-toshijima-toba / november-izu-autumn / october-scenic / september-shimonoseki-fugu / september-silver-week

典型例（march-yuasa-yura、65行）：施設紹介が「場所・特徴」の箇条書き2行のみ、料金・所要時間・予約情報なし。<strong>検索意図（行き方・費用・予約）に答えておらず、専門性が最も弱い層</strong>。

例外：may-holiday-tsuribori-reservation（107行）は「予約・混雑」という独自テーマでB群5本＋ハブ3本へリンクしており、ハブ的価値がある。

### D群：2026-06-03 追加の遠征系3本 — 内部リンクゼロの孤立記事【最重要発見】

| 記事 | 行数 | 問題 |
| --- | --- | --- |
| wakayama-kii-trip（串本〜那智） | 110 | <strong>内部リンク 0本</strong>。アクセス表はあるが ensei-guide/access-kinki と未連携 |
| oita-saganoseki-trip(関サバ関アジ) | 115 | <strong>内部リンク 0本</strong> |
| nagasaki-goto-trip（五島列島） | 115 | <strong>内部リンク 0本</strong> |

3本とも「遠征×高級魚×観光」というまさに今回のタスクと同じテーマなのに、施設ページ・ハブ・攻略のどこにもリンクせず、TackleCard（物販）だけ置かれている。<strong>今回の遠征ガイド戦略に組み込めば最小コストで最大の効果が出る資産</strong>。

---

## 2. タスクとの類似性マッピング：新規 or リライトの判定

| travelplan.md のタスク | 類似する既存記事 | 判定 |
| --- | --- | --- |
| 紀伊半島 遠征特化記事（和歌山・三重の前泊深堀り） | <strong>wakayama-kii-trip</strong>（串本〜那智・被り大）、shirahama-onsen-trip、march-yuasa-yura、january-minamiise-onsen、ise-shima-model-plan | <strong>新規作成は中止 → wakayama-kii-trip のリライトに変更</strong>。前泊・宿導線・ensei-guide 連携を追加して「南紀遠征完全版」に格上げ |
| 釣った魚の配送 完全ガイド | なし（ensei-guide 内に要約があるのみ） | <strong>新規</strong>。ensei-guide・全モデルプランからリンクを集約 |
| 遠征用クーラーボックス選び（物販） | なし（D群3本に TackleCard 実績あり） | <strong>新規</strong>。配送ガイドとセット設計 |
| access-setouchi（瀬戸内ハブ） | スポーク既存4本：shimanami-cycling-fishing、kagawa-shodoshima-trip、july-naruto-whirlpool、september-shimonoseki-fugu | <strong>ハブは新規</strong>（調査レポート2本流用）＋<strong>既存4本はスポーク化リライト</strong>（ハブへの双方向リンク追加） |
| 九州アクセスハブ（凍結中） | スポーク既存4本：kumamoto-amakusa、oita-saganoseki、nagasaki-goto、december-kagoshima-ibusuki | 凍結再評価の材料：受け皿記事が既に4本あるため「薄エリア」前提は崩れつつある。ただし優先度は瀬戸内の後 |
| 宿泊導線の追加 | B群10本すべて＋D群3本 | <strong>リライト（横断施策）</strong>。「前泊」セクションの型を作って一括適用 |
| モデルプランへの遠征ガイドリンク | B群のうち遠征距離のある8本＋D群3本 | <strong>リライト（横断施策）</strong> |

結論：<strong>純粋な新規は「魚の配送ガイド」「クーラーボックス物販」「access-setouchi」の3本のみ</strong>。それ以外はすべて既存記事のリライトで達成できる。

---

## 3. 専門性・権威性（E-E-A-T）を高める改善案

### 3-1. 即効：D群3本の孤立解消（工数最小・効果大）

- ensei-guide・該当アクセスハブ・施設ページ・県別まとめへの内部リンクを追加（各記事5本以上・双方向）
- 「関連ページ」「情報の確認先」H2 を A群と同じ型で追加
- wakayama-kii-trip のアクセス表を ensei-guide の数値と整合させる

### 3-2. 権威性の統一装備（全記事横断）

A群だけが持っている E-E-A-T 装備を B・C・D群へ展開する：

1. <strong>「情報の確認先」セクション</strong>（一次情報への導線）を全記事末尾に
2. <strong>時点の明記</strong>：料金・ダイヤ・営業情報に「2026年○月時点」を付記し、frontmatter に updatedDate を追加（現状 A群と ensei-guide 以外ほぼ無し）
3. <strong>調査レポートの出典活用</strong>：`.workspace/.task/travel-category/research-file/` の6本（淡路島・白浜/しまなみ・伊勢志摩/浜名湖・南房総/三浦・天草・小豆島）は出典URL付き。対応する記事のリライト時に数値の根拠として転記する
4. <strong>読者タイプ別の結論表</strong>（テンプレ H2-1）を B群・D群の冒頭に追加。「誰に向くか」を最初に断言するのが公式サイトとの最大の差別化点

### 3-3. C群（月別記事15本）の整理 — 統合・リライト・維持を仕分け

薄い記事の乱立は「専門性の希釈」になっている。方針：

- <strong>維持・強化（3本）</strong>：may-holiday-reservation（予約ハブ化）、june-all-weather（全天候という独自切り口）、september-silver-week（予約ハブと連動）
- <strong>近隣モデルプランへ統合候補（6本）</strong>：march-yuasa-yura→shirahama/access-kinki 圏、january-minamiise→ise-shima-model-plan、february-chiba→chiba-minamiboso-trip、may-toshijima→ise-shima-model-plan、july-naruto→（将来の access-setouchi 圏）、december-kagoshima→九州圏。統合まではしなくても、<strong>親記事への導線を明確にしてカニバリを防ぐ</strong>
- <strong>リライトで独立価値を持たせる候補（6本）</strong>：april-family / august-obon / august-summer / october-scenic / november-izu / september-shimonoseki。施設の料金・所要時間・予約情報の実データを入れて100→130行以上へ

※統合（リダイレクト・削除）は SEO 影響があるため、実施前に Search Console で各記事の流入を確認してから判断する。

### 3-4. 宿泊導線の「型」を作る（旅行アフィリの核）

ensei-guide の「前泊のすすめ」を型として、B・D群に<strong>共通の前泊セクション</strong>を追加する：

- 宿選び基準（施設まで車30分以内・素泊まり可・早朝出発対応）＋エリアの具体的な宿泊圏
- GoThere コンポーネント実装後は同セクションにアフィリ枠を差し込む（travelplan.md の GoThere Phase 1 と接続）
- D群3本は「釣果を宿で調理してもらう」ネタを既に持っており、宿泊導線と最も相性が良い

---

## 4. 優先順位付きアクションリスト

| 優先 | アクション | 種別 | 対象 |
| --- | --- | --- | --- |
| P1 | D群3本の内部リンク・関連ページ・情報の確認先を追加 | リライト | wakayama-kii / oita-saganoseki / nagasaki-goto |
| P1 | wakayama-kii-trip を「南紀遠征完全版」へ格上げ（前泊・宿導線・結論表・時点明記） | リライト | 紀伊半島タスクを充当 |
| P2 | 魚の配送 完全ガイド | <strong>新規</strong> | ensei-guide から分離・深堀り |
| P2 | 遠征用クーラーボックス選び | <strong>新規</strong> | 配送ガイドとセット |
| P2 | B群10本に前泊セクションの型を展開＋遠征ガイドへのリンク | リライト | 横断施策 |
| P3 | access-setouchi 新規＋瀬戸内スポーク4本のリライト | 新規＋リライト | 調査レポート2本流用 |
| P3 | サブアクセスガイド3本（伊勢志摩・浜名湖・南房総）に ensei-guide 逆リンク | リライト | 小修正 |
| P4 | C群の仕分け実行（維持3・統合検討6・強化6） | リライト | 流入データ確認後 |
| P4 | 九州ハブの凍結再評価（スポーク4本が揃った時点で判断） | 判断 | — |

---

## 5. 数値サマリー

- 全35本中、テンプレ品質（A群水準）は <strong>8本（23%）</strong>
- 内部リンクゼロの孤立記事 <strong>3本</strong>（すべて遠征テーマ＝今回の戦略と直結）
- 宿泊導線（前泊セクション）を持つ記事 <strong>1本のみ</strong>（ensei-guide）
- updatedDate を持つ記事は A群＋ensei-guide のみ → E-E-A-T の鮮度シグナル不足
- 新規作成が必要なタスクは <strong>3本だけ</strong>。残りはリライトで達成可能
