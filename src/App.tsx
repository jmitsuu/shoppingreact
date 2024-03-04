import "./index.css";
import { CartStore } from "./store/CartStore";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { HomeProducts } from "./pages/HomeProducts";

function App() {
  return (
    <>
      {" "}
      <CartStore>
        <Header />
        <main className="overflow-x-hidden  ">
          <section className=" min-h-screen flex-col">
            <HomeProducts />
          </section>

          <Footer />
        </main>
      </CartStore>
    </>
  );
}

export default App;
