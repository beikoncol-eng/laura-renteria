"""Web derivatives for the POPULAR by El Conuco case study.

Source: the brand-application mockups in the Popular project. Output goes to
public/assets/images/work/popular (max 2600px, JPEG q82, like the studio set).
Re-run after any source changes:  python scripts/popular-case-assets.py
(The logo PNGs, illustration masks and website recordings are copied as-is;
the recordings come from popular_web/video_caso/grabar_web.cjs.)
"""
from pathlib import Path

from PIL import Image

SRC = Path("C:/Users/pablo/Desktop/popular_web")
OUT = Path(__file__).resolve().parent.parent / "public/assets/images/work/popular"
APPS = SRC / "POPULAR_BRAND_ASSETS_v2/08_APLICACIONES"

# Application mockups are 1920×1080 slides with a 96px title bar on top.
APP_SLIDES = {
    "popular-cover": "PACKAGING/PKG-01_bolsa/01_REFERENCIA_ORIGINAL/PKG-01_bolsa_A-p07.png",
    "popular-cards": "OTRAS_APLICACIONES/APP-01_tarjetas-de-presentacion/01_REFERENCIA_ORIGINAL/APP-01_tarjetas-de-presentacion_A-p05.png",
    "popular-box": "PACKAGING/PKG-02_caja-rectangular/01_REFERENCIA_ORIGINAL/PKG-02_caja-rectangular_A-p08.png",
    "popular-bowls": "PACKAGING/PKG-03_bowl/01_REFERENCIA_ORIGINAL/PKG-03_bowl_A-p09.png",
    "popular-uniforms": "OTRAS_APLICACIONES/APP-02_uniformes-cocina-ilustrados/01_REFERENCIA_ORIGINAL/APP-02_uniformes-cocina-ilustrados_A-p14.png",
    "popular-instagram": "OTRAS_APLICACIONES/APP-06_redes-instagram/01_REFERENCIA_ORIGINAL/APP-06_redes-instagram_A-p21.png",
}


def save(img: Image.Image, name: str) -> None:
    img = img.convert("RGB")
    if max(img.size) > 2600:
        img.thumbnail((2600, 2600), Image.LANCZOS)
    path = OUT / f"{name}.jpg"
    img.save(path, quality=82, optimize=True, progressive=True)
    print(f"{name}.jpg  {img.width}×{img.height}")


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    for name, rel in APP_SLIDES.items():
        im = Image.open(APPS / rel)
        save(im.crop((0, 96, im.width, im.height)), name)


if __name__ == "__main__":
    main()
