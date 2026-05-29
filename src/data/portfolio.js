export const projects = [
  {
    id: "horror-ue5",
    title: "Projet Horreur",
    subtitle: "Jeu personnel — en cours",
    engine: "UE5",
    tags: ["UE5", "C++", "IA", "Horror"],
    category: "UE5",
    year: "2024–présent",
    description:
      "Jeu d'horreur solo développé sur Unreal Engine 5. Le joueur est poursuivi par des mannequins animés qui s'activent dans l'obscurité. Système de détection par la lumière, IA comportementale, gestion de la tension sonore.",
    tech: ["Unreal Engine 5", "C++", "Blueprints", "Behavior Trees", "AI Perception", "Lumen"],
    highlights: [
      "IA ennemie basée sur Behavior Trees et AI Perception (vision/son)",
      "Système de lumière dynamique Lumen — les ennemis réagissent à l'obscurité",
      "Gestion de l'état de peur : ambiance sonore procédurale, post-process",
      "Level design orienté tension et couloirs étroits",
    ],
    color: "#ff4d00",
  },
  {
    id: "rainbow-ant",
    title: "Gameplay UE5",
    subtitle: "Rainbow Ant Studio",
    engine: "UE5",
    tags: ["UE5", "C++", "Gameplay"],
    category: "UE5",
    year: "2023–2024",
    description:
      "Mission freelance d'un an en tant que Gameplay Programmer sur un jeu d'action-aventure. Développement des mécaniques du personnage, système de natation, météo dynamique et gestion de map interactive.",
    tech: ["Unreal Engine 5", "C++", "Blueprints", "Animation Blueprints", "UE5 Weather"],
    highlights: [
      "Mécaniques de personnage complètes (déplacement, interactions, physique)",
      "Système de natation avec transitions surface/sous-eau et flottabilité",
      "Intégration météo dynamique impactant le gameplay (pluie, brouillard, vent)",
      "Design et scripting d'une map interactive avec zones de déclenchement",
      "Intégration d'animations via State Machines et Blend Spaces",
    ],
    color: "#00d4ff",
  },
  {
    id: "cs-group",
    title: "Simulateur Aéronautique",
    subtitle: "CS Group — Défense",
    engine: "Unity",
    tags: ["Unity", "C#", "Simulation", "Défense"],
    category: "Simulation",
    year: "2023–2025",
    description:
      "Développement sur un simulateur d'appareil aéronautique pour la défense nationale. Environnement contraint, documentation classifiée, collaboration avec experts métiers et ingénieurs système.",
    tech: ["Unity", "C#", "Architecture modulaire", "Temps réel"],
    highlights: [
      "Conception de scénarios interactifs pour simulateurs de vol défense",
      "Architecture logicielle modulaire pour évolutivité et réutilisabilité",
      "Débogage de comportements simulés complexes en environnement contrôlé",
      "Collaboration avec experts domaine dans un cadre réglementé (secret défense)",
      "Lecture et exploitation de documentation technique classifiée",
    ],
    color: "#7b61ff",
  },
  {
    id: "virtual-badass",
    title: "Virtual Badass",
    subtitle: "Projet de fin d'études",
    engine: "Unity",
    tags: ["Unity", "C#", "Game Design"],
    category: "Unity",
    year: "2022–2023",
    description:
      "Boss fight 3D en équipe de 6, réalisé en 1 an pour la dernière année de bachelor. Zone d'apprentissage des mécaniques puis combat de boss pour valider la progression.",
    tech: ["Unity", "C#", "Game Design", "Level Design"],
    highlights: [
      "Développement des systèmes de combat et de progression",
      "Level design de la zone tutoriel et de l'arène boss",
      "Intégration d'animations et de VFX",
      "Gestion de projet en équipe de 6 personnes pendant 1 an",
    ],
    color: "#00d4ff",
  },
];

export const skills = [
  { category: "Moteurs", items: ["Unreal Engine 5", "Unity"] },
  { category: "Langages", items: ["C++", "C#", "Blueprint (UE5)"] },
  { category: "Gameplay", items: ["Character Movement", "AI / Behavior Trees", "Animation Blueprints", "Physics"] },
  { category: "Simulation", items: ["Temps réel", "Architecture modulaire", "Scénarios interactifs"] },
  { category: "Versioning", items: ["Git / GitHub", "Plastic SCM", "Perforce"] },
  { category: "Soft Skills", items: ["Autonomie remote", "Travail sous pression", "Anglais technique"] },
];

export const experience = [
  {
    role: "Technicien Systèmes Embarqués",
    company: "CS Group",
    type: "CDI",
    period: "Sept. 2023 — Nov. 2025",
    domain: "Simulation / Défense",
    color: "#7b61ff",
    desc: "Développement sur simulateur aéronautique pour la défense nationale. Environnement sécurisé, documentation classifiée, architecture modulaire.",
  },
  {
    role: "Gameplay Programmer",
    company: "Rainbow Ant Studio",
    type: "Freelance",
    period: "Déc. 2023 — Sept. 2024",
    domain: "Jeu Vidéo / UE5",
    color: "#00d4ff",
    desc: "Mission freelance sur un jeu d'action-aventure UE5. Systèmes gameplay complets : personnage, natation, météo, map interactive.",
  },
  {
    role: "Bachelor Game Dev",
    company: "E-Artsup",
    type: "Formation",
    period: "2020 — 2023",
    domain: "RNCP Niveau 6",
    color: "#ff4d00",
    desc: "Spécialisation C# / Unity / Game & Level Design. Certification RNCP Niveau 6.",
  },
];
