import SectionHeading from '../ui/SectionHeading';
import { useLanguage } from '../../i18n/LanguageContext';
import { useReveal } from '../../hooks/useReveal';
import { getTestimonials } from '../../data/content';
import './Testimonials.css';

function initials(name: string): string {
  return name
    .split(' ')
    .slice(-2)
    .map((p) => p[0])
    .join('');
}

function TestimonialCard({
  quote,
  name,
  role,
  company,
  index,
}: {
  quote: string;
  name: string;
  role: string;
  company: string;
  index: number;
}) {
  const reveal = useReveal((index % 3) * 100);
  return (
    <figure ref={reveal.ref} className={`tst-card surface-card lift ${reveal.className}`} style={reveal.style}>
      <span className="tst-card__quote" aria-hidden="true">&ldquo;</span>
      <blockquote className="tst-card__text">{quote}</blockquote>
      <figcaption className="tst-card__person">
        <span className="tst-card__avatar">{initials(name)}</span>
        <span className="tst-card__meta">
          <strong>{name}</strong>
          <span>{role} · {company}</span>
        </span>
      </figcaption>
    </figure>
  );
}

export default function Testimonials() {
  const { lang, t } = useLanguage();
  const items = getTestimonials(lang);

  return (
    <section className="section container-x">
      <SectionHeading eyebrow={t('section.testimonials.eyebrow')} title={t('section.testimonials.title')} />
      <div className="tst-grid">
        {items.map((it, i) => (
          <TestimonialCard key={it.name} quote={it.quote} name={it.name} role={it.role} company={it.company} index={i} />
        ))}
      </div>
    </section>
  );
}
