import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Pencil, Trash2, Leaf, Package } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/contexts/AuthContext";

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  unit: string;
  description: string;
  image_url: string;
  organic: boolean;
  in_stock: boolean;
}

interface ProductListProps {
  refreshTrigger: number;
}

export const ProductList = ({ refreshTrigger }: ProductListProps) => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    if (!user) return;

    try {
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .eq("farmer_id", user.email)
        .order("created_at", { ascending: false });

      if (error) throw error;
      setProducts(data || []);
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [user, refreshTrigger]);

  const handleDelete = async (id: string, imageUrl: string) => {
    if (!confirm("Are you sure you want to delete this product?")) return;

    try {
      // Delete image from storage if exists
      if (imageUrl) {
        const path = imageUrl.split("/product-images/")[1];
        if (path) {
          await supabase.storage.from("product-images").remove([path]);
        }
      }

      // Delete product from database
      const { error } = await supabase.from("products").delete().eq("id", id);

      if (error) throw error;

      toast({
        title: "Success",
        description: "Product deleted successfully",
      });

      fetchProducts();
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const toggleStock = async (id: string, currentStatus: boolean) => {
    try {
      const { error } = await supabase
        .from("products")
        .update({ in_stock: !currentStatus })
        .eq("id", id);

      if (error) throw error;

      toast({
        title: "Success",
        description: `Product marked as ${!currentStatus ? "in stock" : "out of stock"}`,
      });

      fetchProducts();
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  if (loading) {
    return <div className="text-center py-8">Loading products...</div>;
  }

  if (products.length === 0) {
    return (
      <Card>
        <CardContent className="py-12 text-center text-muted-foreground">
          <Package className="h-12 w-12 mx-auto mb-4 opacity-50" />
          <p>No products yet. Add your first product above!</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <Card key={product.id} className="overflow-hidden">
          <div className="relative h-48">
            {product.image_url ? (
              <img
                src={product.image_url}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-muted flex items-center justify-center">
                <Package className="h-12 w-12 text-muted-foreground" />
              </div>
            )}
            {product.organic && (
              <Badge className="absolute top-3 left-3 bg-primary">
                <Leaf className="h-3 w-3 mr-1" />
                Organic
              </Badge>
            )}
            <Badge
              className="absolute top-3 right-3"
              variant={product.in_stock ? "default" : "secondary"}
            >
              {product.in_stock ? "In Stock" : "Out of Stock"}
            </Badge>
          </div>
          <CardContent className="p-4">
            <h3 className="font-bold text-lg mb-2">{product.name}</h3>
            <p className="text-sm text-muted-foreground mb-2 line-clamp-2">
              {product.description}
            </p>
            <div className="flex items-center justify-between mb-4">
              <div>
                <div className="text-2xl font-bold text-primary">₹{product.price}</div>
                <div className="text-xs text-muted-foreground">per {product.unit}</div>
              </div>
              <Badge variant="outline">{product.category}</Badge>
            </div>
            <div className="flex gap-2">
              <Button
                size="sm"
                variant="outline"
                className="flex-1"
                onClick={() => toggleStock(product.id, product.in_stock)}
              >
                {product.in_stock ? "Mark Out of Stock" : "Mark In Stock"}
              </Button>
              <Button
                size="sm"
                variant="destructive"
                onClick={() => handleDelete(product.id, product.image_url)}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
