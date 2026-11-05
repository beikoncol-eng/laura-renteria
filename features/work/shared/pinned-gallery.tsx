'use client';

import Image from 'next/image';
import { useLayoutEffect, useRef, useState } from 'react';
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'framer-motion';
import type { MediaAsset } from '@/lib/media';
import type { CaseTheme } from './theme';

/**
 * Pinned gallery — a horizontal strip driven by vertical scroll: the section
 * pins and the frames slide past. Card width and frame ratio adapt to the
 * material (wide mockups, portrait photographs). Under reduced motion it falls
 * back to a natively scrollable row.
 */
export function PinnedGallery({
  theme,
  title,
  items,
  ratio,
  cardClassName = 'w-[82vw] md:w-[54vw]',
}: {
  theme: CaseTheme;
  title: string;
  items: { asset: MediaAsset; caption: string }[];
  /** CSS aspect-ratio of every frame, e.g. '1920 / 984' or '3 / 4'. */
  ratio: string;
  cardClassName?: string;
}) {
  const ref = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const [distance, setDistance] = useState(0);

  useLayoutEffect(() => {
    const measure = () => {
      if (!track.current) return;
      setDistance(Math.max(0, track.current.scrollWidth - window.innerWidth));
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (track.current) ro.observe(track.current);
    window.addEventListener('resize', measure);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', measure);
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  });
  const x = useTransform(scrollYProgress, [0.05, 0.95], [0, -distance]);

  return (
    <section
      ref={ref}
      className="relative"
      style={{
        height: reduce ? 'auto' : `calc(100svh + ${distance}px)`,
        backgroundColor: theme.bg,
      }}
    >
      <div
        className={
          reduce
            ? 'py-[var(--space-96)]'
            : 'sticky top-0 flex h-[100svh] flex-col justify-center overflow-hidden'
        }
      >
        <h2
          className="px-[var(--gutter-mobile)] pb-[var(--space-32)] text-[clamp(2.25rem,6vw,5.5rem)] leading-[0.95] md:px-[var(--space-96)]"
          style={{ ...theme.title, color: theme.fg }}
        >
          {title}
        </h2>
        <motion.div
          ref={track}
          className={
            'flex w-max gap-[clamp(1rem,2vw,2rem)] px-[var(--gutter-mobile)] md:px-[var(--space-96)]' +
            (reduce ? ' overflow-x-auto' : '')
          }
          style={reduce ? undefined : { x }}
        >
          {items.map(({ asset, caption }, i) => (
            <figure key={asset.src} className={'shrink-0 ' + cardClassName}>
              <div
                className="relative overflow-hidden rounded-[18px]"
                style={{ aspectRatio: ratio }}
              >
                <Image
                  src={asset.src}
                  alt={asset.alt}
                  fill
                  sizes="(max-width: 768px) 82vw, 54vw"
                  className="object-cover"
                />
              </div>
              {caption ? (
                <figcaption
                  className="font-body flex items-baseline gap-[var(--space-16)] pt-[var(--space-16)] text-[0.875rem]"
                  style={{ color: theme.fg }}
                >
                  <span
                    style={{ ...theme.title, color: theme.accent }}
                    className="text-[1.25rem]"
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  {caption}
                </figcaption>
              ) : null}
            </figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
