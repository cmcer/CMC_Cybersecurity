import { useEffect, useRef, useState, type CSSProperties } from 'react';

/**
 * Scroll-reveal hook: fades/slides an element in the first time it enters
 * the viewport. Spread the returned props onto the element you want animated —
 * no wrapper element needed, so it never disturbs grid/flex layouts.
 *
 *   const reveal = useReveal(120); // 120ms stagger delay
 *   <article ref={reveal.ref} className={cx('card', reveal.className)} style={reveal.style}>
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(delayMs = 0) {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      setVisible(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return {
    ref,
    className: `reveal${visible ? ' is-visible' : ''}`,
    style: { '--reveal-delay': `${delayMs}ms` } as CSSProperties,
  };
}
