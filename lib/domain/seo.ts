/**
 * SEO & metadata defaults — structural configuration consumed by the metadata
 * builder (lib/seo.ts). No copy: default titles/descriptions are localized copy
 * and live in messages/CMS, not here.
 */
export const SEO_DEFAULTS = {
  ogType: 'website',
  twitterCard: 'summary_large_image',
  /** Brand share card, 1200×630 (public/assets/images/og-default.jpg). */
  defaultOgImage: '/assets/images/og-default.jpg',
  ogImageWidth: 1200,
  ogImageHeight: 630,
} as const;

export const METADATA_DEFAULTS = {
  robots: { index: true, follow: true },
} as const;

/** Indexing keywords — the practice's core disciplines. */
export const SEO_KEYWORDS = [
  'Brand Strategy',
  'Creative Direction',
  'Image Consulting',
  'Brand Consultant',
  'Personal Branding',
  'Brand Identity',
  'Luxury Branding',
  'Brand Positioning',
  'Communication Strategy',
  'Creative Consultant',
  'Visual Identity',
] as const;
