import type { ElementType, HTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';

/**
 * Container — horizontal width + gutter primitive.
 *
 * Owns ONLY inline sizing: max-width and side gutters (8vw desktop / 24px
 * mobile, per the grid spec). Vertical rhythm belongs to Section. Width varies
 * per editorial context (hero wide, manifesto narrow) to create rhythm.
 */
export type ContainerWidth = 'narrow' | 'default' | 'wide' | 'full';

const widthClass: Record<ContainerWidth, string> = {
  narrow: 'max-w-[46rem]', // ~736px — long-form reading, manifesto, FAQ
  default: 'max-w-[80rem]', // 1280px — standard content container
  wide: 'max-w-[90rem]', // 1440px — services, CTA, wide editorial
  full: 'max-w-none', // full-bleed (photography)
};

export interface ContainerProps extends HTMLAttributes<HTMLElement> {
  width?: ContainerWidth;
  as?: ElementType;
  children?: ReactNode;
}

export function Container({
  width = 'default',
  as,
  className,
  children,
  ...rest
}: ContainerProps) {
  const Tag = as ?? 'div';
  return (
    <Tag
      className={cn(
        'mx-auto w-full px-[var(--gutter-mobile)] md:px-[var(--gutter)]',
        widthClass[width],
        className,
      )}
      {...rest}
    >
      {children}
    </Tag>
  );
}
