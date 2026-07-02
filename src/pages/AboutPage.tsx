import { useLanguage } from '../i18n/LanguageContext';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import { useReveal } from '../hooks/useReveal';
import { useCounter } from '../hooks/useCounter';
import PageHero from '../components/ui/PageHero';
import SectionHeading from '../components/ui/SectionHeading';
import ClientMarquee from '../components/ui/ClientMarquee';
import Icon from '../components/ui/Icon';
import CtaBand from '../components/ui/CtaBand';
import { getValues, heroStats, certs } from '../data/content';
import './PageSections.css';
import './AboutPage.css';

function AboutStat({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { ref, display } = useCounter(value, suffix);
  return (
    <div className="about-stat">
      <dt><span ref={ref}>{display}</span></dt>
      <dd>{label}</dd>
    </div>
  );
}

function ValueCard({ icon, title, desc, index }: { icon: string; title: string; desc: string; index: number }) {
  const reveal = useReveal((index % 4) * 90);
  return (
    <article ref={reveal.ref} className={`values__card glass lift ${reveal.className}`} style={reveal.style}>
      <span className="values__icon"><Icon name={icon} size={24} /></span>
      <h4>{title}</h4>
      <p>{desc}</p>
    </article>
  );
}

export default function AboutPage() {
  const { lang, t } = useLanguage();
  const values = getValues(lang);
  useDocumentMeta(`${t('about.title')} — CMC Cyber Security`, t('about.lead'));

  const leadReveal = useReveal();
  const statsReveal = useReveal<HTMLDListElement>(120);
  const missionReveal = useReveal();
  const visionReveal = useReveal(120);
  const certsReveal = useReveal();

  return (
    <>
      <PageHero eyebrow={t('nav.about')} title={t('about.title')} sub={t('tag.brand')} image="/images/about.jpg" />

      <section className="section container-x about-lead">
        <p ref={leadReveal.ref} className={`about-lead__text ${leadReveal.className}`} style={leadReveal.style}>
          {t('about.lead')}
        </p>
        <dl ref={statsReveal.ref} className={`about-stats ${statsReveal.className}`} style={statsReveal.style}>
          {heroStats.map((s) => (
            <AboutStat key={s.key} value={s.value} suffix={s.suffix} label={t(s.key)} />
          ))}
        </dl>
      </section>

      <section className="section container-x mv">
        <article ref={missionReveal.ref} className={`mv__card surface-card ${missionReveal.className}`} style={missionReveal.style}>
          <span className="mv__icon"><Icon name="target" size={24} /></span>
          <h3>{t('about.missionTitle')}</h3>
          <p>{t('about.mission')}</p>
        </article>
        <article ref={visionReveal.ref} className={`mv__card surface-card ${visionReveal.className}`} style={visionReveal.style}>
          <span className="mv__icon"><Icon name="eye" size={24} /></span>
          <h3>{t('about.visionTitle')}</h3>
          <p>{t('about.vision')}</p>
        </article>
      </section>

      <section className="section container-x">
        <SectionHeading title={t('about.valuesTitle')} align="center" />
        <div className="values page-mt">
          {values.map((v, i) => (
            <ValueCard key={v.title} icon={v.icon} title={v.title} desc={v.desc} index={i} />
          ))}
        </div>
      </section>

      <section className="section container-x">
        <SectionHeading eyebrow={t('section.certs.eyebrow')} title={t('section.certs.title')} sub={t('section.certs.sub')} />
        <div ref={certsReveal.ref} className={`certs page-mt ${certsReveal.className}`} style={certsReveal.style}>
          {certs.map((c) => (
            <span className="chip" key={c}>{c}</span>
          ))}
        </div>
      </section>

      <section className="section container-x">
        <ClientMarquee label={t('section.clients.title')} />
      </section>

      <CtaBand />
    </>
  );
}
