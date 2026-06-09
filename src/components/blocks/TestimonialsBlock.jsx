import { useI18n } from "../../lang/i18n";

const KEYS = ["agro", "construction", "industrial"];

const Stars = () => (
  <div className="testi__stars" aria-hidden="true">
    {Array.from({ length: 5 }).map((_, i) => (
      <svg key={i} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01L12 2z" />
      </svg>
    ))}
  </div>
);

function TestimonialsBlock() {
  const { t } = useI18n();

  return (
    <section className="testimonials-sec" id="testimonios">
      <div className="wrap">
        <div className="sec-head reveal">
          <h2>{t("testimonials.title")}</h2>
          <p>{t("testimonials.description")}</p>
        </div>
        <div className="testi-grid">
          {KEYS.map((key) => (
            <figure className="testi reveal" key={key}>
              <Stars />
              <blockquote className="testi__text">“{t(`testimonials.items.${key}.text`)}”</blockquote>
              <figcaption className="testi__name">{t(`testimonials.items.${key}.company`)}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsBlock;
