import { Compass, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-ocre-100 py-14 text-kasbah-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Marque */}
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-500/50 bg-brand-500/10 text-brand-600">
                <Compass className="h-5 w-5" strokeWidth={1.25} />
              </span>
              <div className="leading-none">
                <p className="font-serif text-lg font-semibold text-kasbah-900">
                  Raid Gravel Maroc
                </p>
                <p className="text-[10px] uppercase tracking-[0.22em] text-brand-600">
                  Saïd Mountain Bike
                </p>
              </div>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-kasbah-600">
              La Piste du Sud — expédition gravel du Haut-Atlas au Djebel
              Saghro, guidée par un expert du Sud marocain depuis 25 ans.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-kasbah-600">
              Contact
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                <span>
                  Saïd Mountain Bike
                  <br />
                  Ouarzazate, Maroc
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-brand-600" />
                <a
                  href="mailto:contact@saidmountainbike.com"
                  className="transition-colors hover:text-brand-600"
                >
                  contact@saidmountainbike.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-brand-600" />
                <span>Sur demande</span>
              </li>
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-kasbah-600">
              Le raid
            </h3>
            <ul className="grid grid-cols-2 gap-2 text-sm">
              {[
                ['Concept', '#concept'],
                ['Programme', '#programme'],
                ['Vélo', '#velo'],
                ['Tarifs', '#tarifs'],
                ['FAQ', '#faq'],
                ['Contact', '#contact'],
              ].map(([label, href]) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-kasbah-600 transition-colors hover:text-brand-600"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-ocre-300/50 pt-6 text-xs text-kasbah-500 sm:flex-row">
          <p>
            © {new Date().getFullYear()} Saïd Mountain Bike — Raid Gravel Maroc.
            Tous droits réservés.
          </p>
          <p>Ouarzazate · Sud marocain</p>
        </div>
      </div>
    </footer>
  );
}
