import logo from "../../assets/img/logo-suintec.png";
import { useI18n } from "../../lang/i18n";

const NAV = [
  { key: "home", href: "#inicio" },
  { key: "about", href: "#nosotros" },
  { key: "aplicaciones", href: "#aplicaciones" },
  { key: "soluciones", href: "#soluciones" },
  { key: "contact", href: "#contacto" },
];

function SiteFooter() {
  const { t, language } = useI18n();

  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <div>
            <div className="footer-logo">
              <img src={logo} alt="SUINTEC" className="footer-logo-img" />
            </div>
            <p className="blurb">{t("footer.description")}</p>
          </div>
          <div>
            <h5>{t("footer.navTitle")}</h5>
            <ul>
              {NAV.map((item) => (
                <li key={item.key}>
                  <a href={item.href}>{t(`navigation.${item.key}`)}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5>{t("footer.commitmentTitle")}</h5>
            <ul>
              <li>
                <a href="#nosotros">{t("footer.highlights.cloneBuild")}</a>
              </li>
              <li>
                <a href="#nosotros">{t("footer.highlights.tokenBased")}</a>
              </li>
              <li>
                <a href="#nosotros">{t("footer.highlights.responsive")}</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="foot-bottom">
          <span>{t("footer.rights")}</span>
          <span className="lang">
            {t("language.switchLabel")} · {t(`language.${language}`)}
          </span>
        </div>
      </div>
    </footer>
  );
}

export default SiteFooter;
