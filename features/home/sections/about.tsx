import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Section, Container, Grid } from '@/components/layout';
import { Text } from '@/components/typography';
import { Reveal, EditorialImage } from '@/components/ui';
import { ROUTES } from '@/lib/domain';
import { MEDIA } from '@/lib/media';

/**
 * 3. About — curated, not a blog. Text left; two staggered portraits right
 * (bottoms aligned) so the section reads as a spread. Portraits use the source
 * 3:4 ratio, so the full head is always in frame — no accidental crop.
 */
export function About() {
  const t = useTranslations('home.about');
  return (
    <Section>
      <Container>
        <Grid md={12} gap={80} className="items-center">
          <div className="md:col-span-4">
            <Reveal>
              <Text variant="label" as="p" className="mb-[var(--space-24)]">
                {t('eyebrow')}
              </Text>
              <Text as="h2" variant="heading">
                {t('headline')}
              </Text>
              <div className="mt-[var(--space-40)] flex max-w-[46ch] flex-col gap-[var(--space-24)]">
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
                className="link-underline font-body text-ink mt-[var(--space-48)] inline-block text-[0.95rem]"
              >
                {t('cta')}
              </Link>
            </Reveal>
          </div>

          <div className="md:col-span-7 md:col-start-6">
            <div className="grid grid-cols-1 items-end gap-[var(--space-32)] md:grid-cols-7">
              <Reveal variant="image" className="md:col-span-4">
                <div className="group relative aspect-[3/4] w-full overflow-hidden">
                  <EditorialImage
                    asset={MEDIA.aboutPortrait}
                    sizes="(max-width: 768px) 100vw, 34vw"
                    position="50% 8%"
                  />
                </div>
              </Reveal>
              <Reveal variant="image" delay={0.1} className="md:col-span-3">
                <div className="group relative aspect-[3/4] w-full overflow-hidden">
                  <EditorialImage
                    asset={MEDIA.creativeDirectionSupport}
                    sizes="(max-width: 768px) 100vw, 26vw"
                    position="50% 12%"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </Grid>
      </Container>
    </Section>
  );
}
