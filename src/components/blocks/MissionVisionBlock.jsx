import { useI18n } from "../../lang/i18n";

const MissionIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="4.5" />
    <circle cx="12" cy="12" r="1" />
  </svg>
);

const VisionIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
    <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

function MissionVisionBlock() {
  const { t } = useI18n();

  return (
    <div className="qs-grid">
      <article className="qs-card reveal">
        <div className="qs-ic">
          <MissionIcon />
        </div>
        <h3>{t("about.mission.title")}</h3>
        <p>{t("about.mission.description")}</p>
      </article>

      <article className="qs-card reveal">
        <div className="qs-ic">
          <VisionIcon />
        </div>
        <h3>{t("about.vision.title")}</h3>
        <p>{t("about.vision.description")}</p>
      </article>
    </div>
  );
}

export default MissionVisionBlock;
