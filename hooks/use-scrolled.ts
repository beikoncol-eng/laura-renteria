'use client';

import { useEffect, useState } from 'react';

/**
 * Returns whether the page has scrolled past `threshold` pixels.
 *
 * Drives the header's transparent → solid transition. This toggles a single
 * boolean (not a per-frame animation), and reads are batched into a rAF with a
 * passive listener, so it stays cheap and never blocks scrolling.
 */
export function useScrolled(threshold = 8): boolean {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      setScrolled(window.scrollY > threshold);
    };

    const onScroll = () => {
      if (frame === 0) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [threshold]);

  return scrolled;
}
