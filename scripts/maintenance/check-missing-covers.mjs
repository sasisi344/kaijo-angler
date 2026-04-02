import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const BASE_DIR = 'src/content/blog';
const OUTPUT_FILE = '.workspace/missing-covers-list.md';

/**
 * Recursively search for directories containing an index.md but missing cover.jpg
 */
function findMissingCovers(dirPath) {
    const results = [];
    const categories = fs.readdirSync(dirPath).filter(item => {
        const fullPath = path.join(dirPath, item);
        return fs.statSync(fullPath).isDirectory();
    });

    for (const category of categories) {
        const categoryPath = path.join(dirPath, category);
        traverse(categoryPath, category);
    }

    function traverse(currentPath, category) {
        const items = fs.readdirSync(currentPath);
        
        // A blog post in Astro can be a folder with index.md
        const hasIndex = items.includes('index.md') || items.includes('index.mdx');
        const hasCoverJpg = items.includes('cover.jpg');

        if (hasIndex) {
            if (!hasCoverJpg) {
                const indexFile = items.includes('index.md') ? 'index.md' : 'index.mdx';
                const indexPath = path.join(currentPath, indexFile);
                let title = 'Untitled';
                
                try {
                    const fileContent = fs.readFileSync(indexPath, 'utf-8');
                    const { data } = matter(fileContent);
                    title = data.title || 'Untitled';
                } catch (e) {
                    console.error(`Error reading ${indexPath}:`, e.message);
                }

                results.push({
                    category,
                    title,
                    path: currentPath,
                    fullPath: path.resolve(currentPath)
                });
            }
            // If it's a post folder (has index.md), we don't necessarily need to go deeper
            // unless there are sub-posts, but usually it's one level.
            // However, fishing-facility is nested by region/prefecture.
        }

        items.forEach(item => {
            const fullPath = path.join(currentPath, item);
            if (fs.statSync(fullPath).isDirectory()) {
                traverse(fullPath, category);
            }
        });
    }

    return results;
}

console.log(`Scanning ${BASE_DIR} for missing cover.jpg...`);
const missingList = findMissingCovers(BASE_DIR);

let markdown = `# Missing Cover Image List\n\n`;
markdown += `Generated on: ${new Date().toLocaleString()}\n\n`;
markdown += `Total missing: ${missingList.length}\n\n`;

const categories = [...new Set(missingList.map(item => item.category))].sort();

for (const cat of categories) {
    markdown += `## Category: ${cat}\n\n`;
    markdown += `| Title | Path |\n`;
    markdown += `| :--- | :--- |\n`;
    
    missingList
        .filter(item => item.category === cat)
        .sort((a, b) => a.path.localeCompare(b.path))
        .forEach(item => {
            // Make the path relative to project root for easier navigation
            const relativePath = item.path.replace(/\\/g, '/');
            markdown += `| ${item.title} | [${relativePath}](./${relativePath}) |\n`;
        });
    markdown += `\n`;
}

// Create directory if not exists
const outputDir = path.dirname(OUTPUT_FILE);
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

fs.writeFileSync(OUTPUT_FILE, markdown);

console.log(`\nReport generated: ${OUTPUT_FILE}`);
console.log(`Total missing covers found: ${missingList.length}`);
