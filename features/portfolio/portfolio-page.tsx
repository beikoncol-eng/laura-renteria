import { useTranslations } from 'next-intl';
import { Section, Container, Grid } from '@/components/layout';
import { Text } from '@/components/typography';
import {
  Reveal,
  StaggerText,
  EditorialImage,
  ParallaxImage,
} from '@/components/ui';
import { MEDIA, type MediaAsset } from '@/lib/media';

/**
 * Portfolio — an editorial gallery, photography first. Large imagery, generous
 * whitespace, and a rhythm that never repeats: a full-bleed landscape, offset
 * single frames, and portrait pairs, each entering with a mask reveal and a
 * gentle hover zoom. Type is secondary — a quiet caption under each frame.
 */
export function PortfolioPage() {
  const tP = useTranslations('pages.portfolio');

  return (
    <>
      <Section className="pt-[calc(var(--header-h-desktop)+var(--space-64))] pb-[var(--space-64)] md:pb-[var(--space-96)]">
        <Container>
          <div className="max-w-[20ch]">
            <Reveal>
              <Text variant="label" as="p" className="mb-[var(--space-32)]">
                {tP('eyebrow')}
              </Text>
            </Reveal>
            <StaggerText
              as="h1"
              text={tP('headline')}
              delay={0.1}
              className="font-display tracking-display text-ink text-[clamp(2.75rem,7vw,6rem)] leading-[1.0]"
            />
            <Reveal delay={0.45} className="mt-[var(--space-40)]">
              <Text variant="body" className="text-muted max-w-[42ch]">
                {tP('lead')}
              </Text>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Full-bleed opener */}
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

      <Section>
        <Container>
          <div className="flex flex-col gap-[var(--space-160)]">
            {/* Portrait pair */}
            <Pair
              left={{ asset: MEDIA.heroPortrait, position: '50% 8%' }}
              right={{ asset: MEDIA.aboutPortrait, position: '50% 12%' }}
            />

            {/* Offset single — right */}
            <Single
              asset={MEDIA.creativeDirectionHero}
              position="50% 12%"
              align="right"
            />

            {/* Portrait pair, bottoms aligned */}
            <Pair
              left={{
                asset: MEDIA.creativeDirectionCraft,
                position: '50% 16%',
              }}
              right={{
                asset: MEDIA.creativeDirectionSupport,
                position: '50% 10%',
              }}
            />

            {/* Offset single — left */}
            <Single asset={MEDIA.studioWide} position="50% 18%" align="left" />

            {/* Closing pair */}
            <Pair
              left={{ asset: MEDIA.processCuration, position: '50% 10%' }}
              right={{ asset: MEDIA.closingPortrait, position: '50% 10%' }}
            />
          </div>
        </Container>
      </Section>
    </>
  );
}

interface Frame {
  asset: MediaAsset;
  position: string;
}

function Caption({ asset }: { asset: MediaAsset }) {
  return (
    <Text variant="caption" className="mt-[var(--space-16)] max-w-[40ch]">
      {asset.alt}
    </Text>
  );
}

/** Two portraits side by side, bottoms aligned. */
function Pair({ left, right }: { left: Frame; right: Frame }) {
  return (
    <Grid md={12} gap={32} className="items-end">
      <Reveal variant="image" className="md:col-span-6">
        <div className="group relative aspect-[3/4] w-full overflow-hidden">
          <EditorialImage
            asset={left.asset}
            sizes="(max-width: 768px) 100vw, 46vw"
            position={left.position}
          />
        </div>
        <Caption asset={left.asset} />
      </Reveal>
      <Reveal variant="image" delay={0.12} className="md:col-span-6">
        <div className="group relative aspect-[3/4] w-full overflow-hidden">
          <EditorialImage
            asset={right.asset}
            sizes="(max-width: 768px) 100vw, 46vw"
            position={right.position}
          />
        </div>
        <Caption asset={right.asset} />
      </Reveal>
    </Grid>
  );
}

/** A single large frame, offset to one side for generous negative space. */
function Single({
  asset,
  position,
  align,
}: {
  asset: MediaAsset;
  position: string;
  align: 'left' | 'right';
}) {
  return (
    <Grid md={12} gap={32}>
      <Reveal
        variant="image"
        className={
          align === 'right' ? 'md:col-span-7 md:col-start-6' : 'md:col-span-7'
        }
      >
        <div className="group relative aspect-[4/5] w-full overflow-hidden">
          <EditorialImage
            asset={asset}
            sizes="(max-width: 768px) 100vw, 58vw"
            position={position}
          />
        </div>
        <Caption asset={asset} />
      </Reveal>
    </Grid>
  );
}
