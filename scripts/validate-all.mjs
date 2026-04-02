import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { z } from 'zod';
import { glob } from 'fast-glob';

// Define schemas to match config.ts (approximately)
const amenitySchema = z.object({
  rental_tackle: z.boolean().or(z.string()).optional(),
  bait_sale: z.boolean().or(z.string()).optional(),
  toilet: z.string().optional(),
  parking: z.string().optional(),
  processing: z.boolean().or(z.string()).optional(),
  bbq_area: z.boolean().or(z.string()).optional(),
}).optional();

const facilitySchema = z.object({
  title: z.string(),
  publishDate: z.date().or(z.string()).optional(),
  facility_details: z.object({
    average_price: z.string().optional(),
    target_fish: z.array(z.string()).optional(),
    reservation: z.string().optional(),
    amenities: amenitySchema,
  }).optional(),
  google_maps: z.object({
    rating: z.number().or(z.string()).optional(),
  }).optional(),
});

async function validateCollection(dir, schema) {
  const files = await glob(`${dir}/**/*.{md,mdx}`);
  console.log(`Validating ${files.length} files in ${dir}...`);
  for (const file of files) {
    const fullPath = path.resolve(file);
    const content = fs.readFileSync(fullPath, 'utf8');
    const { data } = matter(content);
    try {
      schema.parse(data);
    } catch (e) {
      console.error(`ERROR in ${file}:`, e.errors);
    }
  }
}

async function run() {
  await validateCollection('src/content/blog/fishing-facility', facilitySchema);
}

run();
