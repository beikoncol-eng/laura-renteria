import type { routing } from '@/i18n/routing';
import type messages from '@/messages/en.json';

/**
 * Global type augmentation for next-intl:
 * - Locale is constrained to the configured locales.
 * - Message keys are type-checked against the English message catalogue.
 */
declare module 'next-intl' {
  interface AppConfig {
    Locale: (typeof routing.locales)[number];
    Messages: typeof messages;
  }
}
