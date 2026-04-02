import fs from 'fs';
import path from 'path';

const CONTENT_DIR = 'src/content/blog';

/**
 * Replace **text** with <strong>text</strong>
 */
function fixMarkdownBold(dirPath) {
    let fileCount = 0;
    let replacementCount = 0;

    function traverse(currentPath) {
        const items = fs.readdirSync(currentPath);

        items.forEach(item => {
            const fullPath = path.join(currentPath, item);
            if (fs.statSync(fullPath).isDirectory()) {
                traverse(fullPath);
            } else if (item.endsWith('.mdx') || item.endsWith('.md')) {
                const content = fs.readFileSync(fullPath, 'utf-8');
                
                // Regex to find **text** and capture the inner text
                // It handles non-greedy matching to avoid capturing across multiple bold blocks
                const boldRegex = /\*\*(.*?)\*\*/g;
                
                if (boldRegex.test(content)) {
                    const newContent = content.replace(boldRegex, (match, p1) => {
                        replacementCount++;
                        return `<strong>${p1}</strong>`;
                    });
                    
                    fs.writeFileSync(fullPath, newContent);
                    fileCount++;
                    console.log(`Fixed: ${fullPath.replace(/\\/g, '/')}`);
                }
            }
        });
    }

    traverse(dirPath);
    return { fileCount, replacementCount };
}

console.log(`Starting batch fix for markdown bold in ${CONTENT_DIR}...`);
const stats = fixMarkdownBold(CONTENT_DIR);

console.log(`\n--- Conversion Summary ---`);
console.log(`Files updated: ${stats.fileCount}`);
console.log(`Total bold markers converted to <strong>: ${stats.replacementCount}`);
console.log(`--------------------------\n`);
