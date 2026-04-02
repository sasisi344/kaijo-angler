import os
import re

base_path = r"c:\Users\sasis\344ob\344ob\08_blog-master\02_kaijo-angler\src\content\blog\tactics\fish-strategy"

fish_mapping = {
    "madai": {"intermediate": "madai-intermediate-strategy", "advanced": "madai-advanced-strategy", "theory": "madai-scientific-evidence", "gourmet": "madai-aging-gourmet"},
    "buri": {"intermediate": "buri-dead-bait-strategy", "advanced": "buri-advanced-landing", "theory": "buri-scientific-trigger", "strategy": "buri-release-strategy"},
    "kanpachi": {"intermediate": "kanpachi-dynamic-lure-strategy", "advanced": "kanpachi-advanced-sight-fishing", "theory": "kanpachi-scientific-behavior", "strategy": "kanpachi-depth-strategy"},
    "shimaji": {"intermediate": "shimaji-shirasa-shaking-strategy", "advanced": "shimaji-advanced-slack-line", "theory": "shimaji-scientific-mouth", "gourmet": "shimaji-gourmet-strategy"},
    "hiramasa": {"intermediate": "hiramasa-cruising-strategy", "advanced": "hiramasa-advanced-landing", "theory": "hiramasa-scientific-speed", "strategy": "hiramasa-bait-freshness-strategy"},
    "kue": {"intermediate": "kue-scent-bait-strategy", "advanced": "kue-advanced-net-strategy", "theory": "kue-scientific-vibration", "gourmet": "kue-gourmet-strategy"},
    "ishidai": {"intermediate": "ishidai-hard-bait-strategy", "advanced": "ishidai-advanced-hooking", "theory": "ishidai-scientific-teeth", "strategy": "ishidai-corner-strategy"},
    "chinu": {"intermediate": "kurodai-dango-smoke-strategy", "advanced": "kurodai-advanced-trailing", "theory": "kurodai-scientific-omnivore", "gourmet": "kurodai-gourmet-strategy"},
    "aji": {"intermediate": "aji-mega-strategy", "advanced": "aji-bait-management", "theory": "aji-scientific-schooling", "gourmet": "aji-gourmet-strategy"},
    "suzuki": {"intermediate": "suzuki-life-like-action", "advanced": "suzuki-advanced-jump-control", "theory": "suzuki-scientific-suction", "gourmet": "suzuki-gourmet-strategy"},
    "fugu": {"intermediate": "torafugu-detecting-tremors", "advanced": "torafugu-advanced-location", "theory": "torafugu-scientific-beak", "gourmet": "torafugu-gourmet-safety"},
    "kawahagi": {"intermediate": "kawahagi-zero-tension-strategy", "advanced": "kawahagi-advanced-sensitivity", "theory": "kawahagi-scientific-suction", "gourmet": "kawahagi-gourmet-liver"},
    "isaki": {"intermediate": "isaki-shirasa-sync-strategy", "advanced": "isaki-advanced-finesse", "theory": "isaki-scientific-diet", "gourmet": "isaki-gourmet-strategy"},
    "mejina": {"intermediate": "mejina-bait-processing-strategy", "advanced": "mejina-zero-float-finesse", "theory": "mejina-scientific-digestion", "gourmet": "mejina-gourmet-strategy"},
    "kamasu": {"intermediate": "kamasu-flashing-strategy", "advanced": "kamasu-advanced-sight-fishing", "theory": "kamasu-scientific-vision", "gourmet": "kamasu-gourmet-strategy"},
    "aodai": {"intermediate": "aodai-luminous-strategy", "advanced": "aodai-advanced-rhythm", "theory": "aodai-scientific-vision", "gourmet": "aodai-gourmet-strategy"}
}

for fish, cats in fish_mapping.items():
    fish_dir = os.path.join(base_path, fish)
    
    # Update Hub
    hub_file = os.path.join(fish_dir, "index.mdx")
    if os.path.exists(hub_file):
        with open(hub_file, "r", encoding="utf-8") as f: content = f.read()
        
        # Navigation section
        if "## 徹底解説シリーズ" not in content:
            s_label = "極味" if "gourmet" in cats else "戦略"
            s_key = "gourmet" if "gourmet" in cats else "strategy"
            
            nav_text = f"\n---\n\n## 徹底解説シリーズ（{fish}攻略）\n{fish}の各攻略レベル・カテゴリ別の詳細記事です。\n\n"
            nav_text += f"- [**中級**：誘いとテクニック](./intermediate)\n"
            nav_text += f"- [**上級**：究極の仕掛けと攻略](./advanced)\n"
            nav_text += f"- [**理屈**：科学的エビデンス](./theory)\n"
            nav_text += f"- [**{s_label}**：さらなる釣果への道](./{s_key})\n"
            
            # Append before Summary or at end
            if "## まとめ" in content:
                # Find the end of Summary section (before next H2 or horizontal rule)
                match = re.search(r"## まとめ[\s\S]*?(?=\n---|\n#|$)", content)
                if match:
                    content = content[:match.end()] + nav_text + content[match.end():]
                else:
                    content += nav_text
            else:
                content += nav_text

        # Fix relative links if they point to old filenames
        for final_cat, old_slug in cats.items():
            content = content.replace(f"./{old_slug}", f"./{final_cat}")
            
        with open(hub_file, "w", encoding="utf-8") as f: f.write(content)

    # Update Sub-articles
    for final_cat, old_slug in cats.items():
        sub_file = os.path.join(fish_dir, final_cat, "index.mdx")
        if os.path.exists(sub_file):
            with open(sub_file, "r", encoding="utf-8") as f: content = f.read()
            
            # Frontmatter updates
            content = re.sub(r'slug: ".*?"', f'slug: "{fish}/{final_cat}"', content)
            content = re.sub(r'image: ".*?"', 'image: "../cover.jpg"', content)
            content = re.sub(r'image: \./cover.jpg', 'image: ../cover.jpg', content)
            
            # Fix links to other sub-articles of the same fish
            for peer_cat, peer_old_slug in cats.items():
                content = content.replace(f"./{peer_old_slug}", f"../{peer_cat}")
                
            # Extra fixes for links pointing to hub
            content = content.replace(f"./{fish}", "..")

            with open(sub_file, "w", encoding="utf-8") as f: f.write(content)

print("Restructuring logic completed!")
