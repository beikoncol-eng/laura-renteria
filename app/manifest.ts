import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/domain';

/**
 * Web app manifest (served at /manifest.webmanifest, auto-linked by Next).
 * Icons are the LR monogram raster set in /public plus the scalable SVG.
 * Colors use the warm-white brand background.
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
      {
        src: '/android-chrome-192x192.png',
        type: 'image/png',
        sizes: '192x192',
        purpose: 'any',
      },
      {
        src: '/android-chrome-512x512.png',
        type: 'image/png',
        sizes: '512x512',
        purpose: 'any',
      },
      {
        src: '/android-chrome-512x512.png',
        type: 'image/png',
        sizes: '512x512',
        purpose: 'maskable',
      },
      { src: '/icon.svg', type: 'image/svg+xml', sizes: 'any' },
    ],
  };
}
