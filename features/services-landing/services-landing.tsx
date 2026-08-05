import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Section, Container, Grid } from '@/components/layout';
import { Text } from '@/components/typography';
import {
  Reveal,
  StaggerText,
  EditorialImage,
  ParallaxImage,
  Magnetic,
} from '@/components/ui';
import { ServiceCta } from '@/features/services/sections';
import {
  SERVICE_AREAS,
  getServiceArea,
  servicePath,
  type ServiceSlug,
} from '@/lib/domain';
import { MEDIA, type MediaAsset } from '@/lib/media';
import { humanizeSlug } from '@/lib/utils';

/**
 * Services landing — the editorial index of the three consulting areas. Not a
 * pricing page: each area is a full editorial block (large name, tagline, the
 * approved overview, a preview of what's included) beside its own photograph,
 * sides alternating down the page, linking through to the dedicated page.
 */

/** One distinct photographic world per area, drawn from the studio session. */
const AREA_IMAGE: Record<ServiceSlug, MediaAsset> = {
  'creative-direction': MEDIA.creativeDirectionHero,
  'digital-marketing': MEDIA.processCuration,
  'image-consulting': MEDIA.closingPortrait,
};

const AREA_POSITION: Record<ServiceSlug, string> = {
  'creative-direction': '50% 12%',
  'digital-marketing': '50% 12%',
  'image-consulting': '50% 10%',
};

interface AreaCopy {
  tagline: string;
  overview: string;
}

export function ServicesLanding() {
  return (
    <>
      <LandingHero />
      <Areas />
      <ServiceCta />
    </>
  );
}

/* ── Hero — type-forward, then a wide parallax band ───────────────────────── */
function LandingHero() {
  const tNav = useTranslations('nav');
  const tS = useTranslations('home.services');
  return (
    <section className="relative w-full">
      <Container className="pt-[calc(var(--header-h-desktop)+var(--space-80))] pb-[var(--space-96)] md:pt-[calc(var(--header-h-desktop)+var(--space-120))]">
        <Reveal>
          <p className="font-body tracking-label text-muted mb-[var(--space-40)] text-[0.875rem] uppercase">
            {tNav('services')}
          </p>
        </Reveal>
        <StaggerText
          as="h1"
          text={tS('headline')}
          delay={0.1}
          className="font-display tracking-display text-ink max-w-[16ch] text-[clamp(2.75rem,7vw,6rem)] leading-[1.0]"
        />
        <Reveal delay={0.5} className="mt-[var(--space-48)]">
          <Text variant="body" className="text-muted max-w-[52ch]">
            {tS('subhead')}
          </Text>
        </Reveal>
      </Container>

      <Reveal variant="image">
        <ParallaxImage className="aspect-[16/10] w-full md:aspect-[21/9]">
          <EditorialImage
            asset={MEDIA.editorialBreak}
            sizes="100vw"
            position="50% 40%"
            zoom={false}
            priority
          />
        </ParallaxImage>
      </Reveal>
    </section>
  );
}

/* ── The three areas, sides alternating ───────────────────────────────────── */
function Areas() {
  const tP = useTranslations('pages.servicesLanding');
  const tAreas = useTranslations('services.areas');

  return (
    <Section>
      <Container>
        <Reveal>
          <Text variant="label" as="p" className="mb-[var(--space-96)]">
            {tP('areasEyebrow')}
          </Text>
        </Reveal>

        <div className="flex flex-col gap-[var(--space-160)]">
          {SERVICE_AREAS.map((area, index) => {
            const slug = area.slug as ServiceSlug;
            const copy = tAreas.raw(slug) as AreaCopy;
            const caps = getServiceArea(slug).capabilities.slice(0, 5);
            const flip = index % 2 === 1;
            return (
              <AreaBlock
                key={slug}
                slug={slug}
                index={index}
                copy={copy}
                caps={caps}
                flip={flip}
              />
            );
          })}
        </div>
      </Container>
    </Section>
  );
}

function AreaBlock({
  slug,
  index,
  copy,
  caps,
  flip,
}: {
  slug: ServiceSlug;
  index: number;
  copy: AreaCopy;
  caps: readonly string[];
  flip: boolean;
}) {
  const tExplore = useTranslations('home.services');
  return (
    <Grid md={12} gap={64} className="items-center">
      {/* Image */}
      <Reveal
        variant="image"
        className={flip ? 'md:col-span-5 md:col-start-8' : 'md:col-span-5'}
      >
        <div className="group relative aspect-[4/5] w-full overflow-hidden">
          <EditorialImage
            asset={AREA_IMAGE[slug]}
            sizes="(max-width: 768px) 100vw, 42vw"
            position={AREA_POSITION[slug]}
          />
        </div>
      </Reveal>

      {/* Copy */}
      <div
        className={
          flip
            ? 'md:col-span-6 md:col-start-1 md:row-start-1'
            : 'md:col-span-6 md:col-start-7'
        }
      >
        <Reveal>
          <span className="font-display text-muted text-[1rem]">
            {String(index + 1).padStart(2, '0')} / 03
          </span>
          <Text as="h2" variant="display-m" className="mt-[var(--space-16)]">
            {humanizeSlug(slug)}
          </Text>
          <p className="font-display tracking-display text-ink mt-[var(--space-24)] max-w-[26ch] text-[clamp(1.25rem,2vw,1.75rem)] leading-[1.3]">
            {copy.tagline}
          </p>
          <Text
            variant="body"
            className="text-muted mt-[var(--space-24)] max-w-[48ch]"
          >
            {copy.overview}
          </Text>

          <ul className="mt-[var(--space-40)] flex flex-wrap gap-x-[var(--space-24)] gap-y-[var(--space-12)]">
            {caps.map((cap) => (
              <li
                key={cap}
                className="font-body text-muted border-line border-b pb-[2px] text-[0.9375rem]"
              >
                {humanizeSlug(cap)}
              </li>
            ))}
          </ul>

          <div className="mt-[var(--space-48)]">
            <Magnetic className="inline-block">
              <Link
                href={servicePath(slug)}
                className="group/link font-body text-ink inline-flex items-center gap-[var(--space-12)] text-[1rem]"
              >
                <span className="link-underline">{tExplore('exploreCta')}</span>
                <span
                  aria-hidden
                  className="transition-transform duration-[var(--dur-base)] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/link:translate-x-1"
                >
                  →
                </span>
              </Link>
            </Magnetic>
          </div>
        </Reveal>
      </div>
    </Grid>
  );
}
