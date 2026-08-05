/**
 * Service model — the heart of the business domain.
 *
 * The business exposes THREE consulting areas. Each area contains a collection
 * of CAPABILITIES (never "subservices"): capabilities only explain what an area
 * includes — the website sells the areas, not the capabilities. Capabilities
 * are not routed and have no pages of their own.
 *
 * Structure only. All labels/descriptions/section copy resolve from
 * messages/CMS via the key helpers below.
 */

/* ── Consulting areas ────────────────────────────────────────────────────── */

export const SERVICE_SLUGS = [
  'creative-direction',
  'digital-marketing',
  'image-consulting',
] as const;

export type ServiceSlug = (typeof SERVICE_SLUGS)[number];

/* ── Capabilities ("what's included") ────────────────────────────────────── */

/**
 * Every distinct capability, deduplicated. Some intentionally belong to more
 * than one area (e.g. Content Strategy in Creative Direction and Digital
 * Marketing); the registry stores one label per slug, each area lists its own
 * ordered subset below.
 */
export const CAPABILITY_SLUGS = [
  // Creative Direction
  'brand-strategy',
  'branding',
  'creative-direction',
  'content-strategy',
  'brand-experience',
  'campaign-direction',
  'art-direction',
  // Digital Marketing
  'marketing-strategy',
  'social-media-strategy',
  'website-strategy',
  'website-design-development',
  'landing-pages',
  'customer-journey-strategy',
  'analytics-performance-optimization',
  // Image Consulting
  'image-consulting',
  'personal-branding',
  'presence-communication',
  'executive-presence',
  'wardrobe-strategy',
  'personal-positioning',
  'visual-identity-for-professionals',
] as const;

export type CapabilitySlug = (typeof CAPABILITY_SLUGS)[number];

export interface ServiceArea {
  slug: ServiceSlug;
  /** Ordered capabilities shown under this area's "what's included". */
  capabilities: CapabilitySlug[];
}

/** The single ordered definition. Order drives display order everywhere. */
export const SERVICE_AREAS: readonly ServiceArea[] = [
  {
    slug: 'creative-direction',
    capabilities: [
      'brand-strategy',
      'branding',
      'creative-direction',
      'content-strategy',
      'brand-experience',
      'campaign-direction',
      'art-direction',
    ],
  },
  {
    slug: 'digital-marketing',
    capabilities: [
      'marketing-strategy',
      'social-media-strategy',
      'content-strategy',
      'website-strategy',
      'website-design-development',
      'landing-pages',
      'customer-journey-strategy',
      'analytics-performance-optimization',
    ],
  },
  {
    slug: 'image-consulting',
    capabilities: [
      'image-consulting',
      'personal-branding',
      'presence-communication',
      'executive-presence',
      'wardrobe-strategy',
      'personal-positioning',
      'visual-identity-for-professionals',
    ],
  },
] as const;

/**
 * Canonical section order for a consulting-area page. Kept here so page
 * scaffolding and in-page navigation stay consistent with the spec.
 */
export const SERVICE_SECTIONS = [
  'overview',
  'who-its-for',
  'problems',
  'whats-included',
  'process',
  'faq',
  'cta',
] as const;

export type ServiceSection = (typeof SERVICE_SECTIONS)[number];

/* ── Derived lookups + guards ────────────────────────────────────────────── */

const AREA_BY_SLUG: Record<ServiceSlug, ServiceArea> = Object.fromEntries(
  SERVICE_AREAS.map((area) => [area.slug, area]),
) as Record<ServiceSlug, ServiceArea>;

export function getServiceArea(slug: ServiceSlug): ServiceArea {
  return AREA_BY_SLUG[slug];
}

export function isServiceSlug(value: string): value is ServiceSlug {
  return (SERVICE_SLUGS as readonly string[]).includes(value);
}

export function isCapabilitySlug(value: string): value is CapabilitySlug {
  return (CAPABILITY_SLUGS as readonly string[]).includes(value);
}

/* ── Message-key helpers ─────────────────────────────────────────────────── */

export const serviceNameKey = (slug: ServiceSlug) => `${slug}.name` as const;
export const serviceDescriptionKey = (slug: ServiceSlug) =>
  `${slug}.description` as const;
export const capabilityLabelKey = (slug: CapabilitySlug) => `${slug}` as const;
