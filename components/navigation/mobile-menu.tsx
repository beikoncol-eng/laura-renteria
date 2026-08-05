'use client';

import { useEffect, useRef } from 'react';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { X } from 'lucide-react';
import { Container } from '@/components/layout';
import { NavLink } from './nav-link';
import { buttonClassName } from '@/components/buttons';
import { useLockBodyScroll } from '@/hooks/use-lock-body-scroll';
import { MAIN_NAV, CTA_ITEM } from '@/lib/domain';
import { cn } from '@/lib/utils';

/**
 * MobileMenu — full-screen editorial menu (not a drawer / slide-over).
 *
 * Mounted only while open (AnimatePresence in MobileNavigation handles exit).
 * Large typography, generous spacing, minimal interaction. Fade + a small
 * translate on the list, both removed under reduced-motion. Accessible modal:
 * scroll lock, focus trap, Escape to close.
 */
const FOCUSABLE =
  'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

export interface MobileMenuProps {
  onClose: () => void;
}

export function MobileMenu({ onClose }: MobileMenuProps) {
  const t = useTranslations('nav');
  const tA11y = useTranslations('a11y');
  const tCta = useTranslations('cta');
  const reduce = useReducedMotion();
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  // Lock background scroll while the full-screen menu is open.
  useLockBodyScroll(true);

  useEffect(() => {
    closeRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        onClose();
        return;
      }
      if (event.key !== 'Tab') return;

      const panel = panelRef.current;
      if (!panel) return;
      const items = Array.from(
        panel.querySelectorAll<HTMLElement>(FOCUSABLE),
      ).filter((el) => el.offsetParent !== null);
      if (items.length === 0) return;

      const first = items[0]!;
      const last = items[items.length - 1]!;
      const activeEl = document.activeElement;

      if (event.shiftKey && activeEl === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && activeEl === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [onClose]);

  const list: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.05, delayChildren: 0.08 } },
  };
  const item: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : 8 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      ref={panelRef}
      id="mobile-menu"
      role="dialog"
      aria-modal="true"
      aria-label={tA11y('primaryNavigation')}
      className="bg-paper fixed inset-0 z-[90] md:hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
    >
      <Container className="flex h-[100dvh] flex-col">
        <div className="flex h-[var(--header-h-mobile)] items-center justify-end">
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label={tA11y('closeMenu')}
            className="text-ink -mr-2 inline-flex h-[var(--touch-min)] w-[var(--touch-min)] items-center justify-center transition-opacity duration-[var(--dur-fast)] hover:opacity-70"
          >
            <X size={24} strokeWidth={1.5} aria-hidden />
          </button>
        </div>

        <motion.ul
          variants={list}
          initial="hidden"
          animate="visible"
          className="mt-[var(--space-64)] flex flex-col gap-[var(--space-24)]"
        >
          {MAIN_NAV.map((navItem) => (
            <motion.li key={navItem.key} variants={item}>
              <NavLink
                href={navItem.href}
                onClick={onClose}
                className="font-display tracking-display text-[2.25rem] leading-[1.1]"
              >
                {t(navItem.key)}
              </NavLink>
            </motion.li>
          ))}
        </motion.ul>

        <div className="mt-auto pb-[var(--space-48)] pt-[var(--space-48)]">
          <Link
            href={CTA_ITEM.href}
            onClick={onClose}
            className={cn(buttonClassName('primary', 'md'), 'w-full')}
          >
            {tCta('label')}
          </Link>
        </div>
      </Container>
    </motion.div>
  );
}
