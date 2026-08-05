import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Section, Container, Grid } from '@/components/layout';
import { Text } from '@/components/typography';
import { Reveal, EditorialImage } from '@/components/ui';
import { ROUTES } from '@/lib/domain';
import { MEDIA } from '@/lib/media';

/**
 * 3. About (home, short) — asymmetric: text left, a tall editorial portrait
 * right, framed on the face. Builds perspective and trust, not credentials.
 */
export function About() {
  const t = useTranslations('home.about');
  return (
    <Section>
      <Container>
        <Grid md={12} gap={64} className="items-center">
          <div className="md:col-span-5">
            <Reveal>
              <Text variant="label" as="p" className="mb-[var(--space-24)]">
                {t('eyebrow')}
              </Text>
              <Text as="h2" variant="heading">
                {t('headline')}
              </Text>
              <div className="mt-[var(--space-32)] flex max-w-[54ch] flex-col gap-[var(--space-24)]">
                <Text variant="body">{t('lead')}</Text>
                <Text variant="body" className="text-muted">
                  {t('body1')}
                </Text>
                <Text variant="body" className="text-muted">
                  {t('body2')}
                </Text>
                <p className="font-display tracking-display text-ink text-[1.5rem] leading-[1.25]">
                  {t('pull')}
                </p>
                <Text variant="body" className="text-muted">
                  {t('close')}
                </Text>
              </div>
              <Link
                href={ROUTES.about}
                className="link-underline font-body text-ink mt-[var(--space-40)] inline-block text-[0.95rem]"
              >
                {t('cta')}
              </Link>
            </Reveal>
          </div>

          <div className="md:col-span-6 md:col-start-7">
            <Reveal variant="image">
              <div className="group relative aspect-[4/5] w-full overflow-hidden">
                <EditorialImage
                  asset={MEDIA.aboutPortrait}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  position="50% 22%"
                />
              </div>
            </Reveal>
          </div>
        </Grid>
      </Container>
    </Section>
  );
}
