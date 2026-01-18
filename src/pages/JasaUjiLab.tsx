import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { Link } from "react-router-dom";
import { ArrowRight, Microscope, FlaskConical, Atom, Beaker, Scan, Waves, FileText, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const karakterisasiServices = [
  {
    icon: Atom,
    name: "XRD (X-Ray Diffraction)",
    desc: "Analisis struktur kristal dan identifikasi fase material",
    details: ["Identifikasi fase kristalin", "Analisis kuantitatif", "Ukuran kristal"],
  },
  {
    icon: Scan,
    name: "XRF (X-Ray Fluorescence)",
    desc: "Analisis komposisi elemen dalam material",
    details: ["Komposisi elemental", "Trace element", "Analisis bulk"],
  },
  {
    icon: Microscope,
    name: "SEM-EDX",
    desc: "Pencitraan permukaan dan analisis komposisi lokal",
    details: ["Morfologi permukaan", "Mapping elemen", "Cross-section analysis"],
  },
  {
    icon: Microscope,
    name: "TEM",
    desc: "Mikroskopi transmisi elektron resolusi tinggi",
    details: ["Struktur nano", "HRTEM", "Electron diffraction"],
  },
  {
    icon: Waves,
    name: "FTIR",
    desc: "Analisis gugus fungsi dan ikatan molekul",
    details: ["Identifikasi senyawa", "Gugus fungsi", "ATR & Transmisi"],
  },
  {
    icon: FlaskConical,
    name: "GC-MS/FID",
    desc: "Identifikasi dan kuantifikasi senyawa organik volatil",
    details: ["Metabolit", "Senyawa organik", "Kuantifikasi"],
  },
  {
    icon: Beaker,
    name: "BET",
    desc: "Pengukuran luas permukaan spesifik material",
    details: ["Surface area", "Porositas", "Isoterm adsorpsi"],
  },
  {
    icon: Atom,
    name: "PSA",
    desc: "Analisis distribusi ukuran partikel",
    details: ["Size distribution", "D10, D50, D90", "Zeta potential"],
  },
  {
    icon: Waves,
    name: "DRS-UV",
    desc: "Spektroskopi UV-Vis untuk material padat",
    details: ["Band gap", "Optical properties", "Reflektansi"],
  },
];

const jasaAnalisisServices = [
  {
    category: "Jasa Analisis Metabolomik",
    services: [
      "Metabolomic Untargetted",
      "Metabolomic Targetted",
      "Lipidomic Analysis",
    ],
  },
  {
    category: "Jasa Identifikasi",
    services: [
      "Identifikasi Senyawa Organik",
      "Identifikasi Material Anorganik",
      "Identifikasi Polimer & Plastik",
    ],
  },
  {
    category: "Jasa Pengujian Fisik",
    services: [
      "Uji Kekerasan Material",
      "Uji Kekuatan Tarik",
      "Analisis Thermal (TGA/DSC)",
    ],
  },
  {
    category: "Jasa Pengujian Kimia",
    services: [
      "Analisis Kadar Air",
      "Analisis Kadar Abu",
      "Uji Kemurnian",
    ],
  },
];

const JasaUjiLab = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-primary/5 to-background">
        <div className="container">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-primary mb-2">Jasa Uji Lab</p>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Kami Menyediakan Solusi untuk Kebutuhan Riset Anda
            </h1>
            <p className="text-muted-foreground text-lg mb-6">
              Layanan analisis dan karakterisasi material dengan instrumen modern 
              serta didukung oleh tenaga ahli berpengalaman untuk mendukung penelitian dan industri.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild className="bg-green-600 hover:bg-green-700">
                <a href="https://wa.me/6281281181860" target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon className="w-4 h-4 mr-2" />
                  Konsultasi Gratis
                </a>
              </Button>
              <Button asChild variant="outline">
                <Link to="/quotation">
                  <FileText className="w-4 h-4 mr-2" />
                  Request Quotation
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Karakterisasi Section */}
      <section className="py-16 bg-muted">
        <div className="container">
          <div className="mb-10">
            <p className="text-sm font-medium text-primary mb-2">Layanan Karakterisasi</p>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              Berbagai Layanan Analisis & Karakterisasi
            </h2>
            <p className="text-muted-foreground max-w-2xl">
              Instrumen karakterisasi canggih untuk analisis mendalam material Anda.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {karakterisasiServices.map((service) => (
              <div
                key={service.name}
                className="bg-card border border-border rounded-lg p-5 hover:border-primary/30 hover:shadow-sm transition-all"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <service.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{service.name}</h3>
                    <p className="text-sm text-muted-foreground">{service.desc}</p>
                  </div>
                </div>
                <ul className="space-y-1 ml-13">
                  {service.details.map((detail) => (
                    <li key={detail} className="text-xs text-muted-foreground flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-primary/50" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Jasa Analisis Section */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="mb-10">
            <p className="text-sm font-medium text-primary mb-2">Jasa Analisis</p>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              Layanan Pengujian Spesifik
            </h2>
            <p className="text-muted-foreground max-w-2xl">
              Kami menyediakan berbagai jasa pengujian sesuai kebutuhan riset dan industri Anda.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {jasaAnalisisServices.map((category) => (
              <div
                key={category.category}
                className="bg-card border border-border rounded-lg p-5"
              >
                <h3 className="font-semibold text-foreground mb-3">{category.category}</h3>
                <ul className="space-y-2">
                  {category.services.map((service) => (
                    <li key={service} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <ArrowRight className="w-3 h-3 text-primary" />
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Enhanced with Blue Theme */}
      <section className="py-20 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0f4c81 0%, #1a6bb3 25%, #2184d4 50%, #1a6bb3 75%, #0f4c81 100%)' }}>
        {/* Decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 border-2 border-white/20 rounded-full animate-pulse" />
          <div className="absolute bottom-10 right-10 w-48 h-48 border-2 border-white/20 rounded-full" />
          <div className="absolute top-1/2 left-1/4 w-20 h-20 border-2 border-white/10 rounded-full" />
          <div className="absolute top-20 right-1/4 w-16 h-16 bg-white/5 rounded-full" />
          <div className="absolute bottom-20 left-1/3 w-24 h-24 bg-white/5 rounded-full" />
        </div>
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        
        <div className="container relative z-10">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6">
              <Sparkles className="w-4 h-4 text-white" />
              <span className="text-white text-sm font-medium">Konsultasi Gratis</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Siap Memulai Pengujian Material Anda?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
              Tim ahli kami siap membantu Anda mendapatkan hasil analisis yang akurat 
              dan terpercaya untuk kebutuhan riset maupun industri.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-green-500 hover:bg-green-600 text-white shadow-lg shadow-green-500/30"
                >
                  <a href="https://wa.me/6281281181860" target="_blank" rel="noopener noreferrer">
                    <WhatsAppIcon className="w-5 h-5 mr-2" />
                    Chat via WhatsApp
                  </a>
                </Button>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button 
                  asChild 
                  size="lg" 
                  variant="outline" 
                  className="bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm"
                >
                  <Link to="/quotation">
                    <FileText className="w-5 h-5 mr-2" />
                    Request Quotation
                  </Link>
                </Button>
              </motion.div>
            </div>

            <div className="mt-8 flex items-center justify-center gap-6 text-white/70 text-sm">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-400" />
                Respon Cepat
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-400" />
                Hasil Akurat
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-400" />
                Harga Kompetitif
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

export default JasaUjiLab;
