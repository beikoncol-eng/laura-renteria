'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from 'framer-motion';
import { EASE } from '@/lib/motion';
import { AN, ASSETS, LINES, VOICE } from './brand';
import { Monogram } from './monogram';

/**
 * Hero — the opening shot of a film. The artist at work, in warm black and
 * white, lit only where a "lamp" falls: the light follows the pointer (and
 * wanders by itself on touch screens). The monogram unmasks, the name sets in
 * the brand's wide grotesque, the credo arrives in the serif, and a mono HUD
 * runs a timecode — brand, human, machine. On scroll the frame contracts into
 * a card while pinned.
 */
export function AnsiasHero({
  eyebrow,
  scrollLabel,
}: {
  eyebrow: string;
  scrollLabel: string;
}) {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  });
  const frame = useTransform(
    scrollYProgress,
    [0, 0.7],
    reduce
      ? ['inset(0% 0% 0% 0% round 0px)', 'inset(0% 0% 0% 0% round 0px)']
      : ['inset(0% 0% 0% 0% round 0px)', 'inset(7% 5% 7% 5% round 32px)'],
  );
  const zoom = useTransform(
    scrollYProgress,
    [0, 1],
    [1.08, reduce ? 1.08 : 1.22],
  );
  const fade = useTransform(scrollYProgress, [0.35, 0.85], [1, 0]);

  // The lamp: a radial light at (lx, ly) in %, revealing a brighter print of the photograph.
  const lx = useMotionValue(62);
  const ly = useMotionValue(42);
  const lamp = useMotionTemplate`radial-gradient(circle at ${lx}% ${ly}%, #000 0%, rgba(0,0,0,0.85) 14%, transparent 38%)`;
  useEffect(() => {
    if (reduce) return;
    let wander: ReturnType<typeof animate>[] = [];
    const startWander = () => {
      wander = [
        animate(lx, [62, 30, 70, 48, 62], {
          duration: 14,
          repeat: Infinity,
          ease: 'easeInOut',
        }),
        animate(ly, [42, 55, 30, 62, 42], {
          duration: 11,
          repeat: Infinity,
          ease: 'easeInOut',
        }),
      ];
    };
    startWander();
    const move = (e: PointerEvent) => {
      if (e.pointerType !== 'mouse') return;
      wander.forEach((a) => a.stop());
      animate(lx, (e.clientX / window.innerWidth) * 100, {
        duration: 0.6,
        ease: EASE.luxe,
      });
      animate(ly, (e.clientY / window.innerHeight) * 100, {
        duration: 0.6,
        ease: EASE.luxe,
      });
    };
    window.addEventListener('pointermove', move);
    return () => {
      wander.forEach((a) => a.stop());
      window.removeEventListener('pointermove', move);
    };
  }, [lx, ly, reduce]);

  const name = 'Ansias'.split('');
  const credo = LINES.credo.split(' ');

  return (
    <section ref={ref} className="relative h-[170svh]">
      <div className="sticky top-0 h-[100svh] min-h-[560px]">
        <motion.div
          className="absolute inset-0 overflow-hidden"
          style={{ backgroundColor: AN.deep, clipPath: frame }}
        >
          <motion.div className="absolute inset-0" style={{ scale: zoom }}>
            <Image
              src={ASSETS.hero.src}
              alt="Ansias tattooing a client in his studio, in black and white."
              fill
              priority
              sizes="100vw"
              className="object-cover opacity-[0.28] grayscale"
              style={{ objectPosition: '50% 30%' }}
            />
            <motion.div
              aria-hidden
              className="absolute inset-0"
              style={{ WebkitMaskImage: lamp, maskImage: lamp }}
            >
              <Image
                src={ASSETS.hero.src}
                alt=""
                fill
                sizes="100vw"
                className="object-cover grayscale-[0.85] sepia-[0.18]"
                style={{ objectPosition: '50% 30%' }}
              />
            </motion.div>
          </motion.div>
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background: `linear-gradient(90deg, ${AN.deep} 0%, rgba(12,10,8,0.6) 38%, rgba(12,10,8,0) 70%), linear-gradient(0deg, ${AN.deep} 0%, rgba(12,10,8,0) 40%)`,
            }}
          />

          <div className="absolute inset-0 flex flex-col justify-end px-[var(--gutter-mobile)] pb-[clamp(5rem,14vh,9rem)] md:px-[var(--space-96)]">
            <motion.div
              initial={
                reduce ? false : { clipPath: 'inset(0% 0% 100% 0%)', y: -20 }
              }
              animate={{ clipPath: 'inset(0% 0% 0% 0%)', y: 0 }}
              transition={{ duration: 1.4, ease: EASE.luxe, delay: 0.3 }}
              className="w-[clamp(3.5rem,7vw,6rem)] pb-[var(--space-24)]"
            >
              <Monogram color={AN.bone} className="w-full" />
            </motion.div>
            <h2
              className="flex overflow-hidden pb-[0.06em] text-[clamp(4rem,15vw,13.5rem)] leading-[0.82]"
              style={{ ...VOICE.brand, color: AN.bone }}
              aria-label="Ansias"
            >
              {name.map((ch, i) => (
                <motion.span
                  key={i}
                  aria-hidden
                  className="inline-block"
                  initial={reduce ? false : { y: '105%' }}
                  animate={{ y: '0%' }}
                  transition={{
                    duration: 1.1,
                    ease: EASE.luxe,
                    delay: 0.8 + i * 0.06,
                  }}
                >
                  {ch}
                </motion.span>
              ))}
            </h2>
            <p
              className="flex flex-wrap gap-x-[0.3em] pt-[var(--space-24)] text-[clamp(1.25rem,2.6vw,2.25rem)] italic"
              style={{ ...VOICE.human, color: AN.bone }}
            >
              {credo.map((w, i) => (
                <motion.span
                  key={i}
                  className="inline-block"
                  initial={
                    reduce ? false : { opacity: 0, y: 14, filter: 'blur(6px)' }
                  }
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  transition={{
                    duration: 0.9,
                    ease: EASE.luxe,
                    delay: 1.5 + i * 0.07,
                  }}
                >
                  {w}
                </motion.span>
              ))}
            </p>
          </div>

          <Hud
            fade={fade}
            eyebrow={eyebrow}
            scrollLabel={scrollLabel}
            reduce={!!reduce}
          />
        </motion.div>
      </div>
    </section>
  );
}

/** The machine voice: corners of a viewfinder with a running timecode. */
function Hud({
  fade,
  eyebrow,
  scrollLabel,
  reduce,
}: {
  fade: MotionValue<number>;
  eyebrow: string;
  scrollLabel: string;
  reduce: boolean;
}) {
  const [frames, setFrames] = useState(0);
  useEffect(() => {
    if (reduce) return;
    const id = window.setInterval(() => setFrames((f) => f + 1), 1000 / 24);
    return () => window.clearInterval(id);
  }, [reduce]);
  const tc = [
    Math.floor(frames / 86400),
    Math.floor(frames / 1440) % 60,
    Math.floor(frames / 24) % 60,
    frames % 24,
  ]
    .map((n) => String(n).padStart(2, '0'))
    .join(':');
  const label = 'text-[0.6875rem]';
  return (
    <motion.div
      style={{ opacity: fade, color: AN.bone, ...VOICE.machine }}
      className="pointer-events-none absolute inset-0"
    >
      <motion.div
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute inset-x-0 top-[calc(var(--header-h-mobile)+var(--space-16))] flex justify-between px-[var(--gutter-mobile)] md:top-[calc(var(--header-h-desktop)+var(--space-16))] md:px-[var(--space-96)]"
      >
        <span className={label}>Bogotá → New York</span>
        <span className={label + ' flex items-center gap-[var(--space-8)]'}>
          <motion.i
            className="block h-[7px] w-[7px] rounded-full"
            style={{ backgroundColor: AN.vermilion }}
            animate={reduce ? undefined : { opacity: [1, 0.2, 1] }}
            transition={{ duration: 1.2, repeat: Infinity }}
          />
          REC {tc}
        </span>
      </motion.div>
      <div className="absolute inset-x-0 bottom-[var(--space-32)] flex items-end justify-between px-[var(--gutter-mobile)] md:px-[var(--space-96)]">
        <span className={label}>{eyebrow}</span>
        <span className={label + ' hidden md:block'}>
          40.7128° N · 74.0060° W
        </span>
        <span className={label}>{scrollLabel} ↓</span>
      </div>
    </motion.div>
  );
}
