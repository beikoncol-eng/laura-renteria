import { useTranslations } from 'next-intl';
import { Section, Container } from '@/components/layout';
import { Text } from '@/components/typography';
import { Reveal, Accordion, type AccordionItemData } from '@/components/ui';

/**
 * 7. FAQ — a centered editorial column (~900px). Centered heading, centered
 * accordion, generous spacing; a calm height + opacity opening, not a
 * component-kit toggle.
 */
interface FaqItem {
  q: string;
  a: string;
}

export function FaqPreview() {
  const t = useTranslations('home.faq');
  const items = t.raw('items') as FaqItem[];

  const accordionItems: AccordionItemData[] = items.map((item) => ({
    question: item.q,
    answer: (
      <Text variant="body" className="text-muted">
        {item.a}
      </Text>
    ),
  }));

  return (
    <Section>
      <Container>
        <div className="mx-auto max-w-[56rem]">
          <div className="mb-[var(--space-64)] text-center">
            <Text variant="label" as="p" className="mb-[var(--space-24)]">
              {t('eyebrow')}
            </Text>
            <Text as="h2" variant="display-m">
              {t('headline')}
            </Text>
          </div>
          <Reveal>
            <Accordion items={accordionItems} />
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
