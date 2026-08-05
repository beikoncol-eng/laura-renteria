/**
 * Media map — the code-level Asset Map.
 *
 * Central registry of the official photography used across the site, with real
 * dimensions (for next/image, zero CLS) and factual alt text (accessibility,
 * not marketing copy; localized alt can move to the CMS later).
 *
 * Source frames are the studio session IMG_35xx; web derivatives live in
 * /assets/images/web (2600px, q82). Originals are archived out of the deploy.
 * See ASSET_MAP.md for the full placement rationale and the reserved frames.
 */
export interface MediaAsset {
  src: string;
  width: number;
  height: number;
  alt: string;
}

const PORTRAIT = { width: 1951, height: 2600 } as const;
const LANDSCAPE = { width: 2600, height: 1951 } as const;

export const MEDIA = {
  /** Hero — standing, editorial, generous negative space (3505). */
  heroPortrait: {
    src: '/assets/images/web/laura-3505.jpg',
    ...PORTRAIT,
    alt: 'Laura Rentería standing in a studio, reviewing a magazine.',
  },
  /** About — seated, direct gaze; builds trust (3501). */
  aboutPortrait: {
    src: '/assets/images/web/laura-3501.jpg',
    ...PORTRAIT,
    alt: 'Portrait of Laura Rentería seated, looking to camera.',
  },
  /** Editorial break — wide, direct gaze, full environment (3510, landscape). */
  editorialBreak: {
    src: '/assets/images/web/laura-3510.jpg',
    ...LANDSCAPE,
    alt: 'Laura Rentería seated on a studio desk amid moodboards, looking to camera.',
  },
  /** Process — arranging references on the moodboard; craft in motion (3509). */
  processCuration: {
    src: '/assets/images/web/laura-3509.jpg',
    ...PORTRAIT,
    alt: 'Laura Rentería arranging printed references on a studio moodboard.',
  },
  /** Closing — direct gaze, editorial; connection at the decision moment (3504). */
  closingPortrait: {
    src: '/assets/images/web/laura-3504.jpg',
    ...PORTRAIT,
    alt: 'Laura Rentería seated, looking to camera.',
  },
  /** Studio-wide — the workspace: desk, chair and moodboard (3502). */
  studioWide: {
    src: '/assets/images/web/laura-3502.jpg',
    ...PORTRAIT,
    alt: 'Laura Rentería reclining in the studio beside a desk and moodboard.',
  },

  /* ── Creative Direction service page (reserved frames) ─────────────────── */

  /** CD hero — thoughtful, reference book in arms; creative authority (3507). */
  creativeDirectionHero: {
    src: '/assets/images/web/laura-3507.jpg',
    ...PORTRAIT,
    alt: 'Laura Rentería holding a reference book in a studio, looking aside.',
  },
  /** CD craft — back to camera, curating the moodboard; the work itself (3508). */
  creativeDirectionCraft: {
    src: '/assets/images/web/laura-3508.jpg',
    ...PORTRAIT,
    alt: 'Laura Rentería arranging references on a studio moodboard, seen from behind.',
  },
  /** CD supporting — standing with a reference book, moodboard behind (3506). */
  creativeDirectionSupport: {
    src: '/assets/images/web/laura-3506.jpg',
    ...PORTRAIT,
    alt: 'Laura Rentería standing with a reference book beside a moodboard.',
  },
} as const satisfies Record<string, MediaAsset>;

export type MediaKey = keyof typeof MEDIA;
