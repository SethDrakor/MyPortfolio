import { useEffect, useRef } from "react";
import { useLang } from "../context/LangContext";

export default function Hero() {
  const gridRef = useRef(null);
  const { t } = useLang();

  useEffect(() => {
    const el = gridRef.current;
    if (!el) return;
    const onMove = (e) => {
      const rect = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${((e.clientX - rect.left) / rect.width) * 100}%`);
      el.style.setProperty("--my", `${((e.clientY - rect.top) / rect.height) * 100}%`);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <>
      <style>{`
        .hero { min-height: 100vh; display: flex; align-items: center; position: relative; overflow: hidden; padding: 0 2rem; }
        .hero-grid { position: absolute; inset: 0; background-image: linear-gradient(rgba(0,212,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.03) 1px, transparent 1px); background-size: 60px 60px; --mx: 50%; --my: 50%; mask-image: radial-gradient(ellipse 60% 60% at var(--mx) var(--my), black 0%, transparent 100%); -webkit-mask-image: radial-gradient(ellipse 60% 60% at var(--mx) var(--my), black 0%, transparent 100%); }
        .hero-glow { position: absolute; width: 600px; height: 600px; background: radial-gradient(circle, rgba(0,212,255,0.07) 0%, transparent 70%); top: 50%; left: 50%; transform: translate(-50%,-50%); pointer-events: none; }
        .hero-glow2 { position: absolute; width: 400px; height: 400px; background: radial-gradient(circle, rgba(255,77,0,0.05) 0%, transparent 70%); top: 20%; right: 10%; pointer-events: none; }
        .hero-content { position: relative; z-index: 1; max-width: 900px; margin: 0 auto; width: 100%; padding-top: 64px; }
        .hero-tag { display: inline-flex; align-items: center; gap: .6rem; font-family: var(--font-mono); font-size: .75rem; color: var(--accent); letter-spacing: .1em; margin-bottom: 1.5rem; border: 1px solid rgba(0,212,255,0.2); padding: .35rem .9rem; border-radius: 2px; background: rgba(0,212,255,0.05); }
        .hero-tag::before { content: ''; width: 6px; height: 6px; background: var(--accent); border-radius: 50%; animation: pulse 2s infinite; }
        @keyframes pulse { 0%,100% { opacity: 1; transform: scale(1); } 50% { opacity: .4; transform: scale(.7); } }
        .hero-name { font-size: clamp(3rem, 8vw, 7rem); font-weight: 800; line-height: .95; letter-spacing: -.03em; margin-bottom: .5rem; }
        .hero-name-accent { color: var(--accent); }
        .hero-title { font-family: var(--font-mono); font-size: clamp(.85rem, 2vw, 1rem); color: var(--text2); letter-spacing: .12em; text-transform: uppercase; margin-bottom: 1.5rem; display: flex; align-items: center; gap: 1rem; }
        .hero-title::before { content: ''; flex: 0 0 40px; height: 1px; background: var(--accent); }
        .hero-desc { font-size: 1.05rem; color: var(--text2); line-height: 1.7; max-width: 520px; margin-bottom: 2.5rem; font-family: var(--font-mono); font-weight: 300; }
        .hero-btns { display: flex; gap: 1rem; flex-wrap: wrap; }
        .btn-primary { background: var(--accent); color: var(--bg); border: none; padding: .85rem 2rem; font-family: var(--font-display); font-size: .8rem; letter-spacing: .12em; text-transform: uppercase; font-weight: 700; transition: transform .15s, box-shadow .15s; clip-path: polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px)); cursor: pointer; }
        .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 30px rgba(0,212,255,0.35); }
        .btn-secondary { background: transparent; color: var(--text); border: 1px solid var(--border2); padding: .85rem 2rem; font-family: var(--font-display); font-size: .8rem; letter-spacing: .12em; text-transform: uppercase; transition: border-color .2s, color .2s; cursor: pointer; }
        .btn-secondary:hover { border-color: var(--accent); color: var(--accent); }
        .hero-scroll { position: absolute; bottom: 2.5rem; left: 50%; transform: translateX(-50%); display: flex; flex-direction: column; align-items: center; gap: .5rem; font-family: var(--font-mono); font-size: .65rem; color: var(--text3); letter-spacing: .15em; text-transform: uppercase; }
        .hero-scroll-line { width: 1px; height: 50px; background: linear-gradient(var(--accent), transparent); animation: scrollLine 1.8s ease-in-out infinite; }
        @keyframes scrollLine { 0% { transform: scaleY(0); transform-origin: top; } 50% { transform: scaleY(1); transform-origin: top; } 51% { transform: scaleY(1); transform-origin: bottom; } 100% { transform: scaleY(0); transform-origin: bottom; } }
        .hero-stats { display: flex; gap: 3rem; margin-top: 3.5rem; padding-top: 2.5rem; border-top: 1px solid var(--border); }
        .stat-num { font-size: 2rem; font-weight: 800; color: var(--accent); line-height: 1; }
        .stat-label { font-family: var(--font-mono); font-size: .7rem; color: var(--text3); letter-spacing: .1em; text-transform: uppercase; margin-top: .3rem; }
      `}</style>
      <section className="hero" id="hero">
        <div className="hero-grid" ref={gridRef} />
        <div className="hero-glow" />
        <div className="hero-glow2" />
        <div className="hero-content">
          <div className="hero-tag">{t("hero_tag")}</div>
          <h1 className="hero-name">Thomas<br /><span className="hero-name-accent">Labetouille</span></h1>
          <div className="hero-title">{t("hero_subtitle")}</div>
          <p className="hero-desc">{t("hero_desc").split("\n").map((l, i) => <span key={i}>{l}{i === 0 && <br/>}</span>)}</p>
          <div className="hero-btns">
            <a href="#projects" className="btn-primary" onClick={(e) => { e.preventDefault(); document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" }); }}>{t("hero_btn_projects")}</a>
            <a href="#contact" className="btn-secondary" onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}>{t("hero_btn_contact")}</a>
          </div>
          <div className="hero-stats">
            <div><div className="stat-num">2+</div><div className="stat-label">{t("hero_stat1_label")}</div></div>
            <div><div className="stat-num">UE5</div><div className="stat-label">& Unity</div></div>
            <div><div className="stat-num">C++ / C#</div><div className="stat-label">{t("hero_stat3_label")}</div></div>
          </div>
        </div>
        <div className="hero-scroll"><div className="hero-scroll-line" /><span>Scroll</span></div>
      </section>
    </>
  );
}
