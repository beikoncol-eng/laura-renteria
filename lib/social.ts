/**
 * Social links — STRUCTURAL PLACEHOLDERS.
 *
 * Platform identity is stable, but the real profile URLs are contact data and
 * will come from Sanity (global settings) later. `href: '#'` marks each as
 * pending; the SocialLinks component is prop-driven, so real values drop in
 * without touching markup. No handles are invented here.
 */

export type SocialPlatform = 'instagram' | 'linkedin';

export interface SocialLink {
  platform: SocialPlatform;
  /** Accessible, human-readable label (proper noun — not translated). */
  label: string;
  /** Pending real URL from CMS. */
  href: string;
}

export const SOCIAL_LINKS: readonly SocialLink[] = [
  { platform: 'instagram', label: 'Instagram', href: '#' },
  { platform: 'linkedin', label: 'LinkedIn', href: '#' },
] as const;
