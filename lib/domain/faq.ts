import { SERVICE_SLUGS } from './services';

/**
 * FAQ categories — the taxonomy for grouping questions. Derived from the domain
 * so it stays in lockstep with the three consulting areas, plus a 'general'
 * bucket. Question/answer copy resolves from messages/CMS; this is structure.
 */
export const FAQ_CATEGORY_KEYS = [...SERVICE_SLUGS, 'general'] as const;

export type FaqCategory = (typeof FAQ_CATEGORY_KEYS)[number];
