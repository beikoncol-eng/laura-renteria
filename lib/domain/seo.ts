/**
 * SEO & metadata defaults — structural configuration consumed by the metadata
 * builder (lib/seo.ts). No copy: default titles/descriptions are localized copy
 * and live in messages/CMS, not here.
 */
export const SEO_DEFAULTS = {
  ogType: 'website',
  twitterCard: 'summary_large_image',
  /** Default share image path (asset pending in public/assets/images). */
  defaultOgImage: '/assets/images/og-default.jpg',
} as const;

export const METADATA_DEFAULTS = {
  robots: { index: true, follow: true },
} as const;
