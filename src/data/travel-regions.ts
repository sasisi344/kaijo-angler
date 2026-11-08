// 釣り旅ガイド（column/travel）の地域分け。ヘッダーの地域メニューと /column/travel/ の地域セクションで使う。
// 新しい旅記事を足したら、ここに slug（travel/ 以下のパス）を追加する。どこにも無い記事は「全国・旅の準備」に入る。
export interface TravelRegion {
  id: string;
  name: string;
  areas: string;
  slugs: string[];
}

export const travelRegions: TravelRegion[] = [
  {
    id: 'kanto',
    name: '関東',
    areas: '千葉・南房総／神奈川・三浦半島',
    slugs: [
      'chiba-minamiboso-trip',
      'february-chiba-strawberry-picking-trip',
      'kanagawa-miura-trip',
      'access/access-kanto',
      'access/chiba-minamiboso-access-guide',
    ],
  },
  {
    id: 'tokai',
    name: '東海',
    areas: '静岡・伊豆・浜名湖／三重・伊勢志摩',
    slugs: [
      'hamanako-unagi-trip',
      'november-izu-autumn-leaves-trip',
      'ise-shima-model-plan',
      'may-toshijima-toba-trip',
      'january-minamiise-onsen-trip',
      'access/access-tokai',
      'access/hamanako-access-guide',
      'access/ise-shima-access-guide',
    ],
  },
  {
    id: 'kinki',
    name: '近畿・北陸',
    areas: '和歌山・淡路島／福井・若狭',
    slugs: [
      'wakayama-kii-trip',
      'shirahama-onsen-trip',
      'march-yuasa-yura-soy-sauce-trip',
      'awaji-family-trip',
      'fukui-mikata-goko',
      'access/access-kinki',
    ],
  },
  {
    id: 'chugoku-shikoku',
    name: '中国・四国',
    areas: '瀬戸内・しまなみ／香川・徳島／山口',
    slugs: [
      'shimanami-cycling-fishing',
      'kagawa-shodoshima-trip',
      'july-naruto-whirlpool-trip',
      'september-shimonoseki-fugu-trip',
      'access/setouchi-access-guide',
    ],
  },
  {
    id: 'kyushu',
    name: '九州',
    areas: '熊本・天草／長崎・五島／大分／鹿児島',
    slugs: [
      'kumamoto-amakusa-trip',
      'nagasaki-goto-trip',
      'oita-saganoseki-trip',
      'december-kagoshima-ibusuki-trip',
      'access/access-kyushu',
    ],
  },
];

/** 地域に属さない記事（全国の季節特集・旅の準備）のセクションのアンカー */
export const travelNationwideId = 'nationwide';
