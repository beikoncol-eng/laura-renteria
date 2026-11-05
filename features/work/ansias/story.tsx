'use client';

import Image from 'next/image';
import { useRef, useState } from 'react';
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'framer-motion';
import { EASE } from '@/lib/motion';
import { AN, ASSETS, LINES, VOICE } from './brand';
import { Monogram } from './monogram';

/**
 * Creative direction — one pinned stage, three acts driven by scroll: the
 * artist's marks (monogram + heart), the three typographic voices, and the
 * rule "colour is an event" (a black-and-white piece blooms into colour).
 */
export interface StoryStep {
  title: string;
  body: string;
}

export function AnsiasStory({
  label,
  steps,
}: {
  label: string;
  steps: StoryStep[];
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
      style={{ backgroundColor: AN.obsidian }}
    >
      <div className="sticky top-0 flex h-[100svh] flex-col overflow-hidden px-[var(--gutter-mobile)] pt-[calc(var(--header-h-mobile)+var(--space-16))] pb-[var(--space-32)] md:flex-row md:items-center md:gap-[var(--space-64)] md:px-[var(--space-96)] md:pt-0 md:pb-0">
        <div className="relative z-10 md:w-[34%]" style={{ color: AN.bone }}>
          <p
            className="pb-[var(--space-16)] text-[0.6875rem]"
            style={{ ...VOICE.machine, color: AN.vermilion }}
          >
            {label} · 0{step + 1} / 0{steps.length}
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
                <h2
                  className="text-[clamp(2rem,4vw,3.5rem)] leading-[0.95]"
                  style={VOICE.brand}
                >
                  {current?.title}
                </h2>
                <p
                  className="pt-[var(--space-16)] text-[1rem] leading-[1.6] opacity-75 md:max-w-[34ch]"
                  style={VOICE.human}
                >
                  {current?.body}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="relative hidden h-px w-full bg-[rgba(237,232,223,0.15)] md:block">
            <motion.span
              className="absolute inset-y-0 left-0 block"
              style={{ width: rail, backgroundColor: AN.vermilion }}
            />
          </div>
        </div>

        <div className="relative flex flex-1 items-center justify-center pt-[var(--space-16)] md:h-[76svh] md:pt-0">
          <AnimatePresence mode="wait">
            {step === 0 && <MarksAct key="marks" />}
            {step === 1 && <VoicesAct key="voices" />}
            {step === 2 && <ColorAct key="color" />}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

const actExit = {
  opacity: 0,
  scale: 0.97,
  transition: { duration: 0.35, ease: EASE.soft },
};

function MarksAct() {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className="flex w-full items-center justify-center gap-[clamp(2rem,7vw,6rem)]"
      exit={actExit}
    >
      <motion.div
        className="w-[min(32%,230px)]"
        initial={reduce ? false : { clipPath: 'inset(0% 0% 100% 0%)' }}
        animate={{ clipPath: 'inset(0% 0% 0% 0%)' }}
        transition={{ duration: 1.6, ease: EASE.luxe }}
      >
        <Monogram color={AN.bone} className="w-full" />
      </motion.div>
      <motion.div
        className="w-[min(30%,210px)]"
        initial={reduce ? false : { opacity: 0, scale: 0.6, rotate: -12 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1.1, ease: EASE.luxe, delay: 0.6 }}
      >
        <motion.div
          className="rounded-[14%] p-[14%]"
          style={{ backgroundColor: AN.bone }}
          animate={reduce ? undefined : { scale: [1, 1.04, 1] }}
          transition={{
            duration: 1.1,
            repeat: Infinity,
            repeatDelay: 0.5,
            ease: 'easeInOut',
          }}
        >
          <Image
            src={ASSETS.heart.src}
            width={ASSETS.heart.width}
            height={ASSETS.heart.height}
            alt="Ansias heart symbol"
            sizes="210px"
            className="h-auto w-full"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

function VoicesAct() {
  const reduce = useReducedMotion();
  const rows = [
    {
      tag: 'Brand',
      node: (
        <span
          style={VOICE.brand}
          className="text-[clamp(3rem,8vw,7rem)] leading-[0.9]"
        >
          Ansias
        </span>
      ),
    },
    {
      tag: 'Human',
      node: (
        <span
          style={VOICE.human}
          className="text-[clamp(1.4rem,2.8vw,2.5rem)] leading-[1.15] italic"
        >
          {LINES.hand}
        </span>
      ),
    },
    {
      tag: 'Machine',
      node: (
        <span style={VOICE.machine} className="text-[clamp(0.8rem,1.2vw,1rem)]">
          10+ yrs · 260 pieces · −4,000 km
        </span>
      ),
    },
  ];
  return (
    <motion.div
      className="flex w-full max-w-[720px] flex-col"
      exit={actExit}
      style={{ color: AN.bone }}
    >
      {rows.map((r, i) => (
        <motion.div
          key={r.tag}
          className="grid grid-cols-[5.5rem_1fr] items-baseline gap-[var(--space-24)] border-t py-[var(--space-24)]"
          style={{ borderColor: 'rgba(237,232,223,0.15)' }}
          initial={reduce ? false : { opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: EASE.luxe, delay: 0.2 * i }}
        >
          <span
            className="text-[0.625rem]"
            style={{ ...VOICE.machine, color: AN.ash }}
          >
            {r.tag}
          </span>
          {r.node}
        </motion.div>
      ))}
    </motion.div>
  );
}

function ColorAct() {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className="relative h-full max-h-[72svh] w-auto"
      style={{ aspectRatio: '3 / 4' }}
      exit={actExit}
    >
      <motion.div
        className="absolute inset-0 overflow-hidden rounded-[6px]"
        initial={
          reduce
            ? false
            : { filter: 'grayscale(1) contrast(1.1) brightness(0.8)' }
        }
        animate={{ filter: 'grayscale(0) contrast(1) brightness(1)' }}
        transition={{ duration: 2.2, ease: EASE.luxe, delay: 0.6 }}
      >
        <Image
          src={ASSETS.color.src}
          alt="A colour Japanese tattoo by Ansias."
          fill
          sizes="(max-width: 768px) 80vw, 40vw"
          className="object-cover"
        />
      </motion.div>
      <motion.span
        className="absolute -bottom-[2.2rem] left-0 text-[0.625rem]"
        style={{ ...VOICE.machine, color: AN.vermilion }}
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
      >
        ● Colour
      </motion.span>
    </motion.div>
  );
}
