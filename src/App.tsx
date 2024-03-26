import "./index.css";
import { Footer } from "./components/Footer";
import { AppRouter } from "./AppRouter";
import { CartStore } from "./store/CartStore";
import { Header } from "./components/Header";
import { Toaster } from "@/components/ui/toaster";

function App() {
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
