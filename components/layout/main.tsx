import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';

/** Shared id target for the skip link and the main landmark. */
export const MAIN_CONTENT_ID = 'main-content';

/**
 * Main — the primary content landmark.
 *
 * Programmatically focusable (`tabIndex={-1}`) so the Skip to Content link can
 * move focus here. Exactly one <main> per page; page content is passed in.
 */
export interface MainProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
}

export function Main({ children, className, ...rest }: MainProps) {
  return (
    <main
      id={MAIN_CONTENT_ID}
      tabIndex={-1}
      className={cn('outline-none', className)}
      {...rest}
    >
      {children}
    </main>
  );
}
