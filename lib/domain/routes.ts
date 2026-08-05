import type { ServiceSlug } from './services';

/**
 * Route registry — every locale-agnostic path in one place (next-intl adds the
 * locale prefix). Components reference these instead of literal strings.
 */
export const ROUTES = {
  home: '/',
  about: '/about',
  services: '/services',
  work: '/work',
  portfolio: '/portfolio',
  contact: '/contact',
} as const;

export type RouteKey = keyof typeof ROUTES;

/** A consulting-area detail page. */
export function servicePath(slug: ServiceSlug): string {
  return `/services/${slug}`;
}

/** A case-study / work detail page. */
export function workPath(slug: string): string {
  return `/work/${slug}`;
}
