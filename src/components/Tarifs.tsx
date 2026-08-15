import { Users, Check, AlertCircle } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const INCLUDED = [
  'Encadrement par chauffeur-guide local',
  '4×4 d’assistance sur toute la trace',
  'Hébergements en petits hôtels, kasbahs et gîtes',
  'Trousse mécanique et médicale à bord',
  'Casque prêté sur demande',
];

const NOT_INCLUDED = [
  'Vols internationaux',
  'Location de vélo (mise en relation avec loueurs à Marrakech)',
  'Assurance voyage (obligatoire, à votre charge)',
  'Eau minérale (~10€ la semaine)',
];

export function Tarifs() {
  const [ref, visible] = useReveal<HTMLDivElement>();

  return (
    <section id="tarifs" className="bg-sable-100 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-brand-600">
            Tarifs
          </p>
          <h2 className="font-serif text-4xl font-semibold text-kasbah-900 md:text-5xl">
            Participer au raid
          </h2>
        </div>

        <div
          ref={ref}
          className={`mx-auto mt-12 max-w-4xl transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Bandeau "à confirmer" */}
          <div className="mb-6 flex items-center justify-center gap-2 rounded-full border border-warning-500/40 bg-warning-500/10 px-5 py-2.5 text-sm text-kasbah-700">
            <AlertCircle className="h-4 w-4 text-warning-500" strokeWidth={1.5} />
            <span>
              Tarif provisoire — à confirmer. Dates 2026 et formule solo/duo à
              préciser ultérieurement.
            </span>
          </div>

          <div className="grid gap-6 md:grid-cols-5">
            {/* Prix — carte dégradé orange signature */}
            <div className="md:col-span-2 flex flex-col justify-between rounded-2xl gradient-orange p-8 text-kasbah-900 shadow-xl shadow-brand-600/20">
              <div>
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-kasbah-800">
                  <Users className="h-4 w-4" />
                  Groupe de 5 à 11
                </div>
                <div className="mt-5 flex items-baseline gap-1">
                  <span className="font-serif text-6xl font-semibold">1390</span>
                  <span className="text-2xl font-light text-kasbah-700">€</span>
                  <span className="ml-2 text-sm text-kasbah-700">
                    / personne
                  </span>
                </div>
                <p className="mt-3 text-sm text-kasbah-700">
                  Hors vol international. Formule solo/duo à préciser
                  ultérieurement.
                </p>
              </div>
              <a
                href="#contact"
                className="mt-8 inline-flex items-center justify-center rounded-full bg-kasbah-900 px-6 py-3.5 text-sm font-semibold text-sable-50 shadow-lg shadow-kasbah-900/25 transition-all hover:bg-kasbah-800"
              >
                Réserver votre place
              </a>
            </div>

            {/* Inclusions */}
            <div className="md:col-span-3 grid gap-6 sm:grid-cols-2">
              <div className="rounded-2xl border border-ocre-300/50 bg-white/70 p-6">
                <h3 className="mb-4 font-serif text-lg font-semibold text-kasbah-900">
                  Ce qui est inclus
                </h3>
                <ul className="space-y-3">
                  {INCLUDED.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-kasbah-700"
                    >
                      <Check
                        className="mt-0.5 h-4 w-4 shrink-0 text-brand-600"
                        strokeWidth={2}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-ocre-300/50 bg-white/70 p-6">
                <h3 className="mb-4 font-serif text-lg font-semibold text-kasbah-900">
                  Ce qui n’est pas inclus
                </h3>
                <ul className="space-y-3">
                  {NOT_INCLUDED.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-kasbah-600"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-kasbah-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
