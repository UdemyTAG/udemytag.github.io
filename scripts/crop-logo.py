import os
import base64
import io
from PIL import Image, ImageDraw

src_path = r"C:\Users\USER\.gemini\antigravity\brain\0668714a-b309-45f9-ae6c-2684f9b8263e\.user_uploaded\media_1791310622446.png"
out_dir = r"f:\Coding\Project\Gemini\udemytag.github.io\public"

img = Image.open(src_path).convert("RGBA")

cx = 518.5
cy = 494.5
r = 465.5

# Crop with high-resolution circle mask
box = (int(cx - r), int(cy - r), int(cx + r + 0.5), int(cy + r + 0.5))
cropped = img.crop(box)
w, h = cropped.size

# Supersample 4x for smooth antialiased circular edge
scale = 4
mask = Image.new("L", (w * scale, h * scale), 0)
draw = ImageDraw.Draw(mask)

offset_x = (cx - r) - box[0]
offset_y = (cy - r) - box[1]
circle_bbox = [
    offset_x * scale,
    offset_y * scale,
    (offset_x + 2 * r) * scale,
    (offset_y + 2 * r) * scale,
]
draw.ellipse(circle_bbox, fill=255)
mask = mask.resize((w, h), Image.Resampling.LANCZOS)
cropped.putalpha(mask)

# Save high-res logo for Schema.org / OpenGraph
cropped.resize((512, 512), Image.Resampling.LANCZOS).save(os.path.join(out_dir, "logo-512.png"), "PNG", optimize=True)

# Save display logo (160x160 for high DPI display, ultra lightweight)
logo_160 = cropped.resize((160, 160), Image.Resampling.LANCZOS)
logo_160.save(os.path.join(out_dir, "logo.webp"), "WEBP", quality=92, method=6)
logo_160.save(os.path.join(out_dir, "logo.png"), "PNG", optimize=True)

# Save favicon variants
fav_32 = cropped.resize((32, 32), Image.Resampling.LANCZOS)
fav_32.save(os.path.join(out_dir, "favicon-32x32.png"))

fav_180 = cropped.resize((180, 180), Image.Resampling.LANCZOS)
fav_180.save(os.path.join(out_dir, "apple-touch-icon.png"))

fav_192 = cropped.resize((192, 192), Image.Resampling.LANCZOS)
fav_192.save(os.path.join(out_dir, "favicon.png"))

cropped.save(os.path.join(out_dir, "favicon.ico"), format="ICO", sizes=[(16, 16), (32, 32), (48, 48), (64, 64)])

# SVG Favicon with embedded PNG
fav_128 = cropped.resize((128, 128), Image.Resampling.LANCZOS)
buf = io.BytesIO()
fav_128.save(buf, format="PNG")
b64_str = base64.b64encode(buf.getvalue()).decode("ascii")

svg_content = f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <image href="data:image/png;base64,{b64_str}" width="128" height="128" />
</svg>
"""

with open(os.path.join(out_dir, "favicon.svg"), "w", encoding="utf-8") as f:
    f.write(svg_content)

print("Generated logo.png and all favicon variants successfully!")
