import { Instagram, Linkedin, type LucideIcon } from 'lucide-react';
import { useTranslations } from 'next-intl';
import {
  SOCIAL_LINKS,
  SOCIAL_NETWORKS,
  type SocialLink,
  type SocialNetwork,
} from '@/lib/domain';
import { cn } from '@/lib/utils';

/**
 * SocialLinks — line icons only (24px, single stroke), never filled or colorful.
 * Prop-driven so real profile URLs from the CMS replace the placeholder hrefs
 * without markup changes. Labels come from the network registry; external links
 * open safely; placeholder ('#') links stay in-tab.
 */
const ICONS: Record<SocialNetwork, LucideIcon> = {
  instagram: Instagram,
  linkedin: Linkedin,
};

export interface SocialLinksProps {
  links?: readonly SocialLink[];
  className?: string;
}

export function SocialLinks({
  links = SOCIAL_LINKS,
  className,
}: SocialLinksProps) {
  const t = useTranslations('a11y');
  if (links.length === 0) return null;

  return (
    <ul
      aria-label={t('socialNavigation')}
      className={cn('flex items-center gap-[var(--space-24)]', className)}
    >
      {links.map((link) => {
        const Icon = ICONS[link.network];
        const label = SOCIAL_NETWORKS[link.network].label;
        const external = link.href.startsWith('http');
        return (
          <li key={link.network}>
            <a
              href={link.href}
              aria-label={label}
              {...(external
                ? { target: '_blank', rel: 'noopener noreferrer' }
                : {})}
              className="text-ink inline-flex h-[var(--touch-min)] w-[var(--touch-min)] items-center justify-center transition-opacity duration-[var(--dur-fast)] hover:opacity-60"
            >
              <Icon size={24} strokeWidth={1.5} aria-hidden />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
