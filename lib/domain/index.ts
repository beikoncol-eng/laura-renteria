/**
 * Domain layer — the single source of truth for the site's business structure.
 *
 * Defines the business MODEL only: site identity, routes, navigation, footer,
 * social presence, contact shape, the three consulting areas + capabilities,
 * process, FAQ categories, CTA types, and SEO/metadata defaults. It contains no
 * copy and no translations — those live in messages / Sanity and resolve
 * through the key helpers exported here.
 *
 * Import business structure from `@/lib/domain` (or a specific submodule).
 */

export * from './site';
export * from './routes';
export * from './navigation';
export * from './footer';
export * from './social';
export * from './contact';
export * from './services';
export * from './process';
export * from './faq';
export * from './cta';
export * from './seo';
