/**
 * Social presence.
 *
 * SOCIAL_NETWORKS is the registry of supported networks (stable identity +
 * label). SOCIAL_LINKS is the active subset with URLs — real URLs are contact
 * data from the CMS, so hrefs are placeholders ('#') for now. Labels are proper
 * nouns (never translated).
 */
export const SOCIAL_NETWORKS = {
  instagram: { id: 'instagram', label: 'Instagram' },
  linkedin: { id: 'linkedin', label: 'LinkedIn' },
} as const;

export type SocialNetwork = keyof typeof SOCIAL_NETWORKS;

export interface SocialLink {
  network: SocialNetwork;
  /** Pending real URL from the CMS. */
  href: string;
}

export const SOCIAL_LINKS: readonly SocialLink[] = [
  { network: 'instagram', href: '#' },
  { network: 'linkedin', href: '#' },
] as const;
