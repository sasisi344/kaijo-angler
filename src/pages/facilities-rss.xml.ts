import type { APIRoute } from "astro";
import { getRssString } from "@astrojs/rss";

import { SITE } from "astrowind:config";
import { getFishingFacilityEntries } from "~/utils/fishing-facility-collection";
import { getPrimaryDate } from "~/utils/date-helpers";

/** Fishing-facility RSS only; blog feed remains `/rss.xml`. */
export const GET: APIRoute = async () => {
  const all = await getFishingFacilityEntries();
  const site = import.meta.env.SITE;
  if (!site) {
    return new Response("SITE is not configured", { status: 500 });
  }

  const items = all
    .filter((p) => !p.data.draft && !p.id.endsWith("index"))
    .map((p) => {
      const slug = (p.data.slug || p.id.replace(/\\/g, "/")).replace(
        /\/index$/,
        "",
      );
      const link = new URL(`/fishing-facility/${slug}`, site).href;
      const pubDate = getPrimaryDate(p.data);
      return {
        link,
        title: p.data.title,
        description: p.data.description || p.data.excerpt || "",
        pubDate,
      };
    })
    .sort((a, b) => b.pubDate.getTime() - a.pubDate.getTime())
    .slice(0, 100);

  const rss = await getRssString({
    title: `${SITE.name} | 釣り場情報`,
    description:
      "日本全国の海上釣り堀・海釣り施設の新着・更新情報フィードです。",
    site,
    items,
    trailingSlash: SITE.trailingSlash,
  });

  return new Response(rss, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
};
