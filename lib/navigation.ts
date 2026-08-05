/**
 * Navigation model — mirrors the approved Information Architecture exactly.
 * Labels are resolved at render time from the `nav` message namespace; only
 * structure (keys + routes) lives here. No additional items may be invented.
 */

export type NavKey =
  'home' | 'about' | 'services' | 'work' | 'portfolio' | 'contact';

export interface NavItem {
  /** Message key under the `nav` namespace. */
  key: NavKey;
  /** Locale-agnostic route (next-intl adds the locale prefix). */
  href: string;
}

export const MAIN_NAV: readonly NavItem[] = [
  { key: 'home', href: '/' },
  { key: 'about', href: '/about' },
  { key: 'services', href: '/services' },
  { key: 'work', href: '/work' },
  { key: 'portfolio', href: '/portfolio' },
  { key: 'contact', href: '/contact' },
] as const;

/** Primary call-to-action shown in the header and mobile menu. */
export const CTA_ITEM = { href: '/contact' } as const;
