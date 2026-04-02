import os
import re

base_path = r'c:\Users\sasis\344ob\344ob\08_blog-master\02_kaijo-angler\src\content\blog\fishing-facility'
output_path = r'c:\Users\sasis\344ob\344ob\08_blog-master\02_kaijo-angler\scripts\facilities.txt'
facility_names = []

for root, dirs, files in os.walk(base_path):
    for file in files:
        if file.endswith(('.md', '.mdx')):
            file_path = os.path.join(root, file)
            try:
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                    # Find title in frontmatter
                    match = re.search(r'^title:\s*(.*)', content, re.MULTILINE)
                    if match:
                        title = match.group(1).strip().strip('"').strip("'")
                        # Clean up "【XXX】YYY" -> "YYY"
                        name = re.sub(r'【.*?】', '', title).strip()
                        # Remove common generic phrases
                        if "一覧" in name or "リスト" in name or "海上釣り堀ガイド" in name:
                            continue
                        # If title is too simple or looks like a list page, skip
                        if len(name) < 2:
                            continue
                        facility_names.append(name)
            except Exception as e:
                pass

# Dedup and sort
facility_names = sorted(list(set(facility_names)))
with open(output_path, 'w', encoding='utf-8') as f:
    f.write('\n'.join(facility_names))
print(f"Extracted {len(facility_names)} facility names.")
