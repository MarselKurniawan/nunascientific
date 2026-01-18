import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
  "Konsultasi gratis",
  "Pengiriman ke seluruh Indonesia",
  "Garansi produk resmi",
  "Dukungan teknis profesional",
  "Harga kompetitif",
  "Layanan purna jual terjamin",
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
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  },
};

const stepVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  },
};

export const AboutSection = () => {
  return (
    <section id="tentang" className="py-16 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className="text-sm font-medium text-primary mb-2">Tentang Kami</p>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Partner Terpercaya untuk Kebutuhan Laboratorium
            </h2>
            <p className="text-muted-foreground mb-6">
              <strong className="text-foreground">PT Nahla Usman Niaga</strong> adalah perusahaan 
              yang bergerak di bidang penyediaan peralatan laboratorium, bahan kimia, dan jasa 
              pengujian material. Berlokasi strategis di Gedung TBIC, Kawasan Puspiptek BRIN, 
              kami berkomitmen mendukung kemajuan riset dan industri Indonesia.
            </p>
            
            <motion.div 
              className="grid grid-cols-2 gap-3"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {benefits.map((benefit) => (
                <motion.div 
                  key={benefit} 
                  className="flex items-center gap-2"
                  variants={itemVariants}
                >
                  <CheckCircle className="w-4 h-4 text-accent shrink-0" />
                  <span className="text-sm text-foreground">{benefit}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div 
            className="bg-muted rounded-lg p-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            <h3 className="font-semibold text-foreground mb-4">Mengapa Pilih Kami?</h3>
            <motion.div 
              className="space-y-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              <motion.div className="flex gap-3" variants={stepVariants}>
                <div className="w-8 h-8 bg-primary/10 rounded flex items-center justify-center shrink-0">
                  <span className="text-primary font-semibold text-sm">1</span>
                </div>
                <div>
                  <p className="font-medium text-foreground text-sm">Lokasi Strategis di BRIN</p>
                  <p className="text-xs text-muted-foreground">Berbasis di Gedung TBIC, Kawasan Puspiptek</p>
                </div>
              </motion.div>
              <motion.div className="flex gap-3" variants={stepVariants}>
                <div className="w-8 h-8 bg-primary/10 rounded flex items-center justify-center shrink-0">
                  <span className="text-primary font-semibold text-sm">2</span>
                </div>
                <div>
                  <p className="font-medium text-foreground text-sm">Produk Berkualitas</p>
                  <p className="text-xs text-muted-foreground">Brand internasional: Merck, JT Baker, dll</p>
                </div>
              </motion.div>
              <motion.div className="flex gap-3" variants={stepVariants}>
                <div className="w-8 h-8 bg-primary/10 rounded flex items-center justify-center shrink-0">
                  <span className="text-primary font-semibold text-sm">3</span>
                </div>
                <div>
                  <p className="font-medium text-foreground text-sm">Tim Profesional</p>
                  <p className="text-xs text-muted-foreground">Berpengalaman di bidang laboratorium</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
