import { useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import Icon from '../ui/Icon';
import { useLanguage } from '../../i18n/LanguageContext';
import { useReveal } from '../../hooks/useReveal';
import { contactInfo, getServices } from '../../data/content';
import './Footer.css';

const SUPPORT_LINKS = [
  { key: 'cta.support', path: '/contact' },
  { key: 'nav.contact', path: '/contact' },
  { key: 'section.support.title', path: '/contact' },
  { key: 'nav.news', path: '/news' },
] as const;

const COMPANY_LINKS = [
  { key: 'nav.about', path: '/about' },
  { key: 'nav.solutions', path: '/solutions' },
  { key: 'nav.careers', path: '/careers' },
  { key: 'nav.news', path: '/news' },
] as const;

export default function Footer() {
  const { lang, t, localePath } = useLanguage();
  const services = getServices(lang).slice(0, 5);
  const reveal = useReveal();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const year = 2026;

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setSubscribed(true);
    }
  };

  return (
    <footer className="site-footer">
      <div className="container-x">
        <div ref={reveal.ref} className={`newsletter ${reveal.className}`} style={reveal.style}>
          {subscribed ? (
            <p className="newsletter__success">
              ✓ {lang === 'en' ? 'Subscribed! Thank you.' : 'Đã đăng ký! Cảm ơn bạn.'}
            </p>
          ) : (
            <>
              <div className="newsletter__text">
                <h3 className="newsletter__title">{t('newsletter.title')}</h3>
                <p className="newsletter__sub">{t('newsletter.sub')}</p>
              </div>
              <form className="newsletter__form" onSubmit={handleSubscribe} noValidate>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t('newsletter.placeholder')}
                  aria-label={t('newsletter.placeholder')}
                />
                <button type="submit" className="btn btn-primary">
                  {t('cta.subscribe')} <Icon name="arrow-right" size={16} />
                </button>
              </form>
            </>
          )}
        </div>
      </div>

      <div className="container-x site-footer__grid">
        <div className="site-footer__brand">
          <Logo />
          <p className="site-footer__tag">{t('footer.tagline')}</p>
          <div className="site-footer__contact">
            <a href={`tel:${contactInfo.hotline.replace(/\s/g, '')}`}>
              <Icon name="phone" size={15} /> {contactInfo.hotline}
            </a>
            <a href={`mailto:${contactInfo.email}`}>
              <Icon name="mail" size={15} /> {contactInfo.email}
            </a>
          </div>
          <div className="site-footer__social">
            <a href="#" aria-label="LinkedIn"><Icon name="linkedin" size={18} /></a>
            <a href="#" aria-label="Facebook"><Icon name="facebook" size={18} /></a>
            <a href="#" aria-label="YouTube"><Icon name="youtube" size={18} /></a>
          </div>
        </div>

        <div className="site-footer__col">
          <h4>{t('footer.services')}</h4>
          <ul>
            {services.map((s) => (
              <li key={s.id}>
                <Link to={localePath('/services')}>{s.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="site-footer__col">
          <h4>{t('footer.support')}</h4>
          <ul>
            {SUPPORT_LINKS.map((c) => (
              <li key={c.key}>
                <Link to={localePath(c.path)}>{t(c.key)}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="site-footer__col">
          <h4>{t('footer.company')}</h4>
          <ul>
            {COMPANY_LINKS.map((c) => (
              <li key={c.key}>
                <Link to={localePath(c.path)}>{t(c.key)}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container-x site-footer__bottom">
        <p>© {year} {t('footer.rights')}</p>
        <p className="site-footer__note">{t('footer.note')}</p>
      </div>
    </footer>
  );
}
