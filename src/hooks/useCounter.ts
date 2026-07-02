import { useEffect, useRef, useState } from 'react';

/**
 * Animated count-up: starts counting from 0 to `target` the first time the
 * element scrolls into view. Returns the animated number and the (static)
 * suffix as SEPARATE strings — render them in separate elements
 * (`<span>{number}</span><span className="...">{suffix}</span>`) so a
 * symbol suffix like "+" or "×" can get its own font-size/vertical-align
 * instead of inheriting the digits' baseline, which is what caused the
 * suffix to look vertically misaligned next to the numbers.
 */
export function useCounter(target: number, suffix = '') {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [number, setNumber] = useState('0');

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const animate = () => {
      if (prefersReduced) {
        setNumber(`${target}`);
        return;
      }
      const duration = 1600;
      const start = performance.now();
      const step = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setNumber(`${Math.round(target * eased)}`);
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
  }, [target]);

  return { ref, number, suffix };
}
