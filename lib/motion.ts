/**
 * Motion tokens — the single source of truth for the site's motion language.
 *
 * Easing curves, durations and stagger cadences live here so every primitive
 * (Reveal, SplitText, Parallax, page transitions, hovers) moves with the same
 * confidence. Tuning a value here retunes the whole site — motion is part of
 * the brand identity, not a per-component decision.
 *
 * Character: long, settled exits (expo-out) that read as calm and premium.
 * Never fast, never bouncy, never decorative.
 */

type Bezier = [number, number, number, number];

/** Easing curves. `luxe` is the house curve — a confident, unhurried settle. */
export const EASE = {
  /** Expo-out: quick commitment, long graceful settle. The default. */
  luxe: [0.16, 1, 0.3, 1] as Bezier,
  /** Symmetric ease for hovers and small reversible state changes. */
  soft: [0.4, 0, 0.2, 1] as Bezier,
} as const;

/** Durations in seconds, from quick state changes to cinematic image reveals. */
export const DURATION = {
  fast: 0.32,
  base: 0.75,
  slow: 0.95,
  image: 1.1,
} as const;

/** Default entry travel (px) — large enough to read as motion, not a flicker. */
export const RISE = 34;

/** Per-unit stagger steps (seconds) — the cadence of cinematic reveals. */
export const STAGGER = {
  char: 0.018,
  word: 0.055,
  line: 0.09,
  list: 0.06,
} as const;

/** Shared whileInView viewport: fire once, a touch before fully on screen. */
export const VIEWPORT_ONCE = {
  once: true,
  margin: '-10% 0px -10% 0px',
} as const;
