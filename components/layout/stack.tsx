import type { ElementType, HTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { gapClass, type Space } from '@/lib/design';

/**
 * Stack — one-dimensional flow with consistent gaps from the 8-pt scale.
 * The default building block for vertical composition; use `direction="row"`
 * for horizontal groupings (e.g. button pairs).
 */
export type StackAlign = 'start' | 'center' | 'end' | 'stretch';
export type StackJustify = 'start' | 'center' | 'end' | 'between';

const alignClass: Record<StackAlign, string> = {
  start: 'items-start',
  center: 'items-center',
  end: 'items-end',
  stretch: 'items-stretch',
};

const justifyClass: Record<StackJustify, string> = {
  start: 'justify-start',
  center: 'justify-center',
  end: 'justify-end',
  between: 'justify-between',
};

export interface StackProps extends HTMLAttributes<HTMLElement> {
  gap?: Space;
  direction?: 'column' | 'row';
  align?: StackAlign;
  justify?: StackJustify;
  wrap?: boolean;
  as?: ElementType;
  children?: ReactNode;
}

export function Stack({
  gap = 24,
  direction = 'column',
  align,
  justify,
  wrap = false,
  as,
  className,
  children,
  ...rest
}: StackProps) {
  const Tag = as ?? 'div';
  return (
    <Tag
      className={cn(
        'flex',
        direction === 'column' ? 'flex-col' : 'flex-row',
        wrap && 'flex-wrap',
        gapClass[gap],
        align && alignClass[align],
        justify && justifyClass[justify],
        className,
      )}
      {...rest}
    >
      {children}
    </Tag>
  );
}
