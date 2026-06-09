import { useI18n } from "../../lang/i18n";

const STEPS = ["step1", "step2", "step3", "step4"];

function ProcessBlock() {
  const { t } = useI18n();

  return (
    <section className="process" id="proceso">
      <div className="wrap">
        <div className="sec-head reveal">
          <h2>{t("process.title")}</h2>
          <p>{t("process.description")}</p>
        </div>
        <div className="process-grid">
          {STEPS.map((step, index) => (
            <div className="step reveal" key={step}>
              <div className="step__num">{index + 1}</div>
              <h4>{t(`process.steps.${step}.title`)}</h4>
              <p>{t(`process.steps.${step}.description`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProcessBlock;
