import { motion } from "framer-motion";
import { Microscope, FlaskConical, Atom, TestTube2 } from "lucide-react";

const categories = [
  {
    icon: Microscope,
    title: "Instrumen Laboratorium",
    description: "Peralatan analitik canggih untuk laboratorium Kimia, Fisika, Farmasi, dan Biologi.",
    items: ["XRF", "XRD", "HPLC", "GC-MS/FID", "Spektroskopi UV-VIS", "FTIR", "TEM", "SEM-EDX"],
    color: "primary",
  },
  {
    icon: FlaskConical,
    title: "Glassware",
    description: "Peralatan kaca laboratorium berkualitas tinggi untuk berbagai kebutuhan analisis.",
    items: ["Erlenmeyer", "Buret", "Corong Pisah", "Kit Destilasi", "Kit Fraksinasi", "Beaker Glass"],
    color: "secondary",
  },
  {
    icon: Atom,
    title: "Bahan Kimia",
    description: "Bahan kimia grade teknis (industri) dan Pro Analis dari brand terpercaya.",
    items: ["Asam Sulfat", "NaOH", "Karbon Aktif", "Toluena", "n-Heksana", "Etanol", "Metanol P.A", "HCL"],
    brands: ["Merck", "JT Baker"],
    color: "accent",
  },
  {
    icon: TestTube2,
    title: "Jasa Pengujian",
    description: "Layanan pengujian dan analisa material dengan teknologi terkini.",
    items: ["XRD", "XRF", "BET", "GC-MS/FID", "DRS-UV", "PSA", "TEM", "SEM-EDX", "FTIR"],
    color: "primary",
  },
];

const colorVariants = {
  primary: {
    bg: "bg-primary/10",
    icon: "text-primary",
    border: "border-primary/20",
    hover: "group-hover:bg-primary group-hover:text-primary-foreground",
  },
  secondary: {
    bg: "bg-secondary/10",
    icon: "text-secondary",
    border: "border-secondary/20",
    hover: "group-hover:bg-secondary group-hover:text-secondary-foreground",
  },
  accent: {
    bg: "bg-accent/10",
    icon: "text-accent",
    border: "border-accent/20",
    hover: "group-hover:bg-accent group-hover:text-accent-foreground",
  },
};

export const ProductsSection = () => {
  return (
    <section id="produk" className="py-24 bg-section-gradient">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
            Produk & Layanan
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Solusi Lengkap untuk Laboratorium Anda
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Kami menyediakan berbagai peralatan, bahan, dan layanan untuk mendukung 
            kegiatan riset dan industri dengan kualitas terjamin.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {categories.map((category, index) => {
            const variant = colorVariants[category.color as keyof typeof colorVariants];
            const Icon = category.icon;

            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 border border-border"
              >
                <div className={`w-14 h-14 rounded-xl ${variant.bg} ${variant.icon} flex items-center justify-center mb-6 transition-all duration-300 ${variant.hover}`}>
                  <Icon className="w-7 h-7" />
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3">
                  {category.title}
                </h3>

                <p className="text-muted-foreground mb-6">
                  {category.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {category.items.slice(0, 6).map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full"
                    >
                      {item}
                    </span>
                  ))}
                  {category.items.length > 6 && (
                    <span className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full">
                      +{category.items.length - 6} lainnya
                    </span>
                  )}
                </div>

                {category.brands && (
                  <div className="pt-4 border-t border-border">
                    <p className="text-sm text-muted-foreground">
                      Brand tersedia:{" "}
                      <span className="font-medium text-foreground">
                        {category.brands.join(", ")}
                      </span>
                    </p>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
