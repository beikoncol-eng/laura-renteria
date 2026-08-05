/**
 * Contact information — SHAPE ONLY.
 *
 * Values are real contact data owned by the CMS (global settings). They are
 * intentionally `null` here (pending), never invented. Consumers should treat
 * null as "not yet available" and render a structural placeholder.
 */
export interface ContactInfo {
  email: string | null;
  phone: string | null;
  /** Human-readable location, e.g. a city pairing. */
  location: string | null;
}

export const CONTACT: ContactInfo = {
  email: null,
  phone: null,
  location: null,
};
