import {
  Mountain,
  Gauge,
  ShieldCheck,
  HeartHandshake,
  type LucideIcon,
} from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

interface Card {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  body: string;
}

const CARDS: Card[] = [
  {
    icon: Mountain,
    title: 'Le terrain',
    subtitle: 'Diversité & Pistes Authentiques',
    body: 'Un parcours varié oscillant entre pistes de terre dures, pistes volcaniques du Saghro, sentiers en balcon et traversées d\u2019oasis. Répartition : ~80% piste roulante / 10% monotrace / 10% goudron de liaison. Un terrain parfaitement fluide et joueur, pensé aussi bien pour le Gravel que pour le VTT semi-rigide.',
  },
  {
    icon: Gauge,
    title: 'Niveau requis',
    subtitle: 'Rythme & Distances',
    body: '30 à 95 km par jour avec un dénivelé positif cumulé de 5220 m sur la semaine. Étapes de 4h à 6h de vélo sans notion de chrono. Le rythme est adapté au groupe, avec assistance véhicules sur les liaisons pour privilégier les meilleures sections de piste.',
  },
  {
    icon: ShieldCheck,
    title: 'Sécurité & logistique',
    subtitle: 'Assistance 100% Intégrée',
    body: 'Un véhicule 4x4 d\u2019assistance / logistique transporte vos bagages et assure le ravitaillement, la trousse mécanique et l\u2019assistance médicale à chaque étape. Encadrement professionnel par un guide diplômé et une équipe de chauffeurs originaires de la région.',
  },
  {
    icon: HeartHandshake,
    title: 'Hébergement',
    subtitle: 'Hospitalité Berbère & Confort',
    body: 'Après l\u2019effort, retrouvez l\u2019authenticité des hébergements locaux : nuits en Kasbahs traditionnelles (comme à la Kasbah Mont M\u2019goun ou el Mehdaoui), gîtes de montagne au Djebel Saghro et hôtels confortables avec piscine à l\u2019arrivée des étapes chaudes.',
  },
];

function RevealCard({ card, index }: { card: Card; index: number }) {
  const [ref, visible] = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`group relative flex flex-col overflow-hidden rounded-2xl border border-kasbah-200/60 bg-white/70 p-7 shadow-sm transition-all duration-700 hover:-translate-y-1.5 hover:border-brand-400/50 hover:shadow-2xl hover:shadow-ocre-300/40 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 90}ms` }}
    >
      {/* Bordure supérieure dégradée */}
      <span
        className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-brand-500 to-terracotta-500"
        aria-hidden
      />
      {/* Fond dégradé subtil depuis le coin supérieur */}
      <span
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand-400/[0.06] to-transparent"
        aria-hidden
      />
      <span className="relative mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-terracotta-500 text-white shadow-md shadow-brand-500/30 transition-transform duration-300 group-hover:scale-110">
        <card.icon className="h-7 w-7" strokeWidth={1.5} />
      </span>
      <h3 className="relative font-serif text-xl font-semibold text-kasbah-900">
        {card.title}
      </h3>
      <p className="relative mt-2.5 text-xs font-bold uppercase tracking-[0.18em] text-brand-600">
        {card.subtitle}
      </p>
      <p className="relative mt-3 text-sm leading-relaxed text-kasbah-500">
        {card.body}
      </p>
    </div>
  );
}

export function WhyRaid() {
  return (
    <section id="concept" className="bg-sable-50 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-brand-600">
            L&rsquo;esprit du raid
          </p>
          <h2 className="font-serif text-4xl font-semibold text-kasbah-900 md:text-5xl">
            Une expédition immersive et encadrée
          </h2>
          <p className="mt-4 text-base leading-relaxed text-kasbah-600">
            Une logistique rodée pour vous laisser entièrement libre de rouler.
            Du parcours aux étapes du soir, tout est dimensionné pour
            l&rsquo;itinérance.
          </p>
        </div>
        <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {CARDS.map((card, i) => (
            <RevealCard key={card.title} card={card} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
