import "./index.css";
import { Footer } from "./components/Footer";
import { AppRouter } from "./AppRouter";
import { CartStore } from "./store/CartStore";
import { Header } from "./components/Header";
import { Toaster } from "@/components/ui/toaster";
import { Error404 } from "./pages/Error404";
import { FetchProducts } from "./store/FetchProducts";

function App() {
  const { isError } = FetchProducts();
  if (isError) {
    return <Error404 />;
  }
  return (
    <>
      <CartStore>
        <div className="min-h-screen overflow-x-hidden ">
          <Header />
          <div className="min-h-screen overflow-x-hidden ">
            <AppRouter />
            <Toaster />
          </div>
          <Footer />
        </div>
      </CartStore>
    </>
  );
}

export default App;
