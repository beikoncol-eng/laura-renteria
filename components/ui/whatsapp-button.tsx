'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { CONTACT } from '@/lib/domain';
import { EASE, DURATION } from '@/lib/motion';

/**
 * WhatsAppButton — a small, premium floating action fixed in the upper-right,
 * below the header so it never collides with the nav. `wa.me` opens the app on
 * mobile and WhatsApp Web on desktop. Entrance is a quiet fade + settle; hover
 * is a soft lift, never a bounce or pulse.
 *
 * It sits below the header (z-40) and the full-screen mobile menu (z-90), so
 * whenever another floating surface appears it is covered automatically.
 */
export function WhatsAppButton() {
  const t = useTranslations('a11y');
  const reduce = useReducedMotion();

  return (
    <motion.a
      href={CONTACT.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t('whatsapp')}
      title={t('whatsapp')}
      initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.85, y: -6 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        duration: reduce ? 0 : DURATION.slow,
        ease: EASE.luxe,
        delay: 0.6,
      }}
      whileHover={reduce ? undefined : { y: -2, scale: 1.04 }}
      whileTap={reduce ? undefined : { scale: 0.97 }}
      className="group text-paper bg-ink fixed top-[calc(var(--header-h-mobile)+var(--space-16))] right-[var(--space-16)] z-40 inline-flex h-12 w-12 items-center justify-center rounded-full ring-1 ring-black/10 transition-[opacity,box-shadow] duration-[var(--dur-base)] ease-[cubic-bezier(0.16,1,0.3,1)] hover:opacity-95 hover:shadow-[0_8px_24px_-8px_rgba(0,0,0,0.35)] md:top-[calc(var(--header-h-desktop)+var(--space-24))] md:right-[var(--space-32)] md:h-14 md:w-14"
    >
      <svg
        viewBox="0 0 24 24"
        aria-hidden
        className="h-6 w-6 md:h-7 md:w-7"
        fill="currentColor"
      >
        <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.945C.157 5.335 5.494 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.51 5.26l-.999 3.648 3.744-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.767.967-.94 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
      </svg>
    </motion.a>
  );
}
