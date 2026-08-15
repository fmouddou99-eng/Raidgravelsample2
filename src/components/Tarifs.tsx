import {
  Users,
  Check,
  X,
  Plane,
  Car,
  BedDouble,
  UtensilsCrossed,
  Bike,
  Wrench,
  ShieldPlus,
  Wine,
  Landmark,
  Coins,
  ShieldCheck,
  Lock,
  Truck,
  PackageCheck,
  type LucideIcon,
} from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

interface Tier {
  group: string;
  price: string;
  popular?: boolean;
}

const TIERS: Tier[] = [
  { group: '2 participants', price: '1350' },
  { group: '3 à 4 participants', price: '1290' },
  { group: '5 à 15 participants', price: '1190', popular: true },
  { group: '16 participants et +', price: '1090' },
];

interface IncExc {
  icon: LucideIcon;
  text: string;
}

const INCLUDED: IncExc[] = [
  {
    icon: Car,
    text: 'Transferts : inclus le premier et le dernier jour (aéroport ↔ hôtel)',
  },
  {
    icon: Truck,
    text: 'Assistance 4x4 : véhicule dédié durant tout le circuit (transport des bagages et suivi technique)',
  },
  {
    icon: BedDouble,
    text: "Hébergement : nuits d'arrivée et de retour à Marrakech en hôtel ou riad (formule petit-déjeuner, base chambre double/triple) ; nuits en hébergements locaux durant le circuit (hôtel, kasbahs, gîtes) en pension complète",
  },
  {
    icon: UtensilsCrossed,
    text: 'Restauration : tous les repas et pique-niques sur le parcours à vélo',
  },
  {
    icon: Bike,
    text: 'Encadrement : accompagnateur/guide VTT-Gravel diplômé et local',
  },
  {
    icon: Wrench,
    text: 'Sécurité : trousse médicale et outillage de réparation à bord du 4x4',
  },
];

const NOT_INCLUDED: IncExc[] = [
  { icon: Plane, text: 'Vols internationaux aller/retour' },
  {
    icon: Bike,
    text: 'Location du vélo (mise en relation avec nos partenaires à Marrakech)',
  },
  {
    icon: UtensilsCrossed,
    text: 'Repas à Marrakech (déjeuners et dîners du J1 et J7)',
  },
  {
    icon: Wine,
    text: 'Boissons personnelles et consommations durant le circuit',
  },
  {
    icon: Landmark,
    text: 'Visites de sites touristiques ou monuments payants',
  },
  {
    icon: Coins,
    text: "Pourboires pour l'équipe encadrante et dépenses personnelles",
  },
  {
    icon: ShieldPlus,
    text: "Assurance voyage / annulation (obligatoire, à votre charge)",
  },
];

const OPTIONS: IncExc[] = [
  {
    icon: BedDouble,
    text: "Chambre individuelle (Single) : +160 € (pour l'ensemble des nuits du séjour)",
  },
  {
    icon: Lock,
    text: "Privatisation du raid : +120 € (pour privatiser le groupe avec vos proches)",
  },
  {
    icon: Car,
    text: "Transfert aéroport particulier : 50 € (si vos horaires de vol diffèrent du groupe, forfait 1 à 4 pers.)",
  },
  {
    icon: PackageCheck,
    text: "Transfert différé du vélo personnel : 50 € (en cas de prolongation du séjour, forfait 1 à 4 vélos)",
  },
];

export function Tarifs() {
  const [ref, visible] = useReveal<HTMLDivElement>();

  return (
    <section id="tarifs" className="bg-sable-100 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-brand-600">
            Tarifs &amp; services
          </p>
          <h2 className="font-serif text-4xl font-semibold text-kasbah-900 md:text-5xl">
            Participer au raid
          </h2>
          <p className="mt-5 text-base leading-relaxed text-kasbah-700">
            Tarifs par personne hors vols. Le prix varie selon le nombre de
            participants inscrits dans votre groupe.
          </p>
        </div>

        <div
          ref={ref}
          className={`mt-12 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Grille tarifaire dégressive */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {TIERS.map((tier) => (
              <div
                key={tier.group}
                className={`relative flex flex-col rounded-2xl p-7 text-center shadow-lg transition-all duration-300 hover:-translate-y-1 ${
                  tier.popular
                    ? 'gradient-orange shadow-xl shadow-brand-600/25 ring-2 ring-brand-500'
                    : 'border border-ocre-300/50 bg-white/70 shadow-brand-600/5'
                }`}
              >
                {tier.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-kasbah-900 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-sable-50 shadow-md">
                    Le plus choisi
                  </span>
                )}
                <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-[0.15em] text-kasbah-700">
                  <Users className="h-4 w-4" />
                  {tier.group}
                </div>
                <div className="mt-5 flex items-baseline justify-center gap-1">
                  <span className="font-serif text-5xl font-semibold text-kasbah-900">
                    {tier.price}
                  </span>
                  <span className="text-xl font-light text-kasbah-700">€</span>
                </div>
                <p className="mt-2 text-sm text-kasbah-600">/ personne</p>
              </div>
            ))}
          </div>

          {/* Inclusions / exclusions */}
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-ocre-300/50 bg-white/70 p-6 sm:p-8">
              <h3 className="mb-5 font-serif text-xl font-semibold text-kasbah-900">
                Ce qui est inclus
              </h3>
              <ul className="space-y-4">
                {INCLUDED.map((item) => (
                  <li
                    key={item.text}
                    className="flex items-start gap-3 text-sm leading-relaxed text-kasbah-700"
                  >
                    <item.icon
                      className="mt-0.5 h-5 w-5 shrink-0 text-brand-600"
                      strokeWidth={1.5}
                    />
                    <span>
                      <strong className="font-semibold text-kasbah-900">
                        {item.text.split(' : ')[0]} :
                      </strong>{' '}
                      {item.text.split(' : ').slice(1).join(' : ')}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-ocre-300/50 bg-white/70 p-6 sm:p-8">
              <h3 className="mb-5 font-serif text-xl font-semibold text-kasbah-900">
                Ce qui n'est pas inclus
              </h3>
              <ul className="space-y-4">
                {NOT_INCLUDED.map((item) => (
                  <li
                    key={item.text}
                    className="flex items-start gap-3 text-sm leading-relaxed text-kasbah-600"
                  >
                    <item.icon
                      className="mt-0.5 h-5 w-5 shrink-0 text-kasbah-400"
                      strokeWidth={1.5}
                    />
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Options & suppléments */}
          <div className="mt-6 rounded-2xl border border-ocre-300/40 bg-ocre-100/40 p-6 sm:p-8">
            <h3 className="mb-5 flex items-center gap-2 font-serif text-lg font-semibold text-kasbah-800">
              <ShieldCheck className="h-5 w-5 text-brand-600" strokeWidth={1.5} />
              Options &amp; suppléments
            </h3>
            <ul className="grid gap-4 sm:grid-cols-2">
              {OPTIONS.map((opt) => (
                <li
                  key={opt.text}
                  className="flex items-start gap-3 text-sm leading-relaxed text-kasbah-700"
                >
                  <opt.icon
                    className="mt-0.5 h-5 w-5 shrink-0 text-ocre-500"
                    strokeWidth={1.5}
                  />
                  <span>
                    <strong className="font-semibold text-kasbah-900">
                      {opt.text.split(' : ')[0]} :
                    </strong>{' '}
                    {opt.text.split(' : ').slice(1).join(' : ')}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="mt-10 text-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-kasbah-900 px-8 py-3.5 text-sm font-semibold text-sable-50 shadow-lg shadow-kasbah-900/25 transition-all hover:bg-kasbah-800"
            >
              Réserver votre place
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
