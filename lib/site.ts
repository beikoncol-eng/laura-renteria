/**
 * Site-level constants (non-editorial). Real copy, navigation labels and
 * metadata come from Sanity + next-intl messages in a later phase — this
 * holds only structural configuration, never marketing content.
 */
export const SITE = {
  name: 'Laura Rentería',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000',
  defaultLocale: 'en',
  locales: ['en', 'es'] as const,
} as const;

export type SiteLocale = (typeof SITE.locales)[number];
