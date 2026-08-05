import { useTranslations } from 'next-intl';
import { Section, Container } from '@/components/layout';
import { Reveal } from '@/components/ui';

/**
 * 2. Manifesto — an editorial break. A single large-serif line, narrow measure,
 * centered, held to a couple of lines. Approved copy; deliberate silence resets
 * the reading rhythm after the hero.
 */
export function Manifesto() {
  const t = useTranslations('home.manifesto');
  return (
    <Section className="flex min-h-[80vh] items-center">
      <Container width="narrow" className="text-center">
        <Reveal>
          <p className="font-display tracking-display text-ink text-[2rem] leading-[1.2] text-balance md:text-[3rem]">
            {t('statement')}
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
