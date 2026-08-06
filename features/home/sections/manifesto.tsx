import { useTranslations } from 'next-intl';
import { Section, Container } from '@/components/layout';
import { SplitText } from '@/components/ui';
import { cn } from '@/lib/utils';

/**
 * 2. Editorial statement — a restrained fashion-magazine moment (not a
 * billboard). The approved line is broken into stacked sentences, each rising
 * out of a mask a beat behind the last (SplitText line reveal). Held to ~75%
 * width so it wraps cleanly and never leaves a blank field beneath it.
 */
export function Manifesto() {
  const t = useTranslations('home.manifesto');
  const statement = t('statement');
  const lines = statement.match(/[^.]+\./g)?.map((s) => s.trim()) ?? [
    statement,
  ];

  return (
    <Section
      spacing="flush"
      className="overflow-hidden pt-[var(--section-y-mobile)] pb-[var(--space-40)] md:pt-[var(--section-y-desktop)] md:pb-[var(--space-64)]"
    >
      <Container>
        <div className="max-w-[62rem]">
          {lines.map((line, index) => (
            <SplitText
              key={index}
              as="span"
              by="line"
              text={line}
              delay={index * 0.09}
              className={cn(
                'font-display tracking-display text-[clamp(1.75rem,5vw,4.5rem)] leading-[1.05] uppercase',
                index === lines.length - 1 ? 'text-muted' : 'text-ink',
              )}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
