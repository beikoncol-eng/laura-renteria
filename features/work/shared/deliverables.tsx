'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { EASE } from '@/lib/motion';
import type { CaseTheme } from './theme';

/**
 * Deliverables — "what we made", in one glance: one column per discipline,
 * each item drawn in with its hairline as it enters. It makes the full scope
 * explicit (a complete brand and a website, not just a site).
 */
export function Deliverables({
  theme,
  title,
  columns,
}: {
  theme: CaseTheme;
  title: string;
  columns: { title: string; items: string[] }[];
}) {
  const reduce = useReducedMotion();
  return (
    <section
      className="py-[clamp(4.5rem,10vw,8rem)]"
      style={{ backgroundColor: theme.bg, color: theme.fg }}
    >
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-[var(--space-48)] px-[var(--gutter-mobile)] md:grid-cols-12 md:px-[var(--space-96)]">
        <h2
          className="text-[clamp(2.5rem,6vw,5.5rem)] leading-[0.95] md:col-span-4"
          style={theme.title}
        >
          {title}
        </h2>
        <div className="grid grid-cols-1 gap-[var(--space-48)] md:col-span-8 md:grid-cols-2">
          {columns.map((col, c) => (
            <div key={col.title}>
              <p
                className="font-body tracking-label pb-[var(--space-16)] text-[0.75rem] uppercase"
                style={{ color: theme.accent }}
              >
                {col.title}
              </p>
              <ul>
                {col.items.map((item, i) => (
                  <motion.li
                    key={item}
                    className="font-body relative flex gap-[var(--space-16)] py-[var(--space-16)] text-[0.9375rem] leading-[1.45]"
                    initial={reduce ? false : { opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-8%' }}
                    transition={{
                      duration: 0.7,
                      ease: EASE.luxe,
                      delay: c * 0.15 + i * 0.06,
                    }}
                  >
                    <motion.span
                      aria-hidden
                      className="absolute top-0 left-0 block h-px w-full origin-left"
                      style={{ backgroundColor: theme.rule }}
                      initial={reduce ? false : { scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true, margin: '-8%' }}
                      transition={{
                        duration: 0.9,
                        ease: EASE.luxe,
                        delay: c * 0.15 + i * 0.06,
                      }}
                    />
                    <span className="shrink-0 tabular-nums opacity-50">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
