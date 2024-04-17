import "./index.css";
import { AppRouter } from "./AppRouter";
import { CartStore } from "./store/CartStore";
import { Toaster } from "@/components/ui/toaster";
import { Error404 } from "./pages/layouts/Error404";
import { FetchProducts } from "./api/products/FetchProducts";

function App() {

 return (
  <>
   <CartStore>
       <AppRouter />  
      <Toaster />
   </CartStore>
  </>
 );
}

export default App;
