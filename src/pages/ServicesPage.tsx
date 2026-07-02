import { useLanguage } from '../i18n/LanguageContext';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import PageHero from '../components/ui/PageHero';
import ServicesSection from '../components/sections/ServicesSection';
import SectionHeading from '../components/ui/SectionHeading';
import ProcessSteps from '../components/sections/ProcessSteps';
import CtaBand from '../components/ui/CtaBand';
import './PageSections.css';

export default function ServicesPage() {
  const { t } = useLanguage();
  useDocumentMeta(`${t('nav.services')} — CMC Cyber Security`, t('section.services.sub'));

  return (
    <>
      <PageHero
        eyebrow={t('section.services.eyebrow')}
        title={t('section.services.title')}
        sub={t('section.services.sub')}
        image="/images/service-5-1.jpg"
      />

      <ServicesSection withHeading={false} withCta />

      <section className="section container-x">
        <SectionHeading
          eyebrow={t('section.process.eyebrow')}
          title={t('section.process.title')}
          sub={t('section.process.sub')}
        />
        <div className="page-mt"><ProcessSteps /></div>
      </section>

      <CtaBand />
    </>
  );
}
