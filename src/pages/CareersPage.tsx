import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import { useReveal } from '../hooks/useReveal';
import PageHero from '../components/ui/PageHero';
import Icon from '../components/ui/Icon';
import SectionHeading from '../components/ui/SectionHeading';
import CtaBand from '../components/ui/CtaBand';
import { getJobs, getValues } from '../data/content';
import './PageSections.css';
import './CareersPage.css';

function PerkCard({ icon, title, desc, index }: { icon: string; title: string; desc: string; index: number }) {
  const reveal = useReveal((index % 4) * 80);
  return (
    <article ref={reveal.ref} className={`perks__card glass ${reveal.className}`} style={reveal.style}>
      <span className="perks__icon"><Icon name={icon} size={22} /></span>
      <h4>{title}</h4>
      <p>{desc}</p>
    </article>
  );
}

function JobCard({
  title,
  location,
  type,
  level,
  applyLabel,
  applyHref,
  index,
}: {
  title: string;
  location: string;
  type: string;
  level: string;
  applyLabel: string;
  applyHref: string;
  index: number;
}) {
  const reveal = useReveal((index % 2) * 90);
  return (
    <article ref={reveal.ref} className={`job surface-card lift ${reveal.className}`} style={reveal.style}>
      <div className="job__main">
        <h3 className="job__title">{title}</h3>
        <div className="job__meta">
          <span><Icon name="map-pin" size={15} /> {location}</span>
          <span><Icon name="activity" size={15} /> {type}</span>
          <span><Icon name="award" size={15} /> {level}</span>
        </div>
      </div>
      <Link to={applyHref} className="btn btn-ghost job__apply">
        {applyLabel} <Icon name="arrow-up-right" size={16} />
      </Link>
    </article>
  );
}

export default function CareersPage() {
  const { lang, t, localePath } = useLanguage();
  const jobs = getJobs(lang);
  const perks = getValues(lang);
  useDocumentMeta(`${t('careers.title')} — CMC Cyber Security`, t('careers.sub'));

  return (
    <>
      <PageHero eyebrow={t('nav.careers')} title={t('careers.title')} sub={t('careers.sub')} image="/images/careers.jpg" />

      <section className="section container-x">
        <div className="perks">
          {perks.map((p, i) => (
            <PerkCard key={p.title} icon={p.icon} title={p.title} desc={p.desc} index={i} />
          ))}
        </div>
      </section>

      <section className="section container-x">
        <SectionHeading title={t('careers.openings')} align="left" />
        <div className="jobs page-mt">
          {jobs.map((j, i) => (
            <JobCard
              key={j.title}
              title={j.title}
              location={j.location}
              type={j.type}
              level={j.level}
              applyLabel={t('cta.apply')}
              applyHref={localePath('/contact')}
              index={i}
            />
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
