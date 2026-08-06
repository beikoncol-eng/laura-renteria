import { JsonLd } from './json-ld';
import { SITE, CONTACT } from '@/lib/domain';

/**
 * SiteJsonLd — the site-wide Person + WebSite structured data, built from the
 * real contact facts (email, phone, Instagram). Rendered once by the shell so
 * every page ships consistent, accurate schema.org data for search and social.
 */
export function SiteJsonLd({ locale }: { locale: string }) {
  const person = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: SITE.name,
    url: SITE.url,
    email: `mailto:${CONTACT.email}`,
    telephone: CONTACT.phoneE164,
    jobTitle: 'Brand Strategist, Creative Director & Image Consultant',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'New York',
      addressCountry: 'US',
    },
    sameAs: [CONTACT.instagramUrl],
  };

  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE.name,
    url: `${SITE.url}/${locale}`,
    inLanguage: locale,
  };

  return (
    <>
      <JsonLd data={person} />
      <JsonLd data={website} />
    </>
  );
}
