import { Phone, Mail, MapPin } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 bg-primary rounded flex items-center justify-center">
                <span className="text-xs font-bold text-primary-foreground">NS</span>
              </div>
              <span className="font-semibold">Nuna Scientific</span>
            </div>
            <p className="text-background/70 text-sm">
              PT Nahla Usman Niaga - Supplier peralatan laboratorium, bahan kimia, dan jasa pengujian.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-3 text-sm">Navigasi</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#beranda" className="text-background/70 hover:text-background">Beranda</a></li>
              <li><a href="#produk" className="text-background/70 hover:text-background">Produk</a></li>
              <li><a href="#layanan" className="text-background/70 hover:text-background">Layanan</a></li>
              <li><a href="#tentang" className="text-background/70 hover:text-background">Tentang Kami</a></li>
              <li><a href="#kontak" className="text-background/70 hover:text-background">Kontak</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3 text-sm">Kontak</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5 text-primary" />
                <span className="text-background/70">Gedung TBIC, BRIN, Kawasan Puspiptek, Bogor</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                <a href="tel:+6281281181860" className="text-background/70 hover:text-background">0812 8118 1860</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:ptnahlausmanniaga@gmail.com" className="text-background/70 hover:text-background">ptnahlausmanniaga@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-background/10 text-center">
          <p className="text-background/50 text-sm">
            © {currentYear} PT Nahla Usman Niaga. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
