import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, Loader2, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import type { Product } from "@/data/products";

const quotationSchema = z.object({
  name: z.string().trim().min(2, "Nama minimal 2 karakter").max(100, "Nama maksimal 100 karakter"),
  email: z.string().trim().email("Email tidak valid").max(255, "Email maksimal 255 karakter"),
  phone: z.string().trim().min(10, "Nomor telepon minimal 10 digit").max(20, "Nomor telepon maksimal 20 digit"),
  company: z.string().trim().max(100, "Nama perusahaan maksimal 100 karakter").optional(),
  quantity: z.string().trim().min(1, "Jumlah wajib diisi"),
  message: z.string().trim().max(1000, "Pesan maksimal 1000 karakter").optional(),
});

type QuotationFormData = z.infer<typeof quotationSchema>;

interface QuotationFormProps {
  product: Product;
}

export const QuotationForm = ({ product }: QuotationFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<QuotationFormData>({
    resolver: zodResolver(quotationSchema),
  });

  const onSubmit = async (data: QuotationFormData) => {
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Build WhatsApp message
    const message = encodeURIComponent(
      `*Request Quotation - Nuna Scientific*\n\n` +
      `*Produk:* ${product.name}\n` +
      `*Kategori:* ${product.subcategory}\n` +
      `${product.brand ? `*Brand:* ${product.brand}\n` : ""}` +
      `\n---\n\n` +
      `*Data Pemohon:*\n` +
      `Nama: ${data.name}\n` +
      `Email: ${data.email}\n` +
      `Telepon: ${data.phone}\n` +
      `${data.company ? `Perusahaan: ${data.company}\n` : ""}` +
      `Jumlah: ${data.quantity}\n` +
      `${data.message ? `\nPesan: ${data.message}` : ""}`
    );

    // Open WhatsApp
    window.open(`https://wa.me/6281281181860?text=${message}`, "_blank");

    setIsSubmitting(false);
    setIsSubmitted(true);
    
    toast({
      title: "Request terkirim!",
      description: "Tim kami akan segera menghubungi Anda.",
    });

    reset();
    
    // Reset success state after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  if (isSubmitted) {
    return (
      <div className="bg-card border border-border rounded-2xl p-6 text-center">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-primary" />
        </div>
        <h3 className="text-lg font-semibold text-foreground mb-2">
          Request Terkirim!
        </h3>
        <p className="text-sm text-muted-foreground">
          Tim kami akan segera menghubungi Anda untuk informasi lebih lanjut.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-card border border-border rounded-2xl p-6">
      <h3 className="text-lg font-semibold text-foreground mb-4">
        Request Quotation
      </h3>
      <p className="text-sm text-muted-foreground mb-6">
        Isi form di bawah untuk mendapatkan penawaran harga terbaik.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Name */}
        <div className="space-y-2">
          <Label htmlFor="name">Nama Lengkap *</Label>
          <Input
            id="name"
            placeholder="Masukkan nama lengkap"
            {...register("name")}
            className={errors.name ? "border-destructive" : ""}
          />
          {errors.name && (
            <p className="text-xs text-destructive">{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div className="space-y-2">
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            type="email"
            placeholder="email@perusahaan.com"
            {...register("email")}
            className={errors.email ? "border-destructive" : ""}
          />
          {errors.email && (
            <p className="text-xs text-destructive">{errors.email.message}</p>
          )}
        </div>

        {/* Phone */}
        <div className="space-y-2">
          <Label htmlFor="phone">Nomor Telepon *</Label>
          <Input
            id="phone"
            type="tel"
            placeholder="08xxxxxxxxxx"
            {...register("phone")}
            className={errors.phone ? "border-destructive" : ""}
          />
          {errors.phone && (
            <p className="text-xs text-destructive">{errors.phone.message}</p>
          )}
        </div>

        {/* Company */}
        <div className="space-y-2">
          <Label htmlFor="company">Nama Perusahaan/Instansi</Label>
          <Input
            id="company"
            placeholder="PT. Contoh Indonesia"
            {...register("company")}
          />
        </div>

        {/* Quantity */}
        <div className="space-y-2">
          <Label htmlFor="quantity">Jumlah/Spesifikasi *</Label>
          <Input
            id="quantity"
            placeholder="Contoh: 10 unit, 500ml, dll"
            {...register("quantity")}
            className={errors.quantity ? "border-destructive" : ""}
          />
          {errors.quantity && (
            <p className="text-xs text-destructive">{errors.quantity.message}</p>
          )}
        </div>

        {/* Message */}
        <div className="space-y-2">
          <Label htmlFor="message">Pesan Tambahan</Label>
          <Textarea
            id="message"
            placeholder="Informasi tambahan yang ingin disampaikan..."
            rows={3}
            {...register("message")}
          />
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          className="w-full"
          size="lg"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Mengirim...
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              Kirim Request
            </>
          )}
        </Button>

        <p className="text-xs text-muted-foreground text-center">
          Dengan mengirim form ini, Anda akan diarahkan ke WhatsApp untuk konfirmasi.
        </p>
      </form>
    </div>
  );
};
