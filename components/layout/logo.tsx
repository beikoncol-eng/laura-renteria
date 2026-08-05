import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { cn } from '@/lib/utils';
import { SITE } from '@/lib/site';

/**
 * Logo — theme-safe editorial wordmark.
 *
 * Renders in `currentColor`, so it inherits whatever text color the header
 * sets (ink on solid, or a lighter tone over a dark hero). When a licensed
 * mark exists it can replace the wordmark here without changing consumers.
 */
export interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  const t = useTranslations('a11y');
  return (
    <Link
      href="/"
      aria-label={t('homeLink')}
      className={cn(
        'font-display tracking-display text-[1.25rem] leading-none text-current',
        'transition-opacity duration-[var(--dur-base)] hover:opacity-70',
        className,
      )}
    >
      {SITE.name}
    </Link>
  );
}
