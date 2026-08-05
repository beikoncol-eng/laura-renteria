import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Container } from '@/components/layout';
import { Reveal, EditorialImage, ParallaxImage } from '@/components/ui';
import { buttonClassName } from '@/components/buttons';
import { ROUTES } from '@/lib/domain';
import { MEDIA } from '@/lib/media';

/**
 * 1. Hero — an editorial cover. A single full-bleed portrait owns the viewport,
 * with a subtle scroll parallax and a soft legibility scrim under the type. The
 * navigation overlays it (transparent → solid on scroll, set by PageWrapper).
 * Content sits lower-left; one primary action, one quiet secondary link.
 */
export function Hero() {
  const t = useTranslations('home.hero');
  return (
    <section className="bg-cream relative h-[100dvh] w-full overflow-hidden">
      <ParallaxImage className="absolute inset-0">
        <EditorialImage
          asset={MEDIA.heroPortrait}
          sizes="100vw"
          position="50% 18%"
          zoom={false}
          priority
        />
      </ParallaxImage>

      {/* Legibility scrim — lightens the lower frame so ink type stays crisp. */}
      <div
        aria-hidden
        className="from-paper via-paper/30 absolute inset-x-0 bottom-0 h-[70%] bg-linear-to-t to-transparent"
      />

      <Container className="relative flex h-full flex-col justify-end pb-[var(--space-96)] md:pb-[var(--space-120)]">
        <div className="max-w-[52rem]">
          <Reveal>
            <h1 className="font-display tracking-display text-ink text-[clamp(2.75rem,7vw,6.5rem)] leading-[1.02]">
              {t('headline')}
            </h1>
          </Reveal>
          <Reveal delay={0.12} className="mt-[var(--space-40)]">
            <p className="font-body text-muted max-w-[46ch] text-[1.125rem] leading-[1.6] md:text-[1.25rem]">
              {t('subhead')}
            </p>
          </Reveal>
          <Reveal delay={0.24} className="mt-[var(--space-48)]">
            <div className="flex flex-wrap items-center gap-[var(--space-48)]">
              <Link
                href={ROUTES.contact}
                className={buttonClassName('primary', 'md')}
              >
                {t('primaryCta')}
              </Link>
              <Link href={ROUTES.services} className={buttonClassName('text')}>
                {t('secondaryCta')}
              </Link>
            </div>
          </Reveal>
        </div>

        <span className="font-body tracking-label text-muted absolute right-[var(--gutter-mobile)] bottom-[var(--space-40)] hidden text-[0.75rem] uppercase md:right-[var(--gutter)] md:block">
          {t('scroll')}
        </span>
      </Container>
    </section>
  );
}
