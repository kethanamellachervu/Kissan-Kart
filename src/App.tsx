import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CartProvider } from "@/contexts/CartContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Products from "./pages/Products";
import Farmers from "./pages/Farmers";
import About from "./pages/About";
import Login from "./pages/Login";
import FarmerDashboard from "./pages/FarmerDashboard";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import FarmerProfile from "./pages/FarmerProfile";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <CartProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/products" element={<Products />} />
          <Route path="/farmers" element={<Farmers />} />
          <Route path="/farmers/:id" element={<FarmerProfile />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/farmer-dashboard" element={<FarmerDashboard />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      </CartProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
