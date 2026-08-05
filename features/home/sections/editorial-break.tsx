import { EditorialImage } from '@/components/ui';
import { MEDIA } from '@/lib/media';

/**
 * Editorial Break — a full-bleed photographic pause. Pure image, no words:
 * photography interrupts the reading and resets rhythm between the type-heavy
 * Services and Process sections. Uses the one landscape frame, which suits an
 * edge-to-edge band without an aggressive crop.
 */
export function EditorialBreak() {
  return (
    <section className="relative h-[70vh] max-h-[820px] min-h-[420px] w-full overflow-hidden">
      <EditorialImage asset={MEDIA.editorialBreak} sizes="100vw" />
    </section>
  );
}
