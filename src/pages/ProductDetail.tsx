import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart, Star, Phone, MessageCircle, MapPin, Truck } from "lucide-react";
import { useParams, Link } from "react-router-dom";
import vegetablesImg from "@/assets/vegetables.jpg";

const ProductDetail = () => {
  const { id } = useParams();

  // Mock product data - in real app, fetch based on id
  const product = {
    id: 1,
    name: "Organic Tomatoes",
    price: 40,
    unit: "kg",
    image: vegetablesImg,
    farmer: {
      name: "Ramesh Kumar",
      id: 1,
      location: "Punjab",
      phone: "+91 98765 43210",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ramesh",
    },
    rating: 4.8,
    reviews: 124,
    category: "vegetables",
    badge: "Fresh",
    description: "Premium quality organic tomatoes grown with natural farming methods. Rich in nutrients and perfect for cooking or salads. Harvested fresh daily to ensure maximum freshness and taste.",
    features: [
      "100% Organic",
      "No Pesticides",
      "Farm Fresh Daily",
      "Rich in Vitamins",
    ],
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="relative">
              <div className="aspect-square rounded-lg overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <Badge className="absolute top-4 right-4 bg-accent text-white">
                  {product.badge}
                </Badge>
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <h1 className="font-heading font-bold text-4xl mb-2">
                  {product.name}
                </h1>
                <div className="flex items-center gap-4 text-muted-foreground">
                  <div className="flex items-center">
                    <Star className="h-5 w-5 fill-farm-yellow text-farm-yellow mr-1" />
                    <span className="font-semibold text-foreground">{product.rating}</span>
                    <span className="ml-1">({product.reviews} reviews)</span>
                  </div>
                  <Badge variant="outline">{product.category}</Badge>
                </div>
              </div>

              <div className="flex items-baseline gap-3">
                <span className="text-4xl font-bold text-primary">₹{product.price}</span>
                <span className="text-xl text-muted-foreground">/ {product.unit}</span>
              </div>

              <p className="text-foreground leading-relaxed">
                {product.description}
              </p>

              <div>
                <h3 className="font-heading font-bold text-lg mb-3">Features</h3>
                <ul className="grid grid-cols-2 gap-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex gap-3">
                <Button size="lg" className="flex-1">
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Add to Cart
                </Button>
              </div>

              {/* Delivery Options */}
              <Card className="bg-farm-green-light">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <Truck className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-semibold mb-1">Delivery Options</p>
                      <p className="text-sm text-muted-foreground">
                        Home delivery available or visit farm to pick up directly
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Farmer Info */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-heading font-bold text-lg mb-4">From the Farmer</h3>
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden bg-primary/10">
                      <img
                        src={product.farmer.image}
                        alt={product.farmer.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg">{product.farmer.name}</h4>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4 mr-1" />
                        {product.farmer.location}
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Button
                      variant="outline"
                      className="w-full justify-start"
                      onClick={() => window.open(`tel:${product.farmer.phone}`)}
                    >
                      <Phone className="mr-2 h-4 w-4" />
                      Call Farmer
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full justify-start"
                      onClick={() => window.open(`https://wa.me/${product.farmer.phone.replace(/\s/g, '')}`)}
                    >
                      <MessageCircle className="mr-2 h-4 w-4" />
                      WhatsApp
                    </Button>
                    <Button variant="outline" className="w-full" asChild>
                      <Link to={`/farmer/${product.farmer.id}`}>
                        View Farmer Profile
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
