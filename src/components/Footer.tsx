import { Mail, MapPin, Phone, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const quickLinks = [
  { label: "Beranda", href: "/#beranda" },
  { label: "Katalog Produk", href: "/katalog" },
  { label: "Jasa Uji Lab", href: "/jasa-uji-lab" },
  { label: "Request Quotation", href: "/quotation" },
];

const serviceLinks = [
  "XRD", "XRF", "GC-MS/FID", "FTIR", "SEM-EDX", "TEM", "BET", "PSA",
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-primary-foreground/80">
      {/* Main Footer */}
      <div className="container py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-sm font-bold text-primary-foreground">NS</span>
              </div>
              <div>
                <span className="font-bold text-primary-foreground block leading-tight">Nuna Scientific</span>
                <span className="text-[10px] text-primary-foreground/50 block">PT Nahla Usman Niaga</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-primary-foreground/60 mb-6">
              Supplier peralatan laboratorium, bahan kimia, dan jasa pengujian material terpercaya untuk riset dan industri Indonesia.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-primary-foreground mb-4 text-sm uppercase tracking-wider">Navigasi</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  {link.href.startsWith("/#") ? (
                    <a href={link.href} className="text-sm text-primary-foreground/60 hover:text-primary transition-colors inline-flex items-center gap-1.5 group">
                      <ArrowRight className="w-3 h-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                      {link.label}
                    </a>
                  ) : (
                    <Link to={link.href} className="text-sm text-primary-foreground/60 hover:text-primary transition-colors inline-flex items-center gap-1.5 group">
                      <ArrowRight className="w-3 h-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-primary-foreground mb-4 text-sm uppercase tracking-wider">Jasa Uji</h4>
            <ul className="space-y-3">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <span className="text-sm text-primary-foreground/60">{s}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-primary-foreground mb-4 text-sm uppercase tracking-wider">Kontak</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 shrink-0 mt-1 text-primary" />
                <span className="text-sm text-primary-foreground/60">Gedung TBIC, BRIN, Kawasan Puspiptek, Bogor, Jawa Barat</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 shrink-0 text-primary" />
                <a href="tel:+6281281181860" className="text-sm text-primary-foreground/60 hover:text-primary transition-colors">
                  0812 8118 1860
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 shrink-0 text-primary" />
                <a href="mailto:ptnahlausmanniaga@gmail.com" className="text-sm text-primary-foreground/60 hover:text-primary transition-colors">
                  ptnahlausmanniaga@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-primary-foreground/40">
            © {currentYear} PT Nahla Usman Niaga. All rights reserved.
          </p>
          <p className="text-sm text-primary-foreground/40">
            Nuna Scientific — Your Trusted Lab Partner
          </p>
        </div>
      </div>
    </footer>
  );
};
