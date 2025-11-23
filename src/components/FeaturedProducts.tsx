import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, MapPin, Leaf } from "lucide-react";
import { products } from "@/data/products";
import { Link } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";

const FeaturedProducts = () => {
  const { addToCart } = useCart();

  return (
    <section className="py-16">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Fresh Products</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Farm-fresh produce delivered directly to your doorstep
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.slice(0, 8).map((product) => (
            <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={product.image}
                  alt={`${product.name} from ${product.farmerName}, ${product.location}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {product.organic && (
                  <Badge className="absolute top-3 left-3 bg-primary">
                    <Leaf className="h-3 w-3 mr-1" />
                    Organic
                  </Badge>
                )}
              </div>
              <CardContent className="p-4">
                <div className="space-y-3">
                  <div>
                    <h3 className="font-bold text-lg mb-1">{product.name}</h3>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="h-3 w-3 mr-1" />
                      {product.farmerName}
                    </div>
                  </div>

                  <div className="flex items-end justify-between">
                    <div>
                      <div className="text-2xl font-bold text-primary">
                        ₹{product.price}
                      </div>
                      <div className="text-xs text-muted-foreground">per {product.unit}</div>
                    </div>
                    <Button
                      size="sm"
                      className="bg-accent hover:bg-accent-hover"
                      onClick={() => addToCart(product)}
                    >
                      <ShoppingCart className="h-4 w-4 mr-1" />
                      Add
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button size="lg" variant="outline" asChild>
            <Link to="/products">View All Products</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
