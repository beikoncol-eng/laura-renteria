'use client';

import type { ReactNode } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { usePathname } from '@/i18n/navigation';
import { EASE, DURATION } from '@/lib/motion';

/**
 * TransitionWrapper — page-to-page transitions (Motion doc: a soft fade, like
 * turning the page of an editorial publication — never a dramatic wipe).
 *
 * Keyed on the LOCALE-AGNOSTIC pathname (next-intl), so navigating between
 * pages cross-fades, while switching language on the same page does NOT
 * animate — language changes must feel instant. Under reduced-motion the fade
 * collapses to an immediate swap.
 */
export interface TransitionWrapperProps {
  children: ReactNode;
}

export function TransitionWrapper({ children }: TransitionWrapperProps) {
  const pathname = usePathname();
  const reduce = useReducedMotion();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        initial={{
          opacity: 0,
          y: reduce ? 0 : 12,
          filter: reduce ? 'blur(0px)' : 'blur(6px)',
        }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        exit={{
          opacity: 0,
          y: reduce ? 0 : -8,
          filter: reduce ? 'blur(0px)' : 'blur(4px)',
        }}
        transition={{
          duration: reduce ? 0 : DURATION.base,
          ease: EASE.luxe,
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
