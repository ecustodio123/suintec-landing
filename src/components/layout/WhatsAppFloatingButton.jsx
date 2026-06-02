import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { useI18n } from "../../lang/i18n";

function WhatsAppFloatingButton() {
  const { t } = useI18n();

  return (
    <a className="whatsapp-fab" href={t("business.whatsappHref")} target="_blank" rel="noreferrer" aria-label={t("whatsapp.ariaLabel")}>
      <WhatsAppIcon sx={{ fontSize: 24 }} />
      <span>{t("whatsapp.label")}</span>
    </a>
  );
}

export default WhatsAppFloatingButton;
