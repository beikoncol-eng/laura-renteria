import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { routing, isValidLocale } from '@/i18n/routing';
import { buildMetadata } from '@/lib/seo';
import { ROUTES } from '@/lib/domain';
import { PageWrapper } from '@/components/layout';
import { AboutPage } from '@/features/about';

/**
 * About route — the long-form editorial biography. Transparent header over the
 * portrait hero; approved copy wired via next-intl.
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
  const t = await getTranslations({ locale: resolved, namespace: 'seo.about' });

  return buildMetadata({
    locale: resolved,
    path: ROUTES.about,
    title: t('title'),
    description: t('description'),
  });
}

export default async function About({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <PageWrapper transparentHeader heroText="ink">
      <AboutPage />
    </PageWrapper>
  );
}
