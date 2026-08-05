import { cn } from '@/lib/utils';
import { heightClass, type Space } from '@/lib/design';

/**
 * Spacer — explicit vertical whitespace from the 8-pt scale.
 *
 * Prefer Stack `gap` / Section spacing for structural rhythm. Reach for Spacer
 * only when whitespace is a deliberate compositional beat between elements that
 * don't share a flow container. Decorative and inert to assistive tech.
 */
export interface SpacerProps {
  size: Space;
  className?: string;
}

export function Spacer({ size, className }: SpacerProps) {
  return (
    <div
      aria-hidden
      className={cn('w-full shrink-0', heightClass[size], className)}
    />
  );
}
