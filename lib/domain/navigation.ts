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
  /**
   * Whether the item is shown in public navigation. Unpublished items keep
   * their route, page, components and translations — they are simply hidden
   * from menus, the footer and the sitemap until their content is ready.
   */
  published?: boolean;
}

/**
 * The full IA. `published: false` marks a route that exists internally but is
 * not yet linked publicly (Work and Portfolio await finished content).
 */
export const MAIN_NAV: readonly NavItem[] = [
  { key: 'home', href: ROUTES.home, published: true },
  { key: 'about', href: ROUTES.about, published: true },
  { key: 'services', href: ROUTES.services, published: true },
  { key: 'work', href: ROUTES.work, published: false },
  { key: 'portfolio', href: ROUTES.portfolio, published: false },
  { key: 'contact', href: ROUTES.contact, published: true },
] as const;

/** Only the routes currently linked in public navigation. */
export const PUBLIC_NAV: readonly NavItem[] = MAIN_NAV.filter(
  (item) => item.published !== false,
);

/** The footer mirrors the primary (public) navigation. */
export const FOOTER_NAV: readonly NavItem[] = PUBLIC_NAV;

/** Primary call-to-action shown in the header and mobile menu. */
export const CTA_ITEM = { href: ROUTES.contact } as const;
