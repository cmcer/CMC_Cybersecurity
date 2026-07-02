import Icon from './Icon';
import { useReveal } from '../../hooks/useReveal';
import './ServiceCard.css';

interface ServiceCardProps {
  icon: string;
  title: string;
  desc: string;
  items?: string[];
  index?: number;
}

export default function ServiceCard({ icon, title, desc, items = [], index = 0 }: ServiceCardProps) {
  const reveal = useReveal((index % 3) * 90);
  return (
    <article ref={reveal.ref} className={`svc-card surface-card lift ${reveal.className}`} style={reveal.style}>
      <div className="svc-card__icon">
        <Icon name={icon} size={24} />
      </div>
      <h3 className="svc-card__title">{title}</h3>
      <p className="svc-card__desc">{desc}</p>
      {items.length > 0 && (
        <ul className="svc-card__items">
          {items.map((it) => (
            <li key={it}>
              <Icon name="check" size={15} /> <span>{it}</span>
            </li>
          ))}
        </ul>
      )}
      <span className="svc-card__glow" aria-hidden="true" />
    </article>
  );
}
