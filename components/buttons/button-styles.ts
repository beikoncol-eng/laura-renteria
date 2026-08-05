import { cn } from '@/lib/utils';

/**
 * Button style tokens + class builder.
 *
 * Deliberately NOT a client module: this is a pure function, so Server
 * Components (e.g. a hero CTA rendered as a next-intl Link) can call it. The
 * interactive Button component ('use client') consumes it too — one source of
 * button styling, usable from either side of the boundary.
 *
 * Editorial, never SaaS. Fixed height, 2px max radius, no shadow, no gradient,
 * no scale/bounce (Component + Motion docs).
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

export function buttonClassName(
  variant: ButtonVariant = 'primary',
  size: ButtonSize = 'md',
  className?: string,
): string {
  // The `text` variant is inline and ignores fixed button sizing.
  const withSize = variant === 'text' ? '' : sizeClass[size];
  return cn(base, withSize, variantClass[variant], className);
}
