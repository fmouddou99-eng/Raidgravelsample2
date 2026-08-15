import { Bike, Wrench, ShieldCheck, Mail } from 'lucide-react';
import { Placeholder } from './Placeholder';
import { useReveal } from '@/hooks/useReveal';

const SPECS = [
  {
    icon: ShieldCheck,
    label: 'Gravel ou VTT semi-rigide XC',
    note: 'Uniquement',
  },
  {
    icon: ShieldCheck,
    label: 'Montage Tubeless (anti-crevaison)',
    note: 'Fortement recommandé',
  },
  {
    icon: ShieldCheck,
    label: 'Freins à disque',
    note: 'Indispensables',
  },
  {
    icon: Wrench,
    label: 'Pédales automatiques & selle personnelles',
    note: 'Bienvenues',
  },
];

export function Velo() {
  const [ref, visible] = useReveal<HTMLDivElement>();

  return (
    <section id="velo" className="gradient-orange-warm py-20 md:py-28">
      <div className="berber-filigree absolute inset-0 opacity-60" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Visuel */}
          <div className="order-2 lg:order-1">
            <Placeholder
              icon={Bike}
              label="Gravel sur piste — visuel à venir"
              variant="peach"
              className="aspect-[4/3] w-full rounded-2xl shadow-lg shadow-brand-700/15"
              iconClassName="h-28 w-28 opacity-40"
            />
          </div>

          {/* Texte */}
          <div
            ref={ref}
            className={`order-1 lg:order-2 transition-all duration-700 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-kasbah-800">
              Équipement
            </p>
            <h2 className="font-serif text-4xl font-semibold text-kasbah-900 md:text-5xl">
              Le matériel adapté au parcours
            </h2>
            <p className="mt-5 text-base leading-relaxed text-kasbah-700">
              Ce raid se réalise exclusivement en Gravel ou en VTT léger
              semi-rigide (musculaire). Nous ne disposons pas de flotte de
              location en propre, mais nous pouvons réserver un vélo auprès de
              nos loueurs partenaires à Marrakech et assurer sa livraison sur
              place.
            </p>

            <ul className="mt-7 space-y-3">
              {SPECS.map((spec) => (
                <li
                  key={spec.label}
                  className="flex items-center justify-between rounded-lg border border-white/50 bg-white/60 px-4 py-3 backdrop-blur-sm"
                >
                  <span className="flex items-center gap-3 text-sm font-medium text-kasbah-800">
                    <spec.icon
                      className="h-4 w-4 text-brand-600"
                      strokeWidth={1.5}
                    />
                    {spec.label}
                  </span>
                  <span className="text-xs uppercase tracking-wider text-kasbah-600">
                    {spec.note}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href="?sujet=Demande%20de%20mise%20en%20relation%20velo#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-kasbah-900 px-6 py-3 text-sm font-semibold text-sable-50 shadow-lg shadow-kasbah-900/25 transition-all hover:bg-kasbah-800"
              >
                <Mail className="h-4 w-4" />
                Demander une mise en relation vélo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
