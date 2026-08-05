import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { routing, isValidLocale } from '@/i18n/routing';
import { buildMetadata } from '@/lib/seo';
import { ROUTES } from '@/lib/domain';
import { PageWrapper } from '@/components/layout';
import { ContactPage } from '@/features/contact';

/**
 * Contact route — the dedicated contact page. Solid header (type-forward
 * header, no hero image).
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
    namespace: 'seo.contact',
  });

  return buildMetadata({
    locale: resolved,
    path: ROUTES.contact,
    title: t('title'),
    description: t('description'),
  });
}

export default async function Contact({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <PageWrapper>
      <ContactPage />
    </PageWrapper>
  );
}
