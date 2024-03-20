import "./index.css";
import { Footer } from "./components/Footer";
import { AppRouter } from "./AppRouter";
import { CartStore } from "./store/CartStore";
import { Header } from "./components/Header";

function App() {
  return (
    <>
      <CartStore>
        <Header />
        <div className="min-h-screen">
          <AppRouter />
        </div>
      </CartStore>
      <Footer />
    </>
  );
}

export default App;
