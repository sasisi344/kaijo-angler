// トップページ「筆者が選んだ海上釣り堀」の候補（KA-PORTAL-03、2026-11-19 筆者決定、2026-11-20 筆者が6施設に絞った）
// 選び方: 地域ランキングの上位のうち営業中の sea-pond から、地域ごとに1施設を筆者が選んだ（辨屋・ひるがは外した）。
// トップは縦3×横2のカードで並べる。
// 理由の1行は施設記事の事実と筆者の判断（「私なら〜」）だけで書く。Googleレビューの点数は使わない。
// 休業期間（facility_details.seasonal_closures）に入った施設は、ブラウザーで閲覧日を見て外す。
export interface TopPick {
  slug: string; // 施設記事の slug
  area: string; // 地域ランキングの区分
  reason: string;
}

export const topPicks: TopPick[] = [
  {
    slug: 'kaijo-tsuribori-maruya',
    area: '関東・東海',
    reason: '富士山を望む沼津・西浦で、ブリ・マダイを狙える本格派。関東・東海から行くなら、私はまずここを候補にします。',
  },
  {
    slug: 'tsuribori-shotokumaru',
    area: '三重・和歌山',
    reason: '紀伊長島ICから7分。予約カレンダーで空きが見やすく、平日は30分3,000円の「ちょい釣り」も。初めての人に私が勧めたい1軒です。',
  },
  {
    slug: 'suihou-fishing-pond',
    area: '関西',
    reason: '姫路から船で25分、坊勢島の大きなイケス群。小学生8,000円〜（渡船料込み）で、家族でも料金の見通しが立てやすい施設です。',
  },
  {
    slug: 'fishing-land-hyuga',
    area: '日本海・北陸',
    reason: '日向湖にある20m×20mの大きなイケスで、青物の引きと本格的に向き合える施設です。',
  },
  {
    slug: 'kaijo-tsuribori-kaiyu',
    area: '中国・四国',
    reason: '広島・阿多田島の離島の釣り堀。タイ・ブリ・ヒラマサ・カンパチ・シマアジなど、季節ごとの放流魚が多彩です。',
  },
  {
    slug: 'tsuribori-hamakatsu',
    area: '九州・沖縄',
    reason: '女性7,700円〜で、13魚種を放流。BBQのレンタルスペースもあり、家族や仲間のグループで釣りとBBQを楽しめます。',
  },
];
