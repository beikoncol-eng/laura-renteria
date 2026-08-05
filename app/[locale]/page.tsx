import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { routing, isValidLocale } from '@/i18n/routing';
import { buildMetadata } from '@/lib/seo';
import { PageWrapper } from '@/components/layout';
import { Home } from '@/features/home';

/**
 * Home route. Mounts the application shell with a transparent header (there is
 * a hero) and composes the Home sections. Approved copy is wired via next-intl;
 * the Services section and service pages remain on placeholders pending the
 * service-model reconciliation (see the integration report).
 */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const resolved = isValidLocale(locale) ? locale : routing.defaultLocale;
  const t = await getTranslations({ locale: resolved, namespace: 'seo.home' });

  const meta = buildMetadata({
    locale: resolved,
    path: '/',
    title: t('title'),
    description: t('description'),
  });

  // Home title is complete on its own — bypass the layout's "%s — …" template
  // while keeping the OG/Twitter titles set by buildMetadata.
  return { ...meta, title: { absolute: t('title') } };
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <PageWrapper transparentHeader heroText="ink">
      <Home />
    </PageWrapper>
  );
}
