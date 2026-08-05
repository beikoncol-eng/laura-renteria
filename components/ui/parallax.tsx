'use client';

import { useRef, type ReactNode } from 'react';
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';
import { cn } from '@/lib/utils';

/**
 * Parallax — a generic scroll-linked transform for any element (type, a framed
 * image, a caption). The child drifts vertically against the scroll as the
 * element crosses the viewport; motion is spring-smoothed so it never feels
 * mechanical. Distinct from ParallaxImage, which over-sizes and clips a
 * full-bleed photograph. Disabled entirely under reduced-motion.
 *
 * Keep `distance` small (16–64px) — this is editorial drift, not a showcase.
 */
export interface ParallaxProps {
  children: ReactNode;
  className?: string;
  /** Total travel across the crossing, in px. */
  distance?: number;
}

export function Parallax({
  children,
  className,
  distance = 40,
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const raw = useTransform(
    scrollYProgress,
    [0, 1],
    reduce ? [0, 0] : [distance, -distance],
  );
  const y = useSpring(raw, { stiffness: 120, damping: 30, mass: 0.4 });

  return (
    <div ref={ref} className={cn('relative', className)}>
      <motion.div style={{ y }}>{children}</motion.div>
    </div>
  );
}
