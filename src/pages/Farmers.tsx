import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import farmerRamesh from "@/assets/farmer-ramesh.jpg";
import farmerLakshmi from "@/assets/farmer-lakshmi.jpg";
import farmerSuresh from "@/assets/farmer-suresh.jpg";
import farmerMeena from "@/assets/farmer-meena.jpg";
import farmerArjun from "@/assets/farmer-arjun.jpg";
import farmerKavita from "@/assets/farmer-kavita.jpg";

const farmers = [
  {
    id: 1,
    name: "Ramesh Kumar",
    location: "Rangareddy, Telangana",
    specialty: "Organic Vegetables",
    image: farmerRamesh,
    phone: "+91 98765 43210",
    products: 24,
  },
  {
    id: 2,
    name: "Lakshmi Devi",
    location: "Medak, Telangana",
    specialty: "Fresh Fruits",
    image: farmerLakshmi,
    phone: "+91 98765 43211",
    products: 18,
  },
  {
    id: 5,
    name: "Arjun Reddy",
    location: "Nalgonda, Telangana",
    specialty: "Organic Rice",
    image: farmerArjun,
    phone: "+91 98765 43214",
    products: 15,
  },
  {
    id: 6,
    name: "Kavita Sharma",
    location: "Nizamabad, Telangana",
    specialty: "Spices & Herbs",
    image: farmerKavita,
    phone: "+91 98765 43215",
    products: 22,
  },
];

const Farmers = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Header */}
        <section className="bg-farm-green-light py-12">
          <div className="container mx-auto px-4">
            <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4">
              Our Farmers
            </h1>
            <p className="text-muted-foreground text-lg">
              Connect with trusted local farmers growing fresh, quality produce
            </p>
          </div>
        </section>

        {/* Farmers Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {farmers.map((farmer) => (
                <Card key={farmer.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-20 h-20 rounded-full overflow-hidden bg-primary/10 flex-shrink-0">
                        <img
                          src={farmer.image}
                          alt={farmer.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <h3 className="font-heading font-bold text-xl mb-2">{farmer.name}</h3>
                        <div className="flex items-center text-sm text-muted-foreground mb-1">
                          <MapPin className="h-4 w-4 mr-1 flex-shrink-0" />
                          <span className="truncate">{farmer.location}</span>
                        </div>
                        <p className="text-sm text-primary font-medium mb-1">{farmer.specialty}</p>
                        <p className="text-sm text-muted-foreground">{farmer.products} Products</p>
                      </div>
                    </div>
                    
                    <div className="mt-4 space-y-2">
                      <div className="flex gap-2">
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
                          variant="outline"
                          className="flex-1"
                          onClick={() => window.open(`https://wa.me/${farmer.phone.replace(/\s/g, '')}`)}
                        >
                          <MessageCircle className="h-4 w-4 mr-1" />
                          WhatsApp
                        </Button>
                      </div>
                      
                      <Button className="w-full" size="sm" asChild>
                        <Link to={`/farmer/${farmer.id}`}>View Profile</Link>
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
