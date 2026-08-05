import {
  Hero,
  Manifesto,
  About,
  ServicesOverview,
  EditorialBreak,
  Process,
  FeaturedWork,
  FaqPreview,
  ClosingCta,
  Contact,
} from './sections';

/**
 * Home — composition of the approved Information Architecture, in exact order:
 * Hero → Manifesto → About → Services Overview → Process → Featured Work →
 * FAQ Preview → Closing CTA → Contact. (The Footer is provided by the shell.)
 *
 * Editorial structure only — every section carries its final layout; content is
 * pending as structural placeholders.
 */
export function Home() {
  return (
    <>
      <Hero />
      <Manifesto />
      <About />
      <ServicesOverview />
      <EditorialBreak />
      <Process />
      <FeaturedWork />
      <FaqPreview />
      <ClosingCta />
      <Contact />
    </>
  );
}
