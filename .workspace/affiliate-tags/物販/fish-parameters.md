# fishパラメータ一覧

`fish`の値は下記コードのみ使用する。施設記事の`target_fish`（2026-09-30に正規化済み）との対応も併記。

| fishコード | 表記（target_fish） | 竿カテゴリ | 備考 | 台帳 |
|---|---|---|---|---|
| `madai` | マダイ | A 標準竿 | 放流数最多・入門の基準 | [madai](fish/madai.md) |
| `chinu` | クロダイ（チヌ） | A 標準竿 | 竿はマダイ・スズキと同じ商品。魚種は別カード | [chinu](fish/chinu.md) |
| `suzuki` | スズキ（シーバス） | A 標準竿 | 竿はマダイ・チヌと同じ商品でも`fish=suzuki`で別カード | [suzuki](fish/suzuki.md) |
| `shimaji` | シマアジ | A（探り・ソリッド穂先が理想） | ハリス1.5〜2.5号の繊細仕様 | [shimaji](fish/shimaji.md) |
| `buri` | ブリ・ハマチ・ワラサ・メジロ | C 青物竿 | 価格帯3段で個別設定 | [buri](fish/buri.md) |
| `kanpachi` | カンパチ | C 青物竿 | 価格帯3段で個別設定 | [kanpachi](fish/kanpachi.md) |
| `ishidai` | イシダイ | B 底物竿 | ハードロッカー S83MH | [ishidai](fish/ishidai.md) |
| `ishigakidai` | イシガキダイ | B 底物竿 | ハードロッカー S83MH | [ishigakidai](fish/ishigakidai.md) |
| `kue` | クエ（クエマス含む） | B 底物竿 | ハードロッカー S83MH | [kue](fish/kue.md) |
| `hata` | ハタ類（マハタ・キジハタ・ミーバイ等） | B 底物竿 | ハードロッカー S83MH | [hata](fish/hata.md) |
| `common` | （魚種なし） | — | ライフジャケット・クーラー・グリップ・氷点下パック等 | — |

**未着手（Research第2弾以降）**: `hiramasa`（ヒラマサ）・`aji`・`isaki`・`kawahagi`・`fugu`・`hirame`・`aoriika`・`mebaru`（メバル/カサゴ等の根魚）・`salmon` など。着手時にこの表へ追加する。

## 竿カテゴリ

- **A 標準竿**: 3〜3.5m・3号。マダイ・クロダイ・スズキ（共用商品、fishは別）
- **B 底物竿**: イシダイ・イシガキダイ・クエ・ハタ（共用商品、fishは別）。**シマノ ハードロッカー S83MH**
- **C 青物竿**: 3.5〜4m・4号。ブリ・カンパチは価格帯（entry/std/pro）で個別設定
