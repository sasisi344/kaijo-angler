# column/travel「内部リンクゼロ」9記事 内部調査レポート

作成: 2026-09-03

## 調査の目的

`next-task.md`「column/travelクラスタ：残タスク」に記載されている「内部リンクゼロの9記事」について、①実際にリンクがゼロなのか、②内部リンク候補、③カテゴリ・導線構造に構造的な欠陥がないか、を検証する。

## 結論（サマリ）

- **「内部リンクゼロ」は不正確**。9記事はいずれも本文中に**発リンク**（施設記事・trivia記事・アクセスガイドへのリンク）を複数持っており、リンクが皆無なわけではない。
- 正しい問題は**被リンク（他記事からこれらへの導線）がゼロ**という点。全文検索の結果、9記事のうち **5記事は被リンクが本当にゼロ**、残り4記事はアクセスガイド記事から各1本ずつリンクされている（下表参照）。
- カテゴリ自体（`category: "釣り旅ガイド"`）は他の`column/travel/`記事と統一されており妥当。`/column/travel/`には`src/pages/column/travel/index.astro`という一覧ハブページが既に存在し、`id`のprefix正規表現で「エリア別モデルプラン／季節の釣り旅ガイド／エリア別アクセスガイド」に自動分類して全記事を掲載している。したがって「束ねる一覧ページが存在しない」という仮説は**誤り**——季節ネタを含め全記事が一覧からは到達可能。
- ただし一覧ページ以外の**文脈的な内部リンク（関連記事としての紹介）が薄い**のは事実。特にランキング記事・施設記事・テーマの近い他のtravel記事からの相互リンクが不足している。
- 調査中に無関係のバグを発見: `src/content/blog/column/travel/tabilmo-villa-stay-guide/index.mdx` の `category` フィールドが `"???????"` という文字化けした値になっている（本来は他記事と同様「釣り旅ガイド」等であるべき）。

## 被リンク状況（全文検索で確認）

| 記事 | 被リンクの有無 | リンク元 |
|---|---|---|
| march-yuasa-yura-soy-sauce-trip | ○ 1件 | `column/travel/access/access-kinki` |
| november-izu-autumn-leaves-trip | ○ 1件 | `column/travel/access/access-tokai` |
| september-shimonoseki-fugu-trip | ○ 2件 | `column/travel/access/access-kyushu`, `column/travel/access/setouchi-access-guide` |
| january-minamiise-onsen-trip | ○ 1件 | `column/travel/access/ise-shima-access-guide` |
| **october-scenic-facilities-family-trip** | **× ゼロ** | — |
| **september-silver-week-quiet-spots-guide** | **× ゼロ** | — |
| **august-summer-release-facilities** | **× ゼロ** | — |
| **august-obon-family-fishing-guide** | **× ゼロ** | — |
| **february-chiba-strawberry-picking-trip** | **× ゼロ** | — |

被リンクがある4記事も、リンク元は「該当エリアのアクセスガイド末尾の関連記事リスト」1本のみで、ランキング記事や施設記事からの導線はない。

## 記事ごとの内部リンク候補

### 1. october-scenic-facilities-family-trip（10月・景観3施設: 三重・広島・長崎）

紹介施設: `/fishing-facility/ugata-hamatsuri-center/`（三重・英虞湾）、`/fishing-facility/shimanami-kaido-fishing-park/`（広島・生口島）、`/fishing-facility/shinkamigoto-sea-fishing-pond/`（長崎・五島列島）

候補:
- `column/ranking/mie-wakayama/index.mdx` の「三重・和歌山への旅行を計画しているなら」CTA節（197行目付近、今回のセッションで新設済み）に一文追加し本記事へリンク（鵜方浜釣センターの景観訴求と直結）
- `column/ranking/chugoku-shikoku/index.mdx` の同種CTA節にしまなみ海道つり堀公園がらみで追加
- `column/ranking/kyushu-okinawa/index.mdx` の同種CTA節に新上五島町海上釣り堀がらみで追加
- 施設記事側（`ugata-hamatsuri-center`・`shimanami-kaido-fishing-park`・`shinkamigoto-sea-fishing-pond`）の「関連記事」またはコラムリンク欄に本記事への逆リンクを追加

### 2. september-silver-week-quiet-spots-guide（9月・シルバーウィーク計画術）

本記事は`may-holiday-tsuribori-reservation`（5月連休編）へ本文中でリンクしているが、**逆方向のリンクがない**。GW記事とSW記事は「姉妹編」の関係にあるため、相互リンクが自然。

候補:
- `column/travel/may-holiday-tsuribori-reservation/index.mdx` の「関連記事」セクションに本記事（シルバーウィーク編）への逆リンクを追加（最も費用対効果が高い1本）
- 地域を問わない汎用ガイドのため、`/column/travel/` 一覧ページ以外に地域記事からのリンクは不要と判断

### 3. august-summer-release-facilities（8月・夏休み大放流5施設: 大阪・高知・三重・兵庫・福岡）

紹介施設: `umizuri-port-tajiri`（大阪）、`kaijo-tsuribori-yukimaru`（高知）、`ugata-hamatsuri-center`（三重）、`kobe-hiraiso-sea-fishing-park`（兵庫）、`waita-sea-fishing-pier`（福岡）

候補:
- `column/ranking/kansai/index.mdx`（大阪・兵庫を含む）のCTA節に追加
- `column/ranking/mie-wakayama/index.mdx`（三重を含む）のCTA節に追加
- `column/ranking/chugoku-shikoku/index.mdx`（高知は四国）のCTA節に追加
- `column/ranking/kyushu-okinawa/index.mdx`（福岡を含む）のCTA節に追加
- 5施設の各記事から本記事への逆リンクも有力候補（特に`umizuri-port-tajiri`・`kobe-hiraiso-sea-fishing-park`は集客力のある施設）

### 4. august-obon-family-fishing-guide（8月・帰省×初めての家族釣行ガイド）

本文中で`april-family-friendly-facilities`・`access-kanto`・`access-kinki`にリンクしているが、いずれからも逆リンクなし。

候補:
- `column/travel/april-family-friendly-facilities/index.mdx` の関連記事欄に本記事を追加（テーマが最も近い姉妹記事）
- `column/travel/access/access-kanto/index.mdx`・`access/access-kinki/index.mdx` の関連記事欄に「帰省中の家族釣行ガイド」として追加

### 5. february-chiba-strawberry-picking-trip（2月・南房総いちご狩り×釣り）

本文中で`chiba-minamiboso-trip`（親記事）・`/fishing-facility/futomi-flower-isotsuri-center/`にリンクしているが、`chiba-minamiboso-trip`は「関連記事」セクション自体を持たない構成のため逆リンクがない。

候補:
- `column/travel/chiba-minamiboso-trip/index.mdx` の末尾（現状「関連記事」節なし）に季節派生記事として本記事へのリンクを追加。同記事は`february-chiba-strawberry-picking-trip`の親記事にあたるため、双方向リンクの意義が大きい
- `column/travel/access/chiba-minamiboso-access-guide/index.mdx` の関連記事欄に追加
- `column/ranking/kanto-tokai/index.mdx` のCTA節（千葉・神奈川エリアに言及済み）に追加

## その他の所見（横断チェック）

- `column/travel/`クラスタ全体をざっと見た限り、被リンクの薄さは今回の9記事に限らない可能性がある（例: `kanagawa-miura-trip`・`hamanako-unagi-trip`等、深追いはしていないが同様のパターンが疑われる）。9記事対応後、`column/travel/`配下の全記事について同様の被リンク検証を行う価値がある。
- カテゴリ体系そのものに欠陥は見つからなかったが、`tabilmo-villa-stay-guide`のcategory文字化けは独立したバグとして対応が必要。
