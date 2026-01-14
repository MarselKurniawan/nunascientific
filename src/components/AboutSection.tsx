import { motion } from "framer-motion";
import { CheckCircle2, Building2, Award, Users } from "lucide-react";

const features = [
  {
    icon: Building2,
    title: "Berlokasi di BRIN",
    description: "Berbasis di Gedung TBIC, Kawasan Puspiptek, memastikan standar riset tinggi.",
  },
  {
    icon: Award,
    title: "Produk Berkualitas",
    description: "Menyediakan produk dari brand internasional terpercaya seperti Merck dan JT Baker.",
  },
  {
    icon: Users,
    title: "Tim Ahli",
    description: "Didukung oleh tim profesional yang berpengalaman di bidang laboratorium.",
  },
];

const benefits = [
  "Konsultasi gratis untuk kebutuhan laboratorium",
  "Pengiriman ke seluruh Indonesia",
  "Garansi produk resmi",
  "Dukungan teknis profesional",
  "Harga kompetitif",
  "Layanan purna jual terjamin",
];

export const AboutSection = () => {
  return (
    <section id="tentang" className="py-24 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
              Tentang Kami
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Partner Terpercaya untuk{" "}
              <span className="text-gradient">Kebutuhan Laboratorium</span>
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              <strong className="text-foreground">PT Nahla Usman Niaga</strong> adalah perusahaan 
              yang bergerak di bidang penyediaan peralatan laboratorium, bahan kimia, dan jasa 
              pengujian material. Berlokasi strategis di Gedung TBIC, Kawasan Puspiptek BRIN, 
              kami berkomitmen untuk mendukung kemajuan riset dan industri Indonesia.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="flex items-start gap-2"
                >
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Features */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex gap-5 p-6 bg-card rounded-2xl shadow-card border border-border"
                >
                  <div className="w-12 h-12 bg-hero-gradient rounded-xl flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
