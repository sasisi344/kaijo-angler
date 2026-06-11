import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import fg from 'fast-glob';

// Facility entries live at fishing-facility/<region>/<prefecture>/<facility-slug>/index.mdx
// Region/prefecture hub pages live at fishing-facility/<region>/index.mdx and
// fishing-facility/<region>/<prefecture>/index.mdx — exclude those from the audit.
const BASE = 'src/content/blog/fishing-facility';

function toGeneratedId(file) {
  return path
    .relative(BASE, file)
    .replace(/\\/g, '/')
    .replace(/\.(md|mdx)$/, '')
    .replace(/\/index$/, '');
}

async function run() {
  const files = await fg(`${BASE}/**/*.{md,mdx}`);

  const entries = files
    .map((file) => {
      const id = toGeneratedId(file);
      return { file, id, depth: id.split('/').length };
    })
    .filter((entry) => entry.depth >= 3); // skip region/prefecture index pages

  console.log(`Checking ${entries.length} facility entries...`);

  const bySlug = new Map();
  const byTitle = new Map();

  for (const entry of entries) {
    const { data } = matter(fs.readFileSync(entry.file, 'utf8'));
    const slug = (data.slug || entry.id).replace(/\/index$/, '');
    const title = (data.title || '').trim();

    if (!bySlug.has(slug)) bySlug.set(slug, []);
    bySlug.get(slug).push(entry.file);

    if (title) {
      if (!byTitle.has(title)) byTitle.set(title, []);
      byTitle.get(title).push(entry.file);
    }
  }

  let hasDuplicates = false;

  for (const [slug, fileList] of bySlug) {
    if (fileList.length > 1) {
      hasDuplicates = true;
      console.error(`DUPLICATE SLUG "${slug}":`);
      fileList.forEach((f) => console.error(`  - ${f}`));
    }
  }

  for (const [title, fileList] of byTitle) {
    if (fileList.length > 1) {
      hasDuplicates = true;
      console.error(`DUPLICATE TITLE "${title}":`);
      fileList.forEach((f) => console.error(`  - ${f}`));
    }
  }

  if (!hasDuplicates) {
    console.log('No duplicate slugs or titles found.');
  } else {
    process.exitCode = 1;
  }
}

run();
