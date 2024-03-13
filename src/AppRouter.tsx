import { Routes, Route, useLocation } from "react-router-dom";
import { HomeProducts } from "./pages/HomeProducts";
import { AboutUs } from "./pages/AboutUs";
import { CartStore } from "./store/CartStore";
import { Header } from "./components/Header";
import { AllProducts } from "./pages/AllProducts";
import { InfoProduct } from "./pages/InfoProduct";
import { useLayoutEffect } from "react";

export function AppRouter() {
  const location = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <CartStore>
      <Header />
      <Routes>
        <Route path="/" element={<HomeProducts />} />
        <Route path="/listacompleta" element={<AllProducts />} />
        <Route path="/listacompleta/:id" element={<InfoProduct />} />
        <Route path="/sobre" element={<AboutUs />} />
        <Route path="/:id" element={<InfoProduct />} />
  
      </Routes>
    </CartStore>
  );
}
