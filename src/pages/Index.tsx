import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import FeaturedFarmers from "@/components/home/FeaturedFarmers";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import Categories from "@/components/home/Categories";
import Testimonials from "@/components/home/Testimonials";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <FeaturedFarmers />
        <FeaturedProducts />
        <Categories />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
