import { createContext, useContext, useMemo, type ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import { DEFAULT_LANG, type Lang } from './types';
import vi from './translations/vi';
import en from './translations/en';

const dictionaries: Record<Lang, Record<string, string>> = { vi, en };

export type UIKey = keyof typeof vi;

interface LanguageContextValue {
  lang: Lang;
  t: (key: UIKey) => string;
  /** Build an internal route path for the given language (defaults to current lang). */
  localePath: (path: string, targetLang?: Lang) => string;
  /** Path to the current page in the other language, for the VI/EN switcher. */
  alternatePath: string;
  otherLang: Lang;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

/** Strip a leading '/en' prefix from an internal route path. */
function stripLangPrefix(path: string): string {
  if (path === '/en' || path === '/en/') return '/';
  if (path.startsWith('/en/')) return path.slice(3);
  return path;
}

function buildLocalePath(path: string, lang: Lang): string {
  const clean = '/' + path.replace(/^\/+/, '');
  const withoutLang = stripLangPrefix(clean);
  if (lang === 'en') {
    return withoutLang === '/' ? '/en' : `/en${withoutLang}`;
  }
  return withoutLang;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const location = useLocation();

  const value = useMemo<LanguageContextValue>(() => {
    const pathname = location.pathname;
    const lang: Lang = pathname === '/en' || pathname.startsWith('/en/') ? 'en' : DEFAULT_LANG;
    const otherLang: Lang = lang === 'vi' ? 'en' : 'vi';
    const dict = dictionaries[lang];

    return {
      lang,
      t: (key: UIKey) => dict[key] ?? dictionaries[DEFAULT_LANG][key] ?? key,
      localePath: (path: string, targetLang?: Lang) => buildLocalePath(path, targetLang ?? lang),
      alternatePath: buildLocalePath(pathname, otherLang),
      otherLang,
    };
  }, [location.pathname]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider');
  return ctx;
}
