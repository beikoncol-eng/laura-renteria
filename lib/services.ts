/**
 * Service taxonomy — canonical source of truth for Laura's offering.
 *
 * POSITIONING (supersedes the earlier eleven-service / territory model):
 * the business is THREE consulting areas. Each area is a primary service with
 * its own page; the specialized capabilities are presented only as "what's
 * included" within an area — they are NOT separate pages or routes.
 *
 * Hierarchy is always: consulting area first, capabilities second. Every
 * consumer (Home blocks, Services page, service detail pages, navigation, the
 * three photographic worlds) reads structure from here.
 *
 * STRUCTURE ONLY. Names, descriptions, capability labels, and section copy
 * resolve at render time from the `services` / `capabilities` message
 * namespaces or the CMS. No copy lives in this module.
 */

/* ── Consulting areas (primary services) ─────────────────────────────────── */

export const SERVICE_SLUGS = [
  'creative-direction',
  'digital-marketing',
  'image-consulting',
] as const;

export type ServiceSlug = (typeof SERVICE_SLUGS)[number];

/* ── Capabilities ("what's included") ────────────────────────────────────── */

/**
 * Every distinct capability, deduplicated. Some capabilities intentionally
 * appear under more than one area (e.g. Content Strategy in both Creative
 * Direction and Digital Marketing); the registry keeps one label per slug,
 * while each area lists its own ordered subset below.
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

export interface Service {
  slug: ServiceSlug;
  /** Ordered capabilities shown under this area's "what's included". */
  includes: CapabilitySlug[];
}

/**
 * The single ordered definition. Order drives display order everywhere:
 * on the Services page, in Home blocks, and in any grouped navigation.
 */
export const SERVICES: readonly Service[] = [
  {
    slug: 'creative-direction',
    includes: [
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
    includes: [
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
    includes: [
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
 * Canonical section order for a service detail page. Kept here so page
 * scaffolding and any in-page navigation stay consistent with the spec.
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

/* ── Derived lookups ─────────────────────────────────────────────────────── */

const SERVICE_BY_SLUG: Record<ServiceSlug, Service> = Object.fromEntries(
  SERVICES.map((service) => [service.slug, service]),
) as Record<ServiceSlug, Service>;

/* ── Helpers ─────────────────────────────────────────────────────────────── */

export function getService(slug: ServiceSlug): Service {
  return SERVICE_BY_SLUG[slug];
}

export function isServiceSlug(value: string): value is ServiceSlug {
  return (SERVICE_SLUGS as readonly string[]).includes(value);
}

export function isCapabilitySlug(value: string): value is CapabilitySlug {
  return (CAPABILITY_SLUGS as readonly string[]).includes(value);
}

/* ── Routes ──────────────────────────────────────────────────────────────── */

/** Route to a consulting-area page (next-intl adds the locale prefix). */
export function servicePath(slug: ServiceSlug): string {
  return `/services/${slug}`;
}

/** The Services page is the single gateway to the three consulting areas. */
export const SERVICES_INDEX_PATH = '/services' as const;

/* ── Message-key helpers ─────────────────────────────────────────────────── */

export const serviceNameKey = (slug: ServiceSlug) => `${slug}.name` as const;
export const serviceDescriptionKey = (slug: ServiceSlug) =>
  `${slug}.description` as const;
export const capabilityLabelKey = (slug: CapabilitySlug) => `${slug}` as const;
