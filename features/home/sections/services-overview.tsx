import { Link } from '@/i18n/navigation';
import { Section, Container, Grid, Divider } from '@/components/layout';
import { Text } from '@/components/typography';
import { Reveal, Ph } from '@/components/ui';
import { SERVICE_AREAS, servicePath } from '@/lib/domain';
import { humanizeSlug } from '@/lib/utils';

/**
 * 4. Services Overview — the three consulting areas ONLY. Each area is an
 * editorial row (never a boxed card): index + area name on the left, then a
 * short-description placeholder, a "what's included" preview, and an explore
 * CTA on the right. Capabilities are never listed here — the hierarchy stays
 * consulting area → capabilities. Area names derive from the domain; all other
 * copy is pending.
 */
export function ServicesOverview() {
  return (
    <Section background="cream">
      <Container>
        <div className="mb-[var(--space-80)] max-w-[46rem]">
          <Text variant="label" as="p" className="mb-[var(--space-32)]">
            [Services Label]
          </Text>
          <Text as="h2" variant="display-m">
            [Services Overview Headline]
          </Text>
        </div>

        <div>
          {SERVICE_AREAS.map((area, index) => (
            <div key={area.slug}>
              {index > 0 && <Divider className="my-[var(--space-64)]" />}
              <Reveal>
                <Grid md={12} gap={32} className="items-start">
                  <div className="flex items-baseline gap-[var(--space-24)] md:col-span-4">
                    <span className="font-display text-muted text-[1.25rem]">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <Text as="h3" variant="subheading">
                      {humanizeSlug(area.slug)}
                    </Text>
                  </div>

                  <div className="md:col-span-7 md:col-start-6">
                    <Ph label="Short Description" className="max-w-[52ch]" />
                    <p className="font-body tracking-label text-muted mt-[var(--space-24)] text-[0.875rem] uppercase">
                      [What’s Included — {area.capabilities.length}{' '}
                      capabilities]
                    </p>
                    <Link
                      href={servicePath(area.slug)}
                      className="link-underline font-body text-ink mt-[var(--space-32)] inline-block text-[0.95rem]"
                    >
                      [Explore CTA]
                    </Link>
                  </div>
                </Grid>
              </Reveal>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
