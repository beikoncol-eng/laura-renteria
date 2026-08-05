import { MEDIA, type MediaAsset } from '@/lib/media';
import type { ServiceSlug } from '@/lib/domain';

/**
 * Per-area photography for the service pages — each consulting area gets its own
 * coherent visual world (see ASSET_MAP.md / SHOT_LIST.md). Every area now leads
 * with a distinct hero frame so the three pages have their own visual
 * personality while sharing the design system; supporting frames are drawn from
 * the same studio session.
 */
export interface ServiceMedia {
  hero: MediaAsset;
  craft: MediaAsset;
  support: MediaAsset;
}

export const SERVICE_MEDIA: Partial<Record<ServiceSlug, ServiceMedia>> = {
  'creative-direction': {
    hero: MEDIA.creativeDirectionHero,
    craft: MEDIA.creativeDirectionCraft,
    support: MEDIA.creativeDirectionSupport,
  },
  'digital-marketing': {
    hero: MEDIA.studioWide,
    craft: MEDIA.processCuration,
    support: MEDIA.heroPortrait,
  },
  'image-consulting': {
    hero: MEDIA.closingPortrait,
    craft: MEDIA.aboutPortrait,
    support: MEDIA.heroPortrait,
  },
};
