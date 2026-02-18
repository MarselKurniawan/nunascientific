import { Button } from "@/components/ui/button";
import { ArrowRight, FileText, CheckCircle, Package, FlaskConical, TestTube2 } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import heroImg from "@/assets/hero-lab.jpg";

const highlights = [
  { icon: Package, text: "Instrumen Lab Berkualitas" },
  { icon: FlaskConical, text: "Bahan Kimia Grade Teknis & P.A" },
  { icon: TestTube2, text: "Jasa Pengujian Material" },
];

const stats = [
  { value: "500+", label: "Produk Tersedia" },
  { value: "50+", label: "Klien Aktif" },
  { value: "10+", label: "Jasa Uji Lab" },
  { value: "22+", label: "Brand Partner" },
];

export const HeroSection = () => {
  return (
    <section id="beranda" className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Laboratory"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/75 to-foreground/40" />
      </div>

      {/* Content */}
      <div className="container relative z-10 py-32">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm border border-primary/30 text-primary-foreground px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              <CheckCircle className="w-4 h-4" />
              PT Nahla Usman Niaga
            </div>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Supplier Peralatan{" "}
            <span className="text-primary">Laboratorium</span>{" "}
            & Bahan Kimia
          </motion.h1>

          <motion.p
            className="text-lg text-primary-foreground/80 mb-8 max-w-xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Menyediakan instrumen laboratorium, glassware, bahan kimia teknis & Pro Analis,
            serta layanan pengujian material untuk riset dan industri.
          </motion.p>

          {/* Highlights */}
          <motion.div
            className="flex flex-col sm:flex-row flex-wrap gap-4 mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.text} className="flex items-center gap-2.5 text-primary-foreground/90">
                  <div className="w-8 h-8 rounded-lg bg-primary/20 backdrop-blur-sm flex items-center justify-center">
                    <Icon className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <span className="text-sm font-medium">{item.text}</span>
                </div>
              );
            })}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button size="lg" className="text-base px-8 shadow-lg shadow-primary/30" asChild>
              <a href="#produk">
                Lihat Produk
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-base px-8 bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20 backdrop-blur-sm"
              asChild
            >
              <Link to="/quotation">
                <FileText className="w-5 h-5 mr-2" />
                Hubungi Kami
              </Link>
            </Button>
          </motion.div>
        </div>

        {/* Stats Bar */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-8 border-t border-primary-foreground/20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl md:text-4xl font-bold text-primary-foreground">{stat.value}</p>
              <p className="text-sm text-primary-foreground/60 mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
