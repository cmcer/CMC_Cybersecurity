import { Link } from 'react-router-dom';
import Icon from './Icon';
import { useLanguage } from '../../i18n/LanguageContext';
import { useReveal } from '../../hooks/useReveal';
import './CtaBand.css';

export default function CtaBand() {
  const { t, localePath } = useLanguage();
  const reveal = useReveal();
  return (
    <section className="cta-band-wrap container-x">
      <div ref={reveal.ref} className={`cta-band glass ${reveal.className}`} style={reveal.style}>
        <div className="cta-band__grid-overlay grid-overlay" aria-hidden="true" />
        <div className="cta-band__content">
          <span className="eyebrow">{t('tag.brand')}</span>
          <h2 className="cta-band__title">{t('section.cta.title')}</h2>
          <p className="cta-band__sub">{t('section.cta.sub')}</p>
          <div className="cta-band__actions">
            <Link to={localePath('/contact')} className="btn btn-primary">
              {t('cta.contact')} <Icon name="arrow-right" size={18} />
            </Link>
            <Link to={localePath('/services')} className="btn btn-ghost">
              {t('cta.explore')}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
