import { Mountain, Compass, Bike, Tent, Sun, Wind, Camera } from 'lucide-react';
import { Placeholder } from './Placeholder';
import { useReveal } from '@/hooks/useReveal';
import type { LucideIcon } from 'lucide-react';
import type { Variant } from './Placeholder';

interface Shot {
  icon: LucideIcon;
  label: string;
  variant: Variant;
  span: string;
}

const SHOTS: Shot[] = [
  { icon: Mountain, label: 'Pistes du Haut-Atlas', variant: 'warm', span: 'sm:col-span-2 sm:row-span-2' },
  { icon: Compass, label: 'Caravanière vers le Drâa', variant: 'dune', span: '' },
  { icon: Bike, label: 'Gravel sur piste minérale', variant: 'orange', span: '' },
  { icon: Tent, label: 'Gîte La Bergerie, Saghro', variant: 'peach', span: '' },
  { icon: Sun, label: 'Lever de jour, vallée des Roses', variant: 'warm', span: '' },
  { icon: Wind, label: 'Vent du Saghro', variant: 'dune', span: 'sm:col-span-2' },
];

export function Galerie() {
  const [ref, visible] = useReveal<HTMLDivElement>();

  return (
    <section id="galerie" className="bg-sable-50 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-brand-600">
            Galerie
          </p>
          <h2 className="font-serif text-4xl font-semibold text-kasbah-900 md:text-5xl">
            Le Sud en images
          </h2>
          <p className="mt-4 text-base leading-relaxed text-kasbah-600">
            Visuels provisoires. Les photos du raid viendront remplacer ces
            encarts, au même format.
          </p>
        </div>

        <div
          ref={ref}
          className={`mt-14 grid auto-rows-[180px] grid-cols-2 gap-4 transition-all duration-700 sm:auto-rows-[240px] sm:grid-cols-4 ${
            visible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {SHOTS.map((shot, i) => (
            <div
              key={shot.label}
              className={`group relative overflow-hidden rounded-2xl ${shot.span}`}
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <Placeholder
                icon={shot.icon}
                label={shot.label}
                variant={shot.variant}
                className="h-full w-full transition-transform duration-700 group-hover:scale-105"
                iconClassName="h-12 w-12 opacity-50 transition-opacity duration-500 group-hover:opacity-70"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-kasbah-900/60 to-transparent p-4">
                <p className="flex items-center gap-2 text-sm font-medium text-sable-50">
                  <Camera className="h-3.5 w-3.5 text-brand-300" strokeWidth={1.25} />
                  {shot.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
