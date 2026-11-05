'use client';

import { useEffect, useId, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { ChevronDown } from 'lucide-react';
import { Link, usePathname } from '@/i18n/navigation';
import { ROUTES, SERVICE_AREAS, servicePath } from '@/lib/domain';
import { cn, humanizeSlug } from '@/lib/utils';

/**
 * ServicesMenu — the "Services" item of the desktop nav as a disclosure.
 * "Services" stays a link to the landing; the chevron (or hovering the item)
 * reveals the four consulting areas with their taglines. Keyboard: the
 * chevron button toggles, Escape closes and returns focus; it also closes on
 * route change and when focus or the pointer leaves.
 */
export function ServicesMenu() {
  const t = useTranslations('nav');
  const tAreas = useTranslations('services.areas');
  const reduce = useReducedMotion();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const wrap = useRef<HTMLDivElement>(null);
  const button = useRef<HTMLButtonElement>(null);
  const closeTimer = useRef<number | undefined>(undefined);
  // A mouse click right after hover-open must not toggle the panel shut again.
  const openedByHover = useRef(false);
  const panelId = useId();

  const isActive =
    pathname === ROUTES.services || pathname.startsWith(`${ROUTES.services}/`);

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    if (!open) openedByHover.current = false;
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        button.current?.focus();
      }
    };
    const onDown = (e: PointerEvent) => {
      if (!wrap.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onDown);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', onDown);
    };
  }, [open]);

  const show = () => {
    window.clearTimeout(closeTimer.current);
    if (!open) openedByHover.current = true;
    setOpen(true);
  };
  const hide = () => {
    window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setOpen(false), 140);
  };

  return (
    <div
      ref={wrap}
      className="relative"
      onPointerEnter={(e) => e.pointerType === 'mouse' && show()}
      onPointerLeave={(e) => e.pointerType === 'mouse' && hide()}
      onBlur={(e) => {
        if (!wrap.current?.contains(e.relatedTarget as Node)) setOpen(false);
      }}
    >
      <div className="flex items-center gap-[6px]">
        <Link
          href={ROUTES.services}
          aria-current={isActive ? 'page' : undefined}
          className={cn(
            'link-underline font-body inline-block w-fit text-[0.9375rem] text-current',
            isActive && 'bg-[length:100%_1px]',
          )}
        >
          {t('services')}
        </Link>
        <button
          ref={button}
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          aria-label={t('services')}
          onClick={() => {
            if (openedByHover.current) {
              openedByHover.current = false;
              setOpen(true);
            } else setOpen((o) => !o);
          }}
          className="-m-[6px] inline-flex p-[6px] text-current opacity-70 transition-opacity hover:opacity-100"
        >
          <ChevronDown
            size={14}
            strokeWidth={1.75}
            aria-hidden
            className={cn(
              'transition-transform duration-300',
              open && 'rotate-180',
            )}
          />
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            id={panelId}
            initial={{ opacity: 0, y: reduce ? 0 : -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: reduce ? 0 : -4 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-full left-1/2 z-[60] w-[min(34rem,90vw)] -translate-x-1/2 pt-[var(--space-24)]"
          >
            <div className="bg-paper border-line text-ink border shadow-[0_24px_60px_-30px_rgba(20,20,20,0.35)]">
              <ul className="flex flex-col">
                {SERVICE_AREAS.map((area, i) => {
                  const tagline = (tAreas.raw(area.slug) as { tagline: string })
                    .tagline;
                  return (
                    <li key={area.slug} className="border-line border-b">
                      <Link
                        href={servicePath(area.slug)}
                        className="group hover:bg-cream grid grid-cols-[2.25rem_1fr] gap-[var(--space-16)] px-[var(--space-24)] py-[var(--space-16)] transition-colors duration-200"
                      >
                        <span className="font-display text-muted pt-[0.2em] text-[0.875rem]">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <span>
                          <span className="font-display tracking-display block text-[1.375rem] leading-[1.1] transition-transform duration-300 group-hover:translate-x-[0.25rem]">
                            {humanizeSlug(area.slug)}
                          </span>
                          <span className="font-body text-muted block pt-[var(--space-4)] text-[0.8125rem] leading-[1.45]">
                            {tagline}
                          </span>
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <Link
                href={ROUTES.services}
                className="font-body tracking-label text-muted hover:text-ink block px-[var(--space-24)] py-[var(--space-16)] text-[0.75rem] uppercase transition-colors"
              >
                {t('allServices')} →
              </Link>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
