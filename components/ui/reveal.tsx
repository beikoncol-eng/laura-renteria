'use client';

import type { ReactNode } from 'react';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { cn } from '@/lib/utils';
import { EASE, DURATION, VIEWPORT_ONCE } from '@/lib/motion';

/**
 * Reveal — the shared scroll-entry motion. Two registers:
 *  - text (default): fade + a ~20px upward move.
 *  - image (`variant="image"`): an editorial MASK wipe (clip-path reveals top →
 *    bottom) with a slow settle from a slight over-scale. Reads as film, not fade.
 *
 * `whileInView` (IntersectionObserver, never a scroll listener), fires once.
 * Under reduced-motion only opacity animates, preserving hierarchy.
 */
export interface RevealProps {
  children: ReactNode;
  className?: string;
  variant?: 'text' | 'image';
  /** Stagger offset in seconds (e.g. headline → copy → CTA). */
  delay?: number;
  /** Upward travel distance in px (text variant). */
  y?: number;
  /** Add a brief defocus to the entrance (text variant) for a softer feel. */
  blur?: boolean;
}

export function Reveal({
  children,
  className,
  variant = 'text',
  delay = 0,
  y = 20,
  blur = false,
}: RevealProps) {
  const reduce = useReducedMotion();
  const isImage = variant === 'image';

  const variants: Variants = reduce
    ? { hidden: { opacity: 0 }, shown: { opacity: 1 } }
    : isImage
      ? {
          hidden: { clipPath: 'inset(0% 0% 100% 0%)', scale: 1.06 },
          shown: { clipPath: 'inset(0% 0% 0% 0%)', scale: 1 },
        }
      : {
          hidden: { opacity: 0, y, ...(blur ? { filter: 'blur(10px)' } : {}) },
          shown: { opacity: 1, y: 0, ...(blur ? { filter: 'blur(0px)' } : {}) },
        };

  return (
    <motion.div
      className={cn(isImage && 'will-change-[clip-path,transform]', className)}
      variants={variants}
      initial="hidden"
      whileInView="shown"
      viewport={VIEWPORT_ONCE}
      transition={{
        duration: isImage ? DURATION.image : DURATION.base,
        ease: EASE.luxe,
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}
