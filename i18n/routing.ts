import { defineRouting } from 'next-intl/routing';

/**
 * Locale routing for the site.
 *
 * - English is the default (primary) language.
 * - Spanish is the secondary language.
 * - `localePrefix: 'always'` guarantees `/en` and `/es` prefixes on every
 *   route, matching the documented IA (/en, /es) and hreflang strategy.
 * - No automatic locale detection: the visitor's choice is respected and
 *   persisted (handled by next-intl's cookie).
 */
export const routing = defineRouting({
  locales: ['en', 'es'],
  defaultLocale: 'en',
  localePrefix: 'always',
  localeDetection: false,
});

export type Locale = (typeof routing.locales)[number];

/** Type guard: narrows an unknown string to a supported locale. */
export function isValidLocale(locale: string | undefined): locale is Locale {
  return (
    locale !== undefined && (routing.locales as readonly string[]).includes(locale)
  );
}
