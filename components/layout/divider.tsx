import { cn } from '@/lib/utils';

/**
 * Divider — a 1px hairline in the near-invisible border tone.
 *
 * Used sparingly; whitespace replaces most dividers (Component System doc).
 * Renders a semantic <hr> horizontally, or a thin vertical rule for inline
 * groupings (e.g. a language switch).
 */
export interface DividerProps {
  orientation?: 'horizontal' | 'vertical';
  className?: string;
}

export function Divider({
  orientation = 'horizontal',
  className,
}: DividerProps) {
  if (orientation === 'vertical') {
    return (
      <span
        role="separator"
        aria-orientation="vertical"
        className={cn('bg-line inline-block w-px self-stretch', className)}
      />
    );
  }

  return <hr className={cn('bg-line h-px w-full border-0', className)} />;
}
