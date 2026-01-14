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

export const ServicesSection = () => {
  return (
    <section id="layanan" className="py-16 bg-muted">
      <div className="container">
        <div className="mb-10">
          <p className="text-sm font-medium text-primary mb-2">Jasa Pengujian</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            Layanan Pengujian & Analisa Material
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            Pengujian material dengan teknologi terkini dan hasil yang akurat untuk kebutuhan riset dan industri Anda.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {services.map((service) => (
            <div
              key={service.name}
              className="bg-card border border-border rounded-lg p-4 hover:border-primary/30 transition-colors"
            >
              <p className="font-semibold text-foreground text-sm">{service.name}</p>
              <p className="text-xs text-muted-foreground mt-1">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
