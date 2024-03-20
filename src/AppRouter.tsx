import { Routes, Route, useLocation } from "react-router-dom";
import { HomeProducts } from "./pages/HomeProducts";
import { AboutUs } from "./pages/AboutUs";
import { AllProducts } from "./pages/AllProducts";
import { InfoProduct } from "./pages/InfoProduct";
import { useLayoutEffect } from "react";

export function AppRouter() {
  const location = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeProducts />} />
        <Route path="/listacompleta" element={<AllProducts />} />
        <Route path="/listacompleta/:id" element={<InfoProduct />} />
        <Route path="/sobre" element={<AboutUs />} />
        <Route path="/:id" element={<InfoProduct />} />
      </Routes>
    </>
  );
}
