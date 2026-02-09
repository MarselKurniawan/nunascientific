import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export const SearchBar = ({ value, onChange, placeholder = "Cari produk..." }: SearchBarProps) => {
  return (
    <div className="relative max-w-xl mx-auto">
      <div className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground">
        <Search className="w-full h-full" />
      </div>
      <Input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="pl-12 pr-12 py-6 text-base rounded-2xl border-border bg-card shadow-sm focus:shadow-md focus:border-primary/30 transition-all"
      />
      {value && (
        <button
          onClick={() => onChange("")}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      )}
    </div>
  );
};
