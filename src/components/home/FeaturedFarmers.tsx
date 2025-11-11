import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import farmerRamesh from "@/assets/farmer-ramesh.jpg";
import farmerLakshmi from "@/assets/farmer-lakshmi.jpg";
import farmerSuresh from "@/assets/farmer-suresh.jpg";
import farmerMeena from "@/assets/farmer-meena.jpg";

const farmers = [
  {
    id: 1,
    name: "Ramesh Kumar",
    location: "Rangareddy, Telangana",
    specialty: "Organic Vegetables",
    image: farmerRamesh,
    phone: "+91 98765 43210",
  },
  {
    id: 2,
    name: "Lakshmi Devi",
    location: "Medak, Telangana",
    specialty: "Fresh Fruits",
    image: farmerLakshmi,
    phone: "+91 98765 43211",
  },
  {
    id: 3,
    name: "Suresh Patel",
    location: "Sangareddy, Telangana",
    specialty: "Dairy Products",
    image: farmerSuresh,
    phone: "+91 98765 43212",
  },
  {
    id: 4,
    name: "Meena Singh",
    location: "Vikarabad, Telangana",
    specialty: "Grains & Pulses",
    image: farmerMeena,
    phone: "+91 98765 43213",
  },
];

const FeaturedFarmers = () => {
  return (
    <section className="py-16 bg-farm-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
            Meet Our Featured Farmers
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Connect directly with trusted local farmers who grow fresh, quality produce
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {farmers.map((farmer) => (
            <Card key={farmer.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-24 h-24 rounded-full overflow-hidden mb-4 bg-primary/10">
                    <img
                      src={farmer.image}
                      alt={farmer.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-heading font-bold text-xl mb-2">{farmer.name}</h3>
                  <div className="flex items-center text-sm text-muted-foreground mb-2">
                    <MapPin className="h-4 w-4 mr-1" />
                    {farmer.location}
                  </div>
                  <p className="text-sm text-primary font-medium mb-4">{farmer.specialty}</p>
                  
                  <div className="flex gap-2 w-full">
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1"
                      onClick={() => window.open(`tel:${farmer.phone}`)}
                    >
                      <Phone className="h-4 w-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1"
                      onClick={() => window.open(`https://wa.me/${farmer.phone.replace(/\s/g, '')}`)}
                    >
                      <MessageCircle className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  <Button className="w-full mt-3" size="sm" asChild>
                    <Link to={`/farmer/${farmer.id}`}>View Profile</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button variant="outline" size="lg" asChild>
            <Link to="/farmers">View All Farmers</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedFarmers;
