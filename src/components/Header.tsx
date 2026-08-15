import { useEffect, useState } from 'react';
import { Menu, X, Compass } from 'lucide-react';
import { useScrollSpy } from '@/hooks/useScrollSpy';

const NAV = [
  { id: 'concept', label: 'Concept' },
  { id: 'programme', label: 'Programme' },
  { id: 'velo', label: 'Vélo' },
  { id: 'tarifs', label: 'Tarifs' },
  { id: 'faq', label: 'FAQ' },
  { id: 'contact', label: 'Contact' },
];

const SECTION_IDS = ['hero', ...NAV.map((n) => n.id)];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useScrollSpy(SECTION_IDS, 140);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-sable-50/95 backdrop-blur-md shadow-md shadow-ocre-300/20'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 md:h-20">
        {/* Logo — emplacement remplaçable */}
        <a
          href="#hero"
          className="group flex items-center gap-3"
          aria-label="Raid Gravel Maroc — accueil"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-500/50 bg-brand-500/10 text-brand-600 transition-colors duration-300 group-hover:border-brand-500 group-hover:bg-brand-500 group-hover:text-white md:h-12 md:w-12">
            <Compass className="h-5 w-5 md:h-6 md:w-6" strokeWidth={1.25} />
          </span>
          <span className="flex flex-col leading-none">
            <span
              className={`font-serif text-lg font-semibold tracking-wide transition-colors duration-300 ${
                scrolled ? 'text-kasbah-900' : 'text-kasbah-900'
              } md:text-xl`}
            >
              Raid Gravel Maroc
            </span>
            <span className="text-[10px] uppercase tracking-[0.22em] text-brand-600 md:text-xs">
              Saïd Mountain Bike
            </span>
          </span>
        </a>

        {/* Nav desktop */}
        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`relative px-3 py-2 text-sm font-medium tracking-wide transition-colors duration-300 ${
                active === item.id
                  ? 'text-brand-600'
                  : 'text-kasbah-700 hover:text-brand-600'
              }`}
            >
              {item.label}
              <span
                className={`absolute inset-x-3 -bottom-0.5 h-px bg-brand-500 transition-transform duration-300 ${
                  active === item.id ? 'scale-x-100' : 'scale-x-0'
                }`}
              />
            </a>
          ))}
          <a
            href="#contact"
            className="ml-3 inline-flex items-center rounded-full bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-brand-600/25 transition-all duration-300 hover:bg-brand-400 hover:shadow-brand-500/40"
          >
            Réserver votre place
          </a>
        </nav>

        {/* Burger mobile */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full text-kasbah-800 transition-colors hover:bg-ocre-200/60 lg:hidden"
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Menu mobile */}
      <div
        className={`overflow-hidden bg-sable-50/98 backdrop-blur-md transition-[max-height,opacity] duration-500 lg:hidden ${
          open ? 'max-h-[28rem] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="flex flex-col gap-1 px-4 pb-6 pt-2 sm:px-6">
          {NAV.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setOpen(false)}
              className={`rounded-lg px-4 py-3 text-base font-medium transition-colors ${
                active === item.id
                  ? 'bg-brand-500/15 text-brand-700'
                  : 'text-kasbah-700 hover:bg-ocre-200/50 hover:text-brand-600'
              }`}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex items-center justify-center rounded-full bg-brand-500 px-5 py-3 text-base font-semibold text-white shadow-lg shadow-brand-600/25"
          >
            Réserver votre place
          </a>
        </nav>
      </div>
    </header>
  );
}
