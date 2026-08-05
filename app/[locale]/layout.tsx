import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { routing, isValidLocale } from '@/i18n/routing';
import { fontVariables } from '@/lib/fonts';
import { SITE } from '@/lib/site';
import '@/styles/globals.css';

/**
 * Root (locale) layout — structural shell only.
 * Renders <html>/<body>, wires fonts and the i18n provider, and enables
 * static rendering per locale. Visual chrome (Header/Footer) is added in a
 * later phase, not here.
 */

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: SITE.name,
    template: `%s — ${SITE.name}`,
  },
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <html lang={locale} className={fontVariables}>
      <body>
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
