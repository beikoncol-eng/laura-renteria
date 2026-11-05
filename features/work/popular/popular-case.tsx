import { useTranslations } from 'next-intl';
import type { CaseStudy } from '@/lib/domain';
import { CASE_MEDIA } from '../case-media';
import { CaseIntro, type CaseIntroCopy } from '../shared/case-intro';
import { DeviceShowcase } from '../shared/device-showcase';
import { PinnedGallery } from '../shared/pinned-gallery';
import { Deliverables } from '../shared/deliverables';
import type { CaseTheme } from '../shared/theme';
import { anton, ASSETS, POP } from './brand';
import { PopularHero } from './hero';
import { BrandStory, type BrandStep } from './brand-story';
import { PhraseMarquee } from './phrase-marquee';
import { FloatingInk } from './floating-ink';
import { BrandFilm } from './brand-film';

/**
 * POPULAR by El Conuco — told in its own brand: animated logo hero → intro →
 * what we made (brand + web) → brand film (the identity built in an editor) →
 * pinned brand story (logo, colour, illustration) → kinetic phrases →
 * horizontal applications gallery → the live website running in devices.
 */
interface PopularCopy extends CaseIntroCopy {
  hero: { eyebrow: string; scroll: string };
  brand: { label: string; steps: BrandStep[] };
  applications: { title: string; captions: string[] };
  web: { label: string; title: string; body: string; points: string[] };
  scope: { title: string; columns: { title: string; items: string[] }[] };
  film: { label: string; title: string };
}

const title = { fontFamily: 'var(--font-popular)' };

const GALLERY: CaseTheme = {
  bg: POP.negro,
  fg: POP.crema,
  accent: POP.amarillo,
  onAccent: POP.negro,
  rule: 'rgba(246,235,215,0.18)',
  chrome: {
    bar: '#E9DEC8',
    dots: [POP.rojo, POP.amarillo, POP.verde],
    text: 'rgba(26,26,26,0.6)',
  },
  title,
};
const WEB: CaseTheme = { ...GALLERY, bg: POP.azul };
const SCOPE: CaseTheme = {
  ...GALLERY,
  bg: POP.rojo,
  accent: POP.amarillo,
  rule: 'rgba(246,235,215,0.3)',
};

export function PopularCase({ study }: { study: CaseStudy }) {
  const t = useTranslations('work');
  const copy = t.raw(`cases.${study.slug}`) as PopularCopy;
  const media = CASE_MEDIA[study.slug];
  if (!media) return null;

  return (
    <div className={anton.variable}>
      <PopularHero eyebrow={copy.hero.eyebrow} scrollLabel={copy.hero.scroll} />
      <CaseIntro study={study} copy={copy} />
      <Deliverables
        theme={SCOPE}
        title={copy.scope.title}
        columns={copy.scope.columns}
      />
      <BrandFilm label={copy.film.label} title={copy.film.title} />
      <BrandStory label={copy.brand.label} steps={copy.brand.steps} />
      <PhraseMarquee />
      <PinnedGallery
        theme={GALLERY}
        title={copy.applications.title}
        ratio="1920 / 984"
        items={media.gallery.map((asset, i) => ({
          asset,
          caption: copy.applications.captions[i] ?? '',
        }))}
      />
      <DeviceShowcase
        theme={WEB}
        name="POPULAR"
        label={copy.web.label}
        title={copy.web.title}
        body={copy.web.body}
        points={copy.web.points}
        visit={t('labels.visit')}
        url={study.liveUrl}
        urlLabel="popular-by-el-conuco.vercel.app"
        videos={{ desktop: ASSETS.videoDesktop, mobile: ASSETS.videoMobile }}
        decoration={<FloatingInk />}
      />
    </div>
  );
}
