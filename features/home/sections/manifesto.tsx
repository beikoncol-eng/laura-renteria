import { useTranslations } from 'next-intl';
import { Section, Container } from '@/components/layout';
import { Reveal } from '@/components/ui';
import { cn } from '@/lib/utils';

/**
 * 2. Editorial statement — a full-width oversized moment, not a text block. The
 * approved line is broken into stacked sentences at masthead scale and revealed
 * in sequence. Occupies almost the whole viewport width.
 */
export function Manifesto() {
  const t = useTranslations('home.manifesto');
  const statement = t('statement');
  const lines = statement.match(/[^.]+\./g)?.map((s) => s.trim()) ?? [
    statement,
  ];

  return (
    <Section className="flex min-h-[85vh] items-center">
      <Container width="wide">
        <div>
          {lines.map((line, index) => (
            <Reveal key={index} delay={index * 0.09}>
              <span
                className={cn(
                  'font-display tracking-display block text-[clamp(2.5rem,8vw,7rem)] leading-[0.98] uppercase',
                  index === lines.length - 1 ? 'text-muted' : 'text-ink',
                )}
              >
                {line}
              </span>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
