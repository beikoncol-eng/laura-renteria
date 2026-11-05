'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { EASE } from '@/lib/motion';
import { AN, VOICE } from './brand';

/**
 * Booking flow — what happens after "Begin a conversation". A request leaves
 * the site's form, is stored, and fans out to an email confirmation and the
 * studio's WhatsApp. A pulse travels the line on a loop to show it is live.
 */
export function BookingFlow({
  title,
  steps,
}: {
  title: string;
  steps: string[];
}) {
  const reduce = useReducedMotion();
  return (
    <div className="relative mx-auto max-w-[1440px] px-[var(--gutter-mobile)] pt-[clamp(6rem,14vw,11rem)] md:px-[var(--space-96)]">
      <p
        className="pb-[var(--space-32)] text-[0.6875rem]"
        style={{ ...VOICE.machine, color: AN.vermilion }}
      >
        {title}
      </p>
      <div className="relative">
        <div
          className="absolute top-[1.1rem] right-[6%] left-[6%] hidden h-px md:block"
          style={{ backgroundColor: 'rgba(237,232,223,0.18)' }}
        >
          {!reduce && (
            <motion.span
              className="absolute top-1/2 block h-[7px] w-[7px] -translate-y-1/2 rounded-full"
              style={{
                backgroundColor: AN.vermilion,
                boxShadow: `0 0 18px 4px ${AN.vermilion}`,
              }}
              animate={{ left: ['0%', '100%'] }}
              transition={{
                duration: 3.2,
                repeat: Infinity,
                ease: 'easeInOut',
                repeatDelay: 0.6,
              }}
            />
          )}
        </div>
        <ol className="grid grid-cols-2 gap-y-[var(--space-32)] md:grid-cols-4">
          {steps.map((s, i) => (
            <motion.li
              key={s}
              className="relative flex flex-col items-start md:items-center md:text-center"
              initial={reduce ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.8, ease: EASE.luxe, delay: 0.15 * i }}
            >
              <span
                className="relative z-10 flex h-[2.2rem] w-[2.2rem] items-center justify-center rounded-full border text-[0.625rem]"
                style={{
                  ...VOICE.machine,
                  letterSpacing: 0,
                  borderColor: AN.bone,
                  color: AN.bone,
                  backgroundColor: AN.deep,
                }}
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              <span
                className="pt-[var(--space-16)] text-[1.05rem] leading-[1.3]"
                style={{ ...VOICE.human, color: AN.bone }}
              >
                {s}
              </span>
            </motion.li>
          ))}
        </ol>
      </div>
    </div>
  );
}
