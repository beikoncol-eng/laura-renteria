import type { ElementType } from 'react';
import { Text, type TextVariant } from '@/components/typography';
import { cn } from '@/lib/utils';

/**
 * Structural placeholders shared across features.
 *
 * Layout is final; only content is pending. Bracketed labels make "what's
 * missing" explicit and reserve the correct photographic aspect ratios, so real
 * assets and approved copy drop in without changing the layout. No Lorem Ipsum,
 * no invented copy.
 */
type Ratio = '4/5' | '3/4' | '16/9' | '1/1' | 'fill';

const ratioClass: Record<Ratio, string> = {
  '4/5': 'aspect-[4/5]',
  '3/4': 'aspect-[3/4]',
  '16/9': 'aspect-[16/9]',
  '1/1': 'aspect-square',
  fill: 'h-full w-full',
};

export interface ImagePlaceholderProps {
  ratio?: Ratio;
  label?: string;
  className?: string;
}

/** An elegant gray editorial block standing in for pending photography. */
export function ImagePlaceholder({
  ratio = '4/5',
  label = 'Image',
  className,
}: ImagePlaceholderProps) {
  return (
    <div
      className={cn(
        'relative flex w-full items-center justify-center overflow-hidden bg-black/[0.04] ring-1 ring-[color:var(--color-border)] ring-inset',
        ratioClass[ratio],
        className,
      )}
    >
      <span className="font-body tracking-label text-muted text-[0.8125rem] uppercase">
        [{label}]
      </span>
    </div>
  );
}

export interface PhProps {
  label: string;
  variant?: TextVariant;
  as?: ElementType;
  className?: string;
}

/** Bracketed placeholder text at the real type size, muted to read as pending. */
export function Ph({ label, variant = 'body', as, className }: PhProps) {
  return (
    <Text variant={variant} as={as} className={cn('text-muted', className)}>
      [{label}]
    </Text>
  );
}
