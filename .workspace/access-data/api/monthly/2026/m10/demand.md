# 需要の見える化（海上アングラー）

- 期間: 2026-10-01 〜 2026-10-31（GSC は 2026-10-31 まで）／国: Japan／判定の下限: ユーザー5人
- 作成: 2026-11-20T04:55:31.992Z（`node fetch.mjs demand`）。数字は API の値で、画面の CSV と混ぜない
- サイトの中央値（ユーザー5人以上の 134 ページ）: 深さ 57秒／読了 33%／指名（サイト内からの閲覧と再訪の平均） 10%／検索表示 136
- 検索表示: GSC＋Bing（bing-page.csv を合算）

## 見かた

「需要がある」を、検索の表示（＝探されている）と、来た人の行動（＝認められた）の両方で見る。スコアは到達・深さ・読了・指名の、サイト内での順位の平均（0〜100）。サイト内の相対値なので、サイトどうしでは比べない。収益クリックはスコアに入れず、収益化の観点で別に見る。

| 判定 | 件数 | 意味と打ち手 |
|---|--:|---|
| 本命 | 19 | 需要があり、読まれ、自分から見に来られている → 育てる（関連記事を増やす・収益導線を最優先で置く） |
| 隠れた需要 | 19 | 読まれ、指名もされるのに検索で見つかっていない → title・見出しに検索語、独立記事化、ハブからリンク |
| 検索で満足 | 16 | 検索から来て深く読むが、その先に進まない → 次の一歩（内部リンク・カード）をつくる |
| 期待はずれ | 32 | 検索の需要はあるのに浅く帰られている → 冒頭で答える、検索の意図に合わせ直す |
| 通過点 | 15 | サイト内から来るが浅い → ハブとして働いているか、行き先の記事を見る |
| 普通 | 33 | 目立った傾向なし |
| 未開拓 | 6 | 検索の表示は多い（記事の上位4分の1）のに読者がまだ少ない → title・description で来てもらう（クリック率） |
| 一覧・トップ | 27 | トップ・カテゴリ一覧など。記事と性質が違うので判定しない |
| データ不足 | 226 | ユーザー5人未満。判定しない |

## スコアの上位15ページ（＝本当に読まれているページ）

| ページ | スコア | ユーザー | 深さ（1人） | 読了 | サイト内から | 再訪 | 収益クリック | 検索表示 | 順位 |
|---|--:|--:|--:|--:|--:|--:|--:|--:|--:|
| `/column/trivia/tana-basics` | 84 | 23 | 72秒 | 87% | 23% | 13% | 0 | 204 | 6.5 |
| `/fishing-facility/akaguri-sea-fishing-park` | 82 | 31 | 68秒 | 58% | 8% | 26% | 0 | 192 | 9.3 |
| `/tactics/fish-strategy/madai/theory` | 82 | 23 | 270秒 | 48% | 10% | 17% | 0 | 385 | 6.9 |
| `/fishing-facility/tsuribori-maruyo` | 82 | 10 | 102秒 | 60% | 33% | 30% | 0 | 133 | 10.7 |
| `/fishing-facility/itoman-ikada-tsurigu-no-zousan` | 81 | 108 | 93秒 | 34% | 16% | 17% | 2 | 621 | 5.7 |
| `/fishing-facility/tsuruga-city-sea-fishing-park` | 79 | 36 | 93秒 | 36% | 22% | 8% | 1 | 251 | 8.8 |
| `/fishing-facility/west-japan/mie` | 79 | 26 | 88秒 | 35% | 23% | 19% | 0 | 267 | 18.5 |
| `/fishing-facility/hiruga-sea-fishing-pond` | 77 | 58 | 76秒 | 38% | 15% | 12% | 0 | 605 | 9.5 |
| `/column/trivia/seat-selection-strategy` | 76 | 31 | 67秒 | 58% | 17% | 6% | 0 | 120 | 6.1 |
| `/tactics/fish-strategy/hiramasa/advanced` | 73 | 21 | 204秒 | 52% | 4% | 10% | 0 | 180 | 8.7 |
| `/fishing-facility/suma-sea-fishing-park` | 71 | 9 | 67秒 | 56% | 40% | 22% | 0 | 9 | 8.3 |
| `/fishing-facility/fishing-park-toi` | 70 | 33 | 77秒 | 42% | 3% | 12% | 0 | 227 | 10.9 |
| `/tactics/gear/harris-importance` | 69 | 32 | 54秒 | 47% | 9% | 19% | 1 | 563 | 7.3 |
| `/fishing-facility/marusui-kaisan` | 69 | 14 | 79秒 | 43% | 15% | 7% | 0 | 96 | 11.9 |
| `/fishing-facility/kakata-fishing-pond` | 69 | 8 | 73秒 | 63% | 20% | 13% | 0 | 139 | 14.3 |

## 本命（19件。上位10件）

需要があり、読まれ、自分から見に来られている → 育てる（関連記事を増やす・収益導線を最優先で置く）

| ページ | スコア | ユーザー | 深さ（1人） | 読了 | サイト内から | 再訪 | 収益クリック | 検索表示 | 順位 |
|---|--:|--:|--:|--:|--:|--:|--:|--:|--:|
| `/column/trivia/tana-basics` | 84 | 23 | 72秒 | 87% | 23% | 13% | 0 | 204 | 6.5 |
| `/fishing-facility/akaguri-sea-fishing-park` | 82 | 31 | 68秒 | 58% | 8% | 26% | 0 | 192 | 9.3 |
| `/tactics/fish-strategy/madai/theory` | 82 | 23 | 270秒 | 48% | 10% | 17% | 0 | 385 | 6.9 |
| `/fishing-facility/itoman-ikada-tsurigu-no-zousan` | 81 | 108 | 93秒 | 34% | 16% | 17% | 2 | 621 | 5.7 |
| `/fishing-facility/tsuruga-city-sea-fishing-park` | 79 | 36 | 93秒 | 36% | 22% | 8% | 1 | 251 | 8.8 |
| `/fishing-facility/west-japan/mie` | 79 | 26 | 88秒 | 35% | 23% | 19% | 0 | 267 | 18.5 |
| `/fishing-facility/hiruga-sea-fishing-pond` | 77 | 58 | 76秒 | 38% | 15% | 12% | 0 | 605 | 9.5 |
| `/tactics/gear/harris-importance` | 69 | 32 | 54秒 | 47% | 9% | 19% | 1 | 563 | 7.3 |
| `/fishing-facility/kakata-fishing-pond` | 69 | 8 | 73秒 | 63% | 20% | 13% | 0 | 139 | 14.3 |
| `/fishing-facility/seapark-nyu` | 68 | 27 | 58秒 | 48% | 10% | 11% | 0 | 213 | 9.3 |

## 隠れた需要（19件。上位10件）

読まれ、指名もされるのに検索で見つかっていない → title・見出しに検索語、独立記事化、ハブからリンク

| ページ | スコア | ユーザー | 深さ（1人） | 読了 | サイト内から | 再訪 | 収益クリック | 検索表示 | 順位 |
|---|--:|--:|--:|--:|--:|--:|--:|--:|--:|
| `/fishing-facility/tsuribori-maruyo` | 82 | 10 | 102秒 | 60% | 33% | 30% | 0 | 133 | 10.7 |
| `/column/trivia/seat-selection-strategy` | 76 | 31 | 67秒 | 58% | 17% | 6% | 0 | 120 | 6.1 |
| `/fishing-facility/suma-sea-fishing-park` | 71 | 9 | 67秒 | 56% | 40% | 22% | 0 | 9 | 8.3 |
| `/fishing-facility/marusui-kaisan` | 69 | 14 | 79秒 | 43% | 15% | 7% | 0 | 96 | 11.9 |
| `/fishing-facility/amakusa-leisure-land` | 69 | 7 | 138秒 | 43% | 38% | 0% | 0 | 12 | 10.2 |
| `/fishing-facility/ishida-fisherina` | 67 | 11 | 67秒 | 36% | 11% | 36% | 0 | 11 | 9.2 |
| `/column/trivia/oxygen-depletion-summer` | 65 | 13 | 66秒 | 38% | 24% | 8% | 0 | 36 | 7.9 |
| `/fishing-facility/kaijo-tsuribori-fukujumaru` | 65 | 8 | 66秒 | 50% | 25% | 13% | 0 | 22 | 6.7 |
| `/fishing-facility/ousatsu-sea-fishing-center` | 60 | 9 | 62秒 | 33% | 30% | 33% | 0 | 43 | 7.1 |
| `/fishing-facility/kaijo-tsuribori-wako` | 57 | 9 | 82秒 | 33% | 0% | 22% | 0 | 48 | 9.1 |

## 検索で満足（16件。上位10件）

検索から来て深く読むが、その先に進まない → 次の一歩（内部リンク・カード）をつくる

| ページ | スコア | ユーザー | 深さ（1人） | 読了 | サイト内から | 再訪 | 収益クリック | 検索表示 | 順位 |
|---|--:|--:|--:|--:|--:|--:|--:|--:|--:|
| `/tactics/fish-strategy/hiramasa/advanced` | 73 | 21 | 204秒 | 52% | 4% | 10% | 0 | 180 | 8.7 |
| `/fishing-facility/fishing-park-toi` | 70 | 33 | 77秒 | 42% | 3% | 12% | 0 | 227 | 10.9 |
| `/fishing-facility/kamoike-sea-fishing-park` | 65 | 19 | 71秒 | 42% | 14% | 5% | 0 | 591 | 11.1 |
| `/fishing-facility/shibushi-bay-daikoku-dolphin-land` | 63 | 58 | 97秒 | 16% | 6% | 12% | 0 | 353 | 5 |
| `/column/trivia/tsuyu-rainy-day-strategy` | 62 | 33 | 127秒 | 30% | 0% | 6% | 0 | 313 | 6.1 |
| `/fishing-facility/kariyawan-fishing-center` | 61 | 23 | 68秒 | 39% | 5% | 9% | 1 | 311 | 15 |
| `/fishing-facility/anatani-aitai-fishing` | 60 | 11 | 89秒 | 55% | 0% | 9% | 0 | 495 | 8.7 |
| `/fishing-facility/totto-park-koshima` | 58 | 32 | 80秒 | 22% | 11% | 0% | 0 | 1213 | 8.4 |
| `/fishing-facility/mukai-pearl-marine` | 55 | 22 | 72秒 | 27% | 13% | 0% | 0 | 293 | 7.9 |
| `/fishing-facility/asamushi-sea-fishing-park` | 54 | 16 | 57秒 | 44% | 6% | 6% | 0 | 228 | 11.6 |

## 期待はずれ（32件。上位10件）

検索の需要はあるのに浅く帰られている → 冒頭で答える、検索の意図に合わせ直す

| ページ | スコア | ユーザー | 深さ（1人） | 読了 | サイト内から | 再訪 | 収益クリック | 検索表示 | 順位 |
|---|--:|--:|--:|--:|--:|--:|--:|--:|--:|
| `/fishing-facility/nanko-fishing-park` | 45 | 75 | 44秒 | 21% | 6% | 4% | 1 | 1134 | 10 |
| `/column/ranking/kansai` | 51 | 134 | 43秒 | 10% | 18% | 10% | 0 | 1117 | 6.2 |
| `/column/travel/fish-shipping-guide` | 62 | 63 | 60秒 | 32% | 7% | 13% | 0 | 988 | 8.3 |
| `/fishing-facility/kaijo-tsuribori-benya` | 31 | 8 | 45秒 | 25% | 13% | 0% | 0 | 738 | 10.1 |
| `/fishing-facility/kaijo-tsuribori-kaiyu` | 62 | 28 | 58秒 | 32% | 14% | 11% | 0 | 701 | 9.1 |
| `/fishing-facility/sendai-port-central-park-sea-square` | 45 | 26 | 43秒 | 15% | 13% | 8% | 0 | 621 | 9.2 |
| `/fishing-facility/west-japan/hiroshima` | 52 | 22 | 28秒 | 68% | 8% | 5% | 0 | 459 | 11.5 |
| `/fishing-facility/naoetsu-port-3rd-east-breakwater` | 31 | 11 | 53秒 | 18% | 0% | 0% | 0 | 413 | 9.9 |
| `/fishing-facility/maizuru-shinkai-park` | 41 | 26 | 36秒 | 15% | 13% | 4% | 0 | 370 | 8.1 |
| `/fishing-facility/himeji-city-fishing-center` | 41 | 59 | 37秒 | 14% | 9% | 5% | 1 | 354 | 3.6 |

## 未開拓（6件。上位10件）

検索の表示は多い（記事の上位4分の1）のに読者がまだ少ない → title・description で来てもらう（クリック率）

| ページ | スコア | ユーザー | 深さ（1人） | 読了 | サイト内から | 再訪 | 収益クリック | 検索表示 | 順位 |
|---|--:|--:|--:|--:|--:|--:|--:|--:|--:|
| `/fishing-facility/fishing-rainbow` | - | 2 | 99秒 | 50% | 0% | 0% | 0 | 470 | 8.5 |
| `/column/trivia/cloudy-day-advantage` | - | 2 | 42秒 | 0% | 0% | 0% | 0 | 299 | 8 |
| `/fishing-facility/saikakizaki-seapark` | - | 3 | 27秒 | 0% | 40% | 0% | 0 | 258 | 9.9 |
| `/fishing-facility/tomakomai-port-sea-fishing-facility` | - | 4 | 45秒 | 25% | 20% | 0% | 0 | 147 | 14.6 |
| `/column/trivia/why-madai-red` | - | 0 | 0秒 | - | 0% | 0% | 0 | 123 | 8.5 |
| `/fishing-facility/west-japan/kagoshima` | - | 3 | 34秒 | 67% | 0% | 0% | 0 | 109 | 12 |

## ジャンル別（どの話題が読まれているか）

| ジャンル | ページ | ユーザー | 深さ（1人） | 読了 | サイト内からの閲覧 | 収益クリック | 検索表示 | 本命・隠れた需要 |
|---|--:|--:|--:|--:|--:|--:|--:|--:|
| fishing-facility | 149 | 1760 | 62秒 | 31% | 13% | 18 | 22940 | 27 |
| column | 119 | 607 | 53秒 | 29% | 15% | 1 | 6238 | 6 |
| tactics | 93 | 346 | 94秒 | 33% | 8% | 7 | 4455 | 5 |
| （トップ・単独ページ） | 7 | 35 | 17秒 | 29% | 24% | 0 | 410 | 0 |
| blog | 21 | 5 | 14秒 | 20% | 0% | 0 | 140 | 0 |
| 2025 | 2 | 2 | 1秒 | 50% | 0% | 0 | 0 | 0 |
| category | 2 | 0 | 0秒 | - | - | 0 | 3 | 0 |

## 注意

- 読了は GA4 の scroll（ページの90%）か、サイトの読了イベント（article_read_complete・chapter_complete）の人数の多いほう。短いページは読了が高く出る
- 「サイト内から」は（閲覧数−入口数）÷閲覧数。サイト内のリンクから自分で開いた閲覧の割合
- ユーザーが少ないサイトでは判定が揺れる。2か月続けて同じ判定になったページを打ち手の対象にする
