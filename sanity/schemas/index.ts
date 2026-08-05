import type { SchemaTypeDefinition } from 'sanity';

/**
 * Central schema registry.
 *
 * Organization (folders already scaffolded, populated in a later phase):
 *   - documents/    reusable content types (service, caseStudy, portfolioItem…)
 *   - singletons/   one-off documents (siteSettings, homePage, navigation…)
 *   - objects/      embedded value objects (seo, link, editorialImage…)
 *   - translations/ localized field / document-level i18n helpers
 *
 * Import from each group and spread into `types` when schemas are authored.
 */
const documents: SchemaTypeDefinition[] = [];
const singletons: SchemaTypeDefinition[] = [];
const objects: SchemaTypeDefinition[] = [];

export const schemaTypes: SchemaTypeDefinition[] = [
  ...documents,
  ...singletons,
  ...objects,
];
