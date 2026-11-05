import type { ReactNode } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Section, Container } from '@/components/layout';
import { Reveal, StaggerText } from '@/components/ui';
import { servicePath, type CaseStudy } from '@/lib/domain';
import { humanizeSlug } from '@/lib/utils';

/**
 * Case intro — the one moment in Laura's own voice between the client's
 * brand worlds: name, one line, one paragraph and the facts. One screen.
 */
export interface CaseIntroCopy {
  name: string;
  tagline: string;
  client: string;
  location: string;
  intro: string;
}

export function CaseIntro({
  study,
  copy,
}: {
  study: CaseStudy;
  copy: CaseIntroCopy;
}) {
  const t = useTranslations('work.labels');
  const facts: [string, ReactNode][] = [
    [t('client'), copy.client],
    [t('location'), copy.location],
    [
      t('disciplines'),
      study.services.map((slug, i) => (
        <span key={slug}>
          {i > 0 ? ' · ' : null}
          <Link href={servicePath(slug)} className="link-underline">
            {humanizeSlug(slug)}
          </Link>
        </span>
      )),
    ],
    [t('year'), study.year],
  ];
  return (
    <Section spacing="compact">
      <Container>
        <div className="grid grid-cols-1 gap-[var(--space-48)] md:grid-cols-12">
          <div className="md:col-span-6">
            <Reveal>
              <p className="font-body tracking-label text-muted pb-[var(--space-24)] text-[0.75rem] uppercase">
                {t('eyebrow')}&nbsp;&nbsp;·&nbsp;&nbsp;{study.year}
              </p>
            </Reveal>
            <StaggerText
              as="h1"
              text={copy.name}
              className="font-display tracking-display text-ink text-[clamp(2.5rem,6vw,5rem)] leading-[1.0]"
            />
          </div>
          <div className="md:col-span-5 md:col-start-8 md:self-end">
            <Reveal delay={0.1}>
              <p className="font-display text-ink text-[clamp(1.25rem,2vw,1.75rem)] leading-[1.3]">
                {copy.tagline}
              </p>
              <p className="font-body text-muted pt-[var(--space-24)] text-[0.9375rem] leading-[1.7]">
                {copy.intro}
              </p>
            </Reveal>
          </div>
        </div>
        <Reveal delay={0.15} className="pt-[var(--space-64)]">
          <dl className="border-line grid grid-cols-2 gap-y-[var(--space-24)] border-t pt-[var(--space-24)] md:grid-cols-4">
            {facts.map(([label, value]) => (
              <div key={label}>
                <dt className="font-body tracking-label text-muted pb-[var(--space-8)] text-[0.7rem] uppercase">
                  {label}
                </dt>
                <dd className="text-ink text-[0.9375rem]">{value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </Container>
    </Section>
  );
}
