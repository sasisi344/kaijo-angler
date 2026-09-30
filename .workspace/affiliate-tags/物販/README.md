# 物販タグの記載ルール

最終更新: 2026-09-30（初版）／ステータス: **設計中（実装未反映）**

## 基本方針

1. **1商品=1魚種ごとに1カード**。同じ商品（例: 同じ竿）でも魚種が違えば別カード・別`id`・別`fish`にする
   - 理由: `affiliate_id`と`fish`の食い違いを防ぎ、GA4で魚種別に成果を集計するため
   - 例: シマノ ハードロッカー S83MH は `ishidai`・`ishigakidai`・`kue`・`hata` の4カードを作る（ASIN・リンクは同一）
2. **商品台帳は魚種別**（`物販/fish/{fishコード}.md`）。ここで確定してから`src/content/affiliates/tackle/`へ反映する
3. 実装の`tackle/*.json`も魚種ごとにサブフォルダで分ける（`tackle/{fish}/{id}.json`）。共通品は`tackle/common/`

## idの命名規則

```
tackle/{fish}-{type}-{slug}
```

| 要素 | 内容 | 例 |
|---|---|---|
| `fish` | [[fish-parameters]]の魚種コード（小文字英字） | `madai` `suzuki` `ishidai` |
| `type` | [[product-types]]の商品タイプ | `rod` `reel` `line` `rig` `hook` `bait` |
| `slug` | ブランド+型番、または価格帯 | `hardrocker-s83mh` `entry-seaparadise` |

- 例: `tackle/ishidai-rod-hardrocker-s83mh`、`tackle/madai-rig-sasame-t490`
- 価格帯で並ぶ商品（青物竿など）は`slug`の末尾に`-entry`（〜1万円）/`-std`（1〜2万円）/`-pro`（2万円〜）を付ける（例: `buri-rod-seamark-std`）
- 共通品（ライフジャケット・クーラー等）は`fish`を`common`にする（例: `tackle/common-lifejacket-airlegato`）

## fishパラメータ（GA4計測）

- 各カードのJSONに`fish: "<コード>"`を持たせ、`AffiliateCard`のクリックイベント（`affiliatecard_click`）に`fish`パラメータとして送る
- 値は[[fish-parameters]]のコードのみ。表記ゆれ禁止
- **実装TODO**: ①`config.ts`のaffiliatesスキーマに`fish`追加 ②`AffiliateCard.astro`に`data-affiliatecard-fish`と`gtag`の`fish`追加 ③GA4カスタムディメンション`fish`（イベントスコープ）を登録 ④既存`tackle/*.json`の魚種別フォルダ分割と旧id→新id対応表

## リンク形式（Amazon）

- 標準形: `https://www.amazon.co.jp/dp/{ASIN}?tag=sasisi344-22`
- Amazonの検索結果URLに付く`crid`・`dib`・`qid`・`sr`・`linkId`等の**追跡パラメータは削除**し、ASINと`tag`だけにする
- `amzn.to`短縮リンクは既存のものは維持してよいが、新規は標準形に統一（ASINが読めるため台帳管理しやすい）
- `tag=`が無いリンクは成果が計上されないため禁止
- 楽天・Yahoo!は`rakuten_link`・`yahoo_link`に入れる（未設定の商品は空でよい）

## 商品を追加・変更する手順

1. `物販/fish/{fish}.md`の該当タイプの行にASIN・リンク・価格・ステータスを記入（ステータス: 候補→確定→反映済み）
2. 魚種違いの共用商品は各魚種ファイルに同じ商品を記載し、`共用元`欄に他魚種を書く
3. 確定したら`src/content/affiliates/tackle/{fish}/`にJSONを作成し、ステータスを「反映済み」にする
4. 記事内の`<TackleCard id="...">`は`~/`エイリアスのコンポーネント経由（idのハードコード禁止）。[[kaijo-ui-components]]参照
5. 価格・在庫は掲載前にAmazonで再確認（記事記載値は古いことがある）

## 選定方針

- [[選定方針]]: 「海上釣り堀」名称入り優先／汎用性（ネイティブでも使える）重視／竿は9ft・3m未満／リールは4000番台と理由の書き方

## 関連資料

- [[media-average-research]]: 「海上釣り堀 おすすめ {魚種} {タックル}」の上位ページから集計したメディア平均（台帳の候補の根拠）

## 更新履歴

- 2026-09-30: 初版。方針（魚種ごとに別カード・別fish、底物竿=シマノ ハードロッカー S83MH）を記録
- 2026-09-30: メディア平均Research（マダイ・シマアジ・ブリ/カンパチ）の集計と、対応4台帳への候補反映
