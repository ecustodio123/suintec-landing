import { aboutTeaserImage } from "../../data/demoContent";
import { useI18n } from "../../lang/i18n";
import Container from "../primitives/Container";
import MissionVisionBlock from "./MissionVisionBlock";

function HomeAboutTeaserBlock({ ctaTo = "#contacto" }) {
  const { t } = useI18n();

  return (
    <section className="surface-section" id="quienes-somos">
      <Container>
        <div className="home-about-teaser">
          <div>
            <p className="hero2-kicker">{t("home.aboutTeaser.kicker")}</p>
            <h2>{t("home.aboutTeaser.title")}</h2>
            <p>{t("home.aboutTeaser.description")}</p>
            <ul className="hero-highlights" aria-label={t("home.aboutTeaser.listAria")}>
              <li>{t("home.aboutTeaser.point1")}</li>
              <li>{t("home.aboutTeaser.point2")}</li>
              <li>{t("home.aboutTeaser.point3")}</li>
            </ul>
            <a className="btn btn-primary" href={ctaTo}>
              {t("home.aboutTeaser.cta")}
            </a>
          </div>

          <div className="home-about-teaser__media">
            <img src={aboutTeaserImage} alt={t("home.aboutTeaser.imageAlt")} loading="lazy" />
          </div>
        </div>

        <MissionVisionBlock />
      </Container>
    </section>
  );
}

export default HomeAboutTeaserBlock;
