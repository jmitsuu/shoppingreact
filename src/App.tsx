import "./index.css";
import { AppRouter } from "./AppRouter";
import { CartStore } from "./store/CartStore";
import { Toaster } from "@/components/ui/toaster";

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
