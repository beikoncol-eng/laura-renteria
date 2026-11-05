import type { CSSProperties } from 'react';
import { cn } from '@/lib/utils';
import { ASSETS } from './brand';

/**
 * The Ansias monogram, painted in any colour. The official mark is a black
 * silhouette, so it is used as a CSS mask (the same technique the Ansias site
 * uses): bone on obsidian, ink on paper. Labelled for assistive tech.
 */
export function Monogram({
  color,
  className,
  style,
}: {
  color: string;
  className?: string;
  style?: CSSProperties;
}) {
  const mask = `url(${ASSETS.monogram.src})`;
  return (
    <span
      role="img"
      aria-label="Ansias"
      className={cn('block', className)}
      style={{
        aspectRatio: `${ASSETS.monogram.width} / ${ASSETS.monogram.height}`,
        backgroundColor: color,
        WebkitMaskImage: mask,
        maskImage: mask,
        WebkitMaskSize: 'contain',
        maskSize: 'contain',
        WebkitMaskRepeat: 'no-repeat',
        maskRepeat: 'no-repeat',
        WebkitMaskPosition: 'center',
        maskPosition: 'center',
        ...style,
      }}
    />
  );
}
