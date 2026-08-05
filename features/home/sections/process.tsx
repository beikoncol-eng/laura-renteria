import { useTranslations } from 'next-intl';
import { Section, Container, Grid } from '@/components/layout';
import { Text } from '@/components/typography';
import { Reveal, EditorialImage } from '@/components/ui';
import { MEDIA } from '@/lib/media';

/**
 * 5. Process ("How I Work") — the five-step method beside an editorial image
 * spread: a large portrait with a smaller frame floating over its lower edge
 * (different scales, offset, a paper gutter between them) for tension. The pair
 * stays with the reader as the method scrolls; the column never feels empty.
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
          <Text variant="label" as="p" className="mb-[var(--space-24)]">
            {t('eyebrow')}
          </Text>
          <Text as="h2" variant="display-m">
            {t('headline')}
          </Text>
          <Text variant="body" className="text-muted mt-[var(--space-24)]">
            {t('subhead')}
          </Text>
        </div>

        <Grid md={12} gap={80} className="items-start">
          <div className="md:col-span-5">
            <div className="md:sticky md:top-[calc(var(--header-h-desktop)+2rem)]">
              <div className="relative flex flex-col gap-[var(--space-32)] md:block md:pb-[var(--space-96)]">
                <Reveal variant="image">
                  <div className="group relative aspect-[3/4] w-full overflow-hidden">
                    <EditorialImage
                      asset={MEDIA.processCuration}
                      sizes="(max-width: 768px) 100vw, 40vw"
                      position="50% 10%"
                    />
                  </div>
                </Reveal>
                <Reveal
                  variant="image"
                  delay={0.12}
                  className="md:absolute md:-right-[8%] md:bottom-0 md:w-[60%]"
                >
                  <div className="group md:ring-paper relative aspect-[4/5] w-full overflow-hidden md:ring-8">
                    <EditorialImage
                      asset={MEDIA.creativeDirectionCraft}
                      sizes="(max-width: 768px) 100vw, 26vw"
                      position="50% 18%"
                    />
                  </div>
                </Reveal>
              </div>
            </div>
          </div>

          <ol className="md:col-span-6 md:col-start-7">
            {steps.map((step, index) => (
              <li
                key={step.title}
                className="border-line border-t py-[var(--space-40)] first:pt-0 last:pb-0"
              >
                <Reveal>
                  <Grid md={12} gap={24} className="items-baseline">
                    <span className="font-display text-muted text-[2.5rem] leading-none md:col-span-2 md:text-[3rem]">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div className="md:col-span-10">
                      <h3 className="font-display tracking-display text-ink text-[1.5rem] md:text-[1.75rem]">
                        {step.title}
                      </h3>
                      <p className="font-body text-muted mt-[var(--space-16)] max-w-[52ch] leading-[1.7]">
                        {step.body}
                      </p>
                      <p className="font-body tracking-label text-muted mt-[var(--space-16)] text-[0.875rem] uppercase">
                        {deliverableLabel}
                        <span className="text-ink ml-[var(--space-16)] tracking-normal normal-case">
                          {step.deliverable}
                        </span>
                      </p>
                    </div>
                  </Grid>
                </Reveal>
              </li>
            ))}
          </ol>
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
