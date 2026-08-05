import type { ElementType, HTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';

/**
 * Typography primitive.
 *
 * One component expresses the entire type scale (Design System doc). Hierarchy
 * comes from typography alone — never color. Sizes are mobile-first, stepping
 * up at `md`. Semantics are controlled with `as` so visual size and heading
 * level stay independent (e.g. a visually-large statement that is an <h2>).
 */
export type TextVariant =
  | 'display-xl'
  | 'display-l'
  | 'display-m'
  | 'heading'
  | 'subheading'
  | 'body'
  | 'small'
  | 'caption'
  | 'label';

const variantClass: Record<TextVariant, string> = {
  'display-xl':
    'font-display text-ink tracking-display leading-[1.08] text-[3rem] md:text-[6rem]',
  'display-l':
    'font-display text-ink tracking-display leading-[1.08] text-[3rem] md:text-[5rem]',
  'display-m':
    'font-display text-ink tracking-display leading-[1.1] text-[2.25rem] md:text-[4rem]',
  heading:
    'font-display text-ink tracking-display leading-[1.1] text-[2.25rem] md:text-[3rem]',
  subheading:
    'font-display text-ink tracking-display leading-[1.15] text-[1.75rem] md:text-[2rem]',
  body: 'font-body text-ink leading-[1.7] text-[1.125rem] md:text-[1.25rem]',
  small: 'font-body text-ink leading-[1.7] text-[1rem]',
  caption:
    'font-body text-muted leading-[1.6] text-[0.9375rem] md:text-[0.875rem]',
  label:
    'font-body text-muted uppercase tracking-label font-medium leading-none text-[0.875rem]',
};

const defaultTag: Record<TextVariant, ElementType> = {
  'display-xl': 'h1',
  'display-l': 'h2',
  'display-m': 'h2',
  heading: 'h2',
  subheading: 'h3',
  body: 'p',
  small: 'p',
  caption: 'p',
  label: 'p',
};

export interface TextProps extends HTMLAttributes<HTMLElement> {
  /** Visual style from the type scale. */
  variant?: TextVariant;
  /** Semantic element override. Defaults per variant. */
  as?: ElementType;
  children?: ReactNode;
}

export function Text({
  variant = 'body',
  as,
  className,
  children,
  ...rest
}: TextProps) {
  const Tag = as ?? defaultTag[variant];
  return (
    <Tag className={cn(variantClass[variant], className)} {...rest}>
      {children}
    </Tag>
  );
}

/* Thin, self-documenting wrappers over Text. Prefer these at call sites. */

type DisplayVariant = Extract<
  TextVariant,
  'display-xl' | 'display-l' | 'display-m'
>;

export const Display = ({
  variant = 'display-l',
  ...props
}: Omit<TextProps, 'variant'> & { variant?: DisplayVariant }) => (
  <Text variant={variant} {...props} />
);

export const Heading = (props: Omit<TextProps, 'variant'>) => (
  <Text variant="heading" {...props} />
);

export const Subheading = (props: Omit<TextProps, 'variant'>) => (
  <Text variant="subheading" {...props} />
);

export const Body = (props: Omit<TextProps, 'variant'>) => (
  <Text variant="body" {...props} />
);

export const Label = (props: Omit<TextProps, 'variant'>) => (
  <Text variant="label" {...props} />
);

export const Caption = (props: Omit<TextProps, 'variant'>) => (
  <Text variant="caption" {...props} />
);
