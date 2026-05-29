import { useState } from "react";
import { projects } from "../data/portfolio";

const filters = ["Tous", "UE5", "Unity", "Simulation"];

export default function Projects() {
  const [active, setActive] = useState("Tous");
  const [hovered, setHovered] = useState(null);

  const filtered = active === "Tous"
    ? projects
    : projects.filter((p) => p.category === active || p.tags.includes(active));

  return (
    <>
      <style>{`
        .projects { padding: 7rem 2rem; max-width: 1100px; margin: 0 auto; }
        .filter-bar {
          display: flex; gap: .6rem; flex-wrap: wrap;
          margin-bottom: 3rem;
        }
        .filter-btn {
          background: transparent;
          border: 1px solid var(--border);
          color: var(--text3);
          padding: .45rem 1.1rem;
          font-family: var(--font-mono); font-size: .72rem;
          letter-spacing: .1em; text-transform: uppercase;
          transition: all .2s;
        }
        .filter-btn.active, .filter-btn:hover {
          border-color: var(--accent); color: var(--accent);
          background: rgba(0,212,255,0.05);
        }
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(480px, 1fr));
          gap: 1.5rem;
        }
        .project-card {
          border: 1px solid var(--border);
          background: var(--surface);
          padding: 2rem;
          position: relative; overflow: hidden;
          transition: border-color .25s, transform .2s;
          cursor: none;
        }
        .project-card::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0;
          height: 2px;
          background: var(--card-color, var(--accent));
          transform: scaleX(0);
          transform-origin: left;
          transition: transform .3s;
        }
        .project-card:hover { border-color: var(--border2); transform: translateY(-3px); }
        .project-card:hover::before { transform: scaleX(1); }
        .project-card-top {
          display: flex; justify-content: space-between;
          align-items: flex-start; margin-bottom: 1.2rem;
        }
        .project-engine {
          font-family: var(--font-mono); font-size: .65rem;
          letter-spacing: .12em; text-transform: uppercase;
          color: var(--card-color, var(--accent));
          border: 1px solid var(--card-color, var(--accent));
          padding: .2rem .6rem;
        }
        .project-year {
          font-family: var(--font-mono); font-size: .68rem;
          color: var(--text3);
        }
        .project-title {
          font-size: 1.4rem; font-weight: 800;
          margin-bottom: .2rem; letter-spacing: -.01em;
        }
        .project-subtitle {
          font-family: var(--font-mono); font-size: .75rem;
          color: var(--text3); margin-bottom: 1rem;
        }
        .project-desc {
          font-family: var(--font-mono); font-size: .8rem;
          color: var(--text2); line-height: 1.75;
          font-weight: 300; margin-bottom: 1.5rem;
        }
        .project-highlights {
          border-top: 1px solid var(--border);
          padding-top: 1.2rem; margin-bottom: 1.5rem;
          display: none;
        }
        .project-card:hover .project-highlights { display: block; }
        .project-highlights li {
          font-family: var(--font-mono); font-size: .72rem;
          color: var(--text2); line-height: 1.7;
          padding-left: 1rem; position: relative;
          margin-bottom: .3rem; list-style: none;
        }
        .project-highlights li::before {
          content: '▸'; position: absolute; left: 0;
          color: var(--card-color, var(--accent)); font-size: .6rem;
        }
        .project-tags {
          display: flex; flex-wrap: wrap; gap: .5rem;
        }
        .project-tag {
          font-family: var(--font-mono); font-size: .65rem;
          letter-spacing: .08em;
          background: var(--bg3); color: var(--text3);
          padding: .25rem .65rem;
          border: 1px solid var(--border);
        }
        @media (max-width: 768px) {
          .projects-grid { grid-template-columns: 1fr; }
        }
      `}</style>
      <section className="projects" id="projects">
        <div className="section-label" style={{ fontFamily: "var(--font-mono)", fontSize: ".7rem", color: "var(--accent)", letterSpacing: ".2em", textTransform: "uppercase", marginBottom: "1rem", display: "flex", alignItems: "center", gap: ".8rem" }}>
          <span style={{ color: "var(--text3)" }}>//</span> Projets
        </div>
        <h2 style={{ fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 800, letterSpacing: "-.02em", lineHeight: 1.1, marginBottom: "3rem" }}>
          Ce que j'ai<br />construit
        </h2>
        <div className="filter-bar">
          {filters.map((f) => (
            <button
              key={f}
              className={`filter-btn${active === f ? " active" : ""}`}
              onClick={() => setActive(f)}
            >{f}</button>
          ))}
        </div>
        <div className="projects-grid">
          {filtered.map((p) => (
            <div
              className="project-card"
              key={p.id}
              style={{ "--card-color": p.color }}
              onMouseEnter={() => setHovered(p.id)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="project-card-top">
                <span className="project-engine">{p.engine}</span>
                <span className="project-year">{p.year}</span>
              </div>
              <div className="project-title">{p.title}</div>
              <div className="project-subtitle">{p.subtitle}</div>
              <div className="project-desc">{p.description}</div>
              <ul className="project-highlights">
                {p.highlights.map((h, i) => <li key={i}>{h}</li>)}
              </ul>
              <div className="project-tags">
                {p.tech.map((t) => <span className="project-tag" key={t}>{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
