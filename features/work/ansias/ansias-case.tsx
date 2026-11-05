import { useTranslations } from 'next-intl';
import type { CaseStudy } from '@/lib/domain';
import { CASE_MEDIA } from '../case-media';
import { CaseIntro, type CaseIntroCopy } from '../shared/case-intro';
import { DeviceShowcase } from '../shared/device-showcase';
import { PinnedGallery } from '../shared/pinned-gallery';
import { Deliverables } from '../shared/deliverables';
import type { CaseTheme } from '../shared/theme';
import { AN, ansiasFonts, ASSETS, STYLES, VOICE } from './brand';
import { AnsiasHero } from './hero';
import { AnsiasStory, type StoryStep } from './story';
import { StylesMarquee } from './styles-marquee';
import { BookingFlow } from './booking-flow';

/**
 * Ansias Tattoo — told as the film his site is: lamp-lit hero → intro →
 * what we made →
 * pinned creative direction (marks, three voices, colour as an event) →
 * kinetic styles → horizontal gallery of the work → the live website and its
 * booking automation.
 */
interface AnsiasCopy extends CaseIntroCopy {
  hero: { eyebrow: string; scroll: string };
  story: { label: string; steps: StoryStep[] };
  gallery: { title: string };
  web: { label: string; title: string; body: string; points: string[] };
  flow: { title: string; steps: string[] };
  scope: { title: string; columns: { title: string; items: string[] }[] };
}

const THEME: CaseTheme = {
  bg: AN.obsidian,
  fg: AN.bone,
  accent: AN.vermilion,
  onAccent: AN.bone,
  rule: 'rgba(237,232,223,0.15)',
  chrome: {
    bar: '#221D18',
    dots: [AN.vermilion, AN.ash, '#4A433C'],
    text: 'rgba(237,232,223,0.6)',
  },
  title: VOICE.brand,
};

/** The style shown under each gallery frame, in the order of CASE_MEDIA. */
const GALLERY_STYLES = [
  STYLES[7],
  STYLES[7],
  STYLES[4],
  STYLES[4],
  STYLES[1],
  STYLES[1],
  STYLES[1],
  STYLES[1],
];

export function AnsiasCase({ study }: { study: CaseStudy }) {
  const t = useTranslations('work');
  const copy = t.raw(`cases.${study.slug}`) as AnsiasCopy;
  const media = CASE_MEDIA[study.slug];
  if (!media) return null;

  return (
    <div className={ansiasFonts}>
      <AnsiasHero eyebrow={copy.hero.eyebrow} scrollLabel={copy.hero.scroll} />
      <CaseIntro study={study} copy={copy} />
      <Deliverables
        theme={{ ...THEME, bg: AN.deep }}
        title={copy.scope.title}
        columns={copy.scope.columns}
      />
      <AnsiasStory label={copy.story.label} steps={copy.story.steps} />
      <StylesMarquee />
      <PinnedGallery
        theme={THEME}
        title={copy.gallery.title}
        ratio="3 / 4"
        cardClassName="w-[66vw] md:w-[26vw]"
        items={media.gallery.map((asset, i) => ({
          asset,
          caption: GALLERY_STYLES[i] ?? '',
        }))}
      />
      <DeviceShowcase
        theme={{ ...THEME, bg: AN.deep }}
        name="Ansias"
        label={copy.web.label}
        title={copy.web.title}
        body={copy.web.body}
        points={copy.web.points}
        visit={t('labels.visit')}
        url={study.liveUrl}
        urlLabel="ansiastattoo.com"
        videos={{ desktop: ASSETS.videoDesktop, mobile: ASSETS.videoMobile }}
      >
        <BookingFlow title={copy.flow.title} steps={copy.flow.steps} />
      </DeviceShowcase>
    </div>
  );
}
