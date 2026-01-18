import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  },
};

export const ContactSection = () => {
  return (
    <section id="kontak" className="py-16 bg-muted">
      <div className="container">
        <motion.div 
          className="mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-medium text-primary mb-2">Kontak</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            Hubungi Kami
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            Hubungi kami untuk konsultasi, pemesanan, atau informasi lebih lanjut.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div 
            className="space-y-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {contactInfo.map((info) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={info.label}
                  variants={itemVariants}
                  whileHover={{ x: 4, transition: { duration: 0.2 } }}
                  className="flex gap-3 p-4 bg-card border border-border rounded-lg hover:border-primary/30 transition-colors"
                >
                  <div className="w-9 h-9 bg-primary/10 rounded flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">{info.label}</p>
                    {info.href ? (
                      <a href={info.href} className="text-sm text-foreground hover:text-primary transition-colors">
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-sm text-foreground">{info.value}</p>
                    )}
                  </div>
                </motion.div>
              );
            })}

            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button variant="whatsapp" size="lg" className="w-full mt-4" asChild>
                <a
                  href="https://wa.me/6281281181860?text=Halo%2C%20saya%20ingin%20bertanya%20tentang%20produk%20dan%20layanan%20Nuna%20Scientific"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Chat via WhatsApp
                </a>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div 
            className="h-80 lg:h-auto rounded-lg overflow-hidden border border-border"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
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
