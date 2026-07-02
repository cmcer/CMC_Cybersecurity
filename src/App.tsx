import type { ComponentType } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './i18n/LanguageContext';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import SolutionsPage from './pages/SolutionsPage';
import AboutPage from './pages/AboutPage';
import NewsPage from './pages/NewsPage';
import CareersPage from './pages/CareersPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

/**
 * Route table — each page is mounted twice: once for Vietnamese (default,
 * no prefix) and once for English (`/en` prefix). `<LanguageContext>`
 * derives the active language purely from the URL, so every page component
 * just calls `useLanguage()` and renders the right copy automatically.
 *
 * Uses HashRouter (URLs look like `/#/services`) so client-side routes
 * always resolve correctly on GitHub Pages static hosting, with zero extra
 * server-side rewrite configuration.
 */
const PAGES: Array<{ path: string; Component: ComponentType }> = [
  { path: '', Component: HomePage },
  { path: 'services', Component: ServicesPage },
  { path: 'solutions', Component: SolutionsPage },
  { path: 'about', Component: AboutPage },
  { path: 'news', Component: NewsPage },
  { path: 'careers', Component: CareersPage },
  { path: 'contact', Component: ContactPage },
];

export default function App() {
  return (
    <HashRouter>
      <LanguageProvider>
        <Routes>
          <Route element={<Layout />}>
            {PAGES.map(({ path, Component }) => (
              <Route key={path || 'home'} path={path} element={<Component />} />
            ))}
            {PAGES.map(({ path, Component }) => (
              <Route key={`en-${path || 'home'}`} path={path ? `en/${path}` : 'en'} element={<Component />} />
            ))}
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </LanguageProvider>
    </HashRouter>
  );
}
