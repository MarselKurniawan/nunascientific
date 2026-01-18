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

export const BrandsSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container">
        <div className="text-center mb-10">
          <p className="text-sm font-medium text-primary mb-2">Partner Kami</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            Our Brands
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Kami bermitra dengan brand-brand terkemuka dunia untuk menyediakan instrumen laboratorium berkualitas tinggi.
          </p>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="bg-card border border-border rounded-lg p-4 flex items-center justify-center hover:border-primary/30 hover:shadow-sm transition-all"
            >
              <img
                src={brand.url}
                alt={brand.name}
                className="max-h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
