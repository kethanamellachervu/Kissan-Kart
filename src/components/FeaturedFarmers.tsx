import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone, MessageCircle, MapPin, Star, CheckCircle } from "lucide-react";
import { farmers } from "@/data/farmers";
import { Link } from "react-router-dom";

const FeaturedFarmers = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Trusted Farmers</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Connect directly with verified farmers from across Telangana
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {farmers.slice(0, 6).map((farmer) => (
            <Card key={farmer.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48">
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
                <div className="space-y-3">
                  <div>
                    <h3 className="text-xl font-bold mb-1">{farmer.name}</h3>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-1" />
                      {farmer.location}, {farmer.district}
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 fill-fresh-yellow text-fresh-yellow mr-1" />
                      <span className="font-semibold">{farmer.rating}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      • {farmer.totalProducts} Products
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {farmer.specialization.slice(0, 2).map((spec, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {spec}
                      </Badge>
                    ))}
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
                    <Link to={`/farmers/${farmer.id}`}>View Profile</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button size="lg" variant="outline" asChild>
            <Link to="/farmers">View All Farmers</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedFarmers;
