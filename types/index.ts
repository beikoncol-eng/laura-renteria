/**
 * Shared, app-wide TypeScript contracts.
 * Domain types (Service, CaseStudy, PortfolioItem, …) are generated from
 * Sanity schemas in a later phase and will be re-exported from here.
 */
import type { Locale } from '@/i18n/routing';

export type { Locale };

/** A localized string map, keyed by locale. */
export type Localized<T> = Record<Locale, T>;
