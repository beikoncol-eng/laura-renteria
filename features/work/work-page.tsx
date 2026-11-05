import { useTranslations } from 'next-intl';
import { Section, Container, Grid } from '@/components/layout';
import { Text } from '@/components/typography';
import { Reveal, StaggerText } from '@/components/ui';
import { ClosingCta } from '@/features/home/sections';
import { INDEX_CASES } from '@/lib/domain';
import { CASE_MEDIA } from './case-media';
import { ProjectIndex, type ProjectItem } from './project-index';

/**
 * Projects — the index of case studies. Each project is one page that tells
 * every discipline involved (a brand built from scratch and its website live
 * on the same page), and the filters let a reader jump to Branding or Web.
 * Cases publish only with each client's authorization (see lib/domain/work).
 */
export function WorkPage() {
  return (
    <>
      <WorkHero />
      <Projects />
      <ClosingCta />
    </>
  );
}

function WorkHero() {
  const t = useTranslations('home.work');
  const tNav = useTranslations('nav');
  return (
    <Section
      className="pt-[calc(var(--header-h-desktop)+var(--space-64))]"
      spacing="compact"
    >
      <Container>
        <div className="max-w-[60rem]">
          <Reveal>
            <p className="font-body tracking-label text-muted pb-[var(--space-32)] text-[0.875rem] uppercase">
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
          <Grid md={12} className="pt-[var(--space-48)]">
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

function Projects() {
  const t = useTranslations('work');
  const items: ProjectItem[] = INDEX_CASES.flatMap((c) => {
    const cover = CASE_MEDIA[c.slug]?.cover;
    if (!cover) return [];
    const copy = t.raw(`cases.${c.slug}`) as { name: string; tagline: string };
    return [
      {
        slug: c.slug,
        name: copy.name,
        tagline: copy.tagline,
        year: c.year,
        disciplines: c.disciplines,
        cover,
      },
    ];
  });
  return (
    <Section spacing="compact" className="pt-0">
      <Container>
        <ProjectIndex
          items={items}
          labels={{
            all: t('filters.all'),
            branding: t('filters.branding'),
            web: t('filters.web'),
            filter: t('filters.label'),
            view: t('labels.viewCase'),
          }}
        />
      </Container>
    </Section>
  );
}
