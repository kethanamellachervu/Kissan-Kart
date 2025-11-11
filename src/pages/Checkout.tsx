import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Checkout = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [deliveryMethod, setDeliveryMethod] = useState("delivery");

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Order Placed Successfully!",
      description: "Your order has been received. The farmer will contact you shortly.",
    });
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Header */}
        <section className="bg-farm-green-light py-12">
          <div className="container mx-auto px-4">
            <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4">
              Checkout
            </h1>
            <p className="text-muted-foreground text-lg">
              Complete your order details
            </p>
          </div>
        </section>

        {/* Checkout Form */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <form onSubmit={handlePlaceOrder}>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Customer Details */}
                <div className="lg:col-span-2 space-y-6">
                  <Card>
                    <CardContent className="p-6">
                      <h2 className="font-heading font-bold text-2xl mb-6">
                        Contact Information
                      </h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="name">Full Name *</Label>
                          <Input id="name" placeholder="Enter your name" required />
                        </div>
                        <div>
                          <Label htmlFor="phone">Phone Number *</Label>
                          <Input id="phone" type="tel" placeholder="+91 98765 43210" required />
                        </div>
                        <div className="md:col-span-2">
                          <Label htmlFor="email">Email (Optional)</Label>
                          <Input id="email" type="email" placeholder="your@email.com" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h2 className="font-heading font-bold text-2xl mb-6">
                        Delivery Method
                      </h2>
                      <RadioGroup value={deliveryMethod} onValueChange={setDeliveryMethod}>
                        <div className="flex items-center space-x-2 mb-3">
                          <RadioGroupItem value="delivery" id="delivery" />
                          <Label htmlFor="delivery" className="cursor-pointer">
                            Home Delivery (₹50)
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="pickup" id="pickup" />
                          <Label htmlFor="pickup" className="cursor-pointer">
                            Farm Pickup (Free)
                          </Label>
                        </div>
                      </RadioGroup>
                    </CardContent>
                  </Card>

                  {deliveryMethod === "delivery" && (
                    <Card>
                      <CardContent className="p-6">
                        <h2 className="font-heading font-bold text-2xl mb-6">
                          Delivery Address
                        </h2>
                        <div className="space-y-4">
                          <div>
                            <Label htmlFor="address">Street Address *</Label>
                            <Input id="address" placeholder="Enter your address" required />
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <Label htmlFor="city">City *</Label>
                              <Input id="city" placeholder="City" required />
                            </div>
                            <div>
                              <Label htmlFor="pincode">Pincode *</Label>
                              <Input id="pincode" placeholder="500001" required />
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )}
                </div>

                {/* Order Summary */}
                <div className="lg:col-span-1">
                  <Card className="sticky top-24">
                    <CardContent className="p-6">
                      <h2 className="font-heading font-bold text-2xl mb-6">
                        Order Summary
                      </h2>
                      
                      <div className="space-y-3 mb-6">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Subtotal</span>
                          <span className="font-semibold">₹200</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Delivery Fee</span>
                          <span className="font-semibold">
                            {deliveryMethod === "delivery" ? "₹50" : "Free"}
                          </span>
                        </div>
                        <div className="border-t pt-3 flex justify-between">
                          <span className="font-bold text-lg">Total</span>
                          <span className="font-bold text-lg text-primary">
                            ₹{deliveryMethod === "delivery" ? "250" : "200"}
                          </span>
                        </div>
                      </div>

                      <Button type="submit" className="w-full mb-3" size="lg">
                        Place Order
                      </Button>
                      
                      <Button
                        type="button"
                        variant="outline"
                        className="w-full"
                        onClick={() => navigate("/cart")}
                      >
                        Back to Cart
                      </Button>

                      <div className="mt-6 p-4 bg-farm-green-light rounded-lg">
                        <p className="text-sm text-foreground">
                          <strong>Note:</strong> The farmer will contact you to confirm the order
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Checkout;
