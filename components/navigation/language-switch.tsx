'use client';

import { useLocale, useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';
import { Divider } from '@/components/layout';
import { cn } from '@/lib/utils';

/**
 * LanguageSwitch — EN / ES, no dropdown, no flags (Component System doc).
 *
 * Each option is a locale-aware Link to the current path in the other locale;
 * next-intl persists the choice. The active locale is emphasized and marked
 * with aria-current.
 */
export interface LanguageSwitchProps {
  className?: string;
}

export function LanguageSwitch({ className }: LanguageSwitchProps) {
  const active = useLocale();
  const pathname = usePathname();
  const t = useTranslations('language');

  return (
    <div
      className={cn('flex items-center gap-[var(--space-16)]', className)}
      role="group"
      aria-label={t('label')}
    >
      {routing.locales.map((locale, index) => {
        const isActive = locale === active;
        return (
          <span
            key={locale}
            className="flex items-center gap-[var(--space-16)]"
          >
            {index > 0 && <Divider orientation="vertical" className="h-3" />}
            <Link
              href={pathname}
              locale={locale}
              scroll={false}
              aria-current={isActive ? 'true' : undefined}
              className={cn(
                'font-body text-[0.8125rem] uppercase tracking-label text-current transition-opacity duration-[var(--dur-fast)]',
                isActive
                  ? 'font-medium opacity-100'
                  : 'font-normal opacity-45 hover:opacity-100',
              )}
            >
              {t(locale)}
            </Link>
          </span>
        );
      })}
    </div>
  );
}
