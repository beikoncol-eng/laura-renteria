import { Instrument_Serif, Inter } from 'next/font/google';

/**
 * Font strategy (Technical Implementation + Design System docs).
 *
 * Abstraction contract:
 *   - Components NEVER reference a concrete typeface. They consume the
 *     semantic families `--font-display` / `--font-body` (see tokens.css),
 *     which resolve through the neutral CSS variables `--font-serif` /
 *     `--font-sans` exposed here.
 *   - To ship the licensed faces later (Canela, Söhne), swap the loaders
 *     below for `next/font/local` pointing at `public/assets/fonts`, keeping
 *     the same `variable` names. No component changes required.
 *
 * These Google faces are TEMPORARY development fallbacks only:
 *   - Instrument Serif  → editorial display (stand-in for Canela)
 *   - Inter             → neutral grotesk body (stand-in for Söhne)
 */
export const fontDisplay = Instrument_Serif({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-serif',
  weight: '400',
  style: ['normal', 'italic'],
});

export const fontBody = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

/** Combined class string applied once on <html> to expose both variables. */
export const fontVariables = `${fontDisplay.variable} ${fontBody.variable}`;
