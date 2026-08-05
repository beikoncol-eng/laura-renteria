import { useTranslations } from 'next-intl';
import { Section, Container } from '@/components/layout';
import { Text } from '@/components/typography';
import { Reveal } from '@/components/ui';
import type { ServiceSlug } from '@/lib/domain';

/**
 * Who It's For — the area's audience, composed from the approved "for whom"
 * lines in the deck. Typography-led list, no cards, no icons.
 */
export interface ServiceWhoItsForProps {
  slug: ServiceSlug;
}

export function ServiceWhoItsFor({ slug }: ServiceWhoItsForProps) {
  const tSections = useTranslations('services.sections');
  const tArea = useTranslations('services.areas');
  const items = (tArea.raw(slug) as { who: string[] }).who;

  return (
    <Section background="cream">
      <Container>
        <div className="mb-[var(--space-64)] max-w-[46rem]">
          <Text variant="label" as="p">
            {tSections('whoItsFor')}
          </Text>
        </div>
        <ul className="max-w-[70rem]">
          {items.map((item, index) => (
            <li key={index} className="border-line border-t last:border-b">
              <Reveal>
                <p className="font-display tracking-display text-ink max-w-[60ch] py-[var(--space-32)] text-[1.5rem] leading-[1.3] md:text-[1.75rem]">
                  {item}
                </p>
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
