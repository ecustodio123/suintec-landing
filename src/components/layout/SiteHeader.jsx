import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/img/logo-suintec.png";
import { useI18n } from "../../lang/i18n";

const NAV = [
  { key: "home", href: "#inicio", id: "inicio" },
  { key: "about", href: "#nosotros", id: "nosotros" },
  { key: "aplicaciones", href: "#aplicaciones", id: "aplicaciones" },
  { key: "soluciones", href: "#soluciones", id: "soluciones" },
  { key: "contact", href: "#contacto", id: "contacto" },
];

function SiteHeader() {
  const { t } = useI18n();
  const { pathname } = useLocation();
  const onHome = pathname === "/";
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState("inicio");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!onHome) {
      setActiveId("inicio");
      return undefined;
    }
    const sections = NAV.map((item) => document.getElementById(item.id)).filter(Boolean);
    if (!sections.length) {
      return undefined;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [onHome]);

  return (
    <header className={scrolled ? "scrolled" : ""}>
      <div className="wrap nav">
        <Link
          to="/"
          className="logo"
          aria-label={t("header.homeAria")}
          onClick={() => {
            setOpen(false);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <img src={logo} alt="SUINTEC" className="logo-img" />
        </Link>

        <ul className={`nav-links ${open ? "open" : ""}`.trim()}>
          {NAV.map((item) => (
            <li key={item.key}>
              {onHome ? (
                <a
                  href={item.href}
                  className={activeId === item.id ? "active" : ""}
                  onClick={() => setOpen(false)}
                >
                  {t(`navigation.${item.key}`)}
                </a>
              ) : (
                <Link to={`/${item.href}`} onClick={() => setOpen(false)}>
                  {t(`navigation.${item.key}`)}
                </Link>
              )}
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
