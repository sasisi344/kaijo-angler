/** Region slug \u2192 Japanese labels for /fishing-facility routes */
export const FISHING_FACILITY_REGION_LABEL: Record<string, string> = {
  'east-japan': '\u6771\u65e5\u672c',
  'center-japan': '\u4e2d\u65e5\u672c',
  'west-japan': '\u897f\u65e5\u672c',
};

export const FISHING_FACILITY_AREA_SLUG_LABEL: Record<string, string> = {
  hokkaido: '\u5317\u6d77\u9053',
  aomori: '\u9752\u68ee\u770c',
  iwate: '\u5ca9\u624b\u770c',
  miyagi: '\u5bae\u57ce\u770c',
  akita: '\u79cb\u7530\u770c',
  yamagata: '\u5c71\u5f62\u770c',
  fukushima: '\u798f\u5cf6\u770c',
  ibaraki: '\u8328\u57ce\u770c',
  tochigi: '\u6803\u6728\u770c',
  gunma: '\u7fa4\u99ac\u770c',
  saitama: '\u57fc\u7389\u770c',
  chiba: '\u5343\u8449\u770c',
  tokyo: '\u6771\u4eac\u90fd',
  kanagawa: '\u795e\u5948\u5ddd\u770c',
  niigata: '\u65b0\u6f5f\u770c',
  toyama: '\u5bcc\u5c71\u770c',
  ishikawa: '\u77f3\u5ddd\u770c',
  fukui: '\u798f\u4e95\u770c',
  yamanashi: '\u5c71\u68a8\u770c',
  nagano: '\u9577\u91ce\u770c',
  gifu: '\u5c90\u961c\u770c',
  shizuoka: '\u9759\u5ca1\u770c',
  aichi: '\u611b\u77e5\u770c',
  mie: '\u4e09\u91cd\u770c',
  shiga: '\u6ecb\u8cc0\u770c',
  kyoto: '\u4eac\u90fd\u5e9c',
  osaka: '\u5927\u962a\u5e9c',
  hyogo: '\u5175\u5eab\u770c',
  nara: '\u5948\u826f\u770c',
  wakayama: '\u548c\u6b4c\u5c71\u770c',
  tottori: '\u9ce5\u53d6\u770c',
  shimane: '\u5cf6\u6839\u770c',
  okayama: '\u5ca1\u5c71\u770c',
  hiroshima: '\u5e83\u5cf6\u770c',
  yamaguchi: '\u5c71\u53e3\u770c',
  tokushima: '\u5fb3\u5cf6\u770c',
  kagawa: '\u9999\u5ddd\u770c',
  ehime: '\u611b\u5a9b\u770c',
  kochi: '\u9ad8\u77e5\u770c',
  fukuoka: '\u798f\u5186\u770c',
  saga: '\u4f50\u8cc0\u770c',
  nagasaki: '\u9577\u5d0e\u770c',
  kumamoto: '\u718a\u672c\u770c',
  oita: '\u5927\u5206\u770c',
  miyazaki: '\u5bae\u5d0e\u770c',
  kagoshima: '\u9e7f\u5150\u5cf6\u770c',
  okinawa: '\u6c96\u7e04\u770c',
  'shikoku-area': '\u56db\u56fd\u30a8\u30ea\u30a2',
};

export function labelForFishingAreaSlug(slug: string): string {
  return FISHING_FACILITY_AREA_SLUG_LABEL[slug] ?? slug;
}

export function labelForFishingRegionSlug(region: string): string {
  return FISHING_FACILITY_REGION_LABEL[region] ?? region;
}

export function getFishingFacilityIndexMetadata(slug: string, facilityCount: number): {
  title: string;
  description: string;
} {
  const parts = slug.split('/').filter(Boolean);
  const countPhrase = facilityCount > 0 ? `\u63b2\u8f09\u65bd\u8a2d${facilityCount}\u4ef6\u3002` : '';

  if (parts.length === 1) {
    const regionJa = labelForFishingRegionSlug(parts[0]);
    return {
      title: `${regionJa}\u30a8\u30ea\u30a2\u306e\u6d77\u4e0a\u91e3\u308a\u5800\u30fb\u6d77\u91e3\u308a\u65bd\u8a2d\u4e00\u89a7`,
      description: `${regionJa}\u30a8\u30ea\u30a2\u306e\u6d77\u4e0a\u91e3\u308a\u5800\u30fb\u6d77\u91e3\u308a\u65bd\u8a2d\u3092\u4e00\u89a7\u3067\u7d39\u4ecb\u3002${countPhrase}\u30a8\u30ea\u30a2\u5225\u306b\u6599\u91d1\u30fb\u55b6\u696d\u6642\u9593\u30fb\u30ec\u30f3\u30bf\u30eb\u306a\u3069\u306e\u60c5\u5831\u3092\u307e\u3068\u3081\u3066\u3044\u307e\u3059\u3002`,
    };
  }

  if (parts.length >= 2) {
    const regionJa = labelForFishingRegionSlug(parts[0]);
    const areaJa = labelForFishingAreaSlug(parts[1]);
    return {
      title: `${areaJa}\u306e\u6d77\u4e0a\u91e3\u308a\u5800\u30fb\u6d77\u91e3\u308a\u65bd\u8a2d\u4e00\u89a7\uff08${regionJa}\uff09`,
      description: `${areaJa}\u30a8\u30ea\u30a2\u306e\u6d77\u4e0a\u91e3\u308a\u5800\u30fb\u6d77\u91e3\u308a\u65bd\u8a2d\u3092\u4e00\u89a7\u3067\u7d39\u4ecb\u3002${countPhrase}${regionJa}\u30a8\u30ea\u30a2\u5185\u306e\u91e3\u308a\u5834\u60c5\u5831\u3092\u307e\u3068\u3081\u3066\u3044\u307e\u3059\u3002`,
    };
  }

  return {
    title: '\u91e3\u308a\u5834\u3092\u63a2\u3059',
    description:
      '\u65e5\u672c\u5168\u56fd\u306e\u6d77\u4e0a\u91e3\u308a\u5800\u30fb\u6d77\u91e3\u308a\u65bd\u8a2d\u3092\u30a8\u30ea\u30a2\u30fb\u90fd\u9053\u5e9c\u304b\u3089\u63a2\u305b\u307e\u3059\u3002',
  };
}

export function getFishingFacilityIndexHeadline(slug: string): string {
  const parts = slug.split('/').filter(Boolean);
  if (parts.length === 1) {
    return `${labelForFishingRegionSlug(parts[0])}\u30a8\u30ea\u30a2\u306e\u91e3\u308a\u5834`;
  }
  if (parts.length >= 2) {
    return `${labelForFishingAreaSlug(parts[1])}\u306e\u91e3\u308a\u5834\uff08${labelForFishingRegionSlug(parts[0])}\uff09`;
  }
  return '\u91e3\u308a\u5834\u3092\u63a2\u3059';
}

export type FacilityBreadcrumbItem = { name: string; href: string | null };

export function getFacilityBreadcrumbs(
  normalizedPostId: string,
  facilityTitle: string
): FacilityBreadcrumbItem[] {
  const id = normalizedPostId.replace(/\/index$/, '');
  const parts = id.split('/').filter(Boolean);
  if (parts.length < 2) {
    return [{ name: facilityTitle, href: null }];
  }

  const out: FacilityBreadcrumbItem[] = [
    { name: '\u30db\u30fc\u30e0', href: '/' },
    { name: '\u91e3\u308a\u5834\u3092\u63a2\u3059', href: '/fishing-facility/' },
  ];

  const region = parts[0];
  out.push({ name: labelForFishingRegionSlug(region), href: `/fishing-facility/${region}` });

  if (parts.length >= 3) {
    const prefSlug = parts[1];
    out.push({
      name: labelForFishingAreaSlug(prefSlug),
      href: `/fishing-facility/${region}/${prefSlug}`,
    });
  }

  out.push({ name: facilityTitle, href: null });
  return out;
}
