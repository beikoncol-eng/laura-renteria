import type { ServiceSlug } from './services';

/** Disciplines a project can be filtered by on the Projects index. */
export const DISCIPLINES = ['branding', 'web'] as const;
export type Discipline = (typeof DISCIPLINES)[number];

/**
 * Case studies (the Projects section) — structure only. Copy resolves from the `work.cases.<slug>`
 * message namespace; photography from `features/work/case-media.ts`.
 *
 * Cases publish only with the client's authorization. `published: false` keeps
 * the page reachable by direct URL for review (noindex) but out of every link,
 * the Projects index and the sitemap. Flip it to `true` once the client
 * approves: the Projects item then appears in the navigation and sitemap.
 */
export interface CaseStudy {
  slug: string;
  published: boolean;
  year: number;
  /** Consulting areas this case illustrates; their pages link to it. */
  services: ServiceSlug[];
  /** What we made, for the Projects filters. */
  disciplines: Discipline[];
  liveUrl?: string;
}

export const CASE_STUDIES: readonly CaseStudy[] = [
  {
    slug: 'popular-el-conuco',
    published: true, // authorized by the studio owner
    year: 2026,
    services: ['creative-direction', 'web-design'],
    disciplines: ['branding', 'web'],
    liveUrl: 'https://popular-by-el-conuco.vercel.app',
  },
  {
    slug: 'ansias-tattoo',
    published: true, // authorized by the studio owner
    year: 2026,
    services: ['creative-direction', 'web-design'],
    disciplines: ['web'], // the brand marks are the artist's own
    liveUrl: 'https://www.ansiastattoo.com',
  },
] as const;

export const PUBLISHED_CASES: readonly CaseStudy[] = CASE_STUDIES.filter(
  (c) => c.published,
);

/**
 * Cases shown on the Projects index. While nothing is published the whole
 * section is hidden (noindex, out of nav and sitemap), so it lists every case
 * for review; once any case is published it lists only published ones.
 */
export const INDEX_CASES: readonly CaseStudy[] = PUBLISHED_CASES.length
  ? PUBLISHED_CASES
  : CASE_STUDIES;

/** The Projects section goes live with its first published case. */
export const PROJECTS_LIVE = PUBLISHED_CASES.length > 0;

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return CASE_STUDIES.find((c) => c.slug === slug);
}

/** Published cases that illustrate a consulting area. */
export function casesForService(slug: ServiceSlug): readonly CaseStudy[] {
  return PUBLISHED_CASES.filter((c) => c.services.includes(slug));
}
