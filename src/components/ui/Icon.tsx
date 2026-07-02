// Inline SVG icon set (Lucide-style, stroke = currentColor). No emojis used as icons.
// Add new icons here — one <path>/shape string per name.
const paths: Record<string, string> = {
  shield:
    '<path d="M20 13c0 5-3.5 7.5-7.69 8.95a1 1 0 0 1-.62 0C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>',
  'shield-search':
    '<path d="M20 11.5V6a1 1 0 0 0-1-1c-2 0-4.5-1.2-6.24-2.72a1.17 1.17 0 0 0-1.52 0C9.5 3.81 7 5 5 5a1 1 0 0 0-1 1v7c0 5 3.5 7.5 7.69 8.95"/><circle cx="16.5" cy="15.5" r="3"/><path d="m20.5 19.5-1.7-1.7"/>',
  'clipboard-check':
    '<rect width="8" height="4" x="8" y="2" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="m9 14 2 2 4-4"/>',
  target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5"/>',
  radar:
    '<path d="M19.07 4.93A10 10 0 1 0 21 9"/><path d="M12 12 9 5.5a7 7 0 1 0 5 5"/><circle cx="12" cy="12" r="1.5"/><path d="M21 4 12 12"/>',
  globe:
    '<circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3a14 14 0 0 1 0 18 14 14 0 0 1 0-18"/>',
  alert:
    '<path d="M10.3 3.6 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.6a2 2 0 0 0-3.4 0z"/><path d="M12 9v4"/><path d="M12 17h.01"/>',
  activity: '<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>',
  cpu:
    '<rect width="12" height="12" x="6" y="6" rx="2"/><path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3"/><rect width="4" height="4" x="10" y="10" rx="0.5"/>',
  smartphone: '<rect width="11" height="20" x="6.5" y="2" rx="2.5"/><path d="M11 18h2"/>',
  bug:
    '<path d="m8 2 1.5 1.5M16 2l-1.5 1.5"/><path d="M9 7.5h6a3 3 0 0 1 3 3V14a6 6 0 0 1-12 0v-3.5a3 3 0 0 1 3-3z"/><path d="M3 11h3M18 11h3M3 17h3M18 17h3M12 7.5V20"/>',
  network:
    '<rect x="9" y="2" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="16" y="16" width="6" height="6" rx="1"/><path d="M12 8v4M12 12H5v4M12 12h7v4"/>',
  award: '<circle cx="12" cy="8" r="6"/><path d="M8.2 13.4 7 22l5-3 5 3-1.2-8.6"/>',
  verified:
    '<path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76z"/><path d="m9 12 2 2 4-4"/>',
  users:
    '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
  flag: '<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V4s-1 1-4 1-5-2-8-2-4 1-4 1z"/><path d="M4 22v-7"/>',
  sparkles:
    '<path d="M12 3l1.9 4.6L18.5 9.5 13.9 11.4 12 16l-1.9-4.6L5.5 9.5 10.1 7.6z"/><path d="M19 14l.8 2 2 .8-2 .8-.8 2-.8-2-2-.8 2-.8z"/><path d="M5 16l.6 1.5L7 18l-1.4.5L5 20l-.6-1.5L3 18l1.4-.5z"/>',
  lightning: '<path d="M13 2 4.5 13.5H11l-1 8.5 8.5-11.5H12z"/>',
  heart:
    '<path d="M19 14c1.5-1.5 3-3.3 3-5.5A4.5 4.5 0 0 0 17.5 4c-1.8 0-3 .9-3.5 2-.5-1.1-1.7-2-3.5-2A4.5 4.5 0 0 0 2 8.5c0 2.2 1.5 4 3 5.5l7 7z"/>',
  phone:
    '<path d="M14 2a8 8 0 0 1 8 8M14 6a4 4 0 0 1 4 4M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8.1 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.5 2.7.6a2 2 0 0 1 1.7 2z"/>',
  mail: '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m2 7 8.5 5.5a2.7 2.7 0 0 0 3 0L22 7"/>',
  'map-pin': '<path d="M20 10c0 5.5-8 12-8 12s-8-6.5-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/>',
  menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
  x: '<path d="M18 6 6 18M6 6l12 12"/>',
  'chevron-right': '<path d="m9 6 6 6-6 6"/>',
  'arrow-right': '<path d="M5 12h14M13 5l7 7-7 7"/>',
  'arrow-up-right': '<path d="M7 17 17 7M8 7h9v9"/>',
  check: '<path d="M20 6 9 17l-5-5"/>',
  lock: '<rect width="18" height="11" x="3" y="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
  eye: '<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/>',
  server:
    '<rect width="20" height="8" x="2" y="2" rx="2"/><rect width="20" height="8" x="2" y="14" rx="2"/><path d="M6 6h.01M6 18h.01"/>',
  fingerprint:
    '<path d="M12 10a2 2 0 0 0-2 2c0 1.5.5 3 2 4.5M5 12a7 7 0 0 1 12-5M3 16c1 .5 2.5 1 5 1M14 13.1c0 2-.5 4.4-1.5 6.4M8.65 22a16 16 0 0 0 1.35-6"/>',
  send: '<path d="M22 2 11 13M22 2l-7 20-4-9-9-4z"/>',
  linkedin:
    '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4V9h4v1.5A4 4 0 0 1 16 8z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>',
  facebook: '<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>',
  youtube:
    '<path d="M22 8.6a3 3 0 0 0-2.1-2.1C18 6 12 6 12 6s-6 0-7.9.5A3 3 0 0 0 2 8.6 31 31 0 0 0 1.7 12 31 31 0 0 0 2 15.4a3 3 0 0 0 2.1 2.1C6 18 12 18 12 18s6 0 7.9-.5a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .3-3.4 31 31 0 0 0-.3-3.4z"/><path d="m10 15 5-3-5-3z"/>',
};

export interface IconProps {
  name: string;
  size?: number;
  className?: string;
  stroke?: number;
}

export default function Icon({ name, size = 24, className = '', stroke = 1.7 }: IconProps) {
  const inner = paths[name] ?? paths.shield;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      dangerouslySetInnerHTML={{ __html: inner }}
    />
  );
}
