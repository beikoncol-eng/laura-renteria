/**
 * Contact information — the real, canonical contact facts (non-localized).
 *
 * These are the single source of truth for every contact touchpoint: the
 * contact section and page, the footer, social links, structured data and the
 * floating WhatsApp button. Localized labels (and the human location string)
 * live in messages; the values here are language-neutral.
 */
export interface ContactInfo {
  email: string;
  /** Display form, e.g. "+1 646 247 7994". */
  phoneDisplay: string;
  /** E.164 form for tel: links. */
  phoneE164: string;
  /** wa.me deep link — opens the app on mobile, WhatsApp Web on desktop. */
  whatsappUrl: string;
  /** Public Instagram profile. */
  instagramUrl: string;
}

export const CONTACT: ContactInfo = {
  email: 'Laurareac96@gmail.com',
  phoneDisplay: '+1 646 247 7994',
  phoneE164: '+16462477994',
  whatsappUrl: 'https://wa.me/16462477994',
  instagramUrl: 'https://www.instagram.com/laurarenteria96/?hl=es-la',
};
