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

function TypeCategory({ idPrefix, items, brands }) {
  const { t } = useI18n();

  return (
    <div className="cat-block reveal">
      <div className="cat-block-head">
        <h3>{t(`solutions.${idPrefix}.title`)}</h3>
        <p>{t(`solutions.${idPrefix}.description`)}</p>
      </div>
      <div className="type-grid">
        {items.map((item) => (
          <article className="type-card" key={item.id}>
            <div className="img">
              <img src={item.image} alt={t(`solutions.${idPrefix}.items.${item.id}.title`)} loading="lazy" />
            </div>
            <div className="body">
              <h4>{t(`solutions.${idPrefix}.items.${item.id}.title`)}</h4>
              <p>{t(`solutions.${idPrefix}.items.${item.id}.description`)}</p>
            </div>
          </article>
        ))}
      </div>
      {brands ? <LogoCarousel logos={brands} label={t("solutions.brandsLabel")} /> : null}
    </div>
  );
}

function FeatureCategory({ idPrefix, points, image, brands, brandsLabel }) {
  const { t } = useI18n();

  return (
    <div className="cat-block reveal">
      <div className="cat-block-head">
        <h3>{t(`solutions.${idPrefix}.title`)}</h3>
      </div>
      <div className="tablero-block">
        <div className="tablero-text">
          <p>{t(`solutions.${idPrefix}.description`)}</p>
          <ul className="feat-list">
            {points.map((point) => (
              <li key={point}>{t(`solutions.${idPrefix}.points.${point}`)}</li>
            ))}
          </ul>
        </div>
        <div className="tablero-img">
          <img src={image} alt={t(`solutions.${idPrefix}.title`)} loading="lazy" />
        </div>
      </div>
      {brands ? <LogoCarousel logos={brands} label={brandsLabel} /> : null}
    </div>
  );
}

function SolutionsBlock() {
  const { t } = useI18n();

  return (
    <section className="solutions" id="soluciones">
      <div className="wrap">
        <div className="sec-head reveal">
          <h2>{t("solutions.title")}</h2>
          <p>{t("solutions.description")}</p>
        </div>

        <TypeCategory idPrefix="pumps" items={pumpSolutions} brands={pumpBrands} />
        <TypeCategory idPrefix="motors" items={motorSolutions} brands={motorBrands} />

        <FeatureCategory
          idPrefix="panels"
          points={["point1", "point2", "point3"]}
          image={panelsImage}
          brands={panelBrands}
          brandsLabel={t("solutions.componentsBrandsLabel")}
        />

        <FeatureCategory
          idPrefix="accessories"
          points={["point1", "point2", "point3", "point4", "point5"]}
          image={accessoriesPanelImage}
        />
      </div>
    </section>
  );
}

export default SolutionsBlock;
