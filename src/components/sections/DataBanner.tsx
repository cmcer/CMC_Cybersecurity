import { Link } from 'react-router-dom';
import Icon from '../ui/Icon';
import { useLanguage } from '../../i18n/LanguageContext';
import { useReveal } from '../../hooks/useReveal';
import { withBase } from '../../utils/basePath';
import './DataBanner.css';

export default function DataBanner() {
  const { t, localePath } = useLanguage();
  const reveal = useReveal();

  return (
    <section className="data-banner-wrap container-x">
      <div ref={reveal.ref} className={`data-banner ${reveal.className}`} style={reveal.style}>
        <img src={withBase('/images/solutions-banner.jpg')} alt="" className="data-banner__bg" loading="lazy" decoding="async" aria-hidden="true" />
        <span className="data-banner__grid grid-overlay" aria-hidden="true" />
        <span className="data-banner__glow" aria-hidden="true" />
        <div className="data-banner__content">
          <Icon name="lock" size={34} className="data-banner__lock" />
          <h2 className="data-banner__title">{t('section.data.title')}</h2>
          <p className="data-banner__sub">{t('section.data.sub')}</p>
          <Link to={localePath('/about')} className="btn btn-primary">
            {t('cta.discover')} <Icon name="arrow-right" size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
