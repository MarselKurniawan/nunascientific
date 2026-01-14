import { Microscope, FlaskConical, Atom, TestTube2 } from "lucide-react";

const categories = [
  {
    icon: Microscope,
    title: "Instrumen Laboratorium",
    description: "Peralatan analitik untuk laboratorium Kimia, Fisika, Farmasi, dan Biologi.",
    items: ["XRF", "XRD", "HPLC", "GC-MS/FID", "Spektroskopi UV-VIS", "FTIR", "TEM", "SEM-EDX"],
  },
  {
    icon: FlaskConical,
    title: "Glassware",
    description: "Peralatan kaca laboratorium berkualitas untuk berbagai kebutuhan.",
    items: ["Erlenmeyer", "Buret", "Corong Pisah", "Kit Destilasi", "Kit Fraksinasi", "Beaker Glass"],
  },
  {
    icon: Atom,
    title: "Bahan Kimia",
    description: "Bahan kimia grade teknis dan Pro Analis dari brand terpercaya.",
    items: ["Asam Sulfat", "NaOH", "Karbon Aktif", "Toluena", "n-Heksana", "Etanol", "Metanol P.A"],
    brands: ["Merck", "JT Baker"],
  },
  {
    icon: TestTube2,
    title: "Jasa Pengujian",
    description: "Layanan pengujian dan analisa material dengan hasil akurat.",
    items: ["XRD", "XRF", "BET", "GC-MS/FID", "DRS-UV", "PSA", "TEM", "SEM-EDX", "FTIR"],
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

        <div className="grid md:grid-cols-2 gap-5">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.title}
                className="bg-card border border-border rounded-lg p-6 hover:border-primary/30 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-1">
                      {category.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
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
            );
          })}
        </div>
      </div>
    </section>
  );
};
