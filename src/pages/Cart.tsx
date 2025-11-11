import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trash2, Plus, Minus, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import vegetablesImg from "@/assets/vegetables.jpg";
import fruitsImg from "@/assets/fruits.jpg";

interface CartItem {
  id: number;
  name: string;
  price: number;
  unit: string;
  image: string;
  farmer: string;
  quantity: number;
}

const Cart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: "Organic Tomatoes",
      price: 40,
      unit: "kg",
      image: vegetablesImg,
      farmer: "Ramesh Kumar",
      quantity: 2,
    },
    {
      id: 2,
      name: "Farm Fresh Apples",
      price: 120,
      unit: "kg",
      image: fruitsImg,
      farmer: "Lakshmi Devi",
      quantity: 1,
    },
  ]);

  const updateQuantity = (id: number, change: number) => {
    setCartItems(
      cartItems.map((item) => {
        if (item.id === id) {
          const newQuantity = Math.max(0, item.quantity + change);
          return { ...item, quantity: newQuantity };
        }
        return item;
      }).filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const deliveryFee = subtotal > 0 ? 50 : 0;
  const total = subtotal + deliveryFee;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Header */}
        <section className="bg-farm-green-light py-12">
          <div className="container mx-auto px-4">
            <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4">
              Shopping Cart
            </h1>
            <p className="text-muted-foreground text-lg">
              {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} in your cart
            </p>
          </div>
        </section>

        {/* Cart Content */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            {cartItems.length === 0 ? (
              <div className="text-center py-16">
                <ShoppingBag className="h-24 w-24 text-muted-foreground mx-auto mb-4" />
                <h2 className="font-heading font-bold text-2xl mb-2">Your cart is empty</h2>
                <p className="text-muted-foreground mb-6">
                  Start shopping to add items to your cart
                </p>
                <Button size="lg" asChild>
                  <Link to="/products">Browse Products</Link>
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Cart Items */}
                <div className="lg:col-span-2 space-y-4">
                  {cartItems.map((item) => (
                    <Card key={item.id}>
                      <CardContent className="p-4">
                        <div className="flex gap-4">
                          <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          
                          <div className="flex-1 min-w-0">
                            <h3 className="font-heading font-bold text-lg mb-1">
                              {item.name}
                            </h3>
                            <p className="text-sm text-muted-foreground mb-2">
                              From {item.farmer}
                            </p>
                            <div className="flex items-center gap-2 mb-3">
                              <span className="text-xl font-bold text-primary">
                                ₹{item.price}
                              </span>
                              <span className="text-muted-foreground">/ {item.unit}</span>
                            </div>
                            
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <Button
                                  size="sm"
                                  variant="outline"
                                  onClick={() => updateQuantity(item.id, -1)}
                                >
                                  <Minus className="h-4 w-4" />
                                </Button>
                                <span className="w-12 text-center font-semibold">
                                  {item.quantity}
                                </span>
                                <Button
                                  size="sm"
                                  variant="outline"
                                  onClick={() => updateQuantity(item.id, 1)}
                                >
                                  <Plus className="h-4 w-4" />
                                </Button>
                              </div>
                              
                              <div className="flex items-center gap-4">
                                <span className="font-bold text-lg">
                                  ₹{item.price * item.quantity}
                                </span>
                                <Button
                                  size="sm"
                                  variant="ghost"
                                  onClick={() => removeItem(item.id)}
                                  className="text-destructive hover:text-destructive"
                                >
                                  <Trash2 className="h-4 w-4" />
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
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
                          <span className="font-semibold">₹{subtotal}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Delivery Fee</span>
                          <span className="font-semibold">₹{deliveryFee}</span>
                        </div>
                        <div className="border-t pt-3 flex justify-between">
                          <span className="font-bold text-lg">Total</span>
                          <span className="font-bold text-lg text-primary">₹{total}</span>
                        </div>
                      </div>

                      <Button className="w-full mb-3" size="lg" asChild>
                        <Link to="/checkout">Proceed to Checkout</Link>
                      </Button>
                      
                      <Button variant="outline" className="w-full" asChild>
                        <Link to="/products">Continue Shopping</Link>
                      </Button>

                      <div className="mt-6 p-4 bg-farm-green-light rounded-lg">
                        <p className="text-sm text-foreground">
                          <strong>Free delivery</strong> on orders above ₹500
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Cart;
