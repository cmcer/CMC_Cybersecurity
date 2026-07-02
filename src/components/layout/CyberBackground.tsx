import { useRef } from 'react';
import { useParticleBackground } from '../../hooks/useParticleBackground';
import './CyberBackground.css';

/** Fixed, decorative animated background (particle network + grid + scanline). Sits behind all content. */
export default function CyberBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useParticleBackground(canvasRef);

  return (
    <div className="cyber-bg" aria-hidden="true">
      <canvas ref={canvasRef} />
      <div className="cyber-bg__grid grid-overlay" />
      <div className="cyber-bg__scan" />
    </div>
  );
}
