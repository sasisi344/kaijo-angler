# 海上アングラー — 画像のトーンとキャラクター性

作成: 2026-11-07（CC。`.agents/skills/image-create.md`・`category-rules.md` §3・`scripts/image-tools/generate-image.js` の方針をまとめたもの）。画像の流れは `hq/org/README.md` §4。

## 1. 絵の人格（キャラクター性）

**海上釣り堀の一日を、上質なレジャーとして見せる写真。**

- 主役は魚・生け簀・釣りの場面・魚料理。「行ってみたい」「大物を釣って食べたい」と思える一枚にする
- ただの海釣りに見せない。次の3要素のうち1つ以上を、場面に合わせて入れる
  1. 生け簀の区画（`floating square frames`、`Ikesu pond`）
  2. 足場（`wooden pontoons`、`black barrel floats`）
  3. 穏やかな内湾（`protected bay surrounded by hills`）
- 冬の記事は、晴れた冬の朝の澄んだ空気、湯気の立つ鍋、脂ののったブリを軸にする

## 2. トーン

| 項目 | 指定 |
|---|---|
| スタイル | ハイパーリアルな写真。シネマティック、プレミアム |
| 光 | 記事の雰囲気で選ぶ（`golden hour sunlight`、`soft studio lighting` など） |
| 避ける | サムネイルの文字・数字、ロゴ・看板、イラスト調、外洋の荒れた海、実在の施設や人物だと読める描写 |

## 3. 種類ごとの仕様

| 種類 | 仕様 |
|---|---|
| サムネイル（cover） | 16:9。記事と同じフォルダに `cover.jpg`。frontmatter は `image: ./cover.jpg`（クォートなし）。alt 相当の説明を報告書に書く |
| 説明画像 | 文章や表だけでは分かりにくい箇所だけ。1記事2枚まで。文字を入れたほうが分かりやすいと判断したら入れてよい（2026-11-07 ユーザー決定）。生成は `--diagram` を付ける（§5） |

新規生成しないもの:

- `intelligence` の記事は共通画像 `~/assets/images/intelligence-default.png` を使う
- `_covers/` の共通カバーを使う記事は、それを変えない（指示書にあるときだけ作る）
- 地域ハブは `kaijo-matome-hub` スキル §6 に従い、`cover-matome.jpg` にする

## 4. プロンプトの型（英語）

主題・状況・環境・光の4層で組む。層の選び方は `.agents/skills/image-create.md` §3。

- 動きのある記事: `Hyper-realistic action shot of <魚> in a managed sea fishing pond, <場面>, floating wooden square frames in the background, calm protected bay, <光>, 16:9 composition, no text`
- 料理・持ち帰りの記事: `High-end editorial photograph of <料理や魚>, <器や場面>, soft cinematic lighting, focus on texture and freshness, 16:9 composition, no text`
- 施設の記事: `target_fish` の代表魚を主役にし、特定の施設そのものの写真に見せない
- 文字入りの説明画像: `Explanatory diagram about <何を>. Layout: <構図>. Use only these Japanese labels, copied exactly: 「<文言1>」「<文言2>」. Light background, simple flat illustration, 16:9 composition.`

スクリプトは `--ar` などの指定を解釈しない。比率と「文字なし」は文章で書く。

## 5. 生成

サイトのルートで実行する。`.env` の `GEMINI_API_KEY` を使う。

```powershell
node scripts/image-tools/generate-image.js "<PROMPT>" "<記事のフォルダ>/cover.jpg"
```

説明画像は最後に `--diagram` を付ける（文字を入れてよい設定になる）。

```powershell
node scripts/image-tools/generate-image.js "<PROMPT>" "<記事のフォルダ>/fig-01.jpg" --diagram
```

- 失敗してもエラーの終了コードを返さないことがある。**実行後は、ファイルができたことを必ず確かめる**
- 生成したら画像を開き、文字の混入と不自然な構造を確かめる
- **画像内の日本語は1文字ずつ確かめる**。入れる文言は短いラベルにしてプロンプトにそのまま書き、生成後にプロンプトと本文の両方と見比べる。誤字・崩れた字・余計な字が残っていたら、そのまま使わない。ラベルと指し示す線の位置が内容に合っているかも確かめる。報告書に画像内の文言を書く
- やり直しは1枚につき1回まで。文字の誤りが直らないときは、文字なしの図にするか、記事の表で書く。2回目もよくなければ、残して報告書に書く
- 生成できないときは、プロンプトと保存先を報告書に書いて次へ進む（`hq/org/README.md` §4）
