import Icon from '../ui/Icon';
import { useLanguage } from '../../i18n/LanguageContext';
import { useReveal } from '../../hooks/useReveal';
import { getTrustItems } from '../../data/content';
import './TrustBand.css';

export default function TrustBand() {
  const { lang, t } = useLanguage();
  const items = getTrustItems(lang);
  const reveal = useReveal();

  return (
    <section className="trustband-wrap container-x">
      <div ref={reveal.ref} className={`trustband ${reveal.className}`} style={reveal.style}>
        <div className="trustband__top">
          <h2 className="trustband__title">{t('section.trust.title')}</h2>
          <p className="trustband__sub">{t('section.trust.sub')}</p>
        </div>
        <div className="trustband__items">
          {items.map((it) => (
            <div className="trustband__item" key={it.value}>
              <span className="trustband__icon"><Icon name={it.icon} size={26} /></span>
              <strong>{it.value}</strong>
              <span className="trustband__sub2">{it.sub}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
