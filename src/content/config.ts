import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const metadataDefinition = () =>
  z
    .object({
      title: z.string().optional(),
      ignoreTitleTemplate: z.boolean().optional(),

      canonical: z.string().url().optional(),

      robots: z
        .object({
          index: z.boolean().optional(),
          follow: z.boolean().optional(),
        })
        .optional(),

      description: z.string().optional(),

      openGraph: z
        .object({
          url: z.string().optional(),
          siteName: z.string().optional(),
          images: z
            .array(
              z.object({
                url: z.string(),
                width: z.number().optional(),
                height: z.number().optional(),
              })
            )
            .optional(),
          locale: z.string().optional(),
          type: z.string().optional(),
        })
        .optional(),

      twitter: z
        .object({
          handle: z.string().optional(),
          site: z.string().optional(),
          cardType: z.string().optional(),
        })
        .optional(),
    })
    .optional();

const postCollection = defineCollection({
  loader: glob({
    pattern: ['**/*.{md,mdx}', '!fishing-facility/**', '!tactics/**', '!column/**'],
    base: 'src/content/blog',
  }),
  schema: ({ image }) => z.object({
    publishDate: z.date().or(z.string()).optional(),
    updateDate: z.date().or(z.string()).optional(),
    draft: z.boolean().optional(),

    title: z.string(),
    excerpt: z.string().optional(),
    image: image().optional(),

    category: z.string().optional(),
    tags: z.array(z.string()).optional(),
    author: z.string().optional(),

    status: z.enum(['closed', 'suspended']).optional(),

    metadata: metadataDefinition(),
  }),
});

const fishingFacilityCollection = defineCollection({
  loader: glob({ 
    pattern: '**/*.{md,mdx}', 
    base: 'src/content/blog/fishing-facility',
    generateId: ({ entry }) => entry.replace(/\.(md|mdx)$/, '').replace(/[\\/]index$/, '').replace(/\\/g, '/'),
  }),
  schema: ({ image }) => z.object({
    title: z.string(),
    date: z.date().or(z.string()).optional(),
    publishDate: z.date().or(z.string()).optional(),
    updated: z.date().or(z.string()).optional(),
    lastmod: z.date().or(z.string()).optional(),
    draft: z.boolean().optional(),
    slug: z.string().optional(),
    category: z.string().optional(),
    prefecture: z.string().optional(),
    region: z.string().optional(),
    facilityType: z.enum(['sea-pond', 'sea-park', 'other']).optional(),
    tags: z.array(z.string()).optional(),
    description: z.string().optional(),
    excerpt: z.string().optional(),
    image: image().optional(),
    featureimage: image().optional(),
    status: z.enum(['closed', 'suspended']).optional(),
    metadata: metadataDefinition(),
    google_maps: z.object({
      map_url: z.string().optional(),
      place_id: z.string().optional(),
      plus_code: z.string().optional(),
      latitude: z.number().optional(),
      longitude: z.number().optional(),
      address: z.string().optional(),
      phone: z.string().optional(),
      business_hours: z.string().optional(),
      website_url: z.string().optional(),
      rating: z.number().optional(),
    }).optional(),
    facility_details: z.object({
      average_price: z.string().optional(),
      target_fish: z.array(z.string()).optional(),
      reservation: z.string().optional(),
      // 診断・分析用の構造化項目。不明は未記入（推測で埋めない）
      stocked_fish: z.array(z.string()).optional(),
      wild_fish: z.array(z.string()).optional(),
      price_min: z.number().optional(),
      price_max: z.number().optional(),
      price_type: z.enum(['entry-only', 'pond-1day', 'course']).optional(),
      includes_gear: z.boolean().optional(),
      beginner_friendly: z.boolean().optional(),
      family_friendly: z.boolean().optional(),
      hands_free: z.boolean().optional(),
      needs_ferry: z.boolean().optional(),
      ferry_info: z.string().optional(),
      access_minutes: z.number().optional(),
      reservation_type: z.enum(['required', 'recommended', 'not_required', 'first_come']).optional(),
      reservation_url: z.string().optional(),
      sns: z.object({
        x: z.string().optional(),
        instagram: z.string().optional(),
        facebook: z.string().optional(),
      }).optional(),
      rod_length_limit: z.number().optional(), // 竿の長さ上限(m)。制限なし/不明は未記入
      rod_count_limit: z.number().optional(), // 1人あたりの竿の本数上限。制限なし/不明は未記入
      verified_at: z.string().optional(), // YYYY-MM-DD。公式で確認した日
      amenities: z.object({
        rental_tackle: z.boolean().or(z.string()).optional(),
        bait_sale: z.boolean().or(z.string()).optional(),
        toilet: z.string().optional(),
        parking: z.string().optional(),
        processing: z.boolean().or(z.string()).optional(),
        bbq_area: z.boolean().or(z.string()).optional(),
      }).optional(),
    }).optional(),
  }),
});

const tacticsCollection = defineCollection({
  loader: glob({ 
    pattern: '**/*.{md,mdx}', 
    base: 'src/content/blog/tactics',
    generateId: ({ entry }) => entry.replace(/\.(md|mdx)$/, '').replace(/[\\/]index$/, '').replace(/\\/g, '/'),
  }),
  schema: ({ image }) => z.object({
    title: z.string(),
    publishDate: z.date().or(z.string()).optional(),
    category: z.string().optional(),
    draft: z.boolean().optional(),
    tags: z.array(z.string()).optional(),
    description: z.string().optional(),
    excerpt: z.string().optional(),
    image: image().optional(),
  }),
});

const columnCollection = defineCollection({
  loader: glob({ 
    pattern: '**/*.{md,mdx}', 
    base: 'src/content/blog/column',
    generateId: ({ entry }) => entry.replace(/\.(md|mdx)$/, '').replace(/[\\/]index$/, '').replace(/\\/g, '/'),
  }),
  schema: ({ image }) => z.object({
    title: z.string(),
    publishDate: z.date().or(z.string()).optional(),
    category: z.string().optional(),
    draft: z.boolean().optional(),
    tags: z.array(z.string()).optional(),
    description: z.string().optional(),
    image: image().optional(),
  }),
});

const affiliatesCollection = defineCollection({
  loader: glob({ pattern: '**/*.{json,yaml}', base: 'src/content/affiliates' }),
  schema: z.object({
    id: z.string(),
    name: z.string(),
    html: z.string().optional(), // SiteStripe or other HTML code
    link: z.string().url().optional(), // Amazon or Primary link
    rakuten_link: z.string().url().optional(), // Rakuten specific link
    yahoo_link: z.string().url().optional(), // Yahoo specific link
    image: z.string().optional(), // Individual image
    description: z.string().optional(),
    targetFish: z.array(z.string()).default([]),
    methods: z.array(z.string()).default([]),
    categories: z.array(z.string()).default([]),
    brand: z.string().optional(),
    search_query: z.string().optional(),
    isRecommended: z.boolean().default(false),
  }),
});

export const collections = {
  post: postCollection,
  'fishing-facility': fishingFacilityCollection,
  tactics: tacticsCollection,
  column: columnCollection,
  affiliates: affiliatesCollection,
};
