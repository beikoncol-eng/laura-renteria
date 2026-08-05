/**
 * Design-system spacing bridge.
 *
 * The 8-pt scale lives in CSS as `--space-*` variables (tokens.css). To use
 * those values from React while staying Tailwind-JIT-safe, we map each scale
 * step to a FULL, LITERAL arbitrary class string. Tailwind only detects class
 * names it can read verbatim in source, so these must never be built by
 * string interpolation.
 */

export const spaceScale = [
  4, 8, 16, 24, 32, 40, 48, 64, 80, 96, 120, 160, 240,
] as const;

export type Space = (typeof spaceScale)[number];

/** flex/grid gap */
export const gapClass: Record<Space, string> = {
  4: 'gap-[var(--space-4)]',
  8: 'gap-[var(--space-8)]',
  16: 'gap-[var(--space-16)]',
  24: 'gap-[var(--space-24)]',
  32: 'gap-[var(--space-32)]',
  40: 'gap-[var(--space-40)]',
  48: 'gap-[var(--space-48)]',
  64: 'gap-[var(--space-64)]',
  80: 'gap-[var(--space-80)]',
  96: 'gap-[var(--space-96)]',
  120: 'gap-[var(--space-120)]',
  160: 'gap-[var(--space-160)]',
  240: 'gap-[var(--space-240)]',
};

/** single-axis size — used by Spacer (height in a vertical flow). */
export const heightClass: Record<Space, string> = {
  4: 'h-[var(--space-4)]',
  8: 'h-[var(--space-8)]',
  16: 'h-[var(--space-16)]',
  24: 'h-[var(--space-24)]',
  32: 'h-[var(--space-32)]',
  40: 'h-[var(--space-40)]',
  48: 'h-[var(--space-48)]',
  64: 'h-[var(--space-64)]',
  80: 'h-[var(--space-80)]',
  96: 'h-[var(--space-96)]',
  120: 'h-[var(--space-120)]',
  160: 'h-[var(--space-160)]',
  240: 'h-[var(--space-240)]',
};
