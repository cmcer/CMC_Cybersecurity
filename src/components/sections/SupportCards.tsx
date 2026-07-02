import { Link } from 'react-router-dom';
import Icon from '../ui/Icon';
import SectionHeading from '../ui/SectionHeading';
import { useLanguage } from '../../i18n/LanguageContext';
import { useReveal } from '../../hooks/useReveal';
import { getSupportCards } from '../../data/content';
import './SupportCards.css';

function SupportCard({
  icon,
  title,
  desc,
  cta,
  index,
}: {
  icon: string;
  title: string;
  desc: string;
  cta: string;
  index: number;
}) {
  const { localePath } = useLanguage();
  const reveal = useReveal((index % 3) * 100);
  return (
    <article ref={reveal.ref} className={`sup-card surface-card lift ${reveal.className}`} style={reveal.style}>
      <span className="sup-card__icon"><Icon name={icon} size={26} /></span>
      <h3 className="sup-card__title">{title}</h3>
      <p className="sup-card__desc">{desc}</p>
      <Link to={localePath('/contact')} className="btn btn-ghost sup-card__cta">
        {cta} <Icon name="arrow-right" size={16} />
      </Link>
    </article>
  );
}

export default function SupportCards() {
  const { lang, t } = useLanguage();
  const cards = getSupportCards(lang);

  return (
    <section className="section container-x">
      <SectionHeading title={t('section.support.title')} sub={t('section.support.sub')} />
      <div className="sup-grid">
        {cards.map((c, i) => (
          <SupportCard key={c.title} icon={c.icon} title={c.title} desc={c.desc} cta={c.cta} index={i} />
        ))}
      </div>
    </section>
  );
}
