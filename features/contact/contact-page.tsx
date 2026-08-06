import { useTranslations } from 'next-intl';
import { Section, Container, Grid } from '@/components/layout';
import { Text } from '@/components/typography';
import { Reveal, StaggerText } from '@/components/ui';
import { ContactForm } from '@/components/forms';
import { SocialLinks } from '@/components/footer';
import { CONTACT } from '@/lib/domain';

/**
 * Contact page — the dedicated version of the home contact section, given room
 * to breathe. A word-set headline, the shared ContactForm with premium
 * underline fields, and a stronger right column where the email is the loudest
 * element. The form composes a pre-filled email until a backend is wired.
 */
export function ContactPage() {
  const t = useTranslations('contact');

  return (
    <Section className="pt-[calc(var(--header-h-desktop)+var(--space-64))]">
      <Container>
        <div className="mb-[var(--space-120)] max-w-[24ch]">
          <Reveal>
            <Text variant="label" as="p" className="mb-[var(--space-32)]">
              {t('eyebrow')}
            </Text>
          </Reveal>
          <StaggerText
            as="h1"
            text={t('headline')}
            delay={0.1}
            className="font-display tracking-display text-ink text-[clamp(3rem,8vw,6.5rem)] leading-[0.98]"
          />
        </div>

        <Grid md={12} gap={96} className="items-start">
          {/* Form */}
          <div className="md:col-span-7">
            <ContactForm variant="underline" />
          </div>

          {/* Details */}
          <div className="md:col-span-4 md:col-start-9">
            <Reveal delay={0.1}>
              <div className="flex flex-col gap-[var(--space-64)]">
                <Text variant="body" className="text-muted max-w-[34ch]">
                  {t('subhead')} {t('sideCopy')}
                </Text>
                <div className="flex flex-col gap-[var(--space-48)]">
                  <div className="flex flex-col gap-[var(--space-12)]">
                    <Text variant="label" as="p">
                      {t('emailLabel')}
                    </Text>
                    <a
                      href={`mailto:${CONTACT.email}`}
                      className="link-underline font-display tracking-display text-ink w-fit text-[clamp(1.5rem,2.6vw,2.25rem)] leading-tight break-words"
                    >
                      {CONTACT.email}
                    </a>
                  </div>
                  <div className="flex flex-col gap-[var(--space-8)]">
                    <Text variant="label" as="p">
                      {t('phoneLabel')}
                    </Text>
                    <a
                      href={CONTACT.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-underline font-body text-ink w-fit text-[1.125rem]"
                    >
                      {CONTACT.phoneDisplay}
                    </a>
                  </div>
                  <div className="flex flex-col gap-[var(--space-8)]">
                    <Text variant="label" as="p">
                      {t('locationLabel')}
                    </Text>
                    <Text variant="body">{t('location')}</Text>
                  </div>
                  <div className="flex flex-col gap-[var(--space-16)]">
                    <Text variant="label" as="p">
                      {t('socialLabel')}
                    </Text>
                    <SocialLinks className="-ml-2" />
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </Grid>
      </Container>
    </Section>
  );
}
