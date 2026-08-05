import { NextResponse, type NextRequest } from 'next/server';
import createMiddleware from 'next-intl/middleware';
import { routing, isValidLocale } from '@/i18n/routing';

const intlMiddleware = createMiddleware(routing);

/**
 * Locale handling.
 *
 * The ONLY automatic language behavior:
 *   - The Accept-Language header is never consulted (routing.localeDetection
 *     is false, and the root is handled explicitly below).
 *   - Visiting `/` redirects to the language stored in the NEXT_LOCALE cookie
 *     (written by next-intl as the visitor browses locale-prefixed routes).
 *   - With no cookie, `/` defaults to English (`/en`).
 *
 * All other routes are delegated to the next-intl middleware.
 */
export default function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === '/') {
    const cookieLocale = request.cookies.get('NEXT_LOCALE')?.value;
    const locale = isValidLocale(cookieLocale)
      ? cookieLocale
      : routing.defaultLocale;
    return NextResponse.redirect(new URL(`/${locale}`, request.url));
  }

  return intlMiddleware(request);
}

export const config = {
  /**
   * Match all pathnames except:
   * - /api, /trpc  (API routes)
   * - /_next, /_vercel (framework internals)
   * - /studio (Sanity Studio, mounted later)
   * - any path containing a dot (static assets)
   */
  matcher: ['/((?!api|trpc|_next|_vercel|studio|.*\\..*).*)'],
};
