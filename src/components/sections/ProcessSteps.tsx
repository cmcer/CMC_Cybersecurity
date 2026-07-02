import { useLanguage } from '../../i18n/LanguageContext';
import { useReveal } from '../../hooks/useReveal';
import { getProcess } from '../../data/content';
import './ProcessSteps.css';

function Step({ no, title, desc, index, isLast }: { no: string; title: string; desc: string; index: number; isLast: boolean }) {
  const reveal = useReveal(index * 90);
  return (
    <article ref={reveal.ref} className={`process__step ${reveal.className}`} style={reveal.style}>
      <div className="process__no">{no}</div>
      <h3 className="process__title">{title}</h3>
      <p className="process__desc">{desc}</p>
      {!isLast && <span className="process__connector" aria-hidden="true" />}
    </article>
  );
}

export default function ProcessSteps() {
  const { lang } = useLanguage();
  const steps = getProcess(lang);
  return (
    <div className="process">
      {steps.map((s, i) => (
        <Step key={s.no} no={s.no} title={s.title} desc={s.desc} index={i} isLast={i === steps.length - 1} />
      ))}
    </div>
  );
}
