import type { CollectionEntry } from "astro:content";

type FishingFacilityData = CollectionEntry<"fishing-facility">["data"];

export function ensureDate(d: Date | string | unknown): Date {
  if (d instanceof Date) return d;
  if (typeof d === "string") return new Date(d);
  return new Date(0);
}

export function getPrimaryDate(data: FishingFacilityData): Date {
  return ensureDate(
    data.publishDate ?? data.date ?? data.updated ?? data.lastmod,
  );
}
