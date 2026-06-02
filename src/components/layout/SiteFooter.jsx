import { NavLink } from "react-router-dom";
import { useI18n } from "../../lang/i18n";
import Container from "../primitives/Container";
import SocialLinks from "../primitives/SocialLinks";

function SiteFooter() {
  const { t } = useI18n();

  return (
    <footer className="footer">
      <Container className="footer-grid">
        <div className="footer-brand">
          <h3 style={{ marginTop: 0 }}>{t("footer.title")}</h3>
          <p>{t("footer.description")}</p>
          <SocialLinks tone="footer" />
        </div>
        <ul className="footer-links">
          <li>
            <NavLink to="/">{t("navigation.home")}</NavLink>
          </li>
          <li>
            <a href="#quienes-somos">{t("navigation.about")}</a>
          </li>
          <li>
            <a href="#bombas">{t("navigation.pumps")}</a>
          </li>
          <li>
            <a href="#motores">{t("navigation.motors")}</a>
          </li>
          <li>
            <a href="#tableros">{t("navigation.panels")}</a>
          </li>
          <li>
            <a href="#accesorios">{t("navigation.accessories")}</a>
          </li>
          <li>
            <a href="#contacto">{t("navigation.contact")}</a>
          </li>
        </ul>
        <ul className="footer-links">
          <li>{t("footer.highlights.cloneBuild")}</li>
          <li>{t("footer.highlights.tokenBased")}</li>
          <li>{t("footer.highlights.responsive")}</li>
        </ul>
      </Container>
      <div className="footer-bottom">{t("footer.rights")}</div>
    </footer>
  );
}

export default SiteFooter;
