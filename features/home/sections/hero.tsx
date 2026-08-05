import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Reveal, EditorialImage, Magnetic } from '@/components/ui';
import { buttonClassName } from '@/components/buttons';
import { ROUTES } from '@/lib/domain';
import { MEDIA } from '@/lib/media';

/**
 * 1. Hero — the opening spread. The left column distributes headline (top),
 * paragraph (middle) and actions (low) across the full height, so nothing feels
 * stacked. The portrait shows the entire head: the source 3:4 frame on mobile
 * (no crop) and a top-anchored fill on desktop. Type never sits over the image.
 */
export function Hero() {
  const t = useTranslations('home.hero');
  return (
    <section className="relative w-full">
      <div className="grid min-h-[100dvh] grid-cols-1 md:grid-cols-12">
        {/* Type */}
        <div className="order-2 flex min-h-[80vh] flex-col justify-between px-[var(--gutter-mobile)] pt-[var(--space-80)] pb-[var(--space-96)] md:order-1 md:col-span-6 md:min-h-[100dvh] md:px-[var(--space-120)] md:pt-[calc(var(--header-h-desktop)+var(--space-80))] md:pb-[var(--space-120)]">
          <Reveal>
            <h1 className="font-display tracking-display text-ink max-w-[15ch] text-[clamp(2.75rem,5vw,5rem)] leading-[1.04]">
              {t('headline')}
            </h1>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="font-body text-muted max-w-[40ch] text-[1.0625rem] leading-[1.7] md:text-[1.1875rem]">
              {t('subhead')}
            </p>
          </Reveal>
          <Reveal delay={0.28}>
            <div className="flex flex-wrap items-center gap-[var(--space-48)]">
              <Magnetic className="inline-block">
                <Link
                  href={ROUTES.contact}
                  className={buttonClassName('primary', 'md')}
                >
                  {t('primaryCta')}
                </Link>
              </Magnetic>
              <Link href={ROUTES.services} className={buttonClassName('text')}>
                {t('secondaryCta')}
              </Link>
            </div>
          </Reveal>
        </div>

        {/* Portrait — full 3:4 frame on mobile (no crop), top-anchored fill on desktop */}
        <div className="group relative order-1 aspect-[3/4] overflow-hidden md:order-2 md:col-span-6 md:aspect-auto md:min-h-[100dvh]">
          <EditorialImage
            asset={MEDIA.heroPortrait}
            sizes="(max-width: 768px) 100vw, 50vw"
            position="50% 6%"
            priority
          />
        </div>
      </div>
    </section>
  );
}
