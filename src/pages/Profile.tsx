import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { Separator } from "@/components/ui/separator";

interface OrderItem {
  id: string;
  name: string;
  quantity: number;
  price: number;
}

interface Order {
  id: string;
  date: string;
  items: OrderItem[];
  total: number;
}

const STORAGE_KEYS = {
  USER_DETAILS: "profile-user-details",
  PLACED_ORDERS: "profile-placed-orders",
};

const Profile = () => {
  const { items: currentCartItems } = useCart();
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [previousOrders, setPreviousOrders] = useState<Order[]>([]);

  // Load stored user details and orders from localStorage on mount
  useEffect(() => {
    const storedUserDetails = localStorage.getItem(STORAGE_KEYS.USER_DETAILS);
    if (storedUserDetails) {
      const { phone, email, address } = JSON.parse(storedUserDetails);
      setPhone(phone || "");
      setEmail(email || "");
      setAddress(address || "");
    }

    const storedOrders = localStorage.getItem(STORAGE_KEYS.PLACED_ORDERS);
    if (storedOrders) {
      setPreviousOrders(JSON.parse(storedOrders));
    }
  }, []);

  // Save user details to localStorage on change
  const saveUserDetails = () => {
    localStorage.setItem(
      STORAGE_KEYS.USER_DETAILS,
      JSON.stringify({ phone, email, address })
    );
    alert("User details saved.");
  };

  // Helper to format date
  const formatDate = (dateStr: string) =>
    new Date(dateStr).toLocaleDateString("en-IN", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-muted/30 py-8">
        <div className="container max-w-4xl mx-auto space-y-8">
          {/* User Details */}
          <Card>
            <CardHeader>
              <CardTitle>User Profile</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 9876543210"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="address">Delivery Address</Label>
                <Textarea
                  id="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Enter your complete delivery address"
                  rows={3}
                />
              </div>
              <Button onClick={saveUserDetails} className="mt-4">
                Save Details
              </Button>
            </CardContent>
          </Card>

          {/* Current Order */}
          <Card>
            <CardHeader>
              <CardTitle>Current Order</CardTitle>
            </CardHeader>
            <CardContent>
              {currentCartItems.length === 0 ? (
                <p className="text-muted-foreground">No items in current cart.</p>
              ) : (
                <div className="space-y-2">
                  {currentCartItems.map((item) => (
                    <div key={item.id} className="flex justify-between text-sm">
                      <span>
                        {item.name} x {item.quantity}
                      </span>
                      <span>₹{item.price * item.quantity}</span>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Previous Orders */}
          <Card>
            <CardHeader>
              <CardTitle>Previous Orders</CardTitle>
            </CardHeader>
            <CardContent>
              {previousOrders.length === 0 ? (
                <p className="text-muted-foreground">No previous orders found.</p>
              ) : (
                <div className="space-y-6">
                  {previousOrders.map((order) => (
                    <div key={order.id} className="space-y-2 border rounded p-4">
                      <div className="flex justify-between font-semibold">
                        <span>Order ID: {order.id}</span>
                        <span>{formatDate(order.date)}</span>
                      </div>
                      <Separator className="my-2" />
                      <div className="space-y-1 text-sm">
                        {order.items.map((item) => (
                          <div key={item.id} className="flex justify-between">
                            <span>
                              {item.name} x {item.quantity}
                            </span>
                            <span>₹{item.price * item.quantity}</span>
                          </div>
                        ))}
                      </div>
                      <Separator className="my-2" />
                      <div className="flex justify-end font-semibold">
                        Total: ₹{order.total}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Profile;
