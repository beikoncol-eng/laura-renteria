import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { routing, isValidLocale } from '@/i18n/routing';
import { fontVariables } from '@/lib/fonts';
import { SITE } from '@/lib/domain';
import { buildMetadata } from '@/lib/seo';
import '@/styles/globals.css';

/**
 * Root (locale) layout — structural shell only.
 * Renders <html>/<body>, wires fonts and the i18n provider, and enables
 * static rendering per locale. Visual chrome (Header/Footer) is composed by
 * PageWrapper at the page level, not here.
 */

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const resolved = isValidLocale(locale) ? locale : routing.defaultLocale;

  return {
    metadataBase: new URL(SITE.url),
    title: {
      default: SITE.name,
      template: `%s — ${SITE.name}`,
    },
    // Root-level localized alternates (canonical + hreflang). Pages extend
    // this via their own generateMetadata with page-specific title/description.
    ...buildMetadata({ locale: resolved }),
  };
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
  const messages = await getMessages();

  return (
    <html lang={locale} className={fontVariables}>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
