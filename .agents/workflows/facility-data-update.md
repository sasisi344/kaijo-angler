---
description: 海上釣り堀・釣り施設の詳細データをGoogleマップおよび本文から自動抽出・更新する
---

// turbo-all

1. `.env` ファイルに `MAPS_API_KEY` が正しく設定されていることを確認する（存在しない場合は作成して設定する）。
2. 対象の地域に合わせて以下のコマンドのいずれかを実行し、全記事のデータを同期する。
    - 東日本: `node scripts/update-facility-east.mjs`
    - 中日本: `node scripts/update-facility-center.mjs`（三重県も含む）
    - 西日本: `node scripts/update-facility-west.mjs`
3. 同期完了後、1～2件の記事を開いてフロントマターが正常に更新されていることを確認する。
    - `tags` から都道府県やエリア名が消去されていること。
    - `google_maps` の座標や電話番号が埋まっていること。
    - `facility_details` の料金などが本文から拾えていること。
