import { getServiceArea, type ServiceSlug } from '@/lib/domain';
import { SERVICE_MEDIA } from './service-media';
import {
  ServiceHero,
  ServiceOverview,
  ServiceWhoItsFor,
  ServiceCapabilities,
  ServiceProcess,
  ServiceFaq,
  ServiceCta,
} from './sections';

/**
 * ServicePage — the reusable consulting-area template, driven by the domain and
 * the approved (reorganized) Copy Deck.
 *
 * Section order: Hero → Overview → Who it's for → What's included (capabilities)
 * → Process → FAQ → CTA. Photography comes from per-area SERVICE_MEDIA (Creative
 * Direction only for now; Digital Marketing and Image Consulting fall back to
 * placeholders until their working-lifestyle frames exist). The Footer is
 * provided by the shell.
 */
export function ServicePage({ slug }: { slug: ServiceSlug }) {
  const area = getServiceArea(slug);
  const media = SERVICE_MEDIA[slug];

  return (
    <>
      <ServiceHero slug={slug} hero={media?.hero} />
      <ServiceOverview slug={slug} support={media?.support} />
      <ServiceWhoItsFor slug={slug} />
      <ServiceCapabilities capabilities={area.capabilities} />
      <ServiceProcess craft={media?.craft} />
      <ServiceFaq />
      <ServiceCta />
    </>
  );
}
