import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { routing, isValidLocale } from '@/i18n/routing';
import {
  isServiceSlug,
  servicePath,
  SITE,
  type ServiceSlug,
} from '@/lib/domain';
import { buildMetadata } from '@/lib/seo';
import { humanizeSlug } from '@/lib/utils';
import { PageWrapper, JsonLd } from '@/components/layout';
import { ServicePage } from '@/features/services';

/**
 * Consulting-area pages — the three canonical service pages. Copy is the
 * approved deck, reorganized to the current business model. Digital Marketing
 * and Image Consulting render with placeholder photography until their frames
 * exist, and with pending placeholders for capabilities the deck doesn't cover.
 */
const LIVE_SERVICES: ServiceSlug[] = [
  'creative-direction',
  'digital-marketing',
  'image-consulting',
];

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    LIVE_SERVICES.map((slug) => ({ locale, slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isValidLocale(locale) || !isServiceSlug(slug)) return {};
  const tAreas = await getTranslations({
    locale,
    namespace: 'services.areas',
  });
  const area = tAreas.raw(slug) as { tagline: string };
  return buildMetadata({
    locale,
    path: servicePath(slug),
    title: humanizeSlug(slug),
    description: area.tagline,
  });
}

export default async function ServiceAreaPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  if (!isServiceSlug(slug) || !LIVE_SERVICES.includes(slug)) {
    notFound();
  }

  const tNav = await getTranslations({ locale, namespace: 'nav' });
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: tNav('home'),
        item: `${SITE.url}/${locale}`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: tNav('services'),
        item: `${SITE.url}/${locale}/services`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: humanizeSlug(slug),
        item: `${SITE.url}/${locale}${servicePath(slug)}`,
      },
    ],
  };

  return (
    <PageWrapper transparentHeader heroText="ink">
      <JsonLd data={breadcrumb} />
      <ServicePage slug={slug} />
    </PageWrapper>
  );
}
