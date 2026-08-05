import type { MetadataRoute } from 'next';
import { routing } from '@/i18n/routing';
import { SITE, ROUTES, SERVICE_SLUGS, servicePath } from '@/lib/domain';

/**
 * Sitemap — every LIVE route (home, the primary pages, and the three
 * consulting-area pages), each with per-locale hreflang alternates. Pages not
 * yet built are omitted so search engines aren't pointed at 404s.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  // Work and Portfolio exist as routes but are unpublished (hidden from public
  // navigation), so they are intentionally excluded from the sitemap.
  const paths = [
    '',
    ROUTES.about,
    ROUTES.services,
    ROUTES.contact,
    ...SERVICE_SLUGS.map((slug) => servicePath(slug)),
  ];
  const lastModified = new Date();

  const languagesFor = (path: string) =>
    Object.fromEntries(
      routing.locales.map((locale) => [locale, `${SITE.url}/${locale}${path}`]),
    );

  return paths.flatMap((path) =>
    routing.locales.map((locale) => ({
      url: `${SITE.url}/${locale}${path}`,
      lastModified,
      alternates: { languages: languagesFor(path) },
    })),
  );
}
