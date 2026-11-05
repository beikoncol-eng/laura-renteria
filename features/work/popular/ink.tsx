import type { CSSProperties } from 'react';
import { cn } from '@/lib/utils';
import { inkSrc, type InkName } from './brand';

/**
 * Ink — one of the client's illustrations, painted in any brand colour. The
 * artwork is an alpha mask, so the same drawing works as cream on red, red on
 * cream, etc. (manual rule 04.4). Decorative: hidden from assistive tech.
 */
export function Ink({
  name,
  color,
  className,
  style,
}: {
  name: InkName;
  color: string;
  className?: string;
  style?: CSSProperties;
}) {
  const mask = `url(${inkSrc(name)})`;
  return (
    <span
      aria-hidden
      className={cn('block', className)}
      style={{
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
