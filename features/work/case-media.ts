import type { MediaAsset } from '@/lib/media';

/**
 * Per-case photography: the cover (cards, Open Graph) and the frames of the
 * horizontal gallery. Brand marks and website recordings live in each case's
 * brand.ts. POPULAR mockups come from scripts/popular-case-assets.py; Ansias
 * photographs are the artist's own, resized for the web.
 */
export interface CaseMedia {
  /** Card / Open Graph image. */
  cover: MediaAsset;
  /** Frames of the horizontal gallery. */
  gallery: MediaAsset[];
}

const DIR = '/assets/images/work/popular';
const AN_DIR = '/assets/images/work/ansias';
const PORTRAIT = { width: 1200, height: 1600 } as const;
const SLIDE = { width: 1920, height: 984 } as const;

export const CASE_MEDIA: Record<string, CaseMedia> = {
  'popular-el-conuco': {
    cover: {
      src: `${DIR}/popular-cover.jpg`,
      ...SLIDE,
      alt: 'POPULAR by El Conuco paper bags with the logotype and red food illustrations.',
    },
    gallery: [
      {
        src: `${DIR}/popular-cover.jpg`,
        ...SLIDE,
        alt: 'POPULAR paper bags with the logotype and red food illustrations.',
      },
      {
        src: `${DIR}/popular-cards.jpg`,
        ...SLIDE,
        alt: 'POPULAR business cards in kraft with illustrated backs.',
      },
      {
        src: `${DIR}/popular-box.jpg`,
        ...SLIDE,
        alt: 'POPULAR takeaway box with logotype and illustrations.',
      },
      {
        src: `${DIR}/popular-bowls.jpg`,
        ...SLIDE,
        alt: 'POPULAR takeaway bowls in the brand colours.',
      },
      {
        src: `${DIR}/popular-uniforms.jpg`,
        ...SLIDE,
        alt: 'POPULAR kitchen uniforms and aprons.',
      },
      {
        src: `${DIR}/popular-instagram.jpg`,
        ...SLIDE,
        alt: 'POPULAR Instagram profile, feed and stories.',
      },
    ],
  },
  'ansias-tattoo': {
    cover: {
      src: `${AN_DIR}/hero.jpg`,
      width: 2400,
      height: 1587,
      alt: 'Ansias tattooing a client in his studio, in black and white.',
    },
    gallery: [
      {
        src: `${AN_DIR}/work-01.jpg`,
        ...PORTRAIT,
        alt: 'Black and grey backpiece by Ansias.',
      },
      {
        src: `${AN_DIR}/work-02.jpg`,
        ...PORTRAIT,
        alt: 'Dragon backpiece by Ansias.',
      },
      {
        src: `${AN_DIR}/work-03.jpg`,
        ...PORTRAIT,
        alt: 'Black and grey sleeve by Ansias.',
      },
      {
        src: `${AN_DIR}/work-04.jpg`,
        ...PORTRAIT,
        alt: 'Black and grey snake tattoo by Ansias.',
      },
      {
        src: `${AN_DIR}/work-05.jpg`,
        ...PORTRAIT,
        alt: 'Blackwork peony tattoo by Ansias.',
      },
      {
        src: `${AN_DIR}/work-06.jpg`,
        ...PORTRAIT,
        alt: 'Blackwork shoulder piece by Ansias.',
      },
      {
        src: `${AN_DIR}/work-07.jpg`,
        ...PORTRAIT,
        alt: 'Blackwork heart portrait tattoo by Ansias.',
      },
      {
        src: `${AN_DIR}/work-08.jpg`,
        ...PORTRAIT,
        alt: 'Blackwork tattoo by Ansias.',
      },
    ],
  },
};
