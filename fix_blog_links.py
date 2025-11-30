#!/usr/bin/env python3
"""Fix all blog.html links to point to correct subdirectory paths"""

import re

# Read blog.html
with open('blog.html', 'r') as f:
    content = f.read()

# Map of old links to new subdirectory paths
link_mapping = {
    'blog/planning-mountain-landscape.html': 'blog/planning-mountain-landscape/',
    'blog/winter-preparation.html': 'blog/winter-preparation/',
    'blog/best-alpine-plants.html': 'blog/alpine-plants/',
    'blog/outdoor-living-spaces.html': 'blog/outdoor-kitchens/',
    'blog/transforming-sloped-property.html': 'blog/sloped-property/',
    'blog/spring-awakening-checklist.html': 'blog/spring-checklist/',
    'blog/sustainable-landscaping.html': 'blog/sustainable-landscaping/',
    'blog/mountain-water-features.html': 'blog/water-features/',
    'blog/drainage-solutions.html': 'blog/drainage-solutions/'
}

# Replace all occurrences
for old_link, new_link in link_mapping.items():
    content = content.replace(old_link, new_link)
    print(f"✓ Replaced {old_link} → {new_link}")

# Write back
with open('blog.html', 'w') as f:
    f.write(content)

print("\n✅ Fixed all blog.html links to point to subdirectories")
