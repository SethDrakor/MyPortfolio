import { createContext, useContext, useState } from "react";

const translations = {
  fr: {
    // Navbar
    nav_about: "À propos",
    nav_experience: "Expérience",
    nav_projects: "Projets",
    nav_skills: "Compétences",
    nav_contact: "Contact",
    nav_cta: "Me contacter",

    // Hero
    hero_tag: "Disponible — Remote / Toulouse",
    hero_subtitle: "Gameplay Programmer · Software Developer",
    hero_desc: "Spécialisé en Unreal Engine 5, Unity C# et simulation temps réel.\nJeu vidéo. Défense. Temps réel.",
    hero_btn_projects: "Voir mes projets",
    hero_btn_contact: "Me contacter",
    hero_stat1_label: "Ans d'expérience",
    hero_stat3_label: "Langages principaux",

    // About
    about_label: "À propos",
    about_title: "Programmer,\npas game designer.",
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

    // Experience
    exp_label: "Expérience",
    exp_title: "Parcours\nprofessionnel",

    // Projects
    proj_label: "Projets",
    proj_title: "Ce que j'ai\nconstruit",
    proj_filter_all: "Tous",
    proj_details: "▼ Détails techniques",
    proj_details_close: "▲ Réduire",
    proj_see: "↗ Voir le projet",
    proj_featured: "⚡ Projet phare 2026",
    proj_placeholder: "Images à venir",

    // Skills
    skills_label: "Compétences",
    skills_title: "Stack &\nsavoir-faire",

    // Contact
    contact_label: "Contact",
    contact_title: "Travaillons\nensemble",
    contact_intro: "Disponible pour des postes en CDI, CDD ou freelance.\nFull remote ou Toulouse et alentours.\nJeu vidéo, simulation, ingénierie logicielle temps réel.",
    contact_email_label: "Email",
    contact_linkedin_label: "LinkedIn",
    contact_cv_label: "CV",
    contact_cv_value: "Télécharger mon CV",
    contact_cv_file: "/CV_Thomas_Labetouille_FR.pdf",
    footer: "Gameplay Programmer · Toulouse, France",

    // Project detail
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
    // Navbar
    nav_about: "About",
    nav_experience: "Experience",
    nav_projects: "Projects",
    nav_skills: "Skills",
    nav_contact: "Contact",
    nav_cta: "Contact me",

    // Hero
    hero_tag: "Available — Remote / Toulouse",
    hero_subtitle: "Gameplay Programmer · Software Developer",
    hero_desc: "Specialized in Unreal Engine 5, Unity C# and real-time simulation.\nGame dev. Defence. Real-time.",
    hero_btn_projects: "View my projects",
    hero_btn_contact: "Contact me",
    hero_stat1_label: "Years of experience",
    hero_stat3_label: "Main languages",

    // About
    about_label: "About",
    about_title: "Programmer,\nnot a game designer.",
    about_p1: "I'm Thomas Labetouille, a software developer specialising in gameplay programming on Unreal Engine 5 and real-time simulation.",
    about_p2: "After a game dev bachelor's at E-Artsup (RNCP Level 6), I worked freelance as a Gameplay Programmer on a UE5 project, then joined CS Group to develop an aeronautical simulator for national defence — a demanding, technical and constrained environment.",
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

    // Experience
    exp_label: "Experience",
    exp_title: "Professional\njourney",

    // Projects
    proj_label: "Projects",
    proj_title: "What I've\nbuilt",
    proj_filter_all: "All",
    proj_details: "▼ Technical details",
    proj_details_close: "▲ Collapse",
    proj_see: "↗ View project",
    proj_featured: "⚡ Featured 2026",
    proj_placeholder: "Images coming soon",

    // Skills
    skills_label: "Skills",
    skills_title: "Stack &\nexpertise",

    // Contact
    contact_label: "Contact",
    contact_title: "Let's work\ntogether",
    contact_intro: "Available for permanent, fixed-term or freelance positions.\nFully remote or Toulouse area.\nGame dev, simulation, real-time software engineering.",
    contact_email_label: "Email",
    contact_linkedin_label: "LinkedIn",
    contact_cv_label: "Resume",
    contact_cv_value: "Download my resume",
    contact_cv_file: "/CV_Thomas_Labetouille_EN.pdf",
    footer: "Gameplay Programmer · Toulouse, France",

    // Project detail
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
  }
};

const LangContext = createContext(null);

export function LangProvider({ children }) {
  const [lang, setLang] = useState("fr");
  const t = (key) => translations[lang][key] ?? key;
  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
