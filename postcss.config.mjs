/**
 * Tailwind CSS v4 uses the dedicated PostCSS plugin package.
 * Never register the bare `tailwindcss` plugin here in v4.
 */
const config = {
  plugins: {
    '@tailwindcss/postcss': {},
  },
};

export default config;
