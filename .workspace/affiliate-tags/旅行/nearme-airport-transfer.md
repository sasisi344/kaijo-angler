# NearMe（ニアミー）空港送迎（A8.net）

- 広告主サイト: https://app.nearme.jp/
- 実装: `src/content/affiliates/travel/nearme-airport-transfer.json`（id=`travel/nearme-airport-transfer`、300x250のCTA）
- 訴求: 自宅⇔空港の事前予約送迎。早割で最大50%オフ／料金は予約時に確定／シェアでさらにおトク／大人数・大荷物・車両選択可。空港経由で海上釣り堀へ行く読者向け
- 実績（広告主提供）: 累計予約145万人以上・満足度4.6/5.0（2019/10/1〜2026/5/31集計）。記事で使う場合は出所と集計期間を添える

## 使い方

| 用途 | 形式 | 実装状況 |
|---|---|---|
| CTA（記事末・セクション末） | 300x250（※依頼文は350x250表記だが実寸300x250） | **登録済み**。`<AffiliateCard id="travel/nearme-airport-transfer" isVertical={true} placement="..." />` |
| 記事中（スマホでも見やすい） | 320x50 | 未実装（下記タグを保管。使う時は別idで登録） |
| 文章内リンク | テキスト「空港送迎」（任意文言に差替可） | 未実装（GoThere組込み時に検討） |

## 保管タグ（未実装分）

320x50:
```html
<a href="https://px.a8.net/svt/ejp?a8mat=4BEA50+7289HM+4Q64+601S1" rel="nofollow"><img border="0" width="320" height="50" alt="" src="https://www26.a8.net/svt/bgt?aid=261006804427&wid=008&eno=01&mid=s00000022054001008000&mc=1"></a><img border="0" width="1" height="1" src="https://www10.a8.net/0.gif?a8mat=4BEA50+7289HM+4Q64+601S1" alt="">
```

テキスト:
```html
<a href="https://px.a8.net/svt/ejp?a8mat=4BEA50+7289HM+4Q64+5ZEMQ" rel="nofollow">空港送迎</a><img border="0" width="1" height="1" src="https://www13.a8.net/0.gif?a8mat=4BEA50+7289HM+4Q64+5ZEMQ" alt="">
```

## 注意
- A8のインプレッション計測用1x1ピクセルを残すため、`AffiliateCard.astro` が `a8.net/0.gif` を非表示で出力する
- 設置は空港アクセスに触れる遠征・旅行系記事と、将来のGoThere組込みが対象。現時点では記事に未設置
