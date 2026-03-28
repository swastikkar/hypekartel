import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import HomePage from "./pages/HomePage";
import ItemDetail from "./pages/ItemDetail";
import AuthCertificate from "./pages/AuthCertificate";
import Checkout from "./pages/Checkout";
import OrderTracking from "./pages/OrderTracking";
import SellPage from "./pages/SellPage";
import ARScan from "./pages/ARScan";
import ProfilePage from "./pages/ProfilePage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/item" element={<ItemDetail />} />
          <Route path="/auth-cert" element={<AuthCertificate />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/orders" element={<OrderTracking />} />
          <Route path="/sell" element={<SellPage />} />
          <Route path="/scan" element={<ARScan />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
