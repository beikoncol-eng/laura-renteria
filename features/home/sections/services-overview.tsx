import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Section, Container, Grid, Divider } from '@/components/layout';
import { Text } from '@/components/typography';
import { Reveal } from '@/components/ui';
import { SERVICE_AREAS, servicePath } from '@/lib/domain';
import { humanizeSlug } from '@/lib/utils';

/**
 * 4. Services — the three consulting areas as an oversized editorial index.
 * Large area names carry the section; each row states its approved tagline and
 * links to the full service. Approved copy throughout — no placeholders.
 */
export function ServicesOverview() {
  const t = useTranslations('home.services');
  const tAreas = useTranslations('services.areas');

  return (
    <Section background="cream">
      <Container>
        <Grid md={12} gap={32} className="mb-[var(--space-64)] items-end">
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

        <div>
          {SERVICE_AREAS.map((area, index) => {
            const copy = tAreas.raw(area.slug) as { tagline: string };
            return (
              <div key={area.slug}>
                <Divider />
                <Reveal>
                  <Link
                    href={servicePath(area.slug)}
                    className="group block py-[var(--space-48)]"
                  >
                    <Grid md={12} gap={32} className="items-baseline">
                      <div className="flex items-baseline gap-[var(--space-24)] md:col-span-7">
                        <span className="font-display text-muted text-[1.125rem]">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <h3 className="font-display tracking-display text-ink text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05] transition-opacity duration-[var(--dur-base)] group-hover:opacity-60">
                          {humanizeSlug(area.slug)}
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
              </div>
            );
          })}
          <Divider />
        </div>
      </Container>
    </Section>
  );
}
