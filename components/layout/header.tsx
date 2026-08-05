'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { cn } from '@/lib/utils';
import { useScrolled } from '@/hooks/use-scrolled';
import { CTA_ITEM } from '@/lib/domain';
import { buttonClassName } from '@/components/buttons';
import {
  DesktopNavigation,
  LanguageSwitch,
  MobileNavigation,
} from '@/components/navigation';
import { Container } from './container';
import { Logo } from './logo';

/**
 * SiteHeader — fixed, minimal, never oversized.
 *
 * `transparent` (pages with a hero) starts the bar transparent and resolves it
 * to solid paper + hairline once scrolled — a quiet background/border cross-fade,
 * never a sliding or disappearing header (Motion doc). Pages without a hero
 * render solid from the top. `heroText` sets the text color while transparent,
 * so the header stays legible over light or dark hero imagery.
 */
export interface SiteHeaderProps {
  transparent?: boolean;
  heroText?: 'ink' | 'paper';
}

export function SiteHeader({
  transparent = false,
  heroText = 'ink',
}: SiteHeaderProps) {
  const scrolled = useScrolled();
  const tCta = useTranslations('cta');

  const isTransparent = transparent && !scrolled;
  const textColor = isTransparent
    ? heroText === 'paper'
      ? 'text-paper'
      : 'text-ink'
    : 'text-ink';

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50',
        'transition-colors duration-[var(--dur-base)] ease-[cubic-bezier(0.16,1,0.3,1)]',
        isTransparent
          ? 'border-b border-transparent bg-transparent'
          : 'border-line bg-paper border-b',
        textColor,
      )}
    >
      <Container className="flex h-[var(--header-h-mobile)] items-center justify-between md:h-[var(--header-h-desktop)]">
        <Logo />

        <div className="flex items-center gap-[var(--space-24)] md:gap-[var(--space-40)]">
          <DesktopNavigation />
          {/* Language switch is part of the primary nav and always visible —
              on mobile it sits in the bar, never only inside the menu. */}
          <LanguageSwitch />
          <Link
            href={CTA_ITEM.href}
            className={cn(
              buttonClassName('primary', 'sm'),
              'hidden md:inline-flex',
            )}
          >
            {tCta('label')}
          </Link>
          <MobileNavigation />
        </div>
      </Container>
    </header>
  );
}
