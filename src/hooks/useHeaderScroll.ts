import { useEffect, useState } from 'react';

/** True once the page has been scrolled past a small threshold — used to give the header a condensed/opaque style. */
export function useHeaderScroll(threshold = 24) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);

  return isScrolled;
}
