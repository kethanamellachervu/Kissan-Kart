import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ShoppingBag, Users } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-fresh-yellow/5 to-accent/5">
      <div className="container py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Fresh from Farm to Your Home
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
                Connect directly with Telangana's trusted farmers. Buy fresh vegetables, fruits, and dairy products. Support local agriculture while enjoying farm-fresh quality.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-accent hover:bg-accent-hover" asChild>
                <Link to="/products">
                  <ShoppingBag className="mr-2 h-5 w-5" />
                  Shop Now
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/farmers">
                  <Users className="mr-2 h-5 w-5" />
                  Browse Farmers
                </Link>
              </Button>
            </div>

            <div className="flex flex-wrap gap-8 pt-4">
              <div>
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Local Farmers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">10,000+</div>
                <div className="text-sm text-muted-foreground">Fresh Products</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">50,000+</div>
                <div className="text-sm text-muted-foreground">Happy Customers</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1400"
                alt="Lush green Telangana farm landscape at sunrise with paddy fields and farmers working"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground p-6 rounded-2xl shadow-xl">
              <div className="text-2xl font-bold">100%</div>
              <div className="text-sm">Farm Fresh</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
