import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const BASE_DIR = 'src/content/blog/fishing-facility';

function getAllFiles(dirPath, arrayOfFiles) {
  const files = fs.readdirSync(dirPath);

  arrayOfFiles = arrayOfFiles || [];

  files.forEach(function(file) {
    if (fs.statSync(dirPath + "/" + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
    } else {
      if (file.endsWith('.mdx') || file.endsWith('.md')) {
        arrayOfFiles.push(path.join(dirPath, "/", file));
      }
    }
  });

  return arrayOfFiles;
}

const files = getAllFiles(BASE_DIR);
const errors = [];

files.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  try {
    const { data } = matter(content);
    const fileErrors = [];

    // 1. pubDate vs publishDate
    if (data.pubDate && !data.publishDate) {
      fileErrors.push('Use "publishDate" instead of "pubDate"');
    }

    // 2. cover vs image
    if (data.cover && !data.image) {
      fileErrors.push('Use "image" instead of "cover"');
    }

    // 3. category
    if (data.category && data.category === 'ポイント紹介') {
      fileErrors.push('Category should be "施設紹介"');
    }

    // 4. facility_details structure
    if (data.facility_details) {
      if (Array.isArray(data.facility_details)) {
        fileErrors.push('facility_details should be an object, not an array');
      } else {
        // Nested check
        const fd = data.facility_details;
        if (fd.region || fd.prefecture) {
          fileErrors.push('facility_details contains extra fields (region/prefecture)');
        }
        if (fd.amenities) {
          if (typeof fd.amenities.toilet === 'boolean') {
            fileErrors.push('amenities.toilet should be a string, not boolean');
          }
          if (typeof fd.amenities.parking === 'boolean') {
            fileErrors.push('amenities.parking should be a string, not boolean');
          }
        }
      }
    } else {
      fileErrors.push('missing facility_details');
    }

    if (fileErrors.length > 0) {
      errors.push({ file, fileErrors });
    }
  } catch (e) {
    errors.push({ file, fileErrors: [`Parsing error: ${e.message}`] });
  }
});

if (errors.length > 0) {
  console.log('--- Frontmatter Errors Found ---');
  errors.forEach(err => {
    console.log(`\nFile: ${err.file}`);
    err.fileErrors.forEach(msg => console.log(`  - ${msg}`));
  });
  console.log(`\nTotal files with errors: ${errors.length}`);
} else {
  console.log('No frontmatter errors found in fishing-facility directory.');
}
