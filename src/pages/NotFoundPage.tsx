import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import Icon from '../components/ui/Icon';
import './NotFoundPage.css';

export default function NotFoundPage() {
  const { localePath } = useLanguage();
  useDocumentMeta('404 — CMC Cyber Security');

  return (
    <section className="nf container-x">
      <span className="nf__glitch" aria-hidden="true">404</span>
      <h1 className="nf__title">Trang không tồn tại / Page not found</h1>
      <p className="nf__sub">
        Liên kết có thể đã bị di chuyển hoặc không còn tồn tại.<br />
        The link may have moved or no longer exists.
      </p>
      <div className="nf__actions">
        <Link to={localePath('/', 'vi')} className="btn btn-primary">
          <Icon name="arrow-right" size={18} /> Trang chủ
        </Link>
        <Link to={localePath('/', 'en')} className="btn btn-ghost">English home</Link>
      </div>
    </section>
  );
}
