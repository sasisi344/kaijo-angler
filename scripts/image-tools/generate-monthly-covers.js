import { execSync } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const CONTENT_BASE = path.resolve(__dirname, '../../src/content/blog/column/_covers');
const SCRIPT = path.join(__dirname, 'generate-image.js');

const covers = [
  {
    slug: 'january-cover',
    prompt: 'Midwinter scene at a sea fishing pond, pale clear blue sky with crisp bright sunlight, calm deep steel-blue ocean water with a faint haze on the horizon, distant hills dusted with frost, wooden fishing pier and floating pens, quiet New Year cold-snap atmosphere, no text, no people',
  },
  {
    slug: 'february-cover',
    prompt: 'Coldest-of-winter scene at a sea fishing pond, sharp clear blue sky with strong low-angle sunlight, calm dark blue ocean water with subtle ice-cold sheen, distant hills bare and brown, wooden fishing pier and floating pens, crisp severe-cold quiet atmosphere, no text, no people',
  },
  {
    slug: 'march-cover',
    prompt: 'Early spring scene at a sea fishing pond, soft pale blue sky with gentle warm sunlight breaking through, calm turquoise ocean water beginning to sparkle, a few cherry blossom buds on a branch near the pier, wooden fishing pier and floating pens, hopeful transition-to-spring atmosphere, no text, no people',
  },
  {
    slug: 'april-cover',
    prompt: 'Bright spring scene at a Japanese sea fishing pond, cherry blossom petals drifting near a wooden fishing pier, calm turquoise ocean water, soft warm sunlight, fishing rods resting on the railing, cheerful springtime atmosphere, no text, no people',
  },
  {
    slug: 'may-cover',
    prompt: 'Fresh early-summer scene at a sea fishing pond, vivid green coastal hills under a bright blue sky with fluffy white clouds, calm sparkling ocean water with floating fishing pens, sense of new-season energy, no text, no people',
  },
  {
    slug: 'june-cover',
    prompt: 'Rainy season scene at a sea fishing pond, fresh green hydrangea flowers near a wooden pier, soft grey-blue overcast sky, calm ocean water with gentle ripples from light rain, tranquil and clean atmosphere, no text, no people',
  },
  {
    slug: 'july-cover',
    prompt: 'Vivid midsummer scene at a sea fishing pond, brilliant blue sky with dramatic white cumulus clouds, sparkling deep blue ocean water under strong sunlight, wooden fishing pier and floating pens, vibrant high-contrast summer atmosphere, no text, no people',
  },
  {
    slug: 'august-cover',
    prompt: 'Intense midsummer scene at a sea fishing pond, blazing sun over a deep blue ocean, heat haze shimmer near the water surface, dramatic white cumulonimbus clouds towering on the horizon, wooden fishing pier and floating pens, peak summer atmosphere, no text, no people',
  },
  {
    slug: 'september-cover',
    prompt: 'Early autumn scene at a sea fishing pond, soft golden afternoon light over calm ocean water, a few wispy cirrus clouds in a clear blue-to-pale sky, wooden fishing pier and floating pens, gentle transition-of-season atmosphere, no text, no people',
  },
  {
    slug: 'october-cover',
    prompt: 'Pleasant autumn scene at a sea fishing pond, crisp clear blue sky with soft sunlight, calm deep-blue ocean water with gentle ripples, distant hills showing early autumn color, wooden fishing pier and floating pens, comfortable best-season atmosphere, no text, no people',
  },
  {
    slug: 'november-cover',
    prompt: 'Late autumn scene at a sea fishing pond, cool pale blue sky with soft hazy sunlight, calm grey-blue ocean water, distant hills with red and orange autumn foliage, wooden fishing pier and floating pens, quiet cooling-down atmosphere, no text, no people',
  },
  {
    slug: 'december-cover',
    prompt: 'Winter scene at a sea fishing pond, clear cold blue sky with crisp bright sunlight, calm steel-blue ocean water, distant hills with bare winter trees, wooden fishing pier and floating pens, fresh crisp end-of-year atmosphere, no text, no people',
  },
];

async function run() {
  const targets = process.argv.slice(2);
  const list = targets.length > 0 ? covers.filter((c) => targets.includes(c.slug)) : covers;
  for (let i = 0; i < list.length; i++) {
    const { slug, prompt } = list[i];
    const outputPath = path.join(CONTENT_BASE, `${slug}.jpg`);
    console.log(`\n[${i + 1}/${list.length}] ${slug}`);
    try {
      execSync(`node "${SCRIPT}" "${prompt}" "${outputPath}"`, {
        stdio: 'inherit',
        cwd: path.resolve(__dirname, '../..'),
      });
    } catch (err) {
      console.error(`  ✗ Failed: ${err.message}`);
    }
  }
  console.log('\n✅ 全画像生成完了');
}

run();
