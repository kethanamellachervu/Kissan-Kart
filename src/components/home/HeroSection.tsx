import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, ShoppingBag } from "lucide-react";
import heroImage from "@/assets/hero-farm.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-[600px] md:h-[700px] overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Fresh farm produce"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl text-white">
          <h1 className="font-heading font-bold text-4xl md:text-6xl mb-6 leading-tight">
            Fresh from Farm to Your Home
          </h1>
          <p className="text-lg md:text-xl mb-8 text-white/90">
            Connect directly with local farmers. Buy fresh, organic produce and support your community.
            Choose home delivery or visit farms to pick your own products.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-semibold" asChild>
              <Link to="/products">
                <ShoppingBag className="mr-2 h-5 w-5" />
                Shop Now
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-foreground backdrop-blur" asChild>
              <Link to="/farmers">
                Browse Farmers
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
