import { useTranslations } from 'next-intl';
import { Section, Container, Grid } from '@/components/layout';
import { Text } from '@/components/typography';
import { Reveal } from '@/components/ui';
import { ContactForm } from '@/components/forms';
import { SocialLinks } from '@/components/footer';
import { CONTACT } from '@/lib/domain';

/**
 * 9. Contact — elegant and minimal. Shared ContactForm left, real contact
 * details right, with generous spacing throughout. The form composes a
 * pre-filled email (mailto) until a transactional backend is wired.
 */
export function Contact() {
  const t = useTranslations('contact');

  return (
    <Section>
      <Container>
        <Grid md={12} gap={96}>
          <div className="md:col-span-7">
            <Reveal>
              <Text variant="label" as="p" className="mb-[var(--space-24)]">
                {t('eyebrow')}
              </Text>
              <Text
                as="h2"
                variant="display-m"
                className="mb-[var(--space-64)]"
              >
                {t('headline')}
              </Text>
            </Reveal>
            <ContactForm variant="box" />
          </div>

          <div className="md:col-span-4 md:col-start-9">
            <Reveal delay={0.1}>
              <div className="flex flex-col gap-[var(--space-64)]">
                <Text variant="body" className="text-ink max-w-[34ch]">
                  {t('subhead')} {t('sideCopy')}
                </Text>
                <div className="flex flex-col gap-[var(--space-48)]">
                  <div className="flex flex-col gap-[var(--space-8)]">
                    <Text variant="label" as="p">
                      {t('emailLabel')}
                    </Text>
                    <a
                      href={`mailto:${CONTACT.email}`}
                      className="link-underline font-display tracking-display text-ink w-fit text-[1.25rem]"
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
                      className="link-underline font-body text-ink w-fit"
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
