import { Navbar } from "@/components/Navbar";
import { SEO } from "@/components/SEO";
import { HeroSection } from "@/components/HeroSection";
import { ProductsSection } from "@/components/ProductsSection";
import { ServicesSection } from "@/components/ServicesSection";
import { BrandsSection } from "@/components/BrandsSection";
import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

const Index = () => {
  return (
    <main className="min-h-screen">
      <SEO
        title="Nuna Scientific - Supplier Peralatan Lab & Bahan Kimia Terpercaya"
        description="Supplier peralatan laboratorium, instrumen analitik, glassware, bahan kimia grade teknis & P.A, serta jasa pengujian laboratorium terpercaya di Indonesia."
        canonical="https://nunascientific.com"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Nuna Scientific",
          legalName: "PT Nahla Usman Niaga",
          url: "https://nunascientific.com",
          logo: "https://nunascientific.com/og-image.jpg",
          description: "Supplier peralatan laboratorium, instrumen analitik, glassware, bahan kimia, dan jasa pengujian laboratorium terpercaya di Indonesia.",
          address: { "@type": "PostalAddress", addressCountry: "ID" },
          contactPoint: { "@type": "ContactPoint", telephone: "+6281281181860", contactType: "sales" },
          sameAs: []
        }}
      />
      <Navbar />
      <HeroSection />
      <ProductsSection />
      <ServicesSection />
      <BrandsSection />
      <AboutSection />
      <CTASection />
      <ContactSection />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
};

export default Index;
