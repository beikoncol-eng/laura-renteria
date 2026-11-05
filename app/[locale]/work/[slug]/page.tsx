import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { routing, isValidLocale } from '@/i18n/routing';
import { CASE_STUDIES, getCaseStudy, workPath } from '@/lib/domain';
import { buildMetadata } from '@/lib/seo';
import { PageWrapper } from '@/components/layout';
import { CaseStudyPage } from '@/features/work';
import { CASE_MEDIA } from '@/features/work/case-media';

/**
 * Case-study route. Every case is built so it can be reviewed by direct URL;
 * an unpublished case (awaiting client authorization) stays noindex and is
 * linked from nowhere until `published` flips in lib/domain/work.ts.
 */
export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    CASE_STUDIES.map((c) => ({ locale, slug: c.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const study = getCaseStudy(slug);
  if (!isValidLocale(locale) || !study) return {};
  const t = await getTranslations({ locale, namespace: 'work.cases' });
  const copy = t.raw(slug) as { name: string; tagline: string };

  return {
    ...buildMetadata({
      locale,
      path: workPath(slug),
      title: copy.name,
      description: copy.tagline,
      image: CASE_MEDIA[slug]?.cover.src,
    }),
    ...(study.published ? {} : { robots: { index: false, follow: false } }),
  };
}

export default async function CaseStudy({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const study = getCaseStudy(slug);
  if (!study) notFound();

  return (
    <PageWrapper transparentHeader heroText="paper">
      <CaseStudyPage study={study} />
    </PageWrapper>
  );
}
