import { applications } from "../../data/demoContent";
import { useI18n } from "../../lang/i18n";
import Container from "../primitives/Container";
import SectionHeading from "../primitives/SectionHeading";

function ApplicationsBlock() {
  const { t } = useI18n();

  return (
    <section className="surface-section" id="aplicaciones">
      <Container>
        <SectionHeading title={t("applications.title")} description={t("applications.description")} />
        <div className="applications-grid">
          {applications.map((item) => (
            <article className="application-card" key={item.id}>
              <img src={item.image} alt={t(`applications.items.${item.id}.title`)} loading="lazy" />
              <div className="application-card__body">
                <h3>{t(`applications.items.${item.id}.title`)}</h3>
                <p>{t(`applications.items.${item.id}.description`)}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default ApplicationsBlock;
