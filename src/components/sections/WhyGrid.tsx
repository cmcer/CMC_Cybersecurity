import Icon from '../ui/Icon';
import { useLanguage } from '../../i18n/LanguageContext';
import { useReveal } from '../../hooks/useReveal';
import { getWhyChoose, certs } from '../../data/content';
import './WhyGrid.css';

function WhyCard({ icon, title, desc, index }: { icon: string; title: string; desc: string; index: number }) {
  const reveal = useReveal((index % 2) * 100);
  return (
    <article ref={reveal.ref} className={`why__card surface-card lift ${reveal.className}`} style={reveal.style}>
      <span className="why__icon"><Icon name={icon} size={26} /></span>
      <h3 className="why__title">{title}</h3>
      <p className="why__desc">{desc}</p>
    </article>
  );
}

export default function WhyGrid() {
  const { lang, t } = useLanguage();
  const items = getWhyChoose(lang);
  const certsReveal = useReveal();

  return (
    <div className="why">
      <div className="why__grid">
        {items.map((it, i) => (
          <WhyCard key={it.title} icon={it.icon} title={it.title} desc={it.desc} index={i} />
        ))}
      </div>

      <div ref={certsReveal.ref} className={`why__certs ${certsReveal.className}`} style={certsReveal.style}>
        <p className="why__certs-label">{t('section.certs.title')}</p>
        <div className="why__chips">
          {certs.map((c) => (
            <span className="chip" key={c}>{c}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
