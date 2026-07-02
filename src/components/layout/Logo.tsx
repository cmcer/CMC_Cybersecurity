import { Link } from 'react-router-dom';
import { useLanguage } from '../../i18n/LanguageContext';
import { withBase } from '../../utils/basePath';
import './Logo.css';

export default function Logo({ className = '' }: { className?: string }) {
  const { localePath } = useLanguage();
  return (
    <Link to={localePath('/')} className={`logo ${className}`} aria-label="CMC Cyber Security — Home">
      <img
        src={withBase('/images/logo/cmccs-logo-horizontal-white.svg')}
        alt="CMC Cyber Security"
        width={254}
        height={39}
        className="logo__img"
      />
    </Link>
  );
}
