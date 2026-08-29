import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import Tjanster from "./pages/Tjanster";
import TjanstDetalj from "./pages/TjanstDetalj";
import Referensprojekt from "./pages/Referensprojekt";
import OmBolaget from "./pages/OmBolaget";
import Kontakt from "./pages/Kontakt";
import Karriar from "./pages/Karriar";
import NotFound from "./pages/NotFound";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/tjanster" element={<Tjanster />} />
          <Route path="/referensprojekt" element={<Referensprojekt />} />
          <Route path="/om-bolaget" element={<OmBolaget />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="/karriar" element={<Karriar />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
