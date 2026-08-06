import { CONTACT } from './contact';

/**
 * Social presence.
 *
 * SOCIAL_NETWORKS is the registry of supported networks (stable identity +
 * label). SOCIAL_LINKS is the active subset with real URLs. Only networks with
 * a live profile are listed, so the UI never renders a dead link. Labels are
 * proper nouns (never translated).
 */
export const SOCIAL_NETWORKS = {
  instagram: { id: 'instagram', label: 'Instagram' },
  linkedin: { id: 'linkedin', label: 'LinkedIn' },
} as const;

export type SocialNetwork = keyof typeof SOCIAL_NETWORKS;

export interface SocialLink {
  network: SocialNetwork;
  href: string;
}

export const SOCIAL_LINKS: readonly SocialLink[] = [
  { network: 'instagram', href: CONTACT.instagramUrl },
] as const;
