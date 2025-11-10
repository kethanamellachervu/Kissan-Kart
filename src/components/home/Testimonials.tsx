import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Regular Customer",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya",
    rating: 5,
    text: "Amazing platform! I can now get fresh vegetables directly from farmers. The quality is outstanding and prices are fair.",
  },
  {
    id: 2,
    name: "Amit Verma",
    role: "Home Chef",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Amit",
    rating: 5,
    text: "Love the transparency and direct connection with farmers. The produce is always fresh and I know exactly where it comes from.",
  },
  {
    id: 3,
    name: "Rajesh Kumar",
    role: "Farmer",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rajesh",
    rating: 5,
    text: "This platform has transformed my business. I can now reach customers directly without middlemen. Highly recommended!",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
            What Our Community Says
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Hear from farmers and customers who love using Kissan Kart
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-farm-yellow text-farm-yellow" />
                  ))}
                </div>
                <p className="text-foreground mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-primary/10">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
