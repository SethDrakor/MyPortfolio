import { useLang } from "../context/LangContext";

export default function LangSwitcher() {
  const { lang, setLang } = useLang();

  return (
    <>
      <style>{`
        .lang-switcher {
          display: flex; align-items: center; gap: .35rem;
          margin-left: 1rem;
        }
        .lang-btn {
          background: none; border: none;
          padding: 0; cursor: pointer;
          opacity: .35; transition: opacity .2s, transform .15s;
          display: flex; align-items: center;
          border-radius: 2px; overflow: hidden;
          width: 26px; height: 18px;
        }
        .lang-btn.active { opacity: 1; }
        .lang-btn:hover { opacity: .85; transform: scale(1.1); }
        .lang-btn img { width: 100%; height: 100%; object-fit: cover; display: block; }
        .lang-divider {
          width: 1px; height: 14px;
          background: var(--border2);
        }
      `}</style>
      <div className="lang-switcher">
        <button
          className={`lang-btn${lang === "fr" ? " active" : ""}`}
          onClick={() => setLang("fr")}
          title="Français"
          aria-label="Français"
        >
          {/* French flag SVG inline */}
          <svg viewBox="0 0 3 2" xmlns="http://www.w3.org/2000/svg">
            <rect width="1" height="2" fill="#002395"/>
            <rect x="1" width="1" height="2" fill="#EDEDED"/>
            <rect x="2" width="1" height="2" fill="#ED2939"/>
          </svg>
        </button>
        <div className="lang-divider" />
        <button
          className={`lang-btn${lang === "en" ? " active" : ""}`}
          onClick={() => setLang("en")}
          title="English"
          aria-label="English"
        >
          {/* UK flag SVG inline */}
          <svg viewBox="0 0 60 30" xmlns="http://www.w3.org/2000/svg">
            <rect width="60" height="30" fill="#012169"/>
            <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6"/>
            <path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" strokeWidth="4"/>
            <path d="M30,0 V30 M0,15 H60" stroke="#fff" strokeWidth="10"/>
            <path d="M30,0 V30 M0,15 H60" stroke="#C8102E" strokeWidth="6"/>
          </svg>
        </button>
      </div>
    </>
  );
}
