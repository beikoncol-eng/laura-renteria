import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/domain';

/**
 * robots.txt — allow indexing and point to the sitemap. Note: Vercel preview
 * deployments are automatically served with `X-Robots-Tag: noindex`, so the RC
 * review URL will not be indexed even though this permits it.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: `${SITE.url}/sitemap.xml`,
    host: SITE.url,
  };
}
