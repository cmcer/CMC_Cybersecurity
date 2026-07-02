import { useEffect, useRef, useState } from 'react';

/**
 * Animated count-up: starts counting from 0 to `target` the first time the
 * element scrolls into view. Returns a ref to attach and the current display
 * string (already includes `suffix`), so `<span ref={ref}>{display}</span>`.
 */
export function useCounter(target: number, suffix = '') {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [display, setDisplay] = useState(`0${suffix}`);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const animate = () => {
      if (prefersReduced) {
        setDisplay(`${target}${suffix}`);
        return;
      }
      const duration = 1600;
      const start = performance.now();
      const step = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setDisplay(`${Math.round(target * eased)}${suffix}`);
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animate();
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    io.observe(el);
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target, suffix]);

  return { ref, display };
}
