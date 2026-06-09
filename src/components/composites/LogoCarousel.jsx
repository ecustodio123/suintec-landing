function LogoCarousel({ logos, label }) {
  const loop = [...logos, ...logos];

  return (
    <div className="brands">
      <span className="brands-label">{label}</span>
      <div className="marquee">
        <div className="marquee-track">
          {loop.map((logo, index) => (
            <div className="logo-chip" key={`${logo.name}-${index}`}>
              <img src={logo.src} alt={logo.name} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LogoCarousel;
