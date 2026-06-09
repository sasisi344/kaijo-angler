# ランキング・まとめ記事 再構築 TODO

## 背景

旧WordPressのまとめ記事（8本）がAstro移行時に未移行・リダイレクトなしのまま放置されており、
現在すべて404。`matomekiji-kansai` はGSCでCTR14%・順位5.2の実績があったため、
SEO損失を回復しつつ情報型クエリ（カニバリズム対策）を強化する。

**方針：** `column/ranking/` に新記事を作成し、旧WP URLを `facility-redirects.ts` で301リダイレクト。

---

## STEP 1：記事作成（column/ranking/）

優先度は「旧WPの検索実績あり」を上位に置く。

### P1：WP実績あり → 早めに作って損失回復

- [x] **関西** `column/ranking/kansai/index.mdx`
  - 旧WP: `matomekiji-kansai`（CTR14%・順位5.2・クリックあり ← 最重要）
  - 対象施設: 大阪5・兵庫3（+海恵 休止中）= 稼働8施設
  - ターゲット: 「関西 海上釣り堀 ランキング」「大阪 海上釣り堀 おすすめ」

- [x] **九州・沖縄** `column/ranking/kyushu-okinawa/index.mdx`
  - 旧WP: `kyusyu-matome` + `okinawa-matome`（2本分を統合）
  - 対象施設: 福岡1・佐賀1・長崎3・熊本3・大分1 = 9施設（沖縄は海上釣り堀タグなし）
  - ターゲット: 「九州 海上釣り堀」「熊本 天草 釣り堀」「沖縄 海上釣り堀」

- [x] **中国・四国** `column/ranking/chugoku-shikoku/index.mdx`
  - 旧WP: `chugoku-matome` + `shikoku-matome`（2本分を統合）
  - 対象施設: 広島3・山口1・高知1・香川1・徳島1 = 7施設
  - ターゲット: 「瀬戸内海 海上釣り堀」「中国四国 釣り堀 ランキング」

- [x] **日本海側・北陸** `column/ranking/nihonkai-hokuriku/index.mdx`
  - 旧WP: `chubu-hoku-matome`
  - 対象施設: 福井6（新潟・富山・石川・京都日本海側は海上釣り堀タグなし）
  - ターゲット: 「福井 海上釣り堀」「若狭湾 釣り堀」「北陸 海上釣り堀」

- [x] **関東・静岡・愛知** `column/ranking/kanto-tokai/index.mdx`
  - 旧WP: `kantou-matome` + `chubutokai-matome`（2本分を統合）
  - 対象施設: 千葉1・神奈川2・静岡4・愛知1 = 8施設
  - ターゲット: 「静岡 海上釣り堀」「神奈川 釣り堀 海」「東海 海上釣り堀」

### P2：WP実績なし → 新規コンテンツ

- [x] **三重・和歌山** `column/ranking/mie-wakayama/index.mdx`
  - 旧WP対応なし（下処理まとめのみ）、施設数が全区分最多のため優先度高
  - 対象施設: 三重13・和歌山6 = 19施設
  - ターゲット: 「三重 海上釣り堀 おすすめ」「伊勢志摩 釣り堀」「和歌山 海上釣り堀」

- [x] **北日本・東北** `column/ranking/tohoku-hokkaido/index.mdx`
  - 旧WP対応なし、東北唯一の施設（山形・由良海洋釣堀）を中心にガイド形式で作成
  - 対象施設: 山形1（北海道・青森・宮城・岩手・秋田・福島は海上釣り堀なし）
  - ターゲット: 「北海道 海上釣り堀」「東北 釣り堀 おすすめ」

---

## STEP 2：リダイレクト追加（facility-redirects.ts）

記事作成後、対応する旧WP URLを追加する。記事作成と同時進行でOK。

### 地域ランキング（8本） ✅ 追加済

```ts
// → column/ranking/kansai/
'/2025/07/westjapan/kansai/matomekiji-kansai/': '/column/ranking/kansai/',

// → column/ranking/kyushu-okinawa/
'/2025/07/westjapan/kyusyu/kyusyu-matome/': '/column/ranking/kyushu-okinawa/',
'/2025/07/westjapan/okinawa/okinawa-matome/': '/column/ranking/kyushu-okinawa/',

// → column/ranking/chugoku-shikoku/
'/2025/07/westjapan/chugoku/chugoku-matome/': '/column/ranking/chugoku-shikoku/',
'/2025/07/westjapan/shikoku/shikoku-matome/': '/column/ranking/chugoku-shikoku/',

// → column/ranking/nihonkai-hokuriku/
'/2025/07/chubu/chubu-hokuriku/chubu-hoku-matome/': '/column/ranking/nihonkai-hokuriku/',

// → column/ranking/kanto-tokai/
'/2025/07/eastjapan/kanto/kantou-matome/': '/column/ranking/kanto-tokai/',
'/2025/07/chubu/chubu-tokai/chubutokai-matome/': '/column/ranking/kanto-tokai/',
```

### 都道府県別・下処理まとめ（7本）→ 対応する地域記事へ ✅ 追加済

```ts
// → column/ranking/mie-wakayama/
'/2025/09/chubu/chubu-tokai/mie-kaijyo-matome-sitasyori/': '/column/ranking/mie-wakayama/',
'/2025/09/westjapan/kansai/wakayama-kaijyo-matome-sitasyori/': '/column/ranking/mie-wakayama/',

// → column/ranking/kansai/
'/2025/09/westjapan/kansai/osaka-kaijyo-matome-sitasyori/': '/column/ranking/kansai/',
'/2025/09/westjapan/kansai/hyogo-kaijyo-matome-sitasyori/': '/column/ranking/kansai/',

// → column/ranking/kyushu-okinawa/
'/2025/09/westjapan/kyusyu/kumamoto-kaijyo-matome-sitasyori/': '/column/ranking/kyushu-okinawa/',
'/2025/09/westjapan/kyusyu/ooita-kaijyo-matome-sitasyori/': '/column/ranking/kyushu-okinawa/',

// → column/ranking/chugoku-shikoku/
'/2025/09/westjapan/chugoku/hirosima-kaijyo-matome-sitasyori/': '/column/ranking/chugoku-shikoku/',
```

### その他（コンテンツ性質が異なるもの） ✅ 追加済

```ts
// 手ぶら記事 → trivia か tactics の近い記事に
'/2025/09/howto/tebura-kaijyi-itemprice-matome/': '/column/trivia/rental-tackle-honest-review/',
```

---

## 完了定義

- [x] 7本の `column/ranking/` 記事が公開状態（draft: false・cover.jpg あり）
- [x] `facility-redirects.ts` に16本分のエントリ追加
- [ ] GSCで旧WP URLのインデックス削除 or 301確認（手動確認が必要）
