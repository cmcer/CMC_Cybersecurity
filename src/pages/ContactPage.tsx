import { useLanguage } from '../i18n/LanguageContext';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import { useReveal } from '../hooks/useReveal';
import PageHero from '../components/ui/PageHero';
import ContactForm from '../components/ui/ContactForm';
import Icon from '../components/ui/Icon';
import { getOffices, contactInfo } from '../data/content';
import './ContactPage.css';

function OfficeBlock({ city, address, index }: { city: string; address: string; index: number }) {
  const reveal = useReveal((index + 1) * 90);
  return (
    <div ref={reveal.ref} className={`contact__block surface-card ${reveal.className}`} style={reveal.style}>
      <h3 className="contact__block-title"><Icon name="map-pin" size={18} /> {city}</h3>
      <p className="contact__muted">{address}</p>
    </div>
  );
}

export default function ContactPage() {
  const { lang, t } = useLanguage();
  const offices = getOffices(lang);
  useDocumentMeta(`${t('contact.title')} — CMC Cyber Security`, t('contact.sub'));

  const hotlineReveal = useReveal();

  return (
    <>
      <PageHero eyebrow={t('nav.contact')} title={t('contact.title')} sub={t('contact.sub')} />

      <section className="section container-x contact">
        <div className="contact__form">
          <ContactForm />
        </div>

        <aside className="contact__aside">
          <div ref={hotlineReveal.ref} className={`contact__block glass ${hotlineReveal.className}`} style={hotlineReveal.style}>
            <h3 className="contact__block-title"><Icon name="phone" size={18} /> {t('contact.hotline')}</h3>
            <a className="contact__big" href={`tel:${contactInfo.hotline.replace(/\s/g, '')}`}>{contactInfo.hotline}</a>
            <p className="contact__muted">{contactInfo.phone}</p>
            <div className="contact__links">
              <a href={`mailto:${contactInfo.email}`}><Icon name="mail" size={16} /> {contactInfo.email}</a>
              <a href={`mailto:${contactInfo.support}`}><Icon name="lock" size={16} /> {contactInfo.support}</a>
            </div>
          </div>

          {offices.map((o, i) => (
            <OfficeBlock key={o.city} city={o.city} address={o.address} index={i} />
          ))}
        </aside>
      </section>
    </>
  );
}
