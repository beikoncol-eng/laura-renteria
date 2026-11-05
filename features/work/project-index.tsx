'use client';

import Image from 'next/image';
import { useState } from 'react';
import {
  AnimatePresence,
  LayoutGroup,
  motion,
  useReducedMotion,
} from 'framer-motion';
import { Link } from '@/i18n/navigation';
import { EASE } from '@/lib/motion';
import { workPath, type Discipline } from '@/lib/domain';
import type { MediaAsset } from '@/lib/media';
import { cn } from '@/lib/utils';

/**
 * Project index — the Projects grid with discipline filters (All · Branding ·
 * Web). Filtering re-flows the grid with shared-layout motion; each card is a
 * large cover with number, name, line, discipline tags and year, and the cover
 * eases in on hover. The second column sits lower for an editorial rhythm.
 */
export interface ProjectItem {
  slug: string;
  name: string;
  tagline: string;
  year: number;
  disciplines: Discipline[];
  cover: MediaAsset;
}

export function ProjectIndex({
  items,
  labels,
}: {
  items: ProjectItem[];
  labels: { all: string; view: string; filter: string } & Record<
    Discipline,
    string
  >;
}) {
  const reduce = useReducedMotion();
  const [filter, setFilter] = useState<Discipline | 'all'>('all');
  const filters: (Discipline | 'all')[] = ['all', 'branding', 'web'];
  const shown = items.filter(
    (p) => filter === 'all' || p.disciplines.includes(filter),
  );
  const count = (f: Discipline | 'all') =>
    f === 'all'
      ? items.length
      : items.filter((p) => p.disciplines.includes(f)).length;

  return (
    <LayoutGroup>
      <div
        role="group"
        aria-label={labels.filter}
        className="border-line flex flex-wrap gap-[var(--space-8)] border-b pb-[var(--space-32)]"
      >
        {filters.map((f) => {
          const active = filter === f;
          return (
            <button
              key={f}
              type="button"
              aria-pressed={active}
              onClick={() => setFilter(f)}
              className={cn(
                'font-body relative rounded-full px-[var(--space-24)] py-[10px] text-[0.875rem] transition-colors duration-300',
                active ? 'text-paper' : 'text-ink hover:bg-cream',
              )}
            >
              {active ? (
                <motion.span
                  layoutId="project-filter"
                  className="bg-ink absolute inset-0 rounded-full"
                  transition={{ duration: reduce ? 0 : 0.45, ease: EASE.luxe }}
                />
              ) : null}
              <span className="relative">
                {f === 'all' ? labels.all : labels[f]}
                <sup className="pl-[3px] text-[0.625rem] opacity-60">
                  {count(f)}
                </sup>
              </span>
            </button>
          );
        })}
      </div>

      <motion.ul
        layout
        className="grid grid-cols-1 gap-x-[var(--space-48)] gap-y-[var(--space-96)] pt-[var(--space-64)] md:grid-cols-2"
      >
        <AnimatePresence mode="popLayout">
          {shown.map((p, i) => (
            <motion.li
              key={p.slug}
              layout
              initial={{ opacity: 0, y: reduce ? 0 : 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: reduce ? 1 : 0.96 }}
              transition={{
                duration: 0.7,
                ease: EASE.luxe,
                delay: reduce ? 0 : i * 0.08,
              }}
              className={i % 2 === 1 ? 'md:pt-[var(--space-160)]' : undefined}
            >
              <ProjectCard
                project={p}
                index={items.indexOf(p)}
                labels={labels}
              />
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>
    </LayoutGroup>
  );
}

function ProjectCard({
  project: p,
  index,
  labels,
}: {
  project: ProjectItem;
  index: number;
  labels: { view: string } & Record<Discipline, string>;
}) {
  return (
    <Link href={workPath(p.slug)} className="group block">
      <div className="bg-cream relative aspect-[4/3] overflow-hidden">
        <Image
          src={p.cover.src}
          alt={p.cover.alt}
          fill
          sizes="(max-width: 768px) 100vw, 45vw"
          className="object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
        />
        <span className="bg-paper text-ink font-body absolute right-[var(--space-16)] bottom-[var(--space-16)] translate-y-[8px] rounded-full px-[var(--space-16)] py-[8px] text-[0.8125rem] opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          {labels.view} →
        </span>
      </div>
      <div className="flex items-baseline justify-between gap-[var(--space-24)] pt-[var(--space-24)]">
        <div className="flex items-baseline gap-[var(--space-16)]">
          <span className="font-display text-muted text-[1rem]">
            {String(index + 1).padStart(2, '0')}
          </span>
          <h2 className="font-display tracking-display text-ink text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.05] transition-transform duration-500 group-hover:translate-x-[0.3rem]">
            {p.name}
          </h2>
        </div>
        <span className="font-body text-muted shrink-0 text-[0.8125rem]">
          {p.year}
        </span>
      </div>
      <p className="font-body text-muted max-w-[46ch] pt-[var(--space-8)] text-[0.9375rem] leading-[1.6]">
        {p.tagline}
      </p>
      <div className="flex gap-[var(--space-8)] pt-[var(--space-16)]">
        {p.disciplines.map((d) => (
          <span
            key={d}
            className="border-line font-body tracking-label text-ink rounded-full border px-[12px] py-[4px] text-[0.6875rem] uppercase"
          >
            {labels[d]}
          </span>
        ))}
      </div>
    </Link>
  );
}
