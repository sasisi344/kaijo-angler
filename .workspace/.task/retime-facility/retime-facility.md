# 休業・閉鎖施設記事 — 構成リタイム施策リスト

## 目的

休業・閉鎖を扱う施設紹介記事について、**先頭で「同地域・隣接エリアで今使えるおすすめ施設」**を提示し、**休業中・閉鎖した当該施設の詳細（アーカイブ情報）は後段**にまとめる構成へ改める。

## 抽出条件（厳選）

src/content/blog/fishing-facility/**/index.mdx のフロントマターに次のいずれかがある記事のみ。

| フィールド | 意味 |
|------------|------|
| status: suspended | 営業休止・無期限休止など |
| status: closed | 閉店・閉業・閉鎖など |

**本リストに含めないもの:** 冬季休業・定休日のみの記述で、status が付いていない通常稼働の施設記事。

## 対象記事一覧（全 6 件）

公開 URL はサイトの slug 規則に従い **/blog/{slug}/** 想定（施設記事のリダイレクト設定がある場合は実 URL に合わせる）。

| # | slug | status | 都道府県 | ソースパス（src/content/blog/ から） |
|---|------|--------|----------|----------------------------------------|
| 1 | himeji-city-fishing-center | suspended | hyogo | ishing-facility/west-japan/hyogo/himeji-city-fishing-center/index.mdx |
| 2 | sea-fishing-pond-kaikei | suspended | hyogo | ishing-facility/west-japan/hyogo/sea-fishing-pond-kaikei/index.mdx |
| 3 | yuharai-pond | suspended | hokkaido | ishing-facility/east-japan/hokkaido/yuharai-pond/index.mdx |
| 4 | shinojima-tsuri-tengoku | closed | aichi | ishing-facility/center-japan/aichi/shinojima-tsuri-tengoku/index.mdx |
| 5 | sea-fishing-park-mikata | closed | fukui | ishing-facility/center-japan/fukui/sea-fishing-park-mikata/index.mdx |
| 6 | shodoshima-furusatomura-fishing-pier | closed | kagawa | ishing-facility/west-japan/kagawa/shodoshima-furusatomura-fishing-pier/index.mdx |

## 先頭ブロックに載せる「代替施設」候補（同一リポジトリ内・編集時のたたき台）

実際の掲載は営業状況・訴求の一致を確認して選定すること。**同一県・近接**を優先。

### 兵庫（#1 姫路市立 / #2 家島・海恵）

- kaijo-tsuribori-at-sea（淡路）
- suma-sea-fishing-park（神戸須磨）
- kobe-hiraiso-sea-fishing-park（神戸平磯）
- waji-janohire-fishing-park（淡路）
- magasaki-city-sea-fishing-park（尼崎）
- suihou-fishing-pond（水上）

### 北海道（#3 勇払マリーナ）

- 	omakomai-port-sea-fishing-facility（苫小牧港・同一道内の海釣り施設）

※道内の他海上釣り堀記事が増えたら随時追加。

### 愛知（#4 篠島釣り天国）

- shinmaiko-marine-park-fishing（新舞子）
- akucho-mihama-fishing-park（渥美・美浜）

### 福井（#5 海釣り公園みかた）

- hiruga-sea-fishing-pond（三方）
- wakasa-takahama-sea-fishing-park（高浜）
- 	suruga-city-sea-fishing-park（敦賀）
- lue-park-ano（あわら）
- kaguri-sea-fishing-park（あかぐり）

### 香川（#6 小豆島ふるさと村 釣り桟橋）

- 
aoshima-fishing-park（直島）
- saltlake-hiketa-adoike（ひけた）

## 各記事で揃えたい構成（チェックリスト）

1. **リード直後**に注意ボックス（休止・閉鎖の事実は維持）。
2. **「いま行ける近隣のおすすめ」**見出しを続け、上記候補から 2〜4 件を **カード／箇条書き＋内部リンク** で提示。
3. 既存の **料金表・アクセス・攻略・まとめ** などは **「記録・アーカイブ」** 見出し以下に移動。
4. フロントマターの description は、**先頭文で休止・閉鎖＋代替閲覧の示唆**が伝わるよう必要なら調整。

## 抽出実施メモ

- 基準日: 2026-05-06
- 対象は status: suspended / status: closed の施設 MDX のみ（全 6 件）。
