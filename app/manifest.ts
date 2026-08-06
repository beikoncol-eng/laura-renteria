import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/domain';

/**
 * Web app manifest (served at /manifest.webmanifest, auto-linked by Next).
 * Icons resolve from the LR monogram in app/icon.svg (scalable) and
 * app/apple-icon.png. Colors use the warm-white brand background.
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE.name,
    short_name: 'Laura',
    description:
      'Brand strategist, creative director and image consultant helping companies, founders and professionals build brands that are remembered.',
    start_url: '/',
    display: 'standalone',
    orientation: 'portrait',
    theme_color: '#faf9f6',
    background_color: '#faf9f6',
    icons: [
      { src: '/icon.svg', type: 'image/svg+xml', sizes: 'any', purpose: 'any' },
      { src: '/apple-icon.png', type: 'image/png', sizes: '180x180' },
    ],
  };
}
