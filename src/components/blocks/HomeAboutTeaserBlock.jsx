import { aboutTeaserImage } from "../../data/demoContent";
import { useI18n } from "../../lang/i18n";
import MissionVisionBlock from "./MissionVisionBlock";

function HomeAboutTeaserBlock() {
  const { t } = useI18n();

  return (
    <section className="about" id="nosotros">
      <div className="wrap">
        <article className="qs-about reveal">
          <div className="qs-about-text">
            <div className="eyebrow">{t("home.aboutTeaser.kicker")}</div>
            <h2>{t("home.aboutTeaser.title")}</h2>
            <p>{t("home.aboutTeaser.description")}</p>
            <ul className="qs-list">
              <li>{t("home.aboutTeaser.point1")}</li>
              <li>{t("home.aboutTeaser.point2")}</li>
              <li>{t("home.aboutTeaser.point3")}</li>
            </ul>
            <a href="#contacto" className="btn btn-solicitar">
              {t("home.aboutTeaser.cta")}
            </a>
          </div>
          <div className="qs-about-img">
            <img src={aboutTeaserImage} alt={t("home.aboutTeaser.imageAlt")} loading="lazy" />
          </div>
        </article>

        <MissionVisionBlock />
      </div>
    </section>
  );
}

export default HomeAboutTeaserBlock;
