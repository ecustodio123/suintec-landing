import { useI18n } from "../../lang/i18n";

const ITEMS = [
  {
    id: "advice",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
    ),
  },
  {
    id: "delivery",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="1" y="3" width="15" height="13" />
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
  },
  {
    id: "b2b",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
];

function CoverageBlock() {
  const { t } = useI18n();

  return (
    <section className="coverage" id="cobertura">
      <div className="wrap">
        <div className="sec-head reveal">
          <h2>{t("coverage.title")}</h2>
          <p>{t("coverage.description")}</p>
        </div>
        <div className="coverage-grid">
          {ITEMS.map((item) => (
            <div className="coverage-card reveal" key={item.id}>
              <span className="coverage-ic">{item.icon}</span>
              <h4>{t(`coverage.items.${item.id}.title`)}</h4>
              <p>{t(`coverage.items.${item.id}.description`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CoverageBlock;
