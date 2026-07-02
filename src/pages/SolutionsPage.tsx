import { useLanguage } from '../i18n/LanguageContext';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import PageHero from '../components/ui/PageHero';
import SolutionsSection from '../components/sections/SolutionsSection';
import SectionHeading from '../components/ui/SectionHeading';
import WhyGrid from '../components/sections/WhyGrid';
import CtaBand from '../components/ui/CtaBand';
import './PageSections.css';

export default function SolutionsPage() {
  const { t } = useLanguage();
  useDocumentMeta(`${t('nav.solutions')} — CMC Cyber Security`, t('section.solutions.sub'));

  return (
    <>
      <PageHero
        eyebrow={t('section.solutions.eyebrow')}
        title={t('section.solutions.title')}
        sub={t('section.solutions.sub')}
        image="/images/solutions-banner.jpg"
      />

      <SolutionsSection withHeading={false} />

      <section className="section container-x">
        <SectionHeading eyebrow={t('section.why.eyebrow')} title={t('section.why.title')} sub={t('section.why.sub')} />
        <div className="page-mt"><WhyGrid /></div>
      </section>

      <CtaBand />
    </>
  );
}
