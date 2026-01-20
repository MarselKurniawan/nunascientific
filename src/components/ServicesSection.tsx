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
      staggerChildren: 0.1,
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
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {services.map((service) => (
            <motion.div
              key={service.name}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="flex flex-col items-center group cursor-default"
            >
              {/* Circular Image Frame */}
              <div className="relative mb-3">
                {/* Outer ring with gradient */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-primary/80 to-primary/60 p-1 -m-1">
                  <div className="w-full h-full rounded-full bg-background" />
                </div>
                
                {/* Image container */}
                <div className="relative w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full overflow-hidden border-4 border-primary/20 group-hover:border-primary/50 transition-colors shadow-lg">
                  <img 
                    src={service.image} 
                    alt={service.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                
                {/* Label badge */}
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full shadow-md whitespace-nowrap">
                  {service.name}
                </div>
              </div>
              
              {/* Description */}
              <p className="text-xs md:text-sm text-muted-foreground text-center mt-3 px-2">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
