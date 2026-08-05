import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Section, Container } from '@/components/layout';
import { Reveal } from '@/components/ui';
import { buttonClassName } from '@/components/buttons';
import { ROUTES } from '@/lib/domain';

/**
 * CTA — a calm close, using the deck's approved services call-to-action.
 */
export function ServiceCta() {
  const t = useTranslations('services.cta');
  return (
    <Section background="cream">
      <Container width="narrow" className="text-center">
        <Reveal>
          <p className="font-display tracking-display text-ink text-[2rem] leading-[1.15] text-balance md:text-[3rem]">
            {t('statement')}
          </p>
          <p className="font-body text-muted mx-auto mt-[var(--space-24)] max-w-[46ch] leading-[1.7]">
            {t('body')}
          </p>
          <div className="mt-[var(--space-48)]">
            <Link
              href={ROUTES.contact}
              className={buttonClassName('primary', 'md')}
            >
              {t('button')}
            </Link>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
