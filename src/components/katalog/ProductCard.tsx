import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight } from "lucide-react";

interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  subcategory: string;
  image: string;
  brand?: string;
  specs?: string[];
}

interface ProductCardProps {
  product: Product;
  variants?: any;
}

export const ProductCard = ({ product, variants }: ProductCardProps) => {
  const whatsappMessage = encodeURIComponent(
    `Halo, saya tertarik dengan produk ${product.name}. Bisa minta info lebih lanjut?`
  );

  return (
    <motion.div
      variants={variants}
      className="group bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-primary/5 hover:border-primary/20 transition-all duration-300"
    >
      {/* Product Image - Clickable */}
      <Link to={`/produk/${product.id}`} className="block">
        <div className="relative aspect-[4/3] overflow-hidden bg-muted">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
            loading="lazy"
          />
          
          {/* Category Badge */}
          <div className="absolute top-3 left-3">
            <Badge 
              variant="secondary" 
              className="bg-background/90 backdrop-blur-sm text-foreground text-xs font-medium px-2.5 py-1 shadow-sm"
            >
              {product.subcategory}
            </Badge>
          </div>

          {/* Hover Overlay with View Detail */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
            <span className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground bg-background/90 backdrop-blur-sm px-4 py-2 rounded-full">
              Lihat Detail
              <ArrowRight className="w-4 h-4" />
            </span>
          </div>
        </div>
      </Link>

      {/* Product Info */}
      <div className="p-5">
        {/* Brand Tag */}
        {product.brand && (
          <p className="text-xs font-medium text-primary mb-2 uppercase tracking-wide">
            {product.brand}
          </p>
        )}

        {/* Product Name - Clickable */}
        <Link to={`/produk/${product.id}`}>
          <h3 className="font-semibold text-foreground text-lg mb-2 line-clamp-1 group-hover:text-primary transition-colors">
            {product.name}
          </h3>
        </Link>

        {/* Description */}
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2 leading-relaxed">
          {product.description}
        </p>

        {/* Specs */}
        {product.specs && product.specs.length > 0 && (
          <div className="space-y-1.5 mb-5">
            {product.specs.slice(0, 2).map((spec, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0" />
                <span className="line-clamp-1">{spec}</span>
              </div>
            ))}
          </div>
        )}

        {/* CTA Buttons */}
        <div className="flex gap-2">
          <Button 
            size="sm" 
            variant="outline"
            className="flex-1" 
            asChild
          >
            <Link to={`/produk/${product.id}`}>
              Detail
            </Link>
          </Button>
          <Button 
            size="sm" 
            className="flex-1 gap-1.5" 
            asChild
          >
            <a
              href={`https://wa.me/6281281181860?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="w-4 h-4" />
              Quotation
            </a>
          </Button>
        </div>
      </div>
    </motion.div>
  );
};
