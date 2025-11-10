import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Users, Truck, Heart } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Header */}
        <section className="bg-farm-green-light py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-heading font-bold text-4xl md:text-5xl mb-6">
              About Kissan Kart
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Bridging the gap between farmers and consumers, bringing fresh farm produce directly to your home
            </p>
          </div>
        </section>

        {/* Mission */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="font-heading font-bold text-3xl mb-6">Our Mission</h2>
              <p className="text-lg text-foreground leading-relaxed">
                At Kissan Kart, we believe in empowering farmers and providing consumers with access to fresh, 
                organic produce. We eliminate middlemen, ensuring fair prices for farmers and fresh products for you. 
                Our platform connects you directly with local farmers, supporting sustainable agriculture and building 
                stronger communities.
              </p>
            </div>

            {/* Values */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-farm-green-light rounded-full flex items-center justify-center mx-auto mb-4">
                    <Leaf className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-heading font-bold text-xl mb-3">100% Organic</h3>
                  <p className="text-muted-foreground">
                    All our products are grown using natural, sustainable farming methods
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-farm-green-light rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-heading font-bold text-xl mb-3">Direct Connect</h3>
                  <p className="text-muted-foreground">
                    Connect directly with farmers via call, WhatsApp, or farm visits
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-farm-green-light rounded-full flex items-center justify-center mx-auto mb-4">
                    <Truck className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-heading font-bold text-xl mb-3">Fresh Delivery</h3>
                  <p className="text-muted-foreground">
                    Choose home delivery or visit farms to pick your own fresh produce
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-farm-green-light rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-heading font-bold text-xl mb-3">Community First</h3>
                  <p className="text-muted-foreground">
                    Support local farmers and build stronger, sustainable communities
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="font-heading font-bold text-3xl text-center mb-12">How It Works</h2>
            
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">
                  1
                </div>
                <div>
                  <h3 className="font-heading font-bold text-xl mb-2">Browse Products</h3>
                  <p className="text-foreground">
                    Explore our wide selection of fresh farm products from trusted local farmers
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">
                  2
                </div>
                <div>
                  <h3 className="font-heading font-bold text-xl mb-2">Connect with Farmers</h3>
                  <p className="text-foreground">
                    Contact farmers directly via phone or WhatsApp to discuss your requirements
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">
                  3
                </div>
                <div>
                  <h3 className="font-heading font-bold text-xl mb-2">Choose Delivery Method</h3>
                  <p className="text-foreground">
                    Select home delivery or visit the farm to pick up your fresh produce
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">
                  4
                </div>
                <div>
                  <h3 className="font-heading font-bold text-xl mb-2">Enjoy Fresh Produce</h3>
                  <p className="text-foreground">
                    Receive farm-fresh, organic products and support your local farming community
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
