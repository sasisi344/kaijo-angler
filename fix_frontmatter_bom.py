import os
import re

def fix_frontmatter(path):
    try:
        with open(path, 'r', encoding='utf-8-sig') as f:
            content = f.read()
            
        parts = content.split('---', 2)
        if len(parts) >= 3 and parts[0].strip() == '':
            frontmatter = parts[1]
            lines = frontmatter.strip('\n').split('\n')
            new_lines = []
            seen = set()
            changed = False
            for line in lines:
                m = re.match(r'^([a-zA-Z0-9_-]+):', line)
                if m:
                    key = m.group(1)
                    if key in seen:
                        changed = True
                        continue
                    seen.add(key)
                new_lines.append(line)
            
            if changed:
                parts[1] = '\n' + '\n'.join(new_lines) + '\n'
                with open(path, 'w', encoding='utf-8') as f:
                    f.write('---'.join(parts))
                return True
    except Exception as e:
        print(f"Error {path}: {e}")
    return False

count = 0
for root, _, files in os.walk(r'c:\Users\sasis\344dev\kaijyo-fishing\src\content'):
    for f in files:
        if f.endswith('.md') or f.endswith('.mdx'):
            if fix_frontmatter(os.path.join(root, f)):
                count += 1

print(f"Fixed {count} files")
