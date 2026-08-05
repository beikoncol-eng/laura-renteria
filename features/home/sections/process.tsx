import { useTranslations } from 'next-intl';
import { Section, Container, Grid } from '@/components/layout';
import { Text } from '@/components/typography';
import { Reveal, EditorialImage } from '@/components/ui';
import { MEDIA } from '@/lib/media';

/**
 * 5. Process ("How I Work") — the five-step method from the approved deck, as an
 * architectural timeline paired with a documentary frame of Laura curating
 * references. The order never changes; the content always does.
 */
interface ProcessStep {
  title: string;
  body: string;
  deliverable: string;
}

export function Process() {
  const t = useTranslations('home.process');
  const steps = t.raw('steps') as ProcessStep[];
  const deliverableLabel = t('deliverableLabel');

  return (
    <Section>
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
          <ol className="border-line border-l md:col-span-6">
            {steps.map((step, index) => (
              <li
                key={step.title}
                className="relative pb-[var(--space-64)] pl-[var(--space-48)] last:pb-0"
              >
                <Reveal>
                  <span className="font-display text-muted block text-[2rem] leading-none md:text-[2.5rem]">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="font-display tracking-display text-ink mt-[var(--space-16)] text-[1.5rem] md:text-[1.75rem]">
                    {step.title}
                  </h3>
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

          <div className="md:col-span-5 md:col-start-8">
            <Reveal>
              <div className="relative aspect-[3/4] w-full overflow-hidden md:sticky md:top-[var(--header-h-desktop)]">
                <EditorialImage
                  asset={MEDIA.processCuration}
                  sizes="(max-width: 768px) 100vw, 42vw"
                />
              </div>
            </Reveal>
          </div>
        </Grid>

        <Reveal className="mt-[var(--space-64)] max-w-[52ch]">
          <p className="font-body text-muted text-[0.9375rem] leading-[1.6]">
            {t('footnote')}
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
