import { createContext, useContext, useState } from "react";

// Bilingual project data
export const projectsData = {
  fr: {
    "claude-ue5": {
      title: "Agent IA × UE5",
      subtitle: "Claude AI + Unreal Engine 5 — Projet personnel",
      type: "Outil / IA",
      role: "Développeur solo",
      description: "Pipeline bidirectionnel entre Claude AI et Unreal Engine 5 via le Model Context Protocol (MCP). Claude pilote l'éditeur UE5 en temps réel : création de Blueprints, spawn d'actors, construction de levels et développement de systèmes C++ complexes via conversation.",
      highlights: [
        "Bridge MCP bidirectionnel entre Claude Desktop et UE5 via Remote Execution API",
        "Plugin C++ BlueprintAutomation : création de variables, dispatchers, compilation de Blueprints depuis l'extérieur de l'éditeur",
        "LampDetectionComponent C++ natif : détection temps réel d'un ennemi dans le cône lumineux d'une SpotLight (dot product, line trace, sync OuterConeAngle)",
        "Écriture directe dans le Blackboard de l'IA via AAIController depuis le composant C++",
        "Behavior Tree 4 états : Illuminated · Stunned · Chase · Patrol — AISense_Sight",
        "Level design procédural en 3 actes via scripts Python UE5 (géométrie, éclairages, PostProcess, NavMesh, spawn)",
        "100% du code C++, architecture MCP et level design co-développé avec Claude AI",
      ],
      sections: [
        { title: "Infrastructure MCP × UE5", text: "Le bridge MCP permet à Claude Desktop de communiquer avec UE5 en temps réel via l'API Remote Execution. Claude peut manipuler la scène, spawner des actors, créer des Blueprints et reconstruire le NavMesh directement depuis une conversation." },
        { title: "Plugin C++ BlueprintAutomation", text: "Plugin UE5 custom en C++ exposant des fonctions d'automatisation Blueprint à Python : variables, Event Dispatchers, compilation de Blueprints depuis l'extérieur de l'éditeur." },
        { title: "Détection lumière C++ natif", text: "Composant ActorComponent C++ calculant en temps réel si un ennemi est dans le cône d'une SpotLight. Dot product + line trace, sync OuterConeAngle, écriture dans le Blackboard via AAIController." },
        { title: "IA comportementale & Level procédural", text: "Behavior Tree 4 états piloté par l'état lumineux. AIPerception + AISense_Sight, BTTasks custom. Level d'horreur en 3 actes via scripts Python UE5." },
      ],
    },
    "horror-ue5": {
      title: "Projet Horreur", subtitle: "Jeu personnel — en cours", type: "Horreur", role: "Développeur solo",
      description: "Jeu d'horreur solo sur UE5. Le joueur est poursuivi par des mannequins animés qui s'activent dans l'obscurité. Système de détection par la lumière, IA comportementale, gestion de la tension sonore.",
      highlights: ["IA ennemie basée sur Behavior Trees et AI Perception (vision/son)", "Système Lumen — les ennemis réagissent à l'obscurité", "Gestion de l'état de peur : ambiance sonore procédurale, post-process", "Level design orienté tension et couloirs étroits"],
      sections: [],
    },
    "rainbow-ant": {
      title: "Gameplay UE5", subtitle: "Rainbow Ant Studio", type: "Action-Aventure", role: "Gameplay Programmer",
      description: "Mission freelance d'un an comme Gameplay Programmer sur un jeu d'action-aventure. Mécaniques du personnage, natation, météo dynamique, map interactive.",
      highlights: ["Mécaniques de personnage complètes (déplacement, interactions, physique)", "Système de natation avec transitions surface/sous-eau", "Intégration météo dynamique (pluie, brouillard, vent)", "Map interactive avec zones de déclenchement", "Animations via State Machines et Blend Spaces"],
      sections: [],
    },
    "cs-group": {
      title: "Simulateur Aéronautique", subtitle: "CS Group — Défense", type: "Simulation Défense", role: "Technicien Systèmes Embarqués",
      description: "Développement sur un simulateur d'appareil aéronautique (Inscape VTS) pour la défense nationale. Environnement contraint, documentation classifiée, collaboration avec experts métiers.",
      highlights: ["Conception de scénarios interactifs pour simulateurs de vol défense", "Architecture logicielle modulaire pour évolutivité et réutilisabilité", "Débogage de comportements simulés complexes en environnement contrôlé", "Collaboration avec experts domaine dans un cadre réglementé (défense)"],
      sections: [],
    },
    "time-restore": {
      title: "Time Restore", subtitle: "Projet personnel — UE4 → UE5", type: "RPG", role: "Développeur / Game Designer",
      description: "RPG à la 3e personne dans un monde fantaisiste où le temps s'est arrêté. Le joueur doit découvrir pourquoi et remettre le temps en marche pour sauver les habitants.",
      highlights: ["Conception d'une île fantaisiste avec biomes variés (lac, village, désert...)", "Système de quêtes avec journal d'objectifs et progression narrative", "Migration du projet UE4 vers UE5", "Level design de la map principale", "Système d'interaction PNJ"],
      sections: [
        { title: "Monde & Biomes", text: "L'île est découpée en plusieurs biomes : plaines, swamp, désert, cavernes, montagnes enneigées et île du volcan. Chaque zone a ses propres assets, ennemis et quêtes." },
        { title: "Gameplay & Systèmes", text: "Système de quêtes avec journal d'objectifs, interactions PNJ, crafting et combat à la 3e personne. Le jeu est en pré-alpha." },
      ],
    },
    "virtual-badass": {
      title: "Virtual Badass", subtitle: "Projet de fin d'études — E-Artsup", type: "Boss Fight", role: "Développeur / Intégrateur / Game Designer",
      description: "Boss fight 3D en équipe de 6 sur 1 an pour la dernière année de bachelor. Le joueur incarne un mercenaire en armure futuriste qui affronte le boss.",
      highlights: ["Développement des systèmes de combat du personnage et du boss", "Level design de la zone tutoriel et de l'arène de boss", "Intégration d'animations et de VFX", "Gestion de projet en équipe de 6 sur 1 an"],
      sections: [
        { title: "Le Boss", text: "Le boss est un robot steampunk imposant. Il possède plusieurs phases d'attaque. L'arène force le joueur à utiliser toutes les mécaniques apprises." },
        { title: "Personnages", text: "Le joueur incarne un mercenaire en armure futuriste avec Buck son compagnon robot. Les deux modèles ont été intégrés avec leurs animations complètes." },
      ],
    },
    "sheeplone": {
      title: "Sheeplone", subtitle: "Projet de fin d'année — 2 mois", type: "FPS / Survie", role: "Développeur / Game Designer",
      description: "Jeu FPS dans un monde fantaisiste. On incarne un magicien aventurier propulsé dans un monde par une entité maléfique, qui doit trouver le moyen de rentrer chez lui.",
      highlights: ["Développement du controller FPS et des mécaniques de magie", "IA ennemie : Mouton de Feu et Golem Gardien avec comportements distincts", "Système de quêtes avec journal d'objectifs", "Level design open-world fantaisiste"],
      sections: [
        { title: "Monde & Environnement", text: "Un monde fantaisiste ouvert avec plusieurs biomes. Le level design guide le joueur à travers les zones de quêtes." },
        { title: "Ennemis & IA", text: "Deux types d'ennemis : le Mouton de Feu (rapide, attaque directe) et le Golem Gardien (lent, puissant, zone de défense)." },
      ],
    },
    "aigyptos": {
      title: "Aigyptos", subtitle: "Ludum Dare 50 — 4 jours", type: "Survie / Stealth", role: "Développeur solo",
      description: 'Survival stealth 3D réalisé en 4 jours pour la Ludum Dare 50, thème "Retarder l\'inévitable". Une momie s\'échappe de sa pyramide sans se faire repérer.',
      highlights: ["Développement solo complet en 4 jours (game jam)", "IA de détection des archéologues (vision en cône, alerte, poursuite)", "Level design de la pyramide avec multiples chemins", "Concept art du personnage Aigys"],
      sections: [
        { title: "Level Design", text: "La pyramide est un labyrinthe multi-niveaux avec des gardes patrouillant des couloirs. Le joueur utilise les angles morts pour se faufiler jusqu'à la sortie." },
        { title: "Personnage & Direction Artistique", text: "Aigys est une momie égyptienne stylisée. Le concept art a guidé le modèle 3D pour rester cohérent avec l'univers graphique." },
      ],
    },
    "casse-brique": {
      title: "Casse-Brique", subtitle: "Défi école — 2 semaines", type: "Jeu Casual", role: "Développeur",
      description: "Casse-brique 2D en 10 niveaux. Le joueur incarne un chevalier détruisant des monstres pour sauver sa princesse. Réalisé en 2 semaines.",
      highlights: ["IA ennemie et comportements des blocs", "Calcul de trajectoire de balle avec rebonds physiques", "Blocs spéciaux : Bloc Explosif, Bloc Renforcé", "10 niveaux avec progression de difficulté"],
      sections: [
        { title: "Niveaux", text: "10 niveaux avec progression de difficulté croissante. Les premiers servent de tutoriel, les derniers introduisent des combinaisons de blocs spéciaux." },
        { title: "Blocs & IA", text: "Trois types de blocs : standard, Bloc Armure (résistant) et Bloc Explosif (détruit les adjacents). Chaque bloc a son IA de réaction." },
      ],
    },
  },
  en: {
    "claude-ue5": {
      title: "AI Agent × UE5",
      subtitle: "Claude AI + Unreal Engine 5 — Personal project",
      type: "Tool / AI",
      role: "Solo developer",
      description: "Bidirectional pipeline between Claude AI and Unreal Engine 5 via the Model Context Protocol (MCP). Claude drives the UE5 editor in real time: Blueprint creation, actor spawning, level building and complex C++ system development via conversation.",
      highlights: [
        "Bidirectional MCP bridge between Claude Desktop and UE5 via Remote Execution API",
        "C++ BlueprintAutomation plugin: variable creation, dispatchers, Blueprint compilation from outside the editor",
        "Native C++ LampDetectionComponent: real-time detection of an AI enemy inside a SpotLight cone (dot product, line trace, OuterConeAngle sync)",
        "Direct Blackboard writes via AAIController from the C++ component",
        "4-state Behavior Tree: Illuminated · Stunned · Chase · Patrol — AISense_Sight",
        "Procedural horror level in 3 acts via Python UE5 scripts (geometry, lighting, PostProcess, NavMesh, spawning)",
        "100% of C++ code, MCP architecture and level design co-developed with Claude AI",
      ],
      sections: [
        { title: "MCP × UE5 Infrastructure", text: "The MCP bridge lets Claude Desktop communicate with UE5 in real time via the Remote Execution API. Claude can manipulate the scene, spawn actors, create Blueprints and rebuild the NavMesh — all from a conversation." },
        { title: "C++ BlueprintAutomation Plugin", text: "Custom UE5 C++ plugin exposing Blueprint automation functions to Python: variables, Event Dispatchers, Blueprint compilation from outside the editor." },
        { title: "Native C++ Light Detection", text: "ActorComponent calculating in real time whether an AI enemy is inside a SpotLight cone. Dot product + line trace, OuterConeAngle sync, direct Blackboard writes via AAIController." },
        { title: "Behaviour AI & Procedural Level", text: "4-state Behavior Tree driven by light state. AIPerception + AISense_Sight, custom Blueprint BTTasks. Horror level built in 3 acts via Python UE5 scripts." },
      ],
    },
    "horror-ue5": {
      title: "Horror Project", subtitle: "Personal project — in progress", type: "Horror", role: "Solo developer",
      description: "Solo horror game on UE5. The player is chased by animated mannequins that activate in the dark. Light-detection system, behavioural AI, tension management.",
      highlights: ["AI enemies driven by Behavior Trees and AI Perception (sight/sound)", "Lumen dynamic lighting — enemies react to darkness", "Fear state management: procedural sound, post-process", "Tension-oriented level design"],
      sections: [],
    },
    "rainbow-ant": {
      title: "UE5 Gameplay", subtitle: "Rainbow Ant Studio", type: "Action-Adventure", role: "Gameplay Programmer",
      description: "One-year freelance mission as Gameplay Programmer on an action-adventure game. Character mechanics, swimming system, dynamic weather, interactive map.",
      highlights: ["Full character mechanics (movement, interactions, physics)", "Swimming system with surface/underwater transitions", "Dynamic weather integration (rain, fog, wind)", "Interactive map with trigger zones", "Animations via State Machines and Blend Spaces"],
      sections: [],
    },
    "cs-group": {
      title: "Aeronautical Simulator", subtitle: "CS Group — Defence", type: "Defence Simulation", role: "Embedded Systems Technician",
      description: "Development on an aeronautical device simulator (Inscape VTS) for national defence. Constrained environment, classified documentation, collaboration with domain experts.",
      highlights: ["Designed interactive scenarios for defence flight simulators", "Modular software architecture for scalability and reusability", "Debugged complex simulated behaviours in a controlled environment", "Collaborated with domain experts in a regulated defence context"],
      sections: [],
    },
    "time-restore": {
      title: "Time Restore", subtitle: "Personal project — UE4 → UE5", type: "RPG", role: "Developer / Game Designer",
      description: "3rd-person RPG in a fantasy world where time has stopped. The player must discover why and restart time to save the inhabitants.",
      highlights: ["Fantasy island with varied biomes (lake, village, desert...)", "Quest system with objective journal and narrative progression", "Migration from UE4 to UE5", "Main map level design", "NPC interaction system"],
      sections: [
        { title: "World & Biomes", text: "The island is split into biomes: plains, swamp, desert, caverns, snowy mountains and volcano island. Each zone has its own assets, enemies and quests." },
        { title: "Gameplay & Systems", text: "Quest system with objective journal, NPC interactions, crafting and third-person combat. Game is in pre-alpha." },
      ],
    },
    "virtual-badass": {
      title: "Virtual Badass", subtitle: "Final-year project — E-Artsup", type: "Boss Fight", role: "Developer / Integrator / Game Designer",
      description: "3D boss fight made by a team of 6 over 1 year for the final bachelor year. The player is a futuristic-armoured mercenary who must defeat the boss.",
      highlights: ["Character and boss combat systems", "Tutorial zone and boss arena level design", "Animation and VFX integration", "Project management in a 6-person team over 1 year"],
      sections: [
        { title: "The Boss", text: "The boss is an imposing steampunk robot with multiple attack phases. The arena forces the player to use every mechanic learned in the tutorial." },
        { title: "Characters", text: "Player character in futuristic armour with Buck the robot companion. Both models integrated with full animations." },
      ],
    },
    "sheeplone": {
      title: "Sheeplone", subtitle: "End-of-year project — 2 months", type: "FPS / Survival", role: "Developer / Game Designer",
      description: "FPS in a fantasy world. You play a wizard adventurer thrust into an unknown world by a dark entity, who must find a way home.",
      highlights: ["FPS controller and magic mechanics", "Enemy AI: Fire Sheep and Golem Guardian with distinct behaviours", "Quest system with objective journal", "Open-world fantasy level design"],
      sections: [
        { title: "World & Environment", text: "An open fantasy world with several biomes. Level design guides the player through quest areas." },
        { title: "Enemies & AI", text: "Two enemy types: Fire Sheep (fast, direct attack) and Golem Guardian (slow, powerful, area defender)." },
      ],
    },
    "aigyptos": {
      title: "Aigyptos", subtitle: "Ludum Dare 50 — 4 days", type: "Survival / Stealth", role: "Solo developer",
      description: 'Survival stealth 3D game made in 4 days for Ludum Dare 50, theme "Delay the Inevitable". A mummy escapes her pyramid without being spotted.',
      highlights: ["Full solo development in 4 days (game jam)", "Archaeologist detection AI (cone vision, alert, chase)", "Pyramid level design with multiple escape routes", "Aigys character concept art"],
      sections: [
        { title: "Level Design", text: "The pyramid is a multi-level labyrinth with patrolling guards. The player uses blind spots to sneak to the exit." },
        { title: "Character & Art Direction", text: "Aigys is a stylised Egyptian mummy. The concept art guided the 3D model to stay consistent with the visual world." },
      ],
    },
    "casse-brique": {
      title: "Brick Breaker", subtitle: "School challenge — 2 weeks", type: "Casual Game", role: "Developer",
      description: "2D brick breaker with 10 levels. You play a knight destroying monsters to save your princess. Built in 2 weeks.",
      highlights: ["Enemy AI and block behaviours", "Ball trajectory with physics bounces", "Special blocks: Explosive Block, Armoured Block", "10 levels with increasing difficulty"],
      sections: [
        { title: "Levels", text: "10 levels with increasing difficulty. Early levels serve as tutorials; later levels combine special blocks requiring strategy." },
        { title: "Blocks & AI", text: "Three block types: standard, Armour Block (resistant) and Explosive Block (destroys adjacent blocks). Each has its own reaction AI." },
      ],
    },
  },
};

const translations = {
  fr: {
    nav_about: "À propos",
    nav_experience: "Expérience",
    nav_projects: "Projets",
    nav_skills: "Compétences",
    nav_contact: "Contact",
    nav_cta: "Me contacter",

    hero_tag: "Disponible — Remote / Toulouse",
    hero_subtitle: "Gameplay Programmer · Développeur Logiciel",
    hero_desc: "Spécialisé en Unreal Engine 5, Unity C# et simulation temps réel.\nJeu vidéo. Défense. Temps réel.",
    hero_btn_projects: "Voir mes projets",
    hero_btn_contact: "Me contacter",
    hero_stat1_label: "Ans d'expérience",
    hero_stat3_label: "Langages principaux",

    about_label: "À propos",
    about_title: "Thomas\nLabetouille",
    about_p1: "Je suis Thomas Labetouille, développeur logiciel spécialisé en programmation gameplay sur Unreal Engine 5 et en simulation temps réel.",
    about_p2: "Après un bachelor jeu vidéo à E-Artsup (RNCP Niv. 6), j'ai travaillé en freelance comme Gameplay Programmer sur un projet UE5, puis intégré CS Group pour développer un simulateur aéronautique destiné à la défense nationale — un environnement exigeant, technique et contraint.",
    about_p3: "Ce qui me motive : écrire des systèmes solides, résoudre des problèmes techniques complexes, et voir la logique prendre vie — que ce soit dans un combat de boss ou dans un simulateur de vol.",
    about_p4: "Je suis basé à Toulouse et disponible en full remote ou sur site dans la région.",
    about_card1_label: "Spécialisation principale",
    about_card1_val: "Gameplay Programming",
    about_card1_sub: "UE5 / C++ / C#",
    about_card2_label: "Expérience pro",
    about_card2_val: "2+ ans",
    about_card2_sub: "Jeu vidéo & Défense",
    about_card3_label: "Disponibilité",
    about_card3_val: "Ouvert aux offres",
    about_card3_sub: "CDI · CDD · Full Remote",
    about_card4_label: "Localisation",
    about_card4_val: "Toulouse, France",
    about_card4_sub: "Remote OK · Mobilité Occitanie",

    exp_label: "Expérience",
    exp_title: "Parcours\nprofessionnel",

    proj_label: "Projets",
    proj_title: "Ce que j'ai\nconstruit",
    proj_filter_all: "Tous",
    proj_details: "▼ Détails techniques",
    proj_details_close: "▲ Réduire",
    proj_see: "↗ Voir le projet",
    proj_featured: "⚡ Projet phare 2026",
    proj_placeholder: "Images à venir",

    skills_label: "Compétences",
    skills_title: "Stack &\nsavoir-faire",
    skills: [
      { category: "Moteurs", items: ["Unreal Engine 5", "Unity"] },
      { category: "Langages", items: ["C++", "C#", "Python", "Blueprint (UE5)"] },
      { category: "Gameplay", items: ["Character Movement", "AI / Behavior Trees", "Animation Blueprints", "Physics"] },
      { category: "IA & Outils", items: ["Claude AI", "MCP (Model Context Protocol)", "Remote Execution API UE5", "Pipeline IA → UE5", "BlueprintAutomation"] },
      { category: "Simulation", items: ["Temps réel", "Architecture modulaire", "Scénarios interactifs"] },
      { category: "Versioning", items: ["Git / GitHub", "Plastic SCM", "Perforce"] },
      { category: "Soft Skills", items: ["Autonomie remote", "Travail sous pression", "Anglais technique"] },
    ],

    contact_label: "Contact",
    contact_title: "Travaillons\nensemble",
    contact_intro: "Disponible pour des postes en CDI, CDD ou freelance.\nFull remote ou Toulouse et alentours.\nJeu vidéo, simulation, ingénierie logicielle temps réel.",
    contact_email_label: "Email",
    contact_linkedin_label: "LinkedIn",
    contact_cv_label: "CV",
    contact_cv_value: "Télécharger mon CV",
    contact_cv_file: "/CV_Thomas_Labetouille_FR.pdf",
    footer: "Gameplay Programmer · Toulouse, France",

    detail_back: "← Retour aux projets",
    detail_role: "Rôle",
    detail_engine: "Moteur",
    detail_year: "Année",
    detail_highlights: "// Ce que j'ai développé",
    detail_tech: "Technologies",
    detail_itch: "↗ Télécharger sur itch.io",
    detail_all: "← Tous les projets",
    detail_prev: "← Projet précédent",
    detail_next: "Projet suivant →",
  },

  en: {
    nav_about: "About",
    nav_experience: "Experience",
    nav_projects: "Projects",
    nav_skills: "Skills",
    nav_contact: "Contact",
    nav_cta: "Contact me",

    hero_tag: "Available — Remote / Toulouse",
    hero_subtitle: "Gameplay Programmer · Software Developer",
    hero_desc: "Specialized in Unreal Engine 5, Unity C# and real-time simulation.\nGame dev. Defence. Real-time.",
    hero_btn_projects: "View my projects",
    hero_btn_contact: "Contact me",
    hero_stat1_label: "Years of experience",
    hero_stat3_label: "Main languages",

    about_label: "About",
    about_title: "Thomas\nLabetouille",
    about_p1: "I'm Thomas Labetouille, a software developer specialising in gameplay programming on Unreal Engine 5 and real-time simulation.",
    about_p2: "After a game dev bachelor's at E-Artsup (RNCP Level 6), I worked freelance as a Gameplay Programmer on a UE5 project, then joined CS Group to develop an aeronautical simulator for national defence.",
    about_p3: "What drives me: writing solid systems, solving complex technical problems, and seeing logic come to life — whether in a boss fight or a flight simulator.",
    about_p4: "Based in Toulouse, available fully remote or on-site in the area.",
    about_card1_label: "Main specialisation",
    about_card1_val: "Gameplay Programming",
    about_card1_sub: "UE5 / C++ / C#",
    about_card2_label: "Pro experience",
    about_card2_val: "2+ years",
    about_card2_sub: "Game dev & Defence",
    about_card3_label: "Availability",
    about_card3_val: "Open to offers",
    about_card3_sub: "Permanent · Fixed-term · Remote",
    about_card4_label: "Location",
    about_card4_val: "Toulouse, France",
    about_card4_sub: "Remote OK · South France",

    exp_label: "Experience",
    exp_title: "Career\npath",

    proj_label: "Projects",
    proj_title: "What I've\nbuilt",
    proj_filter_all: "All",
    proj_details: "▼ Technical details",
    proj_details_close: "▲ Collapse",
    proj_see: "↗ View project",
    proj_featured: "⚡ Featured 2026",
    proj_placeholder: "Images coming soon",

    skills_label: "Skills",
    skills_title: "Stack &\nexpertise",
    skills: [
      { category: "Engines", items: ["Unreal Engine 5", "Unity"] },
      { category: "Languages", items: ["C++", "C#", "Python", "Blueprint (UE5)"] },
      { category: "Gameplay", items: ["Character Movement", "AI / Behavior Trees", "Animation Blueprints", "Physics"] },
      { category: "AI & Tools", items: ["Claude AI", "MCP (Model Context Protocol)", "Remote Execution API UE5", "AI → UE5 Pipeline", "BlueprintAutomation"] },
      { category: "Simulation", items: ["Real-time", "Modular architecture", "Interactive scenarios"] },
      { category: "Version control", items: ["Git / GitHub", "Plastic SCM", "Perforce"] },
      { category: "Soft Skills", items: ["Autonomous remote worker", "Works under pressure", "Technical English"] },
    ],

    contact_label: "Contact",
    contact_title: "Let's work\ntogether",
    contact_intro: "Available for permanent, fixed-term or freelance positions.\nFully remote or Toulouse area.\nGame dev, simulation, real-time software engineering.",
    contact_email_label: "Email",
    contact_linkedin_label: "LinkedIn",
    contact_cv_label: "Resume",
    contact_cv_value: "Download my resume",
    contact_cv_file: "/CV_Thomas_Labetouille_EN.pdf",
    footer: "Gameplay Programmer · Toulouse, France",

    detail_back: "← Back to projects",
    detail_role: "Role",
    detail_engine: "Engine",
    detail_year: "Year",
    detail_highlights: "// What I built",
    detail_tech: "Technologies",
    detail_itch: "↗ Download on itch.io",
    detail_all: "← All projects",
    detail_prev: "← Previous project",
    detail_next: "Next project →",
  },
};

const LangContext = createContext(null);

export function LangProvider({ children }) {
  const [lang, setLang] = useState("fr");
  const t = (key) => translations[lang][key] ?? key;
  const tSkills = () => translations[lang].skills;
  const tProject = (id) => projectsData[lang][id] ?? projectsData.fr[id];
  return (
    <LangContext.Provider value={{ lang, setLang, t, tSkills, tProject }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
