import { useI18n } from "../../lang/i18n";

function BrandLogo({ className = "" }) {
  const { t } = useI18n();

  return (
    <div className={`brand-logo ${className}`.trim()}>
      <img src="/suintec-logo.jpeg" alt={`SUINTEC - ${t("logo.subtitle")}`} />
    </div>
  );
}

export default BrandLogo;
