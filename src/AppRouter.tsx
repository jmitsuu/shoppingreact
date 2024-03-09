import { Routes, Route } from "react-router-dom";
import { HomeProducts } from "./pages/HomeProducts";
import { AboutUs } from "./pages/AboutUs";
import { CartStore } from "./store/CartStore";
import { Header } from "./components/Header";
import { AllProducts } from "./pages/AllProducts";

export function AppRouter() {
  return (
    <CartStore>
      <Header />
      <Routes>
        <Route path="/" element={<HomeProducts />} />
        <Route path="/listacompleta" element={<AllProducts />} />
        <Route path="/sobre" element={<AboutUs />} />
      </Routes>
    </CartStore>
  );
}
