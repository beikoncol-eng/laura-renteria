import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Section, Container, Grid } from '@/components/layout';
import { Text } from '@/components/typography';
import { Reveal } from '@/components/ui';
import { ROUTES } from '@/lib/domain';

/**
 * 6. Selected Work — the deck anticipates that cases are published only with
 * client permission and supplies the exact copy for this state. A two-column
 * editorial composition (statement left, note + invitation right) rather than
 * fabricated case cards.
 */
export function FeaturedWork() {
  const t = useTranslations('home.work');
  return (
    <Section>
      <Container>
        <Grid md={12} gap={64} className="items-end">
          <div className="md:col-span-6">
            <Reveal>
              <Text variant="label" as="p" className="mb-[var(--space-24)]">
                {t('eyebrow')}
              </Text>
              <Text as="h2" variant="display-m">
                {t('headline')}
              </Text>
              <Text
                variant="subheading"
                as="p"
                className="text-muted mt-[var(--space-24)] max-w-[28ch]"
              >
                {t('subhead')}
              </Text>
            </Reveal>
          </div>

          <div className="md:col-span-5 md:col-start-8">
            <Reveal delay={0.1}>
              <Text variant="body" className="text-muted">
                {t('placeholder')}
              </Text>
              <Link
                href={ROUTES.contact}
                className="link-underline font-body text-ink mt-[var(--space-32)] inline-block text-[0.95rem]"
              >
                {t('cta')}
              </Link>
            </Reveal>
          </div>
        </Grid>
      </Container>
    </Section>
  );
}
