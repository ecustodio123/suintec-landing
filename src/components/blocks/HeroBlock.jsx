import heroImage from "../../assets/img/sala-de-bombeo-industrial-con-bomba-centrifuga-m.jpeg";
import { useI18n } from "../../lang/i18n";

function renderHighlighted(text) {
  return text.split(/(\[[^\]]+\])/).map((part, index) =>
    part.startsWith("[") && part.endsWith("]") ? (
      <span key={index} className="accent">
        {part.slice(1, -1)}
      </span>
    ) : (
      part
    ),
  );
}

function HeroBlock() {
  const { t } = useI18n();

  return (
    <section className="hero" id="inicio">
      <div className="wrap">
        <div className="hero-grid">
          <div className="hero-text">
            <h1>{renderHighlighted(t("home.hero.title"))}</h1>
            <p>{t("home.hero.description")}</p>
            <div className="hero-btns">
              <a href="#soluciones" className="btn btn-green">
                {t("home.hero.primaryCta")}
              </a>
              <a href={t("business.whatsappHref")} target="_blank" rel="noreferrer" className="btn btn-dark">
                {t("home.hero.secondaryCta")}
              </a>
            </div>
          </div>
          <div className="hero-media">
            <div className="hero-img">
              <img src={heroImage} alt={t("home.hero.imageAlt")} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroBlock;
