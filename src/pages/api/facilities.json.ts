import type { ImageMetadata } from "astro";
import { getFishingFacilityEntries } from "~/utils/fishing-facility-collection";
import { evaluateFirstTimer, isFirstTimerPick } from "~/utils/first-timer";

export const prerender = true;

export async function GET() {
  const allFacilities = await getFishingFacilityEntries();

  const facilities = allFacilities
    // 閉業は今行く候補でも所在の案内でもないので地図から外す（記事は記録として残る）。
    // 休止（suspended）は所在を残し、status で地図側が表示と抽選を分ける。
    .filter(
      (post) =>
        !post.data.draft &&
        !post.id.endsWith("index") &&
        post.data.status !== "closed",
    )
    .map((post) => {
      const {
        title,
        prefecture,
        region,
        facilityType,
        status,
        image,
        featureimage,
        google_maps,
        facility_details,
      } = post.data;

      const extractSrc = (
        img: ImageMetadata | string | undefined,
      ): string | null => {
        if (!img) return null;
        return typeof img === "string" ? img : img.src;
      };
      const imageUrl = extractSrc(image) ?? extractSrc(featureimage);

      return {
        id: post.id,
        slug: post.id,
        title,
        prefecture,
        region,
        facilityType,
        status: status ?? null,
        image: imageUrl,
        lat: google_maps?.latitude,
        lng: google_maps?.longitude,
        rating: google_maps?.rating,
        tags: post.data.tags || [],
        target_fish: facility_details?.target_fish || [],
        rental: facility_details?.amenities?.rental_tackle,
        toilet: facility_details?.amenities?.toilet,
        closures: (facility_details?.seasonal_closures ?? []).map((c) => ({
          from: c.from,
          to: c.to ?? null,
          reopen: c.reopen ?? null,
          reason: c.reason ?? null,
          verified_at: c.verified_at ?? null,
        })),
        firstTimer: (() => {
          const result = evaluateFirstTimer(facility_details);
          return result
            ? { level: result.level, pick: isFirstTimerPick(result) }
            : null;
        })(),
      };
    })
    // Filter out facilities without coordinates
    .filter((f) => f.lat && f.lng);

  return new Response(JSON.stringify(facilities), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
