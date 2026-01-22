import { useState, useEffect } from "react";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { label: "Beranda", href: "/#beranda", isAnchor: true },
  { 
    label: "Produk", 
    href: "/#produk", 
    isAnchor: true,
    hasDropdown: true,
    dropdownItems: [
      { label: "Katalog Produk", href: "/katalog" },
    ]
  },
  { 
    label: "Layanan", 
    href: "/#layanan", 
    isAnchor: true,
    hasDropdown: true,
    dropdownItems: [
      { label: "Jasa Uji Lab", href: "/jasa-uji-lab" },
      { label: "Request Quotation", href: "/quotation" },
    ]
  },
  { label: "Tentang Kami", href: "/#tentang", isAnchor: true },
  { label: "Kontak", href: "/#kontak", isAnchor: true },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string, isAnchor: boolean) => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
    
    if (isAnchor && location.pathname !== "/") {
      // If we're not on home page, navigate to home first
      window.location.href = href;
    } else if (isAnchor) {
      // If we're on home page, just scroll
      const id = href.replace("/#", "#");
      const element = document.querySelector(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled ? "bg-card shadow-sm border-b border-border" : "bg-card"
      }`}
    >
      <div className="container">
        <nav className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
              <span className="text-sm font-bold text-primary-foreground">NS</span>
            </div>
            <span className="text-lg font-semibold text-foreground">
              Nuna Scientific
            </span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <li key={item.href} className="relative">
                {item.hasDropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setOpenDropdown(item.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <button
                      className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
                    >
                      {item.label}
                      <ChevronDown className="w-3 h-3" />
                    </button>
                    {openDropdown === item.label && (
                      <div className="absolute top-full left-0 mt-1 bg-card border border-border rounded-lg shadow-lg py-2 min-w-[160px] z-50">
                        <a
                          href={item.href}
                          onClick={(e) => {
                            e.preventDefault();
                            handleNavClick(item.href, item.isAnchor);
                          }}
                          className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-muted transition-colors"
                        >
                          Semua Layanan
                        </a>
                        {item.dropdownItems?.map((dropItem) => (
                          <Link
                            key={dropItem.href}
                            to={dropItem.href}
                            className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-muted transition-colors"
                            onClick={() => setOpenDropdown(null)}
                          >
                            {dropItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href, item.isAnchor);
                    }}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.label}
                  </a>
                )}
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+6281281181860"
              className="flex items-center gap-1.5 text-sm text-muted-foreground"
            >
              <Phone className="w-4 h-4" />
              0812 8118 1860
            </a>
            <Button size="sm" asChild>
              <a href="https://wa.me/6281281181860" target="_blank" rel="noopener noreferrer">
                Hubungi Kami
              </a>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-card border-t border-border">
          <div className="container py-4">
            <ul className="flex flex-col gap-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  {item.hasDropdown ? (
                    <div>
                      <a
                        href={item.href}
                        onClick={(e) => {
                          e.preventDefault();
                          handleNavClick(item.href, item.isAnchor);
                        }}
                        className="text-foreground text-sm hover:text-primary transition-colors"
                      >
                        {item.label}
                      </a>
                      <div className="ml-4 mt-2 space-y-2">
                        {item.dropdownItems?.map((dropItem) => (
                          <Link
                            key={dropItem.href}
                            to={dropItem.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                          >
                            → {dropItem.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <a
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(item.href, item.isAnchor);
                      }}
                      className="text-foreground text-sm hover:text-primary transition-colors"
                    >
                      {item.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
            <div className="mt-4 pt-4 border-t border-border">
              <Button className="w-full" size="sm" asChild>
                <a href="https://wa.me/6281281181860" target="_blank" rel="noopener noreferrer">
                  Hubungi via WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
