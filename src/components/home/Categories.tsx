import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import vegetablesImg from "@/assets/vegetables.jpg";
import fruitsImg from "@/assets/fruits.jpg";
import dairyImg from "@/assets/dairy.jpg";

const categories = [
  {
    name: "Vegetables",
    image: vegetablesImg,
    count: "150+ Products",
    link: "/products?category=vegetables",
  },
  {
    name: "Fruits",
    image: fruitsImg,
    count: "120+ Products",
    link: "/products?category=fruits",
  },
  {
    name: "Dairy",
    image: dairyImg,
    count: "80+ Products",
    link: "/products?category=dairy",
  },
];

const Categories = () => {
  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
            Shop by Category
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Browse our wide selection of fresh farm products
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link key={category.name} to={category.link}>
              <Card className="overflow-hidden hover:shadow-xl transition-all group cursor-pointer">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <CardContent className="p-6 text-white w-full">
                      <h3 className="font-heading font-bold text-2xl mb-1">
                        {category.name}
                      </h3>
                      <p className="text-white/90">{category.count}</p>
                    </CardContent>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
