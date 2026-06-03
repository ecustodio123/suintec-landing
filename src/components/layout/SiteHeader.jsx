import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { mainNavDropdowns, topNavLinks } from "../../data/navigation";
import { useI18n } from "../../lang/i18n";
import Container from "../primitives/Container";
import BrandLogo from "./BrandLogo";
import MainNavDropdown from "./MainNavDropdown";

function SiteHeader() {
  const { t } = useI18n();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("mobile-nav-open", mobileMenuOpen);

    return () => document.body.classList.remove("mobile-nav-open");
  }, [mobileMenuOpen]);

  useEffect(() => {
    if (!mobileMenuOpen) {
      return undefined;
    }

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [mobileMenuOpen]);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header className={`site-header ${mobileMenuOpen ? "is-mobile-menu-open" : ""}`.trim()}>
      <Container className="header-top">
        <NavLink to="/" aria-label={t("header.homeAria")}>
          <BrandLogo />
        </NavLink>

        <button
          type="button"
          className="mobile-menu-toggle"
          aria-label={mobileMenuOpen ? t("header.closeMenu") : t("header.openMenu")}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMobileMenuOpen((open) => !open)}
        >
          {mobileMenuOpen ? <CloseIcon sx={{ fontSize: 23 }} /> : <MenuIcon sx={{ fontSize: 24 }} />}
        </button>

        <nav className="header-links" aria-label={t("header.navAria")}>
          {topNavLinks.map((link) =>
            link.to.startsWith("#") ? (
              <a key={link.key} href={link.to}>
                {t(`navigation.${link.key}`)}
              </a>
            ) : (
              <NavLink
                key={link.key}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {t(`navigation.${link.key}`)}
              </NavLink>
            ),
          )}
          <a className="header-phone" href={t("business.whatsappHref")} target="_blank" rel="noreferrer">
            <WhatsAppIcon sx={{ fontSize: 17, marginBottom: "-2px" }} /> {t("header.whatsappCta")}
          </a>
        </nav>
      </Container>

      <nav id="mobile-navigation" className="mobile-nav-panel" aria-label={t("header.mobileNavAria")}>
        <div className="mobile-nav-panel__inner">
          {topNavLinks.map((link, index) =>
            link.to.startsWith("#") ? (
              <a key={link.key} href={link.to} style={{ "--item-index": index }} onClick={closeMobileMenu}>
                {t(`navigation.${link.key}`)}
              </a>
            ) : (
              <NavLink
                key={link.key}
                to={link.to}
                end={link.to === "/"}
                style={{ "--item-index": index }}
                onClick={closeMobileMenu}
              >
                {t(`navigation.${link.key}`)}
              </NavLink>
            ),
          )}
          <a
            className="mobile-nav-panel__whatsapp"
            href={t("business.whatsappHref")}
            target="_blank"
            rel="noreferrer"
            style={{ "--item-index": topNavLinks.length }}
            onClick={closeMobileMenu}
          >
            <WhatsAppIcon sx={{ fontSize: 23 }} /> {t("header.whatsappCta")}
          </a>
        </div>
      </nav>

      {mainNavDropdowns.length ? (
        <div className="main-nav-wrap">
          <Container className="main-nav">
            {mainNavDropdowns.map((entry) => (
              <MainNavDropdown
                key={entry.key}
                label={t(`mainNav.categories.${entry.key}`)}
                options={entry.optionKeys.map((optionKey) => t(`mainNav.options.${optionKey}`))}
              />
            ))}
          </Container>
        </div>
      ) : null}
    </header>
  );
}

export default SiteHeader;
