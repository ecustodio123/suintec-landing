import { NavLink } from "react-router-dom";
import { useI18n } from "../lang/i18n";

function NotFoundPage() {
  const { t } = useI18n();

  return (
    <main className="notfound">
      <div className="wrap notfound__inner">
        <div className="notfound__code">404</div>
        <h1>{t("pages.notFound.title")}</h1>
        <p>{t("pages.notFound.description")}</p>
        <NavLink to="/" className="btn btn-green">
          {t("pages.notFound.backHome")}
        </NavLink>
      </div>
    </main>
  );
}

export default NotFoundPage;
