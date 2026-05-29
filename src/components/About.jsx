export default function About() {
  return (
    <>
      <style>{`
        .about {
          padding: 7rem 2rem;
          max-width: 1100px; margin: 0 auto;
        }
        .section-label {
          font-family: var(--font-mono); font-size: .7rem;
          color: var(--accent); letter-spacing: .2em; text-transform: uppercase;
          margin-bottom: 1rem;
          display: flex; align-items: center; gap: .8rem;
        }
        .section-label::before {
          content: '//'; color: var(--text3);
        }
        .section-title {
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 800; letter-spacing: -.02em;
          line-height: 1.1; margin-bottom: 3.5rem;
        }
        .about-grid {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 5rem; align-items: center;
        }
        .about-text p {
          font-family: var(--font-mono); font-size: .88rem;
          color: var(--text2); line-height: 1.9;
          font-weight: 300; margin-bottom: 1.5rem;
        }
        .about-text p strong { color: var(--text); font-weight: 500; }
        .about-cards {
          display: flex; flex-direction: column; gap: 1rem;
        }
        .about-card {
          padding: 1.5rem;
          border: 1px solid var(--border);
          background: var(--surface);
          position: relative; overflow: hidden;
          transition: border-color .2s;
        }
        .about-card::before {
          content: '';
          position: absolute; top: 0; left: 0;
          width: 3px; height: 100%;
          background: var(--card-color, var(--accent));
        }
        .about-card:hover { border-color: var(--border2); }
        .about-card-label {
          font-family: var(--font-mono); font-size: .65rem;
          color: var(--text3); letter-spacing: .15em; text-transform: uppercase;
          margin-bottom: .4rem;
        }
        .about-card-val {
          font-size: 1rem; font-weight: 700; color: var(--text);
          margin-bottom: .3rem;
        }
        .about-card-sub {
          font-family: var(--font-mono); font-size: .75rem; color: var(--text2);
        }
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr; gap: 3rem; }
        }
      `}</style>
      <section className="about" id="about">
        <div className="section-label">À propos</div>
        <h2 className="section-title">Programmer,<br />pas game designer.</h2>
        <div className="about-grid">
          <div className="about-text">
            <p>
              Je suis <strong>Thomas Labetouille</strong>, développeur logiciel spécialisé en <strong>programmation gameplay sur Unreal Engine 5</strong> et en <strong>simulation temps réel</strong>.
            </p>
            <p>
              Après un bachelor jeu vidéo à E-Artsup (RNCP Niv. 6), j'ai travaillé en freelance comme Gameplay Programmer sur un projet UE5, puis intégré <strong>CS Group</strong> pour développer un simulateur aéronautique destiné à la défense nationale — un environnement exigeant, technique et contraint.
            </p>
            <p>
              Ce qui me motive : écrire des systèmes solides, résoudre des problèmes techniques complexes, et voir la logique prendre vie — que ce soit dans un combat de boss ou dans un simulateur de vol.
            </p>
            <p>
              Je suis basé à <strong>Toulouse</strong> et disponible en <strong>full remote</strong> ou sur site dans la région.
            </p>
          </div>
          <div className="about-cards">
            {[
              { label: "Spécialisation principale", val: "Gameplay Programming", sub: "UE5 / C++ / C#", color: "#00d4ff" },
              { label: "Expérience pro", val: "2+ ans", sub: "Jeu vidéo & Défense", color: "#ff4d00" },
              { label: "Disponibilité", val: "Ouvert aux offres", sub: "CDI · CDD · Full Remote", color: "#7b61ff" },
              { label: "Localisation", val: "Toulouse, France", sub: "Remote OK · Mobilité Occitanie", color: "#00d4ff" },
            ].map((c) => (
              <div className="about-card" key={c.label} style={{ "--card-color": c.color }}>
                <div className="about-card-label">{c.label}</div>
                <div className="about-card-val">{c.val}</div>
                <div className="about-card-sub">{c.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
