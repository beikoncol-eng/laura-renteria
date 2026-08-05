import {
  Hero,
  Manifesto,
  About,
  EditorialLine,
  ServicesOverview,
  EditorialBreak,
  Process,
  FeaturedWork,
  FaqPreview,
  ClosingCta,
  Contact,
} from './sections';

/**
 * Home — one continuous editorial story, not a stack of modules. The rhythm
 * deliberately alternates register so no two consecutive sections feel alike:
 *
 *   Hero (cover) → Manifesto (oversized type) → About (split) →
 *   Editorial line (breath) → Services (index) → Editorial break (full-bleed
 *   photo) → Process (flipped split) → Selected Work (two-column) →
 *   Editorial line (breath) → FAQ → Closing (split) → Contact.
 *
 * The Footer is provided by the shell.
 */
export function Home() {
  return (
    <>
      <Hero />
      <Manifesto />
      <About />
      <EditorialLine which="a" />
      <ServicesOverview />
      <EditorialBreak />
      <Process />
      <FeaturedWork />
      <EditorialLine which="b" align="right" />
      <FaqPreview />
      <ClosingCta />
      <Contact />
    </>
  );
}
