import { Link } from 'react-router-dom';
import Icon from '../ui/Icon';
import { useLanguage } from '../../i18n/LanguageContext';
import { useReveal } from '../../hooks/useReveal';
import { withBase } from '../../utils/basePath';
import { getAssetFeatures } from '../../data/content';
import './AssetsSection.css';

function AssetCard({ icon, title, desc, index }: { icon: string; title: string; desc: string; index: number }) {
  const reveal = useReveal((index % 2) * 100);
  return (
    <article ref={reveal.ref} className={`assets__card glass lift ${reveal.className}`} style={reveal.style}>
      <span className="assets__icon"><Icon name={icon} size={22} /></span>
      <h3>{title}</h3>
      <p>{desc}</p>
    </article>
  );
}

export default function AssetsSection() {
  const { lang, t, localePath } = useLanguage();
  const features = getAssetFeatures(lang);
  const headReveal = useReveal();

  return (
    <section className="assets container-x">
      <div ref={headReveal.ref} className={`assets__head ${headReveal.className}`} style={headReveal.style}>
        <div className="assets__photo">
          <img
            src={withBase('/images/about.jpg')}
            alt={lang === 'vi' ? 'Đội ngũ chuyên gia CMC Cyber Security' : 'CMC Cyber Security expert team'}
            width={520}
            height={340}
            loading="lazy"
            decoding="async"
          />
        </div>
        <span className="eyebrow">{t('section.assets.eyebrow')}</span>
        <h2 className="assets__title">{t('section.assets.title')}</h2>
        <p className="assets__sub">{t('section.assets.sub')}</p>
        <Link to={localePath('/contact')} className="btn btn-primary">
          {t('cta.getStarted')} <Icon name="arrow-right" size={18} />
        </Link>
      </div>

      <div className="assets__grid">
        {features.map((f, i) => (
          <AssetCard key={f.title} icon={f.icon} title={f.title} desc={f.desc} index={i} />
        ))}
      </div>
    </section>
  );
}
