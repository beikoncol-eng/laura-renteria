'use client';

import { Fragment, useRef, type CSSProperties, type ReactNode } from 'react';
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
import { AN, LINES, STYLES, VOICE } from './brand';

/**
 * The artist's range as kinetic type: his styles run in the wide brand
 * grotesque, his closing line answers in the serif. Both bands speed up with
 * scroll velocity and reverse with its direction. Static under reduced motion.
 */
export function StylesMarquee() {
  return (
    <section
      aria-label={STYLES.join(', ')}
      className="overflow-hidden border-y py-[clamp(3rem,8vw,7rem)]"
      style={{
        backgroundColor: AN.deep,
        borderColor: 'rgba(237,232,223,0.08)',
      }}
    >
      <Band
        speed={-2}
        className="text-[clamp(2.75rem,8vw,7.5rem)] leading-[1]"
        style={{ ...VOICE.brand, color: AN.bone }}
      >
        {STYLES.map((s) => (
          <Fragment key={s}>
            <span className="whitespace-nowrap">{s}</span>
            <span className="px-[0.4em]" style={{ color: AN.vermilion }}>
              ✦
            </span>
          </Fragment>
        ))}
      </Band>
      <Band
        speed={1.4}
        className="pt-[0.2em] text-[clamp(2.25rem,6vw,5.5rem)] leading-[1.1] italic"
        style={{ ...VOICE.human, color: AN.ash }}
      >
        {[0, 1, 2].map((i) => (
          <Fragment key={i}>
            <span className="whitespace-nowrap">{LINES.lasting}</span>
            <span className="px-[0.5em]">—</span>
          </Fragment>
        ))}
      </Band>
    </section>
  );
}

function Band({
  speed,
  className,
  style,
  children,
}: {
  speed: number;
  className: string;
  style: CSSProperties;
  children: ReactNode;
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
  const x = useTransform(base, (v) => `${wrap(-50, 0, v)}%`);

  useAnimationFrame((_, delta) => {
    if (reduce) return;
    const b = boost.get();
    if (b < 0) direction.current = -1;
    else if (b > 0) direction.current = 1;
    base.set(
      base.get() +
        speed * (delta / 1000) * (1 + Math.abs(b)) * direction.current,
    );
  });

  return (
    <div className="flex overflow-hidden">
      <motion.div
        className={'flex shrink-0 items-center ' + className}
        style={{ ...style, x }}
      >
        <div className="flex shrink-0 items-center">{children}</div>
        <div className="flex shrink-0 items-center" aria-hidden>
          {children}
        </div>
      </motion.div>
    </div>
  );
}
