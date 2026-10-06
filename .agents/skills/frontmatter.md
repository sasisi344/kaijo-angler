# フロントマターテンプレート (fishing-facility)

## 基本原則
- **地名の重複排除**: `region` や `prefecture` にある情報は `tags` に入れないこと（例：「千葉県」「市原市」などはタグに不要）。
- **タグの役割**: 「ターゲット魚種」「サービスの特徴（手ぶらOK等）」に特化させる。
- **データソースの使い分け**:
  - `google_maps`: 共有リンクから自動取得・補完する客観データ。
  - `facility_details`: 記事から抽出、または独自調査すべきスペックデータ。

---
title: "施設名"
slug: "" # 小文字英字・ハイフン。空の場合はファイル名から自動生成
publishDate: 2024-03-21
lastmod: 2024-03-21
description: "記事の概要。250文字程度。検索結果やSNSシェア時に表示される重要な文章です。"
image: "/images/blog/noimage.jpg"
category: "ポイント紹介"
region: "center-japan" # east-japan | center-japan | west-japan
prefecture: "mie" # 都道府県スラッグ（小文字英字）
tags:
  - 海上釣り堀 # 施設種別
  - 手ぶらOK # サービス特徴
  - 真鯛 # ターゲット魚種
author: "さしし"
draft: false

# Google Maps から自動取得（補完対象）
google_maps:
  map_url: "https://maps.app.goo.gl/..."
  place_id: "none"
  plus_code: "none"
  latitude: 0.0
  longitude: 0.0
  address: "住所"
  phone: "電話番号"
  business_hours: "営業時間"
  website_url: "公式サイトURL"
  rating: 0.0

# 独自調査詳細（手動入力）
facility_details:
  average_price: "11,000円"
  target_fish: 
    - "真鯛"
    - "ブリ"
  reservation: "要確認（公式サイト参照）" 
  # 診断・分析用の任意項目。公式で確認できた値のみ記入し、不明・制限なしは書かない（推測で埋めない）
  rod_length_limit: 3.5 # 竿の長さ上限(m)
  rod_count_limit: 1 # 1人あたりの竿の本数上限
  verified_at: "2026-10-06" # 上記を公式で確認した日
  # 他: stocked_fish / wild_fish / price_min / price_max / price_type / includes_gear / beginner_friendly /
  #     family_friendly / hands_free / needs_ferry / ferry_info / access_minutes / reservation_type / reservation_url / sns
  #     facilityType（sea-pond | sea-park | other）はトップレベルに書く。詳細は .workspace/facility-data-update/README.md
  
  amenities:
    rental_tackle: true
    bait_sale: true
    toilet: "水洗あり"
    parking: "無料50台"
    processing: false
    bbq_area: false
---

### 運用ルール
- 記事の新規作成時は `google_maps.map_url` を入力し、`node scripts/update-facility-data.mjs` を実行して、他のGoogle Maps情報を自動で埋める。
- `average_price` などの施設情報は、本文のテーブルから自動抽出が可能（スクリプト実行時）。