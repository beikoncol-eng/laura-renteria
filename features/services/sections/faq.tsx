import { useTranslations } from 'next-intl';
import { Section, Container } from '@/components/layout';
import { Text } from '@/components/typography';
import { Reveal, Accordion, type AccordionItemData } from '@/components/ui';

/**
 * FAQ — the shared, approved questions (universal across areas), in a contained
 * accordion. Copy reused from the `home.faq` catalogue.
 */
interface FaqItem {
  q: string;
  a: string;
}

export function ServiceFaq() {
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
      <Container width="narrow">
        <div className="mb-[var(--space-64)] text-center">
          <Text variant="label" as="p" className="mb-[var(--space-24)]">
            {t('eyebrow')}
          </Text>
          <Text as="h2" variant="heading">
            {t('headline')}
          </Text>
        </div>
        <Reveal>
          <Accordion items={accordionItems} />
        </Reveal>
      </Container>
    </Section>
  );
}
