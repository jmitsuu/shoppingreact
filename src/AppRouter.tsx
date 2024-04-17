import { Routes, Route, useLocation } from "react-router-dom";
import { HomeProducts } from "./pages/HomeProducts";
import { AboutUs } from "./pages/AboutUs";
import { AllProducts } from "./pages/AllProducts";
import { InfoProduct } from "./pages/InfoProduct";
import { useLayoutEffect } from "react";
import { CheckItems } from "./pages/checkoutcart/CheckItems";
import { Payment } from "./pages/checkoutcart/Payment";
import { Bag } from "./pages/Bag";
import { SingIn } from "./pages/auth/SingIn";
import { SingUp } from "./pages/auth/SingUp";
import { Default } from "./pages/layouts/Default";
import { Management } from "./pages/admin/Management";

export function AppRouter() {
 const location = useLocation();
 //  const {isLoading, admin } = FetchUserAdm();
 //  if(isLoading){
 //   if(admin){
 //     return(
 //       <Routes>
 //          <Route path="/admin" element={<Management />} />
 //       </Routes>
 //     )
 //   }else{
 //     return <HomeProducts />
 //   }
 // }
 useLayoutEffect(() => {
  window.scrollTo(0, 0);
 }, [location.pathname]);

 return (
  <>
   <Routes>
    <Route path="/" element={<Default />}>
     <Route path="/" element={<HomeProducts />} />
     <Route path="/auth/singin" element={<SingIn />} />
     <Route path="/auth/singup" element={<SingUp />} />
     <Route path="/admin" element={<Management />} />
     <Route path="/listacompleta" element={<AllProducts />} />
     <Route path="/listacompleta/:id" element={<InfoProduct />} />
     <Route path="/sobre" element={<AboutUs />} />
     <Route path="/:id" element={<InfoProduct />} />
     <Route path="/check" element={<Bag />}>
      <Route path="cart" element={<CheckItems />} />
      <Route path="payment" element={<Payment />} />
     </Route>
    </Route>
   </Routes>
  </>
 );
}
