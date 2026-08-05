import { useTranslations } from 'next-intl';
import { Container, Grid, Stack } from '@/components/layout';
import { Label, Caption } from '@/components/typography';
import { NavLink } from '@/components/navigation';
import { SocialLinks } from './social-links';
import { FOOTER_NAV, SITE } from '@/lib/domain';

/**
 * SiteFooter — editorial, minimal, a quiet ending (Layout doc). Opens with the
 * approved closing line, then four columns (Navigation, Contact, Social, Legal)
 * over the editorial grid, stacking on mobile. `<footer>` landmark.
 */
export function SiteFooter() {
  const tNav = useTranslations('nav');
  const tFooter = useTranslations('footer');
  const tContact = useTranslations('contact');
  const tA11y = useTranslations('a11y');
  const year = new Date().getFullYear();

  return (
    <footer
      aria-label={tA11y('footerNavigation')}
      className="border-line border-t pt-[var(--space-120)] pb-[var(--space-96)] md:pt-[var(--space-240)] md:pb-[var(--space-160)]"
    >
      <Container>
        <p className="font-display tracking-display text-ink mb-[var(--space-160)] max-w-[20ch] text-[clamp(2rem,4vw,3.25rem)] leading-[1.1] text-balance">
          {tFooter('closingLine')}
        </p>

        <Grid cols={1} md={4} gap={80}>
          {/* Navigation */}
          <Stack gap={24} as="nav" aria-label={tA11y('footerNavigation')}>
            <Label as="h2">{tFooter('navigation')}</Label>
            <Stack gap={16} as="ul">
              {FOOTER_NAV.map((item) => (
                <li key={item.key}>
                  <NavLink
                    href={item.href}
                    className="font-body text-[0.9375rem]"
                  >
                    {tNav(item.key)}
                  </NavLink>
                </li>
              ))}
            </Stack>
          </Stack>

          {/* Contact */}
          <Stack gap={24}>
            <Label as="h2">{tFooter('contact')}</Label>
            <Stack gap={8}>
              <a
                href={`mailto:${tContact('email')}`}
                className="link-underline font-body text-ink w-fit text-[0.9375rem]"
              >
                {tContact('email')}
              </a>
              <Caption>{tContact('location')}</Caption>
            </Stack>
          </Stack>

          {/* Social */}
          <Stack gap={24}>
            <Label as="h2">{tFooter('social')}</Label>
            <SocialLinks className="-ml-2" />
          </Stack>

          {/* Legal */}
          <Stack gap={24}>
            <Label as="h2">{tFooter('legal')}</Label>
            <Caption>
              © {year} {SITE.name}. {tFooter('rights')}.
            </Caption>
          </Stack>
        </Grid>
      </Container>
    </footer>
  );
}
