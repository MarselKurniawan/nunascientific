import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Filter, ChevronDown, FlaskConical, Atom, Microscope, X } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

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

type Category = "all" | "glassware" | "chemicals" | "instruments";

interface Product {
  id: string;
  name: string;
  description: string;
  category: Category;
  subcategory: string;
  image: string;
  brand?: string;
  specs?: string[];
}

const products: Product[] = [
  // Glassware
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
  // Chemicals
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
  // Instruments
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
];

const categories = [
  { id: "all" as Category, label: "Semua Produk", icon: null },
  { id: "glassware" as Category, label: "Glassware", icon: FlaskConical },
  { id: "chemicals" as Category, label: "Bahan Kimia", icon: Atom },
  { id: "instruments" as Category, label: "Instrumen Lab", icon: Microscope },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

const Katalog = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.subcategory.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getCategoryCount = (category: Category) => {
    if (category === "all") return products.length;
    return products.filter((p) => p.category === category).length;
  };

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-8 bg-gradient-to-b from-primary/5 to-background">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Katalog Produk
            </h1>
            <p className="text-muted-foreground mb-6">
              Temukan berbagai peralatan laboratorium, glassware, dan bahan kimia berkualitas untuk kebutuhan riset dan industri Anda.
            </p>

            {/* Search Bar */}
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Cari produk, kategori, atau brand..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 py-6 text-base rounded-xl border-border bg-card"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-6 border-b border-border sticky top-16 bg-background/95 backdrop-blur-sm z-40">
        <div className="container">
          <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  {Icon && <Icon className="w-4 h-4" />}
                  {cat.label}
                  <span
                    className={`text-xs px-1.5 py-0.5 rounded-full ${
                      isActive ? "bg-primary-foreground/20" : "bg-background"
                    }`}
                  >
                    {getCategoryCount(cat.id)}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-10">
        <div className="container">
          {/* Results count */}
          <div className="mb-6 flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              Menampilkan <span className="font-medium text-foreground">{filteredProducts.length}</span> produk
            </p>
          </div>

          {filteredProducts.length > 0 ? (
            <motion.div
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              key={selectedCategory + searchQuery}
            >
              {filteredProducts.map((product) => (
                <motion.div
                  key={product.id}
                  variants={itemVariants}
                  className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary/30 hover:shadow-lg transition-all group"
                >
                  {/* Product Image */}
                  <div className="aspect-square overflow-hidden bg-muted">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="p-4">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <Badge variant="secondary" className="text-xs">
                        {product.subcategory}
                      </Badge>
                    </div>
                    <h3 className="font-semibold text-foreground mb-1 line-clamp-1">
                      {product.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                      {product.description}
                    </p>

                    {product.brand && (
                      <p className="text-xs text-muted-foreground mb-3">
                        Brand: <span className="text-foreground">{product.brand}</span>
                      </p>
                    )}

                    {product.specs && (
                      <div className="space-y-1 mb-4">
                        {product.specs.slice(0, 2).map((spec, idx) => (
                          <p key={idx} className="text-xs text-muted-foreground flex items-center gap-1">
                            <span className="w-1 h-1 rounded-full bg-primary" />
                            {spec}
                          </p>
                        ))}
                      </div>
                    )}

                    <Button size="sm" className="w-full" asChild>
                      <a
                        href={`https://wa.me/6281281181860?text=Halo, saya tertarik dengan produk ${product.name}. Bisa minta info lebih lanjut?`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Minta Penawaran
                      </a>
                    </Button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <div className="text-center py-16">
              <p className="text-muted-foreground mb-2">Tidak ada produk ditemukan</p>
              <p className="text-sm text-muted-foreground">
                Coba ubah kata kunci pencarian atau pilih kategori lain
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-muted/50">
        <div className="container">
          <div className="bg-card border border-border rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Butuh Produk Lain?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-6">
              Kami menyediakan ribuan produk laboratorium lainnya. Hubungi tim kami untuk konsultasi dan penawaran khusus.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button size="lg" asChild>
                <a
                  href="https://wa.me/6281281181860?text=Halo, saya ingin konsultasi produk laboratorium"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Konsultasi via WhatsApp
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="/quotation">Request Quotation</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
};

export default Katalog;
