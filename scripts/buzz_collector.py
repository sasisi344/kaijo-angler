import json
import random
from pathlib import Path

# Files
MASTER_FILE = Path('c:/Users/sasis/344ob/344ob/08_blog-master/02_kaijo-angler/scripts/facilities_master.json')
BUZZ_FILE = Path('c:/Users/sasis/344ob/344ob/08_blog-master/02_kaijo-angler/scripts/current_buzz.json')

def calculate_mock_buzz(facility_name):
    """
    Mocks a buzz score calculation.
    In production, this would use X Search API or similar.
    """
    # Simulate high buzz for specific keywords in the name
    score = 10
    if "正徳丸" in facility_name: score += 50
    if "水宝" in facility_name: score += 40
    if "海恵" in facility_name: score += 35
    if "まるや" in facility_name: score += 20
    
    # Add random factor
    score += random.randint(0, 30)
    
    # Cap at 100
    return min(100, score)

def main():
    if not MASTER_FILE.exists():
        print(f"Error: {MASTER_FILE} not found.")
        return

    with open(MASTER_FILE, 'r', encoding='utf-8') as f:
        master_data = json.load(f)

    buzz_results = []
    
    for item in master_data:
        name = item['title'].split('】')[1].split('｜')[0] if '】' in item['title'] else item['title']
        score = calculate_mock_buzz(name)
        
        buzz_results.append({
            'slug': item['slug'],
            'title': item['title'],
            'lat': item['lat'],
            'lng': item['lng'],
            'buzz_score': score,
            'hot_topic': "クエ放流中！" if score > 70 else "通常営業"
        })

    with open(BUZZ_FILE, 'w', encoding='utf-8') as f:
        json.dump(buzz_results, f, ensure_ascii=False, indent=2)

    print(f"Successfully generated {len(buzz_results)} buzz scores to {BUZZ_FILE}")

if __name__ == '__main__':
    main()
