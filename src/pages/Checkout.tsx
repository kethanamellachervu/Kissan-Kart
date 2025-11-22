import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";
import { Truck, MapPin } from "lucide-react";

const Checkout = () => {
  const navigate = useNavigate();
  const { items, getCartTotal, clearCart } = useCart();
  const { toast } = useToast();
  
  const [deliveryMethod, setDeliveryMethod] = useState<"delivery" | "pickup">("delivery");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [notes, setNotes] = useState("");

  const deliveryFee = deliveryMethod === "delivery" ? 50 : 0;
  const total = getCartTotal() + deliveryFee;

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    
    // TODO: Implement actual order placement logic
    toast({
      title: "Order Placed Successfully! 🎉",
      description: `Your order of ₹${total} has been placed. Farmer will contact you shortly.`,
    });
    
    clearCart();
    navigate("/");
  };

  if (items.length === 0) {
    navigate("/cart");
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-muted/30">
        <section className="bg-gradient-to-br from-primary/10 to-accent/10 py-8">
          <div className="container">
            <h1 className="text-3xl font-bold mb-2">Checkout</h1>
            <p className="text-muted-foreground">Complete your order</p>
          </div>
        </section>

        <section className="py-8">
          <div className="container">
            <form onSubmit={handlePlaceOrder}>
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Delivery Method</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <RadioGroup
                        value={deliveryMethod}
                        onValueChange={(value: "delivery" | "pickup") =>
                          setDeliveryMethod(value)
                        }
                      >
                        <div className="flex items-start space-x-3 p-4 border rounded-lg cursor-pointer hover:bg-muted/50">
                          <RadioGroupItem value="delivery" id="delivery" />
                          <div className="flex-1">
                            <Label htmlFor="delivery" className="cursor-pointer flex items-center gap-2 font-semibold">
                              <Truck className="h-4 w-4" />
                              Home Delivery
                            </Label>
                            <p className="text-sm text-muted-foreground mt-1">
                              Delivered to your doorstep (₹50 delivery fee)
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3 p-4 border rounded-lg cursor-pointer hover:bg-muted/50">
                          <RadioGroupItem value="pickup" id="pickup" />
                          <div className="flex-1">
                            <Label htmlFor="pickup" className="cursor-pointer flex items-center gap-2 font-semibold">
                              <MapPin className="h-4 w-4" />
                              Farm Pickup
                            </Label>
                            <p className="text-sm text-muted-foreground mt-1">
                              Pick up directly from the farmer's location (Free)
                            </p>
                          </div>
                        </div>
                      </RadioGroup>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Contact Information</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name *</Label>
                          <Input
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Your full name"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number *</Label>
                          <Input
                            id="phone"
                            type="tel"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="+91 9876543210"
                            required
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email (optional)</Label>
                        <Input
                          id="email"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="your@email.com"
                        />
                      </div>
                      {deliveryMethod === "delivery" && (
                        <div className="space-y-2">
                          <Label htmlFor="address">Delivery Address *</Label>
                          <Textarea
                            id="address"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            placeholder="Enter your complete delivery address"
                            rows={3}
                            required
                          />
                        </div>
                      )}
                      <div className="space-y-2">
                        <Label htmlFor="notes">Order Notes (optional)</Label>
                        <Textarea
                          id="notes"
                          value={notes}
                          onChange={(e) => setNotes(e.target.value)}
                          placeholder="Any special instructions for the farmer?"
                          rows={2}
                        />
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="lg:col-span-1">
                  <Card className="sticky top-20">
                    <CardHeader>
                      <CardTitle>Order Summary</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-3">
                        {items.map((item) => (
                          <div key={item.id} className="flex justify-between text-sm">
                            <span className="text-muted-foreground">
                              {item.name} x {item.quantity}
                            </span>
                            <span className="font-semibold">
                              ₹{item.price * item.quantity}
                            </span>
                          </div>
                        ))}
                      </div>
                      
                      <Separator />
                      
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Subtotal</span>
                          <span className="font-semibold">₹{getCartTotal()}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Delivery Fee</span>
                          <span className="font-semibold">
                            {deliveryFee === 0 ? "Free" : `₹${deliveryFee}`}
                          </span>
                        </div>
                      </div>
                      
                      <Separator />
                      
                      <div className="flex justify-between text-lg">
                        <span className="font-bold">Total</span>
                        <span className="font-bold text-primary">₹{total}</span>
                      </div>

                      <div className="pt-2">
                        <Button
                          type="submit"
                          className="w-full bg-accent hover:bg-accent-hover"
                          size="lg"
                        >
                          Place Order
                        </Button>
                        <p className="text-xs text-muted-foreground text-center mt-3">
                          Farmer will contact you via WhatsApp/call to confirm delivery
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
