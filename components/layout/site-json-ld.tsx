import { JsonLd } from './json-ld';
import { SITE, CONTACT, SEO_DEFAULTS } from '@/lib/domain';

/**
 * SiteJsonLd — the site-wide structured data, emitted once by the shell as a
 * single linked @graph (Organization, WebSite, Person, ProfessionalService).
 * Built entirely from the real contact facts so search and social render
 * accurate, validating schema.org data. Nodes reference each other by @id.
 */
const DESCRIPTION =
  'Brand strategist, creative director and image consultant helping companies, founders and professionals build brands that are remembered.';

export function SiteJsonLd({ locale }: { locale: string }) {
  const base = SITE.url;
  const orgId = `${base}/#organization`;
  const siteId = `${base}/#website`;
  const personId = `${base}/#person`;
  const logo = `${base}/apple-icon.png`;
  const image = `${base}${SEO_DEFAULTS.defaultOgImage}`;

  const graph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': orgId,
        name: SITE.name,
        url: base,
        logo: { '@type': 'ImageObject', url: logo },
        image,
        email: CONTACT.email,
        telephone: CONTACT.phoneE164,
        sameAs: [CONTACT.instagramUrl],
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'customer service',
          email: CONTACT.email,
          telephone: CONTACT.phoneE164,
          availableLanguage: ['English', 'Spanish'],
        },
      },
      {
        '@type': 'WebSite',
        '@id': siteId,
        name: SITE.name,
        url: `${base}/${locale}`,
        inLanguage: locale,
        publisher: { '@id': orgId },
      },
      {
        '@type': 'Person',
        '@id': personId,
        name: SITE.name,
        url: base,
        image,
        jobTitle: 'Brand Strategist, Creative Director & Image Consultant',
        description: DESCRIPTION,
        email: CONTACT.email,
        telephone: CONTACT.phoneE164,
        worksFor: { '@id': orgId },
        sameAs: [CONTACT.instagramUrl],
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'New York',
          addressCountry: 'US',
        },
      },
      {
        '@type': 'ProfessionalService',
        '@id': `${base}/#service`,
        name: SITE.name,
        url: `${base}/${locale}/services`,
        image,
        description: DESCRIPTION,
        provider: { '@id': personId },
        areaServed: ['United States', 'Colombia'],
        serviceType: [
          'Brand Strategy',
          'Creative Direction',
          'Image Consulting',
        ],
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'New York',
          addressCountry: 'US',
        },
      },
    ],
  };

  return <JsonLd data={graph} />;
}
