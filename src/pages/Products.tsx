import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { ShoppingCart, Star, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import vegetablesImg from "@/assets/vegetables.jpg";
import fruitsImg from "@/assets/fruits.jpg";
import dairyImg from "@/assets/dairy.jpg";

const allProducts = [
  {
    id: 1,
    name: "Organic Tomatoes",
    price: 40,
    unit: "kg",
    image: vegetablesImg,
    farmer: "Ramesh Kumar",
    rating: 4.8,
    category: "vegetables",
    badge: "Fresh",
  },
  {
    id: 2,
    name: "Farm Fresh Apples",
    price: 120,
    unit: "kg",
    image: fruitsImg,
    farmer: "Lakshmi Devi",
    rating: 4.9,
    category: "fruits",
    badge: "Popular",
  },
  {
    id: 3,
    name: "Pure Cow Milk",
    price: 60,
    unit: "liter",
    image: dairyImg,
    farmer: "Suresh Patel",
    rating: 4.7,
    category: "dairy",
    badge: "Organic",
  },
  {
    id: 4,
    name: "Fresh Carrots",
    price: 35,
    unit: "kg",
    image: vegetablesImg,
    farmer: "Meena Singh",
    rating: 4.6,
    category: "vegetables",
    badge: "New",
  },
  {
    id: 5,
    name: "Sweet Oranges",
    price: 80,
    unit: "kg",
    image: fruitsImg,
    farmer: "Ramesh Kumar",
    rating: 4.8,
    category: "fruits",
    badge: "Fresh",
  },
  {
    id: 6,
    name: "Fresh Yogurt",
    price: 45,
    unit: "500g",
    image: dairyImg,
    farmer: "Suresh Patel",
    rating: 4.9,
    category: "dairy",
    badge: "Popular",
  },
];

const categories = ["All", "Vegetables", "Fruits", "Dairy"];

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = allProducts.filter((product) => {
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory.toLowerCase();
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Header */}
        <section className="bg-farm-green-light py-12">
          <div className="container mx-auto px-4">
            <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4">
              Fresh Products
            </h1>
            <p className="text-muted-foreground text-lg">
              Browse our selection of farm-fresh produce
            </p>
          </div>
        </section>

        {/* Filters */}
        <section className="py-8 border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="flex gap-2 flex-wrap">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>
              <div className="relative w-full md:w-80">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg">No products found</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {filteredProducts.map((product) => (
                  <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
                    <Link to={`/product/${product.id}`}>
                      <div className="relative overflow-hidden aspect-square">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <Badge className="absolute top-3 right-3 bg-accent text-white">
                          {product.badge}
                        </Badge>
                      </div>
                    </Link>
                    <CardContent className="p-4">
                      <Link to={`/product/${product.id}`}>
                        <h3 className="font-heading font-bold text-lg mb-2 hover:text-primary transition-colors">
                          {product.name}
                        </h3>
                      </Link>
                      <div className="flex items-center text-sm text-muted-foreground mb-2">
                        <Star className="h-4 w-4 fill-farm-yellow text-farm-yellow mr-1" />
                        <span>{product.rating}</span>
                        <span className="mx-2">•</span>
                        <span>{product.farmer}</span>
                      </div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-bold text-primary">₹{product.price}</span>
                        <span className="text-muted-foreground">/ {product.unit}</span>
                      </div>
                    </CardContent>
                    <CardFooter className="p-4 pt-0">
                      <Button className="w-full" size="sm">
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        Add to Cart
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Products;
