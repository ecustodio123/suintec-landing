import { heroImage } from "../../data/demoContent";
import { useI18n } from "../../lang/i18n";
import Container from "../primitives/Container";

function HeroBlock() {
  const { t } = useI18n();

  return (
    <section className="page-hero" id="inicio">
      <Container className="page-hero__inner">
        <div>
          <h1>{t("home.hero.title")}</h1>
          <p>{t("home.hero.description")}</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#bombas">
              {t("home.hero.primaryCta")}
            </a>
            <a className="btn btn-outline" href="#contacto">
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
