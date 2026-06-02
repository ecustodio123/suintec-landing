import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { NavLink } from "react-router-dom";
import { mainNavDropdowns, topNavLinks } from "../../data/navigation";
import { useI18n } from "../../lang/i18n";
import Container from "../primitives/Container";
import BrandLogo from "./BrandLogo";
import MainNavDropdown from "./MainNavDropdown";

function SiteHeader() {
  const { t } = useI18n();

  return (
    <header className="site-header">
      <Container className="header-top">
        <NavLink to="/" aria-label={t("header.homeAria")}>
          <BrandLogo />
        </NavLink>

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
