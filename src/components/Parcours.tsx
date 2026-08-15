import { useReveal } from '@/hooks/useReveal';

type Difficulty =
  | 'Récupération/Accueil'
  | 'Facile/Dérécupération'
  | 'Modéré'
  | 'Soutenu'
  | 'Exigeant'
  | 'Très Exigeant';

interface Terrain {
  piste: number;
  monotrace: number;
  goudron: number;
}

interface Journee {
  jour: string;
  titre: string;
  description: string;
  distance: number;
  dplus: number;
  difficulte: Difficulty;
  terrain: Terrain | null;
}

const JOURNEES: Journee[] = [
  {
    jour: 'Jour 1',
    titre: 'Arrivée à Marrakech',
    description:
      "Accueil à l'aéroport de Marrakech et transfert à l'hôtel Tempoo. Prise en main des vélos, brief technique sur le séjour et nuit à l'hôtel.",
    distance: 0,
    dplus: 0,
    difficulte: 'Récupération/Accueil',
    terrain: null,
  },
  {
    jour: 'Jour 2',
    titre: 'Haut Atlas – Aït Benhaddou',
    description:
      "Transfert sur le versant sud du Haut Atlas. Matinée gravel de 20 km descendant jusqu'à la kasbah de Telouët (1850 m d'altitude). Après le déjeuner, reprise de la piste sur 45 km à travers les reliefs montagneux pour rejoindre le village d'Aït Benhaddou (1330 m), classé à l'UNESCO. Nuit chez Brahim.",
    distance: 65,
    dplus: 680,
    difficulte: 'Modéré',
    terrain: { piste: 70, goudron: 20, monotrace: 10 },
  },
  {
    jour: 'Jour 3',
    titre: 'Aït Benhaddou – Vallée du Drâa',
    description:
      "Départ le matin sur 24 km de piste roulante. Transfert véhicule vers Aït Saoun pour le pique-nique. L'après-midi, 50 km de gravel contournant le majestueux Djebel Kissane le long de la vallée du Drâa. Arrivée et nuit à l'hôtel avec piscine La Fraîcheur du Drâa.",
    distance: 74,
    dplus: 600,
    difficulte: 'Modéré',
    terrain: { piste: 68, monotrace: 20, goudron: 12 },
  },
  {
    jour: 'Jour 4',
    titre: 'Vallée du Drâa – Djebel Saghro',
    description:
      "Transfert matinal (80 km) jusqu'après Tazzarine. Immersion au cœur du massif pré-sahérien du Djebel Saghro avec 40 km de gravel à travers des paysages minéraux spectaculaires. Pause déjeuner à Alnif, suivie de 40 km supplémentaires sur les pistes volcaniques du Saghro. Nuit au gîte La Bergerie Nomade.",
    distance: 80,
    dplus: 1250,
    difficulte: 'Exigeant',
    terrain: { piste: 85, monotrace: 10, goudron: 5 },
  },
  {
    jour: 'Jour 5',
    titre: 'La Bergerie – Vallée des Roses',
    description:
      "Matinée de 45 km en montée vers le col d'Iknioun. Déjeuner à Iknioun avant un transfert vers Boumalne Dadès. 20 km de gravel l'après-midi pour s'enfoncer dans la superbe Vallée des Roses jusqu'à Bou Taghrar (1550 m). Nuit à la Kasbah Mont M'goun.",
    distance: 65,
    dplus: 1650,
    difficulte: 'Très Exigeant',
    terrain: { piste: 87, goudron: 8, monotrace: 5 },
  },
  {
    jour: 'Jour 6',
    titre: 'Vallée des Roses – Basse vallée du Dadès (Skoura)',
    description:
      "45 km de piste le matin en direction d'Imi n'Olaoun à travers les gorges et villages en pisé. Pique-nique champêtre, puis continuation en gravel (50 km max) en descendant vers les portes de la palmeraie de Skoura. Nuit à la Kasbah el Mehdaoui.",
    distance: 95,
    dplus: 750,
    difficulte: 'Soutenu',
    terrain: { piste: 82, goudron: 10, monotrace: 8 },
  },
  {
    jour: 'Jour 7',
    titre: 'Palmeraie de Skoura – Marrakech',
    description:
      "Une boucle matinale de 30 km très agréable au cœur des pistes d'irrigation et sous les palmiers de Skoura. Déjeuner au col du Tizi n'Tichka lors du transfert retour vers Marrakech. Installation et nuit à l'hôtel Tempoo.",
    distance: 30,
    dplus: 290,
    difficulte: 'Facile/Dérécupération',
    terrain: { piste: 75, monotrace: 15, goudron: 10 },
  },
  {
    jour: 'Jour 8',
    titre: 'Fin du séjour',
    description: "Transfert à l'aéroport de Marrakech et retour.",
    distance: 0,
    dplus: 0,
    difficulte: 'Récupération/Accueil',
    terrain: null,
  },
];

const DIFFICULTY_CONFIG: Record<
  Difficulty,
  { dot: string; bg: string; label: string }
> = {
  'Récupération/Accueil': {
    dot: '#9E9E9E',
    bg: 'rgba(158,158,158,0.13)',
    label: 'Récupération',
  },
  'Facile/Dérécupération': {
    dot: '#4C9A5B',
    bg: 'rgba(76,154,91,0.13)',
    label: 'Facile',
  },
  'Modéré': {
    dot: '#D9A441',
    bg: 'rgba(217,164,65,0.13)',
    label: 'Modéré',
  },
  'Soutenu': {
    dot: '#E07B3A',
    bg: 'rgba(224,123,58,0.13)',
    label: 'Soutenu',
  },
  'Exigeant': {
    dot: '#C1502E',
    bg: 'rgba(193,80,46,0.13)',
    label: 'Exigeant',
  },
  'Très Exigeant': {
    dot: '#8C2F1F',
    bg: 'rgba(140,47,31,0.13)',
    label: 'Très Exigeant',
  },
};

const TERRAIN_COLORS = {
  piste: '#A67C52',
  monotrace: '#2E7D32',
  goudron: '#424242',
};

function DifficultyBadge({ difficulty }: { difficulty: Difficulty }) {
  const config = DIFFICULTY_CONFIG[difficulty];
  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-bold"
      style={{ backgroundColor: config.bg, color: config.dot }}
    >
      <span
        className="h-2 w-2 shrink-0 rounded-full"
        style={{ backgroundColor: config.dot }}
      />
      Difficulté : {config.label}
    </span>
  );
}

function TerrainBar({ terrain }: { terrain: Terrain }) {
  const [ref, visible] = useReveal<HTMLDivElement>(0.3);
  const segments = [
    { key: 'piste', label: 'Piste', pct: terrain.piste },
    { key: 'monotrace', label: 'Monotrace', pct: terrain.monotrace },
    { key: 'goudron', label: 'Goudron', pct: terrain.goudron },
  ];

  return (
    <div ref={ref} className="mt-4">
      <div className="flex h-2.5 w-full overflow-hidden rounded-full bg-kasbah-100">
        {segments.map((seg, i) => (
          <div
            key={seg.key}
            className="h-full transition-all duration-1000 ease-out"
            style={{
              backgroundColor: TERRAIN_COLORS[seg.key as keyof typeof TERRAIN_COLORS],
              width: visible ? `${seg.pct}%` : '0%',
              transitionDelay: visible ? `${200 + i * 150}ms` : '0ms',
              borderTopLeftRadius: i === 0 ? '9999px' : 0,
              borderBottomLeftRadius: i === 0 ? '9999px' : 0,
              borderTopRightRadius: i === segments.length - 1 ? '9999px' : 0,
              borderBottomRightRadius: i === segments.length - 1 ? '9999px' : 0,
            }}
          />
        ))}
      </div>
      <div className="mt-2.5 flex flex-wrap items-center gap-x-5 gap-y-1.5 text-xs text-kasbah-500">
        {segments.map((seg) => (
          <span key={seg.key} className="inline-flex items-center gap-1.5">
            <span
              className="h-2.5 w-2.5 rounded-sm"
              style={{
                backgroundColor:
                  TERRAIN_COLORS[seg.key as keyof typeof TERRAIN_COLORS],
              }}
            />
            <span className="font-medium">{seg.label}</span> {seg.pct}%
          </span>
        ))}
      </div>
    </div>
  );
}

function JourneeCard({ journee, index }: { journee: Journee; index: number }) {
  const [ref, visible] = useReveal<HTMLDivElement>();
  const isRest = journee.terrain === null;

  return (
    <div
      ref={ref}
      className={`flex flex-col rounded-2xl border border-kasbah-200/60 bg-white/70 p-6 shadow-sm transition-all duration-700 hover:-translate-y-1 hover:border-brand-400/50 hover:shadow-xl hover:shadow-ocre-300/30 sm:p-7 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {/* Badges */}
      <div className="flex flex-wrap items-center gap-2.5">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-sable-200 px-3 py-1.5 text-xs font-bold text-kasbah-800">
          <span>🚴</span>
          Distance : {journee.distance} km
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-sable-200 px-3 py-1.5 text-xs font-bold text-kasbah-800">
          <span>⛰️</span>
          Dénivelé : +{journee.dplus} m
        </span>
        <DifficultyBadge difficulty={journee.difficulte} />
      </div>

      {/* Titre */}
      <div className="mt-4 flex items-baseline gap-3">
        <span className="font-serif text-sm font-bold uppercase tracking-[0.15em] text-brand-600">
          {journee.jour}
        </span>
      </div>
      <h3 className="mt-1 font-serif text-xl font-semibold text-kasbah-900">
        {journee.titre}
      </h3>

      {/* Description */}
      <p className="mt-3 text-sm leading-relaxed text-kasbah-600">
        {journee.description}
      </p>

      {/* Barre terrain ou mention transfert */}
      {journee.terrain ? (
        <TerrainBar terrain={journee.terrain} />
      ) : (
        <p className="mt-4 text-xs font-medium italic text-kasbah-400">
          Jour de transfert
        </p>
      )}
    </div>
  );
}

export function Parcours() {
  return (
    <section id="programme" className="bg-sable-100 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-brand-600">
            Le programme
          </p>
          <h2 className="font-serif text-4xl font-semibold text-kasbah-900 md:text-5xl">
            Traverser le Sud Marocain
          </h2>
          <p className="mt-4 text-base leading-relaxed text-kasbah-600">
            8 jours d'aventure, 6 étapes à vélo et 409 km de pistes entre
            montagnes, vallées et palmeraies.
          </p>
        </div>

        <div className="mt-14 grid items-start gap-6 lg:grid-cols-2">
          {JOURNEES.map((j, i) => (
            <JourneeCard key={j.jour} journee={j} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
