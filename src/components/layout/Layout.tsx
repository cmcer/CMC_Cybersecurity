import { useEffect, useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import CyberBackground from './CyberBackground';
import './Layout.css';

/** App shell: skip-link + animated background + header + routed page + footer. */
export default function Layout() {
  const location = useLocation();
  const mainRef = useRef<HTMLElement>(null);

  // Scroll to top and move focus to main content on every route change (a11y + UX parity with MPA navigation).
  useEffect(() => {
    window.scrollTo(0, 0);
    mainRef.current?.focus();
  }, [location.pathname]);

  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <CyberBackground />
      <Header />
      <main id="main" ref={mainRef} tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
