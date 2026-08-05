import { MEDIA, type MediaAsset } from '@/lib/media';
import type { ServiceSlug } from '@/lib/domain';

/**
 * Per-area photography for the service pages — each consulting area gets its own
 * coherent visual world (see ASSET_MAP.md / SHOT_LIST.md). Only Creative
 * Direction is populated; the others await their working-lifestyle frames, so
 * their sections fall back to structural placeholders.
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
};
