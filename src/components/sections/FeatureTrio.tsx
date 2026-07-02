import { Link } from 'react-router-dom';
import Icon from '../ui/Icon';
import { useLanguage } from '../../i18n/LanguageContext';
import { useReveal } from '../../hooks/useReveal';
import { getFeatureTrio } from '../../data/content';
import './FeatureTrio.css';

function TrioCard({ icon, title, desc, highlight, index }: { icon: string; title: string; desc: string; highlight: boolean; index: number }) {
  const { t, localePath } = useLanguage();
  const reveal = useReveal(index * 110);
  return (
    <article
      ref={reveal.ref}
      className={`trio__card lift ${reveal.className} ${highlight ? 'trio__card--hl' : 'surface-card'}`}
      style={reveal.style}
    >
      <span className="trio__icon"><Icon name={icon} size={26} /></span>
      <h3 className="trio__title">{title}</h3>
      <p className="trio__desc">{desc}</p>
      <Link to={localePath('/services')} className="trio__link">
        {t('cta.learnMore')} <Icon name="arrow-right" size={16} />
      </Link>
    </article>
  );
}

export default function FeatureTrio() {
  const { lang } = useLanguage();
  const items = getFeatureTrio(lang);
  return (
    <section className="trio container-x">
      <div className="trio__grid">
        {items.map((it, i) => (
          <TrioCard key={it.title} icon={it.icon} title={it.title} desc={it.desc} highlight={it.highlight} index={i} />
        ))}
      </div>
    </section>
  );
}
