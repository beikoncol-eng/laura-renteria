import type { NextConfig } from 'next';
import { fileURLToPath } from 'node:url';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // Pin the build tracing root to this project (a stray lockfile exists in
  // the user home directory, which would otherwise be inferred as the root).
  outputFileTracingRoot: fileURLToPath(new URL('.', import.meta.url)),
  images: {
    // AVIF/WebP first, per the Technical Implementation doc.
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        // Sanity CDN — image pipeline is wired in a later phase.
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
};

export default withNextIntl(nextConfig);
