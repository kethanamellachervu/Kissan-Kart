import { useState, useEffect, useRef } from "react";
import { Search, X, Apple, Carrot, Leaf, Milk } from "lucide-react";
import { Input } from "@/components/ui/input";
import { products } from "@/data/products";
import { farmers } from "@/data/farmers";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";

const categoryData = [
  { name: "Vegetables", icon: "🥕", count: "500+" },
  { name: "Fruits", icon: "🍎", count: "300+" },
  { name: "Leafy Greens", icon: "🌿", count: "200+" },
  { name: "Dairy & Eggs", icon: "🥛", count: "150+" },
];

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestions, setSuggestions] = useState<any[]>([]);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      
      // Search products
      const matchedProducts = products
        .filter(p => 
          p.name.toLowerCase().includes(query) || 
          p.category.toLowerCase().includes(query)
        )
        .slice(0, 3)
        .map(p => ({ ...p, type: "product" }));

      // Search farmers
      const matchedFarmers = farmers
        .filter(f => 
          f.name.toLowerCase().includes(query) || 
          f.location.toLowerCase().includes(query) ||
          f.specialization.some(s => s.toLowerCase().includes(query))
        )
        .slice(0, 2)
        .map(f => ({ ...f, type: "farmer" }));

      // Search categories
      const matchedCategories = categoryData
        .filter(c => c.name.toLowerCase().includes(query))
        .slice(0, 2)
        .map(c => ({ ...c, type: "category" }));

      setSuggestions([...matchedProducts, ...matchedFarmers, ...matchedCategories]);
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  }, [searchQuery]);

  const clearSearch = () => {
    setSearchQuery("");
    setShowSuggestions(false);
  };

  return (
    <div ref={searchRef} className="relative w-full max-w-2xl">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Search for products, farmers, or categories..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10 pr-10 h-11 bg-background/60 backdrop-blur-sm border-border/50 focus:border-primary"
        />
        {searchQuery && (
          <button
            onClick={clearSearch}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      {showSuggestions && suggestions.length > 0 && (
        <Card className="absolute top-full mt-2 w-full max-h-96 overflow-y-auto z-50 shadow-lg">
          <div className="p-2">
            {suggestions.map((item, index) => {
              if (item.type === "product") {
                return (
                  <Link
                    key={`product-${index}`}
                    to="/products"
                    onClick={clearSearch}
                    className="flex items-center gap-3 p-3 hover:bg-accent/50 rounded-lg transition-colors"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-12 h-12 object-cover rounded"
                    />
                    <div className="flex-1">
                      <p className="font-medium text-sm">{item.name}</p>
                      <p className="text-xs text-muted-foreground">{item.category}</p>
                    </div>
                    <span className="text-sm font-semibold text-primary">₹{item.price}</span>
                  </Link>
                );
              } else if (item.type === "farmer") {
                return (
                  <Link
                    key={`farmer-${index}`}
                    to={`/farmers/${item.id}`}
                    onClick={clearSearch}
                    className="flex items-center gap-3 p-3 hover:bg-accent/50 rounded-lg transition-colors"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-12 h-12 object-cover rounded-full"
                    />
                    <div className="flex-1">
                      <p className="font-medium text-sm">{item.name}</p>
                      <p className="text-xs text-muted-foreground">{item.location}</p>
                    </div>
                  </Link>
                );
              } else {
                return (
                  <Link
                    key={`category-${index}`}
                    to="/products"
                    onClick={clearSearch}
                    className="flex items-center gap-3 p-3 hover:bg-accent/50 rounded-lg transition-colors"
                  >
                    <div className="w-12 h-12 flex items-center justify-center bg-primary/10 rounded">
                      <span className="text-2xl">{item.icon}</span>
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-sm">{item.name}</p>
                      <p className="text-xs text-muted-foreground">{item.count} products</p>
                    </div>
                  </Link>
                );
              }
            })}
          </div>
        </Card>
      )}
    </div>
  );
};

export default SearchBar;
