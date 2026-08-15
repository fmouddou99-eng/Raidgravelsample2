import type { LucideIcon } from 'lucide-react';

export type Variant = 'warm' | 'dune' | 'orange' | 'indigo' | 'peach';

interface PlaceholderProps {
  icon: LucideIcon;
  label: string;
  variant?: Variant;
  className?: string;
  iconClassName?: string;
}

const variantStyles: Record<Variant, string> = {
  warm: 'from-ocre-100 via-terracotta-200 to-brand-100',
  dune: 'from-sable-100 via-ocre-100 to-terracotta-200',
  orange: 'from-brand-300 via-brand-200 to-brand-100',
  indigo: 'from-sable-200 via-indigo-400/20 to-ocre-100',
  peach: 'from-brand-100 via-terracotta-200 to-sable-100',
};

const iconColor: Record<Variant, string> = {
  warm: 'text-brand-700/45',
  dune: 'text-ocre-600/45',
  orange: 'text-brand-700/40',
  indigo: 'text-indigo-600/45',
  peach: 'text-terracotta-600/45',
};

/**
 * Substitution visuelle cohérente : dégradé doux terre/orange clair,
 * pictogramme fin centré, vignette chaude. Ratio et style homogènes
 * pour faciliter le remplacement futur par de vraies photos.
 */
export function Placeholder({
  icon: Icon,
  label,
  variant = 'warm',
  className = '',
  iconClassName = '',
}: PlaceholderProps) {
  return (
    <div
      role="img"
      aria-label={label}
      className={`warm-vignette relative flex items-center justify-center overflow-hidden bg-gradient-to-br ${variantStyles[variant]} ${className}`}
    >
      {/* motif berbère filigrane */}
      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            'radial-gradient(circle at 25% 25%, rgba(255,255,255,0.22) 0%, transparent 18%), radial-gradient(circle at 75% 75%, rgba(255,255,255,0.15) 0%, transparent 22%)',
        }}
      />
      <Icon
        className={`relative z-10 ${iconColor[variant]} ${iconClassName}`}
        strokeWidth={1}
      />
    </div>
  );
}
