import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, FlaskConical, Microscope } from "lucide-react";
import heroImage from "@/assets/hero-lab.jpg";

export const HeroSection = () => {
  return (
    <section
      id="beranda"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Laboratory equipment"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-hero-overlay" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 right-10 animate-float hidden lg:block">
        <div className="w-16 h-16 bg-primary/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
          <FlaskConical className="w-8 h-8 text-primary-foreground" />
        </div>
      </div>
      <div className="absolute bottom-1/4 left-10 animate-float hidden lg:block" style={{ animationDelay: "1s" }}>
        <div className="w-16 h-16 bg-secondary/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
          <Microscope className="w-8 h-8 text-primary-foreground" />
        </div>
      </div>

      {/* Content */}
      <div className="container relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground text-sm font-medium rounded-full mb-6">
              PT Nahla Usman Niaga
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6"
          >
            Solusi Lengkap{" "}
            <span className="text-secondary">Peralatan Laboratorium</span>{" "}
            & Bahan Kimia
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl"
          >
            Menyediakan instrumen laboratorium berkualitas, glassware, bahan kimia grade teknis & Pro Analis, 
            serta layanan pengujian material terpercaya untuk kebutuhan riset dan industri Anda.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button variant="hero" size="xl" asChild>
              <a href="#produk">
                Lihat Produk Kami
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="https://wa.me/6281281181860" target="_blank" rel="noopener noreferrer">
                Konsultasi Gratis
              </a>
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-primary-foreground/20"
          >
            <div>
              <p className="text-3xl md:text-4xl font-bold text-primary-foreground">500+</p>
              <p className="text-primary-foreground/70 text-sm">Produk Tersedia</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-primary-foreground">50+</p>
              <p className="text-primary-foreground/70 text-sm">Klien Terpercaya</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-primary-foreground">10+</p>
              <p className="text-primary-foreground/70 text-sm">Jasa Pengujian</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
