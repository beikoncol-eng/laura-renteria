import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { routing, isValidLocale } from '@/i18n/routing';
import { buildMetadata } from '@/lib/seo';
import { ROUTES } from '@/lib/domain';
import { PageWrapper } from '@/components/layout';
import { ServicesLanding } from '@/features/services-landing';

/**
 * Services landing route — the editorial index of the three consulting areas.
 * Solid header (type-forward hero, no full-bleed portrait behind the bar).
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
    namespace: 'seo.services',
  });

  return buildMetadata({
    locale: resolved,
    path: ROUTES.services,
    title: t('title'),
    description: t('description'),
  });
}

export default async function Services({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <PageWrapper>
      <ServicesLanding />
    </PageWrapper>
  );
}
