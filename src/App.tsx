import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CartProvider } from "@/contexts/CartContext";
import { AuthProvider } from "@/contexts/AuthContext";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoute from "@/components/ProtectedRoute";
import Index from "./pages/Index";
import Products from "./pages/Products";
import Farmers from "./pages/Farmers";
import About from "./pages/About";
import Login from "./pages/Login";
import FarmerDashboard from "./pages/FarmerDashboard";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import FarmerProfile from "./pages/FarmerProfile";
import GenerateFarmerImage from "./pages/GenerateFarmerImage";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <BrowserRouter>
        <AuthProvider>
          <CartProvider>
            <Toaster />
            <Sonner />
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route
                path="/"
                element={
                  <ProtectedRoute>
                    <Index />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/products"
                element={
                  <ProtectedRoute>
                    <Products />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/farmers"
                element={
                  <ProtectedRoute>
                    <Farmers />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/farmers/:id"
                element={
                  <ProtectedRoute>
                    <FarmerProfile />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/about"
                element={
                  <ProtectedRoute>
                    <About />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/profile"
                element={
                  <ProtectedRoute>
                    <Profile />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/cart"
                element={
                  <ProtectedRoute requireRole="customer">
                    <Cart />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/checkout"
                element={
                  <ProtectedRoute requireRole="customer">
                    <Checkout />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/farmer-dashboard"
                element={
                  <ProtectedRoute requireRole="farmer">
                    <FarmerDashboard />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/generate-image"
                element={
                  <ProtectedRoute requireRole="farmer">
                    <GenerateFarmerImage />
                  </ProtectedRoute>
                }
              />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </CartProvider>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
