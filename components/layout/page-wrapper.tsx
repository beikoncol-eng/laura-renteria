import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { SiteFooter } from '@/components/footer';
import { WhatsAppButton } from '@/components/ui';
import { SkipToContent } from './skip-to-content';
import { SiteHeader } from './header';
import { Main } from './main';
import { TransitionWrapper } from './transition-wrapper';

/**
 * PageWrapper — the application shell.
 *
 * Composes the landmark structure every page shares: Skip to Content → Header
 * → Main → Footer. When the header is not transparent it overlaps a solid bar,
 * so Main is offset by the header height; a transparent (hero) header lets
 * content sit beneath it full-bleed.
 */
export interface PageWrapperProps {
  children: ReactNode;
  /** Header starts transparent over a hero, solidifying on scroll. */
  transparentHeader?: boolean;
  /** Text color while the header is transparent (over light vs dark hero). */
  heroText?: 'ink' | 'paper';
}

export function PageWrapper({
  children,
  transparentHeader = false,
  heroText = 'ink',
}: PageWrapperProps) {
  return (
    <>
      <SkipToContent />
      <SiteHeader transparent={transparentHeader} heroText={heroText} />
      <WhatsAppButton />
      <Main
        className={cn(
          !transparentHeader &&
            'pt-[var(--header-h-mobile)] md:pt-[var(--header-h-desktop)]',
        )}
      >
        <TransitionWrapper>{children}</TransitionWrapper>
      </Main>
      <SiteFooter />
    </>
  );
}
