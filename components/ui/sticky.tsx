import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

/**
 * Sticky — the shared sticky-scroll primitive. Pins its child below the header
 * while a taller sibling column scrolls past, so a photograph or statement
 * holds the reader's eye through a passage (the editorial "sticky section").
 *
 * Sticky only engages at `md` and up, where there's room for a two-column
 * composition; on mobile it flows normally. The offset accounts for the fixed
 * header plus a little breathing room.
 */
export interface StickyProps {
  children: ReactNode;
  className?: string;
}

export function Sticky({ children, className }: StickyProps) {
  return (
    <div
      className={cn(
        'md:sticky md:top-[calc(var(--header-h-desktop)+var(--space-40))]',
        className,
      )}
    >
      {children}
    </div>
  );
}
