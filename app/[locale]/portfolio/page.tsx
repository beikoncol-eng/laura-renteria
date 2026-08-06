import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { routing, isValidLocale } from '@/i18n/routing';
import { buildMetadata } from '@/lib/seo';
import { ROUTES } from '@/lib/domain';
import { PageWrapper } from '@/components/layout';
import { PortfolioPage } from '@/features/portfolio';

/**
 * Portfolio route — the editorial gallery. Solid header (type-forward hero
 * above the full-bleed opener).
 */
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const resolved = isValidLocale(locale) ? locale : routing.defaultLocale;
  const t = await getTranslations({
    locale: resolved,
    namespace: 'seo.portfolio',
  });

  return {
    ...buildMetadata({
      locale: resolved,
      path: ROUTES.portfolio,
      title: t('title'),
      description: t('description'),
    }),
    // Unpublished (hidden from nav + sitemap) — keep it out of the index until
    // its content is ready, even if the URL is reached directly.
    robots: { index: false, follow: true },
  };
}

export default async function Portfolio({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <PageWrapper>
      <PortfolioPage />
    </PageWrapper>
  );
}
