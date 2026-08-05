'use client';

import type { ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils';

/**
 * Reveal — the shared scroll-entry motion (Motion doc: reveal whole blocks, a
 * simple fade with a subtle upward move; never letters, never theatrical).
 *
 * Uses Framer's `whileInView` (IntersectionObserver under the hood, never a
 * scroll listener) and fires once. Under reduced-motion the translate is
 * dropped and only opacity remains, preserving hierarchy.
 */
export interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Stagger offset in seconds (e.g. headline → copy → CTA). */
  delay?: number;
  /** Upward travel distance in px. */
  y?: number;
}

export function Reveal({
  children,
  className,
  delay = 0,
  y = 16,
}: RevealProps) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, y: reduce ? 0 : y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10% 0px -10% 0px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay }}
    >
      {children}
    </motion.div>
  );
}
