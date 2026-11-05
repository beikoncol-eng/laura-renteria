import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Section, Container, Grid } from '@/components/layout';
import { Text } from '@/components/typography';
import { Reveal, EditorialImage } from '@/components/ui';
import { workPath, type CaseStudy } from '@/lib/domain';
import { CASE_MEDIA } from './case-media';

/**
 * Case cards — a large cover frame with name, tagline and year, linking to the
 * case. Used by the Work index and, as "Work done", on the consulting-area
 * pages a case illustrates. Renders nothing when there are no published cases.
 */
export function CaseCards({ cases }: { cases: readonly CaseStudy[] }) {
  const t = useTranslations('work');
  return (
    <div className="flex flex-col gap-[var(--space-120)]">
      {cases.map((study) => {
        const cover = CASE_MEDIA[study.slug]?.cover;
        if (!cover) return null;
        const copy = t.raw(`cases.${study.slug}`) as {
          name: string;
          tagline: string;
        };
        return (
          <Reveal key={study.slug} variant="image">
            <Link href={workPath(study.slug)} className="group block">
              <div className="relative aspect-[16/9] w-full overflow-hidden">
                <EditorialImage
                  asset={cover}
                  sizes="(max-width: 768px) 100vw, 90vw"
                  position="50% 50%"
                />
              </div>
              <Grid
                md={12}
                gap={32}
                className="items-baseline pt-[var(--space-32)]"
              >
                <div className="md:col-span-8">
                  <Text as="h3" variant="subheading">
                    {copy.name}
                  </Text>
                  <Text
                    variant="body"
                    className="text-muted pt-[var(--space-8)]"
                  >
                    {copy.tagline}
                  </Text>
                </div>
                <div className="md:col-span-4 md:col-start-9 md:text-right">
                  <Text variant="caption" className="text-muted">
                    {t('labels.viewCase')}&nbsp;&nbsp;·&nbsp;&nbsp;{study.year}
                  </Text>
                </div>
              </Grid>
            </Link>
          </Reveal>
        );
      })}
    </div>
  );
}

export function RelatedWork({ cases }: { cases: readonly CaseStudy[] }) {
  const t = useTranslations('work.labels');
  if (cases.length === 0) return null;
  return (
    <Section>
      <Container>
        <Text variant="label" as="h2" className="pb-[var(--space-48)]">
          {t('related')}
        </Text>
        <CaseCards cases={cases} />
      </Container>
    </Section>
  );
}
