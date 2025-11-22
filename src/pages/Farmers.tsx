import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone, MessageCircle, MapPin, Star, CheckCircle, Package } from "lucide-react";
import { farmers } from "@/data/farmers";
import { Link } from "react-router-dom";

const Farmers = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-12">
          <div className="container">
            <h1 className="text-4xl font-bold mb-4">Our Farmers</h1>
            <p className="text-muted-foreground text-lg">
              Meet the trusted farmers bringing fresh produce to your table
            </p>
          </div>
        </section>

        <section className="py-12">
          <div className="container">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {farmers.map((farmer) => (
                <Card
                  key={farmer.id}
                  className="overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="relative h-56">
                    <img
                      src={farmer.image}
                      alt={farmer.name}
                      className="w-full h-full object-cover"
                    />
                    {farmer.verified && (
                      <Badge className="absolute top-3 right-3 bg-primary">
                        <CheckCircle className="h-3 w-3 mr-1" />
                        Verified
                      </Badge>
                    )}
                  </div>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-2xl font-bold mb-2">{farmer.name}</h3>
                        <div className="flex items-center text-muted-foreground mb-2">
                          <MapPin className="h-4 w-4 mr-2" />
                          {farmer.location}, {farmer.district}
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="flex items-center">
                            <Star className="h-5 w-5 fill-fresh-yellow text-fresh-yellow mr-1" />
                            <span className="font-bold">{farmer.rating}</span>
                          </div>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Package className="h-4 w-4 mr-1" />
                            {farmer.totalProducts} Products
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold mb-2">Specialization:</h4>
                        <div className="flex flex-wrap gap-2">
                          {farmer.specialization.map((spec, idx) => (
                            <Badge key={idx} variant="secondary">
                              {spec}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-2 pt-2">
                        <Button
                          size="sm"
                          variant="outline"
                          className="flex-1"
                          onClick={() => window.open(`tel:${farmer.phone}`)}
                        >
                          <Phone className="h-4 w-4 mr-1" />
                          Call
                        </Button>
                        <Button
                          size="sm"
                          className="flex-1 bg-accent hover:bg-accent-hover"
                          onClick={() =>
                            window.open(`https://wa.me/${farmer.whatsapp}`, "_blank")
                          }
                        >
                          <MessageCircle className="h-4 w-4 mr-1" />
                          WhatsApp
                        </Button>
                      </div>

                      <Button variant="ghost" className="w-full" asChild>
                        <Link to={`/farmers/${farmer.id}`}>View Full Profile</Link>
                      </Button>
                    </div>
                  </CardContent>
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

export default Farmers;
