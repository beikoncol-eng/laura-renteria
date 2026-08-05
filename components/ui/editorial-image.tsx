import Image from 'next/image';
import type { MediaAsset } from '@/lib/media';
import { cn } from '@/lib/utils';

/**
 * EditorialImage — the single way photography enters the layout.
 *
 * Fills its (positioned, sized) parent with `object-cover`, so the parent
 * controls aspect/crop — never the image. next/image handles responsive
 * AVIF/WebP + blur-free sizing. Respect the photography: parents should use
 * generous, editorial aspect ratios and avoid aggressive crops.
 */
export interface EditorialImageProps {
  asset: MediaAsset;
  /** Responsive sizes hint, e.g. '(max-width: 768px) 100vw, 50vw'. */
  sizes: string;
  /** Set on the LCP image (hero) only. */
  priority?: boolean;
  className?: string;
}

export function EditorialImage({
  asset,
  sizes,
  priority = false,
  className,
}: EditorialImageProps) {
  return (
    <Image
      src={asset.src}
      alt={asset.alt}
      fill
      sizes={sizes}
      priority={priority}
      className={cn('object-cover', className)}
    />
  );
}
