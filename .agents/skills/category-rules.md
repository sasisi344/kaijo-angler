# 海上アングラー カテゴリー構成・運用ルール (Astro版)

本プロジェクト「海上アングラー」における記事のカテゴリー構成、ディレクトリ構造、フロントマターの記述規則、およびライティングルールを定義する。

---

## 1. ブログ記事の全体構成 (Directory Structure)

記事は `src/content/blog/` 配下の3つのディレクトリ（Collections）に分類される。

### ① 施設紹介 (fishing-facility)
全国の海上釣り堀・海釣り施設を紹介するメインコンテンツ。
- **パス**: `src/content/blog/fishing-facility/[region]/[prefecture]/[facility-slug]/index.mdx`
- **リージョン (region)**: `east-japan` (東日本), `center-japan` (中部), `west-japan` (西日本)
- **例**: `src/content/blog/fishing-facility/west-japan/mie/kaijo-tsuribori-benya/index.mdx`

### ② 攻略法 (tactics)
ターゲット魚種別の釣り方や、初心者向けガイド、道具紹介。
- **パス**: `src/content/blog/tactics/[sub-category]/[article-slug]/index.mdx`
- **サブカテゴリー**:
    - `beginner`: 初心者ガイド
    - `fish-strategy`: 魚種別攻略
    - `gear`: 道具紹介 (リール、ロッド、仕掛け)

### ③ コラム (column)
釣行記（遠征記）や、釣りにまつわる豆知識。
- **パス**: `src/content/blog/column/[sub-category]/[article-slug]/index.mdx`
- **サブカテゴリー**:
    - `travel`: 遠征記・釣行記
    - `trivia`: 魚の知識・料理・豆知識

---

## 2. フロントマター (Frontmatter) 記述規則

Astroのスキーマ（`src/content/config.ts`）に準拠した記述を行うこと。

### 共通必須項目 (Common Fields)
| フィールド | 指定内容 | 備考 |
| :--- | :--- | :--- |
| `title` | 記事タイトル | 32〜60文字程度 |
| `category` | カテゴリー名 | 日本語（後述のリスト参照） |
| `tags` | タグ | 日本語配列、5つ設定 |
| `description` | 記事の要約 | 200文字程度。ユーザーメリットを強調 |
| `publishDate` | 公開日 | `YYYY-MM-DD` 形式 |
| `lastmod` | 更新日 | `YYYY-MM-DD` 形式 (任意) |
| `slug` | URLスラッグ | 半角英数字ハイフン |
| `image` | サムネイル画像 | `./cover.jpg` (クォートなし) |

### カテゴリー名 (`category` フィールド) の指定
- 施設紹介記事: `施設紹介`
- 攻略法記事: `初心者ガイド`, `魚種別攻略`, `道具紹介`
- コラム記事: `遠征記`, `豆知識`

### 施設紹介記事 (fishing-facility) 特有の構造
施設紹介では以下の階層構造を持つフィールドを正確に記述する。

```yaml
prefecture: "mie"           # 都道府県名（小文字英語）
region: "west-japan"       # east-japan / center-japan / west-japan
google_maps:
  map_url: "URL"           # Google Maps 共有URL
  latitude: 34.1234        # 緯度（数値）
  longitude: 136.1234      # 経度（数値）
  address: "住所文字列"
facility_details:
  average_price: "価格帯"  # 文字列
  target_fish:             # 配列
    - マダイ
    - シマアジ
  reservation: "要予約"    # 文字列
  amenities:
    rental_tackle: true    # boolean
    bait_sale: true        # boolean
    toilet: "あり"         # 文字列
    parking: "あり"        # 文字列
```

---

## 3. 画像 (image) の運用ルール

- **ファイル名**: 常に `./cover.jpg` (小文字) とする。
- **配置**: 記事 `.mdx` と同一フォルダ。
- **生成**: スタイルは「フォトリアル・シネマティック」。
- **禁止事項**: 画像内へのテキスト（文字）入れは厳禁。

---

## 4. ライティング・マークアップルール

- **ファイル拡張子**: 新規記事は `.mdx` を使用。
- **強調表現**: `**太字**` はプレビュー用。最終納品（Production）時は `<strong>強調テキスト</strong>` へ変換。
- **コンポーネント**: リールやロッドの紹介には `<TackleCard id="..." />` を積極的に活用する。
- **内部リンク**: `[テキスト](./slug)` または absolute path を使用。リンク先が存在するか `list_dir` で必ず確認する。

---

## 5. サイトのトーン＆マナー

- **一人称**: 「さしし」（釣り歴20年のベテランライター）。
- **スタンス**: 初心者に優しく、ベテランも納得する「信頼できる専門家」。
- **コンセプト**: 海上釣り堀を「極上のレジャー体験」として価値づける。
