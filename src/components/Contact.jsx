export default function Contact() {
  const links = [
    {
      label: "Email",
      value: "thomas.labetouille@gmail.com",
      href: "mailto:thomas.labetouille@gmail.com",
      icon: "✉",
      color: "#00d4ff",
    },
    {
      label: "LinkedIn",
      value: "thomas-labetouille",
      href: "https://www.linkedin.com/in/thomas-labetouille-294b39212/",
      icon: "in",
      color: "#7b61ff",
    },
    {
      label: "CV",
      value: "Télécharger mon CV",
      href: "/CV_Thomas_Labetouille.pdf", download: true,
      icon: "↓",
      color: "#ff4d00",
    },
  ];

  return (
    <>
      <style>{`
        .contact {
          padding: 7rem 2rem;
          max-width: 900px; margin: 0 auto;
          text-align: center;
        }
        .contact-intro {
          font-family: var(--font-mono); font-size: .88rem;
          color: var(--text2); line-height: 1.8; max-width: 520px;
          margin: 1.5rem auto 4rem; font-weight: 300;
        }
        .contact-links {
          display: flex; justify-content: center;
          gap: 1.5rem; flex-wrap: wrap;
        }
        .contact-link {
          display: flex; align-items: center; gap: 1rem;
          border: 1px solid var(--border);
          background: var(--surface);
          padding: 1.5rem 2rem;
          min-width: 260px;
          text-align: left;
          transition: border-color .2s, transform .2s;
          position: relative; overflow: hidden;
        }
        .contact-link::before {
          content: '';
          position: absolute; bottom: 0; left: 0; right: 0;
          height: 2px;
          background: var(--link-color, var(--accent));
          transform: scaleX(0);
          transform-origin: left;
          transition: transform .3s;
        }
        .contact-link:hover { border-color: var(--border2); transform: translateY(-3px); }
        .contact-link:hover::before { transform: scaleX(1); }
        .contact-icon {
          width: 40px; height: 40px;
          border: 1px solid var(--link-color, var(--accent));
          color: var(--link-color, var(--accent));
          display: flex; align-items: center; justify-content: center;
          font-family: var(--font-mono); font-size: .85rem; font-weight: 700;
          flex-shrink: 0;
        }
        .contact-label {
          font-family: var(--font-mono); font-size: .65rem;
          color: var(--text3); letter-spacing: .1em; text-transform: uppercase;
          margin-bottom: .3rem;
        }
        .contact-val {
          font-size: .82rem; color: var(--text); font-weight: 500;
          word-break: break-all;
        }
        .footer {
          border-top: 1px solid var(--border);
          padding: 2rem;
          text-align: center;
          font-family: var(--font-mono); font-size: .72rem;
          color: var(--text3); letter-spacing: .08em;
        }
        .footer span { color: var(--accent); }
      `}</style>
      <section className="contact" id="contact">
        <div className="section-label" style={{ fontFamily: "var(--font-mono)", fontSize: ".7rem", color: "var(--accent)", letterSpacing: ".2em", textTransform: "uppercase", marginBottom: "1rem", display: "flex", alignItems: "center", justifyContent: "center", gap: ".8rem" }}>
          <span style={{ color: "var(--text3)" }}>//</span> Contact
        </div>
        <h2 style={{ fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 800, letterSpacing: "-.02em", lineHeight: 1.1 }}>
          Travaillons<br />ensemble
        </h2>
        <p className="contact-intro">
          Disponible pour des postes en CDI, CDD ou freelance.<br />
          Full remote ou Toulouse et alentours.<br />
          Jeu vidéo, simulation, ingénierie logicielle temps réel.
        </p>
        <div className="contact-links">
          {links.map((l) => (
            <a className="contact-link" href={l.href} key={l.label} target="_blank" rel="noreferrer"
              style={{ "--link-color": l.color }}>
              <div className="contact-icon">{l.icon}</div>
              <div>
                <div className="contact-label">{l.label}</div>
                <div className="contact-val">{l.value}</div>
              </div>
            </a>
          ))}
        </div>
      </section>
      <footer className="footer">
        Thomas Labetouille © {new Date().getFullYear()} — Gameplay Programmer · <span>Toulouse, France</span>
      </footer>
    </>
  );
}
