'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from 'framer-motion';
import { EASE } from '@/lib/motion';
import { ASSETS, PHRASES, POP, type InkName } from './brand';
import { Ink } from './ink';

/**
 * Hero — the brand arrives on its own colour. The official logotype unmasks
 * from below, the brand line rises word by word, and cream illustrations
 * float in around it, drifting with the pointer. On scroll the red field
 * contracts into a framed card while pinned and the logo recedes, handing
 * over to the case.
 */
const FLOATERS: {
  name: InkName;
  x: string;
  y: string;
  size: string;
  rotate: number;
  depth: number;
}[] = [
  {
    name: 'camaron',
    x: '8%',
    y: '16%',
    size: 'clamp(4.5rem,11vw,10rem)',
    rotate: -14,
    depth: 1.4,
  },
  {
    name: 'limon',
    x: '80%',
    y: '12%',
    size: 'clamp(3.5rem,8vw,7.5rem)',
    rotate: 12,
    depth: 0.9,
  },
  {
    name: 'tomate',
    x: '86%',
    y: '62%',
    size: 'clamp(4rem,9vw,8.5rem)',
    rotate: -8,
    depth: 1.2,
  },
  {
    name: 'cilantro',
    x: '4%',
    y: '66%',
    size: 'clamp(3.5rem,8vw,7rem)',
    rotate: 18,
    depth: 0.8,
  },
  {
    name: 'aji',
    x: '22%',
    y: '80%',
    size: 'clamp(3rem,6vw,5.5rem)',
    rotate: -24,
    depth: 1.6,
  },
  {
    name: 'coctel',
    x: '68%',
    y: '80%',
    size: 'clamp(3rem,6.5vw,6rem)',
    rotate: 8,
    depth: 1.1,
  },
  {
    name: 'pescado',
    x: '64%',
    y: '6%',
    size: 'clamp(3rem,6vw,5.5rem)',
    rotate: 28,
    depth: 0.7,
  },
];

export function PopularHero({
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
  const logoScale = useTransform(
    scrollYProgress,
    [0, 0.8],
    [1, reduce ? 1 : 0.82],
  );
  const logoY = useTransform(scrollYProgress, [0, 0.8], [0, reduce ? 0 : -60]);
  const fade = useTransform(scrollYProgress, [0.35, 0.85], [1, 0]);

  // Pointer parallax, eased with a spring so the illustrations feel weighty.
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const sx = useSpring(px, { stiffness: 60, damping: 18 });
  const sy = useSpring(py, { stiffness: 60, damping: 18 });
  useEffect(() => {
    if (reduce) return;
    const move = (e: PointerEvent) => {
      px.set(e.clientX / window.innerWidth - 0.5);
      py.set(e.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener('pointermove', move);
    return () => window.removeEventListener('pointermove', move);
  }, [px, py, reduce]);

  const words = PHRASES[0].split(' ');

  return (
    <section ref={ref} className="relative h-[170svh]">
      <div className="sticky top-0 h-[100svh] min-h-[560px]">
        <motion.div
          className="absolute inset-0 overflow-hidden"
          style={{ backgroundColor: POP.rojo, clipPath: frame }}
        >
          {FLOATERS.map((f, i) => (
            <Floater
              key={f.name}
              f={f}
              i={i}
              sx={sx}
              sy={sy}
              progress={scrollYProgress}
              reduce={!!reduce}
            />
          ))}

          <motion.div
            className="absolute inset-0 flex flex-col items-center justify-center px-[var(--gutter-mobile)]"
            style={{ scale: logoScale, y: logoY }}
          >
            <motion.div
              initial={
                reduce ? false : { clipPath: 'inset(100% 0% 0% 0%)', y: 60 }
              }
              animate={{ clipPath: 'inset(0% 0% 0% 0%)', y: 0 }}
              transition={{ duration: 1.3, ease: EASE.luxe, delay: 0.25 }}
              className="w-[min(70vw,540px)]"
            >
              <Image
                src={ASSETS.logoCrema.src}
                width={ASSETS.logoCrema.width}
                height={ASSETS.logoCrema.height}
                alt="POPULAR by El Conuco"
                priority
                sizes="(max-width: 768px) 70vw, 540px"
                className="h-auto w-full"
              />
            </motion.div>
            <p
              className="flex flex-wrap justify-center gap-x-[0.28em] pt-[clamp(1.5rem,4vh,3rem)] text-center text-[clamp(1.5rem,4.2vw,3.5rem)] leading-none"
              style={{ fontFamily: 'var(--font-popular)', color: POP.crema }}
            >
              {words.map((w, i) => (
                <span
                  key={i}
                  className="inline-block overflow-hidden pb-[0.08em]"
                >
                  <motion.span
                    className="inline-block"
                    initial={reduce ? false : { y: '110%' }}
                    animate={{ y: '0%' }}
                    transition={{
                      duration: 0.9,
                      ease: EASE.luxe,
                      delay: 1.1 + i * 0.08,
                    }}
                  >
                    {w}
                  </motion.span>
                </span>
              ))}
            </p>
          </motion.div>

          <motion.div
            style={{ opacity: fade }}
            className="absolute inset-x-0 bottom-0 flex items-end justify-between px-[var(--gutter-mobile)] pb-[var(--space-32)] md:px-[var(--space-48)]"
          >
            <p
              className="font-body tracking-label text-[0.75rem] uppercase"
              style={{ color: POP.crema }}
            >
              {eyebrow}
            </p>
            <div
              className="flex items-center gap-[var(--space-16)]"
              style={{ color: POP.crema }}
            >
              <span className="font-body tracking-label text-[0.75rem] uppercase">
                {scrollLabel}
              </span>
              <span className="relative block h-[3rem] w-px overflow-hidden bg-[rgba(246,235,215,0.3)]">
                <motion.span
                  className="absolute inset-x-0 top-0 block h-1/2"
                  style={{ backgroundColor: POP.crema }}
                  animate={reduce ? undefined : { y: ['-100%', '200%'] }}
                  transition={{
                    duration: 1.8,
                    repeat: Infinity,
                    ease: EASE.soft,
                  }}
                />
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function Floater({
  f,
  i,
  sx,
  sy,
  progress,
  reduce,
}: {
  f: (typeof FLOATERS)[number];
  i: number;
  sx: MotionValue<number>;
  sy: MotionValue<number>;
  progress: MotionValue<number>;
  reduce: boolean;
}) {
  const x = useTransform(sx, (v) => v * 60 * f.depth);
  const drift = useTransform(
    progress,
    [0, 1],
    [0, reduce ? 0 : -180 * f.depth],
  );
  const pyv = useTransform(sy, (v) => v * 40 * f.depth);
  const y = useTransform(() => pyv.get() + drift.get());
  return (
    <motion.div
      className="absolute"
      style={{ left: f.x, top: f.y, width: f.size, height: f.size, x, y }}
    >
      <motion.div
        className="h-full w-full"
        initial={
          reduce ? false : { opacity: 0, scale: 0.5, rotate: f.rotate - 30 }
        }
        animate={{ opacity: 1, scale: 1, rotate: f.rotate }}
        transition={{ duration: 1.2, ease: EASE.luxe, delay: 1.3 + i * 0.09 }}
      >
        <motion.div
          className="h-full w-full"
          animate={reduce ? undefined : { y: [0, -14, 0], rotate: [0, 3, 0] }}
          transition={{
            duration: 5 + (i % 3) * 1.4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <Ink
            name={f.name}
            color={POP.crema}
            className="h-full w-full opacity-90"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
