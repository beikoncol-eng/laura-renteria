import { useTranslations } from 'next-intl';
import { Section, Container, Grid } from '@/components/layout';
import { Text } from '@/components/typography';
import { Reveal, Sticky, EditorialImage } from '@/components/ui';
import { MEDIA } from '@/lib/media';

/**
 * 5. Process ("How I Work") — the five-step method. The visual side is a
 * two-frame editorial composition (curation + moodboard) that stays with the
 * reader as the method scrolls, so the column never feels empty. Composition is
 * image-left / method-right to break the rhythm.
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
            <Sticky className="flex flex-col gap-[var(--space-32)]">
              <Reveal variant="image">
                <div className="group relative aspect-[3/4] w-full overflow-hidden">
                  <EditorialImage
                    asset={MEDIA.processCuration}
                    sizes="(max-width: 768px) 100vw, 40vw"
                    position="50% 12%"
                  />
                </div>
              </Reveal>
              <Reveal
                variant="image"
                delay={0.1}
                className="ml-[var(--space-64)]"
              >
                <div className="group relative aspect-[4/5] w-full overflow-hidden">
                  <EditorialImage
                    asset={MEDIA.creativeDirectionCraft}
                    sizes="(max-width: 768px) 100vw, 32vw"
                    position="50% 20%"
                  />
                </div>
              </Reveal>
            </Sticky>
          </div>

          <ol className="md:col-span-6 md:col-start-7">
            {steps.map((step, index) => (
              <li
                key={step.title}
                className="border-line border-t py-[var(--space-40)] first:pt-0 last:pb-0"
              >
                <Grid md={12} gap={24} className="items-baseline">
                  <Reveal className="md:col-span-2">
                    <span className="font-display text-muted text-[2.5rem] leading-none md:text-[3rem]">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </Reveal>
                  <div className="md:col-span-10">
                    <Reveal delay={0.08}>
                      <h3 className="font-display tracking-display text-ink text-[1.5rem] md:text-[1.75rem]">
                        {step.title}
                      </h3>
                    </Reveal>
                    <Reveal delay={0.16}>
                      <p className="font-body text-muted mt-[var(--space-16)] max-w-[52ch] leading-[1.7]">
                        {step.body}
                      </p>
                      <p className="font-body tracking-label text-muted mt-[var(--space-16)] text-[0.875rem] uppercase">
                        {deliverableLabel}
                        <span className="text-ink ml-[var(--space-16)] tracking-normal normal-case">
                          {step.deliverable}
                        </span>
                      </p>
                    </Reveal>
                  </div>
                </Grid>
              </li>
            ))}
          </ol>
        </Grid>

        <Reveal className="mt-[var(--space-48)] max-w-[52ch]">
          <p className="font-body text-muted text-[0.9375rem] leading-[1.6]">
            {t('footnote')}
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
