import type { TimelineItemType } from "@/components/timeline"

export const FRANCE_INTRO = {
  title: "Introduction",
  image: "/carte-de-la-france-illustr-e.jpg",
  imageAlt: "Carte illustrée de la France avec repères historiques",
  paragraphs: [
    "L’histoire de la France est l’une des plus riches et influentes d’Europe et du monde. Depuis l’époque gauloise jusqu’à l’ère contemporaine, la France a été le théâtre de transformations politiques, sociales, culturelles et intellectuelles majeures.",
    "Elle a vu naître des dynasties royales puissantes, des réformes religieuses, des mouvements philosophiques et artistiques qui ont marqué le monde, et des révolutions qui ont inspiré d’autres nations à revendiquer liberté et égalité. Son rôle mondial s’est étendu à travers les explorations, la colonisation, les guerres mondiales et sa participation active à la diplomatie et aux organisations internationales modernes.",
  ],
} as const

export const FRANCE_CREDITS = {
  group: "LE GROUPE 4",
  members: [
    { name: "Raiyan Shikoh", id: "431" },
    { name: "Ganesh", id: "383" },
    { name: "Vinesh", id: "401" },
    { name: "Vishnu", id: "412" },
    { name: "Himanish", id: "411" },
  ],
} as const

export const FRANCE_TIMELINE: TimelineItemType[] = [
  {
    id: "medieval",
    title: "France ancienne et médiévale",
    dates: "500–1500",
    image: "/cath-drale-gothique-notre-dame-de-paris.jpg",
    imageAlt: "Cathédrale gothique évoquant l’art médiéval en France",
    paragraphs: [
      "Après la chute de Rome, Clovis unifie les Francs et se convertit au christianisme, liant durablement trône et Église.",
      "Carolingiens : Pépin le Bref, puis Charlemagne couronné en 800, impulsent la renaissance carolingienne (écoles, arts).",
      "Féodalité, essor des cathédrales gothiques, des universités, et littérature médiévale.",
      "Guerre de Cent Ans : Jeanne d’Arc galvanise le peuple et contribue à la libération du territoire.",
    ],
  },
  {
    id: "renaissance",
    title: "Renaissance et France moderne",
    dates: "1500–1700",
    image: "/ch-teau-de-la-renaissance-en-france.jpg",
    imageAlt: "Château de la Renaissance symbolisant l’essor artistique",
    paragraphs: [
      "François Ier favorise les arts et attire Léonard de Vinci ; renouveau artistique et intellectuel.",
      "Guerres de Religion entre catholiques et protestants, massacre de la Saint-Barthélemy (1572).",
      "Henri IV apaise le pays avec l’édit de Nantes ; Louis XIV incarne l’absolutisme, Versailles rayonne.",
      "Expansion coloniale en Amérique du Nord, Afrique et Asie.",
    ],
  },
  {
    id: "revolution",
    title: "Révolution française et ère napoléonienne",
    dates: "1789–1815",
    image: "/prise-de-la-bastille-1789-peinture.jpg",
    imageAlt: "Interprétation de la prise de la Bastille en 1789",
    paragraphs: [
      "1789 : États généraux, prise de la Bastille, fin de l’Ancien Régime, Déclaration des droits de l’homme et du citoyen.",
      "République, Terreur, recompositions politiques.",
      "Napoléon : coup d’État (1799), empereur (1804), Code civil, réformes administratives et éducatives.",
      "Conquêtes et redécoupages de l’Europe, défaite à Waterloo (1815).",
    ],
  },
  {
    id: "xix",
    title: "La France au XIXe siècle",
    dates: "1815–1914",
    image: "/paris-haussmann-xixe-si-cle.jpg",
    imageAlt: "Boulevards parisiens d’Haussmann au XIXe siècle",
    paragraphs: [
      "Restauration, monarchie de Juillet, Deuxième République ; révolutions de 1830 et 1848.",
      "Second Empire (Napoléon III) : Haussmann modernise Paris, industrialisation, expansion coloniale.",
      "Troisième République : laïcité, réformes éducatives ; essor scientifique et culturel (Pasteur, Curie, Hugo, Zola, Monet, Renoir).",
    ],
  },
  {
    id: "world-wars",
    title: "Guerres mondiales",
    dates: "1914–1945",
    image: "/monument-aux-morts-premi-re-guerre-mondiale.jpg",
    imageAlt: "Monument aux morts évoquant la Première Guerre mondiale",
    paragraphs: [
      "Première Guerre mondiale : Verdun, Somme ; lourdes pertes et traumatisme durable.",
      "Seconde Guerre mondiale : défaite de 1940, occupation, Vichy ; Résistance, De Gaulle, Libération (1944).",
    ],
  },
  {
    id: "modern",
    title: "France contemporaine",
    dates: "1945–aujourd’hui",
    image: "/h-tel-des-invalides-et-drapeau-fran-ais.jpg",
    imageAlt: "Drapeau français flottant devant un monument parisien",
    paragraphs: [
      "Cinquième République (1958) : présidence forte sous De Gaulle.",
      "Décolonisation (Indochine, Algérie) ; recomposition des relations internationales.",
      "Mai 1968 : mouvements étudiants et ouvriers ; transformations sociales et culturelles.",
      "Construction européenne et rôle mondial en diplomatie, science, culture et climat.",
    ],
  },
  {
    id: "contrib",
    title: "Influence culturelle et intellectuelle",
    image: "/galerie-d-art-fran-ais-impressionnisme.jpg",
    imageAlt: "Salle d’un musée présentant des œuvres impressionnistes",
    paragraphs: [
      "Philosophie : Descartes, Montesquieu, Rousseau, Sartre, Simone de Beauvoir.",
      "Littérature : Molière, Hugo, Zola, Camus.",
      "Arts : Impressionnisme, cubisme ; architecture gothique et moderne.",
      "Sciences : Pasteur, Curie ; aéronautique et espace (Airbus, Ariane).",
      "Langue et culture : le français dans 29 pays ; gastronomie classée à l’UNESCO.",
    ],
  },
  {
    id: "conclusion",
    title: "Conclusion",
    image: "/panorama-de-paris-au-cr-puscule.jpg",
    imageAlt: "Panorama de Paris au crépuscule",
    paragraphs: [
      "L’histoire de la France est celle de transformations successives—royaumes, républiques, révolutions—qui ont marqué la culture, la science et la politique mondiales.",
    ],
  },
] satisfies TimelineItemType[]
