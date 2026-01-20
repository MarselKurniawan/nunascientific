import { motion } from "framer-motion";

// Import service images
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
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  },
};

export const ServicesSection = () => {
  return (
    <section id="layanan" className="py-16 bg-muted">
      <div className="container">
        <motion.div 
          className="mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-medium text-primary mb-2">Jasa Pengujian</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            Layanan Pengujian & Analisa Material
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            Pengujian material dengan teknologi terkini dan hasil yang akurat untuk kebutuhan riset dan industri Anda.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 gap-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {services.map((service) => (
            <motion.div
              key={service.name}
              variants={itemVariants}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-card border border-border rounded-lg overflow-hidden hover:border-primary/30 hover:shadow-md transition-all cursor-default group"
            >
              {/* Image */}
              <div className="h-32 md:h-40 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              {/* Content */}
              <div className="p-4">
                <p className="font-semibold text-foreground text-sm">{service.name}</p>
                <p className="text-xs text-muted-foreground mt-1">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
