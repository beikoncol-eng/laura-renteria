import { ROUTES } from './routes';

/**
 * CTA types — the semantic call-to-action intents used across the site, each
 * mapped to its destination route. Button/link COPY resolves from messages;
 * this defines intent and destination only.
 */
export const CTA_TYPES = [
  'contact',
  'explore-services',
  'view-work',
  'view-portfolio',
] as const;

export type CtaType = (typeof CTA_TYPES)[number];

export const CTA_ROUTE: Record<CtaType, string> = {
  contact: ROUTES.contact,
  'explore-services': ROUTES.services,
  'view-work': ROUTES.work,
  'view-portfolio': ROUTES.portfolio,
};
