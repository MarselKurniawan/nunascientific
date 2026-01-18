import { motion } from "framer-motion";

const services = [
  { name: "XRD", desc: "Analisis struktur kristal" },
  { name: "XRF", desc: "Komposisi elemen material" },
  { name: "GC-MS/FID", desc: "Identifikasi senyawa organik" },
  { name: "FTIR", desc: "Analisis gugus fungsi" },
  { name: "SEM-EDX", desc: "Pencitraan & komposisi permukaan" },
  { name: "TEM", desc: "Mikroskopi transmisi elektron" },
  { name: "BET", desc: "Luas permukaan spesifik" },
  { name: "PSA", desc: "Distribusi ukuran partikel" },
  { name: "DRS-UV", desc: "Spektroskopi UV-Vis" },
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
              className="bg-card border border-border rounded-lg p-4 hover:border-primary/30 hover:shadow-md transition-all cursor-default"
            >
              <p className="font-semibold text-foreground text-sm">{service.name}</p>
              <p className="text-xs text-muted-foreground mt-1">{service.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
