import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { Mail, Send, CheckCircle } from "lucide-react";
import { useState } from "react";

const serviceCategories = [
  { value: "instrumen", label: "Instrumen Laboratorium" },
  { value: "glassware", label: "Glassware" },
  { value: "chemicals", label: "Bahan Kimia" },
  { value: "jasa-uji", label: "Jasa Uji Lab" },
  { value: "lainnya", label: "Lainnya" },
];

const Quotation = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, just show success state
    setIsSubmitted(true);
  };

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-b from-primary/5 to-background">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-sm font-medium text-primary mb-2">Request Quotation</p>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Dapatkan Penawaran Harga
            </h1>
            <p className="text-muted-foreground">
              Isi formulir di bawah ini untuk mendapatkan penawaran harga produk atau jasa yang Anda butuhkan.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-12 bg-background">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            {isSubmitted ? (
              <div className="bg-card border border-border rounded-xl p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h2 className="text-xl font-semibold text-foreground mb-2">
                  Permintaan Terkirim!
                </h2>
                <p className="text-muted-foreground mb-6">
                  Terima kasih atas permintaan Anda. Tim kami akan menghubungi Anda dalam 1x24 jam.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button onClick={() => setIsSubmitted(false)} variant="outline">
                    Kirim Permintaan Lain
                  </Button>
                  <Button asChild className="bg-green-600 hover:bg-green-700">
                    <a href="https://wa.me/6281281181860" target="_blank" rel="noopener noreferrer">
                      <WhatsAppIcon className="w-4 h-4 mr-2" />
                      Chat Langsung
                    </a>
                  </Button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-card border border-border rounded-xl p-6 md:p-8">
                <div className="grid gap-6">
                  {/* Personal Info */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nama Lengkap *</Label>
                      <Input id="name" placeholder="Masukkan nama lengkap" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Nama Instansi/Perusahaan</Label>
                      <Input id="company" placeholder="Nama instansi atau perusahaan" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input id="email" type="email" placeholder="email@example.com" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">No. WhatsApp *</Label>
                      <Input id="phone" type="tel" placeholder="08xxxxxxxxxx" required />
                    </div>
                  </div>

                  {/* Service Selection */}
                  <div className="space-y-2">
                    <Label htmlFor="category">Kategori Produk/Layanan *</Label>
                    <Select required>
                      <SelectTrigger>
                        <SelectValue placeholder="Pilih kategori" />
                      </SelectTrigger>
                      <SelectContent>
                        {serviceCategories.map((cat) => (
                          <SelectItem key={cat.value} value={cat.value}>
                            {cat.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="product">Nama Produk/Jasa yang Dibutuhkan *</Label>
                    <Input id="product" placeholder="Contoh: XRD, HPLC, Jasa Analisis XRF, dll" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="details">Detail Kebutuhan</Label>
                    <Textarea 
                      id="details" 
                      placeholder="Jelaskan spesifikasi, jumlah sampel, atau detail lainnya..."
                      rows={4}
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    <Send className="w-4 h-4 mr-2" />
                    Kirim Permintaan
                  </Button>
                </div>
              </form>
            )}

            {/* Alternative Contact */}
            <div className="mt-8 p-6 bg-muted rounded-xl">
              <p className="text-center text-muted-foreground mb-4">
                Butuh respon cepat? Hubungi kami langsung:
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button asChild variant="outline" className="border-green-500 text-green-600 hover:bg-green-50">
                  <a href="https://wa.me/6281281181860" target="_blank" rel="noopener noreferrer">
                    <WhatsAppIcon className="w-4 h-4 mr-2" />
                    0812 8118 1860
                  </a>
                </Button>
                <Button asChild variant="outline">
                  <a href="mailto:ptnahlausmanniaga@gmail.com">
                    <Mail className="w-4 h-4 mr-2" />
                    Email Kami
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
};

export default Quotation;
