import { useState } from "react";
import logo from "../../assets/img/logo-suintec.png";
import { useI18n } from "../../lang/i18n";

const NAV = [
  { key: "home", href: "#inicio" },
  { key: "about", href: "#nosotros" },
  { key: "aplicaciones", href: "#aplicaciones" },
  { key: "soluciones", href: "#soluciones" },
  { key: "contact", href: "#contacto" },
];

function SiteHeader() {
  const { t } = useI18n();
  const [open, setOpen] = useState(false);

  return (
    <header>
      <div className="wrap nav">
        <a href="#inicio" className="logo" aria-label={t("header.homeAria")}>
          <img src={logo} alt="SUINTEC" className="logo-img" />
        </a>

        <ul className={`nav-links ${open ? "open" : ""}`.trim()}>
          {NAV.map((item, index) => (
            <li key={item.key}>
              <a href={item.href} className={index === 0 ? "active" : ""} onClick={() => setOpen(false)}>
                {t(`navigation.${item.key}`)}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-cta">
          <a href={t("business.whatsappHref")} target="_blank" rel="noreferrer" className="btn btn-green">
            {t("header.whatsappCta")}
          </a>
          <button className="menu-btn" aria-label={t("header.openMenu")} onClick={() => setOpen((prev) => !prev)}>
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}

export default SiteHeader;
