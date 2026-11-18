import { getCollection, type CollectionEntry } from 'astro:content';

type FishingFacilityEntry = CollectionEntry<'fishing-facility'>;

let cache: Promise<FishingFacilityEntry[]> | undefined;

/**
 * `getCollection('fishing-facility')` ???????????????????
 * ???????????????????????????????
 */
export async function getFishingFacilityEntries(): Promise<FishingFacilityEntry[]> {
  if (!cache) {
    cache = getCollection('fishing-facility');
  }
  return cache;
}

/**
 * 掲載中の施設（下書き・地域/県の index・閉業を除く。休止は含む）の件数と都道府県数。
 * 紹介文・統計欄の数字は手書きせず、ここから出す。
 */
export async function getListedFacilityStats(): Promise<{ facilities: number; prefectures: number }> {
  const entries = await getFishingFacilityEntries();
  const listed = entries.filter(
    (post) =>
      !post.data.draft &&
      !post.id.endsWith('index') &&
      post.data.facility_details &&
      post.data.status !== 'closed'
  );
  const prefectures = new Set(listed.map((post) => post.data.prefecture).filter(Boolean));
  return { facilities: listed.length, prefectures: prefectures.size };
}
