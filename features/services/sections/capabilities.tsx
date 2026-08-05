import { useTranslations } from 'next-intl';
import { Section, Container, Grid } from '@/components/layout';
import { Text } from '@/components/typography';
import { Reveal, Ph } from '@/components/ui';
import type { CapabilitySlug } from '@/lib/domain';
import { humanizeSlug } from '@/lib/utils';

/**
 * What's Included — the area's capabilities (consulting area → capabilities).
 * Every capability follows the same editorial structure: title, description, and
 * one supporting sentence — the standard across the site. Copy is approved
 * (deck-sourced or deck-voice); a missing entry falls back to a placeholder.
 */
interface CapabilityCopy {
  description: string;
  supporting: string;
}

export interface ServiceCapabilitiesProps {
  capabilities: readonly CapabilitySlug[];
}

export function ServiceCapabilities({
  capabilities,
}: ServiceCapabilitiesProps) {
  const tSections = useTranslations('services.sections');
  const t = useTranslations('services');
  const caps = t.raw('capabilities') as Record<string, CapabilityCopy>;

  return (
    <Section>
      <Container>
        <div className="mb-[var(--space-80)] max-w-[46rem]">
          <Text variant="label" as="p">
            {tSections('capabilities')}
          </Text>
        </div>

        <ul>
          {capabilities.map((slug, index) => {
            const cap = caps[slug];
            return (
              <li key={slug} className="border-line border-t last:border-b">
                <Reveal>
                  <Grid
                    md={12}
                    gap={32}
                    className="items-baseline py-[var(--space-40)]"
                  >
                    <div className="flex items-baseline gap-[var(--space-24)] md:col-span-5">
                      <span className="font-display text-muted text-[1.125rem]">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <Text as="h3" variant="subheading">
                        {humanizeSlug(slug)}
                      </Text>
                    </div>
                    <div className="md:col-span-6 md:col-start-7">
                      {cap ? (
                        <div className="max-w-[52ch]">
                          <Text variant="body" className="text-ink">
                            {cap.description}
                          </Text>
                          <Text
                            variant="small"
                            className="text-muted mt-[var(--space-8)]"
                          >
                            {cap.supporting}
                          </Text>
                        </div>
                      ) : (
                        <Ph
                          label="Capability Copy — pending"
                          className="max-w-[52ch]"
                        />
                      )}
                    </div>
                  </Grid>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </Container>
    </Section>
  );
}
