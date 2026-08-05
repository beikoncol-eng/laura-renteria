import { useTranslations } from 'next-intl';
import { Container, Grid, Stack, Divider } from '@/components/layout';
import { Label, Caption } from '@/components/typography';
import { NavLink } from '@/components/navigation';
import { SocialLinks } from './social-links';
import { MAIN_NAV } from '@/lib/navigation';
import { SITE } from '@/lib/site';

/**
 * SiteFooter — editorial, minimal, a quiet ending (Layout doc).
 *
 * Four columns (Navigation, Contact, Social, Legal) over the editorial grid,
 * stacking on mobile. Contact details are a structural placeholder pending the
 * CMS. Nothing decorative. `<footer>` landmark with an accessible label.
 */
export function SiteFooter() {
  const tNav = useTranslations('nav');
  const tFooter = useTranslations('footer');
  const tA11y = useTranslations('a11y');
  const year = new Date().getFullYear();

  return (
    <footer
      aria-label={tA11y('footerNavigation')}
      className="border-line border-t pt-[var(--space-96)] pb-[var(--space-64)] md:pt-[var(--space-160)]"
    >
      <Container>
        <Grid cols={1} md={4} gap={48}>
          {/* Navigation */}
          <Stack gap={24} as="nav" aria-label={tA11y('footerNavigation')}>
            <Label as="h2">{tFooter('navigation')}</Label>
            <Stack gap={16} as="ul">
              {MAIN_NAV.map((item) => (
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
            <Caption>{tFooter('contactPending')}</Caption>
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

        <Divider className="mt-[var(--space-80)]" />
      </Container>
    </footer>
  );
}
