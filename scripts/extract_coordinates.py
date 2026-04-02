import os
import re
import yaml
import json
from pathlib import Path

# Base directory for the fishing facility content
BASE_DIR = Path('c:/Users/sasis/344ob/344ob/08_blog-master/02_kaijo-angler/src/content/blog/fishing-facility')
OUTPUT_FILE = Path('c:/Users/sasis/344ob/344ob/08_blog-master/02_kaijo-angler/scripts/facilities_master.json')

def extract_frontmatter(content):
    """
    Extracts YAML frontmatter from an mdx string.
    """
    match = re.search(r'---\s*(.*?)\s*---', content, re.DOTALL)
    if match:
        try:
            return yaml.safe_load(match.group(1))
        except yaml.YAMLError:
            return None
    return None

def main():
    facilities = []
    
    # Recursive search for index.mdx files
    for mdx_file in BASE_DIR.rglob('index.mdx'):
        print(f"Processing: {mdx_file}")
        
        try:
            content = mdx_file.read_text(encoding='utf-8')
            frontmatter = extract_frontmatter(content)
            
            if frontmatter:
                # Basic info
                facility_data = {
                    'title': frontmatter.get('title', ''),
                    'prefecture': frontmatter.get('prefecture', ''),
                    'region': frontmatter.get('region', ''),
                    'slug': frontmatter.get('slug', ''),
                    'lat': None,
                    'lng': None,
                    'address': '',
                }
                
                # Google Maps info
                gmaps = frontmatter.get('google_maps', {})
                if isinstance(gmaps, dict):
                    facility_data['lat'] = gmaps.get('latitude')
                    facility_data['lng'] = gmaps.get('longitude')
                    facility_data['address'] = gmaps.get('address', '')
                
                # Filter out those without title or slug (just in case)
                if facility_data['title'] and facility_data['slug']:
                    facilities.append(facility_data)
                    
        except Exception as e:
            print(f"Error reading {mdx_file}: {e}")

    # Save to JSON
    with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
        json.dump(facilities, f, ensure_ascii=False, indent=2)
        
    print(f"\nSuccessfully extracted {len(facilities)} facilities to {OUTPUT_FILE}")

if __name__ == '__main__':
    main()
