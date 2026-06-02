import { services } from "../../data/demoContent";
import { useI18n } from "../../lang/i18n";
import ServiceCard from "../composites/ServiceCard";
import Container from "../primitives/Container";
import SectionHeading from "../primitives/SectionHeading";

function ServicesBlock() {
  const { t } = useI18n();

  return (
    <section className="surface-section" id="productos">
      <Container>
        <SectionHeading title={t("home.servicesBlock.title")} description={t("home.servicesBlock.description")} />
        <div className="card-grid four">
          {services.map((item) => (
            <ServiceCard
              key={item.id}
              item={{
                id: item.anchor,
                image: item.image,
                title: t(`catalog.services.${item.id}.title`),
                description: t(`catalog.services.${item.id}.description`),
                ctaLabel: t("catalog.services.cta"),
                ctaHref: "#contacto",
              }}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default ServicesBlock;
