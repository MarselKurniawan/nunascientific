import { CheckCircle, Award, Users, MapPin, Shield } from "lucide-react";
import { motion } from "framer-motion";
import aboutImg from "@/assets/about-lab.jpg";

const benefits = [
  { icon: MapPin, title: "Lokasi Strategis di BRIN", desc: "Berbasis di Gedung TBIC, Kawasan Puspiptek" },
  { icon: Award, title: "Produk Berkualitas", desc: "Brand internasional: Merck, JT Baker, Sigma-Aldrich" },
  { icon: Users, title: "Tim Profesional", desc: "Berpengalaman di bidang laboratorium" },
  { icon: Shield, title: "Garansi Resmi", desc: "Dukungan teknis dan layanan purna jual" },
];

const checklist = [
  "Konsultasi gratis",
  "Pengiriman ke seluruh Indonesia",
  "Garansi produk resmi",
  "Dukungan teknis profesional",
  "Harga kompetitif",
  "Layanan purna jual terjamin",
];

export const AboutSection = () => {
  return (
    <section id="tentang" className="py-20 bg-background overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary/10">
              <img
                src={aboutImg}
                alt="Laboratory Team"
                className="w-full h-[480px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
            </div>
            {/* Floating card */}
            <motion.div
              className="absolute -bottom-6 -right-6 bg-card border border-border rounded-2xl p-5 shadow-xl max-w-[200px]"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <p className="text-3xl font-bold text-primary">10+</p>
              <p className="text-sm text-muted-foreground">Tahun pengalaman di bidang laboratorium</p>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-4">
              <Award className="w-4 h-4" />
              Tentang Kami
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
              Partner Terpercaya untuk Kebutuhan{" "}
              <span className="text-primary">Laboratorium</span>
            </h2>
            <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
              <strong className="text-foreground">PT Nahla Usman Niaga</strong> adalah perusahaan
              yang bergerak di bidang penyediaan peralatan laboratorium, bahan kimia, dan jasa
              pengujian material. Berlokasi strategis di Gedung TBIC, Kawasan Puspiptek BRIN,
              kami berkomitmen mendukung kemajuan riset dan industri Indonesia.
            </p>

            {/* Benefits Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, i) => {
                const Icon = benefit.icon;
                return (
                  <motion.div
                    key={benefit.title}
                    className="flex gap-3 p-3 rounded-xl bg-muted/50 border border-border/50"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.4 }}
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm">{benefit.title}</p>
                      <p className="text-xs text-muted-foreground">{benefit.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Checklist */}
            <div className="grid grid-cols-2 gap-2">
              {checklist.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent shrink-0" />
                  <span className="text-sm text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
