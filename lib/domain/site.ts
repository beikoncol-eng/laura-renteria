/**
 * Site identity — the top-level facts about the property.
 * Structure and configuration only; no user-facing copy.
 */

/**
 * Resolve the canonical origin used for metadata, canonical URLs, sitemap and
 * robots. Priority:
 *   1. NEXT_PUBLIC_SITE_URL — set this to the production domain on Vercel.
 *   2. VERCEL_URL — the per-deployment URL (correct origin for RC previews).
 *   3. localhost — local development.
 */
function resolveSiteUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL;
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return 'http://localhost:3000';
}

export const SITE = {
  name: 'Laura Rentería',
  url: resolveSiteUrl(),
  defaultLocale: 'en',
  locales: ['en', 'es'] as const,
} as const;

export type SiteLocale = (typeof SITE.locales)[number];
