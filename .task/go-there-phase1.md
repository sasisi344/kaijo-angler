# GoThere Phase 1 実装プラン

作成日: 2026-05-29  
前提: `travel-hub.md` 機能設計を受けた実装仕様

---

## 0. 前提整理（調査結果）

### すでに使える資産

| 資産 | 場所 | 内容 |
|---|---|---|
| 旅行アフィリJSON | `src/content/affiliates/travel/` | 9本（じゃらん・楽天・Yahoo・レンタカー・HIS等） |
| AffiliateCard.astro | `src/components/common/` | travel/ 系 JSON を「サービスモード」で描画済み |
| 施設 lat/lng | 各施設 frontmatter `google_maps.latitude/longitude` | 全施設に格納済み |
| 施設 parking 情報 | `facility_details.amenities.parking` | 駐車場有無が文字列で入っている |
| prefecture フィールド | 各施設 frontmatter | 都道府県コード（"hyogo", "mie" 等） |

### 優先施設数

| エリア | 都道府県 | 施設数 |
|---|---|---|
| 近畿 | 兵庫・大阪・和歌山 | 21 |
| 関東 | 神奈川・千葉 | 4 |
| 東海 | 愛知・静岡 | 9 |
| **合計** | | **34** |

### 既存 travel/ アフィリ一覧

```
travel/jalan-net          じゃらんnet（宿泊）
travel/jalan-activity     じゃらん 遊び・体験予約
travel/jalan-rentacar     じゃらんレンタカー
travel/rakuten-travel     楽天トラベル（宿泊）
travel/rakuten-rentacar   楽天トラベル レンタカー
travel/yahoo-travel       Yahoo!トラベル
travel/his                HIS 国内旅行
travel/rakuten-insurance  楽天 国内旅行保険
travel/etc-union          ETC協同組合（法人向け）
```

---

## 1. コンポーネント設計

### GoThere.astro — Props

```typescript
interface Props {
  facilityId: string    // fishing-facility コレクションの ID（例: "west-japan/mie/fishing-park-triton"）
}
```

`facilityId` だけを受け取り、コンポーネント内で `getEntry()` して lat/lng・prefecture・parking を自己解決する。  
MDX 側の記述を最小にする設計。

### 表示ロジック

```
GoThere.astro
│
├── 1. getEntry('fishingFacility', facilityId) でデータ取得
│
├── 2. Google Maps ルートボタン
│   └── lat/lng が存在する場合のみ表示
│       URL: https://www.google.com/maps/dir/?api=1&destination={lat},{lng}
│
├── 3. 宿泊アフィリ（常時表示）
│   ├── AffiliateCard id="travel/jalan-net"
│   └── AffiliateCard id="travel/rakuten-travel"
│
├── 4. レンタカーアフィリ
│   └── parking が "なし" でない場合に表示
│       AffiliateCard id="travel/jalan-rentacar"
│
└── 5. 旅行検索（常時・補足）
    └── AffiliateCard id="travel/yahoo-travel"
```

### MDX での使い方

```mdx
<GoThere facilityId="west-japan/mie/fishing-park-triton" />
```

1行追加するだけ。lat/lng・prefecture・parking は自動取得。

---

## 2. 作成・変更ファイル

### 新規作成（1ファイル）

| ファイル | 内容 |
|---|---|
| `src/components/widgets/GoThere.astro` | メインコンポーネント |

### 変更（34施設の MDX）

各施設記事の「アクセス」セクション末尾に `<GoThere facilityId="..." />` を追加し、  
`import GoThere from '~/components/widgets/GoThere.astro'` をインポートに追記。

---

## 3. GoThere.astro 実装仕様

### ファイル全体構成

```astro
---
import { getEntry } from 'astro:content';
import AffiliateCard from '~/components/common/AffiliateCard.astro';

interface Props {
  facilityId: string;
}

const { facilityId } = Astro.props;
const entry = await getEntry('fishingFacility', facilityId);

const lat  = entry?.data.google_maps?.latitude;
const lng  = entry?.data.google_maps?.longitude;
const name = entry?.data.title ?? '';
const parking = entry?.data.facility_details?.amenities?.parking ?? '';

const hasLatLng    = lat != null && lng != null;
const hasParking   = parking !== 'なし' && parking !== '';
const mapsUrl      = hasLatLng
  ? `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`
  : null;
---

<!-- UI -->
```

### UI 構成（Tailwind）

```
┌─────────────────────────────────────────────┐
│  🧭 この施設へのアクセスを調べる              │  ← セクションヘッダ
├─────────────────────────────────────────────┤
│  [ Googleマップでルートを確認 ↗ ]             │  ← lat/lng あり時のみ
├─────────────────────────────────────────────┤
│  宿泊予約                                    │
│  ┌──────────────┐ ┌──────────────┐          │
│  │ じゃらんnet  │ │ 楽天トラベル │          │
│  └──────────────┘ └──────────────┘          │
├─────────────────────────────────────────────┤
│  レンタカー（駐車場あり施設のみ）            │
│  ┌──────────────────────────┐               │
│  │ じゃらんレンタカー        │               │
│  └──────────────────────────┘               │
├─────────────────────────────────────────────┤
│  旅行プランを探す                            │
│  ┌──────────────────────────┐               │
│  │ Yahoo!トラベル            │               │
│  └──────────────────────────┘               │
└─────────────────────────────────────────────┘
```

カラー・レイアウトは既存 `AffiliateCard` に合わせる（Tailwind / dark mode 対応）。

---

## 4. 実装ステップ（順序）

### Step 1 — GoThere.astro を作る

- [ ] `src/components/widgets/GoThere.astro` 新規作成
- [ ] `getEntry` でデータ取得・null ガード
- [ ] Google Maps ボタン（lat/lng あり時のみ表示）
- [ ] `AffiliateCard` で宿泊・レンタカー・旅行アフィリを表示
- [ ] Tailwind でスタイリング（dark mode 対応）

### Step 2 — ローカル動作確認

- [ ] 任意の施設1件に `<GoThere />` を仮追加して表示確認
- [ ] lat/lng なし施設で Google Maps ボタンが非表示になるか確認
- [ ] parking が "なし" の施設でレンタカー枠が非表示になるか確認
- [ ] dark mode での表示確認

### Step 3 — 近畿 21 施設へ展開

対象都道府県: `west-japan/hyogo`（8）/ `west-japan/osaka`（7）/ `west-japan/wakayama`（6）

各施設 MDX に以下を追加:
```mdx
import GoThere from '~/components/widgets/GoThere.astro';
// ...アクセスセクション末尾...
<GoThere facilityId="west-japan/hyogo/[slug]" />
```

- [ ] hyogo 8施設
- [ ] osaka 7施設
- [ ] wakayama 6施設

### Step 4 — 関東 4 施設・東海 9 施設へ展開

- [ ] kanagawa 2施設
- [ ] chiba 2施設
- [ ] aichi 3施設
- [ ] shizuoka 6施設

### Step 5 — ビルド・確認

- [ ] `pnpm build` エラーなし
- [ ] 施設ページ3件をブラウザで確認（近畿・関東・東海 各1件）
- [ ] アフィリリンクのクリック先が正しい（じゃらん・楽天・Yahoo）

---

## 5. 完了定義

| 確認項目 | 基準 |
|---|---|
| GoThere.astro が動く | 任意施設でアフィリカードが表示される |
| lat/lng 制御 | ない施設では Maps ボタンが非表示 |
| parking 制御 | "なし" 施設ではレンタカー枠が非表示 |
| 展開施設数 | 34施設すべてに設置済み |
| ビルド | エラーなし |
| 新規記事 | **0本**（コンポーネント展開のみ） |

---

## 6. Phase 2 へ持ち越すもの（スコープ外）

- Geolocation API による出発地の自動取得
- フェリー必須フラグ（frontmatter 拡張）
- 施設メタデータ外部ファイル化（`facility-access.ts`）
- 残り 136 施設への展開
- 宿泊プランあり/なしフラグ
