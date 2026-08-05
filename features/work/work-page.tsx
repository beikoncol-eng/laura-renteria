import { useTranslations } from 'next-intl';
import { Section, Container, Grid } from '@/components/layout';
import { Text } from '@/components/typography';
import { Reveal, StaggerText, ImagePlaceholder, Ph } from '@/components/ui';
import { ClosingCta } from '@/features/home/sections';

/**
 * Work — the case-study architecture. The deck is explicit that cases publish
 * only with client permission, so the page presents the approved private-work
 * statement and lays out the exact editorial structure a future case study will
 * occupy: an index of large 16:9 frames with title, discipline and year. The
 * placeholders keep the layout final; real projects drop straight in.
 */
export function WorkPage() {
  return (
    <>
      <WorkHero />
      <CaseIndex />
      <ClosingCta />
    </>
  );
}

function WorkHero() {
  const t = useTranslations('home.work');
  const tNav = useTranslations('nav');
  return (
    <Section className="pt-[calc(var(--header-h-desktop)+var(--space-64))]">
      <Container>
        <div className="max-w-[20ch]">
          <Reveal>
            <p className="font-body tracking-label text-muted mb-[var(--space-32)] text-[0.875rem] uppercase">
              {tNav('work')}
            </p>
          </Reveal>
          <StaggerText
            as="h1"
            text={t('headline')}
            delay={0.1}
            className="font-display tracking-display text-ink text-[clamp(2.75rem,7vw,6rem)] leading-[1.0]"
          />
        </div>
        <Reveal delay={0.5}>
          <Grid md={12} className="mt-[var(--space-64)]">
            <Text
              variant="body"
              className="text-muted md:col-span-6 md:col-start-7"
            >
              {t('placeholder')}
            </Text>
          </Grid>
        </Reveal>
      </Container>
    </Section>
  );
}

/** The reserved editorial structure for future case studies. */
function CaseIndex() {
  return (
    <Section spacing="compact">
      <Container>
        <div className="flex flex-col gap-[var(--space-160)]">
          {[0, 1, 2].map((i) => (
            <Reveal key={i} variant="image">
              <article>
                <div className="group relative overflow-hidden">
                  <ImagePlaceholder ratio="16/9" label="Case study" />
                </div>
                <Grid
                  md={12}
                  gap={32}
                  className="mt-[var(--space-32)] items-baseline"
                >
                  <div className="md:col-span-8">
                    <Ph label="Project title" variant="subheading" as="h2" />
                  </div>
                  <div className="md:col-span-4 md:col-start-9 md:text-right">
                    <Ph label="Discipline · Year" variant="caption" />
                  </div>
                </Grid>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
