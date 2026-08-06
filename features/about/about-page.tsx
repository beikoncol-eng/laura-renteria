import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Section, Container, Grid } from '@/components/layout';
import { Text } from '@/components/typography';
import {
  Reveal,
  StaggerText,
  SplitText,
  EditorialImage,
  ParallaxImage,
} from '@/components/ui';
import { Process, ClosingCta } from '@/features/home/sections';
import {
  ROUTES,
  SERVICE_AREAS,
  servicePath,
  type ServiceSlug,
} from '@/lib/domain';
import { MEDIA } from '@/lib/media';
import { cn, humanizeSlug } from '@/lib/utils';

/**
 * About — a long-form editorial chapter. Same design language as Home, composed
 * as a story: Hero → Biography → Philosophy → The practice → Working process →
 * Selected work → Closing. Layouts alternate register (split, flipped split,
 * full-width type, index, placeholder grid) so no two sections read alike. All
 * substantive copy is the approved deck; only structural labels are page-local.
 */
export function AboutPage() {
  return (
    <>
      <AboutHero />
      <Biography />
      <Philosophy />
      <Practice />
      <Process />
      <SelectedWork />
      <ClosingCta />
    </>
  );
}

/* ── Hero — split, portrait right, headline sets itself word by word ──────── */
function AboutHero() {
  const t = useTranslations('home.about');
  const tNav = useTranslations('nav');
  return (
    <section className="relative w-full">
      <div className="grid min-h-[92vh] grid-cols-1 md:min-h-[100dvh] md:grid-cols-12">
        <div className="order-2 flex flex-col justify-center px-[var(--gutter-mobile)] py-[var(--space-96)] md:order-1 md:col-span-6 md:py-0 md:pr-[var(--space-80)] md:pl-[var(--space-120)]">
          <div className="max-w-[36rem]">
            <Reveal>
              <p className="font-body tracking-label text-muted mb-[var(--space-32)] text-[0.875rem] uppercase">
                {tNav('about')}
              </p>
            </Reveal>
            <StaggerText
              as="h1"
              text={t('headline')}
              delay={0.1}
              className="font-display tracking-display text-ink text-[clamp(2.75rem,5.5vw,5.5rem)] leading-[1.02]"
            />
            <Reveal blur delay={0.5} className="mt-[var(--space-48)]">
              <Text variant="body" className="text-muted max-w-[44ch]">
                {t('lead')}
              </Text>
            </Reveal>
          </div>
        </div>

        <div className="group relative order-1 min-h-[60vh] overflow-hidden md:order-2 md:col-span-6 md:min-h-[100dvh]">
          <ParallaxImage className="h-full w-full">
            <EditorialImage
              asset={MEDIA.aboutPortrait}
              sizes="(max-width: 768px) 100vw, 50vw"
              position="50% 18%"
              priority
            />
          </ParallaxImage>
        </div>
      </div>
    </section>
  );
}

/* ── Biography — flipped split: portrait left, the narrative right ────────── */
function Biography() {
  const t = useTranslations('home.about');
  return (
    <Section>
      <Container>
        <Grid md={12} gap={80} className="items-center">
          <Reveal variant="image" className="md:col-span-5">
            <div className="group relative aspect-[3/4] w-full overflow-hidden">
              <EditorialImage
                asset={MEDIA.studioWide}
                sizes="(max-width: 768px) 100vw, 42vw"
                position="50% 20%"
              />
            </div>
          </Reveal>

          <div className="md:col-span-6 md:col-start-7">
            <Reveal>
              <div className="flex max-w-[52ch] flex-col gap-[var(--space-24)]">
                <Text variant="body">{t('body1')}</Text>
                <Text variant="body" className="text-muted">
                  {t('body2')}
                </Text>
                <p className="font-display tracking-display text-ink mt-[var(--space-16)] text-[clamp(1.5rem,2.6vw,2.25rem)] leading-[1.25] text-balance">
                  {t('pull')}
                </p>
                <Text variant="body" className="text-muted">
                  {t('close')}
                </Text>
              </div>
            </Reveal>
          </div>
        </Grid>
      </Container>
    </Section>
  );
}

/* ── Philosophy — full-width oversized statement + the two editorial lines ── */
function Philosophy() {
  const tM = useTranslations('home.manifesto');
  const tL = useTranslations('home.lines');
  const tP = useTranslations('pages.about');
  const statement = tM('statement');
  const lines = statement.match(/[^.]+\./g)?.map((s) => s.trim()) ?? [
    statement,
  ];

  return (
    <Section background="cream" className="overflow-hidden">
      <Container width="wide">
        <Reveal>
          <Text variant="label" as="p" className="mb-[var(--space-64)]">
            {tP('philosophyEyebrow')}
          </Text>
        </Reveal>
        <div className="max-w-[24ch]">
          {lines.map((line, index) => (
            <SplitText
              key={index}
              as="span"
              by="line"
              text={line}
              delay={index * 0.08}
              className={cn(
                'font-display tracking-display text-[clamp(1.75rem,4.5vw,3.5rem)] leading-[1.16]',
                index === lines.length - 1 ? 'text-muted' : 'text-ink',
              )}
            />
          ))}
        </div>

        <Grid md={12} gap={64} className="mt-[var(--space-120)]">
          <Reveal blur className="md:col-span-5">
            <p className="font-display tracking-display text-ink text-[clamp(1.5rem,3vw,2.5rem)] leading-[1.15]">
              {tL('a')}
            </p>
          </Reveal>
          <Reveal blur delay={0.1} className="md:col-span-5 md:col-start-8">
            <p className="font-display tracking-display text-muted text-[clamp(1.5rem,3vw,2.5rem)] leading-[1.15] md:text-right">
              {tL('b')}
            </p>
          </Reveal>
        </Grid>
      </Container>
    </Section>
  );
}

/* ── The practice — the three areas as an editorial index ─────────────────── */
function Practice() {
  const tP = useTranslations('pages.about');
  const tS = useTranslations('home.services');
  const tAreas = useTranslations('services.areas');

  return (
    <Section>
      <Container>
        <Grid md={12} gap={32} className="mb-[var(--space-80)] items-end">
          <div className="md:col-span-7">
            <Reveal>
              <Text variant="label" as="p" className="mb-[var(--space-24)]">
                {tP('practiceEyebrow')}
              </Text>
              <Text as="h2" variant="display-m">
                {tS('headline')}
              </Text>
            </Reveal>
          </div>
          <div className="md:col-span-4 md:col-start-9">
            <Reveal delay={0.1}>
              <Text variant="body" className="text-muted">
                {tS('subhead')}
              </Text>
            </Reveal>
          </div>
        </Grid>

        <div className="border-line border-t">
          {SERVICE_AREAS.map((area, index) => {
            const copy = tAreas.raw(area.slug) as { tagline: string };
            return (
              <Reveal key={area.slug}>
                <Link
                  href={servicePath(area.slug as ServiceSlug)}
                  className="group border-line block border-b py-[var(--space-48)]"
                >
                  <Grid md={12} gap={32} className="items-baseline">
                    <div className="flex items-baseline gap-[var(--space-24)] md:col-span-7">
                      <span className="font-display text-muted text-[1rem]">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <h3 className="font-display tracking-display text-ink text-[clamp(1.75rem,4vw,3.25rem)] leading-[1.02] transition-transform duration-[var(--dur-base)] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-[0.4rem]">
                        {humanizeSlug(area.slug)}
                      </h3>
                    </div>
                    <div className="md:col-span-4 md:col-start-9 md:self-center">
                      <p className="font-body text-muted text-[0.9375rem] leading-[1.6]">
                        {copy.tagline}
                      </p>
                    </div>
                  </Grid>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}

/* ── Selected work — honest state: private cases, structural client row ───── */
function SelectedWork() {
  const t = useTranslations('home.work');
  const tP = useTranslations('pages.about');
  return (
    <Section background="paper">
      <Container>
        <Grid md={12} gap={64} className="items-start">
          <div className="md:col-span-5">
            <Reveal>
              <Text variant="label" as="p" className="mb-[var(--space-24)]">
                {tP('clientsEyebrow')}
              </Text>
              <Text as="h2" variant="display-m">
                {t('headline')}
              </Text>
            </Reveal>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <Reveal delay={0.1}>
              <Text variant="body" className="text-muted">
                {t('placeholder')}
              </Text>
              <Link
                href={ROUTES.contact}
                className="link-underline font-body text-ink mt-[var(--space-32)] inline-block text-[0.95rem]"
              >
                {t('cta')}
              </Link>
            </Reveal>
          </div>
        </Grid>

        <Reveal
          variant="image"
          className="mt-[var(--space-64)] md:mt-[var(--space-80)]"
        >
          <div className="group relative aspect-[16/10] w-full overflow-hidden md:aspect-[21/9]">
            <EditorialImage
              asset={MEDIA.editorialBreak}
              sizes="100vw"
              position="50% 38%"
              zoom={false}
            />
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
