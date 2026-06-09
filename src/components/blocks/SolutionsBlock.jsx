import { useState } from "react";
import {
  accessoriesPanelImage,
  motorBrands,
  motorSolutions,
  panelBrands,
  panelsImage,
  pumpBrands,
  pumpSolutions,
} from "../../data/demoContent";
import { useI18n } from "../../lang/i18n";
import LogoCarousel from "../composites/LogoCarousel";
import Lightbox from "../composites/Lightbox";

function useQuoteLink() {
  const { t } = useI18n();
  const phone = t("business.phoneHref").replace(/\D/g, "");
  return (product) =>
    `https://wa.me/${phone}?text=${encodeURIComponent(`${t("solutions.quoteMessagePrefix")} ${product}`)}`;
}

const QuoteArrow = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const ZoomIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <circle cx="11" cy="11" r="7" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
    <line x1="11" y1="8" x2="11" y2="14" />
    <line x1="8" y1="11" x2="14" y2="11" />
  </svg>
);

function TypeCategory({ idPrefix, items, brands, quoteLink, onOpen }) {
  const { t } = useI18n();

  return (
    <div className="cat-block reveal">
      <div className="cat-block-head">
        <h3>{t(`solutions.${idPrefix}.title`)}</h3>
        <p>{t(`solutions.${idPrefix}.description`)}</p>
      </div>
      <div className="type-grid">
        {items.map((item) => {
          const title = t(`solutions.${idPrefix}.items.${item.id}.title`);
          const description = t(`solutions.${idPrefix}.items.${item.id}.description`);
          return (
            <article className="type-card" key={item.id}>
              <button type="button" className="img" onClick={() => onOpen({ image: item.image, title, description })}>
                <img src={item.image} alt={title} loading="lazy" />
                <span className="type-card__zoom">
                  <ZoomIcon />
                </span>
              </button>
              <div className="body">
                <h4>{title}</h4>
                <p>{description}</p>
                <a className="solution-quote" href={quoteLink(title)} target="_blank" rel="noreferrer">
                  {t("solutions.quoteCta")} <QuoteArrow />
                </a>
              </div>
            </article>
          );
        })}
      </div>
      {brands ? <LogoCarousel logos={brands} label={t("solutions.brandsLabel")} /> : null}
    </div>
  );
}

function FeatureCategory({ idPrefix, points, image, brands, brandsLabel, quoteLink }) {
  const { t } = useI18n();
  const title = t(`solutions.${idPrefix}.title`);

  return (
    <div className="cat-block reveal">
      <div className="cat-block-head">
        <h3>{title}</h3>
      </div>
      <div className="tablero-block">
        <div className="tablero-text">
          <p>{t(`solutions.${idPrefix}.description`)}</p>
          <ul className="feat-list">
            {points.map((point) => (
              <li key={point}>{t(`solutions.${idPrefix}.points.${point}`)}</li>
            ))}
          </ul>
          <a className="btn btn-green" href={quoteLink(title)} target="_blank" rel="noreferrer">
            {t("solutions.quoteCta")}
          </a>
        </div>
        <div className="tablero-img">
          <img src={image} alt={title} loading="lazy" />
        </div>
      </div>
      {brands ? <LogoCarousel logos={brands} label={brandsLabel} /> : null}
    </div>
  );
}

function SolutionsBlock() {
  const { t } = useI18n();
  const quoteLink = useQuoteLink();
  const [active, setActive] = useState(null);

  return (
    <section className="solutions" id="soluciones">
      <div className="wrap">
        <div className="sec-head reveal">
          <h2>{t("solutions.title")}</h2>
          <p>{t("solutions.description")}</p>
        </div>

        <TypeCategory idPrefix="pumps" items={pumpSolutions} brands={pumpBrands} quoteLink={quoteLink} onOpen={setActive} />
        <TypeCategory idPrefix="motors" items={motorSolutions} brands={motorBrands} quoteLink={quoteLink} onOpen={setActive} />

        <FeatureCategory
          idPrefix="panels"
          points={["point1", "point2", "point3"]}
          image={panelsImage}
          brands={panelBrands}
          brandsLabel={t("solutions.componentsBrandsLabel")}
          quoteLink={quoteLink}
        />

        <FeatureCategory
          idPrefix="accessories"
          points={["point1", "point2", "point3", "point4", "point5"]}
          image={accessoriesPanelImage}
          quoteLink={quoteLink}
        />
      </div>

      <Lightbox product={active} onClose={() => setActive(null)} quoteLink={quoteLink} quoteLabel={t("solutions.quoteCta")} />
    </section>
  );
}

export default SolutionsBlock;
