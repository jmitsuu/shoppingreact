import "./index.css";
import { CartStore } from "./store/CartStore";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Banner } from "./components/Banner";
import { TopRated } from "./components/TopRated";
import { AppRouter } from "./AppRouter";

function App() {
  return (
    <>
      <div className="min-h-screen">
        <AppRouter />
      </div>
      <Footer />
    </>
  );
}

export default App;
