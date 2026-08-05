import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

/**
 * Editorial Quote primitive.
 *
 * A single sentence set large in the editorial serif, centered, held to two
 * lines by a tight measure. These moments create rhythm and deserve silence —
 * no quotation graphics, no oversized avatars, optional restrained attribution
 * (Component System doc). Content is passed in; this primitive never invents copy.
 */
export interface EditorialQuoteProps {
  children: ReactNode;
  /** Optional restrained attribution (e.g. a name or source). */
  attribution?: string;
  className?: string;
}

export function EditorialQuote({
  children,
  attribution,
  className,
}: EditorialQuoteProps) {
  return (
    <figure className={cn('mx-auto max-w-[24ch] text-center', className)}>
      <blockquote className="font-display tracking-display text-ink text-[1.75rem] leading-[1.25] text-balance md:text-[2.5rem]">
        {children}
      </blockquote>
      {attribution && (
        <figcaption className="font-body tracking-label text-muted mt-[var(--space-24)] text-[0.875rem] font-medium uppercase">
          {attribution}
        </figcaption>
      )}
    </figure>
  );
}
