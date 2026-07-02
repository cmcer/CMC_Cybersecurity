import { Link } from 'react-router-dom';
import Icon from '../ui/Icon';
import { useLanguage } from '../../i18n/LanguageContext';
import { useReveal } from '../../hooks/useReveal';
import { useCounter } from '../../hooks/useCounter';
import { withBase } from '../../utils/basePath';
import { heroStats } from '../../data/content';
import './Hero.css';

function HeroStat({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { ref, number, suffix: suf } = useCounter(value, suffix);
  return (
    <div className="hero__stat">
      <dt className="hero__stat-value"><span ref={ref}>{number}</span><span className="counter-suffix">{suf}</span></dt>
      <dd className="hero__stat-label">{label}</dd>
    </div>
  );
}

export default function Hero() {
  const { lang, t, localePath } = useLanguage();
  const badgeReveal = useReveal();
  const titleReveal = useReveal(80);
  const subReveal = useReveal(160);
  const actionsReveal = useReveal(240);
  const statsReveal = useReveal<HTMLDListElement>(320);
  const visualReveal = useReveal(200);

  return (
    <section className="hero">
      <div className="container-x hero__inner">
        <div className="hero__copy">
          <span ref={badgeReveal.ref} className={`hero__badge ${badgeReveal.className}`} style={badgeReveal.style}>
            <span className="hero__badge-dot animate-pulse-glow" />
            {t('hero.badge')}
          </span>

          <h1 ref={titleReveal.ref} className={`hero__title ${titleReveal.className}`} style={titleReveal.style}>
            <span className="text-gradient glow-text">{t('hero.title')}</span>
          </h1>

          <p ref={subReveal.ref} className={`hero__sub ${subReveal.className}`} style={subReveal.style}>
            {t('hero.subtitle')}
          </p>

          <div ref={actionsReveal.ref} className={`hero__actions ${actionsReveal.className}`} style={actionsReveal.style}>
            <Link to={localePath('/contact')} className="btn btn-primary">
              {t('cta.discover')} <Icon name="arrow-right" size={18} />
            </Link>
            <Link to={localePath('/services')} className="btn btn-ghost">
              {t('cta.explore')}
            </Link>
          </div>

          <dl ref={statsReveal.ref} className={`hero__stats ${statsReveal.className}`} style={statsReveal.style}>
            {heroStats.map((s) => (
              <HeroStat key={s.key} value={s.value} suffix={s.suffix} label={t(s.key)} />
            ))}
          </dl>
        </div>

        <div ref={visualReveal.ref} className={`hero__visual ${visualReveal.className}`} style={visualReveal.style}>
          <span className="hero__halo" aria-hidden="true" />
          <img
            src={withBase('/images/hero-shield.png')}
            alt={lang === 'vi' ? 'Lá chắn an ninh mạng CMC' : 'CMC cybersecurity shield'}
            className="hero__img animate-float"
            width={560}
            height={566}
            loading="eager"
            decoding="async"
          />
          <span className="hero__chip hero__chip--1 chip"><Icon name="lock" size={14} /> Zero Trust</span>
          <span className="hero__chip hero__chip--2 chip"><Icon name="verified" size={14} /> ISO 27001</span>
        </div>
      </div>
    </section>
  );
}
