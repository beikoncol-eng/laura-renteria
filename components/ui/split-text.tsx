'use client';

import type { ElementType } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { EASE, DURATION, STAGGER, VIEWPORT_ONCE } from '@/lib/motion';

/**
 * SplitText — the shared headline-motion primitive. Splits a string into units
 * and reveals them in sequence on entry (`whileInView`, once):
 *
 *  - `word` (default): each word fades up a beat behind the last.
 *  - `char`: per-character cascade — use sparingly, for short display lines.
 *  - `line`: split on newlines; each line rises out of a mask (clip reveal).
 *
 * The full phrase stays one accessible string (aria-label); the split is visual
 * and hidden from assistive tech. `blur` adds a brief defocus for a softer,
 * more premium entrance. Under reduced-motion every unit simply fades in place.
 */
export type SplitBy = 'word' | 'char' | 'line';

export interface SplitTextProps {
  text: string;
  as?: ElementType;
  by?: SplitBy;
  className?: string;
  /** Delay before the first unit (s). */
  delay?: number;
  /** Per-unit cascade step (s). */
  stagger?: number;
  /** Upward travel (any CSS length). */
  y?: string;
  /** Add a brief blur to the entrance. */
  blur?: boolean;
}

export function SplitText({
  text,
  as: Tag = 'span',
  by = 'word',
  className,
  delay = 0,
  stagger,
  y = '0.4em',
  blur = false,
}: SplitTextProps) {
  const reduce = useReducedMotion();

  // Sensible default cadence per split mode.
  const step =
    stagger ??
    (by === 'char'
      ? STAGGER.char
      : by === 'line'
        ? STAGGER.line
        : STAGGER.word);

  if (by === 'line') {
    const lines = text.split('\n');
    return (
      <Tag aria-label={text} className={cn('block', className)}>
        {lines.map((line, i) => (
          <span
            key={i}
            aria-hidden
            className="block overflow-hidden [padding-bottom:0.08em]"
          >
            <motion.span
              className="inline-block will-change-transform"
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: '100%' }}
              whileInView={reduce ? { opacity: 1 } : { opacity: 1, y: '0%' }}
              viewport={VIEWPORT_ONCE}
              transition={{
                duration: DURATION.slow,
                ease: EASE.luxe,
                delay: delay + (reduce ? 0 : i * step),
              }}
            >
              {line}
            </motion.span>
          </span>
        ))}
      </Tag>
    );
  }

  // word | char — units flow inline; spaces are preserved between words.
  const units =
    by === 'char'
      ? splitChars(text)
      : text.split(' ').map((w, i, arr) => (i < arr.length - 1 ? w + ' ' : w));

  const hidden = reduce
    ? { opacity: 0 }
    : { opacity: 0, y, ...(blur ? { filter: 'blur(8px)' } : {}) };
  const shown = reduce
    ? { opacity: 1 }
    : { opacity: 1, y: '0em', ...(blur ? { filter: 'blur(0px)' } : {}) };

  return (
    <Tag aria-label={text} className={cn('inline-block', className)}>
      {units.map((u, i) => (
        <motion.span
          key={i}
          aria-hidden
          className="inline-block whitespace-pre will-change-transform"
          initial={hidden}
          whileInView={shown}
          viewport={VIEWPORT_ONCE}
          transition={{
            duration: DURATION.base,
            ease: EASE.luxe,
            delay: delay + (reduce ? 0 : i * step),
          }}
        >
          {u}
        </motion.span>
      ))}
    </Tag>
  );
}

/** Split into characters while keeping spaces attached so words never break. */
function splitChars(text: string): string[] {
  const out: string[] = [];
  for (const ch of text) out.push(ch === ' ' ? ' ' : ch);
  return out;
}
