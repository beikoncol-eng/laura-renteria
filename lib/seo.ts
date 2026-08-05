import type { Metadata } from 'next';
import { routing, type Locale } from '@/i18n/routing';
import { SITE, SEO_DEFAULTS } from '@/lib/domain';

/**
 * SEO layer — localized metadata builder.
 *
 * In the App Router, SEO is expressed through the Metadata API rather than a
 * rendered component, so the "SEO Layout" is this reusable builder. Every page
 * calls it from `generateMetadata` to produce independently indexable, fully
 * localized metadata: canonical URL, hreflang alternates (incl. x-default),
 * Open Graph, and Twitter cards. Titles/descriptions come from messages/CMS —
 * never hardcoded here.
 */

const OG_LOCALE: Record<Locale, string> = {
  en: 'en_US',
  es: 'es_ES',
};

export interface BuildMetadataArgs {
  locale: Locale;
  /** Route without the locale prefix, e.g. '/about'. Home is '' or '/'. */
  path?: string;
  title?: string;
  description?: string;
  /** Absolute or root-relative OG/Twitter image. */
  image?: string;
}

export function buildMetadata({
  locale,
  path = '',
  title,
  description,
  image,
}: BuildMetadataArgs): Metadata {
  const cleanPath = path === '/' ? '' : path;
  const canonical = `${SITE.url}/${locale}${cleanPath}`;

  const languages: Record<string, string> = {};
  for (const l of routing.locales) {
    languages[l] = `${SITE.url}/${l}${cleanPath}`;
  }
  languages['x-default'] = `${SITE.url}/${routing.defaultLocale}${cleanPath}`;

  // Default every page to the brand OG card (resolved to absolute via
  // metadataBase) so shared links always present a polished visual identity.
  const images = [image ?? SEO_DEFAULTS.defaultOgImage];

  return {
    ...(title ? { title } : {}),
    ...(description ? { description } : {}),
    alternates: { canonical, languages },
    openGraph: {
      type: SEO_DEFAULTS.ogType,
      siteName: SITE.name,
      locale: OG_LOCALE[locale],
      url: canonical,
      ...(title ? { title } : {}),
      ...(description ? { description } : {}),
      ...(images ? { images } : {}),
    },
    twitter: {
      card: SEO_DEFAULTS.twitterCard,
      ...(title ? { title } : {}),
      ...(description ? { description } : {}),
      ...(images ? { images } : {}),
    },
  };
}
