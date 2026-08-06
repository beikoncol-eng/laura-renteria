import { useTranslations } from 'next-intl';
import { Section, Container, Grid } from '@/components/layout';
import { Text } from '@/components/typography';
import { Reveal, EditorialImage, ImagePlaceholder } from '@/components/ui';
import type { ServiceSlug } from '@/lib/domain';
import type { MediaAsset } from '@/lib/media';

/**
 * Overview — the editorial definition of the area, from the approved deck. Image
 * Consulting carries its own headline/subhead hook; the others lead with the
 * approved tagline. Text left, a supporting frame right.
 */
interface AreaCopy {
  tagline: string;
  overview: string;
  overviewHeadline?: string;
  overviewSubhead?: string;
}

export interface ServiceOverviewProps {
  slug: ServiceSlug;
  support?: MediaAsset;
}

export function ServiceOverview({ slug, support }: ServiceOverviewProps) {
  const tSections = useTranslations('services.sections');
  const tArea = useTranslations('services.areas');
  const area = tArea.raw(slug) as AreaCopy;

  return (
    <Section>
      <Container>
        <Grid md={12} gap={64} className="items-center">
          <div className="md:col-span-6">
            <Reveal>
              <Text variant="label" as="p" className="mb-[var(--space-32)]">
                {tSections('overview')}
              </Text>
              {area.overviewHeadline ? (
                <>
                  <Text as="h2" variant="heading">
                    {area.overviewHeadline}
                  </Text>
                  <Text
                    variant="subheading"
                    as="p"
                    className="text-muted mt-[var(--space-24)]"
                  >
                    {area.overviewSubhead}
                  </Text>
                </>
              ) : (
                <Text as="h2" variant="heading">
                  {area.tagline}
                </Text>
              )}
              <Text
                variant="body"
                className="text-muted mt-[var(--space-32)] max-w-[60ch]"
              >
                {area.overview}
              </Text>
            </Reveal>
          </div>

          <div className="md:col-span-5 md:col-start-8">
            <Reveal variant="image" delay={0.1}>
              <div className="group relative aspect-[4/5] w-full overflow-hidden">
                {support ? (
                  <EditorialImage
                    asset={support}
                    sizes="(max-width: 768px) 100vw, 42vw"
                    position="50% 20%"
                  />
                ) : (
                  <ImagePlaceholder ratio="4/5" label="Supporting Image" />
                )}
              </div>
            </Reveal>
          </div>
        </Grid>
      </Container>
    </Section>
  );
}
