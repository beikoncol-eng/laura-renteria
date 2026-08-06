import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import {
  Reveal,
  StaggerText,
  EditorialImage,
  ParallaxImage,
  Magnetic,
} from '@/components/ui';
import { buttonClassName } from '@/components/buttons';
import { ROUTES } from '@/lib/domain';
import { MEDIA } from '@/lib/media';

/**
 * 1. Hero — the opening spread. A calm typographic column on the left, a full
 * portrait on the right; type never sits over the photograph. The headline sets
 * itself word by word; the paragraph and actions follow. One strong primary
 * (magnetic), one light secondary. The portrait keeps the whole head in view and
 * drifts a touch under scroll, so the page feels alive from the first frame.
 */
export function Hero() {
  const t = useTranslations('home.hero');
  return (
    <section className="relative w-full">
      <div className="grid min-h-[100dvh] grid-cols-1 md:grid-cols-12">
        {/* Type */}
        <div className="order-2 flex flex-col justify-center px-[var(--gutter-mobile)] py-[var(--space-96)] md:order-1 md:col-span-6 md:py-0 md:pr-[var(--space-80)] md:pl-[var(--space-120)]">
          <div className="max-w-[34rem]">
            <StaggerText
              as="h1"
              text={t('headline')}
              className="font-display tracking-display text-ink text-[clamp(2.75rem,5vw,5rem)] leading-[1.04]"
            />
            <Reveal blur delay={0.35} className="mt-[var(--space-64)]">
              <p className="font-body text-muted max-w-[42ch] text-[1.0625rem] leading-[1.65] md:text-[1.1875rem]">
                {t('subhead')}
              </p>
            </Reveal>
            <Reveal delay={0.5} className="mt-[var(--space-80)]">
              <div className="flex flex-wrap items-center gap-[var(--space-48)]">
                <Magnetic className="inline-block">
                  <Link
                    href={ROUTES.contact}
                    className={buttonClassName('primary', 'md')}
                  >
                    {t('primaryCta')}
                  </Link>
                </Magnetic>
                <Link
                  href={ROUTES.services}
                  className={buttonClassName('text')}
                >
                  {t('secondaryCta')}
                </Link>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Portrait — reveals independently of the type, with its own mask. */}
        <div className="group relative order-1 min-h-[68vh] overflow-hidden md:order-2 md:col-span-6 md:min-h-[100dvh]">
          <Reveal variant="image" delay={0.15} className="h-full w-full">
            <ParallaxImage className="h-full w-full">
              <EditorialImage
                asset={MEDIA.heroPortrait}
                sizes="(max-width: 768px) 100vw, 50vw"
                position="50% 10%"
                priority
              />
            </ParallaxImage>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
