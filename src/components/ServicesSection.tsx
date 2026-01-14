import { motion } from "framer-motion";
import { ClipboardCheck, Search, FileText, Truck } from "lucide-react";

const services = [
  {
    icon: ClipboardCheck,
    title: "XRD & XRF Analysis",
    description: "Analisis struktur kristal dan komposisi elemen material dengan akurasi tinggi.",
  },
  {
    icon: Search,
    title: "GC-MS/FID & FTIR",
    description: "Identifikasi senyawa organik dan gugus fungsi dengan teknologi kromatografi dan spektroskopi.",
  },
  {
    icon: FileText,
    title: "SEM-EDX & TEM",
    description: "Pencitraan mikroskopik dan analisis komposisi permukaan material nano hingga mikro.",
  },
  {
    icon: Truck,
    title: "BET & PSA",
    description: "Pengukuran luas permukaan spesifik dan distribusi ukuran partikel material.",
  },
];

export const ServicesSection = () => {
  return (
    <section id="layanan" className="py-24 bg-section-gradient">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-secondary/10 text-secondary text-sm font-medium rounded-full mb-4">
            Jasa Pengujian
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Layanan Pengujian & Analisa Material
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Didukung oleh teknologi terkini dan tenaga ahli berpengalaman, 
            kami menyediakan layanan pengujian material yang komprehensif dan akurat.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 border border-border text-center"
              >
                <div className="w-16 h-16 mx-auto bg-secondary/10 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-secondary group-hover:scale-110 transition-all duration-300">
                  <Icon className="w-8 h-8 text-secondary group-hover:text-secondary-foreground transition-colors" />
                </div>
                <h3 className="font-bold text-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm">{service.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Full service list */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 bg-card rounded-2xl p-8 shadow-card border border-border"
        >
          <h3 className="font-bold text-foreground mb-4 text-center">Daftar Lengkap Jasa Pengujian</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {["XRD", "XRF", "BET", "GC-MS/FID", "Spektroskopi UV-VIS (DRS-UV)", "PSA", "TEM", "SEM-EDX", "FTIR"].map(
              (service) => (
                <span
                  key={service}
                  className="px-4 py-2 bg-hero-gradient text-primary-foreground text-sm font-medium rounded-full"
                >
                  {service}
                </span>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
