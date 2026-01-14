import { Phone, Mail, MapPin } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-hero-gradient rounded-lg flex items-center justify-center">
                <span className="text-xl font-bold text-primary-foreground">N</span>
              </div>
              <div>
                <span className="text-xl font-bold">Nuna</span>
                <span className="text-xl font-bold text-primary">Scientific</span>
              </div>
            </div>
            <p className="text-background/70 text-sm mb-4">
              PT Nahla Usman Niaga - Supplier peralatan laboratorium, bahan kimia, 
              dan jasa pengujian material terpercaya.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Navigasi</h4>
            <ul className="space-y-2">
              <li>
                <a href="#beranda" className="text-background/70 hover:text-background transition-colors text-sm">
                  Beranda
                </a>
              </li>
              <li>
                <a href="#produk" className="text-background/70 hover:text-background transition-colors text-sm">
                  Produk
                </a>
              </li>
              <li>
                <a href="#layanan" className="text-background/70 hover:text-background transition-colors text-sm">
                  Layanan
                </a>
              </li>
              <li>
                <a href="#tentang" className="text-background/70 hover:text-background transition-colors text-sm">
                  Tentang Kami
                </a>
              </li>
              <li>
                <a href="#kontak" className="text-background/70 hover:text-background transition-colors text-sm">
                  Kontak
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Kontak</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 shrink-0 mt-1 text-primary" />
                <span className="text-background/70 text-sm">
                  Gedung TBIC, BRIN, Jl. Komp. Puspiptek, Pengasinan, Kec. Gn. Sindur, Kabupaten Bogor, Jawa Barat 16340
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary" />
                <a href="tel:+6281281181860" className="text-background/70 hover:text-background transition-colors text-sm">
                  0812 8118 1860
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:ptnahlausmanniaga@gmail.com" className="text-background/70 hover:text-background transition-colors text-sm">
                  ptnahlausmanniaga@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-background/10 text-center">
          <p className="text-background/50 text-sm">
            © {currentYear} PT Nahla Usman Niaga. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
