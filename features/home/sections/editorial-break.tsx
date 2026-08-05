import { Reveal, EditorialImage, ParallaxImage } from '@/components/ui';
import { MEDIA } from '@/lib/media';

/**
 * Editorial Break — a full-bleed photographic pause between the type-heavy
 * Services and Process sections. Masked reveal on entry, subtle scroll parallax,
 * framed on the subject. Pure image, edge to edge.
 */
export function EditorialBreak() {
  return (
    <Reveal variant="image">
      <section className="relative h-[68vh] max-h-[820px] min-h-[420px] w-full overflow-hidden">
        <ParallaxImage className="absolute inset-0">
          <EditorialImage
            asset={MEDIA.editorialBreak}
            sizes="100vw"
            position="50% 26%"
            zoom={false}
          />
        </ParallaxImage>
      </section>
    </Reveal>
  );
}
