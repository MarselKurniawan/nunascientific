import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { Link } from "react-router-dom";
import { ArrowRight, Microscope, FlaskConical, Atom, Beaker, Scan, Waves, FileText, Sparkles, CheckCircle, Shield, Clock, Award } from "lucide-react";
import { motion } from "framer-motion";

import xrdImg from "@/assets/services/xrd.jpg";
import xrfImg from "@/assets/services/xrf.jpg";
import semImg from "@/assets/services/sem-edx.jpg";
import temImg from "@/assets/services/tem.jpg";
import ftirImg from "@/assets/services/ftir.jpg";
import gcmsImg from "@/assets/services/gcms.jpg";
import betImg from "@/assets/services/bet.jpg";
import psaImg from "@/assets/services/psa.jpg";
import drsImg from "@/assets/services/drs-uv.jpg";

const karakterisasiServices = [
  {
    icon: Atom,
    name: "XRD (X-Ray Diffraction)",
    desc: "Analisis struktur kristal dan identifikasi fase material",
    details: ["Identifikasi fase kristalin", "Analisis kuantitatif", "Ukuran kristal"],
    image: xrdImg,
  },
  {
    icon: Scan,
    name: "XRF (X-Ray Fluorescence)",
    desc: "Analisis komposisi elemen dalam material",
    details: ["Komposisi elemental", "Trace element", "Analisis bulk"],
    image: xrfImg,
  },
  {
    icon: Microscope,
    name: "SEM-EDX",
    desc: "Pencitraan permukaan dan analisis komposisi lokal",
    details: ["Morfologi permukaan", "Mapping elemen", "Cross-section analysis"],
    image: semImg,
  },
  {
    icon: Microscope,
    name: "TEM",
    desc: "Mikroskopi transmisi elektron resolusi tinggi",
    details: ["Struktur nano", "HRTEM", "Electron diffraction"],
    image: temImg,
  },
  {
    icon: Waves,
    name: "FTIR",
    desc: "Analisis gugus fungsi dan ikatan molekul",
    details: ["Identifikasi senyawa", "Gugus fungsi", "ATR & Transmisi"],
    image: ftirImg,
  },
  {
    icon: FlaskConical,
    name: "GC-MS/FID",
    desc: "Identifikasi dan kuantifikasi senyawa organik volatil",
    details: ["Metabolit", "Senyawa organik", "Kuantifikasi"],
    image: gcmsImg,
  },
  {
    icon: Beaker,
    name: "BET",
    desc: "Pengukuran luas permukaan spesifik material",
    details: ["Surface area", "Porositas", "Isoterm adsorpsi"],
    image: betImg,
  },
  {
    icon: Atom,
    name: "PSA",
    desc: "Analisis distribusi ukuran partikel",
    details: ["Size distribution", "D10, D50, D90", "Zeta potential"],
    image: psaImg,
  },
  {
    icon: Waves,
    name: "DRS-UV",
    desc: "Spektroskopi UV-Vis untuk material padat",
    details: ["Band gap", "Optical properties", "Reflektansi"],
    image: drsImg,
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

const keunggulan = [
  { icon: Shield, title: "Akreditasi Terjamin", desc: "Hasil analisis akurat sesuai standar" },
  { icon: Clock, title: "Respon Cepat", desc: "Turnaround time yang kompetitif" },
  { icon: Award, title: "Tenaga Ahli", desc: "Didukung oleh analis berpengalaman" },
  { icon: CheckCircle, title: "Harga Kompetitif", desc: "Penawaran terbaik untuk riset Anda" },
];

const containerAnim = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const itemAnim = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const JasaUjiLab = () => {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section - Full width with image bg */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={semImg} alt="Laboratory Testing" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/75 to-foreground/40" />
        </div>

        <div className="container relative z-10 py-32">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm border border-primary/30 text-primary-foreground px-4 py-1.5 rounded-full text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                Jasa Pengujian Laboratorium
              </div>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Solusi <span className="text-primary">Analisis</span> &{" "}
              Karakterisasi Material
            </motion.h1>

            <motion.p
              className="text-lg text-primary-foreground/80 mb-8 max-w-xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Layanan pengujian material dengan instrumen modern serta didukung oleh tenaga ahli berpengalaman untuk mendukung penelitian dan industri.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Button size="lg" className="text-base px-8 shadow-lg shadow-primary/30 bg-green-600 hover:bg-green-700" asChild>
                <a href="https://wa.me/6281281181860" target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon className="w-5 h-5 mr-2" />
                  Konsultasi Gratis
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
                  Request Quotation
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Keunggulan Strip */}
      <section className="py-12 bg-primary/5 border-b border-border">
        <div className="container">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
            variants={containerAnim}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
          >
            {keunggulan.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div key={item.title} variants={itemAnim} className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">{item.title}</p>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Karakterisasi Services Grid */}
      <section className="py-20 bg-background">
        <div className="container">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-4">
              <Microscope className="w-4 h-4" />
              Layanan Karakterisasi
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Berbagai Layanan Analisis & Karakterisasi
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Instrumen karakterisasi canggih untuk analisis mendalam material Anda.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerAnim}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
          >
            {karakterisasiServices.map((service) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.name}
                  variants={itemAnim}
                  className="group bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-primary/5 hover:border-primary/20 transition-all duration-300"
                >
                  {/* Service Image */}
                  <div className="relative aspect-[16/9] overflow-hidden bg-muted">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                    <div className="absolute bottom-3 left-3">
                      <div className="inline-flex items-center gap-2 bg-background/90 backdrop-blur-sm rounded-lg px-3 py-1.5">
                        <Icon className="w-4 h-4 text-primary" />
                        <span className="text-sm font-semibold text-foreground">{service.name}</span>
                      </div>
                    </div>
                  </div>

                  {/* Service Info */}
                  <div className="p-5">
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      {service.desc}
                    </p>
                    <div className="space-y-2 mb-5">
                      {service.details.map((detail) => (
                        <div key={detail} className="flex items-center gap-2 text-xs text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0" />
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>
                    <Button size="sm" className="w-full gap-1.5" asChild>
                      <a
                        href={`https://wa.me/6281281181860?text=${encodeURIComponent(`Halo, saya tertarik dengan jasa ${service.name}. Bisa minta info lebih lanjut?`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <WhatsAppIcon className="w-4 h-4" />
                        Tanya Harga
                      </a>
                    </Button>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Jasa Analisis Section */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-4">
              <FlaskConical className="w-4 h-4" />
              Jasa Analisis
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Layanan Pengujian Spesifik
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Kami menyediakan berbagai jasa pengujian sesuai kebutuhan riset dan industri Anda.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-6"
            variants={containerAnim}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
          >
            {jasaAnalisisServices.map((category) => (
              <motion.div
                key={category.category}
                variants={itemAnim}
                className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg hover:border-primary/20 transition-all duration-300"
              >
                <h3 className="font-bold text-foreground text-lg mb-4 flex items-center gap-2">
                  <div className="w-2 h-6 rounded-full bg-primary" />
                  {category.category}
                </h3>
                <ul className="space-y-3">
                  {category.services.map((service) => (
                    <li key={service} className="flex items-center gap-3 text-sm text-muted-foreground group/item">
                      <ArrowRight className="w-4 h-4 text-primary shrink-0 group-hover/item:translate-x-0.5 transition-transform" />
                      <span className="group-hover/item:text-foreground transition-colors">{service}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden bg-primary">
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-10 left-10 w-32 h-32 border-2 border-primary-foreground/10 rounded-full"
            animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.3, 0.2] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-10 right-10 w-48 h-48 border-2 border-primary-foreground/10 rounded-full"
            animate={{ scale: [1, 1.05, 1], opacity: [0.2, 0.25, 0.2] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
        </div>

        <div className="container relative z-10">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 bg-primary-foreground/20 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <Sparkles className="w-4 h-4 text-primary-foreground" />
              <span className="text-primary-foreground text-sm font-medium">Konsultasi Gratis</span>
            </motion.div>

            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Siap Memulai Pengujian Material Anda?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
              Tim ahli kami siap membantu Anda mendapatkan hasil analisis yang akurat dan terpercaya.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-lg"
              >
                <a href="https://wa.me/6281281181860" target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon className="w-5 h-5 mr-2" />
                  Chat via WhatsApp
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              >
                <Link to="/quotation">
                  <FileText className="w-5 h-5 mr-2" />
                  Request Quotation
                </Link>
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-primary-foreground/70 text-sm">
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
