import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
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
      window.location.href = href;
    } else if (isAnchor) {
      const id = href.replace("/#", "#");
      const element = document.querySelector(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-card/95 backdrop-blur-xl shadow-lg shadow-foreground/5 border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container">
        <nav className="flex items-center justify-between h-18 py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5">
            <div className="w-9 h-9 bg-primary rounded-lg flex items-center justify-center shadow-md shadow-primary/30">
              <span className="text-sm font-bold text-primary-foreground">NS</span>
            </div>
            <div className="flex flex-col">
              <span className={`text-lg font-bold leading-tight transition-colors ${isScrolled ? 'text-foreground' : 'text-primary-foreground'}`}>
                Nuna Scientific
              </span>
              <span className={`text-[10px] font-medium leading-tight transition-colors ${isScrolled ? 'text-muted-foreground' : 'text-primary-foreground/60'}`}>
                PT Nahla Usman Niaga
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.href} className="relative">
                {item.hasDropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setOpenDropdown(item.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <button
                      className={`text-sm font-medium px-4 py-2 rounded-lg transition-all flex items-center gap-1 ${
                        isScrolled
                          ? "text-muted-foreground hover:text-primary hover:bg-muted"
                          : "text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10"
                      }`}
                    >
                      {item.label}
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform ${openDropdown === item.label ? 'rotate-180' : ''}`} />
                    </button>
                    {openDropdown === item.label && (
                      <div className="absolute top-full left-0 mt-1 bg-card border border-border rounded-xl shadow-xl shadow-foreground/10 py-2 min-w-[180px] z-50 animate-fade-in">
                        <a
                          href={item.href}
                          onClick={(e) => {
                            e.preventDefault();
                            handleNavClick(item.href, item.isAnchor);
                          }}
                          className="block px-4 py-2.5 text-sm text-muted-foreground hover:text-primary hover:bg-muted transition-colors"
                        >
                          Semua {item.label}
                        </a>
                        {item.dropdownItems?.map((dropItem) => (
                          <Link
                            key={dropItem.href}
                            to={dropItem.href}
                            className="block px-4 py-2.5 text-sm text-muted-foreground hover:text-primary hover:bg-muted transition-colors"
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
                    className={`text-sm font-medium px-4 py-2 rounded-lg transition-all ${
                      isScrolled
                        ? "text-muted-foreground hover:text-primary hover:bg-muted"
                        : "text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10"
                    }`}
                  >
                    {item.label}
                  </a>
                )}
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Button size="sm" className="shadow-md shadow-primary/20" asChild>
              <Link to="/quotation">
                Hubungi Kami
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? 'text-foreground' : 'text-primary-foreground'
            }`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-card/98 backdrop-blur-xl border-t border-border animate-fade-in">
          <div className="container py-4">
            <ul className="flex flex-col gap-1">
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
                        className="block px-4 py-2.5 text-foreground text-sm font-medium hover:text-primary hover:bg-muted rounded-lg transition-colors"
                      >
                        {item.label}
                      </a>
                      <div className="ml-4 space-y-1">
                        {item.dropdownItems?.map((dropItem) => (
                          <Link
                            key={dropItem.href}
                            to={dropItem.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-muted rounded-lg transition-colors"
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
                      className="block px-4 py-2.5 text-foreground text-sm font-medium hover:text-primary hover:bg-muted rounded-lg transition-colors"
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
