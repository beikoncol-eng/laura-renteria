import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { routing, isValidLocale } from '@/i18n/routing';
import { fontVariables } from '@/lib/fonts';
import { SITE, SEO_KEYWORDS } from '@/lib/domain';
import { buildMetadata } from '@/lib/seo';
import { SiteJsonLd } from '@/components/layout';
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
    applicationName: SITE.name,
    authors: [{ name: SITE.name, url: SITE.url }],
    creator: SITE.name,
    publisher: SITE.name,
    keywords: [...SEO_KEYWORDS],
    formatDetection: { email: false, address: false, telephone: false },
    icons: {
      icon: [
        { url: '/favicon.ico', sizes: 'any' },
        { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
        { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
        { url: '/icon.svg', type: 'image/svg+xml' },
      ],
      apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
      shortcut: ['/favicon.ico'],
      other: [
        { rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#141414' },
      ],
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
        <SiteJsonLd locale={locale} />
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
