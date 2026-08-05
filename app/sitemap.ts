import type { MetadataRoute } from 'next';
import { routing } from '@/i18n/routing';
import { SITE, SERVICE_SLUGS, servicePath } from '@/lib/domain';

/**
 * Sitemap — only LIVE routes (home + the three consulting-area pages), each with
 * per-locale hreflang alternates. Pages not yet built are omitted so search
 * engines aren't pointed at 404s.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ['', ...SERVICE_SLUGS.map((slug) => servicePath(slug))];
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
