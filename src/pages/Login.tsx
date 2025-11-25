import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Sprout } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";
// Login page for Kissan Kart
const Login = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [farmerEmail, setFarmerEmail] = useState("");
  const [farmerPassword, setFarmerPassword] = useState("");
  const { login, isAuthenticated } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  const handleUserLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const success = await login(userEmail, userPassword, "customer");
    if (success) {
      toast({
        title: "Login successful",
        description: "Welcome to Kissan Kart!",
      });
    } else {
      toast({
        title: "Login failed",
        description: "Please check your credentials",
        variant: "destructive",
      });
    }
  };

  const handleFarmerLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const success = await login(farmerEmail, farmerPassword, "farmer");
    if (success) {
      toast({
        title: "Login successful",
        description: "Welcome to your farmer dashboard!",
      });
    } else {
      toast({
        title: "Login failed",
        description: "Please check your credentials",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 flex items-center justify-center py-12 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container max-w-md">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
              <Sprout className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-3xl font-bold">Welcome to Kissan Kart</h1>
            <p className="text-muted-foreground mt-2">Login to your account</p>
          </div>

          <Tabs defaultValue="user" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="user">Customer</TabsTrigger>
              <TabsTrigger value="farmer">Farmer</TabsTrigger>
            </TabsList>

            <TabsContent value="user">
              <Card>
                <CardHeader>
                  <CardTitle>Customer Login</CardTitle>
                  <CardDescription>Login to browse and purchase products</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleUserLogin} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="user-email">Email</Label>
                      <Input
                        id="user-email"
                        type="email"
                        placeholder="your@email.com"
                        value={userEmail}
                        onChange={(e) => setUserEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="user-password">Password</Label>
                      <Input
                        id="user-password"
                        type="password"
                        value={userPassword}
                        onChange={(e) => setUserPassword(e.target.value)}
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full">Login</Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="farmer">
              <Card>
                <CardHeader>
                  <CardTitle>Farmer Login</CardTitle>
                  <CardDescription>Access your farmer dashboard</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleFarmerLogin} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="farmer-email">Email</Label>
                      <Input
                        id="farmer-email"
                        type="email"
                        placeholder="farmer@email.com"
                        value={farmerEmail}
                        onChange={(e) => setFarmerEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="farmer-password">Password</Label>
                      <Input
                        id="farmer-password"
                        type="password"
                        value={farmerPassword}
                        onChange={(e) => setFarmerPassword(e.target.value)}
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full">Login</Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default Login;
