import { useEffect, type RefObject } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

/** Draws an animated particle-network on the given canvas ref (used by <CyberBackground>). */
export function useParticleBackground(canvasRef: RefObject<HTMLCanvasElement | null>) {
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let w = 0;
    let h = 0;
    let raf = 0;
    let running = true;
    let points: Particle[] = [];

    const density = () => {
      const area = w * h;
      const base = Math.round(area / 26000);
      return Math.max(28, Math.min(prefersReduced ? 36 : 90, base));
    };

    const seed = () => {
      points = Array.from({ length: density() }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.32,
        vy: (Math.random() - 0.5) * 0.32,
      }));
    };

    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      const linkDist = 130;
      for (let i = 0; i < points.length; i++) {
        const p = points[i];
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;

        for (let j = i + 1; j < points.length; j++) {
          const q = points[j];
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const d = Math.hypot(dx, dy);
          if (d < linkDist) {
            const a = (1 - d / linkDist) * 0.4;
            ctx.strokeStyle = `rgba(45, 150, 215, ${a})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.stroke();
          }
        }
        ctx.fillStyle = 'rgba(63, 185, 240, 0.85)';
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.5, 0, Math.PI * 2);
        ctx.fill();
      }
      if (running) raf = requestAnimationFrame(draw);
    };

    const start = () => {
      if (!running) {
        running = true;
        draw();
      }
    };
    const stop = () => {
      running = false;
      cancelAnimationFrame(raf);
    };

    resize();
    let resizeTimer: number;
    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(resize, 200);
    };
    const onVisibility = () => (document.hidden ? stop() : start());

    window.addEventListener('resize', onResize);
    document.addEventListener('visibilitychange', onVisibility);

    if (prefersReduced) {
      draw();
      stop();
    } else {
      draw();
    }

    return () => {
      stop();
      window.removeEventListener('resize', onResize);
      document.removeEventListener('visibilitychange', onVisibility);
      clearTimeout(resizeTimer);
    };
  }, [canvasRef]);
}
