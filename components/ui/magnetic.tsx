'use client';

import { useRef, type MouseEvent, type ReactNode } from 'react';
import { motion, useReducedMotion, useSpring } from 'framer-motion';

/**
 * Magnetic — a very subtle cursor attraction for a primary action. The child
 * drifts a few pixels toward the pointer and springs back on leave. Strength is
 * deliberately low (editorial, not playful); disabled under reduced-motion.
 */
export interface MagneticProps {
  children: ReactNode;
  /** Max drift in px. */
  strength?: number;
  className?: string;
}

export function Magnetic({ children, strength = 6, className }: MagneticProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const reduce = useReducedMotion();
  const x = useSpring(0, { stiffness: 200, damping: 18, mass: 0.4 });
  const y = useSpring(0, { stiffness: 200, damping: 18, mass: 0.4 });

  const onMove = (e: MouseEvent<HTMLSpanElement>) => {
    if (reduce || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const relX = e.clientX - (r.left + r.width / 2);
    const relY = e.clientY - (r.top + r.height / 2);
    x.set((relX / (r.width / 2)) * strength);
    y.set((relY / (r.height / 2)) * strength);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.span
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      style={{ x, y }}
      className={className}
    >
      {children}
    </motion.span>
  );
}
