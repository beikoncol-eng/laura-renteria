import { useTranslations } from 'next-intl';
import { Section, Container, Grid } from '@/components/layout';
import { Text } from '@/components/typography';
import {
  Reveal,
  Sticky,
  EditorialImage,
  ImagePlaceholder,
} from '@/components/ui';
import type { MediaAsset } from '@/lib/media';

/**
 * Process — Laura's method is universal ("the order never changes"), so every
 * area page uses the same approved five-step method, paired with a documentary
 * frame. Copy reused from the shared `home.process` catalogue.
 */
interface ProcessStep {
  title: string;
  body: string;
  deliverable: string;
}

export interface ServiceProcessProps {
  craft?: MediaAsset;
}

export function ServiceProcess({ craft }: ServiceProcessProps) {
  const t = useTranslations('home.process');
  const steps = t.raw('steps') as ProcessStep[];
  const deliverableLabel = t('deliverableLabel');

  return (
    <Section background="cream">
      <Container>
        <div className="mb-[var(--space-80)] max-w-[46rem]">
          <Text variant="label" as="p" className="mb-[var(--space-32)]">
            {t('eyebrow')}
          </Text>
          <Text as="h2" variant="display-m">
            {t('headline')}
          </Text>
          <Text variant="body" className="text-muted mt-[var(--space-24)]">
            {t('subhead')}
          </Text>
        </div>

        <Grid md={12} gap={64} className="items-start">
          <div className="md:order-2 md:col-span-5 md:col-start-8">
            <Sticky>
              <Reveal variant="image">
                <div className="group relative aspect-[3/4] w-full overflow-hidden">
                  {craft ? (
                    <EditorialImage
                      asset={craft}
                      sizes="(max-width: 768px) 100vw, 42vw"
                    />
                  ) : (
                    <ImagePlaceholder ratio="3/4" label="Process Image" />
                  )}
                </div>
              </Reveal>
            </Sticky>
          </div>

          <ol className="border-line border-l md:order-1 md:col-span-6">
            {steps.map((step, index) => (
              <li
                key={step.title}
                className="relative pb-[var(--space-64)] pl-[var(--space-48)] last:pb-0"
              >
                <Reveal>
                  <span className="font-display text-muted block text-[2rem] leading-none md:text-[2.5rem]">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </Reveal>
                <Reveal delay={0.08}>
                  <h3 className="font-display tracking-display text-ink mt-[var(--space-16)] text-[1.5rem] md:text-[1.75rem]">
                    {step.title}
                  </h3>
                </Reveal>
                <Reveal delay={0.16}>
                  <p className="font-body text-muted mt-[var(--space-16)] max-w-[52ch] leading-[1.7]">
                    {step.body}
                  </p>
                  <p className="font-body text-ink mt-[var(--space-16)] max-w-[52ch] text-[0.9375rem] leading-[1.6]">
                    <span className="tracking-label text-muted uppercase">
                      {deliverableLabel}
                    </span>
                    &nbsp;&nbsp;{step.deliverable}
                  </p>
                </Reveal>
              </li>
            ))}
          </ol>
        </Grid>
      </Container>
    </Section>
  );
}
