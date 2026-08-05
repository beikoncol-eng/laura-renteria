import { useTranslations } from 'next-intl';
import { ArrowUpRight } from 'lucide-react';
import { Link } from '@/i18n/navigation';
import { Section, Container, Grid, Divider } from '@/components/layout';
import { Text } from '@/components/typography';
import { Reveal } from '@/components/ui';
import { SERVICE_AREAS, servicePath } from '@/lib/domain';
import { humanizeSlug } from '@/lib/utils';

/**
 * 4. Services — the three consulting areas as an oversized editorial index.
 * Each row is a premium block: a large name that shifts on hover with an arrow
 * reveal, the approved tagline, and a link to the full service. Approved copy
 * throughout — no placeholders, no landing-page cards.
 */
export function ServicesOverview() {
  const t = useTranslations('home.services');
  const tAreas = useTranslations('services.areas');

  return (
    <Section background="cream">
      <Container>
        <Grid md={12} gap={32} className="mb-[var(--space-96)] items-end">
          <div className="md:col-span-8">
            <Reveal>
              <Text variant="label" as="p" className="mb-[var(--space-24)]">
                {t('eyebrow')}
              </Text>
              <Text as="h2" variant="display-m">
                {t('headline')}
              </Text>
            </Reveal>
          </div>
          <div className="md:col-span-4">
            <Reveal delay={0.1}>
              <Text variant="body" className="text-muted max-w-[38ch]">
                {t('subhead')}
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
                  href={servicePath(area.slug)}
                  className="group border-line block border-b py-[var(--space-64)]"
                >
                  <Grid md={12} gap={32} className="items-baseline">
                    <div className="flex items-baseline gap-[var(--space-24)] md:col-span-7">
                      <span className="font-display text-muted text-[1.125rem]">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <h3 className="font-display tracking-display text-ink flex items-center gap-[var(--space-24)] text-[clamp(2.5rem,6vw,5rem)] leading-[0.98] transition-transform duration-[var(--dur-base)] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-[0.4rem]">
                        {humanizeSlug(area.slug)}
                        <ArrowUpRight
                          className="hidden shrink-0 -translate-x-2 opacity-0 transition-all duration-[var(--dur-base)] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0 group-hover:opacity-100 md:block"
                          size={40}
                          strokeWidth={1}
                          aria-hidden
                        />
                      </h3>
                    </div>
                    <div className="md:col-span-4 md:col-start-9">
                      <Text variant="body" className="text-muted">
                        {copy.tagline}
                      </Text>
                      <span className="link-underline font-body text-ink mt-[var(--space-24)] inline-block text-[0.95rem]">
                        {t('exploreCta')}
                      </span>
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
