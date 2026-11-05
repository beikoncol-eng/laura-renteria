'use client';

import { Fragment, useRef } from 'react';
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  wrap,
} from 'framer-motion';
import { PHRASES, POP, type InkName } from './brand';
import { Ink } from './ink';

/**
 * Phrase marquee — the brand's approved lines as kinetic type. Two bands run
 * in opposite directions and speed up with the reader's scroll velocity, the
 * way the brand talks on walls, bags and menus. Static under reduced motion.
 */
export function PhraseMarquee() {
  return (
    <section
      aria-label="POPULAR"
      className="overflow-hidden py-[clamp(3rem,8vw,7rem)]"
      style={{ backgroundColor: POP.rojo }}
    >
      <Band
        phrases={[PHRASES[0], PHRASES[1], PHRASES[2]]}
        inks={['camaron', 'limon', 'aji']}
        color={POP.crema}
        speed={-2.2}
      />
      <Band
        phrases={[PHRASES[3], PHRASES[4], PHRASES[5]]}
        inks={['tacos', 'coctel', 'tomate']}
        color={POP.amarillo}
        speed={1.8}
      />
    </section>
  );
}

function Band({
  phrases,
  inks,
  color,
  speed,
}: {
  phrases: readonly string[];
  inks: InkName[];
  color: string;
  speed: number;
}) {
  const reduce = useReducedMotion();
  const base = useMotionValue(0);
  const { scrollY } = useScroll();
  const velocity = useSpring(useVelocity(scrollY), {
    damping: 50,
    stiffness: 400,
  });
  const boost = useTransform(velocity, [-1500, 0, 1500], [-4, 0, 4], {
    clamp: false,
  });
  const direction = useRef(1);
  // Content is repeated twice; wrapping at -50% makes the loop seamless.
  const x = useTransform(base, (v) => `${wrap(-50, 0, v)}%`);

  useAnimationFrame((_, delta) => {
    if (reduce) return;
    const b = boost.get();
    if (b < 0) direction.current = -1;
    else if (b > 0) direction.current = 1;
    const move = speed * (delta / 1000) * (1 + Math.abs(b)) * direction.current;
    base.set(base.get() + move);
  });

  const run = (
    <>
      {phrases.map((p, i) => (
        <Fragment key={p}>
          <span className="whitespace-nowrap">{p}</span>
          <span className="inline-flex shrink-0 px-[0.35em]">
            <Ink
              name={inks[i % inks.length] ?? 'limon'}
              color={color}
              className="h-[0.9em] w-[0.9em]"
            />
          </span>
        </Fragment>
      ))}
    </>
  );

  return (
    <div className="flex overflow-hidden">
      <motion.div
        className="flex shrink-0 items-center text-[clamp(3rem,9vw,8.5rem)] leading-[1.05]"
        style={{ x, color, fontFamily: 'var(--font-popular)' }}
      >
        <div className="flex shrink-0 items-center pr-[0.35em]">{run}</div>
        <div className="flex shrink-0 items-center pr-[0.35em]" aria-hidden>
          {run}
        </div>
      </motion.div>
    </div>
  );
}
