import os
import re

def find_and_fix_duplicates(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Extract frontmatter
    match = re.search(r'^---\n(.*?)\n---', content, re.DOTALL)
    if not match:
        return False, "No frontmatter found"
    
    frontmatter_raw = match.group(1)
    lines = frontmatter_raw.split('\n')
    
    keys_seen = {}
    new_lines = []
    changed = False
    
    for line in lines:
        key_match = re.match(r'^([a-zA-Z0-9_-]+):', line)
        if key_match:
            key = key_match.group(1)
            if key in keys_seen:
                print(f"Duplicate key '{key}' found in {file_path}")
                changed = True
                # Skip this duplicate line
                continue
            else:
                keys_seen[key] = True
                new_lines.append(line)
        else:
            new_lines.append(line)
            
    if changed:
        new_frontmatter = '\n'.join(new_lines)
        new_content = content.replace(frontmatter_raw, new_frontmatter)
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        return True, "Fixed duplicates"
    
    return False, "No duplicates"

base_dir = r'c:\Users\sasis\344dev\kaijyo-fishing\src\content'
fixed_count = 0

for root, dirs, files in os.walk(base_dir):
    for file in files:
        if file.endswith('.md') or file.endswith('.mdx'):
            path = os.path.join(root, file)
            try:
                fixed, msg = find_and_fix_duplicates(path)
                if fixed:
                    fixed_count += 1
            except Exception as e:
                print(f"Error processing {path}: {e}")

print(f"Total files fixed: {fixed_count}")
