import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';
import Icon from '../ui/Icon';
import { useLanguage } from '../../i18n/LanguageContext';
import { useHeaderScroll } from '../../hooks/useHeaderScroll';
import './Header.css';

const NAV_ITEMS = [
  { key: 'nav.services', path: '/services' },
  { key: 'nav.solutions', path: '/solutions' },
  { key: 'nav.about', path: '/about' },
  { key: 'nav.news', path: '/news' },
  { key: 'nav.careers', path: '/careers' },
  { key: 'nav.contact', path: '/contact' },
] as const;

export default function Header() {
  const { t, localePath, alternatePath, otherLang } = useLanguage();
  const location = useLocation();
  const isScrolled = useHeaderScroll();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  // Close the mobile menu whenever the route changes.
  useEffect(() => setMobileOpen(false), [location.pathname]);

  const current = (location.pathname.startsWith('/en') ? location.pathname.slice(3) : location.pathname).replace(/\/$/, '') || '/';
  const isActive = (p: string) => current === p;

  return (
    <header className={`site-header${isScrolled ? ' is-scrolled' : ''}`}>
      <div className="container-x site-header__inner">
        <Logo />

        <nav className="site-nav" aria-label="Primary">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.path}
              to={localePath(item.path)}
              className={`site-nav__link${isActive(item.path) ? ' is-active' : ''}`}
            >
              {t(item.key)}
            </Link>
          ))}
        </nav>

        <div className="site-header__actions">
          <Link to={alternatePath} className="lang-switch" aria-label={`Switch to ${otherLang === 'vi' ? 'Tiếng Việt' : 'English'}`}>
            <Icon name="globe" size={16} />
            <span>{otherLang.toUpperCase()}</span>
          </Link>
          <Link to={localePath('/contact')} className="btn btn-primary btn-sm">
            {t('cta.contact')}
          </Link>
          <button
            className="burger"
            aria-label="Menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            onClick={() => setMobileOpen((o) => !o)}
          >
            <Icon name="menu" size={24} />
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      <div id="mobile-nav" className={`mobile-nav${mobileOpen ? ' is-open' : ''}`}>
        <nav aria-label="Mobile">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.path}
              to={localePath(item.path)}
              className={`mobile-nav__link${isActive(item.path) ? ' is-active' : ''}`}
            >
              <span>{t(item.key)}</span>
              <Icon name="chevron-right" size={18} />
            </Link>
          ))}
        </nav>
        <div className="mobile-nav__footer">
          <Link to={alternatePath} className="btn btn-ghost">
            <Icon name="globe" size={16} /> {otherLang.toUpperCase()}
          </Link>
          <Link to={localePath('/contact')} className="btn btn-primary">
            {t('cta.contact')}
          </Link>
        </div>
      </div>
    </header>
  );
}
