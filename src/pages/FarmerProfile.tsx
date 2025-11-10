import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, MessageCircle, MapPin, Star, ShoppingCart } from "lucide-react";
import { useParams, Link } from "react-router-dom";
import vegetablesImg from "@/assets/vegetables.jpg";
import fruitsImg from "@/assets/fruits.jpg";

const FarmerProfile = () => {
  const { id } = useParams();

  // Mock farmer data
  const farmer = {
    id: 1,
    name: "Ramesh Kumar",
    location: "Rangareddy, Telangana",
    specialty: "Organic Vegetables",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ramesh",
    phone: "+91 98765 43210",
    rating: 4.8,
    totalProducts: 24,
    description: "Passionate organic farmer with 15 years of experience in sustainable agriculture. Specializing in pesticide-free vegetables grown using traditional farming methods combined with modern techniques.",
    farmAddress: "Village Shamshabad, Rangareddy District, Telangana - 501218",
    visitingHours: "Mon-Sat: 7:00 AM - 6:00 PM",
  };

  const products = [
    {
      id: 1,
      name: "Organic Tomatoes",
      price: 40,
      unit: "kg",
      image: vegetablesImg,
      rating: 4.8,
      badge: "Fresh",
    },
    {
      id: 4,
      name: "Fresh Carrots",
      price: 35,
      unit: "kg",
      image: vegetablesImg,
      rating: 4.6,
      badge: "New",
    },
    {
      id: 5,
      name: "Sweet Oranges",
      price: 80,
      unit: "kg",
      image: fruitsImg,
      rating: 4.8,
      badge: "Fresh",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Header */}
        <section className="bg-farm-green-light py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-32 h-32 rounded-full overflow-hidden bg-primary/10 flex-shrink-0">
                <img
                  src={farmer.image}
                  alt={farmer.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex-1">
                <div className="flex flex-wrap items-start gap-3 mb-3">
                  <h1 className="font-heading font-bold text-4xl">{farmer.name}</h1>
                  <Badge className="bg-primary text-white">{farmer.specialty}</Badge>
                </div>
                
                <div className="flex items-center gap-4 text-muted-foreground mb-4">
                  <div className="flex items-center">
                    <Star className="h-5 w-5 fill-farm-yellow text-farm-yellow mr-1" />
                    <span className="font-semibold text-foreground">{farmer.rating}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    {farmer.location}
                  </div>
                  <span>{farmer.totalProducts} Products</span>
                </div>

                <p className="text-foreground mb-4 max-w-3xl">
                  {farmer.description}
                </p>

                <div className="flex flex-wrap gap-3">
                  <Button
                    onClick={() => window.open(`tel:${farmer.phone}`)}
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    Call Now
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => window.open(`https://wa.me/${farmer.phone.replace(/\s/g, '')}`)}
                  >
                    <MessageCircle className="mr-2 h-4 w-4" />
                    WhatsApp
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Farm Visit Info */}
        <section className="py-8 border-b">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-farm-cream">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-heading font-bold text-lg mb-2">Farm Location</h3>
                      <p className="text-foreground">{farmer.farmAddress}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-farm-cream">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <svg className="h-6 w-6 text-primary mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <h3 className="font-heading font-bold text-lg mb-2">Visiting Hours</h3>
                      <p className="text-foreground">{farmer.visitingHours}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Products */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="font-heading font-bold text-3xl mb-8">Products from {farmer.name}</h2>
            
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
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FarmerProfile;
