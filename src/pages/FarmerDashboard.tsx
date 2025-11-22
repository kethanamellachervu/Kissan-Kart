import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Plus, Package, IndianRupee, Edit, Trash2 } from "lucide-react";
import { categories } from "@/data/products";
import { useToast } from "@/hooks/use-toast";

const FarmerDashboard = () => {
  const { toast } = useToast();
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [productName, setProductName] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productUnit, setProductUnit] = useState("");
  const [productDescription, setProductDescription] = useState("");

  const handleAddProduct = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement actual product addition logic
    toast({
      title: "Product Added",
      description: `${productName} has been added to your inventory.`,
    });
    setShowAddProduct(false);
    // Reset form
    setProductName("");
    setProductCategory("");
    setProductPrice("");
    setProductUnit("");
    setProductDescription("");
  };

  // Mock data for demonstration
  const myProducts = [
    { id: 1, name: "Fresh Tomatoes", category: "Vegetables", price: 40, unit: "kg", stock: 50 },
    { id: 2, name: "Red Onions", category: "Vegetables", price: 35, unit: "kg", stock: 100 },
    { id: 3, name: "Fresh Potatoes", category: "Vegetables", price: 25, unit: "kg", stock: 75 },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-muted/30">
        <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-8">
          <div className="container">
            <h1 className="text-3xl font-bold mb-2">Farmer Dashboard</h1>
            <p className="text-muted-foreground">Manage your products and view orders</p>
          </div>
        </section>

        <section className="py-8">
          <div className="container">
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Total Products</CardTitle>
                  <Package className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{myProducts.length}</div>
                  <p className="text-xs text-muted-foreground">Active listings</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                  <IndianRupee className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">₹12,450</div>
                  <p className="text-xs text-muted-foreground">This month</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Orders</CardTitle>
                  <Package className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">28</div>
                  <p className="text-xs text-muted-foreground">Pending deliveries</p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>My Products</CardTitle>
                  <Button
                    onClick={() => setShowAddProduct(!showAddProduct)}
                    className="bg-accent hover:bg-accent-hover"
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Add Product
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                {showAddProduct && (
                  <form onSubmit={handleAddProduct} className="mb-8 p-6 border rounded-lg bg-muted/50">
                    <h3 className="font-bold text-lg mb-4">Add New Product</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Product Name</Label>
                        <Input
                          id="name"
                          value={productName}
                          onChange={(e) => setProductName(e.target.value)}
                          placeholder="e.g., Fresh Tomatoes"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="category">Category</Label>
                        <Select value={productCategory} onValueChange={setProductCategory} required>
                          <SelectTrigger>
                            <SelectValue placeholder="Select category" />
                          </SelectTrigger>
                          <SelectContent>
                            {categories.filter(c => c !== "All Products").map((category) => (
                              <SelectItem key={category} value={category}>
                                {category}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="price">Price</Label>
                        <Input
                          id="price"
                          type="number"
                          value={productPrice}
                          onChange={(e) => setProductPrice(e.target.value)}
                          placeholder="Price in ₹"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="unit">Unit</Label>
                        <Input
                          id="unit"
                          value={productUnit}
                          onChange={(e) => setProductUnit(e.target.value)}
                          placeholder="e.g., kg, dozen, bundle"
                          required
                        />
                      </div>
                      <div className="space-y-2 md:col-span-2">
                        <Label htmlFor="description">Description</Label>
                        <Textarea
                          id="description"
                          value={productDescription}
                          onChange={(e) => setProductDescription(e.target.value)}
                          placeholder="Describe your product..."
                          rows={3}
                        />
                      </div>
                    </div>
                    <div className="flex gap-3 mt-4">
                      <Button type="submit" className="bg-primary">Add Product</Button>
                      <Button type="button" variant="outline" onClick={() => setShowAddProduct(false)}>
                        Cancel
                      </Button>
                    </div>
                  </form>
                )}

                <div className="space-y-4">
                  {myProducts.map((product) => (
                    <div
                      key={product.id}
                      className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex-1">
                        <h4 className="font-semibold">{product.name}</h4>
                        <div className="flex items-center gap-3 mt-1">
                          <Badge variant="secondary">{product.category}</Badge>
                          <span className="text-sm text-muted-foreground">
                            ₹{product.price}/{product.unit}
                          </span>
                          <span className="text-sm text-muted-foreground">
                            Stock: {product.stock} {product.unit}
                          </span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FarmerDashboard;
