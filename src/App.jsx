import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Footer from "./components/Footer";
import Students from "./components/Students";

function App() {
  return (
    <div className="bg-darkbg min-h-screen text-white flex flex-col">
      <Navbar />
      <Hero />
      <Services />
      <Students />
      <Footer />
    </div>
  );
}

export default App;
