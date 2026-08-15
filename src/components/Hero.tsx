import { Mountain, Compass, ArrowDown } from 'lucide-react';
import { Placeholder } from './Placeholder';

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen overflow-hidden">
      {/* Fond dégradé multi-paliers — orange chaud → terracotta → sable clair */}
      <div className="absolute inset-0 gradient-hero">
        <Placeholder
          icon={Mountain}
          label="Pistes du Sud marocain — visuel à venir"
          variant="peach"
          className="absolute inset-0 h-full w-full animate-slow-pan opacity-30"
          iconClassName="h-40 w-40 md:h-56 md:w-56 opacity-20"
        />
      </div>

      {/* Contenu */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-end px-4 pb-20 pt-32 sm:px-6 lg:px-8 md:pb-28">
        <div className="max-w-3xl">
          <p
            className="mb-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.35em] text-kasbah-900/80 animate-fade-rise"
          >
            <Compass className="h-4 w-4" strokeWidth={1.5} />
            Saïd Mountain Bike · Ouarzazate
          </p>
          <h1
            className="font-serif text-5xl font-semibold leading-[1.05] text-kasbah-900 text-shadow-warm animate-fade-rise sm:text-6xl md:text-7xl"
            style={{ animationDelay: '0.1s' }}
          >
            Raid Gravel dans le Sud Marocain
          </h1>
          <p
            className="mt-5 max-w-2xl text-lg font-medium leading-relaxed text-kasbah-800 animate-fade-rise sm:text-xl"
            style={{ animationDelay: '0.25s' }}
          >
            Du Haut-Atlas au Djebel Saghro : 8 jours d’itinérance entre pistes
            caravanières, oasis et cols minéraux.
          </p>
          <span
            className="mt-4 block h-px w-16 bg-terracotta-500/40 animate-fade-rise"
            style={{ animationDelay: '0.35s' }}
          />
          <p
            className="mt-3 max-w-xl text-sm font-light italic leading-relaxed text-terracotta-700 animate-fade-rise"
            style={{ animationDelay: '0.4s' }}
          >
            Encadré par Saïd et son équipe locale basés à Ouarzazate. Une
            aventure authentique au cœur du Maroc berbère, guidée par ceux qui
            arpentent ces pistes depuis plus de 25 ans.
          </p>
          <div
            className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center animate-fade-rise"
            style={{ animationDelay: '0.55s' }}
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-brand-500 to-terracotta-500 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-brand-600/30 transition-all duration-300 hover:shadow-xl hover:shadow-brand-500/40"
            >
              Réserver votre place
            </a>
            <a
              href="#programme"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-brand-500/40 bg-white/30 px-8 py-4 text-base font-medium text-brand-700 backdrop-blur-sm transition-all duration-300 hover:border-brand-500/70 hover:bg-white/50"
            >
              Découvrir le parcours
              <ArrowDown className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Indicateur de défilement */}
      <div className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 animate-float-soft md:block">
        <ArrowDown className="h-5 w-5 text-kasbah-700/50" strokeWidth={1.25} />
      </div>
    </section>
  );
}
