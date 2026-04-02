---
trigger: manual
---

# 海上アングラー（Kaijo Angler）画像生成ガイドライン

このスキルは、プロジェクト全体の画像を高品質かつバリエーション豊かに生成するためのものです。AIが陥りやすい「ただの海釣り」との混同を避け、各記事の文脈（コンテキスト）を反映した画像を生成します。

## 1. デザインコンセプト
- **スタイル**: ハイパーリアルな写真（Hyper-realistic photography）。
- **トーン**: プレミアム、ダイナミック、または静謐な高級感。
- **構成**: 主題にフォーカスし、テキストは一切含めない（`--no text`）。

## 2. 三大必須要素（リアリティの確保）
AIが「海上釣り堀」を正しく描写するために、以下のいずれか（または複数）を状況に合わせてプロンプトに含めます。これらは固定された構図ではなく、シーンに合わせて柔軟に配置します。

1.  **管理された区画（Managed Structure）**: 
    - 木製や金属製の「正方形・長方形の浮きフレーム（floating frames）」や「生け簀（Ikesu pond）」の示唆。
2.  **特有の足場と装備（Specific Facilities）**: 
    - 「木製の浮き桟橋（wooden pontoons / floating platforms）」や、それを支える「黒いフロート（black barrel floats）」。
3.  **穏やかな海域（Calm Bay Environment）**: 
    - 外洋ではなく、山や丘に囲まれた「穏やかな内湾（protected bay）」の背景。

## 3. 動的なプロンプト構築ロジック
記事（MDX）の内容を解析し、以下の4つのレイヤーを組み合わせてプロンプトを作成します。これにより、同じ魚種でも記事ごとに異なる表情の画像が生まれます。

| レイヤー | 取得ソース | プロンプトへの反映例 |
| :--- | :--- | :--- |
| **主題（Subject）** | `target_fish` / 記事タイトル | `A vibrant Red Sea Bream`, `Fresh Yellowtail on stone` |
| **状況（Context）** | 記事の本文・要約 | `splashing in water` (アクション系), `resting on wooden table` (グルメ系) |
| **環境（Environment）** | 上記「三大必須要素」から選択 | `floating net pen backdrop`, `on a wooden pontoon with black floats` |
| **ライティング（Mood）** | 記事のトーン、タグ | `golden hour sunlight`, `soft studio lighting`, `cinematic moody lighting` |

## 4. 実行コマンド
```powershell
node scripts/image-tools/generate-image.js "<PROMPT>" "<OUTPUT_PATH>"
```

### プロンプト構成のベストプラクティス（例）
- **アクション・技術解説記事向け（ダイナミック）**:
  `Hyper-realistic action shot of [Fish Name] jumping in a managed sea fishing pond, water splashing, visible floating wooden square frames in the background, golden hour sunlight, 8k resolution, --ar 3:2 --no text`
- **グルメ・捌き・理論記事向け（プレミアム）**:
  `High-end editorial photography of fresh [Fish Name] resting on a premium dark stone slate, soft cinematic lighting, focus on scale texture and freshness, professional studio setting, --ar 3:2 --no text`

## 5. ワークフロー
1.  **記事解析**: 対象記事の `frontmatter` と本文冒頭を読み、今回の「見せ場」がアクションなのか、静物（プレミアム感）なのかを判断。
2.  **要素の選択**: 三大必須要素のうち、そのシーンに最も自然に馴染むものを1つ以上選定。
3.  **プロンプト生成**: 英語でダイナミックなプロンプトを構築し、`generate-image.js` を実行。
4.  **配置と登録**: ディレクトリに `cover.jpg` として保存し、`image` フィールドを更新。
