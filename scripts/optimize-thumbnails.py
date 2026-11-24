from pathlib import Path
from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parent.parent
OUTPUT = ROOT / "assets" / "generated-thumbnails"
OUTPUT.mkdir(parents=True, exist_ok=True)

def generate(source: Path, size: int) -> tuple[int, int]:
    target = OUTPUT / f"{source.stem}-{size}.webp"
    with Image.open(source) as original:
        image = ImageOps.exif_transpose(original)
        image.thumbnail((size, size), Image.Resampling.LANCZOS)
        if image.mode not in ("RGB", "RGBA"):
            image = image.convert("RGBA" if "transparency" in image.info else "RGB")
        image.save(target, "WEBP", quality=84, method=6)
    before, after = source.stat().st_size, target.stat().st_size
    if after >= before:
        target.unlink()
        return before, before
    return before, after

sources = [(p, 960) for p in sorted((ROOT / "assets/img/portfolio").iterdir())
           if p.suffix.lower() in {".png", ".webp", ".jpg", ".jpeg"}]
profile = ROOT / "assets/img/profile/profile_face.png"
sources.extend([(profile, 96), (profile, 800)])
before_total, after_total = 0, 0
for source, size in sources:
    before, after = generate(source, size)
    before_total += before
    after_total += after
    print(f"{source.name} @ {size}: {before} -> {after} bytes")
print(f"Generated thumbnail candidates: {len(sources)}; total {before_total} -> {after_total} bytes")
