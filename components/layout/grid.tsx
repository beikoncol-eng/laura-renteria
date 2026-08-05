import type { ElementType, HTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { gapClass, type Space } from '@/lib/design';

/**
 * Grid — two-dimensional layout on the editorial column system.
 * Mobile-first: `cols` sets the base column count, `md` the desktop count
 * (defaults to the documented 12-column desktop grid). Gaps come from the
 * 8-pt scale; the default is the documented 32px column gap.
 */
export type GridCols = 1 | 2 | 3 | 4 | 5 | 6 | 12;

const baseColsClass: Record<GridCols, string> = {
  1: 'grid-cols-1',
  2: 'grid-cols-2',
  3: 'grid-cols-3',
  4: 'grid-cols-4',
  5: 'grid-cols-5',
  6: 'grid-cols-6',
  12: 'grid-cols-12',
};

const mdColsClass: Record<GridCols, string> = {
  1: 'md:grid-cols-1',
  2: 'md:grid-cols-2',
  3: 'md:grid-cols-3',
  4: 'md:grid-cols-4',
  5: 'md:grid-cols-5',
  6: 'md:grid-cols-6',
  12: 'md:grid-cols-12',
};

export interface GridProps extends HTMLAttributes<HTMLElement> {
  cols?: GridCols;
  md?: GridCols;
  gap?: Space;
  as?: ElementType;
  children?: ReactNode;
}

export function Grid({
  cols = 1,
  md = 12,
  gap = 32,
  as,
  className,
  children,
  ...rest
}: GridProps) {
  const Tag = as ?? 'div';
  return (
    <Tag
      className={cn(
        'grid',
        baseColsClass[cols],
        mdColsClass[md],
        gapClass[gap],
        className,
      )}
      {...rest}
    >
      {children}
    </Tag>
  );
}
