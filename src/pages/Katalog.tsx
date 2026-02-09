import { useState } from "react";
import { motion } from "framer-motion";
import { Package, TrendingUp, Truck, Shield } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/katalog/ProductCard";
import { CategoryFilter, type Category } from "@/components/katalog/CategoryFilter";
import { SearchBar } from "@/components/katalog/SearchBar";
import { products } from "@/data/products";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const features = [
  { icon: Package, label: "Produk Original" },
  { icon: TrendingUp, label: "Harga Kompetitif" },
  { icon: Truck, label: "Pengiriman Nasional" },
  { icon: Shield, label: "Garansi Resmi" },
];

const Katalog = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    const searchLower = searchQuery.toLowerCase();
    const matchesSearch =
      product.name.toLowerCase().includes(searchLower) ||
      product.description.toLowerCase().includes(searchLower) ||
      product.subcategory.toLowerCase().includes(searchLower) ||
      (product.brand?.toLowerCase().includes(searchLower) ?? false);
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
      <section className="pt-24 pb-12 bg-gradient-to-b from-primary/5 via-primary/3 to-background">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-8"
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-4">
              <Package className="w-4 h-4" />
              Katalog Produk Lengkap
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
              Peralatan Laboratorium <br className="hidden md:block" />
              <span className="text-primary">Berkualitas Tinggi</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Temukan berbagai instrumen, glassware, dan bahan kimia dari brand terpercaya untuk kebutuhan riset dan industri.
            </p>
          </motion.div>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <SearchBar
              value={searchQuery}
              onChange={setSearchQuery}
              placeholder="Cari produk, kategori, atau brand..."
            />
          </motion.div>

          {/* Feature Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 md:gap-6 mt-8"
          >
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.label}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <div className="w-8 h-8 rounded-lg bg-card border border-border flex items-center justify-center">
                    <Icon className="w-4 h-4 text-primary" />
                  </div>
                  <span>{feature.label}</span>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Category Filter - Sticky */}
      <section className="py-4 border-b border-border sticky top-16 bg-background/95 backdrop-blur-md z-40">
        <div className="container">
          <CategoryFilter
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            getCategoryCount={getCategoryCount}
          />
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-10">
        <div className="container">
          {/* Results Count */}
          <div className="mb-8 flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">
                Menampilkan{" "}
                <span className="font-semibold text-foreground">{filteredProducts.length}</span>{" "}
                dari <span className="font-semibold text-foreground">{products.length}</span> produk
              </p>
            </div>
          </div>

          {filteredProducts.length > 0 ? (
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              key={selectedCategory + searchQuery}
            >
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  variants={itemVariants}
                />
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="w-8 h-8 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Produk tidak ditemukan
              </h3>
              <p className="text-muted-foreground mb-4">
                Coba ubah kata kunci pencarian atau pilih kategori lain
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("all");
                }}
              >
                Reset Filter
              </Button>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-primary to-primary/80 rounded-3xl p-8 md:p-12 text-center text-primary-foreground overflow-hidden relative"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
              <div className="absolute bottom-0 right-0 w-60 h-60 bg-white rounded-full translate-x-1/3 translate-y-1/3" />
            </div>

            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                Butuh Produk Lain?
              </h2>
              <p className="text-primary-foreground/90 max-w-xl mx-auto mb-8 text-lg">
                Kami menyediakan ribuan produk laboratorium lainnya. Hubungi tim kami untuk konsultasi dan penawaran khusus.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-white text-primary hover:bg-white/90 font-semibold px-8"
                  asChild
                >
                  <a
                    href="https://wa.me/6281281181860?text=Halo, saya ingin konsultasi produk laboratorium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Konsultasi via WhatsApp
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 font-semibold px-8"
                  asChild
                >
                  <a href="/quotation">Request Quotation</a>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
};

export default Katalog;
