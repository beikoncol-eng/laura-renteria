/**
 * Footer structure — the ordered columns of the editorial footer. Column
 * headings resolve from the `footer` message namespace; navigation reuses
 * FOOTER_NAV. Structure only.
 */
export const FOOTER_COLUMNS = [
  'navigation',
  'contact',
  'social',
  'legal',
] as const;

export type FooterColumn = (typeof FOOTER_COLUMNS)[number];
