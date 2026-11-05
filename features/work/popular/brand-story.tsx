'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'framer-motion';
import { EASE } from '@/lib/motion';
import { ASSETS, PALETTE, POP, type InkName } from './brand';
import { Ink } from './ink';

/**
 * Brand story — one pinned stage, three acts driven by scroll: the logotype,
 * the colour system (segments grow to their real share of the palette) and
 * the illustration library (a living grid that keeps reshuffling). The copy
 * on the left changes with each act; a progress rail shows where you are.
 */
export interface BrandStep {
  title: string;
  body: string;
}

export function BrandStory({
  label,
  steps,
}: {
  label: string;
  steps: BrandStep[];
}) {
  const ref = useRef<HTMLElement>(null);
  const [step, setStep] = useState(0);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  });
  useMotionValueEvent(scrollYProgress, 'change', (p) => {
    setStep(Math.min(steps.length - 1, Math.floor(p * steps.length)));
  });
  const rail = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const current = steps[step] ?? steps[0];

  return (
    <section
      ref={ref}
      className="relative h-[330svh]"
      style={{ backgroundColor: POP.crema }}
    >
      <div className="sticky top-0 flex h-[100svh] flex-col overflow-hidden px-[var(--gutter-mobile)] pt-[calc(var(--header-h-mobile)+var(--space-16))] pb-[var(--space-32)] md:flex-row md:items-center md:gap-[var(--space-64)] md:px-[var(--space-96)] md:pt-0 md:pb-0">
        <div className="relative z-10 md:w-[34%]">
          <p
            className="font-body tracking-label pb-[var(--space-16)] text-[0.75rem] uppercase"
            style={{ color: POP.rojo }}
          >
            {label}&nbsp;&nbsp;·&nbsp;&nbsp;0{step + 1} / 0{steps.length}
          </p>
          <div className="relative min-h-[9.5rem] md:min-h-[16rem] md:pb-[var(--space-24)]">
            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.55, ease: EASE.luxe }}
              >
                <h2 className="font-display tracking-display text-ink text-[clamp(2rem,4vw,3.5rem)] leading-[1.02]">
                  {current?.title}
                </h2>
                <p className="font-body text-muted pt-[var(--space-16)] text-[0.9375rem] leading-[1.65] md:max-w-[34ch]">
                  {current?.body}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="relative hidden h-px w-full bg-[rgba(26,26,26,0.15)] md:block">
            <motion.span
              className="absolute inset-y-0 left-0 block"
              style={{ width: rail, backgroundColor: POP.rojo }}
            />
          </div>
        </div>

        <div className="relative flex flex-1 items-center justify-center pt-[var(--space-16)] md:h-[72svh] md:pt-0">
          <AnimatePresence mode="wait">
            {step === 0 && <LogoAct key="logo" />}
            {step === 1 && <ColorAct key="color" />}
            {step === 2 && <IllustrationAct key="ilu" />}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

const actExit = {
  opacity: 0,
  scale: 0.96,
  transition: { duration: 0.35, ease: EASE.soft },
};

function LogoAct() {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className="flex w-full items-center justify-center gap-[clamp(1.5rem,5vw,5rem)]"
      exit={actExit}
    >
      <motion.div
        className="w-[min(52%,460px)]"
        initial={reduce ? false : { clipPath: 'inset(0% 100% 0% 0%)' }}
        animate={{ clipPath: 'inset(0% 0% 0% 0%)' }}
        transition={{ duration: 1.1, ease: EASE.luxe }}
      >
        <Image
          src={ASSETS.logoRojo.src}
          width={ASSETS.logoRojo.width}
          height={ASSETS.logoRojo.height}
          alt="POPULAR by El Conuco"
          sizes="(max-width: 768px) 52vw, 460px"
          className="h-auto w-full"
        />
      </motion.div>
      <motion.div
        className="flex aspect-square w-[min(22%,190px)] items-center justify-center rounded-[18%]"
        style={{ backgroundColor: POP.rojo }}
        initial={reduce ? false : { scale: 0.4, rotate: -90, opacity: 0 }}
        animate={{ scale: 1, rotate: 0, opacity: 1 }}
        transition={{ duration: 1, ease: EASE.luxe, delay: 0.35 }}
      >
        <Image
          src={ASSETS.isoCrema.src}
          width={ASSETS.isoCrema.width}
          height={ASSETS.isoCrema.height}
          alt=""
          aria-hidden
          sizes="140px"
          className="h-[62%] w-auto"
        />
      </motion.div>
    </motion.div>
  );
}

function ColorAct() {
  const reduce = useReducedMotion();
  return (
    <motion.div className="w-full max-w-[760px]" exit={actExit}>
      <div className="flex h-[clamp(9rem,34svh,20rem)] w-full overflow-hidden rounded-[20px] ring-1 ring-[rgba(26,26,26,0.12)]">
        {PALETTE.map((c, i) => (
          <motion.div
            key={c.hex}
            className="h-full"
            style={{ backgroundColor: c.hex }}
            initial={reduce ? false : { flexGrow: 0.0001, flexBasis: 0 }}
            animate={{ flexGrow: Math.max(c.share, 1.6), flexBasis: 0 }}
            transition={{ duration: 1.1, ease: EASE.luxe, delay: 0.12 * i }}
          />
        ))}
      </div>
      <div className="grid grid-cols-3 gap-x-[var(--space-16)] gap-y-[var(--space-16)] pt-[var(--space-24)] md:grid-cols-6">
        {PALETTE.map((c, i) => (
          <motion.div
            key={c.hex}
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              ease: EASE.luxe,
              delay: 0.5 + 0.08 * i,
            }}
          >
            <span
              className="block h-[6px] w-[2.5rem] rounded-full ring-1 ring-[rgba(26,26,26,0.12)]"
              style={{ backgroundColor: c.hex }}
            />
            <p className="font-body text-ink pt-[var(--space-8)] text-[0.8125rem] leading-tight">
              {c.name}
            </p>
            <p className="font-body text-muted text-[0.75rem]">
              {c.hex} · {c.share < 1 ? '<1' : c.share}%
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

const TILE_COLORS = [
  POP.rojo,
  POP.azul,
  POP.verde,
  POP.amarillo,
  POP.negro,
  POP.rojo,
  POP.azul,
  POP.amarillo,
  POP.verde,
  POP.rojo,
  POP.negro,
  POP.azul,
];
const TILE_INKS: InkName[] = [
  'ceviche',
  'camaron',
  'paella',
  'tacos',
  'mofongo',
  'pescado',
  'limon',
  'coctel',
  'tostones',
  'tomate',
  'molcajete',
  'maiz',
  'platano',
  'chinola',
  'aji',
  'patacones',
  'cilantro',
  'botella',
];

function IllustrationAct() {
  const reduce = useReducedMotion();
  const [tick, setTick] = useState(0);
  useEffect(() => {
    if (reduce) return;
    const id = window.setInterval(() => setTick((t) => t + 1), 1400);
    return () => window.clearInterval(id);
  }, [reduce]);

  return (
    <motion.div
      className="grid w-full max-w-[680px] grid-cols-4 gap-[clamp(6px,1vw,12px)]"
      exit={actExit}
    >
      {TILE_COLORS.map((bg, i) => {
        // Each tick swaps the drawing in two tiles, so the grid feels alive without strobing.
        const swaps = Math.floor((tick + ((i * 7) % 12)) / 6);
        const ink = TILE_INKS[(i + swaps * 5) % TILE_INKS.length] ?? 'ceviche';
        const fg = bg === POP.amarillo ? POP.negro : POP.crema;
        return (
          <motion.div
            key={i}
            className="relative aspect-square overflow-hidden rounded-[10%]"
            style={{ backgroundColor: bg }}
            initial={
              reduce
                ? false
                : { opacity: 0, scale: 0.6, rotate: i % 2 ? 8 : -8 }
            }
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.7, ease: EASE.luxe, delay: 0.05 * i }}
          >
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.div
                key={ink}
                className="absolute inset-[14%]"
                initial={{ y: '110%', rotate: 10 }}
                animate={{ y: '0%', rotate: 0 }}
                exit={{ y: '-110%', rotate: -10 }}
                transition={{ duration: 0.65, ease: EASE.luxe }}
              >
                <Ink name={ink} color={fg} className="h-full w-full" />
              </motion.div>
            </AnimatePresence>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
