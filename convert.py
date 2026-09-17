import re

def repl(match):
    val = float(match.group(1))
    pts = (val * 1000) / 40
    # if it's an integer, print as int
    if pts.is_integer():
        return f"{int(pts)} pts"
    return f"{pts:.1f} pts"

with open('menuData.js', 'r') as f:
    content = f.read()

new_content = re.sub(r'(\d+\.?\d*)K', repl, content)

with open('menuData.js', 'w') as f:
    f.write(new_content)
