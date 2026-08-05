import { useTranslations } from 'next-intl';
import { Section, Container } from '@/components/layout';
import { Reveal } from '@/components/ui';
import { cn } from '@/lib/utils';

/**
 * 2. Editorial statement — a quiet, centred composition held by whitespace
 * (Aesop / COS register), not an oversized left column. The approved line reads
 * as a stacked statement, each sentence a line, revealed in sequence.
 */
export function Manifesto() {
  const t = useTranslations('home.manifesto');
  const statement = t('statement');
  const lines = statement.match(/[^.]+\./g)?.map((s) => s.trim()) ?? [
    statement,
  ];

  return (
    <Section className="flex min-h-[86vh] items-center">
      <Container width="narrow" className="text-center">
        <div className="mx-auto max-w-[20ch]">
          {lines.map((line, index) => (
            <Reveal key={index} delay={index * 0.1}>
              <p
                className={cn(
                  'font-display tracking-display text-[clamp(1.75rem,4vw,3.25rem)] leading-[1.28]',
                  index === lines.length - 1 ? 'text-muted' : 'text-ink',
                )}
              >
                {line}
              </p>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
