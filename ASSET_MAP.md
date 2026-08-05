# Asset Map — Laura Rentería

The reference for all media placement. Nothing is placed without an editorial
reason. Source frames are one studio session (IMG_3501–IMG_3510). Optimized web
derivatives (2600px, q82) live in `public/assets/images/web/` and are what the
site references via `lib/media.ts`; `next/image` emits responsive AVIF/WebP.

## The photography, honestly

One session, one subject, one wardrobe (cream cropped blazer, brown wide-leg
trousers, clear aviator glasses, low bun), one neutral studio. The palette —
warm white, cream, charcoal-brown, greige, chrome — matches the brand exactly,
and the frames are genuinely editorial: soft even light, relaxed-confident body
language, no exaggerated smiles. As a **system**, though, it is narrow: same
look/day throughout, all posed studio portraits, no true variety of scale,
environment, or documentary "working" candor, and **no client/project work**.
That shapes every placement below and the "missing assets" list.

## Images

| Frame | Orientation | Placement | Role | Why |
|---|---|---|---|---|
| **3505** | Portrait | **Home / Hero** | Primary | Full-length, standing, generous negative space, gaze leads inward — the establishing frame. |
| **3501** | Portrait | **Home / About** | Primary | Seated, **direct gaze** — trust before credentials. |
| **3510** | Landscape | **Home / Editorial Break** | Background (full-bleed) | The only landscape; direct gaze, full environment — a cinematic pause, no crop fight. |
| **3509** | Portrait | **Home / Process** | Supporting | Documentary — arranging references on the moodboard. Shows the method. |
| **3504** | Portrait | **Home / Closing CTA** | Primary | Editorial **direct gaze** — connection at the decision moment. |
| 3502 | Portrait | Reserved → About page / Image Consulting | Supporting | Wide reclining environmental; "the studio." |
| 3503 | Portrait | Reserved → Contact / Image Consulting | Supporting | Warmest frame (genuine laugh) — humanizing, use sparingly. |
| 3506 | Portrait | Reserved → Services / Creative Direction | Supporting | Holding the reference book; creative context. |
| 3507 | Portrait | Reserved → Creative Direction | Supporting | Thoughtful, book in arms; strong editorial. |
| 3508 | Portrait | Reserved → Creative Direction / Process | Supporting | Back-to-camera, curating the moodboard — pure craft. |

No frame is used more than once. Five are held back deliberately for internal
pages — the Home page is not a gallery.

## Videos

Three files in `public/assets/video/` (singular), named by intent:

| File | Intended | Decision |
|---|---|---|
| `laura intro home.mp4` (205 MB) | Hero | **Not shipped.** A 205 MB autoplay hero would destroy LCP and the editorial calm. Hero uses a still now; a compressed, muted, looping cut can later sit behind the hero type column. |
| `laura intro marketing.mp4` (221 MB) | Digital Marketing service page | Defer to that page, compressed. Not a Home asset. |
| `Laura intro asesoria imagen.mp4` (161 MB) | Image Consulting service page | Defer to that page, compressed. Not a Home asset. |

**No video is wired.** This environment has no ffmpeg, so I cannot transcode or
generate posters, and the raw files are unusable on the web as-is.

### Required video derivatives (before any video ships)
Per file: **H.264 MP4 + VP9/AV1 WebM**, **1080p**, **≤ ~6–8 MB**, **~12–20 s**,
**muted, no audio track, looping**, plus a **poster** still (first clean frame).
Editorial treatment: slow, ambient, no captions/logos, never social-media pacing.
Autoplay muted + `playsInline`; pause off-screen; respect `prefers-reduced-motion`
(show poster only).

## Delivery / housekeeping
- Optimized web images: `public/assets/images/web/laura-35xx.jpg` (committed).
- Raw originals (`IMG_35xx.JPG`, ~130 MB) and raw videos (~590 MB) are
  **git-ignored**. Archive them **out of the deploy bundle** (e.g. `/media-source/`)
  before shipping — `public/` is served in full by Vercel.

## Missing photography (to reach world-class)
1. **Client / project work** — the single biggest gap. Featured Work and the
   service pages need real brand/campaign/web deliverables; portraits cannot
   substitute. Featured Work stays on placeholders until these exist.
2. **Detail / texture / environment** stills (paper, fabric, type, hands,
   architecture) for editorial breaks and atmosphere.
3. **A second wardrobe / setting** and a **true wide hero plate** with intentional
   negative space for text — so the site doesn't read as one shoot.
4. **A compressed hero video** as specified above.
