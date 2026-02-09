import { Microscope, FlaskConical, Atom, TestTube2, ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

import instrumentImg from "@/assets/instruments/microscope.jpg";
import glasswareImg from "@/assets/instruments/glassware.jpg";
import chemicalsImg from "@/assets/instruments/chemicals.jpg";
import labTestingImg from "@/assets/instruments/lab-testing.jpg";

const categories = [
  {
    icon: Microscope,
    title: "Instrumen Laboratorium",
    description: "Peralatan analitik untuk laboratorium Kimia, Fisika, Farmasi, dan Biologi.",
    items: ["XRF", "XRD", "HPLC", "GC-MS/FID", "UV-VIS", "FTIR", "ICP-OES", "SEM-EDX"],
    image: instrumentImg,
    link: "/katalog?category=instruments",
  },
  {
    icon: FlaskConical,
    title: "Glassware",
    description: "Peralatan kaca laboratorium berkualitas dari brand terpercaya.",
    items: ["Erlenmeyer", "Beaker", "Buret", "Corong Pisah", "Labu Takar", "Gelas Ukur"],
    image: glasswareImg,
    link: "/katalog?category=glassware",
  },
  {
    icon: Atom,
    title: "Bahan Kimia",
    description: "Bahan kimia grade teknis dan Pro Analis dari brand terpercaya.",
    items: ["Reagent PA", "Solvent HPLC", "Asam & Basa", "Standar Analitik"],
    brands: ["Merck", "JT Baker", "Sigma-Aldrich"],
    image: chemicalsImg,
    link: "/katalog?category=chemicals",
  },
  {
    icon: TestTube2,
    title: "Jasa Pengujian",
    description: "Layanan pengujian dan karakterisasi material dengan hasil akurat.",
    items: ["XRD", "XRF", "BET", "GC-MS", "PSA", "TEM", "SEM-EDX", "FTIR"],
    image: labTestingImg,
    link: "/jasa-uji-lab",
  },
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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  },
};

export const ProductsSection = () => {
  return (
    <section id="produk" className="py-20 bg-muted/30">
      <div className="container">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            <CheckCircle2 className="w-4 h-4" />
            Produk & Layanan Kami
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Solusi Lengkap untuk Laboratorium
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Kami menyediakan berbagai peralatan, bahan, dan layanan untuk kebutuhan riset dan industri Anda.
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className="group bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-primary/5 hover:border-primary/20 transition-all duration-300"
              >
                {/* Image Section */}
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={category.image} 
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                  
                  {/* Icon Badge */}
                  <div className="absolute bottom-4 left-5">
                    <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center shadow-lg">
                      <Icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                  </div>
                </div>
                
                {/* Content Section */}
                <div className="p-6">
                  <h3 className="font-bold text-xl text-foreground mb-2 group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {category.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {category.items.slice(0, 5).map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1 bg-muted text-muted-foreground text-xs font-medium rounded-full"
                      >
                        {item}
                      </span>
                    ))}
                    {category.items.length > 5 && (
                      <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                        +{category.items.length - 5} lainnya
                      </span>
                    )}
                  </div>
                  
                  {category.brands && (
                    <p className="text-sm text-muted-foreground mb-4">
                      Brand: <span className="text-foreground font-medium">{category.brands.join(" • ")}</span>
                    </p>
                  )}

                  <Link 
                    to={category.link}
                    className="inline-flex items-center gap-2 text-primary font-medium text-sm hover:gap-3 transition-all"
                  >
                    Lihat Selengkapnya
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Button */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Button size="lg" className="px-8 font-semibold" asChild>
            <Link to="/katalog" className="inline-flex items-center gap-2">
              Lihat Katalog Lengkap
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
