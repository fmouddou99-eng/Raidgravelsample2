import { Milestone, Route, Mountain, Gauge, Car } from 'lucide-react';

const STATS = [
  { icon: Milestone, value: '6', label: 'étapes' },
  { icon: Route, value: '409', unit: 'km', label: 'distance' },
  { icon: Mountain, value: '5220', unit: 'm', label: 'D+' },
  { icon: Gauge, value: '78', unit: '%', label: 'piste' },
  { icon: Car, value: '4×4', label: 'assistance' },
];

export function KeyStats() {
  return (
    <section className="relative gradient-orange py-12 md:py-16">
      <div className="berber-filigree absolute inset-0" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-y-8 sm:grid-cols-3 md:grid-cols-5">
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className="flex flex-col items-center text-center"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <stat.icon
                className="mb-3 h-7 w-7 text-kasbah-800"
                strokeWidth={1.25}
              />
              <div className="flex items-baseline gap-1">
                <span className="font-serif text-4xl font-semibold text-kasbah-900 md:text-5xl">
                  {stat.value}
                </span>
                {stat.unit && (
                  <span className="text-xl font-light text-kasbah-700">
                    {stat.unit}
                  </span>
                )}
              </div>
              <span className="mt-1 text-xs uppercase tracking-[0.18em] text-kasbah-700/80">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
