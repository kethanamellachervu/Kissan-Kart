import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Phone,
  MessageCircle,
  MapPin,
  Star,
  CheckCircle,
  Package,
  Leaf,
  Award,
  Calendar,
  Tractor,
  ShoppingCart,
} from "lucide-react";
import { farmers } from "@/data/farmers";
import { products } from "@/data/products";
import { reviews } from "@/data/reviews";
import { useCart } from "@/contexts/CartContext";
//Farmer Profile page for Kissan Kart
const FarmerProfile = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const farmer = farmers.find((f) => f.id === id);
  const farmerProducts = products.filter((p) => p.farmerId === id);
  const farmerReviews = reviews.filter((r) => r.farmerId === id);

  if (!farmer) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Farmer not found</h2>
            <Button asChild>
              <Link to="/farmers">Back to Farmers</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const averageRating =
    farmerReviews.length > 0
      ? (
          farmerReviews.reduce((sum, review) => sum + review.rating, 0) /
          farmerReviews.length
        ).toFixed(1)
      : farmer.rating.toFixed(1);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-80 bg-gradient-to-br from-primary/20 to-accent/20">
          <div className="absolute inset-0">
            <img
              src={farmer.image}
              alt={`${farmer.name} - Farmer from ${farmer.location}, ${farmer.district}`}
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
          </div>
          <div className="container relative h-full flex items-end pb-8">
            <div className="flex items-end gap-6">
              <img
                src={farmer.image}
                alt={`${farmer.name} - Telangana farmer specializing in ${farmer.specialization.join(', ')}`}
                className="w-32 h-32 rounded-full border-4 border-background object-cover shadow-xl"
              />
              <div className="mb-2">
                <div className="flex items-center gap-3 mb-2">
                  <h1 className="text-4xl font-bold">{farmer.name}</h1>
                  {farmer.verified && (
                    <Badge className="bg-primary">
                      <CheckCircle className="h-3 w-3 mr-1" />
                      Verified
                    </Badge>
                  )}
                </div>
                <div className="flex items-center gap-4 text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {farmer.location}, {farmer.district}
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-fresh-yellow text-fresh-yellow" />
                    <span className="font-semibold">{averageRating}</span>
                    <span>({farmerReviews.length} reviews)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-8">
          <div className="container">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                {/* About */}
                <Card>
                  <CardHeader>
                    <CardTitle>About {farmer.name.split(" ")[0]}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">{farmer.bio}</p>
                    <div className="grid md:grid-cols-3 gap-4 pt-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                          <Calendar className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <div className="text-2xl font-bold">{farmer.farmingExperience}</div>
                          <div className="text-sm text-muted-foreground">Years Farming</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                          <Tractor className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <div className="text-2xl font-bold">{farmer.farmSize}</div>
                          <div className="text-sm text-muted-foreground">Farm Size</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                          <Package className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <div className="text-2xl font-bold">{farmerProducts.length}</div>
                          <div className="text-sm text-muted-foreground">Products</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Specialization & Farming Methods */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Leaf className="h-5 w-5" />
                      Specialization & Farming Methods
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Specialization</h4>
                        <div className="flex flex-wrap gap-2">
                          {farmer.specialization.map((spec, idx) => (
                            <Badge key={idx} variant="secondary" className="text-sm">
                              {spec}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <Separator />
                      <div>
                        <h4 className="font-semibold mb-2">Farming Methods</h4>
                        <div className="flex flex-wrap gap-2">
                          {farmer.farmingMethods.map((method, idx) => (
                            <Badge key={idx} className="bg-primary text-sm">
                              <Award className="h-3 w-3 mr-1" />
                              {method}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Products */}
                <Card>
                  <CardHeader>
                    <CardTitle>Products by {farmer.name.split(" ")[0]}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {farmerProducts.map((product) => (
                        <Card key={product.id} className="overflow-hidden">
                          <div className="relative h-40">
                            <img
                              src={product.image}
                              alt={`${product.name} - Fresh ${product.category.toLowerCase()} from ${farmer.name}`}
                              className="w-full h-full object-cover"
                            />
                            {product.organic && (
                              <Badge className="absolute top-2 left-2 bg-primary">
                                <Leaf className="h-3 w-3 mr-1" />
                                Organic
                              </Badge>
                            )}
                          </div>
                          <CardContent className="p-4">
                            <h4 className="font-bold mb-1">{product.name}</h4>
                            <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                              {product.description}
                            </p>
                            <div className="flex items-center justify-between">
                              <div>
                                <div className="text-xl font-bold text-primary">
                                  ₹{product.price}
                                </div>
                                <div className="text-xs text-muted-foreground">
                                  per {product.unit}
                                </div>
                              </div>
                              <Button
                                size="sm"
                                className="bg-accent hover:bg-accent-hover"
                                onClick={() => addToCart(product)}
                              >
                                <ShoppingCart className="h-4 w-4 mr-1" />
                                Add
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Reviews */}
                <Card>
                  <CardHeader>
                    <CardTitle>Customer Reviews</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {farmerReviews.length > 0 ? (
                      <div className="space-y-6">
                        {farmerReviews.map((review) => (
                          <div key={review.id} className="space-y-2">
                            <div className="flex items-start justify-between">
                              <div>
                                <div className="font-semibold">{review.userName}</div>
                                <div className="flex items-center gap-2">
                                  <div className="flex">
                                    {[...Array(5)].map((_, i) => (
                                      <Star
                                        key={i}
                                        className={`h-4 w-4 ${
                                          i < review.rating
                                            ? "fill-fresh-yellow text-fresh-yellow"
                                            : "text-muted"
                                        }`}
                                      />
                                    ))}
                                  </div>
                                  <span className="text-sm text-muted-foreground">
                                    {new Date(review.date).toLocaleDateString("en-IN", {
                                      month: "short",
                                      day: "numeric",
                                      year: "numeric",
                                    })}
                                  </span>
                                </div>
                              </div>
                            </div>
                            <p className="text-muted-foreground">{review.comment}</p>
                            {review.productsPurchased.length > 0 && (
                              <div className="flex flex-wrap gap-2 pt-2">
                                {review.productsPurchased.map((product, idx) => (
                                  <Badge key={idx} variant="outline" className="text-xs">
                                    {product}
                                  </Badge>
                                ))}
                              </div>
                            )}
                            {farmerReviews.indexOf(review) < farmerReviews.length - 1 && (
                              <Separator className="mt-4" />
                            )}
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-muted-foreground text-center py-8">
                        No reviews yet. Be the first to review!
                      </p>
                    )}
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1 space-y-6">
                {/* Contact Card */}
                <Card className="sticky top-20">
                  <CardHeader>
                    <CardTitle>Contact Farmer</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Button
                      className="w-full"
                      variant="outline"
                      onClick={() => window.open(`tel:${farmer.phone}`)}
                    >
                      <Phone className="h-4 w-4 mr-2" />
                      Call {farmer.name.split(" ")[0]}
                    </Button>
                    <Button
                      className="w-full bg-accent hover:bg-accent-hover"
                      onClick={() =>
                        window.open(`https://wa.me/${farmer.whatsapp}`, "_blank")
                      }
                    >
                      <MessageCircle className="h-4 w-4 mr-2" />
                      WhatsApp
                    </Button>
                  </CardContent>
                </Card>

                {/* Farm Visit Instructions */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MapPin className="h-5 w-5" />
                      Farm Visit
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      {farmer.visitInstructions}
                    </p>
                    <div className="aspect-video rounded-lg overflow-hidden bg-muted">
                      <iframe
                        src={`https://www.google.com/maps?q=${farmer.coordinates.lat},${farmer.coordinates.lng}&output=embed`}
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        loading="lazy"
                        title={`${farmer.name} farm location`}
                      />
                    </div>
                    <Button
                      variant="outline"
                      className="w-full"
                      onClick={() =>
                        window.open(
                          `https://www.google.com/maps?q=${farmer.coordinates.lat},${farmer.coordinates.lng}`,
                          "_blank"
                        )
                      }
                    >
                      Open in Google Maps
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FarmerProfile;
