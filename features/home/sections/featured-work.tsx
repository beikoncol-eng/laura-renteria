import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Section, Container } from '@/components/layout';
import { Text } from '@/components/typography';
import { Reveal } from '@/components/ui';
import { ROUTES } from '@/lib/domain';

/**
 * 6. Selected Work — the deck anticipates that cases are published only with
 * client permission, and provides the exact placeholder copy for this state.
 * Rather than fabricate case cards, we use that approved copy and invite a
 * private request. Real cases replace this without a layout change.
 */
export function FeaturedWork() {
  const t = useTranslations('home.work');
  return (
    <Section>
      <Container>
        <div className="max-w-[46rem]">
          <Text variant="label" as="p" className="mb-[var(--space-32)]">
            {t('eyebrow')}
          </Text>
          <Text as="h2" variant="display-m">
            {t('headline')}
          </Text>
          <Text variant="body" className="text-muted mt-[var(--space-24)]">
            {t('subhead')}
          </Text>
        </div>

        <Reveal className="mt-[var(--space-64)] max-w-[60ch]">
          <Text variant="body" className="text-ink">
            {t('placeholder')}
          </Text>
          <Link
            href={ROUTES.contact}
            className="link-underline font-body text-ink mt-[var(--space-40)] inline-block text-[0.95rem]"
          >
            {t('cta')}
          </Link>
        </Reveal>
      </Container>
    </Section>
  );
}
