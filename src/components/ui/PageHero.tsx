import { useReveal } from '../../hooks/useReveal';
import { withBase } from '../../utils/basePath';
import './PageHero.css';

interface PageHeroProps {
  eyebrow: string;
  title: string;
  sub?: string;
  image?: string;
}

export default function PageHero({ eyebrow, title, sub, image }: PageHeroProps) {
  const eyebrowReveal = useReveal();
  const titleReveal = useReveal(80);
  const subReveal = useReveal(160);
  const mediaReveal = useReveal(160);

  return (
    <section className={`page-hero${image ? ' page-hero--split' : ''}`}>
      <div className="page-hero__grid grid-overlay" aria-hidden="true" />
      <div className="container-x page-hero__inner">
        <div className="page-hero__copy">
          <span ref={eyebrowReveal.ref} className={`eyebrow ${eyebrowReveal.className}`} style={eyebrowReveal.style}>
            {eyebrow}
          </span>
          <h1 ref={titleReveal.ref} className={`page-hero__title ${titleReveal.className}`} style={titleReveal.style}>
            {title}
          </h1>
          {sub && (
            <p ref={subReveal.ref} className={`page-hero__sub ${subReveal.className}`} style={subReveal.style}>
              {sub}
            </p>
          )}
        </div>
        {image && (
          <div ref={mediaReveal.ref} className={`page-hero__media ${mediaReveal.className}`} style={mediaReveal.style}>
            <img src={withBase(image)} alt="" loading="eager" decoding="async" />
          </div>
        )}
      </div>
    </section>
  );
}
