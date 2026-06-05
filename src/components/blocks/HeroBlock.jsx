import heroImage from "../../assets/img/sala-de-bombeo-industrial-con-bomba-centrifuga-m.jpeg";
import { useI18n } from "../../lang/i18n";
import Container from "../primitives/Container";

function renderHighlighted(text) {
  return text.split(/(\[[^\]]+\])/).map((part, index) =>
    part.startsWith("[") && part.endsWith("]") ? (
      <span key={index} className="hero-accent">
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
    <section className="page-hero" id="inicio">
      <Container className="page-hero__inner">
        <div>
          <h1>{renderHighlighted(t("home.hero.title"))}</h1>
          <p>{t("home.hero.description")}</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#soluciones">
              {t("home.hero.primaryCta")}
            </a>
            <a className="btn btn-dark" href="#contacto">
              {t("home.hero.secondaryCta")}
            </a>
          </div>
        </div>
        <img src={heroImage} alt={t("home.hero.imageAlt")} />
      </Container>
    </section>
  );
}

export default HeroBlock;
