import { notFound } from 'next/navigation';

/**
 * Catch-all under [locale] so that any unmatched localized path (e.g.
 * /en/does-not-exist) renders the branded, localized `not-found.tsx` boundary
 * instead of Next's default 404. Real routes are more specific and win.
 */
export default function CatchAll() {
  notFound();
}
