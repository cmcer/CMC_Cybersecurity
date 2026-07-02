import Icon from '../ui/Icon';
import { useLanguage } from '../../i18n/LanguageContext';
import { useReveal } from '../../hooks/useReveal';
import { useCounter } from '../../hooks/useCounter';
import { withBase } from '../../utils/basePath';
import { getDeviceChecklist } from '../../data/content';
import './DevicesSection.css';

function ChecklistItem({ icon, title, desc, index }: { icon: string; title: string; desc: string; index: number }) {
  const reveal = useReveal<HTMLLIElement>(200 + index * 90);
  return (
    <li ref={reveal.ref} className={`devices__item ${reveal.className}`} style={reveal.style}>
      <span className="devices__item-icon"><Icon name={icon} size={20} /></span>
      <div>
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
    </li>
  );
}

export default function DevicesSection() {
  const { lang, t } = useLanguage();
  const items = getDeviceChecklist(lang);
  const mediaReveal = useReveal();
  const eyebrowReveal = useReveal();
  const titleReveal = useReveal(80);
  const subReveal = useReveal(140);
  const { ref: counterRef, display } = useCounter(15, '+');

  return (
    <section className="devices container-x">
      <div ref={mediaReveal.ref} className={`devices__media ${mediaReveal.className}`} style={mediaReveal.style}>
        <span className="devices__grid grid-overlay" aria-hidden="true" />
        <img
          src={withBase('/images/why-figure.png')}
          alt={lang === 'vi' ? 'Chuyên gia an ninh mạng CMC giám sát hệ thống' : 'CMC cybersecurity expert monitoring systems'}
          className="devices__photo"
          width={600}
          height={1160}
          loading="lazy"
          decoding="async"
        />
        <div className="devices__badge brand-surface">
          <strong><span ref={counterRef}>{display}</span></strong>
          <span>{t('section.devices.badge')}</span>
        </div>
      </div>

      <div className="devices__content">
        <span ref={eyebrowReveal.ref} className={`eyebrow ${eyebrowReveal.className}`} style={eyebrowReveal.style}>
          {t('section.devices.eyebrow')}
        </span>
        <h2 ref={titleReveal.ref} className={`devices__title ${titleReveal.className}`} style={titleReveal.style}>
          {t('section.devices.title')}
        </h2>
        <p ref={subReveal.ref} className={`devices__sub ${subReveal.className}`} style={subReveal.style}>
          {t('section.devices.sub')}
        </p>
        <ul className="devices__list">
          {items.map((it, i) => (
            <ChecklistItem key={it.title} icon={it.icon} title={it.title} desc={it.desc} index={i} />
          ))}
        </ul>
      </div>
    </section>
  );
}
