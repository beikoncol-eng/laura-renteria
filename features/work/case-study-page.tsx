import type { ComponentType } from 'react';
import { ClosingCta } from '@/features/home/sections';
import type { CaseStudy } from '@/lib/domain';
import { PopularCase } from './popular/popular-case';
import { AnsiasCase } from './ansias/ansias-case';

/**
 * Case study — each project is told in the client's own brand, so every case
 * has its own composition (features/work/<client>) built from shared sections
 * (features/work/shared). This page picks the composition and closes with
 * Laura's CTA.
 *
 * Vertical spacing in the case sections uses padding, not margin: the global
 * `* { margin: 0 }` reset in styles/globals.css is unlayered, so it overrides
 * Tailwind's layered margin utilities.
 */
const CASES: Record<string, ComponentType<{ study: CaseStudy }>> = {
  'popular-el-conuco': PopularCase,
  'ansias-tattoo': AnsiasCase,
};

export function CaseStudyPage({ study }: { study: CaseStudy }) {
  const Case = CASES[study.slug];
  if (!Case) return null;
  return (
    <>
      <Case study={study} />
      <ClosingCta />
    </>
  );
}
