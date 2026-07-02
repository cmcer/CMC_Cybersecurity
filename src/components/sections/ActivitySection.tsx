import Icon from '../ui/Icon';
import { useLanguage } from '../../i18n/LanguageContext';
import { useReveal } from '../../hooks/useReveal';
import { withBase } from '../../utils/basePath';
import { getActivityCards } from '../../data/content';
import './ActivitySection.css';

const IMAGES = ['/images/service-1.jpg', '/images/threat-intel.jpg', '/images/service-2.jpg'].map(withBase);

function ActivityCard({
  title,
  sub,
  items,
  highlight,
  index,
}: {
  title: string;
  sub: string;
  items: string[];
  highlight: boolean;
  index: number;
}) {
  const reveal = useReveal(index * 110);
  return (
    <article ref={reveal.ref} className={`act-card ${reveal.className} ${highlight ? 'act-card--hl' : ''}`} style={reveal.style}>
      <div className="act-card__media">
        <img src={IMAGES[index % IMAGES.length]} alt={title} width={440} height={240} loading="lazy" decoding="async" />
      </div>
      <div className="act-card__body">
        <h3 className="act-card__title">{title}</h3>
        <p className="act-card__sub">{sub}</p>
        <ul className="act-card__list">
          {items.map((it) => (
            <li key={it}>
              <Icon name="check" size={15} /> <span>{it}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default function ActivitySection() {
  const { lang, t } = useLanguage();
  const cards = getActivityCards(lang);
  const headReveal = useReveal();

  return (
    <section className="activity">
      <span className="activity__grid grid-overlay" aria-hidden="true" />
      <div className="container-x activity__inner">
        <div ref={headReveal.ref} className={`activity__head ${headReveal.className}`} style={headReveal.style}>
          <span className="eyebrow">{t('section.activity.eyebrow')}</span>
          <h2 className="activity__title">{t('section.activity.title')}</h2>
          <p className="activity__sub">{t('section.activity.sub')}</p>
        </div>

        <div className="activity__grid-cards">
          {cards.map((c, i) => (
            <ActivityCard key={c.title} title={c.title} sub={c.sub} items={c.items} highlight={c.highlight} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
