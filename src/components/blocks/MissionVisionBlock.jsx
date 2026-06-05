import { useI18n } from "../../lang/i18n";
import Container from "../primitives/Container";

const MissionIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);

const VisionIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

function MissionVisionBlock() {
  const { t } = useI18n();

  return (
    <section className="surface-section surface-section--soft">
      <Container>
        <div className="mv-grid">
          <article className="mv-card">
            <div className="mv-card__icon">
              <MissionIcon />
            </div>
            <h3>{t("about.mission.title")}</h3>
            <p>{t("about.mission.description")}</p>
          </article>

          <article className="mv-card">
            <div className="mv-card__icon">
              <VisionIcon />
            </div>
            <h3>{t("about.vision.title")}</h3>
            <p>{t("about.vision.description")}</p>
          </article>
        </div>
      </Container>
    </section>
  );
}

export default MissionVisionBlock;
