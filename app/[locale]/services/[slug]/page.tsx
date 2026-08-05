import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import { routing, isValidLocale } from '@/i18n/routing';
import { isServiceSlug, servicePath, type ServiceSlug } from '@/lib/domain';
import { buildMetadata } from '@/lib/seo';
import { PageWrapper } from '@/components/layout';
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
  return buildMetadata({ locale, path: servicePath(slug) });
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

  return (
    <PageWrapper transparentHeader heroText="ink">
      <ServicePage slug={slug} />
    </PageWrapper>
  );
}
