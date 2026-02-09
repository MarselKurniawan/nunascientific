import { FlaskConical, Atom, Microscope, LayoutGrid } from "lucide-react";

type Category = "all" | "glassware" | "chemicals" | "instruments";

interface CategoryFilterProps {
  selectedCategory: Category;
  onCategoryChange: (category: Category) => void;
  getCategoryCount: (category: Category) => number;
}

const categories = [
  { id: "all" as Category, label: "Semua Produk", icon: LayoutGrid },
  { id: "glassware" as Category, label: "Glassware", icon: FlaskConical },
  { id: "chemicals" as Category, label: "Bahan Kimia", icon: Atom },
  { id: "instruments" as Category, label: "Instrumen Lab", icon: Microscope },
];

export const CategoryFilter = ({
  selectedCategory,
  onCategoryChange,
  getCategoryCount,
}: CategoryFilterProps) => {
  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
      {categories.map((cat) => {
        const Icon = cat.icon;
        const isActive = selectedCategory === cat.id;
        const count = getCategoryCount(cat.id);
        
        return (
          <button
            key={cat.id}
            onClick={() => onCategoryChange(cat.id)}
            className={`
              flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium 
              whitespace-nowrap transition-all duration-200
              ${isActive
                ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                : "bg-card border border-border text-muted-foreground hover:bg-muted hover:text-foreground hover:border-primary/20"
              }
            `}
          >
            <Icon className="w-4 h-4" />
            <span>{cat.label}</span>
            <span
              className={`
                text-xs px-2 py-0.5 rounded-full font-medium
                ${isActive 
                  ? "bg-primary-foreground/20 text-primary-foreground" 
                  : "bg-muted text-muted-foreground"
                }
              `}
            >
              {count}
            </span>
          </button>
        );
      })}
    </div>
  );
};

export type { Category };
