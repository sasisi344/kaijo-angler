# affiliate-tags（アフィリエイトタグ管理）

アフィリエイト物販リンク（`src/content/affiliates/`）の**設計・ルール・商品情報の作業用フォルダ**。実装（JSON・コンポーネント）に反映する前に、ここで魚種×商品タイプごとの選定とタグ情報を管理する。

```
affiliate-tags/
└── 物販/                      # タックル等の物販（Amazon/楽天/Yahoo!）
    ├── README.md              # 記載ルール（id・fishパラメータ・リンク形式・追加手順）
    ├── fish-parameters.md     # fishパラメータ一覧（魚種コード）と表記対応
    ├── product-types.md       # 商品タイプ（rod/reel/line/rig/hook/bait…）と必須項目・価格帯
    └── fish/                  # 魚種別の商品台帳（1魚種=1ファイル）
        └── {fishコード}.md
```

- 関連タスク: [[subtask]]項目6（タックルカード再編成）／Research: [[tackle-research-phase1]]
- 将来、旅行（`travel`）・料理（`cooking`）の管理が必要になれば`affiliate-tags/`直下に兄弟フォルダを追加する
