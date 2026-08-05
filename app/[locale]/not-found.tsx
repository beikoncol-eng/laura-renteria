import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Container } from '@/components/layout';
import { Text } from '@/components/typography';
import { buttonClassName } from '@/components/buttons';
import { ROUTES } from '@/lib/domain';

/**
 * Localized 404 — large editorial type, one message, a single button. No
 * illustration (Component System doc). Copy from the approved deck.
 */
export default function NotFound() {
  const t = useTranslations('notFound');
  return (
    <main className="flex min-h-[100dvh] items-center">
      <Container width="narrow">
        <Text as="h1" variant="display-m">
          {t('title')}
        </Text>
        <Text
          variant="body"
          className="text-muted mt-[var(--space-24)] max-w-[46ch]"
        >
          {t('body')}
        </Text>
        <div className="mt-[var(--space-48)]">
          <Link href={ROUTES.home} className={buttonClassName('primary', 'md')}>
            {t('cta')}
          </Link>
        </div>
      </Container>
    </main>
  );
}
