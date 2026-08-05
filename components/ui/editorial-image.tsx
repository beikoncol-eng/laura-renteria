import Image from 'next/image';
import type { MediaAsset } from '@/lib/media';
import { cn } from '@/lib/utils';

/**
 * EditorialImage — the single way photography enters the layout.
 *
 * Fills its (positioned, sized) parent with `object-cover`. `position` keeps
 * faces in frame (portraits are usually cropped from the bottom, so default to
 * an upper focal point). When the parent is a `group`, the image gains a slow,
 * refined hover zoom.
 */
export interface EditorialImageProps {
  asset: MediaAsset;
  /** Responsive sizes hint, e.g. '(max-width: 768px) 100vw, 50vw'. */
  sizes: string;
  /** object-position focal point. Defaults to an upper-centre point for faces. */
  position?: string;
  /** Set on the LCP image (hero) only. */
  priority?: boolean;
  /** Enable the subtle hover zoom (requires a `group` ancestor). */
  zoom?: boolean;
  className?: string;
}

export function EditorialImage({
  asset,
  sizes,
  position = '50% 30%',
  priority = false,
  zoom = true,
  className,
}: EditorialImageProps) {
  return (
    <Image
      src={asset.src}
      alt={asset.alt}
      fill
      sizes={sizes}
      priority={priority}
      style={{ objectPosition: position }}
      className={cn(
        'object-cover will-change-transform',
        'transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)]',
        zoom && 'group-hover:scale-[1.04]',
        className,
      )}
    />
  );
}
