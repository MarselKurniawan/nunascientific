import { CheckCircle } from "lucide-react";

const benefits = [
  "Konsultasi gratis",
  "Pengiriman ke seluruh Indonesia",
  "Garansi produk resmi",
  "Dukungan teknis profesional",
  "Harga kompetitif",
  "Layanan purna jual terjamin",
];

export const AboutSection = () => {
  return (
    <section id="tentang" className="py-16 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <p className="text-sm font-medium text-primary mb-2">Tentang Kami</p>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Partner Terpercaya untuk Kebutuhan Laboratorium
            </h2>
            <p className="text-muted-foreground mb-6">
              <strong className="text-foreground">PT Nahla Usman Niaga</strong> adalah perusahaan 
              yang bergerak di bidang penyediaan peralatan laboratorium, bahan kimia, dan jasa 
              pengujian material. Berlokasi strategis di Gedung TBIC, Kawasan Puspiptek BRIN, 
              kami berkomitmen mendukung kemajuan riset dan industri Indonesia.
            </p>
            
            <div className="grid grid-cols-2 gap-3">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent shrink-0" />
                  <span className="text-sm text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-muted rounded-lg p-6">
            <h3 className="font-semibold text-foreground mb-4">Mengapa Pilih Kami?</h3>
            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="w-8 h-8 bg-primary/10 rounded flex items-center justify-center shrink-0">
                  <span className="text-primary font-semibold text-sm">1</span>
                </div>
                <div>
                  <p className="font-medium text-foreground text-sm">Lokasi Strategis di BRIN</p>
                  <p className="text-xs text-muted-foreground">Berbasis di Gedung TBIC, Kawasan Puspiptek</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-8 h-8 bg-primary/10 rounded flex items-center justify-center shrink-0">
                  <span className="text-primary font-semibold text-sm">2</span>
                </div>
                <div>
                  <p className="font-medium text-foreground text-sm">Produk Berkualitas</p>
                  <p className="text-xs text-muted-foreground">Brand internasional: Merck, JT Baker, dll</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-8 h-8 bg-primary/10 rounded flex items-center justify-center shrink-0">
                  <span className="text-primary font-semibold text-sm">3</span>
                </div>
                <div>
                  <p className="font-medium text-foreground text-sm">Tim Profesional</p>
                  <p className="text-xs text-muted-foreground">Berpengalaman di bidang laboratorium</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
