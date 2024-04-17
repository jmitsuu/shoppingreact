import { FetchProducts } from "@/api/products/FetchProducts";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Outlet } from "react-router";
import { Error404 } from "./Error404";
export function Default() {
 const { isError } = FetchProducts();

 if (isError) {
  return <Error404 />;
 }

 return (
  <>
   <div className="min-h-screen overflow-x-hidden ">
    <Header />
    <div className="min-h-screen overflow-x-hidden ">
     <Outlet />
    </div>
    <Footer />
   </div>
  </>
 );
}
