'use client';

import { useTranslations } from 'next-intl';
import { Container } from '@/components/layout';
import { Text } from '@/components/typography';
import { Button } from '@/components/buttons';

/**
 * Localized error boundary (500). Calm, editorial, with a direct email fallback
 * and a retry. Copy from the approved deck.
 */
export default function Error({ reset }: { error: Error; reset: () => void }) {
  const t = useTranslations('error');
  const tContact = useTranslations('contact');
  const email = tContact('email');

  return (
    <main className="flex min-h-[100dvh] items-center">
      <Container width="narrow">
        <Text as="h1" variant="display-m">
          {t('title')}
        </Text>
        <Text
          variant="body"
          className="text-muted mt-[var(--space-24)] max-w-[52ch]"
        >
          {t('body')}{' '}
          <a href={`mailto:${email}`} className="link-underline text-ink">
            {email}
          </a>
          .
        </Text>
        <div className="mt-[var(--space-48)]">
          <Button onClick={() => reset()}>{t('cta')}</Button>
        </div>
      </Container>
    </main>
  );
}
