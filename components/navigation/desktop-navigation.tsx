'use client';

import { useTranslations } from 'next-intl';
import { Stack } from '@/components/layout';
import { MAIN_NAV } from '@/lib/navigation';
import { NavLink } from './nav-link';

/**
 * DesktopNavigation — the inline primary nav (md and up).
 * Composes NavLink over the approved IA; inherits the header's text color.
 */
export function DesktopNavigation() {
  const t = useTranslations('nav');
  const tA11y = useTranslations('a11y');

  return (
    <nav aria-label={tA11y('primaryNavigation')} className="hidden md:block">
      <Stack direction="row" gap={32} align="center" as="ul">
        {MAIN_NAV.map((item) => (
          <li key={item.key}>
            <NavLink href={item.href} className="font-body text-[0.9375rem]">
              {t(item.key)}
            </NavLink>
          </li>
        ))}
      </Stack>
    </nav>
  );
}
