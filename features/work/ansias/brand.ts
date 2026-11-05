import { Archivo, Fraunces, Geist_Mono } from 'next/font/google';

/**
 * Ansias Tattoo — the artist's own visual system, used only inside his case
 * study. Colours and type come from the Ansias site (globals.css, Visual
 * Direction): warm obsidian and bone, vermilion as the rare accent, and three
 * typographic "voices" — brand (wide grotesque), human (serif), machine (mono).
 * The marks are the artist's recovered originals, never redrawn.
 */
export const anDisplay = Archivo({
  subsets: ['latin'],
  variable: '--font-ansias-display',
  display: 'swap',
  axes: ['wdth'],
});

export const anSerif = Fraunces({
  subsets: ['latin'],
  variable: '--font-ansias-serif',
  display: 'swap',
  style: ['normal', 'italic'],
  axes: ['opsz'],
});

export const anMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-ansias-mono',
  display: 'swap',
});

export const ansiasFonts = `${anDisplay.variable} ${anSerif.variable} ${anMono.variable}`;

export const AN = {
  obsidian: '#14110E',
  deep: '#0C0A08',
  bone: '#EDE8DF',
  paper: '#F4F1EA',
  vermilion: '#C4442E',
  ash: '#8A8178',
} as const;

/** The three voices, as inline styles. */
export const VOICE = {
  brand: {
    fontFamily: 'var(--font-ansias-display)',
    fontWeight: 300,
    fontStretch: '125%',
    letterSpacing: '-0.03em',
  },
  human: { fontFamily: 'var(--font-ansias-serif)' },
  machine: {
    fontFamily: 'var(--font-ansias-mono)',
    textTransform: 'uppercase',
    letterSpacing: '0.24em',
  },
} as const;

/** The artist's own lines, as they appear on his site (English in every locale). */
export const LINES = {
  credo: 'Years of obsession, made permanent.',
  hand: 'The same hand — Bogotá, then New York.',
  lasting: "Let's make something lasting.",
} as const;

export const STYLES = [
  'Traditional',
  'Blackwork',
  'Neo Traditional',
  'Japanese',
  'Black & Grey',
  'Cyber Sigilism',
  'Fine Line',
  'Backpiece',
] as const;

const DIR = '/assets/images/work/ansias';

export const ASSETS = {
  monogram: { src: `${DIR}/monogram.png`, width: 931, height: 1400 },
  heart: { src: `${DIR}/heart.png`, width: 858, height: 1200 },
  hero: { src: `${DIR}/hero.jpg`, width: 2400, height: 1587 },
  color: { src: `${DIR}/color.jpg`, width: 1200, height: 1600 },
  videoDesktop: '/assets/videos/work/ansias-web-desktop',
  videoMobile: '/assets/videos/work/ansias-web-mobile',
} as const;
