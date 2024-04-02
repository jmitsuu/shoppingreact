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
        <Header />
        <div className="min-h-screen">
          <AppRouter />
          <Toaster />
        </div>
      </CartStore>
      <Footer />
    </>
  );
}

export default App;
