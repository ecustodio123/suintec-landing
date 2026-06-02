function ServiceCard({ item }) {
  return (
    <article className="surface-card" id={item.id}>
      <img src={item.image} alt={item.title} loading="lazy" />
      <div className="surface-card__body">
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        {item.ctaHref ? (
          <a className="surface-card__link" href={item.ctaHref}>
            {item.ctaLabel}
          </a>
        ) : null}
      </div>
    </article>
  );
}

export default ServiceCard;
