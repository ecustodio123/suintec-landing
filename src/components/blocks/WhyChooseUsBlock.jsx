import { whyChooseUs } from "../../data/demoContent";
import { useI18n } from "../../lang/i18n";
import Container from "../primitives/Container";
import SectionHeading from "../primitives/SectionHeading";

function WhyChooseUsBlock() {
  const { t } = useI18n();

  return (
    <section className="surface-section why-section">
      <Container>
        <SectionHeading title={t("home.whyChooseUs.title")} description={t("home.whyChooseUs.description")} />
        <div className="card-grid four">
          {whyChooseUs.map((item) => (
            <article className="trust-card" key={item.id}>
              <span className="trust-card__icon" aria-hidden="true" />
              <h3>{t(`catalog.whyChooseUs.${item.id}.title`)}</h3>
              <p>{t(`catalog.whyChooseUs.${item.id}.description`)}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default WhyChooseUsBlock;
