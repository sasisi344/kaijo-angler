"""
Cover image generator for 4 advanced articles.
Size: 1264x848 JPEG (matches existing covers)
No text. Ocean/fishing themed.
"""
from PIL import Image, ImageDraw, ImageFilter
import math, os

W, H = 1264, 848
BASE = r"C:\Users\sasis\344dev\kaijo-angler\src\content\blog\tactics"

# ── helpers ──────────────────────────────────────────────────────────────────

def vgrad(c0, c1, w=W, h=H):
    img = Image.new("RGB", (w, h))
    draw = ImageDraw.Draw(img)
    for y in range(h):
        t = y / (h - 1)
        r = int(c0[0] + t * (c1[0] - c0[0]))
        g = int(c0[1] + t * (c1[1] - c0[1]))
        b = int(c0[2] + t * (c1[2] - c0[2]))
        draw.line([(0, y), (w - 1, y)], fill=(r, g, b))
    return img

def bezier(p0, p1, p2, p3, steps=200):
    pts = []
    for i in range(steps + 1):
        t = i / steps
        u = 1 - t
        x = u**3*p0[0] + 3*u**2*t*p1[0] + 3*u*t**2*p2[0] + t**3*p3[0]
        y = u**3*p0[1] + 3*u**2*t*p1[1] + 3*u*t**2*p2[1] + t**3*p3[1]
        pts.append((x, y))
    return pts

def draw_thick_curve(draw, pts, color, width):
    for i in range(len(pts) - 1):
        draw.line([pts[i], pts[i+1]], fill=color, width=width)

def circle_points(cx, cy, r, n=64):
    return [(cx + r*math.cos(2*math.pi*i/n), cy + r*math.sin(2*math.pi*i/n)) for i in range(n)]

def save(img, path):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    img.save(path, "JPEG", quality=92)
    print(f"Saved: {path}")


# ── 1. knot-strength-test ─────────────────────────────────────────────────────
# 針とハリスの結び目。暗い海軍色背景にアンバーのラインとフック。
def gen_knot():
    img = vgrad((10, 18, 40), (20, 38, 72))
    draw = ImageDraw.Draw(img)

    cx, cy = W // 2, H // 2

    # --- outer glow ring (rope loop) ---
    for r, alpha in [(210, 20), (195, 40), (180, 80)]:
        pts = circle_points(cx, cy - 40, r)
        for i in range(len(pts) - 1):
            draw.line([pts[i], pts[i+1]], fill=(180, 130, 40, alpha), width=2)

    # --- main loop (inner knot ring) ---
    loop_pts = circle_points(cx, cy - 40, 180, n=120)
    draw_thick_curve(draw, loop_pts + [loop_pts[0]], (212, 168, 60), 6)

    # --- line going up-left from loop ---
    line_up = bezier((cx - 120, cy - 40), (cx - 200, cy - 180), (cx - 280, cy - 280), (cx - 320, 40))
    draw_thick_curve(draw, line_up, (212, 168, 60), 5)

    # --- line going up-right from loop ---
    line_up2 = bezier((cx + 120, cy - 40), (cx + 200, cy - 160), (cx + 300, cy - 260), (cx + 360, 30))
    draw_thick_curve(draw, line_up2, (212, 168, 60), 5)

    # --- hook shape (right side lower) ---
    hx, hy = cx + 220, cy + 160
    # hook shank (vertical line down)
    hook_shank = bezier((hx, hy - 100), (hx + 10, hy - 50), (hx + 5, hy + 20), (hx - 20, hy + 80))
    draw_thick_curve(draw, hook_shank, (190, 200, 210), 7)
    # hook bend
    hook_bend = bezier((hx - 20, hy + 80), (hx - 60, hy + 130), (hx - 120, hy + 100), (hx - 80, hy + 40))
    draw_thick_curve(draw, hook_bend, (190, 200, 210), 7)
    # hook point (tiny barb)
    draw.ellipse([(hx - 85, hy + 35), (hx - 70, hy + 50)], fill=(200, 210, 220))

    # --- line connecting loop to hook ---
    connect = bezier((cx, cy + 140), (cx + 60, cy + 150), (hx - 10, hy - 110), (hx, hy - 100))
    draw_thick_curve(draw, connect, (212, 168, 60), 5)

    # --- knot node (small dot where loop meets) ---
    kx, ky = cx - 40, cy + 20
    draw.ellipse([(kx-12, ky-12), (kx+12, ky+12)], fill=(240, 200, 80))

    # --- subtle shimmer lines (background depth) ---
    for i in range(8):
        x = 80 + i * 155
        y1 = 60 + (i % 3) * 40
        y2 = y1 + 100 + (i % 2) * 60
        alpha_c = (30 + i * 5, 50 + i * 4, 90 + i * 3)
        draw.line([(x, y1), (x + 30, y2)], fill=alpha_c, width=1)

    img = img.filter(ImageFilter.GaussianBlur(0.8))
    save(img, os.path.join(BASE, r"gear\knot-strength-test\cover.jpg"))


# ── 2. tackle-maintenance-care ────────────────────────────────────────────────
# メンテナンス。ダークティール背景に水滴とリールのシルエット。
def gen_maintenance():
    img = vgrad((8, 28, 38), (14, 48, 62))
    draw = ImageDraw.Draw(img)

    cx, cy = W // 2, H // 2

    # --- reel body (large circle) ---
    rr = 170
    draw.ellipse([(cx-rr, cy-rr), (cx+rr, cy+rr)], outline=(100, 160, 180), width=6)
    # inner ring
    draw.ellipse([(cx-80, cy-80), (cx+80, cy+80)], outline=(80, 140, 160), width=4)
    # spool core
    draw.ellipse([(cx-30, cy-30), (cx+30, cy+30)], fill=(60, 110, 130))

    # --- handle arm ---
    hx1, hy1 = cx + rr - 10, cy
    draw.rectangle([(hx1, hy1 - 10), (hx1 + 80, hy1 + 10)], fill=(90, 140, 160))
    draw.ellipse([(hx1 + 70, hy1 - 18), (hx1 + 106, hy1 + 18)], fill=(70, 120, 140))

    # --- bail arm arc ---
    bail = bezier((cx - rr + 20, cy + 40), (cx - rr - 30, cy), (cx - rr - 30, cy - 60), (cx - 60, cy - rr + 20))
    draw_thick_curve(draw, bail, (100, 170, 190), 5)

    # --- water drops (various sizes) ---
    drops = [
        (180, 120, 22), (380, 80, 14), (900, 150, 18), (1050, 90, 12),
        (150, 600, 16), (320, 680, 10), (950, 620, 20), (1100, 700, 13),
        (700, 100, 15), (80, 350, 11), (1150, 400, 17), (600, 750, 12),
        (820, 700, 9),  (250, 200, 8), (1020, 300, 14),
    ]
    for (dx, dy, dr) in drops:
        # teardrop shape (circle with pointed top)
        draw.ellipse([(dx-dr, dy-dr), (dx+dr, dy+dr)], fill=(160, 210, 230, 200), outline=(200, 230, 245), width=2)
        # highlight
        draw.ellipse([(dx-dr//3, dy-dr//2), (dx, dy-dr//4)], fill=(220, 240, 250))

    # --- water splash arcs around reel ---
    for angle_deg in range(0, 360, 45):
        a = math.radians(angle_deg)
        sr = rr + 30
        ex = cx + (sr + 80) * math.cos(a)
        ey = cy + (sr + 80) * math.sin(a)
        mx = cx + (sr + 50) * math.cos(a + 0.3)
        my = cy + (sr + 50) * math.sin(a + 0.3)
        draw.line([(cx + sr * math.cos(a), cy + sr * math.sin(a)), (mx, my)], fill=(120, 190, 210), width=2)

    img = img.filter(ImageFilter.GaussianBlur(0.6))
    save(img, os.path.join(BASE, r"gear\tackle-maintenance-care\cover.jpg"))


# ── 3. myakuzuri-extreme-guide ────────────────────────────────────────────────
# 脈釣り穂先（SMT vs ソリッド）。深海青にしなる穂先と波紋。
def gen_myakuzuri():
    img = vgrad((4, 10, 28), (10, 24, 52))
    draw = ImageDraw.Draw(img)

    # --- rod silhouette (long thin diagonal from upper-left) ---
    # rod butt section (thick, bottom-left)
    rod_main = bezier((80, H - 80), (200, H - 200), (400, 280), (620, 180))
    draw_thick_curve(draw, rod_main, (80, 100, 130), 18)

    # rod mid section (thinner)
    rod_mid = bezier((620, 180), (720, 140), (820, 110), (920, 90))
    draw_thick_curve(draw, rod_mid, (80, 105, 135), 10)

    # SMT tip (metallic gold, very thin, slight curve)
    tip_smt = bezier((920, 90), (980, 82), (1050, 78), (1140, 80))
    draw_thick_curve(draw, tip_smt, (200, 170, 80), 4)

    # solid tip comparison (slightly curved the other way, offset)
    tip_solid = bezier((920, 90), (980, 100), (1050, 108), (1140, 112))
    draw_thick_curve(draw, tip_solid, (100, 150, 160), 4)

    # --- ripple rings from tip (sensitivity visualization) ---
    tip_cx, tip_cy = 1120, 96
    for radius in [30, 60, 95, 135]:
        alpha_val = max(20, 100 - radius)
        col = (60, 120, 160)
        draw.arc(
            [(tip_cx - radius, tip_cy - radius//2),
             (tip_cx + radius, tip_cy + radius//2)],
            start=160, end=380, fill=col, width=2
        )

    # --- water surface line ---
    for x in range(0, W, 4):
        wave_y = H * 0.72 + 8 * math.sin(x / 80) + 4 * math.sin(x / 35)
        draw.point((x, int(wave_y)), fill=(40, 80, 120))
        draw.point((x, int(wave_y) + 1), fill=(30, 60, 100))

    # --- line descending into water ---
    fish_line = bezier((1120, 100), (1100, 300), (1080, 500), (1050, int(H * 0.72)))
    draw_thick_curve(draw, fish_line, (180, 200, 220), 2)

    # --- subtle vertical shimmer in background ---
    for i in range(12):
        sx = 60 + i * 100
        sy = H * 0.75 + 20
        draw.line([(sx, int(sy)), (sx + 20, H - 20)], fill=(20, 40, 70), width=1)

    img = img.filter(ImageFilter.GaussianBlur(0.7))
    save(img, os.path.join(BASE, r"fish-strategy\myakuzuri-extreme-guide\cover.jpg"))


# ── 4. tide-wind-calculation ──────────────────────────────────────────────────
# 二枚潮。上層と下層で逆方向の潮流矢印、くの字のハリスライン。
def gen_tide():
    img = vgrad((6, 18, 36), (8, 32, 52))
    draw = ImageDraw.Draw(img)

    # --- depth layer bands ---
    # surface layer (top ~35%)
    surface_y = int(H * 0.35)
    for y in range(0, surface_y):
        t = y / surface_y
        c = (int(20 + t*10), int(50 + t*20), int(80 + t*20))
        draw.line([(0, y), (W - 1, y)], fill=c, width=1)

    # mid layer separator line (wavy)
    for x in range(0, W, 3):
        wy = surface_y + int(6 * math.sin(x / 90))
        draw.line([(x, wy - 1), (x + 3, wy + 1)], fill=(60, 110, 150), width=2)

    # bottom layer (35-100%)
    bottom_y_start = surface_y + 8
    for y in range(bottom_y_start, H):
        t = (y - bottom_y_start) / (H - bottom_y_start)
        c = (int(8 + t*4), int(28 + t*8), int(48 + t*12))
        draw.line([(0, y), (W - 1, y)], fill=c, width=1)

    # second separator (deeper layer)
    deep_y = int(H * 0.72)
    for x in range(0, W, 3):
        wy = deep_y + int(4 * math.sin(x / 70 + 1.0))
        draw.line([(x, wy), (x + 3, wy)], fill=(40, 80, 120), width=2)

    # --- surface current arrows (going RIGHT, warm teal) ---
    arrow_col_surf = (60, 180, 170)
    for row_y in [int(H * 0.12), int(H * 0.22)]:
        for ax in range(80, W - 100, 180):
            aw = 120
            draw.line([(ax, row_y), (ax + aw, row_y)], fill=arrow_col_surf, width=3)
            # arrowhead
            draw.polygon([
                (ax + aw, row_y),
                (ax + aw - 18, row_y - 10),
                (ax + aw - 18, row_y + 10)
            ], fill=arrow_col_surf)

    # --- bottom current arrows (going LEFT, cool blue) ---
    arrow_col_deep = (60, 120, 200)
    for row_y in [int(H * 0.52), int(H * 0.63)]:
        for ax in range(100, W - 60, 180):
            aw = 120
            draw.line([(ax + aw, row_y), (ax, row_y)], fill=arrow_col_deep, width=3)
            # arrowhead (pointing left)
            draw.polygon([
                (ax, row_y),
                (ax + 18, row_y - 10),
                (ax + 18, row_y + 10)
            ], fill=arrow_col_deep)

    # --- fishing line making くの字 shape ---
    line_x = int(W * 0.55)
    # above water: straight down
    draw.line([(line_x, 0), (line_x, int(H * 0.28))], fill=(220, 220, 200), width=3)

    # in surface layer: pushed RIGHT by surface current
    surface_bend = bezier(
        (line_x, int(H * 0.28)),
        (line_x + 40, int(H * 0.32)),
        (line_x + 90, int(H * 0.38)),
        (line_x + 110, int(H * 0.48))
    )
    draw_thick_curve(draw, surface_bend, (220, 220, 200), 3)

    # in bottom layer: pushed LEFT by bottom current (くの字)
    bottom_bend = bezier(
        (line_x + 110, int(H * 0.48)),
        (line_x + 80, int(H * 0.56)),
        (line_x + 20, int(H * 0.66)),
        (line_x - 30, int(H * 0.78))
    )
    draw_thick_curve(draw, bottom_bend, (200, 210, 190), 3)

    # hook at the end
    hook_end = (line_x - 30, int(H * 0.78))
    hr = 18
    draw.arc(
        [(hook_end[0] - hr, hook_end[1]), (hook_end[0] + hr, hook_end[1] + 2*hr)],
        start=0, end=200, fill=(180, 190, 200), width=4
    )

    # --- label depth markers (short tick marks, no text) ---
    for marker_y, mx_len in [(surface_y, 40), (deep_y, 30)]:
        draw.line([(30, marker_y), (30 + mx_len, marker_y)], fill=(80, 120, 160), width=2)
        draw.line([(W - 30 - mx_len, marker_y), (W - 30, marker_y)], fill=(80, 120, 160), width=2)

    img = img.filter(ImageFilter.GaussianBlur(0.7))
    save(img, os.path.join(BASE, r"fish-strategy\tide-wind-calculation\cover.jpg"))


if __name__ == "__main__":
    gen_knot()
    gen_maintenance()
    gen_myakuzuri()
    gen_tide()
    print("All 4 covers generated.")
