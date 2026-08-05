import { useTranslations } from 'next-intl';
import { Section, Container } from '@/components/layout';
import { Reveal } from '@/components/ui';
import { cn } from '@/lib/utils';

/**
 * 2. Manifesto — the editorial statement, not a quote in a corner. The approved
 * line is set as a large stacked composition that occupies most of the viewport
 * width: each sentence a line, revealed in sequence. Powerful, minimal.
 */
export function Manifesto() {
  const t = useTranslations('home.manifesto');
  const statement = t('statement');
  const lines = statement.match(/[^.]+\./g)?.map((s) => s.trim()) ?? [statement];

  return (
    <Section spacing="compact">
      <Container width="wide">
        <div className="max-w-[24ch] md:max-w-[15ch]">
          {lines.map((line, index) => (
            <Reveal key={index} delay={index * 0.08}>
              <span
                className={cn(
                  'block font-display text-[clamp(2.25rem,6.5vw,5.5rem)] leading-[1.02] tracking-display',
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
