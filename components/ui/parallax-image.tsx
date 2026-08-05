'use client';

import { useRef, type ReactNode } from 'react';
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'framer-motion';
import { cn } from '@/lib/utils';

/**
 * ParallaxImage — a very subtle scroll parallax for dominant, full-bleed
 * photography. The inner layer is over-sized and drifts ~6% against the scroll,
 * so edges never expose. Disabled under reduced-motion. Wrap an EditorialImage.
 */
export interface ParallaxImageProps {
  children: ReactNode;
  className?: string;
}

export function ParallaxImage({ children, className }: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    reduce ? ['0%', '0%'] : ['-6%', '6%'],
  );

  return (
    <div ref={ref} className={cn('relative overflow-hidden', className)}>
      <motion.div style={{ y }} className="absolute inset-[-7%]">
        {children}
      </motion.div>
    </div>
  );
}
