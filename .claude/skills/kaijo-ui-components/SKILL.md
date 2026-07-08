---
name: kaijo-ui-components
description: >-
  kaijo-angler の記事(MDX)に UI コンポーネントやアフィリエイトリンクを追加・編集するときに使う。
  import パスは `~/` を使い `@/` は使わないこと、アフィリエイトは必ず AffiliateCard / TackleCard /
  GoThere 経由で挿入し id を直接ハードコードしないこと、を徹底する。Astro 5 + Astrowind
  （vendor/integration）構成。npm 製 React UI ライブラリは導入しない。
---

# kaijo-angler UI・アフィリエイト組み込みルール

記事（MDX）に何らかの UI や外部リンクを足したくなったら、まず本ファイルを確認する。存在しないコンポーネント（例: `LinkCard`）や `@/` エイリアスを使わないこと。

## 1. コンポーネントの置き場所

| 種別 | 参照先 |
|------|--------|
| **UI コンポーネント実体** | `src/components/**/*.astro`（下記4節に一覧） |
| **テーマ・設定** | `vendor/integration`（Astrowind）、`src/config.yaml` |
| **npm ライブラリ** | `astro-icon`、`leaflet` / `leaflet.heat`、`astro-embed` のみ。**shadcn / React 製 UI ライブラリは追加しない** |

## 2. import パスのルール

- **正しい**: `~/`（`src/` を指す。`tsconfig.json` の `paths` と `astro.config.ts` の `vite.resolve.alias` で解決）
- **誤り**: `@/` は**未設定**。MDX / Astro で `import X from "@/components/..."` と書くと解決できない

```ts
import TackleCard from "~/components/common/TackleCard.astro";
import AffiliateCard from "~/components/common/AffiliateCard.astro";
import GoThere from "~/components/widgets/GoThere.astro";
```

## 3. アフィリエイト挿入の設計ルール（最重要）

記事内に外部リンク（アフィリエイト・予約サイトなど）を貼るときは、**素の `<a href="...">` を書かない**。必ず以下の3コンポーネントのいずれかを経由する。`src/content/affiliates/**` の JSON/YAML を `id` で参照する仕組みで統一されており、リンクの差し替え・失効対応をコンテンツ側の修正だけで完結させるための設計。

| コンポーネント | 用途 | 使う場所 |
|---|---|---|
| **GoThere** (`~/components/widgets/GoThere.astro`) | 施設ページ専用。Google マップ経路・じゃらん/楽天トラベル・じゃらんレンタカー（駐車場ありのみ）をまとめて出力 | `fishing-facility/**/index.mdx` の「アクセス」セクション末尾。`<GoThere facilityId="..." />` |
| **AffiliateCard** (`~/components/common/AffiliateCard.astro`) | 単体の物販・サービスアフィリを1枚のカードで出す。`id` が `travel/` プレフィックスだと自動的に「サービス用モード」（画像なし・「公式サイトで詳細を見る」ボタンのみ）になる | column/travel 系記事など、GoThere が使えない場所で宿泊・レンタカー等のCTAを置きたいとき。`<AffiliateCard id="travel/jalan-net" isVertical={true} />` |
| **TackleCard** (`~/components/common/TackleCard.astro`) | 釣具・道具のアフィリエイトカード（Amazon/楽天/Yahoo!検索リンク付き） | tactics/gear 系記事の道具紹介 |

### 3.1 `id` は必ず実在確認する

`id` は `src/content/affiliates/{id}.json`（またはサブディレクトリ）に対応する。**存在しない id を書くと、ビルドはエラーにならずに本番ページへ「⚠️ アフィリエイトID "..." が見つかりませんでした」という赤い警告ボックスがそのまま表示される。** `astro check` / `astro build` はこれを検知しないため、記事を書いたら次のコマンドで自己チェックすること。

```bash
# 記事内で使っている id が実在するか確認（PowerShell）
Select-String -Path "src/content/blog/**/*.mdx" -Pattern '(TackleCard|AffiliateCard)[^>]*id="([^"]+)"' | ...
# 存在しなければ src/content/affiliates/{id}.json が無い＝要修正
```

もしくは目視で `src/content/affiliates/` 配下に対応するファイルがあるかを確認する。

### 3.2 rel 属性・ターゲット

- 外部リンクは `target="_blank"` `rel="noopener noreferrer nofollow"` を必ず付ける（ASP規約準拠）
- GoThere / AffiliateCard の実装は既にこれに準拠済み。新しいコンポーネントを作る場合も踏襲する

### 3.3 未検証のディープリンク（エリアコード等）を作らない

じゃらん・楽天トラベルの「エリア指定検索」深いリンク（`?area=` 等）は、本サイトに検証済みの実装例が存在しない。施設ごとにエリアコードを推測して埋め込むのは禁止。ASP管理画面で仕様を確認できるまでは、`AffiliateCard` が既に持つ汎用リンク（トップページ遷移）を使う。

### 3.4 変更履歴（既知の修正済みバグ）

- `AffiliateCard.astro` の画像抽出ロジックは ValueCommerce のトラッキング用バナー（`gifbanner`/`jsbanner`）を誤って商品画像として表示していた → `valuecommerce.com/servlet/` を除外済み
- `isService`（`travel/` id）分岐の CTA リンクに `nofollow` が付いていなかった → 修正済み

## 4. `src/components` 配下の主要コンポーネント一覧（`.astro`）

サブディレクトリを含め全体で約63ファイル。

### 直下 `src/components/`
- `CustomStyles.astro` — グローバルスタイル
- `Favicons.astro`
- `Logo.astro`

### `src/components/blog/`（記事レイアウト関連）
- `FacilityJsonLd.astro`
- `FacilityStatusAlert.astro`
- `Grid.astro` / `GridItem.astro`
- `Headline.astro`
- `List.astro` / `ListItem.astro`
- `Pagination.astro`
- `RelatedPosts.astro`
- `SinglePost.astro`
- `Tags.astro`
- `ToBlogLink.astro`

### `src/components/common/`（記事から import されうるもの）
- `AdSense.astro`
- `AffiliateCard.astro`
- `Analytics.astro`
- `ApplyColorMode.astro`
- `BasicScripts.astro`
- `CommonMeta.astro`
- `GlobalSearch.astro`
- `Image.astro`
- `Metadata.astro`
- `SiteVerification.astro`
- `SocialShare.astro`
- `SplitbeeAnalytics.astro`
- `TackleCard.astro`
- `ToggleMenu.astro`
- `ToggleTheme.astro`

### `src/components/ui/`（汎用UIパーツ）
- `Background.astro`
- `Button.astro`
- `DListItem.astro`
- `Form.astro`
- `Headline.astro`
- `ItemGrid.astro` / `ItemGrid2.astro`
- `Timeline.astro`
- `WidgetWrapper.astro`

### `src/components/widgets/`（ページ単位の大きめウィジェット）
- `BlogHighlightedPosts.astro`
- `BlogLatestPosts.astro`
- `Brands.astro`
- `CallToAction.astro`
- `Contact.astro`
- `Content.astro`
- `FAQs.astro`
- `FacilityMap.astro`
- `Features.astro` / `Features2.astro` / `Features3.astro`
- `FishingHeatmap.astro`
- `Footer.astro`
- `GoThere.astro`
- `Header.astro`
- `Hero.astro` / `Hero2.astro`
- `HeroText.astro`
- `MapApp.astro`
- `Note.astro`
- `Pricing.astro`
- `Stats.astro`
- `Steps.astro` / `Steps2.astro`
- `Testimonials.astro`

## 5. 記事追加・編集時のチェックリスト

- [ ] 新しい見た目のコンポーネントが欲しくなったら、**まず既存のもの**が `src/components` にないか確認する
- [ ] MDX の import は **`~/components/...`** で書く（`@/` は使わない）
- [ ] アフィリエイトリンクは **必ず GoThere / AffiliateCard / TackleCard 経由**。素の `<a>` タグでASPリンクを書かない
- [ ] 使う `id` が `src/content/affiliates/` に実在するか確認する（存在しないと警告ボックスがそのまま公開される）
- [ ] 施設ページ（`fishing-facility/**`）には `<GoThere facilityId="..." />` が「アクセス」セクション末尾にあるか確認する
- [ ] エリアコード等、未検証のディープリンクを自作しない

## 6. 更新方針

`src/components` に `.astro` が増えたら、このリストと本ファイル全体を3〜4か月ごとに見直すこと。
