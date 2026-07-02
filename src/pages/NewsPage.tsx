import { useLanguage } from '../i18n/LanguageContext';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import { useReveal } from '../hooks/useReveal';
import PageHero from '../components/ui/PageHero';
import Icon from '../components/ui/Icon';
import CtaBand from '../components/ui/CtaBand';
import { withBase } from '../utils/basePath';
import { getNews } from '../data/content';
import './NewsPage.css';

const IMAGES = ['/images/news.jpg', '/images/threat-intel.jpg', '/images/life-3.jpg'].map(withBase);

function NewsCard({
  tag,
  date,
  title,
  excerpt,
  readMore,
  index,
}: {
  tag: string;
  date: string;
  title: string;
  excerpt: string;
  readMore: string;
  index: number;
}) {
  const reveal = useReveal((index % 3) * 90);
  return (
    <article ref={reveal.ref} className={`news-card surface-card lift ${reveal.className}`} style={reveal.style}>
      <div className="news-card__media">
        <img src={IMAGES[index % IMAGES.length]} alt={title} width={440} height={220} loading="lazy" decoding="async" />
        <span className="news-card__tag chip">{tag}</span>
      </div>
      <div className="news-card__body">
        <time className="news-card__date">{date}</time>
        <h3 className="news-card__title">{title}</h3>
        <p className="news-card__excerpt">{excerpt}</p>
        <a href="#" className="news-card__link">
          {readMore} <Icon name="arrow-right" size={16} />
        </a>
      </div>
    </article>
  );
}

export default function NewsPage() {
  const { lang, t } = useLanguage();
  const news = getNews(lang);
  useDocumentMeta(`${t('news.title')} — CMC Cyber Security`, t('news.sub'));

  const fmt = (d: string) =>
    new Date(d).toLocaleDateString(lang === 'vi' ? 'vi-VN' : 'en-US', { year: 'numeric', month: 'short', day: 'numeric' });

  return (
    <>
      <PageHero eyebrow={t('nav.news')} title={t('news.title')} sub={t('news.sub')} image="/images/news.jpg" />

      <section className="section container-x">
        <div className="news-grid">
          {news.map((n, i) => (
            <NewsCard
              key={n.title}
              tag={n.tag}
              date={fmt(n.date)}
              title={n.title}
              excerpt={n.excerpt}
              readMore={t('news.readMore')}
              index={i}
            />
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
