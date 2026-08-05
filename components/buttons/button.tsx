'use client';

import { forwardRef, type ButtonHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

/**
 * Button primitive.
 *
 * Editorial, never SaaS. Fixed height, 2px max radius, no shadow, no gradient,
 * no scale/bounce (Component + Motion docs). Hover is a soft opacity shift;
 * the `text` variant draws its underline left → right.
 *
 * Variants:
 *   primary    solid ink, paper text
 *   secondary  transparent, thin border
 *   text       borderless, animated underline
 */
export type ButtonVariant = 'primary' | 'secondary' | 'text';
export type ButtonSize = 'md' | 'sm';

const base =
  'inline-flex items-center justify-center font-body text-[1rem] font-medium ' +
  'transition-opacity duration-[var(--dur-base)] ease-[cubic-bezier(0.16,1,0.3,1)] ' +
  'disabled:pointer-events-none disabled:opacity-40';

const sizeClass: Record<ButtonSize, string> = {
  md: 'h-[var(--button-h)] px-8', // 52px, 20/32 padding rhythm
  sm: 'h-[var(--touch-min)] px-6', // 44px — minimum touch target
};

const variantClass: Record<ButtonVariant, string> = {
  primary: 'rounded-[2px] bg-ink text-paper hover:opacity-90',
  secondary:
    'rounded-[2px] border border-ink/25 bg-transparent text-ink hover:opacity-70',
  text: 'link-underline px-0 text-ink hover:opacity-100',
};

/**
 * Shared class builder so non-<button> elements (e.g. a navigation CTA that
 * must render an <a>/next-intl Link) can adopt identical styling without
 * duplicating tokens.
 */
export function buttonClassName(
  variant: ButtonVariant = 'primary',
  size: ButtonSize = 'md',
  className?: string,
): string {
  // The `text` variant is inline and ignores fixed button sizing.
  const withSize = variant === 'text' ? '' : sizeClass[size];
  return cn(base, withSize, variantClass[variant], className);
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', type, className, ...rest }, ref) => {
    return (
      <button
        ref={ref}
        type={type ?? 'button'}
        className={buttonClassName(variant, size, className)}
        {...rest}
      />
    );
  },
);

Button.displayName = 'Button';
