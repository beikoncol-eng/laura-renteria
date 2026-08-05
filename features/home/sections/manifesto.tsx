import { useTranslations } from 'next-intl';
import { Section, Container } from '@/components/layout';
import { SplitText } from '@/components/ui';
import { cn } from '@/lib/utils';

/**
 * 2. Editorial statement — a full-width oversized moment, not a text block. The
 * approved line is broken into stacked sentences at masthead scale, each rising
 * out of a mask a beat behind the last (SplitText line reveal). Reads as film.
 */
export function Manifesto() {
  const t = useTranslations('home.manifesto');
  const statement = t('statement');
  const lines = statement.match(/[^.]+\./g)?.map((s) => s.trim()) ?? [
    statement,
  ];

  return (
    <Section className="flex min-h-[85vh] items-center overflow-hidden">
      <Container width="wide">
        <div>
          {lines.map((line, index) => (
            <SplitText
              key={index}
              as="span"
              by="line"
              text={line}
              delay={index * 0.09}
              className={cn(
                'font-display tracking-display text-[clamp(2.5rem,8vw,7rem)] leading-[0.98] uppercase',
                index === lines.length - 1 ? 'text-muted' : 'text-ink',
              )}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
