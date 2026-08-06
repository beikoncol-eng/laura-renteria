import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Text } from '@/components/typography';
import {
  Reveal,
  StaggerText,
  EditorialImage,
  ImagePlaceholder,
} from '@/components/ui';
import { buttonClassName } from '@/components/buttons';
import { ROUTES, SERVICE_SLUGS, type ServiceSlug } from '@/lib/domain';
import type { MediaAsset } from '@/lib/media';
import { humanizeSlug } from '@/lib/utils';

/**
 * Service Hero — asymmetric split, consistent with the Home hero. The consulting
 * area is the real H1; a kicker indicates its position among the three. Subhead
 * is the area's approved tagline, reorganized from the Copy Deck.
 */
export interface ServiceHeroProps {
  slug: ServiceSlug;
  hero?: MediaAsset;
}

export function ServiceHero({ slug, hero }: ServiceHeroProps) {
  const tAreas = useTranslations('services.areas');
  const tCta = useTranslations('services.cta');
  const area = tAreas.raw(slug) as { tagline: string };
  const index = SERVICE_SLUGS.indexOf(slug) + 1;
  const position = `${String(index).padStart(2, '0')} / ${String(SERVICE_SLUGS.length).padStart(2, '0')}`;

  return (
    <section className="relative w-full">
      <div className="grid min-h-[100dvh] grid-cols-1 md:grid-cols-2">
        <div className="group relative order-1 min-h-[58vh] overflow-hidden md:order-2 md:min-h-[100dvh]">
          {hero ? (
            <Reveal variant="image" delay={0.5} className="h-full w-full">
              <EditorialImage
                asset={hero}
                sizes="(max-width: 768px) 100vw, 50vw"
                position="50% 12%"
                priority
              />
            </Reveal>
          ) : (
            <ImagePlaceholder ratio="fill" label="Service Portrait" />
          )}
        </div>

        <div className="order-2 flex flex-col justify-end px-[var(--gutter-mobile)] pt-[var(--space-48)] pb-[var(--space-64)] md:order-1 md:justify-center md:px-[var(--space-96)] md:pt-0 md:pb-0">
          <div className="max-w-[38rem]">
            <Reveal>
              <p className="font-body tracking-label text-muted mb-[var(--space-32)] text-[0.875rem] uppercase">
                Consulting Area&nbsp;&nbsp;·&nbsp;&nbsp;{position}
              </p>
            </Reveal>
            <StaggerText
              as="h1"
              text={humanizeSlug(slug)}
              delay={0.08}
              className="font-display tracking-display text-ink text-[3rem] leading-[1.08] md:text-[5rem]"
            />
            <Reveal delay={0.16} className="mt-[var(--space-32)]">
              <Text variant="body" className="text-muted max-w-[46ch]">
                {area.tagline}
              </Text>
            </Reveal>
            <Reveal delay={0.24} className="mt-[var(--space-48)]">
              <Link
                href={ROUTES.contact}
                className={buttonClassName('primary', 'md')}
              >
                {tCta('button')}
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
