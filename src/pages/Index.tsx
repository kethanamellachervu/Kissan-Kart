import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import FeaturedFarmers from "@/components/FeaturedFarmers";
import FeaturedProducts from "@/components/FeaturedProducts";
import Footer from "@/components/Footer";
//Home page for Kissan Kart
const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Categories />
        <FeaturedProducts />
        <FeaturedFarmers />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
