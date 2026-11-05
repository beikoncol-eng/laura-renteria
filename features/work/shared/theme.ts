import type { CSSProperties } from 'react';

/**
 * A case study is told in the client's own brand. The shared case sections
 * (device showcase, pinned gallery) take the client's colours and headline
 * type through this theme instead of hard-coding either brand.
 */
export interface CaseTheme {
  /** Section background. */
  bg: string;
  /** Text on the background. */
  fg: string;
  /** Highlight colour (labels, numbers, the visit button). */
  accent: string;
  /** Text on the accent colour. */
  onAccent: string;
  /** Hairlines on the background. */
  rule: string;
  /** Browser-window chrome: bar colour and its three dots. */
  chrome: { bar: string; dots: [string, string, string]; text: string };
  /** Headline type (font family, weight, tracking, case). */
  title: CSSProperties;
}
