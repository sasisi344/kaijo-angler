import type { ImageMetadata } from "astro";
import { getFishingFacilityEntries } from "~/utils/fishing-facility-collection";

export const prerender = true;

export async function GET() {
  const allFacilities = await getFishingFacilityEntries();

  const facilities = allFacilities
    .filter((post) => !post.data.draft && !post.id.endsWith("index"))
    .map((post) => {
      const {
        title,
        prefecture,
        region,
        facilityType,
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
        image: imageUrl,
        lat: google_maps?.latitude,
        lng: google_maps?.longitude,
        rating: google_maps?.rating,
        tags: post.data.tags || [],
        target_fish: facility_details?.target_fish || [],
        rental: facility_details?.amenities?.rental_tackle,
        toilet: facility_details?.amenities?.toilet,
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
