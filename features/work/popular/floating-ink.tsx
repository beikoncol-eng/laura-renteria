'use client';

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'framer-motion';
import { POP } from './brand';
import { Ink } from './ink';

/** A large cream illustration drifting and turning behind the web showcase. */
export function FloatingInk() {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const y = useTransform(
    scrollYProgress,
    [0.6, 1],
    reduce ? [0, 0] : [160, -200],
  );
  const rotate = useTransform(
    scrollYProgress,
    [0.6, 1],
    reduce ? [0, 0] : [-20, 25],
  );
  return (
    <motion.div
      aria-hidden
      className="pointer-events-none absolute top-[8%] right-[-3rem] w-[clamp(10rem,22vw,20rem)] opacity-25"
      style={{ y, rotate }}
    >
      <Ink name="exprimir" color={POP.crema} className="aspect-square w-full" />
    </motion.div>
  );
}
