import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, FileText } from "lucide-react";
import { Link } from "react-router-dom";

const highlights = [
  "Instrumen Lab Berkualitas",
  "Bahan Kimia Grade Teknis & P.A",
  "Jasa Pengujian Material",
];

export const HeroSection = () => {
  return (
    <section id="beranda" className="pt-24 pb-16 bg-muted">
      <div className="container">
        <div className="max-w-3xl">
          <p className="text-sm font-medium text-primary mb-3">
            PT Nahla Usman Niaga
          </p>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-4">
            Supplier Peralatan Laboratorium & Bahan Kimia
          </h1>

          <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-2xl">
            Menyediakan instrumen laboratorium, glassware, bahan kimia teknis & Pro Analis,
            serta layanan pengujian material untuk riset dan industri.
          </p>

          <ul className="flex flex-wrap gap-x-6 gap-y-2 mb-8">
            {highlights.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-foreground">
                <CheckCircle className="w-4 h-4 text-accent" />
                {item}
              </li>
            ))}
          </ul>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button size="lg" asChild>
              <a href="#produk">
                Lihat Produk
                <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/quotation">
                <FileText className="w-4 h-4 mr-1" />
                Hubungi Kami
              </Link>
            </Button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-4 mt-12 pt-8 border-t border-border max-w-xl">
          <div>
            <p className="text-2xl md:text-3xl font-bold text-primary">500+</p>
            <p className="text-sm text-muted-foreground">Produk</p>
          </div>
          <div>
            <p className="text-2xl md:text-3xl font-bold text-primary">50+</p>
            <p className="text-sm text-muted-foreground">Klien</p>
          </div>
          <div>
            <p className="text-2xl md:text-3xl font-bold text-primary">10+</p>
            <p className="text-sm text-muted-foreground">Jasa Uji</p>
          </div>
        </div>
      </div>
    </section>
  );
};
