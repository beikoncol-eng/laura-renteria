import { useTranslations } from 'next-intl';
import { Container } from '@/components/layout';

/**
 * Loading state — reassuring, not entertaining (Motion doc). Shown only when a
 * navigation genuinely suspends; static pages resolve instantly.
 */
export default function Loading() {
  const t = useTranslations();
  return (
    <main className="flex min-h-[60dvh] items-center">
      <Container width="narrow">
        <p className="font-body tracking-label text-muted text-[0.9375rem] uppercase">
          {t('loading')}
        </p>
      </Container>
    </main>
  );
}
