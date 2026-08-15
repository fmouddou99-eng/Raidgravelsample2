import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface QA {
  q: string;
  a: string;
}

const QUESTIONS: QA[] = [
  {
    q: 'Passeport obligatoire ?',
    a: 'Oui, passeport en cours de validité durant toute la durée du séjour.',
  },
  {
    q: 'Comment se passe l’arrivée ?',
    a: 'Votre guide vous accueille à l’aéroport de Marrakech avec un panneau Saïd Mountain Bike. Un 4×4 équipé d’une galerie pour les vélos vous attend. Vos bagages gravel sont remisés en lieu sûr et vous les retrouvez à votre retour.',
  },
  {
    q: 'Quel type d’hébergement durant le raid ?',
    a: 'Un accueil chaleureux chaque soir : petits hôtels typiques, kasbahs, gîtes de charme.',
  },
  {
    q: 'Puis-je laisser une partie de mes bagages à l’hôtel le premier jour ?',
    a: 'Oui, sans problème.',
  },
  {
    q: 'Fournissez-vous un casque ?',
    a: 'Oui, si vous ne venez pas avec le vôtre.',
  },
  {
    q: 'Puis-je apporter mes pédales automatiques et ma selle ?',
    a: 'Cela va de soi.',
  },
  {
    q: 'Faut-il prévoir un duvet ?',
    a: 'Pour les étapes d’automne/hiver, un duvet léger est recommandé.',
  },
  {
    q: 'Trouve-t-on de l’eau minérale sur le parcours ?',
    a: 'Une épicerie se trouve toujours en début ou en cours d’étape. Comptez environ 10€ pour la semaine — le 4×4 transporte votre eau.',
  },
  {
    q: 'Aurons-nous des collations pendant l’effort ?',
    a: 'On ne trouve pas de barres énergétiques au Maroc — à la place, dattes, figues sèches, amandes, cacahuètes et biscuits secs salés.',
  },
  {
    q: 'En cas de problème, maladie ou accident ?',
    a: 'Votre carte Visa vous offre souvent une excellente assistance, même sans avoir payé le voyage avec cette carte — contactez le numéro d’assistance au dos.',
  },
  {
    q: 'L’assurance voyage est-elle obligatoire ?',
    a: 'Oui, une preuve de couverture est exigée en début de circuit.',
  },
];

function FaqItem({ qa, index }: { qa: QA; index: number }) {
  const [open, setOpen] = useState(index === 0);
  return (
    <div className="overflow-hidden rounded-xl border border-kasbah-200/70 bg-white/70">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-sable-100/60"
        aria-expanded={open}
      >
        <span className="font-serif text-lg font-medium text-kasbah-900">
          {qa.q}
        </span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-brand-500 transition-transform duration-300 ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`grid transition-all duration-400 ${
          open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-5 pb-5 text-sm leading-relaxed text-kasbah-600">
            {qa.a}
          </p>
        </div>
      </div>
    </div>
  );
}

export function FAQ() {
  return (
    <section id="faq" className="bg-sable-50 py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="mb-3 flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-brand-600">
            <HelpCircle className="h-4 w-4" />
            Questions fréquentes
          </p>
          <h2 className="font-serif text-4xl font-semibold text-kasbah-900 md:text-5xl">
            Préparer son raid
          </h2>
        </div>
        <div className="mt-12 space-y-3">
          {QUESTIONS.map((qa, i) => (
            <FaqItem key={qa.q} qa={qa} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
