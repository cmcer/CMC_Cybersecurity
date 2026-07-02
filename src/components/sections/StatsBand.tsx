import { useLanguage } from '../../i18n/LanguageContext';
import { useReveal } from '../../hooks/useReveal';
import { useCounter } from '../../hooks/useCounter';
import { getStats } from '../../data/content';
import './StatsBand.css';

function StatItem({ value, suffix, label, index }: { value: number; suffix: string; label: string; index: number }) {
  const reveal = useReveal(index * 110);
  const { ref, display } = useCounter(value, suffix);
  return (
    <div ref={reveal.ref} className={`statsband__item ${reveal.className}`} style={reveal.style}>
      <span className="statsband__value text-gradient"><span ref={ref}>{display}</span></span>
      <span className="statsband__label">{label}</span>
    </div>
  );
}

export default function StatsBand() {
  const { lang, t } = useLanguage();
  const stats = getStats(lang);
  const headReveal = useReveal();

  return (
    <section className="statsband container-x">
      <div ref={headReveal.ref} className={`statsband__head ${headReveal.className}`} style={headReveal.style}>
        <h2 className="statsband__title">{t('section.stats.title')}</h2>
        <p className="statsband__sub">{t('section.stats.sub')}</p>
      </div>
      <div className="statsband__grid">
        {stats.map((s, i) => (
          <StatItem key={s.label} value={s.value} suffix={s.suffix} label={s.label} index={i} />
        ))}
      </div>
    </section>
  );
}
