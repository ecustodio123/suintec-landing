import agricultureImage from "../assets/img/campo-de-cultivo-en-hileras-bajo-cielo-despejado.jpeg";
import constructionImage from "../assets/img/obra-de-construccion-de-edificios-con-gruas-torr.jpeg";
import industryImage from "../assets/img/planta-industrial-con-silos-y-torres-al-atardece.jpeg";
import sanitationImage from "../assets/img/planta-de-tratamiento-de-aguas-residuales-vista.jpeg";
import pumpMonobloque from "../assets/img/bombas-centrifugas-monobloque-en-hierro-fundido.jpeg";
import pumpDeepWell from "../assets/img/bomba-sumergible-de-pozo-profundo-y-motores-sume.jpeg";
import pumpVertical from "../assets/img/familia-de-bombas-verticales-multietapa-en-acero.jpeg";
import pumpHorizontal from "../assets/img/bombas-horizontales-multietapa-en-acero-inoxidab.jpeg";
import pumpFreeShaft from "../assets/img/bomba-de-eje-libre-acoplada-a-motor-sobre-placa.jpeg";
import pumpBell from "../assets/img/bombas-sumergibles-tipo-campana-en-hierro-fundid.jpeg";
import motorElectric from "../assets/img/motores-electricos-trifasicos-en-distintas-poten.jpeg";
import motorGear from "../assets/img/motorreductores-y-reductores-de-engranajes.jpeg";
import motorBlower from "../assets/img/sopladores-regenerativos-de-canal-lateral-tipo-b.jpeg";
import brandPedrollo from "../assets/img/pedrollo.png";
import brandPentax from "../assets/img/pentax.png";
import brandEspa from "../assets/img/espa.png";
import brandBarnes from "../assets/img/barnes.png";
import brandEbara from "../assets/img/ebara.png";
import brandFranklin from "../assets/img/franklin-electric.png";
import brandPanelli from "../assets/img/panelli.png";
import brandWeg from "../assets/img/weg.png";
import brandThompson from "../assets/img/thompson.png";
import brandHercules from "../assets/img/hercules.png";
import brandBonfiglioli from "../assets/img/bonfiglioli.png";
import aboutTechnicians from "../assets/img/tecnicos-de-suintec-revisando-una-bomba-y-un-tab.jpeg";
import panelImage from "../assets/img/tableros.png";
import accessoriesImage from "../assets/img/accesorios.png";
import brandSchneider from "../assets/img/schneider-electric.png";
import brandAbb from "../assets/img/abb.png";
import brandSiemens from "../assets/img/siemens.png";
import brandChint from "../assets/img/chint-electric.png";
import brandLs from "../assets/img/ls-electric.png";

export const aboutTeaserImage = aboutTechnicians;
export const panelsImage = panelImage;
export const accessoriesPanelImage = accessoriesImage;

export const applications = [
  { id: "agriculture", image: agricultureImage },
  { id: "construction", image: constructionImage },
  { id: "industry", image: industryImage },
  { id: "sanitation", image: sanitationImage },
];

export const pumpSolutions = [
  { id: "monobloque", image: pumpMonobloque },
  { id: "deepWell", image: pumpDeepWell },
  { id: "verticalMultistage", image: pumpVertical },
  { id: "horizontalMultistage", image: pumpHorizontal },
  { id: "freeShaft", image: pumpFreeShaft },
  { id: "bellSubmersible", image: pumpBell },
];

export const pumpBrands = [
  { name: "Pedrollo", src: brandPedrollo },
  { name: "Pentax", src: brandPentax },
  { name: "ESPA", src: brandEspa },
  { name: "Barnes", src: brandBarnes },
  { name: "Ebara", src: brandEbara },
  { name: "Franklin Electric", src: brandFranklin },
  { name: "Panelli", src: brandPanelli },
];

export const motorSolutions = [
  { id: "electric", image: motorElectric },
  { id: "gearmotors", image: motorGear },
  { id: "blowers", image: motorBlower },
];

export const motorBrands = [
  { name: "WEG", src: brandWeg },
  { name: "Thompson", src: brandThompson },
  { name: "Hercules", src: brandHercules },
  { name: "Bonfiglioli", src: brandBonfiglioli },
];

export const panelBrands = [
  { name: "Schneider Electric", src: brandSchneider },
  { name: "ABB", src: brandAbb },
  { name: "Siemens", src: brandSiemens },
  { name: "Chint Electric", src: brandChint },
  { name: "LS Electric", src: brandLs },
];

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
