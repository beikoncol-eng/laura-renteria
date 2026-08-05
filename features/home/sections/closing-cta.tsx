import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Section, Container, Grid } from '@/components/layout';
import { Reveal, EditorialImage } from '@/components/ui';
import { buttonClassName } from '@/components/buttons';
import { ROUTES } from '@/lib/domain';
import { MEDIA } from '@/lib/media';

/**
 * 8. Closing CTA — a calm invitation. A large direct-gaze portrait beside a
 * minimal statement, one button, the honest availability line. The gaze meets
 * the reader at the decision moment.
 */
export function ClosingCta() {
  const t = useTranslations('home.closing');
  return (
    <Section background="cream">
      <Container>
        <Grid md={12} gap={64} className="items-center">
          <div className="md:col-span-5">
            <Reveal variant="image">
              <div className="group relative aspect-[3/4] w-full overflow-hidden">
                <EditorialImage
                  asset={MEDIA.closingPortrait}
                  sizes="(max-width: 768px) 100vw, 42vw"
                  position="50% 12%"
                />
              </div>
            </Reveal>
          </div>

          <div className="md:col-span-6 md:col-start-7">
            <Reveal>
              <p className="font-display tracking-display text-ink text-[clamp(2rem,3.5vw,3.25rem)] leading-[1.1] text-balance">
                {t('statement')}
              </p>
              <p className="font-body text-muted mt-[var(--space-32)] max-w-[46ch] leading-[1.7]">
                {t('body')}
              </p>
              <div className="mt-[var(--space-48)]">
                <Link
                  href={ROUTES.contact}
                  className={buttonClassName('primary', 'md')}
                >
                  {t('cta')}
                </Link>
              </div>
              <p className="font-body text-muted mt-[var(--space-24)] text-[0.875rem]">
                {t('microcopy')}
              </p>
            </Reveal>
          </div>
        </Grid>
      </Container>
    </Section>
  );
}
