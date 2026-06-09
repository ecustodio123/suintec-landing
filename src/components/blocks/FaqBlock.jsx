import { useState } from "react";
import { useI18n } from "../../lang/i18n";

const KEYS = ["q1", "q2", "q3", "q4", "q5"];

function FaqBlock() {
  const { t } = useI18n();
  const [openKey, setOpenKey] = useState(null);

  return (
    <section className="faq-sec" id="faq">
      <div className="wrap faq-wrap">
        <div className="sec-head reveal">
          <h2>{t("faq.title")}</h2>
          <p>{t("faq.description")}</p>
        </div>
        <div className="faq-list reveal">
          {KEYS.map((key) => {
            const isOpen = openKey === key;
            return (
              <div className={`faq-item ${isOpen ? "open" : ""}`.trim()} key={key}>
                <button
                  type="button"
                  className="faq-q"
                  aria-expanded={isOpen}
                  onClick={() => setOpenKey(isOpen ? null : key)}
                >
                  <span>{t(`faq.items.${key}.question`)}</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>
                <div className="faq-a">
                  <p>{t(`faq.items.${key}.answer`)}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FaqBlock;
