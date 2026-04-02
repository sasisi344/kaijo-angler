import fs from 'fs';
import matter from 'gray-matter';
import { z } from 'zod';

const schema = z.object({
  title: z.string(),
  publishDate: z.date().or(z.string()).optional(),
  facility_details: z.object({
    average_price: z.string().optional(),
    target_fish: z.array(z.string()).optional(),
    reservation: z.string().optional(),
    amenities: z.object({
      rental_tackle: z.boolean().or(z.string()).optional(),
      bait_sale: z.boolean().or(z.string()).optional(),
      toilet: z.string().optional(),
      parking: z.string().optional(),
      processing: z.boolean().or(z.string()).optional(),
      bbq_area: z.boolean().or(z.string()).optional(),
    }).optional(),
  }).optional(),
});

const file = 'src/content/blog/fishing-facility/east-japan/index.mdx';
if (fs.existsSync(file)) {
  const content = fs.readFileSync(file, 'utf8');
  const { data } = matter(content);

  console.log('Frontmatter Data:', JSON.stringify(data, null, 2));

  try {
    schema.parse(data);
    console.log('Validation SUCCESS');
  } catch (e) {
    console.log('Validation FAILED:', e.errors);
  }
} else {
  console.log('File NOT FOUND:', file);
}
