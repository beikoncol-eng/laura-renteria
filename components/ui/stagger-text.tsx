'use client';

import type { ElementType } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils';

/**
 * StaggerText — a headline that assembles itself word by word on entry: each
 * word fades up from a small offset, a beat behind the last. Reads as a line
 * of type being set, never as a gimmick. `whileInView`, fires once.
 *
 * The whole phrase animates as one accessible string (aria-label); the split is
 * purely visual and hidden from assistive tech. Under reduced-motion the words
 * simply fade in together, preserving the hierarchy without movement.
 */
export interface StaggerTextProps {
  text: string;
  as?: ElementType;
  className?: string;
  /** Delay before the first word (s) — lets it follow a kicker. */
  delay?: number;
  /** Per-word cascade step (s). */
  stagger?: number;
}

export function StaggerText({
  text,
  as: Tag = 'span',
  className,
  delay = 0,
  stagger = 0.055,
}: StaggerTextProps) {
  const reduce = useReducedMotion();
  const words = text.split(' ');

  return (
    <Tag aria-label={text} className={cn('inline-block', className)}>
      {words.map((w, i) => (
        <motion.span
          key={i}
          aria-hidden
          className="inline-block whitespace-pre will-change-transform"
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: '0.4em' }}
          whileInView={reduce ? { opacity: 1 } : { opacity: 1, y: '0em' }}
          viewport={{ once: true, margin: '-10% 0px -10% 0px' }}
          transition={{
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1],
            delay: delay + (reduce ? 0 : i * stagger),
          }}
        >
          {i < words.length - 1 ? w + ' ' : w}
        </motion.span>
      ))}
    </Tag>
  );
}
