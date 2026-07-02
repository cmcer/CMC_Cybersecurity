import { useReveal } from '../../hooks/useReveal';
import { withBase } from '../../utils/basePath';
import './ClientMarquee.css';

const LOGOS = [
  { src: '/images/clients/vietlott.jpg', alt: 'Vietlott' },
  { src: '/images/clients/edenred.jpg', alt: 'Edenred' },
  { src: '/images/clients/sun-group.jpg', alt: 'Sun Group' },
  { src: '/images/clients/napas.jpg', alt: 'NAPAS' },
  { src: '/images/clients/dai-ichi.jpg', alt: 'Dai-ichi Life' },
  { src: '/images/clients/ip-mac.jpg', alt: 'IP&MAC' },
].map((l) => ({ ...l, src: withBase(l.src) }));

const ROW = [...LOGOS, ...LOGOS];

export default function ClientMarquee({ label }: { label?: string }) {
  const reveal = useReveal();
  return (
    <div ref={reveal.ref} className={`marquee-wrap ${reveal.className}`} style={reveal.style}>
      {label && <p className="marquee-label">{label}</p>}
      <div className="marquee">
        <div className="marquee-track">
          {ROW.map((l, i) => (
            <span className="marquee-item" key={`${l.alt}-${i}`}>
              <img src={l.src} alt={l.alt} loading="lazy" decoding="async" />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
