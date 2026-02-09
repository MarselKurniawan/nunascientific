import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight, ArrowLeft, MessageCircle, Phone, Mail, Building2 } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ProductGallery } from "@/components/product-detail/ProductGallery";
import { ProductSpecs } from "@/components/product-detail/ProductSpecs";
import { QuotationForm } from "@/components/product-detail/QuotationForm";
import { RelatedProducts } from "@/components/product-detail/RelatedProducts";
import { getProductById, getRelatedProducts } from "@/data/products";

const categoryLabels: Record<string, string> = {
  glassware: "Glassware",
  chemicals: "Bahan Kimia",
  instruments: "Instrumen Lab",
};

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const product = id ? getProductById(id) : undefined;

  if (!product) {
    return (
      <main className="min-h-screen bg-background">
        <Navbar />
        <div className="container py-32 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">
            Produk Tidak Ditemukan
          </h1>
          <p className="text-muted-foreground mb-6">
            Produk yang Anda cari tidak tersedia atau telah dihapus.
          </p>
          <Button asChild>
            <Link to="/katalog">Kembali ke Katalog</Link>
          </Button>
        </div>
        <Footer />
      </main>
    );
  }

  const relatedProducts = getRelatedProducts(product, 4);
  const galleryImages = product.gallery || [product.image];
  const whatsappMessage = encodeURIComponent(
    `Halo, saya tertarik dengan produk ${product.name}. Bisa minta info lebih lanjut?`
  );

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Breadcrumb */}
      <section className="pt-20 pb-4 border-b border-border bg-muted/30">
        <div className="container">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-foreground transition-colors">
              Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/katalog" className="hover:text-foreground transition-colors">
              Katalog
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link
              to={`/katalog?category=${product.category}`}
              className="hover:text-foreground transition-colors"
            >
              {categoryLabels[product.category] || product.category}
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground font-medium truncate max-w-[150px]">
              {product.name}
            </span>
          </nav>
        </div>
      </section>

      {/* Back Button */}
      <section className="py-4">
        <div className="container">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Kembali
          </button>
        </div>
      </section>

      {/* Product Content */}
      <section className="pb-12">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Column - Gallery */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <ProductGallery images={galleryImages} productName={product.name} />
            </motion.div>

            {/* Right Column - Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-6"
            >
              {/* Category & Brand */}
              <div className="flex items-center gap-3">
                <Badge variant="secondary">{product.subcategory}</Badge>
                {product.brand && (
                  <span className="text-sm text-muted-foreground">
                    Brand: <span className="text-foreground font-medium">{product.brand}</span>
                  </span>
                )}
              </div>

              {/* Product Name */}
              <h1 className="text-3xl md:text-4xl font-bold text-foreground">
                {product.name}
              </h1>

              {/* Description */}
              <p className="text-lg text-muted-foreground leading-relaxed">
                {product.longDescription || product.description}
              </p>

              {/* Quick Specs */}
              {product.specs && (
                <div className="bg-muted/50 rounded-xl p-4">
                  <h4 className="text-sm font-semibold text-foreground mb-3">
                    Spesifikasi Singkat
                  </h4>
                  <ul className="space-y-2">
                    {product.specs.map((spec, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Button size="lg" className="flex-1 gap-2" asChild>
                  <a
                    href={`https://wa.me/6281281181860?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Hubungi via WhatsApp
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="flex-1 gap-2" asChild>
                  <a href="tel:+6281281181860">
                    <Phone className="w-5 h-5" />
                    Telepon
                  </a>
                </Button>
              </div>

              {/* Contact Info */}
              <div className="bg-card border border-border rounded-xl p-4 space-y-3">
                <h4 className="text-sm font-semibold text-foreground">
                  Butuh Bantuan?
                </h4>
                <div className="space-y-2 text-sm">
                  <a
                    href="tel:+6281281181860"
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    +62 812-8118-1860
                  </a>
                  <a
                    href="mailto:info@nunascientific.com"
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    info@nunascientific.com
                  </a>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Building2 className="w-4 h-4" />
                    Jakarta, Indonesia
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Detailed Specs & Quotation Form */}
      <section className="py-12 bg-muted/30">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Specifications - 2 columns */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <ProductSpecs
                  detailedSpecs={product.detailedSpecs}
                  features={product.features}
                  applications={product.applications}
                />
              </motion.div>
            </div>

            {/* Quotation Form - 1 column */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="sticky top-24"
              >
                <QuotationForm product={product} />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <RelatedProducts products={relatedProducts} />

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
};

export default ProductDetail;
