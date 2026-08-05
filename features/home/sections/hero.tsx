import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Text } from '@/components/typography';
import { Reveal, EditorialImage } from '@/components/ui';
import { buttonClassName } from '@/components/buttons';
import { ROUTES } from '@/lib/domain';
import { MEDIA } from '@/lib/media';

/**
 * 1. Hero — asymmetric editorial split: a typographic column (paper) beside a
 * full-height portrait. Copy from the approved deck; one text block only, per
 * the art direction. The portrait's gaze leads inward, toward the words.
 */
export function Hero() {
  const t = useTranslations('home.hero');
  return (
    <section className="relative w-full">
      <div className="grid min-h-[100dvh] grid-cols-1 md:grid-cols-2">
        <div className="relative order-1 min-h-[58vh] md:order-2 md:min-h-[100dvh]">
          <EditorialImage
            asset={MEDIA.heroPortrait}
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>

        <div className="order-2 flex flex-col justify-end px-[var(--gutter-mobile)] pt-[var(--space-48)] pb-[var(--space-64)] md:order-1 md:justify-center md:px-[var(--space-96)] md:pt-0 md:pb-0">
          <div className="max-w-[38rem]">
            <Reveal>
              <Text as="h1" variant="display-l">
                {t('headline')}
              </Text>
            </Reveal>
            <Reveal delay={0.12} className="mt-[var(--space-32)]">
              <Text variant="body" className="text-muted max-w-[46ch]">
                {t('subhead')}
              </Text>
            </Reveal>
            <Reveal delay={0.24} className="mt-[var(--space-48)]">
              <div className="flex flex-wrap items-center gap-[var(--space-24)]">
                <Link
                  href={ROUTES.contact}
                  className={buttonClassName('primary', 'md')}
                >
                  {t('primaryCta')}
                </Link>
                <Link
                  href={ROUTES.services}
                  className={buttonClassName('secondary', 'md')}
                >
                  {t('secondaryCta')}
                </Link>
              </div>
              <p className="font-body text-muted mt-[var(--space-24)] text-[0.875rem]">
                {t('microcopy')}
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
