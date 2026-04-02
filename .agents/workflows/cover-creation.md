---
description: サムネイル画像作成
---

// turbo-all

1. 対象記事のフロントマター情報を確認します。
   - `title`: 記事の主題。
   - `description`: 画像のトーンや補足情報のヒント。
   - `facility_details.target_fish`: 生成のメインとなる魚種を特定します。
   - `tags`: 画像に含めるべきキーワード（例: BBQ、家族、高級等）。
2. [image-crate.md](file:///c:/Users/sasis\344dev/kaijyo-fishing/.agent/skills/image-crate.md) のルールに従い、フロントマターの内容を反映させた英語プロンプト（`nanobanana_prompt`）を作成します。
   - **魚種の特定**: `target_fish` に記載されている代表的な魚（真鯛、ブリ等）をプロンプトのメインにします。
   - **情景描写**: `description` や `tags` から、ダイナミック、静謐、プレミアム、レジャー、BBQといった雰囲気を抽出します。
   - **Aspect Ratio**: 16:9（thumbnail）または 3:2（eyecatch/infographic）を必ず含めます。
3. 作成したプロンプトを使用して、以下のコマンドで画像を生成します。
   ```bash
   node scripts/Antigravity-nanobana/generate-image.js "<nanobanana_prompt>" "src/content/blog/fishing-facility/<path-to-facility>/cover.jpg"
   ```
   ※ `<path-to-facility>` は対象施設のディレクトリ（例: `center-japan/aichi/bakucho-mihama-fishing-park`）に置き換えてください。
   ※ プロンプト内の二重引用符は適切にエスケープしてください。
4. 生成された画像を `src/content/blog/fishing-facility/.../index.md` の `image` フィールド（フロントマター）に指定します。
   ```yaml
   image: cover.jpg
   ```
5. `image-crate.md` の記述に基づき、SEO用の日本語ALTテキストを作成し、必要に応じてメタデータに追加します。
