import { motion } from "framer-motion";
import { Handshake } from "lucide-react";

const brands = [
  { name: "PerkinElmer", url: "https://majabintang.com/wp-content/uploads/2018/12/Perkin_Brand_250x120.jpg" },
  { name: "COXEM", url: "https://majabintang.com/wp-content/uploads/2019/12/coxem_Brand_250x120.png" },
  { name: "Oxford Instruments", url: "https://majabintang.com/wp-content/uploads/2022/08/Oxford-Instruments_Brand_250x120.png" },
  { name: "FDGS", url: "https://majabintang.com/wp-content/uploads/2023/08/FDGS.jpg" },
  { name: "Mantech", url: "https://majabintang.com/wp-content/uploads/2019/12/mantech_Brand_250x120.png" },
  { name: "Stakpure", url: "https://majabintang.com/wp-content/uploads/2022/09/Stakpure_Brand_250x120.jpg" },
  { name: "IUL", url: "https://majabintang.com/wp-content/uploads/2018/12/Iul_Brand_250x120.jpg" },
  { name: "OVAN", url: "https://majabintang.com/wp-content/uploads/2018/12/Ovan_Brand_250x120.jpg" },
  { name: "Elvatech", url: "https://majabintang.com/wp-content/uploads/2025/11/elvatech-logo-png-xearpro-1-300x120-1.png" },
  { name: "BEL Engineering", url: "https://majabintang.com/wp-content/uploads/2022/11/bel_engineering_Brand_250x120.jpg" },
  { name: "Milwaukee", url: "https://majabintang.com/wp-content/uploads/2023/08/milwaukee.jpg" },
  { name: "IKA", url: "https://majabintang.com/wp-content/uploads/2019/12/IKA_Brand_250x120.png" },
  { name: "Refyen", url: "http://majabintang.com/wp-content/uploads/2025/11/refyen.png" },
  { name: "Thermo Fisher", url: "https://majabintang.com/wp-content/uploads/2025/11/thermo-fisher-scientific-logo.png" },
  { name: "MicroLab", url: "https://majabintang.com/wp-content/uploads/2022/09/MicroLab_Brand_250x120.jpg" },
  { name: "Aijiren", url: "https://majabintang.com/wp-content/uploads/2022/09/aijiren_Brand_250x120.jpg" },
  { name: "Microlit", url: "https://majabintang.com/wp-content/uploads/2020/02/Microlit-Logo-New-Branding.png" },
  { name: "Photron", url: "https://majabintang.com/wp-content/uploads/2018/12/photron_Brand_250x120.jpg" },
  { name: "Trajan", url: "https://majabintang.com/wp-content/uploads/2023/08/Trajan_Brand_250x120.jpg" },
  { name: "Water ID", url: "https://majabintang.com/wp-content/uploads/2022/11/Water-ID_Brand_250x120.jpg" },
  { name: "Fortis", url: "https://majabintang.com/wp-content/uploads/2022/09/Fortis_Brand_250x120.jpg" },
  { name: "Restek", url: "https://majabintang.com/wp-content/uploads/2022/09/Restek_Brand_250x120.jpg" },
];

// Duplicate for seamless loop
const marqueeItems = [...brands, ...brands];

export const BrandsSection = () => {
  return (
    <section className="py-20 bg-muted/30 overflow-hidden">
      <div className="container">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-4">
            <Handshake className="w-4 h-4" />
            Partner Kami
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Brand Terpercaya Dunia
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Kami bermitra dengan brand-brand terkemuka dunia untuk menyediakan instrumen laboratorium berkualitas tinggi.
          </p>
        </motion.div>
      </div>

      {/* Marquee Row 1 */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
        <div className="flex gap-6 animate-marquee">
          {marqueeItems.map((brand, i) => (
            <div
              key={`${brand.name}-${i}`}
              className="shrink-0 bg-card border border-border rounded-xl px-8 py-5 flex items-center justify-center hover:border-primary/30 hover:shadow-md transition-all min-w-[180px] h-[80px]"
            >
              <img
                src={brand.url}
                alt={brand.name}
                className="max-h-10 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Marquee Row 2 - Reverse */}
      <div className="relative mt-6">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
        <div className="flex gap-6 animate-marquee-reverse">
          {[...marqueeItems].reverse().map((brand, i) => (
            <div
              key={`${brand.name}-rev-${i}`}
              className="shrink-0 bg-card border border-border rounded-xl px-8 py-5 flex items-center justify-center hover:border-primary/30 hover:shadow-md transition-all min-w-[180px] h-[80px]"
            >
              <img
                src={brand.url}
                alt={brand.name}
                className="max-h-10 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
