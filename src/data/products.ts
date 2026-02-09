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

export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  longDescription?: string;
  category: Category;
  subcategory: string;
  image: string;
  gallery?: string[];
  brand?: string;
  specs?: string[];
  detailedSpecs?: ProductSpec[];
  features?: string[];
  applications?: string[];
}

export const products: Product[] = [
  // ==================== GLASSWARE ====================
  {
    id: "gls-001",
    name: "Beaker Glass",
    description: "Gelas ukur borosilikat berkualitas tinggi untuk berbagai keperluan laboratorium.",
    longDescription: "Beaker glass borosilikat 3.3 dengan kualitas premium, dirancang untuk penggunaan laboratorium yang intensif. Tahan terhadap perubahan suhu ekstrem dan memiliki ketahanan kimia yang sangat baik terhadap sebagian besar larutan asam, basa, dan pelarut organik.",
    category: "glassware",
    subcategory: "Volumetric",
    image: beakerImg,
    gallery: [beakerImg, erlenmeyerImg, graduatedCylinderImg],
    specs: ["Borosilikat 3.3", "Tahan panas hingga 500°C", "Tersedia: 50ml - 5000ml"],
    detailedSpecs: [
      { label: "Material", value: "Borosilikat 3.3" },
      { label: "Ketahanan Suhu", value: "Hingga 500°C" },
      { label: "Volume Tersedia", value: "50ml, 100ml, 250ml, 500ml, 1000ml, 2000ml, 5000ml" },
      { label: "Skala", value: "Printed, tahan lama" },
      { label: "Standar", value: "ISO 3819, DIN 12331" },
    ],
    features: [
      "Tahan perubahan suhu ekstrem (thermal shock resistant)",
      "Skala yang jelas dan tahan lama",
      "Permukaan halus untuk kemudahan pembersihan",
      "Dapat diautoklaf untuk sterilisasi",
    ],
    applications: [
      "Pengukuran dan pencampuran larutan",
      "Pemanasan larutan di atas hotplate",
      "Preparasi sampel",
      "Reaksi kimia sederhana",
    ],
  },
  {
    id: "gls-002",
    name: "Erlenmeyer Flask",
    description: "Labu Erlenmeyer dengan skala akurat untuk titrasi dan pencampuran larutan.",
    longDescription: "Labu Erlenmeyer borosilikat dengan desain klasik yang memungkinkan pengadukan tanpa tumpah. Bentuk kerucut meminimalkan penguapan dan memudahkan proses titrasi dengan akurasi tinggi.",
    category: "glassware",
    subcategory: "Flask",
    image: erlenmeyerImg,
    gallery: [erlenmeyerImg, beakerImg, volumetricFlaskImg],
    specs: ["Borosilikat 3.3", "Neck standart", "Tersedia: 50ml - 2000ml"],
    detailedSpecs: [
      { label: "Material", value: "Borosilikat 3.3" },
      { label: "Tipe Neck", value: "Standard (tanpa stopper)" },
      { label: "Volume Tersedia", value: "50ml, 100ml, 250ml, 500ml, 1000ml, 2000ml" },
      { label: "Standar", value: "ISO 1773, DIN 12380" },
    ],
    features: [
      "Desain kerucut mencegah tumpahan saat pengadukan",
      "Meminimalkan penguapan pelarut",
      "Cocok untuk titrasi dan kultur mikroba",
    ],
    applications: [
      "Titrasi asam-basa",
      "Kultur mikroba (dengan kapas penutup)",
      "Pencampuran dan penyimpanan larutan",
      "Reaksi kimia dengan pengadukan",
    ],
  },
  {
    id: "gls-003",
    name: "Graduated Cylinder",
    description: "Gelas ukur presisi tinggi dengan skala yang jelas dan akurat.",
    longDescription: "Gelas ukur Class A dengan akurasi tinggi untuk pengukuran volume yang presisi. Dilengkapi dengan base heksagonal untuk kestabilan dan spout untuk menuang tanpa tumpah.",
    category: "glassware",
    subcategory: "Volumetric",
    image: graduatedCylinderImg,
    gallery: [graduatedCylinderImg, beakerImg, volumetricFlaskImg],
    specs: ["Class A", "Akurasi tinggi", "Tersedia: 10ml - 1000ml"],
    detailedSpecs: [
      { label: "Kelas Akurasi", value: "Class A (±0.5%)" },
      { label: "Material", value: "Borosilikat 3.3" },
      { label: "Volume Tersedia", value: "10ml, 25ml, 50ml, 100ml, 250ml, 500ml, 1000ml" },
      { label: "Base", value: "Heksagonal, stabil" },
      { label: "Standar", value: "ISO 4788, DIN 12681" },
    ],
    features: [
      "Akurasi Class A untuk pengukuran presisi",
      "Base heksagonal mencegah terguling",
      "Spout untuk menuang yang presisi",
    ],
    applications: [
      "Pengukuran volume larutan",
      "Preparasi larutan standar",
      "Praktikum laboratorium",
    ],
  },
  {
    id: "gls-004",
    name: "Volumetric Flask",
    description: "Labu takar presisi untuk pembuatan larutan standar.",
    longDescription: "Labu takar Class A dengan stopper kaca atau plastik untuk pembuatan larutan standar dengan konsentrasi yang tepat. Memiliki garis batas yang presisi dan leher yang panjang untuk akurasi pembacaan meniskus.",
    category: "glassware",
    subcategory: "Flask",
    image: volumetricFlaskImg,
    gallery: [volumetricFlaskImg, erlenmeyerImg, graduatedCylinderImg],
    specs: ["Class A", "Dengan stopper", "Tersedia: 25ml - 1000ml"],
    detailedSpecs: [
      { label: "Kelas Akurasi", value: "Class A (±0.02%)" },
      { label: "Material", value: "Borosilikat 3.3" },
      { label: "Stopper", value: "Kaca atau PP" },
      { label: "Volume Tersedia", value: "25ml, 50ml, 100ml, 250ml, 500ml, 1000ml" },
      { label: "Standar", value: "ISO 1042, DIN 12664" },
    ],
    features: [
      "Akurasi tertinggi untuk pembuatan larutan standar",
      "Garis batas yang jelas dan presisi",
      "Stopper mencegah kontaminasi dan penguapan",
    ],
    applications: [
      "Pembuatan larutan standar",
      "Pengenceran presisi",
      "Analisa gravimetri dan volumetri",
    ],
  },
  {
    id: "gls-005",
    name: "Burette",
    description: "Buret kelas A untuk titrasi dengan ketelitian tinggi.",
    longDescription: "Buret Class A dengan stopcock PTFE yang tahan kimia, dirancang untuk titrasi presisi. Skala yang jelas memungkinkan pembacaan volume dengan akurasi 0.05ml.",
    category: "glassware",
    subcategory: "Titration",
    image: buretteImg,
    gallery: [buretteImg, erlenmeyerImg, volumetricFlaskImg],
    specs: ["Class A", "Stopcock PTFE", "Tersedia: 25ml, 50ml"],
    detailedSpecs: [
      { label: "Kelas Akurasi", value: "Class A (±0.05ml)" },
      { label: "Stopcock", value: "PTFE, tahan kimia" },
      { label: "Volume Tersedia", value: "25ml, 50ml" },
      { label: "Graduasi", value: "0.1ml" },
      { label: "Standar", value: "ISO 385, DIN 12700" },
    ],
    features: [
      "Stopcock PTFE tahan terhadap hampir semua larutan",
      "Skala cetak yang tahan lama",
      "Tip yang presisi untuk kontrol tetesan",
    ],
    applications: [
      "Titrasi asam-basa",
      "Titrasi redoks",
      "Analisa volumetri",
    ],
  },
  {
    id: "gls-006",
    name: "Petri Dish",
    description: "Cawan Petri untuk kultur mikroba dan sampel.",
    longDescription: "Cawan Petri borosilikat dengan tutup yang pas untuk kultur mikroba, penyimpanan sampel, dan berbagai aplikasi laboratorium. Dapat diautoklaf untuk sterilisasi berulang.",
    category: "glassware",
    subcategory: "Culture",
    image: petriDishImg,
    gallery: [petriDishImg, beakerImg, erlenmeyerImg],
    specs: ["Borosilikat", "Dengan tutup", "Diameter: 60mm - 150mm"],
    detailedSpecs: [
      { label: "Material", value: "Borosilikat 3.3" },
      { label: "Diameter Tersedia", value: "60mm, 90mm, 100mm, 120mm, 150mm" },
      { label: "Tinggi", value: "15mm - 25mm" },
      { label: "Sterilisasi", value: "Autoclavable" },
    ],
    features: [
      "Tutup pas mencegah kontaminasi",
      "Dapat diautoklaf berkali-kali",
      "Permukaan halus untuk pertumbuhan kultur optimal",
    ],
    applications: [
      "Kultur bakteri dan jamur",
      "Penyimpanan sampel",
      "Cover untuk beaker saat pemanasan",
    ],
  },
  {
    id: "gls-007",
    name: "Separating Funnel",
    description: "Corong pisah untuk ekstraksi dan pemisahan larutan.",
    longDescription: "Corong pisah bentuk pir dengan stopcock PTFE untuk ekstraksi cair-cair. Dilengkapi stopper kaca dan stopcock yang presisi untuk kontrol aliran yang akurat.",
    category: "glassware",
    subcategory: "Separation",
    image: separatingFunnelImg,
    gallery: [separatingFunnelImg, erlenmeyerImg, beakerImg],
    specs: ["Borosilikat 3.3", "Stopcock PTFE", "Tersedia: 125ml - 2000ml"],
    detailedSpecs: [
      { label: "Material", value: "Borosilikat 3.3" },
      { label: "Stopcock", value: "PTFE, tahan pelarut organik" },
      { label: "Stopper", value: "Kaca ground" },
      { label: "Volume Tersedia", value: "125ml, 250ml, 500ml, 1000ml, 2000ml" },
      { label: "Bentuk", value: "Pir (pear shape)" },
    ],
    features: [
      "Stopcock PTFE tahan terhadap pelarut organik",
      "Bentuk pir memudahkan pemisahan fase",
      "Stopper kaca mencegah kebocoran",
    ],
    applications: [
      "Ekstraksi cair-cair",
      "Pemisahan fase organik dan aqueous",
      "Purifikasi senyawa",
    ],
  },

  // ==================== CHEMICALS ====================
  {
    id: "chm-001",
    name: "Reagent Grade Chemicals",
    description: "Bahan kimia grade reagen untuk analisa laboratorium.",
    longDescription: "Koleksi lengkap bahan kimia grade Pro Analysis (PA) dari Merck dengan kemurnian tinggi untuk analisa laboratorium. Setiap batch dilengkapi dengan Certificate of Analysis (COA) untuk jaminan kualitas.",
    category: "chemicals",
    subcategory: "Reagent",
    image: chemicalsReagentImg,
    gallery: [chemicalsReagentImg, solventsImg, acidsImg],
    brand: "Merck",
    specs: ["Pro Analysis Grade", "Sertifikat COA", "Kemasan asli"],
    detailedSpecs: [
      { label: "Grade", value: "Pro Analysis (PA)" },
      { label: "Kemurnian", value: ">99%" },
      { label: "Sertifikat", value: "COA tersedia" },
      { label: "Kemasan", value: "Original, sealed" },
      { label: "Penyimpanan", value: "Sesuai MSDS" },
    ],
    features: [
      "Kemurnian tinggi untuk hasil analisa akurat",
      "COA untuk setiap batch",
      "Kemasan asli dari pabrik",
      "MSDS tersedia",
    ],
    applications: [
      "Analisa kuantitatif dan kualitatif",
      "Preparasi larutan standar",
      "Penelitian dan pengembangan",
      "Quality control",
    ],
  },
  {
    id: "chm-002",
    name: "Laboratory Solvents",
    description: "Pelarut organik untuk ekstraksi, kromatografi, dan sintesis.",
    longDescription: "Pelarut organik berkualitas tinggi tersedia dalam berbagai grade: Technical, Analytical, dan HPLC Grade. Cocok untuk berbagai aplikasi mulai dari ekstraksi hingga kromatografi presisi tinggi.",
    category: "chemicals",
    subcategory: "Solvent",
    image: solventsImg,
    gallery: [solventsImg, chemicalsReagentImg, acidsImg],
    brand: "Merck, JT Baker",
    specs: ["HPLC Grade tersedia", "Kemasan 1L - 20L", "Etanol, Metanol, Heksana, dll"],
    detailedSpecs: [
      { label: "Grade Tersedia", value: "Technical, AR, HPLC" },
      { label: "Kemasan", value: "1L, 2.5L, 4L, 20L" },
      { label: "Produk", value: "Etanol, Metanol, Aseton, Heksana, DCM, dll" },
      { label: "Sertifikat", value: "COA tersedia" },
    ],
    features: [
      "Berbagai grade sesuai kebutuhan",
      "Kemasan dari 1L hingga drum",
      "Brand terpercaya: Merck, JT Baker",
      "Pengiriman aman dengan packing khusus",
    ],
    applications: [
      "Ekstraksi sampel",
      "Mobile phase HPLC",
      "Pembersihan peralatan",
      "Sintesis organik",
    ],
  },
  {
    id: "chm-003",
    name: "Acids & Bases",
    description: "Asam dan basa untuk analisa dan preparasi sampel.",
    longDescription: "Asam dan basa anorganik dengan kemurnian Pro Analysis untuk destruksi sampel, titrasi, dan berbagai analisa kimia. Tersedia dalam grade teknis dan PA sesuai kebutuhan.",
    category: "chemicals",
    subcategory: "Inorganic",
    image: acidsImg,
    gallery: [acidsImg, chemicalsReagentImg, solventsImg],
    brand: "Merck",
    specs: ["H2SO4, HCl, HNO3", "NaOH, KOH", "Grade teknis & PA"],
    detailedSpecs: [
      { label: "Asam Tersedia", value: "H2SO4, HCl, HNO3, H3PO4, HF" },
      { label: "Basa Tersedia", value: "NaOH, KOH, NH4OH" },
      { label: "Grade", value: "Technical & Pro Analysis" },
      { label: "Konsentrasi", value: "Sesuai spesifikasi standar" },
    ],
    features: [
      "Kemurnian tinggi untuk analisa akurat",
      "Grade teknis untuk keperluan umum",
      "Grade PA untuk analisa presisi",
      "Kemasan aman sesuai standar B3",
    ],
    applications: [
      "Destruksi sampel (digestion)",
      "Titrasi asam-basa",
      "Pengaturan pH",
      "Preparasi larutan",
    ],
  },

  // ==================== INSTRUMENTS ====================
  {
    id: "ins-001",
    name: "HPLC System",
    description: "High Performance Liquid Chromatography untuk analisa senyawa organik.",
    longDescription: "Sistem HPLC lengkap dengan pompa, injektor, kolom, dan detektor untuk analisa kualitatif dan kuantitatif senyawa organik. Dilengkapi software untuk akuisisi dan analisa data.",
    category: "instruments",
    subcategory: "Chromatography",
    image: hplcImg,
    gallery: [hplcImg, uvVisImg, hotplateImg],
    brand: "Shimadzu, Agilent",
    specs: ["Detector UV-Vis/DAD", "Autosampler", "Software included"],
    detailedSpecs: [
      { label: "Pompa", value: "Binary/Quaternary, hingga 400 bar" },
      { label: "Detektor", value: "UV-Vis, DAD, RID, FLD tersedia" },
      { label: "Autosampler", value: "Kapasitas 100+ vial" },
      { label: "Kolom", value: "C18, C8, HILIC tersedia" },
      { label: "Software", value: "LabSolutions / OpenLab" },
    ],
    features: [
      "Sistem modular, dapat dikustomisasi",
      "Berbagai jenis detektor tersedia",
      "Autosampler untuk throughput tinggi",
      "Software analisa data terintegrasi",
    ],
    applications: [
      "Analisa farmasi dan obat",
      "Pengujian pangan",
      "Analisa lingkungan",
      "Penelitian dan pengembangan",
    ],
  },
  {
    id: "ins-002",
    name: "UV-Vis Spectrophotometer",
    description: "Spektrofotometer untuk analisa kuantitatif dan kualitatif.",
    longDescription: "Spektrofotometer UV-Vis dengan range panjang gelombang 190-1100nm untuk analisa kuantitatif dan kualitatif berbagai sampel. Tersedia model single beam dan double beam dengan berbagai fitur.",
    category: "instruments",
    subcategory: "Spectroscopy",
    image: uvVisImg,
    gallery: [uvVisImg, hplcImg, hotplateImg],
    brand: "Shimadzu, Thermo",
    specs: ["Range 190-1100nm", "Single/Double beam", "Software included"],
    detailedSpecs: [
      { label: "Range Panjang Gelombang", value: "190 - 1100 nm" },
      { label: "Bandwidth", value: "1nm, 2nm, 4nm selectable" },
      { label: "Akurasi Absorbansi", value: "±0.002 Abs (0-0.5 Abs)" },
      { label: "Stray Light", value: "<0.02% T" },
      { label: "Konektivitas", value: "USB, RS-232" },
    ],
    features: [
      "Optic double beam untuk stabilitas tinggi",
      "Scanning otomatis dengan kecepatan variabel",
      "Berbagai mode pengukuran",
      "Software untuk kinetik dan kuantitasi",
    ],
    applications: [
      "Analisa konsentrasi larutan",
      "Spektrum absorpsi",
      "Kinetika reaksi",
      "Quality control",
    ],
  },
  {
    id: "ins-003",
    name: "Hotplate Stirrer",
    description: "Hotplate dengan magnetic stirrer untuk pemanasan dan pengadukan.",
    longDescription: "Hotplate stirrer dengan plate keramik untuk pemanasan hingga 500°C dan pengadukan magnetik hingga 1500 rpm. Ideal untuk berbagai aplikasi pemanasan dan pencampuran di laboratorium.",
    category: "instruments",
    subcategory: "General Lab",
    image: hotplateImg,
    gallery: [hotplateImg, uvVisImg, hplcImg],
    brand: "IKA, Corning",
    specs: ["Suhu maks 500°C", "Kecepatan 0-1500 rpm", "Ceramic top plate"],
    detailedSpecs: [
      { label: "Suhu Maksimum", value: "500°C" },
      { label: "Kecepatan Stirring", value: "0 - 1500 rpm" },
      { label: "Kapasitas Stirring", value: "Hingga 20L (H2O)" },
      { label: "Plate Material", value: "Keramik, tahan kimia" },
      { label: "Dimensi Plate", value: "135 x 135 mm" },
    ],
    features: [
      "Plate keramik tahan kimia dan mudah dibersihkan",
      "Kontrol suhu digital dengan akurasi ±1°C",
      "Safety feature: indikator hot surface",
      "Timer built-in",
    ],
    applications: [
      "Pemanasan dan pencampuran larutan",
      "Sintesis kimia",
      "Ekstraksi dengan pemanasan",
      "Preparasi sampel",
    ],
  },
  {
    id: "ins-004",
    name: "ICP-OES Spectrometer",
    description: "Inductively Coupled Plasma untuk analisa multi-elemen dengan sensitivitas tinggi.",
    longDescription: "ICP-OES (Optical Emission Spectrometry) untuk analisa multi-elemen simultan dengan sensitivitas tinggi. Mampu mendeteksi hingga 70+ elemen dalam satu kali pengukuran dengan limit deteksi ppb.",
    category: "instruments",
    subcategory: "Spectroscopy",
    image: uvVisImg,
    gallery: [uvVisImg, hplcImg, hotplateImg],
    brand: "Agilent, Thermo Fisher",
    specs: ["Deteksi multi-elemen", "Range ppb - ppm", "Axial/Radial viewing"],
    detailedSpecs: [
      { label: "Jumlah Elemen", value: "70+ elemen simultan" },
      { label: "Limit Deteksi", value: "Sub-ppb untuk sebagian besar elemen" },
      { label: "Viewing Mode", value: "Axial, Radial, Dual" },
      { label: "Plasma", value: "Argon ICP, 27MHz" },
      { label: "Autosampler", value: "Tersedia (opsional)" },
    ],
    features: [
      "Analisa multi-elemen simultan",
      "Sensitivitas tinggi (ppb level)",
      "Dual viewing untuk fleksibilitas",
      "Software method development",
    ],
    applications: [
      "Analisa logam dalam air dan limbah",
      "Pengujian mineral dan geologi",
      "Quality control bahan baku",
      "Penelitian material",
    ],
  },
  {
    id: "ins-005",
    name: "FTIR Spectrometer",
    description: "Fourier Transform Infrared untuk identifikasi gugus fungsi dan struktur molekul.",
    longDescription: "FTIR Spectrometer untuk identifikasi gugus fungsi dan karakterisasi material. Dilengkapi dengan aksesoris ATR untuk analisa sampel padat dan cair tanpa preparasi rumit.",
    category: "instruments",
    subcategory: "Spectroscopy",
    image: uvVisImg,
    gallery: [uvVisImg, hplcImg, hotplateImg],
    brand: "Thermo Nicolet, Bruker",
    specs: ["Range 400-4000 cm⁻¹", "ATR & Transmission", "Library database"],
    detailedSpecs: [
      { label: "Range Spektral", value: "400 - 4000 cm⁻¹" },
      { label: "Resolusi", value: "4 cm⁻¹, adjustable" },
      { label: "Mode Sampling", value: "ATR, Transmission, Reflectance" },
      { label: "Library", value: "10,000+ spektrum referensi" },
      { label: "Software", value: "OMNIC / OPUS" },
    ],
    features: [
      "ATR untuk sampel padat dan cair",
      "Library spektrum untuk identifikasi",
      "Search and match otomatis",
      "Quantitative analysis capability",
    ],
    applications: [
      "Identifikasi material dan polimer",
      "Analisa bahan makanan",
      "Karakterisasi farmasi",
      "Forensik dan quality control",
    ],
  },
  {
    id: "ins-006",
    name: "GC-MS System",
    description: "Gas Chromatography Mass Spectrometry untuk analisa senyawa volatil.",
    longDescription: "Sistem GC-MS untuk identifikasi dan kuantifikasi senyawa volatil dan semi-volatil. Dilengkapi dengan autosampler dan library NIST untuk identifikasi senyawa.",
    category: "instruments",
    subcategory: "Chromatography",
    image: hplcImg,
    gallery: [hplcImg, uvVisImg, hotplateImg],
    brand: "Shimadzu, Agilent",
    specs: ["Quadrupole MS", "Autosampler", "NIST Library"],
    detailedSpecs: [
      { label: "MS Type", value: "Single Quadrupole / Triple Quad" },
      { label: "Mass Range", value: "1.5 - 1090 m/z" },
      { label: "Ion Source", value: "EI, CI tersedia" },
      { label: "Library", value: "NIST 20+ database" },
      { label: "Autosampler", value: "Liquid, Headspace, SPME" },
    ],
    features: [
      "Identifikasi dengan NIST library",
      "Mode SIM untuk sensitivitas tinggi",
      "Berbagai teknik injeksi",
      "MSD ChemStation / LabSolutions",
    ],
    applications: [
      "Analisa residu pestisida",
      "Pengujian minyak atsiri",
      "Forensik dan toksikologi",
      "Environmental monitoring",
    ],
  },
  {
    id: "ins-007",
    name: "Analytical Balance",
    description: "Timbangan analitik presisi tinggi untuk pengukuran massa akurat.",
    longDescription: "Timbangan analitik dengan ketelitian 0.1mg (0.0001g) untuk penimbangan presisi di laboratorium. Dilengkapi dengan kalibrasi internal otomatis dan berbagai mode penimbangan.",
    category: "instruments",
    subcategory: "General Lab",
    image: hotplateImg,
    gallery: [hotplateImg, uvVisImg, hplcImg],
    brand: "Mettler Toledo, Sartorius",
    specs: ["Ketelitian 0.0001g", "Kapasitas 220g", "Internal calibration"],
    detailedSpecs: [
      { label: "Kapasitas", value: "220g / 320g" },
      { label: "Readability", value: "0.0001g (0.1mg)" },
      { label: "Repeatability", value: "±0.1mg" },
      { label: "Kalibrasi", value: "Internal, otomatis" },
      { label: "Pan Size", value: "Ø 80mm" },
    ],
    features: [
      "Kalibrasi internal otomatis",
      "Draft shield untuk stabilitas",
      "Berbagai mode: piece counting, percent, dll",
      "Koneksi USB dan RS-232",
    ],
    applications: [
      "Penimbangan sampel untuk analisa",
      "Preparasi larutan standar",
      "Quality control",
      "Penelitian dan pengembangan",
    ],
  },
  {
    id: "ins-008",
    name: "Centrifuge",
    description: "Sentrifugal untuk pemisahan partikel berdasarkan densitas.",
    longDescription: "Centrifuge laboratorium untuk pemisahan partikel, sel, dan komponen berdasarkan densitas. Tersedia dalam berbagai kapasitas dan kecepatan maksimum, termasuk model refrigerated.",
    category: "instruments",
    subcategory: "General Lab",
    image: hotplateImg,
    gallery: [hotplateImg, uvVisImg, hplcImg],
    brand: "Eppendorf, Thermo",
    specs: ["Maks 15.000 rpm", "Rotor fixed/swing", "Refrigerated option"],
    detailedSpecs: [
      { label: "Kecepatan Maksimum", value: "15,000 rpm (21,000 x g)" },
      { label: "Kapasitas", value: "24 x 1.5/2.0ml atau 6 x 50ml" },
      { label: "Rotor", value: "Fixed angle & Swing-out tersedia" },
      { label: "Suhu", value: "-10°C hingga +40°C (refrigerated)" },
      { label: "Timer", value: "1 menit - 99 jam" },
    ],
    features: [
      "Berbagai rotor tersedia",
      "Model refrigerated untuk sampel sensitif",
      "Quiet operation",
      "Safety lid lock",
    ],
    applications: [
      "Pemisahan serum/plasma",
      "Sedimentasi sel",
      "Preparasi DNA/RNA",
      "Clarification of solutions",
    ],
  },
];

export const getProductById = (id: string): Product | undefined => {
  return products.find((p) => p.id === id);
};

export const getRelatedProducts = (product: Product, limit: number = 4): Product[] => {
  return products
    .filter((p) => p.id !== product.id && p.category === product.category)
    .slice(0, limit);
};
