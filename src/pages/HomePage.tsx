import { useLanguage } from '../i18n/LanguageContext';
import { useReveal } from '../hooks/useReveal';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import Hero from '../components/sections/Hero';
import FeatureTrio from '../components/sections/FeatureTrio';
import ClientMarquee from '../components/ui/ClientMarquee';
import DevicesSection from '../components/sections/DevicesSection';
import ActivitySection from '../components/sections/ActivitySection';
import ServicesSection from '../components/sections/ServicesSection';
import DataBanner from '../components/sections/DataBanner';
import AssetsSection from '../components/sections/AssetsSection';
import StatsBand from '../components/sections/StatsBand';
import TrustBand from '../components/sections/TrustBand';
import Testimonials from '../components/sections/Testimonials';
import SupportCards from '../components/sections/SupportCards';
import './HomePage.css';

export default function HomePage() {
  const { lang, t } = useLanguage();
  const fullscaleReveal = useReveal();

  useDocumentMeta(
    lang === 'vi'
      ? 'CMC Cyber Security — An ninh của bạn, trách nhiệm của chúng tôi'
      : 'CMC Cyber Security — Your Security, Our Responsibility',
    t('hero.subtitle')
  );

  return (
    <>
      <Hero />
      <FeatureTrio />

      <div ref={fullscaleReveal.ref} className={`fullscale container-x ${fullscaleReveal.className}`} style={fullscaleReveal.style}>
        <h2 className="fullscale__title">{t('divider.fullscale')}</h2>
        <p className="fullscale__sub">{t('divider.fullscale.sub')}</p>
      </div>

      <div className="container-x">
        <ClientMarquee label={t('section.clients.title')} />
      </div>

      <DevicesSection />
      <ActivitySection />
      <ServicesSection />
      <DataBanner />
      <AssetsSection />
      <StatsBand />
      <TrustBand />
      <Testimonials />
      <SupportCards />
    </>
  );
}
