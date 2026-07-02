import SectionHeading from '../ui/SectionHeading';
import SolutionCard from '../ui/SolutionCard';
import { useLanguage } from '../../i18n/LanguageContext';
import { getSolutions } from '../../data/content';
import './SolutionsSection.css';

export default function SolutionsSection({ withHeading = true }: { withHeading?: boolean }) {
  const { lang, t } = useLanguage();
  const solutions = getSolutions(lang);

  return (
    <section className="section container-x">
      {withHeading && (
        <SectionHeading
          eyebrow={t('section.solutions.eyebrow')}
          title={t('section.solutions.title')}
          sub={t('section.solutions.sub')}
        />
      )}
      <div className="sol-grid">
        {solutions.map((s, i) => (
          <SolutionCard key={s.id} icon={s.icon} code={s.code} title={s.title} desc={s.desc} index={i} />
        ))}
      </div>
    </section>
  );
}
