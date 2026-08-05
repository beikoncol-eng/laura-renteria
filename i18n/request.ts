import { getRequestConfig } from 'next-intl/server';
import { isValidLocale, routing } from './routing';

/**
 * Per-request i18n configuration consumed by the next-intl plugin.
 * Messages are loaded lazily per locale from `/messages`.
 */
export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = isValidLocale(requested) ? requested : routing.defaultLocale;

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
