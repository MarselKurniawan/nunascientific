import { motion } from "framer-motion";
import { ArrowRight, Beaker } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

import xrdImg from "@/assets/services/xrd.jpg";
import xrfImg from "@/assets/services/xrf.jpg";
import gcmsImg from "@/assets/services/gcms.jpg";
import ftirImg from "@/assets/services/ftir.jpg";
import semEdxImg from "@/assets/services/sem-edx.jpg";
import temImg from "@/assets/services/tem.jpg";
import betImg from "@/assets/services/bet.jpg";
import psaImg from "@/assets/services/psa.jpg";
import drsUvImg from "@/assets/services/drs-uv.jpg";

const services = [
  { name: "XRD", desc: "Analisis struktur kristal", image: xrdImg },
  { name: "XRF", desc: "Komposisi elemen material", image: xrfImg },
  { name: "GC-MS/FID", desc: "Identifikasi senyawa organik", image: gcmsImg },
  { name: "FTIR", desc: "Analisis gugus fungsi", image: ftirImg },
  { name: "SEM-EDX", desc: "Pencitraan & komposisi permukaan", image: semEdxImg },
  { name: "TEM", desc: "Mikroskopi transmisi elektron", image: temImg },
  { name: "BET", desc: "Luas permukaan spesifik", image: betImg },
  { name: "PSA", desc: "Distribusi ukuran partikel", image: psaImg },
  { name: "DRS-UV", desc: "Spektroskopi UV-Vis", image: drsUvImg },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

export const ServicesSection = () => {
  return (
    <section id="layanan" className="py-20 bg-muted/50">
      <div className="container">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            <Beaker className="w-4 h-4" />
            Jasa Pengujian
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Layanan Pengujian & Analisa Material
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Pengujian material dengan teknologi terkini dan hasil yang akurat untuk kebutuhan riset dan industri Anda.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {services.map((service) => (
            <motion.div
              key={service.name}
              variants={itemVariants}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all cursor-default group"
            >
              <div className="h-36 md:h-44 overflow-hidden relative">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-4 md:p-5">
                <p className="font-bold text-foreground text-base mb-1">{service.name}</p>
                <p className="text-sm text-muted-foreground">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Button size="lg" className="px-8 font-semibold shadow-md shadow-primary/20" asChild>
            <Link to="/jasa-uji-lab" className="inline-flex items-center gap-2">
              Lihat Semua Layanan
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
