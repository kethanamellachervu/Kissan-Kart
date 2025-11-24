import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Package, TrendingUp, Star, MapPin } from "lucide-react";
import { ProductUploadForm } from "@/components/farmer/ProductUploadForm";
import { ProductList } from "@/components/farmer/ProductList";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const FarmerDashboard = () => {
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  const handleProductAdded = () => {
    setRefreshTrigger((prev) => prev + 1);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-12">
        <div className="container">
          <h1 className="text-4xl font-bold mb-2">Farmer Dashboard</h1>
          <p className="text-muted-foreground mb-8">Manage your farm and products</p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Products</CardTitle>
                <Package className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">24</div>
                <p className="text-xs text-muted-foreground">Active listings</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">This Month</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">₹45,231</div>
                <p className="text-xs text-muted-foreground">+20% from last month</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Rating</CardTitle>
                <Star className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">4.8</div>
                <p className="text-xs text-muted-foreground">Based on 127 reviews</p>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="products" className="mb-8">
            <TabsList>
              <TabsTrigger value="products">My Products</TabsTrigger>
              <TabsTrigger value="add">Add Product</TabsTrigger>
              <TabsTrigger value="farm">Farm Info</TabsTrigger>
            </TabsList>

            <TabsContent value="products" className="mt-6">
              <ProductList refreshTrigger={refreshTrigger} />
            </TabsContent>

            <TabsContent value="add" className="mt-6">
              <div className="max-w-2xl mx-auto">
                <ProductUploadForm onSuccess={handleProductAdded} />
              </div>
            </TabsContent>

            <TabsContent value="farm" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Farm Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <MapPin className="h-5 w-5 mr-3 text-muted-foreground" />
                      <div>
                        <p className="font-medium">Enabavi Village, Warangal</p>
                        <p className="text-sm text-muted-foreground">Telangana, India</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">
                        Specialization: Organic Vegetables, Leafy Greens
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FarmerDashboard;
