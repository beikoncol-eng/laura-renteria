import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';

/**
 * Section — vertical rhythm primitive.
 *
 * Renders a semantic <section> and owns ONLY vertical spacing and an optional
 * section background. It never sets horizontal width — compose with Container.
 * Spacing follows the documented rhythm (mobile → desktop):
 *   default  120 → 240px
 *   compact  96  → 160px  (minimum comfortable rhythm)
 *   flush    no vertical padding (caller controls, e.g. full-bleed)
 */
export type SectionSpacing = 'default' | 'compact' | 'flush';
export type SectionBackground = 'transparent' | 'paper' | 'cream';

const spacingClass: Record<SectionSpacing, string> = {
  default: 'py-[var(--section-y-mobile)] md:py-[var(--section-y-desktop)]',
  compact: 'py-[var(--space-96)] md:py-[var(--space-160)]',
  flush: '',
};

const backgroundClass: Record<SectionBackground, string> = {
  transparent: '',
  paper: 'bg-paper',
  cream: 'bg-cream',
};

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  spacing?: SectionSpacing;
  background?: SectionBackground;
  children?: ReactNode;
}

export function Section({
  spacing = 'default',
  background = 'transparent',
  className,
  children,
  ...rest
}: SectionProps) {
  return (
    <section
      className={cn(
        spacingClass[spacing],
        backgroundClass[background],
        className,
      )}
      {...rest}
    >
      {children}
    </section>
  );
}
