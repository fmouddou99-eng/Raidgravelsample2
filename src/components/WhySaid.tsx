import {
  Mountain,
  Users,
  Car,
  HeartHandshake,
  type LucideIcon,
} from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

interface Card {
  icon: LucideIcon;
  title: string;
  body: string;
}

const CARDS: Card[] = [
  {
    icon: Mountain,
    title: 'Connaissance du terrain',
    body: '25 ans d’expérience VTT, 4×4 et gravel dans le Sud marocain.',
  },
  {
    icon: Users,
    title: 'Guide local',
    body: 'Chauffeur-guide natif des régions parcourues, pas un prestataire externe.',
  },
  {
    icon: Car,
    title: '4×4 d’assistance dédié',
    body: 'Vous précède sur toute la trace, jamais loin.',
  },
  {
    icon: HeartHandshake,
    title: 'Hospitalité berbère authentique',
    body: 'Hébergements typiques, rencontres réelles.',
  },
];

function RevealCard({ card, index }: { card: Card; index: number }) {
  const [ref, visible] = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`group relative flex flex-col rounded-2xl border border-ocre-300/50 bg-white/70 p-7 shadow-sm transition-all duration-700 hover:-translate-y-1 hover:border-brand-400/50 hover:shadow-xl hover:shadow-brand-300/20 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 90}ms` }}
    >
      <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-brand-500/15 text-brand-600 transition-colors duration-300 group-hover:bg-brand-500 group-hover:text-white">
        <card.icon className="h-6 w-6" strokeWidth={1.25} />
      </span>
      <h3 className="font-serif text-xl font-semibold text-kasbah-900">
        {card.title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-kasbah-600">
        {card.body}
      </p>
    </div>
  );
}

export function WhySaid() {
  return (
    <section id="saïd" className="relative bg-ocre-100/50 py-20 md:py-28">
      <div className="berber-filigree absolute inset-0" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-brand-600">
            L’équipe
          </p>
          <h2 className="font-serif text-4xl font-semibold text-kasbah-900 md:text-5xl">
            L’expertise du terrain depuis 2000
          </h2>
          <p className="mt-5 text-base leading-relaxed text-kasbah-700">
            Basés à Ouarzazate, nous traçons et accompagnons nos raids sans
            intermédiaire. Une logistique maîtrisée, un encadrement par des
            guides natifs du Sud et un respect profond du voyageur.
          </p>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CARDS.map((card, i) => (
            <RevealCard key={card.title} card={card} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
