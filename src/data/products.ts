// Product images
import beakerImg from "@/assets/products/beaker-glass.jpg";
import erlenmeyerImg from "@/assets/products/erlenmeyer.jpg";
import graduatedCylinderImg from "@/assets/products/graduated-cylinder.jpg";
import volumetricFlaskImg from "@/assets/products/volumetric-flask.jpg";
import buretteImg from "@/assets/products/burette.jpg";
import petriDishImg from "@/assets/products/petri-dish.jpg";
import separatingFunnelImg from "@/assets/products/separating-funnel.jpg";
import chemicalsReagentImg from "@/assets/products/chemicals-reagent.jpg";
import solventsImg from "@/assets/products/solvents.jpg";
import acidsImg from "@/assets/products/acids.jpg";
import hplcImg from "@/assets/products/hplc.jpg";
import uvVisImg from "@/assets/products/uv-vis.jpg";
import hotplateImg from "@/assets/products/hotplate-stirrer.jpg";

export type Category = "all" | "glassware" | "chemicals" | "instruments";

export interface Product {
  id: string;
  name: string;
  description: string;
  category: Category;
  subcategory: string;
  image: string;
  brand?: string;
  specs?: string[];
}

export const products: Product[] = [
  // ==================== GLASSWARE ====================
  {
    id: "gls-001",
    name: "Beaker Glass",
    description: "Gelas ukur borosilikat berkualitas tinggi untuk berbagai keperluan laboratorium.",
    category: "glassware",
    subcategory: "Volumetric",
    image: beakerImg,
    specs: ["Borosilikat 3.3", "Tahan panas hingga 500°C", "Tersedia: 50ml - 5000ml"],
  },
  {
    id: "gls-002",
    name: "Erlenmeyer Flask",
    description: "Labu Erlenmeyer dengan skala akurat untuk titrasi dan pencampuran larutan.",
    category: "glassware",
    subcategory: "Flask",
    image: erlenmeyerImg,
    specs: ["Borosilikat 3.3", "Neck standart", "Tersedia: 50ml - 2000ml"],
  },
  {
    id: "gls-003",
    name: "Graduated Cylinder",
    description: "Gelas ukur presisi tinggi dengan skala yang jelas dan akurat.",
    category: "glassware",
    subcategory: "Volumetric",
    image: graduatedCylinderImg,
    specs: ["Class A", "Akurasi tinggi", "Tersedia: 10ml - 1000ml"],
  },
  {
    id: "gls-004",
    name: "Volumetric Flask",
    description: "Labu takar presisi untuk pembuatan larutan standar.",
    category: "glassware",
    subcategory: "Flask",
    image: volumetricFlaskImg,
    specs: ["Class A", "Dengan stopper", "Tersedia: 25ml - 1000ml"],
  },
  {
    id: "gls-005",
    name: "Burette",
    description: "Buret kelas A untuk titrasi dengan ketelitian tinggi.",
    category: "glassware",
    subcategory: "Titration",
    image: buretteImg,
    specs: ["Class A", "Stopcock PTFE", "Tersedia: 25ml, 50ml"],
  },
  {
    id: "gls-006",
    name: "Petri Dish",
    description: "Cawan Petri untuk kultur mikroba dan sampel.",
    category: "glassware",
    subcategory: "Culture",
    image: petriDishImg,
    specs: ["Borosilikat", "Dengan tutup", "Diameter: 60mm - 150mm"],
  },
  {
    id: "gls-007",
    name: "Separating Funnel",
    description: "Corong pisah untuk ekstraksi dan pemisahan larutan.",
    category: "glassware",
    subcategory: "Separation",
    image: separatingFunnelImg,
    specs: ["Borosilikat 3.3", "Stopcock PTFE", "Tersedia: 125ml - 2000ml"],
  },

  // ==================== CHEMICALS ====================
  {
    id: "chm-001",
    name: "Reagent Grade Chemicals",
    description: "Bahan kimia grade reagen untuk analisa laboratorium.",
    category: "chemicals",
    subcategory: "Reagent",
    image: chemicalsReagentImg,
    brand: "Merck",
    specs: ["Pro Analysis Grade", "Sertifikat COA", "Kemasan asli"],
  },
  {
    id: "chm-002",
    name: "Laboratory Solvents",
    description: "Pelarut organik untuk ekstraksi, kromatografi, dan sintesis.",
    category: "chemicals",
    subcategory: "Solvent",
    image: solventsImg,
    brand: "Merck, JT Baker",
    specs: ["HPLC Grade tersedia", "Kemasan 1L - 20L", "Etanol, Metanol, Heksana, dll"],
  },
  {
    id: "chm-003",
    name: "Acids & Bases",
    description: "Asam dan basa untuk analisa dan preparasi sampel.",
    category: "chemicals",
    subcategory: "Inorganic",
    image: acidsImg,
    brand: "Merck",
    specs: ["H2SO4, HCl, HNO3", "NaOH, KOH", "Grade teknis & PA"],
  },

  // ==================== INSTRUMENTS ====================
  {
    id: "ins-001",
    name: "HPLC System",
    description: "High Performance Liquid Chromatography untuk analisa senyawa organik.",
    category: "instruments",
    subcategory: "Chromatography",
    image: hplcImg,
    brand: "Shimadzu, Agilent",
    specs: ["Detector UV-Vis/DAD", "Autosampler", "Software included"],
  },
  {
    id: "ins-002",
    name: "UV-Vis Spectrophotometer",
    description: "Spektrofotometer untuk analisa kuantitatif dan kualitatif.",
    category: "instruments",
    subcategory: "Spectroscopy",
    image: uvVisImg,
    brand: "Shimadzu, Thermo",
    specs: ["Range 190-1100nm", "Single/Double beam", "Software included"],
  },
  {
    id: "ins-003",
    name: "Hotplate Stirrer",
    description: "Hotplate dengan magnetic stirrer untuk pemanasan dan pengadukan.",
    category: "instruments",
    subcategory: "General Lab",
    image: hotplateImg,
    brand: "IKA, Corning",
    specs: ["Suhu maks 500°C", "Kecepatan 0-1500 rpm", "Ceramic top plate"],
  },
  {
    id: "ins-004",
    name: "ICP-OES Spectrometer",
    description: "Inductively Coupled Plasma untuk analisa multi-elemen dengan sensitivitas tinggi.",
    category: "instruments",
    subcategory: "Spectroscopy",
    image: uvVisImg,
    brand: "Agilent, Thermo Fisher",
    specs: ["Deteksi multi-elemen", "Range ppb - ppm", "Axial/Radial viewing"],
  },
  {
    id: "ins-005",
    name: "FTIR Spectrometer",
    description: "Fourier Transform Infrared untuk identifikasi gugus fungsi dan struktur molekul.",
    category: "instruments",
    subcategory: "Spectroscopy",
    image: uvVisImg,
    brand: "Thermo Nicolet, Bruker",
    specs: ["Range 400-4000 cm⁻¹", "ATR & Transmission", "Library database"],
  },
  {
    id: "ins-006",
    name: "GC-MS System",
    description: "Gas Chromatography Mass Spectrometry untuk analisa senyawa volatil.",
    category: "instruments",
    subcategory: "Chromatography",
    image: hplcImg,
    brand: "Shimadzu, Agilent",
    specs: ["Quadrupole MS", "Autosampler", "NIST Library"],
  },
  {
    id: "ins-007",
    name: "Analytical Balance",
    description: "Timbangan analitik presisi tinggi untuk pengukuran massa akurat.",
    category: "instruments",
    subcategory: "General Lab",
    image: hotplateImg,
    brand: "Mettler Toledo, Sartorius",
    specs: ["Ketelitian 0.0001g", "Kapasitas 220g", "Internal calibration"],
  },
  {
    id: "ins-008",
    name: "Centrifuge",
    description: "Sentrifugal untuk pemisahan partikel berdasarkan densitas.",
    category: "instruments",
    subcategory: "General Lab",
    image: hotplateImg,
    brand: "Eppendorf, Thermo",
    specs: ["Maks 15.000 rpm", "Rotor fixed/swing", "Refrigerated option"],
  },
];
