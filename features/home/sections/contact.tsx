import { useTranslations } from 'next-intl';
import { Section, Container, Grid } from '@/components/layout';
import { Text } from '@/components/typography';
import { Reveal } from '@/components/ui';
import { Input, Textarea } from '@/components/forms';
import { Button } from '@/components/buttons';
import { SocialLinks } from '@/components/footer';

/**
 * 9. Contact — elegant and minimal. Form left, details right, with generous
 * spacing throughout. Submission (Resend) is a later phase; the button is inert.
 */
export function Contact() {
  const t = useTranslations('contact');
  const tForm = useTranslations('contact.form');

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

              <form className="flex flex-col gap-[var(--space-40)]" noValidate>
                <div className="grid gap-[var(--space-40)] md:grid-cols-2">
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
                <div className="pt-[var(--space-16)]">
                  {/* Inert placeholder — submission (Resend) wired in a later phase. */}
                  <Button type="button">{tForm('submit')}</Button>
                </div>
              </form>
            </Reveal>
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
                      href={`mailto:${t('email')}`}
                      className="link-underline font-display tracking-display text-ink w-fit text-[1.25rem]"
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
              </div>
            </Reveal>
          </div>
        </Grid>
      </Container>
    </Section>
  );
}
