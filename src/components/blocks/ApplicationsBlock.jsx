import { applications } from "../../data/demoContent";
import { useI18n } from "../../lang/i18n";

function ApplicationsBlock() {
  const { t } = useI18n();

  return (
    <section id="aplicaciones">
      <div className="wrap">
        <div className="sec-head reveal">
          <h2>{t("applications.title")}</h2>
          <p>{t("applications.description")}</p>
        </div>
        <div className="cat-grid">
          {applications.map((item) => (
            <article className="cat reveal" key={item.id}>
              <div className="img">
                <img src={item.image} alt={t(`applications.items.${item.id}.title`)} loading="lazy" />
              </div>
              <div className="info">
                <h3>{t(`applications.items.${item.id}.title`)}</h3>
                <p>{t(`applications.items.${item.id}.description`)}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ApplicationsBlock;
