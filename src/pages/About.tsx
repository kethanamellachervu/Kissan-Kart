import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Users, Truck, Heart } from "lucide-react";
//About page for Kissan Kart
const About = () => {
  const features = [
    {
      icon: Leaf,
      title: "Farm Fresh Quality",
      description: "Direct from farms to your home, ensuring maximum freshness and nutrition.",
    },
    {
      icon: Users,
      title: "Support Local Farmers",
      description: "Your purchases directly support Telangana's farming community and their families.",
    },
    {
      icon: Truck,
      title: "Direct Delivery",
      description: "Fast and reliable delivery or convenient farm pickup options available.",
    },
    {
      icon: Heart,
      title: "Trust & Transparency",
      description: "Know your farmer, verify products, and build lasting relationships.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-gradient-to-br from-primary/10 to-accent/10 py-20">
          <div className="container text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Kissan Kart</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Bridging the gap between Telangana's farmers and consumers, one fresh product at a time
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                <p className="text-muted-foreground mb-4">
                  Kissan Kart was founded with a simple yet powerful mission: to connect consumers directly with local farmers across Telangana. We believe in eliminating middlemen, ensuring farmers get fair prices and consumers get the freshest produce.
                </p>
                <p className="text-muted-foreground mb-4">
                  Our platform empowers farmers to showcase their products, manage their inventory, and connect with customers through calls, WhatsApp, or in-person farm visits. We're not just a marketplace—we're building a community.
                </p>
                <p className="text-muted-foreground">
                  Every purchase on Kissan Kart supports local agriculture, promotes sustainable farming practices, and strengthens the bond between rural producers and urban consumers.
                </p>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=800"
                  alt="Telangana farmland"
                  className="rounded-2xl shadow-xl"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <Card key={idx} className="text-center">
                    <CardContent className="pt-8 pb-6 space-y-4">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="font-bold text-lg">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-8">Our Impact</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <div className="text-muted-foreground">Registered Farmers</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">50,000+</div>
                <div className="text-muted-foreground">Happy Customers</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">100%</div>
                <div className="text-muted-foreground">Farm Fresh Guarantee</div>
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
