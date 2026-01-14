import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    label: "Alamat",
    value: "Gedung TBIC, BRIN, Jl. Komp. Puspiptek, Pengasinan, Kec. Gn. Sindur, Kabupaten Bogor, Jawa Barat 16340",
  },
  {
    icon: Phone,
    label: "Telepon / WhatsApp",
    value: "0812 8118 1860",
    href: "tel:+6281281181860",
  },
  {
    icon: Mail,
    label: "Email",
    value: "ptnahlausmanniaga@gmail.com",
    href: "mailto:ptnahlausmanniaga@gmail.com",
  },
  {
    icon: Clock,
    label: "Jam Operasional",
    value: "Senin - Jumat, 08:00 - 17:00 WIB",
  },
];

export const ContactSection = () => {
  return (
    <section id="kontak" className="py-24 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent text-sm font-medium rounded-full mb-4">
            Hubungi Kami
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Siap Membantu Kebutuhan Anda
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hubungi kami untuk konsultasi, pemesanan, atau informasi lebih lanjut 
            tentang produk dan layanan kami.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex gap-4 p-5 bg-card rounded-xl shadow-card border border-border"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-foreground font-medium hover:text-primary transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-foreground font-medium">{info.value}</p>
                    )}
                  </div>
                </motion.div>
              );
            })}

            {/* WhatsApp CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              <Button variant="whatsapp" size="xl" className="w-full" asChild>
                <a
                  href="https://wa.me/6281281181860?text=Halo%2C%20saya%20ingin%20bertanya%20tentang%20produk%20dan%20layanan%20Nuna%20Scientific"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-5 h-5" />
                  Chat via WhatsApp
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="h-[400px] lg:h-full min-h-[400px] rounded-2xl overflow-hidden shadow-card border border-border"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.7711825654!2d106.66297827573792!3d-6.357227862312413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69e51714e96969%3A0x6d3c5f2e8c3d9b0a!2sKawasan%20Puspiptek!5e0!3m2!1sen!2sid!4v1704000000000!5m2!1sen!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi Nuna Scientific"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
