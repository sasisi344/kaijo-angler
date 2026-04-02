import fs from 'fs';
import path from 'path';

const AFFILIATES_DIR = 'src/content/affiliates';
const BLOG_DIR = 'src/content/blog';
const OUTPUT_FILE = '.workspace/.task/affiliate-id-mismatches.md';

function getValidIds(dirPath) {
    const ids = new Set();

    function traverse(currentPath) {
        const items = fs.readdirSync(currentPath);
        items.forEach(item => {
            const fullPath = path.join(currentPath, item);
            if (fs.statSync(fullPath).isDirectory()) {
                traverse(fullPath);
            } else if (item.endsWith('.json')) {
                try {
                    const content = JSON.parse(fs.readFileSync(fullPath, 'utf-8'));
                    if (content.id) {
                        ids.add(content.id);
                    }
                } catch (e) {
                    console.error(`Error parsing JSON ${fullPath}:`, e.message);
                }
            }
        });
    }

    traverse(dirPath);
    return ids;
}

function checkBlogAffiliates(blogDir, validIds) {
    const mismatches = [];

    function traverse(currentPath) {
        const items = fs.readdirSync(currentPath);
        items.forEach(item => {
            const fullPath = path.join(currentPath, item);
            if (fs.statSync(fullPath).isDirectory()) {
                traverse(fullPath);
            } else if (item === 'index.mdx') {
                const content = fs.readFileSync(fullPath, 'utf-8');
                const lines = content.split('\n');
                
                const idRegex = /<(?:TackleCard|AffiliateCard)\s+id=["']([^"']+)["']/g;
                
                lines.forEach((line, index) => {
                    let match;
                    while ((match = idRegex.exec(line)) !== null) {
                        const usedId = match[1];
                        if (!validIds.has(usedId)) {
                            mismatches.push({
                                file: fullPath.replace(/\\/g, '/'),
                                lineNum: index + 1,
                                id: usedId,
                                content: line.trim()
                            });
                        }
                    }
                });
            }
        });
    }

    traverse(blogDir);
    return mismatches;
}

console.log('Fetching valid affiliate IDs...');
const validIds = getValidIds(AFFILIATES_DIR);
console.log(`Found ${validIds.size} valid IDs.`);

console.log(`Scanning ${BLOG_DIR} for ID mismatches...`);
const mismatches = checkBlogAffiliates(BLOG_DIR, validIds);

let markdown = `# Affiliate ID Mismatch Report\n\n`;
markdown += `Generated on: ${new Date().toLocaleString()}\n\n`;
markdown += `Total mismatches found: ${mismatches.length}\n\n`;

if (mismatches.length === 0) {
    markdown += `No affiliate ID mismatches found. All good!\n`;
} else {
    markdown += `| File | Line | Invalid ID | Line Content |\n`;
    markdown += `| :--- | :--- | :--- | :--- |\n`;
    
    mismatches.forEach(m => {
        const safeContent = m.content.replace(/\|/g, '\\|');
        markdown += `| [${m.file}](../../${m.file}) | ${m.lineNum} | \`${m.id}\` | \`${safeContent}\` |\n`;
    });
}

const outputDir = path.dirname(OUTPUT_FILE);
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

fs.writeFileSync(OUTPUT_FILE, markdown);

console.log(`\nReport generated: ${OUTPUT_FILE}`);
console.log(`Total mismatches: ${mismatches.length}`);
