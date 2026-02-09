import { Check } from "lucide-react";
import type { ProductSpec } from "@/data/products";

interface ProductSpecsProps {
  detailedSpecs?: ProductSpec[];
  features?: string[];
  applications?: string[];
}

export const ProductSpecs = ({ detailedSpecs, features, applications }: ProductSpecsProps) => {
  return (
    <div className="space-y-8">
      {/* Detailed Specifications */}
      {detailedSpecs && detailedSpecs.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-4">Spesifikasi Teknis</h3>
          <div className="bg-muted/50 rounded-xl overflow-hidden">
            <table className="w-full">
              <tbody>
                {detailedSpecs.map((spec, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "bg-transparent" : "bg-muted/50"}
                  >
                    <td className="px-4 py-3 text-sm font-medium text-muted-foreground w-1/3">
                      {spec.label}
                    </td>
                    <td className="px-4 py-3 text-sm text-foreground">
                      {spec.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Features */}
      {features && features.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-4">Fitur Utama</h3>
          <ul className="space-y-3">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-primary" />
                </div>
                <span className="text-sm text-muted-foreground">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Applications */}
      {applications && applications.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-4">Aplikasi</h3>
          <div className="flex flex-wrap gap-2">
            {applications.map((app, index) => (
              <span
                key={index}
                className="px-3 py-1.5 bg-primary/10 text-primary text-sm rounded-full"
              >
                {app}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
