export const heroImage =
  "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1400&q=80";

export const aboutTeaserImage =
  "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80";

export const services = [
  {
    id: "pumps",
    anchor: "bombas",
    image:
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "motors",
    anchor: "motores",
    image:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "panels",
    anchor: "tableros",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "accessories",
    anchor: "accesorios",
    image:
      "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?auto=format&fit=crop&w=1200&q=80",
  },
];

export const testimonials = [{ id: "contractor" }, { id: "engineering" }, { id: "maintenance" }];

export const serviceShowcase = [
  {
    id: "pumpingSystems",
    image:
      "https://images.unsplash.com/photo-1496247749665-49cf5b1022e9?auto=format&fit=crop&w=1200&q=80",
    pointKeys: ["point1", "point2", "point3"],
  },
  {
    id: "motorDrive",
    image:
      "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&w=1200&q=80",
    pointKeys: ["point1", "point2", "point3"],
  },
  {
    id: "electricalIntegration",
    image:
      "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&w=1200&q=80",
    pointKeys: ["point1", "point2", "point3"],
  },
  {
    id: "technicalSupply",
    image:
      "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1200&q=80",
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
