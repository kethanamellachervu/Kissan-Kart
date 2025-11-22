import { Card, CardContent } from "@/components/ui/card";
import { Apple, Carrot, Leaf, Milk } from "lucide-react";

const categories = [
  {
    name: "Vegetables",
    icon: Carrot,
    count: "500+",
    color: "text-primary",
  },
  {
    name: "Fruits",
    icon: Apple,
    count: "300+",
    color: "text-accent",
  },
  {
    name: "Leafy Greens",
    icon: Leaf,
    count: "200+",
    color: "text-primary",
  },
  {
    name: "Dairy & Eggs",
    icon: Milk,
    count: "150+",
    color: "text-secondary",
  },
];

const Categories = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Shop by Category</h2>
          <p className="text-muted-foreground text-lg">
            Explore our wide range of farm-fresh products
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Card
                key={category.name}
                className="hover:shadow-lg transition-all cursor-pointer hover:-translate-y-1 border-2 hover:border-primary/50"
              >
                <CardContent className="p-6 text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                    <Icon className={`h-8 w-8 ${category.color}`} />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-1">{category.name}</h3>
                    <p className="text-muted-foreground">{category.count} Products</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;
