export const heroImage =
  "/images/suintec-hero-industrial.jpg";

export const aboutTeaserImage =
  "/images/suintec-quienes-somos.jpg";

export const services = [
  {
    id: "pumps",
    anchor: "bombas",
    image: "/images/suintec-bombas.jpg",
  },
  {
    id: "motors",
    anchor: "motores",
    image: "/images/suintec-motores.jpg",
  },
  {
    id: "panels",
    anchor: "tableros",
    image: "/images/suintec-tableros.jpg",
  },
  {
    id: "accessories",
    anchor: "accesorios",
    image: "/images/suintec-accesorios.jpg",
  },
];

export const testimonials = [{ id: "contractor" }, { id: "engineering" }, { id: "maintenance" }];

export const serviceShowcase = [
  {
    id: "pumpingSystems",
    image: "/images/suintec-bombas.jpg",
    pointKeys: ["point1", "point2", "point3"],
  },
  {
    id: "motorDrive",
    image: "/images/suintec-motores.jpg",
    pointKeys: ["point1", "point2", "point3"],
  },
  {
    id: "electricalIntegration",
    image: "/images/suintec-tableros.jpg",
    pointKeys: ["point1", "point2", "point3"],
  },
  {
    id: "technicalSupply",
    image: "/images/suintec-accesorios.jpg",
    pointKeys: ["point1", "point2", "point3"],
  },
];

export const supportServiceKeys = [
  "quality",
  "technicalSupport",
  "reliableSolutions",
  "specializedAttention",
];

export const whyChooseUs = supportServiceKeys.map((id) => ({ id }));
