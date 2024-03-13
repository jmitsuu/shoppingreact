import "./index.css";
import { Footer } from "./components/Footer";
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
