# 再構築の指示書 — GSC「クロール済み - インデックス未登録」30本（RB）

作成: 2026-11-17（CC）。元にしたもの: ユーザーの判断メモ [rewrite.md](rewrite.md)（URL ごとのリライト・統合・排除の判断）。
状態: **§2-1 と RB-32 は完了（2026-11-17、main に未反映・公開の承認待ち）。§2-2〜2-4 は波1（RB-29・42・31・22・20）のアウトラインと指示書 `.workspace/codex/orders/2026-11-17-RB-W1.md` を作成済み→ **2026-11-17 に CC のサブエージェントが執筆し、CC が検収。サブ記事12本と五目のタナを消して301済み（main に未反映・公開の承認待ち）**。報告書は `.workspace/codex/reports/2026-11-17-RB-{29,42,31,22,20}.md`、消したサブ記事の本文は `.workspace/_inbox/rb-archive/`。残る課題: ひるがの施設記事に 12/21 からの休園が入っていない（WR-1 の反映待ち）、クエの `tsuribori-maruyo`（クエマス）・`tsuribori-kishu`（タマクエ）は対象魚の表記を確かめる、ランキング記事の「釣堂辨屋」の誤字**。決まったもの（§2）と決まっていないもの（§3）に分けた（2026-11-17）。各タスクは、CC がリサーチとアウトラインを作ってから、Codex（または CC のサブエージェント）への指示書 `.workspace/codex/orders/` に切り出す。この文書は Codex に直接渡さない。

## 0. ゴール

- Google がインデックスしない理由（薄い・古い・重複・サイトの主題とずれる）を、ページごとに解消する
- 1つの問いに1つのページで答える形にそろえ、魚種別攻略の分散（1魚種5ページ）を減らす
- 消すページはすべて 301 で受け皿に送り、評価とリンクを引き継ぐ（404 にしない）

## 1. 全タスクに共通の決まり

| 項目 | 決まり |
|---|---|
| タイトルの月 | 「【11月】」などの月を外す。季語（春・真夏・秋）があれば、それで時期を表す。年の「最新」も付けない（CLAUDE.md） |
| URL | slug は変えない（月の入った slug もそのまま）。変えると301と再評価が要るため。タイトルとカテゴリの見え方だけ直す |
| 排除・統合で消すページ | 消す前に、受け皿のページへ必要な事実を移す → ページを消す → `src/config/blog-legacy-redirects.ts` に 301 を足し `node scripts/maintenance/generate-htaccess.mjs` で `.htaccess` を作り直す → サイト内の内部リンクを受け皿に張り替える。**ここは CC が行う**（Codex の常設部の禁止事項に当たるため） |
| 魚種の事実 | `kaijo-fish-knowledge` を通し、`.data-set/fish-knowledge/{slug}.md` を最優先にする。ユーザーのメモ（rewrite.md）にある見解は【一次】として使ってよい。ナレッジにないものは、先に `.data-set` に足してから書く |
| 施設の数値 | 施設の記事が正本（2026-11-15 ユーザー決定）。まとめ・コラムに書くときは施設の記事に合わせる |
| 商品 | アウトラインの段階で CC が決める。いま登録のない商品は、H-46（施設カードの再編）と一緒に候補を出してユーザーが選ぶ |
| 公開 | 記事の変更は公開（deploy）が走る。main に入れる前にユーザーの承認を取る（ルート CLAUDE.md） |

## 2. 決まったタスク（着手できる）

ユーザーが rewrite.md と 2026-11-17 の回答で決めたもの。301 の先など実装の細部は CC の案で、異論があれば着手前に直す。列の「待ち」は §3 の未決定に掛かる部分（そこだけ後回しにして、ほかは進めてよい）。

列: 種別（R＝リライト／M＝統合して消す／D＝排除して301／N＝新規）。表示は GSC 2026-10 の月間の表示回数。規模は S（30分以内）／M（1〜2時間）／L（それ以上、または記事5本以上）。

### 2-1. 排除して301（CC がそのまま行う。本文は書かない）— **完了 2026-11-17**

実施: 4ページを削除、`blog-legacy-redirects.ts` に301（旧 `/blog/…` の転送先も付け替えて2段にしない）、`.htaccess` を再生成、内部リンクを張り替え（ブリ index・advanced・strategy、4月の青物、遠征ガイド、近畿・東海・浜名湖・九州のアクセス、GW の予約）、`travel-regions.ts`・`facilities-geo.json`・`travel-area-links.json` から外した。九州のアクセスの「奄美にも海上釣り堀がある」（FAQ・表・チェックリスト）は、奄美の施設がなくなったので五島だけにした。ブリ theory の本文は RB-25 で使うため `.workspace/_inbox/rb-archive/buri-theory.mdx` に残した（index にない要点: 連鎖ヒットの仕組み・側線・フィーディング・フレンジー・聴覚・向流・季節の水温）

| ID | 種別 | 対象（表示） | 301 の先（CC の案） | 先に移すもの | 規模 |
|---|---|---|---|---|---|
| RB-10 ✅ | D | ブリ theory `tactics/fish-strategy/buri/theory/`（50） | ブリの index | 「捕食スイッチ」の要点のうち index にないもの。クリックが月5あるので、移す内容を CC が確かめる。RB-25 の統合で index を書き直すときに、ここで移した内容も入れる | S |
| RB-11 ✅ | D | 淡路島の旅 `column/travel/awaji-family-trip/`（8） | 関西のランキング `column/ranking/kansai/` | なし（関西・近畿のまとめに淡路島が入っている） | S |
| RB-12 ✅ | D | 浜名湖の旅 `column/travel/hamanako-unagi-trip/`（26） | 東海のアクセス `column/travel/access/access-tokai/`。伊豆の新記事（RB-52）ができたらそちらへ付け替える | なし。内部リンクが4本ある | S |
| RB-14 ✅ | D | 奄美シーランド `fishing-facility/amami-sealand`（0） | 九州・沖縄のランキング `column/ranking/kyushu-okinawa/` | なし。船釣りの案内で、サイトの主題（海上釣り堀・釣り施設）と合わない。内部リンク1本を外す | S |

### 2-2. 魚種別攻略の統合と料理記事化（`tactics/fish-strategy/`）

1記事に統合する魚種: ブリ・ヒラマサ・クエ・メジナ・イシダイ・スズキ・クロダイ（2026-11-17 決定。CLAUDE.md に反映済み）。統合した魚種は料理をその中の1節にし、行数の上限を外す。カワハギは記事を持たない。

| ID | 種別 | 魚種 | やること | 消すページ（→ 301 は index へ） | 規模 | 待ち |
|---|---|---|---|---|---|---|
| RB-29 ✅ | R | マダイ gourmet（**212**） | 料理・下処理の記事に特化し、タイトルから「攻略」と「津本式」を外す。血抜き・神経締め・熟成は白身をおいしくする方法として残すが、**施設が無料か有料でやってくれることが多く、自分でやらなくてよい**と書く。表示が最も多いので、波3の最初に行う | — | M | — |
| RB-31 ✅ | M | ヒラマサ（index 122行。**advanced 178・クリック14**、theory 11・intermediate 9・strategy 2） | 1記事に統合する。ブリとの違いを軸にした今の index に、advanced の内容（表示が最も多い）を中心に入れる | advanced・intermediate・theory・strategy | L | — |
| RB-22 ✅ | M | イシダイ（advanced 105） | 1記事に統合。タイトルを「イシダイ・イシガキダイ」の2種にする。天然では人気でニッチな対象魚、という位置づけ | advanced・intermediate・theory・strategy | M | — |
| RB-20 ✅ | M | クエ（index 105行。gourmet 86・theory 19） | index を「クエの攻略の決定版」にする。中心は**どこで釣れるか**（対象魚にクエがいる施設）。養殖の事実（近畿大学・水産試験場の技術で、天然で4〜5年のサイズに約2年で届く）と、底物のタナ（網の目をオモリが通るので、底を「コン」で取れない → スタッフに聞く）を入れる。料理は短い節にまとめる | gourmet・theory・intermediate・advanced | L | — |
| RB-25 | M | ブリ（index 107行。theory 50・intermediate 15・strategy 13） | 1記事に統合する。strategy（放流直後の「黄金の15分」とドラグ）、advanced、RB-10 で移した theory の要点を index に入れる。ヒラマサとは別の記事のまま（青物としてまとめない） | strategy・advanced（theory は RB-10、intermediate は RB-48 の受け皿へ） | L | intermediate の 301 の先（U-04） |
| RB-21 | M | メジナ（theory 14） | 1記事に統合。人気の対象魚ではないので、施設の数と釣り方の要点に絞る | theory・intermediate・advanced・gourmet | M | — |
| RB-23 | M | スズキ（gourmet 3・theory 31） | 1記事に統合。呼び名は「スズキ」にそろえる（海上釣り堀ではスズキが多い）。シーバスのルアーには踏み込まず、海上釣り堀でのスズキの釣り方だけ。theory の「吸い込み」は「習性」の節に入れる | gourmet・theory・intermediate・advanced | M | — |
| RB-24 | M | クロダイ（advanced 4） | 呼び名を「クロダイ」にそろえた1記事にする（チヌは本文で別名として1回出す）。slug の `chinu` は変えない | advanced・intermediate・theory・gourmet | M | — |
| RB-32 ✅ | D | カワハギ（index と サブ4本。theory 43・advanced 68・intermediate 11・gourmet 8） | 魚種別攻略の記事を持たない。5ページを消し、`/tactics/fish-strategy/`（魚種別攻略の一覧）へ 301。2026-11-16 に足した `/blog/kawahagi-strategy/` の 301 も同じ先に付け替える（転送を2段にしない）。**完了 2026-11-17**: 5ページ削除、旧 `/blog/kawahagi…` 7件の先も一覧へ、魚種一覧の表とエサ取りの記事（5月のダンゴ）からリンクを外した。施設の `kawahagi-strategy-set` のカード8枚は H-46 で外す。施設の frontmatter の対象魚にカワハギを書くのは続けてよい。エサ取りとしての話は、ほかの魚種の記事で触れる程度にする | index・advanced・intermediate・theory・gourmet | M | — |
| RB-26 | M | イサキ（intermediate 3） | intermediate を index に統合する。シラサエビの撒き餌は、多くの施設でルール違反になり、コストも高い。**ルールの範囲でできる誘い**とサビキでの数釣りに書き換えて入れる | intermediate | M | — |
| RB-27 | R | フグ（index） | トラフグが釣れる施設の紹介を中心にする。タイトルの「冬」は外す（旬は11〜2月で鍋に合うが、養殖なので一年中釣れる）。gourmet と統合するかは、両方の量を見て CC が決める（RB-28 と一緒に） | gourmet（統合する場合） | M | gourmet との統合（U-02） |
| RB-28 | R | フグ gourmet | 料理の記事に特化する（タイトルも「攻略」を外す）。釣れても、**施設で捌いてもらえるかを事前に確かめる**ことを最初に書く。フグは免許のある人しか捌けず、スーパーでは断られることが多い | — | M | index との統合（U-02） |
| RB-30 | R | イサキ gourmet（3） | 料理の記事に特化し、タイトルから「攻略」を外す。イサキが釣れる施設への内部リンクは、地域ごとに1つずつに絞る | — | M | — |

### 2-3. コラムのリライト・統合（`column/trivia/`・`tactics/gear/`）

| ID | 種別 | 対象（表示） | やること | 消すページ | 規模 | 待ち |
|---|---|---|---|---|---|---|
| RB-42 ✅ | M | タナ `may-gomoku-tana-strategy`（2）→ `tana-basics`（**188**） | タナの記事は `tana-basics` に1本化する。ユーザーの見解を中心に書き直す: ①イケスの深さは施設ごとに違い、魚の習性の常識が通じない → 初めてならスタッフに聞く ②タナの最深は網の設計の限界。針が網に掛かると外れず、太い糸は切れない。無理に切ると網を壊し、賠償になることもある → 指示より深く出さないのは絶対 ③「◯m」と言われても長さがわからないので、道糸は1mごとに色やマーカーの付いたものがよい（商品の候補） | 五目のタナ → `tana-basics` へ 301 | M | 道糸の商品（U-06） |
| RB-40 | M | 春の水温 `march-sankan-shion-temperature-guide`（1）＋ 春の放流エサ `march-spring-stocking-feeding-frenzy-bait-guide`（0） | 春（3〜5月。中心は3・4月、5月は補足）の月ごとの水温の傾向と、それに合わせた攻略にする。放流エサの記事のペレットの節は RB-41 へ移す（2026-11-17 ユーザー決定） | 春の放流エサ → 春の水温へ 301 | M | — |
| RB-41 | R | 放流タイム `stocking-time-strategy`（6） | 放流の仕組みに加えて、**開始時に放流してくれる施設**を紹介する記事にする（半日・午後のプランは放流から外れて釣りにくいことがある）。春の放流エサの記事（RB-40）からペレットの節を移す。理由づけは「**放流したての魚は養殖で、もともと食べていたエサ（ペレット。四角い小粒で、小さなダンゴに近い）に反応する**」（ユーザーの見解、【一次】）。商品は定番1つ＋少し外した1つ（CC が候補を出す）。RB-40 から内部リンクを受ける | — | M | エサの商品（U-06） |
| RB-45 | R | 大会 `november-tournament-mindset-guide`（0） | タイトルから「11月」を外す。**どこで・どんな大会があるか**の実例を入れて内容を厚くする（大会の事実は CC が一次情報で調べてアウトラインに載せる）。勝つための考え方は、実例に結びつけて書く | — | M | — |
| RB-46 | R | 仕掛け作り `september-original-rig-craft-guide`（0） | タイトルから「9月」を外す。海上釣り堀の仕掛けの基本（糸の太さ・針の号数・オモリとウキは要るか）に答える。作り方は動画の引用と図解。レンタルなら作らなくてよい（切れても1セットまで料金に含まれることが多い。施設のルールは事前に確認）。そのうえで、**自作の強みは「初めての施設でも対象魚がわかれば合わせられる」「切れてもすぐ結び直せる」**ことを主張にする | — | M | — |
| RB-47 | R | ミャク釣りのタックル `tactics/gear/myakuzuri-gear`（11。本文29行） | 内容を厚くする。ウキ釣り（タナを固定して待てる・沈む瞬間が楽しい・初心者向け）との違いと、ミャク釣りの強み（タナを自在に動かせる・エサを動かして誘える・活性が低いときに強い）を中心にする。タックルは2つ: イケスが5m以上なら竿＋リール、それより浅いなら3m前後の大物用の延べ竿（マダイ中心なら引き抜けて楽しい。青物のいるイケスには向かない）。**`tactics/fish-strategy/myakuzuri-extreme-guide`（穂先の材質の記事）とタイトル・内容が重ならないか**を先に確かめ、役割を分ける | — | M | 竿の商品（U-06） |

### 2-4. 旅行・アクセス・施設、新規

| ID | 種別 | 対象（表示） | やること | 規模 | 待ち |
|---|---|---|---|---|---|
| RB-50 | R | 近畿のアクセス `column/travel/access/access-kinki`（1） | タイトルから直す（どこから・どこへが分からない）。伊丹・関西空港と、新幹線の停まる駅（新大阪など）から、淡路島・和歌山・大阪の各エリアへ行く方法のまとめにする。「飛行機で行くなら」「電車で行くなら」の2択に絞る | M | — |
| RB-51 | R | 城ヶ島 J's Fishing `fishing-facility/jogashima-js-fishing`（4） | アクセスが車とバスだけなので、最寄りの JR 駅（電車）までの行き方を先に出し、そこから車とバスに分ける。関東旅行のついで、会社や団体の慰労会・旅行での使い方も入れる | M | — |
| RB-52 | N | 伊豆エリアの旅行ガイド（新規） | 海上釣り堀まるや（`fishing-facility/center-japan/shizuoka/kaijo-tsuribori-maruya`）への行き方を中心にした伊豆の旅行ガイド。中部・関東から行きやすいことと、施設の充実度・対象魚の多さが理由。既存の `column/travel/november-izu-autumn-leaves-trip`（西伊豆・土肥）と役割を分ける。RB-12 の 301 の先にする | L | — |
| RB-53 | N＋D | アジ・サバ・カマス `tactics/fish-strategy/aji-asaba-kamasu`（index と サブ4本。advanced 19 など） | 海上釣り堀で狙える施設が限られるので、この魚種別攻略は消す。代わりに「海上釣り堀＋サビキ釣り＋攻略」の新記事を作り、アジ・サバの数釣りはそこで書く。新記事を公開してから、5ページすべてを新記事へ 301 | L | サビキの商品（U-06） |

## 3. 決まっていないこと（決めてから着手）

| ID | 決めること | 掛かるタスク | 選択肢 | CC の推薦 | 決める人 |
|---|---|---|---|---|---|
| U-01 | しまなみの旅を消したあとの受け皿 | RB-13 | ①瀬戸内のアクセス `setouchi-access-guide` に数行で入れる ②中国・四国の旅の統合記事を新しく作り、プランの1つにする（rewrite.md の案。いまその記事はない） | ①。②は新規記事になるので、作るなら別に起票する | ユーザー |
| U-02 | フグの index と gourmet を統合するか | RB-27・RB-28 | ①統合して「フグ釣り＋料理」の1記事 ②2本のまま（釣れる施設／料理と捌き方） | 両方の量を見て決める（rewrite.md「全体のボリュームから」）。アウトラインのときに CC が案を出す | CC が案 → ユーザー |
| U-03 | 真夏の氷の記事を、クーラーの選び方に統合するか、別の記事として残すか | RB-43 | ①`tactics/gear/cooler-box-selection` に統合して 301 ②夏の保冷（高い保冷力のクーラーと氷を長持ちさせる工夫）に絞って残し、選び方へリンク | ②（rewrite.md で「ベターか」とした案）。遠征の運び方の `column/travel/cooler-box-guide`（244）とあわせ、3本の分担をアウトラインで決める | ユーザー |
| U-04 | 死にエサの「誘い」をどの記事にまとめるか | RB-48（と RB-25 のブリ intermediate の 301 の先） | ①`column/trivia/august-dead-bait-technique`（表示109）に統合 ②海上釣り堀のテクニックの記事を新しく作る | ①。いちばん表示があり、テーマが同じ | ユーザー |
| U-05 | サングラスで勧める商品の価格帯 | RB-44 | ①一生ものの1本 ②安くて十分な1本 ③両方（定番＋少し外した1つの型） | ③。H-46 で偏光サングラスを施設カードに入れるかと一緒に決める | ユーザー |
| U-06 | 未登録の商品の候補 | RB-41（ペレット系のエサ）・RB-42（1mごとに印のある道糸）・RB-47（ミャク釣りの竿＋リール、3m前後の延べ竿）・RB-53（サビキのセット）・RB-43（高保冷のクーラー） | CC が定番1つ＋少し外した1つを出し、ユーザーが選ぶ | H-46（施設カード）の商品選びと同じ回にまとめる | CC が候補 → ユーザー |
| U-07 | 残る魚種別攻略の構成 | マダイ・カンパチ・シマアジ・イサキ・フグ（いまは index＋サブ4本） | ①今回の7魚種と同じく1記事に統合 ②いまの形のまま（名指しのページだけ直す） | 今回の統合の結果（4週後の GSC）を見てから決める。それまでは② | ユーザー |

- U-01: 中国四国の旅行統合記事を新規作成し、うちの提案プランのひとつといて「しまなみ海道＋サイクリング（ツーリング）＋魚釣り」の提案で。
- U-02: フグindexにgurumetを統合。フグ釣りができる施設が少なくフグを釣って料理につなげるのは捌く問題があるので、勘違いしないようにする。だから「海上釣り堀でフグは釣れる？」のアプローチで。
- U-03: クーラーボックスの選び方で統合する。夏が暑いのはわかりきっているので、保冷力の高さを優先したボックスの選定と、季節（気温）ごとに保冷剤をどれだけ必要なのか？に焦点を合わせて。
- U-04: ミャク釣りのテクニック記事に統合するのが妥当かな。
- U-05: コスパ優先なら3,000~8,000円程度、私が使っているのがColemanの2980円くらいのもの（Amazonで購入）。魚釣りと偏光サングラスで有名ならTALEX。公式[https://talex.co.jp/fishing/?utm_source=google&utm_medium=cpc&utm_campaign=talex_osaka_showroom_search&utm_term=&utm_content=827372304140&device=c&gad_source=1&gad_campaignid=24336127081&gbraid=0AAAAAC_2Isdc_k6BYOyeN80hgjKA2Kmgn&gclid=Cj0KCQiA8OrXBhDEARIsAECtlx5fPtBwBRnSPQOqNyitUSVUia1OEK4EFO3T3IZVO9D-0jdFLhsO8g8aAiHtEALw_wcB]ではフィッシング用でアピールしている。オーダーメイドもあるが直営店に行く必要がある。既製品ならダイワがオーバーグラス（メガネの上にかけるもの）があって2万円弱。
- U-06: Amazon商品; 海上釣堀専用　人気冷凍エサ　練餌海道 皇帝KAISER カイザー[https://www.amazon.co.jp/%E3%83%8E%E3%83%BC%E3%83%96%E3%83%A9%E3%83%B3%E3%83%89%E5%93%81-%E6%B5%B7%E4%B8%8A%E9%87%A3%E5%A0%80%E5%B0%82%E7%94%A8-%E4%BA%BA%E6%B0%97%E5%86%B7%E5%87%8D%E3%82%A8%E3%82%B5-%E7%B7%B4%E9%A4%8C%E6%B5%B7%E9%81%93-%E7%9A%87%E5%B8%9DKAISER-%E3%82%AB%E3%82%A4%E3%82%B6%E3%83%BC/dp/B0CJ9CF3KF?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&crid=2W4DA0SJRJFHQ&dib=eyJ2IjoiMSJ9.7mGX_in_UX8T2yygiyFLFi3N4yPPakk-iYNhsXbCgS2-KQsFSvDsGYRE4UTLIGbA6bjSUDgXExr8Yijj20m_4r6o7Ch09gjNOqwEpgIZeRwQShMt8ahaQIrh0JD7QOdNoj6Kw1pEBW9Qt2OEQLTmSCtrA-A12OCRBpeZkeKfRL-k76UdpQRsuIE6jFzgN1M3__satHwiZy6uWRI9Fb-zkSklWsUCd-oI6yHVGejksNfzdjya_flcGnCid0wAL4Mkc_zr3MrTzvdMZdm3Ys0GpXjmYpZgxlXQTI0csjbg2CU.QG6ngvaFIYMZ3ArQ4U3uLoKRxVE0CRA-2NwjJ_4FTZ0&dib_tag=se&keywords=%E6%B5%B7%E4%B8%8A%E9%87%A3%E3%82%8A%E5%A0%80+%E3%82%A8%E3%82%B5&qid=1794847430&sprefix=%E6%B5%B7%E4%B8%8A%E9%87%A3%E3%82%8A%E5%A0%80+%E3%82%A8%E3%82%B5%2Caps%2C244&sr=8-3-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1&linkCode=ll2&tag=344kaijyo-22&linkId=61fd045cf8cff32ae30295b2784da243&ref_=as_li_ss_tl]
    ラインマーカー: シーガー(Seaguar) PEライン シーガー PE X8 エックスエイト (マルチ/ピッチカラーチェンジャー/万鮪)シリーズ マーキング付 超高強力ポリエチレン繊維 IZANAS使用 8本組 ルアー ジギング キャスティング 船[https://www.amazon.co.jp/%E3%82%AF%E3%83%AC%E3%83%8F-KUREHA-PE%E3%83%A9%E3%82%A4%E3%83%B3-%E3%82%B7%E3%83%BC%E3%82%AC%E3%83%BC-200m/dp/B07W566KW8?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&crid=18WDJI6IM23BA&dib=eyJ2IjoiMSJ9.sbesCbwtom_egnqM-FbWwhXdYizbhNCheQvGYbapH0UC7EH6T8eeF8FS6d3jRxhskqKxBIMLA3haD_synJTdXarlmm-oCmQXVdE-WP9DW59R1Q2HVfs3zq4pbjc3kkJMZvvzL6FbnDieMh1NRPeFPQ1ogMc3W1dnGMEutlW4JpWi19OcaTqESAnNJ-rVnzM4hy65oL7US5qwBXQ2CGlhFwuP70nKRsdf0gPPzOIfRqCMh9AuHOjwgVDYGEBYyIfeaOefc6wZCAWhr-EzWltO5NoRu17toFBCIPkQk4qKpJ4.nZBuxzTgEBMrwaywoTySeD4V6ZxyzfmUPSWSOK0BMD8&dib_tag=se&keywords=%E9%81%93%E7%B3%B8%2B%E3%83%A9%E3%82%A4%E3%83%B3%E3%83%9E%E3%83%BC%E3%82%AB%E3%83%BC&qid=1794847512&sprefix=%E9%81%93%E7%B3%B8%2B%E3%83%A9%E3%82%A4%E3%83%B3%E3%83%9E%E3%83%BC%E3%82%AB%E3%83%BC%2Caps%2C236&sr=8-2&th=1&linkCode=ll2&tag=344kaijyo-22&linkId=8f2e62985111828133c187fae7c09490&ref_=as_li_ss_tl];10mごとに色が変わるタイプで、1m単位でも細かくピッチマーカーがある。
    - 3m程度の竿: 海上釣掘-脈釣TCS サイズ：300/330/360 KTMTCS 両軸リール専用海上釣堀ロッド[https://www.amazon.co.jp/%E5%A4%A7%E9%98%AA%E6%BC%81%E5%85%B7-OGK-%E6%B5%B7%E4%B8%8A%E9%87%A3%E5%A0%80-%E8%84%88%E9%87%A3TCS-%E4%B8%A1%E8%BB%B8%E3%83%AA%E3%83%BC%E3%83%AB%E5%B0%82%E7%94%A8%E6%B5%B7%E4%B8%8A%E9%87%A3%E5%A0%80%E3%83%AD%E3%83%83%E3%83%89-KTMTCS33/dp/B08C4M3H53?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&crid=46PPV806WB40&dib=eyJ2IjoiMSJ9.dED61XX9ZhSNPXxqnBYoVTcC0xslQxT8LADuUukuVlERpB32TmynVFC0lJ6qc0we1TOawQJ-T9BQecftt1rQQjORFK0AMLuyEFVcmQDoutToJaha03eIy-2QpyuMz7ePoUnsAM3Pr-n6d4t9uLVpTi-xyuKc0kJ7NTV5JZdl2ucaM3d5Jse1FC76W4TbbgxsXvMt8ULG3r-f4Pw-gQ12lmStJli9TS09Hv_a5r7EiRgfrmyTkE-7bJh_ratY2gwMXh_tWKhHkCYUsDTlZFNFLhS9kO9r3Pih92H0aXz8ea4.2B9YfIzJRuYPtzxraXD9NFWoIJVYsQMMn7DHH4-uc_c&dib_tag=se&keywords=%E6%B5%B7%E4%B8%8A%E9%87%A3%E3%82%8A%E5%A0%80%2B%E8%BF%B0%E3%81%B9%E7%AB%BF&qid=1794847699&sprefix=%E6%B5%B7%E4%B8%8A%E9%87%A3%E3%82%8A%E5%A0%80%2B%E8%BF%B0%E3%81%B9%E7%AB%BF%2Caps%2C222&sr=8-6&th=1&linkCode=ll2&tag=344kaijyo-22&linkId=cf1e2b1316f2d9bc56f2d8b98037fc4d&ref_=as_li_ss_tl]3m程度で両軸リール対応、かつ耐久性も価格も手頃なので導入でも問題ない。
    - 竿とリールのセット: 海上釣堀入門 完全釣りセット 糸巻済み（海上釣堀竿 海上釣堀リール 海上釣堀仕掛け 海上釣堀初心者）[https://www.amazon.co.jp/%E5%AE%8C%E5%85%A8%E9%87%A3%E3%82%8A%E3%82%BB%E3%83%83%E3%83%88-%E7%B3%B8%E5%B7%BB%E6%B8%88%E3%81%BF%EF%BC%88%E6%B5%B7%E4%B8%8A%E9%87%A3%E5%A0%80%E7%AB%BF-%E6%B5%B7%E4%B8%8A%E9%87%A3%E5%A0%80%E3%83%AA%E3%83%BC%E3%83%AB-%E6%B5%B7%E4%B8%8A%E9%87%A3%E5%A0%80%E5%88%9D%E5%BF%83%E8%80%85%EF%BC%89-%E6%B5%B7%E4%B8%8A%E9%87%A3%E5%A0%80%E5%85%A5%E9%96%80%E3%82%BB%E3%83%83%E3%83%88/dp/B0BNCZH5XM?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&crid=1WGBAW1Z65WBT&dib=eyJ2IjoiMSJ9.9R_WYl90SaZgKasTSLTpCG6jcrhAUUmFEArlcaMVdtwdCqak5RHfe5SCV3v0RtBx3Hj4SJNCNmMEPwenJ0MbFaPXqe3c1xK2uFGbtqTkf-RrNU4sgSJ7GEqxWf1RKpZBelYMORxOlLzZMxPXRkvxDRmDufYUn65XucbLFoVXTYp79d-Hde_a7WUUHk9mVf-1xb7iY23ke8amFstG0QuDuqgBtpPcXAjVQWqVgjaBE-1YY_mKybMXJj3QkNVA0cVKdmb5QMKlt55LQT7ulU2954O9Sw3ICHjRuhb90z3rSF8.DsdbTJDZDYmkx5UdmyU0hYk0BqgcCuCHA-7IqmCmt6Y&dib_tag=se&keywords=%E6%B5%B7%E4%B8%8A%E9%87%A3%E3%82%8A%E5%A0%80%2B%E7%AB%BF%2B%E3%82%BB%E3%83%83%E3%83%88&qid=1794847959&sprefix=%E6%B5%B7%E4%B8%8A%E9%87%A3%E3%82%8A%E5%A0%80%2B%E7%AB%BF%E3%82%BB%E3%83%83%E3%83%88%2Caps%2C284&sr=8-3&th=1&linkCode=ll2&tag=344kaijyo-22&linkId=903ddd4687f54500a74e5cee1412602d&ref_=as_li_ss_tl]フィッシュグリップ・プライヤーに仕掛けもついているので、あとはエサを買うだけ。
    - ミャク釣り向け延べ竿: シマノ(SHIMANO) フリースタイルロッド 23 ボーダレス GL (ガイドレス仕様) 各種 のべ竿[https://www.amazon.co.jp/%E3%82%B7%E3%83%9E%E3%83%8E-SHIMANO-%E3%83%95%E3%83%AA%E3%83%BC%E3%82%B9%E3%82%BF%E3%82%A4%E3%83%AB%E3%83%AD%E3%83%83%E3%83%89-W495-T-%E3%82%AC%E3%82%A4%E3%83%89%E3%83%AC%E3%82%B9%E4%BB%95%E6%A7%98/dp/B0BSRKTKKC?crid=3C68O5TYXFXS1&dib=eyJ2IjoiMSJ9.DlTPsozybpJPowC7yHIJIXkTONTCamDqeIB_h2YQPrQ55qMk6Uf-3wtN6fs_dAVVp6TgSdJ1OBMWaJ-I2yw7lzGlqBsa9x08ZpICHrg3WalmtOIv2olgBuJdlWu6JkIBPu2uxV-Ggu4Clxjz2Vyo2OJuWuCKqxKN7pPl2kLNkq1go9sEgcfe8x7SCwg3x-kAvZxerb6r-KaXjnreowpDF4zGdtZHne755yM1JKtNmU24q6iVDcG9bLJnqH6rBCfOHdq7_9C3AFcxnZqUm78-phP8qmMhy5YeYK8ybugLIcg.W7hPLgM_JRpniq5CXpTHz7EW3KKGa2omuUFINiOpAeA&dib_tag=se&keywords=%E3%83%9C%E3%83%BC%E3%83%80%E3%83%AC%E3%82%B9%2B%E5%BB%B6%E3%81%B9%E7%AB%BF&qid=1794848100&sprefix=%E3%83%9C%E3%83%BC%E3%83%80%E3%83%AC%E3%82%B9%E3%80%80%2Caps%2C300&sr=8-14&th=1&linkCode=ll2&tag=344kaijyo-22&linkId=6caf0dfb3ab306d29cae5ff39a9e7d9f&ref_=as_li_ss_tl]SHIMANOのボーダレスはのべ竿ながら青物など大物対応。3.6mモデルなら海上釣り堀でも対応可能だが、ラインをそれだけしか出せないのでタナが6.0m程度の施設なら適している。中層上の対象魚がメインになりやすいので青物やマダイをタイパ良く釣りたいなら選択肢になる。
    - クーラーボックス: ダイワ(DAIWA) クーラーボックス ライトトランクα 24~32リットル[https://www.amazon.co.jp/%E3%83%80%E3%82%A4%E3%83%AF-DAIWA-%E3%82%AF%E3%83%BC%E3%83%A9%E3%83%BC%E3%83%9C%E3%83%83%E3%82%AF%E3%82%B9-%E3%83%A9%E3%82%A4%E3%83%88%E3%83%88%E3%83%A9%E3%83%B3%E3%82%AF%CE%B1-S2400/dp/B083WGW59M?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&crid=3BC08G13MIYY8&dib=eyJ2IjoiMSJ9.8GrrpG3rXZe_p3TL3lwr3inEiRMG1OlAq4TLGZzESP_kWAa3Dv_k0kANrYkkMX8TS0GhsshLx8Z-pJ7yB9cjWep8NZchBuOZsBfHzALgZgYM5p0v1QX2a0Pqu7iMXhiAguKmgAC5UJOkRum4M-OP2B1MsKGUnjFFOca3DFYPPqqmkE7BHbK0ec7KujegwyaZ8W77uDbsONbdDuifFVvtnwYiSrVgxnvzYaL_0-5KxV0xaT3p9UMjOr7y1zT3ZKeuek3TrOAOW8VQXXm2mxWcIgHpgmSiALMU6L-_0Mn9edU.P-DeESXLNPy1aC4xkkVPzKQ2_L6kCNKrBuGMOthqbgw&dib_tag=se&keywords=%E3%83%80%E3%82%A4%E3%83%AF%2B%E3%82%AF%E3%83%BC%E3%83%A9%E3%83%BC%E3%83%9C%E3%83%83%E3%82%AF%E3%82%B9&qid=1794848307&sprefix=%E3%83%80%E3%82%A4%E3%83%AF%2B%E3%82%AF%E3%83%BC%E3%83%A9%E3%83%BC%E3%83%9C%E3%83%83%E3%82%AF%E3%82%B9%2Caps%2C240&sr=8-2&th=1&linkCode=ll2&tag=344kaijyo-22&linkId=8d6fbe15e1ba22506783952cbb44249f&ref_=as_li_ss_tl]商品リンクは32Lモデル。紹介にあるように頑丈で座れることも大きいが、蓋の開けしめがやりやすく保冷力も高い。これは24,000円前後だが最高レベルの6面真空パネルは3万円を超える。
    - サビキセット（仕掛け）: ライズウェイ(Riseway) 仕掛け 爆釣サビキ ピンクサビキ 3枚組 USA-003 10号[https://www.amazon.co.jp/%E3%83%A9%E3%82%A4%E3%82%BA%E3%82%A6%E3%82%A7%E3%82%A4-Riseway-%E7%88%86%E9%87%A3%E3%82%B5%E3%83%93%E3%82%AD-%E3%83%94%E3%83%B3%E3%82%AF%E3%82%B5%E3%83%93%E3%82%AD-USA-003/dp/B019HU1J80?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&crid=11O48QLJ7SZO9&dib=eyJ2IjoiMSJ9.ygJ_lsRX6iXbzyg-n0FypDkrSxCyG60MydwO1MfD6kHfi2GTKSu_LhqtDVVm9iDjXg9mifhzolgwZ0-ov5QND7EnVul2uY3nfJTjfbdHthdfXYHEuViit-LaqxrRTl8E_46GvhV6EFZs-YBPEvTzg0Kl5MG9H7mM9UVw6cmn-5sPl7eGcFM4747MEE_tEK9dLzRZXzc7r4hqLOhRF0wC6J2t5SH91l0CM1PpZQ0FN5CXMJQZsQvaFULKWrEwSUgF7WuhzlRXMr7lp67HhPZiBtMS-XydYWFrT7AfHaYm7_E.R_53DwC2k7Xl1xF3O-a9r0QDRQnTriN3pGrXz9agZ6I&dib_tag=se&keywords=%E3%82%B5%E3%83%93%E3%82%AD%E4%BB%95%E6%8E%9B%E3%81%91%2B%E9%87%A3%E3%82%8A&qid=1794848522&sprefix=%E3%82%B5%E3%83%93%E3%82%AD%E4%BB%95%E6%8E%9B%E3%81%91%2B%E8%88%B9%E9%87%A3%E3%82%8A%2Caps%2C285&sr=8-28&th=1&psc=1&linkCode=ll2&tag=344kaijyo-22&linkId=ecfc686bffd6cf828294e57d97d24268&ref_=as_li_ss_tl]海上釣り堀でサビキをする場合、対象魚がそれなりに大きいことを想定し、ハリス3号程度で幹糸6号を目安にしておいたほうがいい。アジ・サバのみが入っているイケスとか限定するならハリス1号でも間に合う。他の大型がかかることも想定するならハリス3号が望ましい。


### §3 の決定の反映（2026-11-17 CC）

上の U-01〜U-06 はユーザーが決めた（U-07 だけ未定のまま）。CC の読み方と、タスクへの反映:

| ID | 決定 | 反映 |
|---|---|---|
| U-01 | 中国・四国の旅の統合記事を新しく作り、プランの1つに「しまなみ海道＋サイクリング（ツーリング）＋釣り」 | **RB-54（新規）** を起こす。RB-13 のしまなみの旅は、RB-54 の公開と同じ回に RB-54 へ 301（受け皿を `setouchi-access-guide` から変更） |
| U-02 | フグの gourmet を index に統合。「海上釣り堀でフグは釣れる？」の問いから入る。釣れる施設が少なく、捌く資格の問題があるので、勘違いさせない | RB-27・RB-28 を1つにまとめる（gourmet → index へ 301） |
| U-03 | 真夏の氷の記事は、クーラーの選び方 `cooler-box-selection` に統合。夏が暑いのは前提にして、保冷力を優先した選び方と、季節（気温）ごとに保冷剤がどれだけ要るか | RB-43 を M（統合して 301）に変更。季節ごとの保冷剤の量は、CC が出典を調べてアウトラインに載せる |
| U-04 | 死にエサの誘い（ブリ intermediate）は「ミャク釣りのテクニック記事」に統合 | RB-48 の受け皿を変更（**どの記事かはユーザーに確認中**。下の注） |
| U-05 | 価格帯は2つ: コスパなら 3,000〜8,000円（運営者が使っているのは Coleman の 2,980円前後のもの。Amazon で購入【一次】）／釣り用で有名なのは TALEX（公式で釣り用を打ち出す。オーダーメイドは直営店が要る）。既製品ならダイワのオーバーグラス（メガネの上に掛ける）が2万円弱 | RB-44 の商品が決まった。**Coleman とダイワの Amazon リンクが未登録**（登録すればカードにできる）。TALEX は公式への文中リンク（アフィリエイトなし） |
| U-06 | 商品を選んだ（下の表） | 7点を `src/content/affiliates/tackle/` に登録（2026-11-17）。画像は未設定（カードは画像なしの枠で出る） |

U-06 で登録した商品と、置く記事:

| 商品（ID） | 置く記事 | 状態 |
|---|---|---|
| 練餌海道 皇帝KAISER（`tackle/kaijo-bait-kaiser`） | RB-41 放流タイム | 記事の書き直しのときに置く |
| シーガー PE X8 マーキング付（`tackle/seaguar-pe-x8-marking`）。10mごとに色、1mごとにピッチマーカー | RB-42 タナ | **置いた**（2026-11-17、`trivia-tana-line`） |
| OGK 海上釣堀-脈釣TCS 300/330/360（`tackle/ogk-kaijo-myaku-tcs`）。3m前後・両軸リール用、耐久性と価格が手頃 | RB-47 ミャク釣り（竿＋リールの型） | 書き直しのときに置く |
| シマノ ボーダレス GL（`tackle/shimano-borderless-gl`）。のべ竿で大物対応。3.6mなら海上釣り堀でも使えるが、糸をその長さしか出せないのでタナ6m程度までの施設向き。中層より上の魚（青物・マダイ）を手早く釣りたい人向け | RB-47 ミャク釣り（延べ竿の型） | 書き直しのときに置く |
| ダイワ ライトトランクα 32L（`tackle/daiwa-light-trunk-alpha-32l`）。頑丈で座れる、蓋の開け閉めがしやすい、保冷力が高い。2万4,000円前後。最高レベルの6面真空は3万円を超える | RB-43（クーラーの選び方に統合） | 書き直しのときに置く |
| ライズウェイ ピンクサビキ 3枚組 10号（`tackle/riseway-pink-sabiki`）。海上釣り堀では大きめの魚も掛かるので、ハリス3号・幹糸6号が目安。アジ・サバだけのイケスならハリス1号でも足りる | RB-53 サビキの新記事 | 書き直しのときに置く |
| 海上釣堀入門 完全釣りセット 糸巻済み（`tackle/kaijo-beginner-complete-set`）。グリップとプライヤー、仕掛け付きで、あとはエサだけ | H-46（施設カード）。レンタルのない施設の「竿＋リール」枠、または はじめてガイド | H-46 で置き場所を決める |

注（U-04）: 「ミャク釣りのテクニック記事」に当たる記事は、いま2本ある。`tactics/gear/myakuzuri-gear`（タックル。RB-47 で書き直す）と `tactics/fish-strategy/myakuzuri-extreme-guide`（穂先の素材）。CC の案は、RB-47 の書き直しで myakuzuri-gear を「ミャク釣りのタックルと誘い」にし、死にエサの誘いをそこへ入れること。

**RB-13（U-01 待ち）**（決まるまで着手しない）

| ID | 種別 | 対象（表示） | 301 の先（案） | 先に移すもの | 規模 |
|---|---|---|---|---|---|
| RB-13 | D | しまなみの旅 `column/travel/shimanami-cycling-fishing/`（13） | 瀬戸内のアクセス `column/travel/access/setouchi-access-guide/` | プランの1つとして、受け皿に数行で入れる（中国・四国の旅の統合記事はまだない） | S |

**RB-43（U-03 待ち）**（決まるまで着手しない）

| ID | 種別 | 対象（表示） | やること（②の場合） | 消すページ | 規模 |
|---|---|---|---|---|---|
| RB-43 | R | 真夏の氷 `july-ice-management-guide`（3） | タイトルから「7月」を外す。夏の暑さで氷が溶けやすいことを軸に、保冷力の高い（高価な）クーラーと、氷・保冷剤を長持ちさせる工夫を書き、選び方は `tactics/gear/cooler-box-selection` に渡す。遠征の運び方は `column/travel/cooler-box-guide`（244）に渡す。3本の役割が重ならないよう、アウトラインで分担を決める | — | M |

**RB-44（U-05 待ち。本文の主張は決まっている）**（決まるまで着手しない）

| ID | 種別 | 対象（表示） | やること | 消すページ | 規模 |
|---|---|---|---|---|---|
| RB-44 | R | サングラス `august-sunglasses-guide`（0） | タイトルから「8月」を外す。①水面の照り返しでウキが見えない（座る位置しだい） ②沈むウキは波の影響を受けないが、水中で光ると見えない → 偏光が要る ③それ以上に、目を紫外線から守ることが大事。格好をつけるためではなく、健康と将来のため。商品は「一生ものの1本」か「安くて十分な1本」かをアウトラインで決める（H-46 の偏光サングラスの採否と合わせる） | — | M |

**RB-48（U-04 待ち）**（決まるまで着手しない）

| ID | 種別 | 対象（表示） | やること | 消すページ | 規模 |
|---|---|---|---|---|---|
| RB-48 | M | ブリ intermediate（15）→ 誘いの記事（RB-25 と同じ回に） | 死にエサ（冷凍のイワシ・サンマ・イカ）を生きているように見せる「誘い」の記事にまとめる。魚は匂いだけでなく、動かないエサには反応しにくい（習性と本能）。ウキでもミャクでも、基本は「エサを動かす」こと。受け皿は `column/trivia/august-dead-bait-technique`（**109**）を第一候補にする | ブリ intermediate → 受け皿へ 301 | M |


## 4. 進め方

1. §2-1（RB-10〜12・14）は CC がそのまま行う（301 と内部リンクの張り替え。本文は書かない）
2. §2-2〜2-4 は、タスクごとに CC がリサーチとアウトライン（`.workspace/codex/outlines/`）を作り、5本前後ずつ Codex に渡す。順番は表示の多い順: RB-29（212）→ RB-42（188）→ RB-31（178）→ RB-22（105）→ RB-20（86）→ RB-25 → 残り。「待ち」の部分は後回しにして、ほかを進める
3. §3 は、決まったものから §2 に移す（U-06 は H-46 の商品選びと同じ回）
4. 統合で消すページは、受け皿の公開と同じ回に 301 を入れる（受け皿が出る前に消さない）
5. 公開のあとは、GSC で受け皿の URL を検査し、消した URL がインデックスから外れたかを4週後に見る（`schedule-task.md` に効果測定として足す）

## 5. 決定の記録

| 日付 | 決めたこと |
|---|---|
| rewrite.md | URL ごとのリライト・統合・排除の判断（ユーザー） |
| 2026-11-17 | 奄美シーランドは消す（RB-14） |
| 2026-11-17 | 1記事に統合する魚種は7魚種（クエ・メジナ・イシダイ・スズキ・クロダイ・ブリ・ヒラマサ）。ブリとヒラマサは別々の記事。統合した魚種は行数の上限なし（CLAUDE.md に反映） |
| 2026-11-17 | カワハギは魚種別攻略の記事を持たない。施設の frontmatter の対象魚には入れてよい（RB-32） |
| 2026-11-17 | ペレットの節は放流タイム（RB-41）へ。放流したての魚は養殖で、もともと食べていたエサに反応する、という理由づけ |
| 2026-11-17 | タナの記事はコラムのまま `tana-basics` に1本化（RB-42） |

### 判断タスク
1. クエマスはクエの地方名なのでクエに含めていい。ハタマスはマハタの地方名でクエではない。タマクエはタマンとクエをかけ合わせた魚なのでクエではない。
2. ひるがの休園は12/21~3/28で冬季休暇に相当する、2026~2027年の言及はないが、おそらく12月下旬or4週目で営業が終わり、翌年3月の最終週の日曜日から営業再開が通年のスケジュールだと見込まれる。。福井県美浜町は日本海に面しているので冬季は風も強く雪も降るため海上釣り堀に向いていない。そのため福井県など山陰や北陸を含めた日本海側では魚釣り自体が難しくなる。だからこそ、関西地域へ誘導する記述があると丁寧といえる。

### ひるが海上釣り堀：備考（https://ameblo.jp/hiruga-turibori/）
料金システム: 釣り放題ではなく買取方式
    入園料: 大人（中学生以上）4,000円（魚代3,000円含む）
            小人（小学生以下）3,000円（魚代2,000円含む）
            JAF会員割引有り（入園料10%OFF3名まで）入園料が1,000円相当なので100円割引。
    マダイ3尾で合計3.0kgの場合、3.0kg×2,000円/kg＝6,000円; 入園料に3,000円相当が含まれるので、魚を買い取るなら3,000円になる。
    対象1kg当たり2,000円の計算。
    時間: 入園から3時間以内、ただし最終入場は12時まで。
    注意事項: 活き餌、撒き餌、さし餌など持ち込み禁止（園内で販売しているものは可）。釣った魚の再放流禁止。竿は1人1本まで（釣り針1本仕掛け）
    レンタル: 貸竿1本500円・スカリ無料（エサは500円から、発泡スチロール販売あり）
魚の価格表: 
    タイ: 2,000円/kg
    ワラサ: 1,000円/kg
    ハマチ: 2,500円/kg
    ツバス（ブリの幼魚）: 600円/1尾
    シマアジ: 3,700円/kg
    イサキ: 3,000円/kg
    グレ（メジナ）: 1,200円/kg
    クロダイ: 1,200円/kg
    その他 天然魚: 時価
    マダコ: 2,000円/kg
    ※価格は1尾計算ではなく重量あたりの計算。ツバスのみ例外で1尾ごと。メイン魚種は紹介だと「タイ（マダイ）・ハマチ・タコ」。

→ 2026-11-17 CC 反映: (1) クエの記事につりぼりマルヨ（クエマス）を追加、紀州（タマクエ）は外したまま、基準を `.data-set/fish-knowledge/kue.md` §2 に記録（タマクエはタマカイとクエの交雑種。2026-11-17 ユーザー確認）。(2) ひるがの施設記事を下の備考で書き直し（ブランチ wr-1 の版に重ねた）、冬は関西へ送る一文を追加。まとめ（中日本・冬の営業・日本海側ランキング・みかた）の料金・休園・所在地を施設記事に合わせた。イシダイの記事からひるがを外した（料金表にイシダイがないため）
