import { useTranslations } from 'next-intl';
import { Section, Container } from '@/components/layout';
import { Reveal } from '@/components/ui';
import { cn } from '@/lib/utils';

/**
 * Editorial Line — an approved deck line set as a single oversized statement,
 * alone with air around it. A typographic breath between sections; alignment
 * alternates to keep the page composed rather than centred and static.
 */
export interface EditorialLineProps {
  which: 'a' | 'b';
  align?: 'left' | 'right';
}

export function EditorialLine({ which, align = 'left' }: EditorialLineProps) {
  const t = useTranslations('home.lines');
  return (
    <Section spacing="compact">
      <Container width="wide">
        <Reveal>
          <p
            className={cn(
              'font-display tracking-display text-ink max-w-[16ch] text-[clamp(2rem,6vw,5rem)] leading-[1.05]',
              align === 'right' && 'ml-auto text-right',
            )}
          >
            {t(which)}
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
