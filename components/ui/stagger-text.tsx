'use client';

import { SplitText, type SplitTextProps } from './split-text';

/**
 * StaggerText — the word-stagger register of {@link SplitText}, kept as a named
 * primitive because word cascade is the site's default headline entrance. New
 * code can use SplitText directly for line/char reveals; both share one engine.
 */
export type StaggerTextProps = Omit<SplitTextProps, 'by'>;

export function StaggerText(props: StaggerTextProps) {
  return <SplitText by="word" {...props} />;
}
