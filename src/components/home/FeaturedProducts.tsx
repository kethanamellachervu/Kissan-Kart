import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Star } from "lucide-react";
import { Link } from "react-router-dom";
import vegetablesImg from "@/assets/vegetables.jpg";
import fruitsImg from "@/assets/fruits.jpg";
import dairyImg from "@/assets/dairy.jpg";

const products = [
  {
    id: 1,
    name: "Organic Tomatoes",
    price: 40,
    unit: "kg",
    image: vegetablesImg,
    farmer: "Ramesh Kumar",
    rating: 4.8,
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
    badge: "New",
  },
];

const FeaturedProducts = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
            Featured Products
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Fresh, organic produce directly from our trusted farmers
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
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

        <div className="text-center mt-8">
          <Button size="lg" asChild>
            <Link to="/products">Browse All Products</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
