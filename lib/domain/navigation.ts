import { ROUTES } from './routes';

/**
 * Navigation model — mirrors the approved IA exactly. Structure only (keys +
 * routes); labels resolve from the `nav` message namespace. No items may be
 * invented or added.
 */
export type NavKey =
  'home' | 'about' | 'services' | 'work' | 'portfolio' | 'contact';

export interface NavItem {
  /** Message key under the `nav` namespace. */
  key: NavKey;
  href: string;
}

export const MAIN_NAV: readonly NavItem[] = [
  { key: 'home', href: ROUTES.home },
  { key: 'about', href: ROUTES.about },
  { key: 'services', href: ROUTES.services },
  { key: 'work', href: ROUTES.work },
  { key: 'portfolio', href: ROUTES.portfolio },
  { key: 'contact', href: ROUTES.contact },
] as const;

/** The footer mirrors the primary navigation. */
export const FOOTER_NAV: readonly NavItem[] = MAIN_NAV;

/** Primary call-to-action shown in the header and mobile menu. */
export const CTA_ITEM = { href: ROUTES.contact } as const;
