'use client';

import { useEffect, useRef, type ReactNode } from 'react';
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'framer-motion';
import { EASE } from '@/lib/motion';
import type { CaseTheme } from './theme';

/**
 * Device showcase — the client's live website, running. Real recordings play
 * inside a browser window and a phone; the devices drift at different speeds
 * on scroll. Videos only play while on screen. `children` renders below the
 * copy (e.g. a booking-flow diagram); `decoration` floats behind everything.
 */
export function DeviceShowcase({
  theme,
  label,
  title,
  body,
  points,
  visit,
  url,
  urlLabel,
  videos,
  name,
  decoration,
  children,
}: {
  theme: CaseTheme;
  label: string;
  title: string;
  body: string;
  points: string[];
  visit: string;
  url?: string;
  urlLabel: string;
  /** Video paths without extension; a `.jpg` poster sits beside each `.mp4`. */
  videos: { desktop: string; mobile: string };
  name: string;
  decoration?: ReactNode;
  children?: ReactNode;
}) {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const browserY = useTransform(
    scrollYProgress,
    [0, 1],
    reduce ? [0, 0] : [80, -60],
  );
  const phoneY = useTransform(
    scrollYProgress,
    [0, 1],
    reduce ? [0, 0] : [220, -160],
  );

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-[clamp(5rem,12vw,10rem)]"
      style={{ backgroundColor: theme.bg }}
    >
      {decoration}
      <div className="relative mx-auto grid max-w-[1440px] grid-cols-1 gap-[var(--space-64)] px-[var(--gutter-mobile)] md:grid-cols-12 md:items-center md:px-[var(--space-96)]">
        <motion.div
          className="md:col-span-4"
          initial={reduce ? false : { opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-15%' }}
          transition={{ duration: 0.9, ease: EASE.luxe }}
          style={{ color: theme.fg }}
        >
          <p
            className="font-body tracking-label pb-[var(--space-16)] text-[0.75rem] uppercase"
            style={{ color: theme.accent }}
          >
            {label}
          </p>
          <h2
            className="text-[clamp(2.5rem,5vw,4.5rem)] leading-[0.95]"
            style={theme.title}
          >
            {title}
          </h2>
          <p className="font-body pt-[var(--space-24)] text-[0.9375rem] leading-[1.7] opacity-80">
            {body}
          </p>
          <ul className="pt-[var(--space-24)]">
            {points.map((p) => (
              <li
                key={p}
                className="font-body flex gap-[var(--space-16)] border-t py-[var(--space-16)] text-[0.875rem]"
                style={{ borderColor: theme.rule }}
              >
                <span style={{ color: theme.accent }}>→</span>
                {p}
              </li>
            ))}
          </ul>
          {url ? (
            <div className="pt-[var(--space-24)]">
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-body inline-flex items-center gap-[var(--space-8)] rounded-full px-[var(--space-24)] py-[var(--space-16)] text-[0.875rem] font-medium transition-transform duration-300 hover:-translate-y-0.5"
                style={{ backgroundColor: theme.accent, color: theme.onAccent }}
              >
                {visit} ↗
              </a>
            </div>
          ) : null}
        </motion.div>

        <div className="relative md:col-span-8 md:pl-[var(--space-32)]">
          <motion.div
            style={{ y: browserY }}
            className="overflow-hidden rounded-[14px] shadow-[0_40px_80px_-30px_rgba(0,0,0,0.6)]"
          >
            <div
              className="flex items-center gap-[6px] px-[14px] py-[10px]"
              style={{ backgroundColor: theme.chrome.bar }}
            >
              {theme.chrome.dots.map((c, i) => (
                <i
                  key={i}
                  className="block h-[10px] w-[10px] rounded-full"
                  style={{ backgroundColor: c }}
                />
              ))}
              <span
                className="font-body mx-auto rounded-full bg-[rgba(127,127,127,0.12)] px-[14px] py-[3px] text-[11px]"
                style={{ color: theme.chrome.text }}
              >
                {urlLabel}
              </span>
            </div>
            <LoopVideo
              src={videos.desktop}
              label={`${name} website on desktop`}
              className="aspect-[1280/800] w-full"
            />
          </motion.div>
          <motion.div
            style={{ y: phoneY }}
            className="absolute right-[-4%] bottom-[-14%] w-[34%] max-w-[260px] rounded-[2.4rem] bg-[#111] p-[8px] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.7)] md:right-[-6%]"
          >
            <div className="relative overflow-hidden rounded-[2rem]">
              <span className="absolute top-[8px] left-1/2 z-10 h-[18px] w-[34%] -translate-x-1/2 rounded-full bg-[#111]" />
              <LoopVideo
                src={videos.mobile}
                label={`${name} website on mobile`}
                className="aspect-[600/1298] w-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
      {children}
    </section>
  );
}

function LoopVideo({
  src,
  label,
  className,
}: {
  src: string;
  label: string;
  className?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e?.isIntersecting) void v.play().catch(() => {});
        else v.pause();
      },
      { threshold: 0.2 },
    );
    io.observe(v);
    return () => io.disconnect();
  }, []);
  return (
    <video
      ref={ref}
      className={'block object-cover object-top ' + (className ?? '')}
      src={`${src}.mp4`}
      poster={`${src}.jpg`}
      muted
      loop
      playsInline
      preload="metadata"
      aria-label={label}
    />
  );
}
