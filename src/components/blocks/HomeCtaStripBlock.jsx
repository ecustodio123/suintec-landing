import { useI18n } from "../../lang/i18n";

function HomeCtaStripBlock() {
  const { t } = useI18n();

  return (
    <div className="wrap cta-wrap">
      <div className="cta reveal">
        <div>
          <div className="eyebrow">{t("home.ctaStrip.kicker")}</div>
          <h2>{t("home.ctaStrip.title")}</h2>
          <p>{t("home.ctaStrip.description")}</p>
        </div>
        <div className="cta-btns">
          <a href={t("business.whatsappHref")} target="_blank" rel="noreferrer" className="btn btn-green">
            {t("home.ctaStrip.primaryCta")}
          </a>
          <a href={`tel:${t("business.phoneHref")}`} className="btn btn-ghost">
            {t("home.ctaStrip.secondaryCta")}
          </a>
        </div>
      </div>
    </div>
  );
}

export default HomeCtaStripBlock;
