'use client';

import { useCallback, useRef, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Menu } from 'lucide-react';
import { MobileMenu } from './mobile-menu';

/**
 * MobileNavigation — the menu trigger (below md) plus the full-screen menu.
 *
 * Owns open state and focus return: when the menu closes, focus goes back to
 * the trigger. The trigger exposes aria-expanded / aria-controls for AT.
 */
export function MobileNavigation() {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const tA11y = useTranslations('a11y');

  const close = useCallback(() => {
    setOpen(false);
    // Return focus to the trigger after the menu unmounts.
    window.requestAnimationFrame(() => triggerRef.current?.focus());
  }, []);

  return (
    <div className="md:hidden">
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen(true)}
        aria-label={tA11y('openMenu')}
        aria-expanded={open}
        aria-controls="mobile-menu"
        className="-mr-2 inline-flex h-[var(--touch-min)] w-[var(--touch-min)] items-center justify-center text-current transition-opacity duration-[var(--dur-fast)] hover:opacity-70"
      >
        <Menu size={24} strokeWidth={1.5} aria-hidden />
      </button>

      <AnimatePresence>
        {open && <MobileMenu key="mobile-menu" onClose={close} />}
      </AnimatePresence>
    </div>
  );
}
