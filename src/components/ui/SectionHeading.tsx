import { useReveal } from '../../hooks/useReveal';
import './SectionHeading.css';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  sub?: string;
  align?: 'left' | 'center';
}

export default function SectionHeading({ eyebrow, title, sub, align = 'center' }: SectionHeadingProps) {
  const reveal = useReveal();
  return (
    <div ref={reveal.ref} className={`sh ${align === 'center' ? 'sh--center' : 'sh--left'} ${reveal.className}`} style={reveal.style}>
      {eyebrow && <span className="eyebrow sh__eyebrow">{eyebrow}</span>}
      <h2 className="sh__title">{title}</h2>
      {sub && <p className="sh__sub">{sub}</p>}
    </div>
  );
}
