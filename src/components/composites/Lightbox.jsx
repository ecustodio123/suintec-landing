import { useEffect } from "react";

function Lightbox({ product, onClose, quoteLink, quoteLabel }) {
  useEffect(() => {
    if (!product) {
      return undefined;
    }
    const onKey = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [product, onClose]);

  if (!product) {
    return null;
  }

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={product.title} onClick={onClose}>
      <div className="lightbox__panel" onClick={(event) => event.stopPropagation()}>
        <button type="button" className="lightbox__close" onClick={onClose} aria-label="Cerrar">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
        <div className="lightbox__media">
          <img src={product.image} alt={product.title} />
        </div>
        <div className="lightbox__body">
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <a className="btn btn-green" href={quoteLink(product.title)} target="_blank" rel="noreferrer">
            {quoteLabel}
          </a>
        </div>
      </div>
    </div>
  );
}

export default Lightbox;
