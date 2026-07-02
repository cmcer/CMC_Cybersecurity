import { Link } from 'react-router-dom';
import SectionHeading from '../ui/SectionHeading';
import ServiceCard from '../ui/ServiceCard';
import Icon from '../ui/Icon';
import { useLanguage } from '../../i18n/LanguageContext';
import { useReveal } from '../../hooks/useReveal';
import { getServices } from '../../data/content';
import './ServicesSection.css';

interface ServicesSectionProps {
  withHeading?: boolean;
  withCta?: boolean;
}

export default function ServicesSection({ withHeading = true, withCta = false }: ServicesSectionProps) {
  const { lang, t, localePath } = useLanguage();
  const services = getServices(lang);
  const ctaReveal = useReveal();

  return (
    <section className="section container-x">
      {withHeading && (
        <SectionHeading
          eyebrow={t('section.services.eyebrow')}
          title={t('section.services.title')}
          sub={t('section.services.sub')}
        />
      )}
      <div className="svc-grid">
        {services.map((s, i) => (
          <ServiceCard key={s.id} icon={s.icon} title={s.title} desc={s.desc} items={s.items} index={i} />
        ))}
      </div>
      {withCta && (
        <div ref={ctaReveal.ref} className={`section__cta ${ctaReveal.className}`} style={ctaReveal.style}>
          <Link to={localePath('/contact')} className="btn btn-accent">
            {t('cta.getQuote')} <Icon name="arrow-right" size={18} />
          </Link>
        </div>
      )}
    </section>
  );
}
