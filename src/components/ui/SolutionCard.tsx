import Icon from './Icon';
import { useReveal } from '../../hooks/useReveal';
import './SolutionCard.css';

interface SolutionCardProps {
  icon: string;
  code: string;
  title: string;
  desc: string;
  index?: number;
}

export default function SolutionCard({ icon, code, title, desc, index = 0 }: SolutionCardProps) {
  const reveal = useReveal((index % 3) * 90);
  return (
    <article ref={reveal.ref} className={`sol-card glass lift ${reveal.className}`} style={reveal.style}>
      <div className="sol-card__top">
        <span className="sol-card__icon"><Icon name={icon} size={22} /></span>
        <span className="sol-card__code">{code}</span>
      </div>
      <h3 className="sol-card__title">{title}</h3>
      <p className="sol-card__desc">{desc}</p>
      <span className="sol-card__line" aria-hidden="true" />
    </article>
  );
}
