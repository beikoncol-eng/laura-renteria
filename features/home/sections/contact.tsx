import { useTranslations } from 'next-intl';
import { Section, Container, Grid } from '@/components/layout';
import { Text } from '@/components/typography';
import { Reveal } from '@/components/ui';
import { Input, Textarea } from '@/components/forms';
import { Button } from '@/components/buttons';
import { SocialLinks } from '@/components/footer';

/**
 * 9. Contact — two columns: form left, details right, generous whitespace.
 * Approved copy and real contact details. The qualifying fields and submission
 * (Resend) are a later phase; the button is inert for now.
 */
export function Contact() {
  const t = useTranslations('contact');
  const tForm = useTranslations('contact.form');

  return (
    <Section>
      <Container>
        <Grid md={12} gap={64}>
          <div className="md:col-span-7">
            <Reveal>
              <Text variant="label" as="p" className="mb-[var(--space-32)]">
                {t('eyebrow')}
              </Text>
              <Text as="h2" variant="heading">
                {t('headline')}
              </Text>
              <Text
                variant="body"
                className="text-muted mt-[var(--space-24)] mb-[var(--space-48)] max-w-[52ch]"
              >
                {t('subhead')}
              </Text>

              <form className="flex flex-col gap-[var(--space-32)]" noValidate>
                <div className="grid gap-[var(--space-32)] md:grid-cols-2">
                  <Input
                    label={tForm('name')}
                    name="name"
                    autoComplete="name"
                    placeholder={tForm('namePlaceholder')}
                  />
                  <Input
                    label={tForm('email')}
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder={tForm('emailPlaceholder')}
                  />
                </div>
                <Textarea
                  label={tForm('message')}
                  name="message"
                  placeholder={tForm('messagePlaceholder')}
                />
                <div>
                  {/* Inert placeholder — submission (Resend) wired in a later phase. */}
                  <Button type="button">{tForm('submit')}</Button>
                </div>
              </form>
            </Reveal>
          </div>

          <div className="md:col-span-4 md:col-start-9">
            <Reveal>
              <div className="flex flex-col gap-[var(--space-48)]">
                <Text variant="body" className="text-muted max-w-[36ch]">
                  {t('sideCopy')}
                </Text>
                <div className="flex flex-col gap-[var(--space-8)]">
                  <Text variant="label" as="p">
                    {t('emailLabel')}
                  </Text>
                  <a
                    href={`mailto:${t('email')}`}
                    className="link-underline font-body text-ink w-fit text-[1rem]"
                  >
                    {t('email')}
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
            </Reveal>
          </div>
        </Grid>
      </Container>
    </Section>
  );
}
