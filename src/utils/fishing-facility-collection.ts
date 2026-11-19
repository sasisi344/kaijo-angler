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
 * 今行く候補として載せる施設。閉業・休止（再開日未定の status）を除き、期間のある休業は含む（2026-11-19 筆者決定）。
 * トップ・施設一覧の件数と検索はここを使う。地図は休止も所在として出すので API 側で別に抽出する。
 */
export async function getCurrentFacilities(): Promise<FishingFacilityEntry[]> {
  const entries = await getFishingFacilityEntries();
  return entries.filter(
    (post) =>
      !post.data.draft &&
      !post.id.endsWith('index') &&
      !post.data.status &&
      post.data.slug &&
      post.data.category === '施設紹介'
  );
}

/** 施設の種類ごとの件数（getCurrentFacilities が母数） */
export function countByType(entries: FishingFacilityEntry[], type: string): number {
  return entries.filter((p) => p.data.facilityType === type).length;
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
