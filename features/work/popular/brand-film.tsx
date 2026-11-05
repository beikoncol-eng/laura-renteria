'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { EASE } from '@/lib/motion';
import { POP } from './brand';

/**
 * Brand film — the identity being built inside a vector editor, from the
 * first pen stroke to the exported system. Landscape cut on desktop, vertical
 * cut on phones; muted, looping, and only playing while on screen.
 */
const SRC = '/assets/videos/work/popular-brand';

export function BrandFilm({ label, title }: { label: string; title: string }) {
  const reduce = useReducedMotion();
  // One cut only (no double download): vertical below the md breakpoint.
  const [vertical, setVertical] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)');
    const update = () => setVertical(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);
  return (
    <section
      className="py-[clamp(4.5rem,10vw,8rem)]"
      style={{ backgroundColor: POP.negro }}
    >
      <div className="mx-auto max-w-[1440px] px-[var(--gutter-mobile)] md:px-[var(--space-96)]">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-15%' }}
          transition={{ duration: 0.9, ease: EASE.luxe }}
          className="pb-[var(--space-40)]"
        >
          <p
            className="font-body tracking-label pb-[var(--space-16)] text-[0.75rem] uppercase"
            style={{ color: POP.amarillo }}
          >
            {label}
          </p>
          <h2
            className="text-[clamp(2.5rem,6vw,5.5rem)] leading-[0.95]"
            style={{ fontFamily: 'var(--font-popular)', color: POP.crema }}
          >
            {title}
          </h2>
        </motion.div>
        <motion.div
          initial={
            reduce ? false : { clipPath: 'inset(12% 6% 12% 6% round 24px)' }
          }
          whileInView={{ clipPath: 'inset(0% 0% 0% 0% round 18px)' }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 1.2, ease: EASE.luxe }}
          className="overflow-hidden rounded-[18px] shadow-[0_40px_80px_-30px_rgba(0,0,0,0.8)]"
        >
          <Film
            key={vertical ? 'v' : 'h'}
            src={`${SRC}-${vertical ? '9x16' : '16x9'}`}
            className={
              vertical ? 'aspect-[9/16] w-full' : 'aspect-video w-full'
            }
          />
        </motion.div>
      </div>
    </section>
  );
}

function Film({ src, className }: { src: string; className: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e?.isIntersecting) void v.play().catch(() => {});
        else v.pause();
      },
      { threshold: 0.25 },
    );
    io.observe(v);
    return () => io.disconnect();
  }, []);
  return (
    <video
      ref={ref}
      className={'block object-cover ' + className}
      src={`${src}.mp4`}
      poster={`${src}.jpg`}
      muted
      loop
      playsInline
      preload="metadata"
      aria-label="POPULAR identity being designed in a vector editor, from the first pen stroke to the brand system."
    />
  );
}
