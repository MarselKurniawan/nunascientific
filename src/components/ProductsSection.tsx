import { Microscope, FlaskConical, Atom, TestTube2 } from "lucide-react";

import instrumentImg from "@/assets/instruments/microscope.jpg";
import glasswareImg from "@/assets/instruments/glassware.jpg";
import chemicalsImg from "@/assets/instruments/chemicals.jpg";
import labTestingImg from "@/assets/instruments/lab-testing.jpg";

const categories = [
  {
    icon: Microscope,
    title: "Instrumen Laboratorium",
    description: "Peralatan analitik untuk laboratorium Kimia, Fisika, Farmasi, dan Biologi.",
    items: ["XRF", "XRD", "HPLC", "GC-MS/FID", "Spektroskopi UV-VIS", "FTIR", "TEM", "SEM-EDX"],
    image: instrumentImg,
  },
  {
    icon: FlaskConical,
    title: "Glassware",
    description: "Peralatan kaca laboratorium berkualitas untuk berbagai kebutuhan.",
    items: ["Erlenmeyer", "Buret", "Corong Pisah", "Kit Destilasi", "Kit Fraksinasi", "Beaker Glass"],
    image: glasswareImg,
  },
  {
    icon: Atom,
    title: "Bahan Kimia",
    description: "Bahan kimia grade teknis dan Pro Analis dari brand terpercaya.",
    items: ["Asam Sulfat", "NaOH", "Karbon Aktif", "Toluena", "n-Heksana", "Etanol", "Metanol P.A"],
    brands: ["Merck", "JT Baker"],
    image: chemicalsImg,
  },
  {
    icon: TestTube2,
    title: "Jasa Pengujian",
    description: "Layanan pengujian dan analisa material dengan hasil akurat.",
    items: ["XRD", "XRF", "BET", "GC-MS/FID", "DRS-UV", "PSA", "TEM", "SEM-EDX", "FTIR"],
    image: labTestingImg,
  },
];

export const ProductsSection = () => {
  return (
    <section id="produk" className="py-16 bg-background">
      <div className="container">
        <div className="mb-10">
          <p className="text-sm font-medium text-primary mb-2">Produk & Layanan</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            Solusi Lengkap untuk Laboratorium
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            Kami menyediakan berbagai peralatan, bahan, dan layanan untuk kebutuhan riset dan industri.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.title}
                className="bg-card border border-border rounded-lg overflow-hidden hover:border-primary/30 transition-colors"
              >
                {/* Image Section */}
                <div className="h-40 overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Content Section */}
                <div className="p-5">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground mb-1">
                        {category.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        {category.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {category.items.slice(0, 5).map((item) => (
                          <span
                            key={item}
                            className="px-2 py-0.5 bg-muted text-muted-foreground text-xs rounded"
                          >
                            {item}
                          </span>
                        ))}
                        {category.items.length > 5 && (
                          <span className="px-2 py-0.5 bg-muted text-muted-foreground text-xs rounded">
                            +{category.items.length - 5} lainnya
                          </span>
                        )}
                      </div>
                      {category.brands && (
                        <p className="text-xs text-muted-foreground mt-3">
                          Brand: <span className="text-foreground">{category.brands.join(", ")}</span>
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
