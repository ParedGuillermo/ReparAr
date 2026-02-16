import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Students from "./components/Students";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div className="bg-darkbg min-h-screen text-white flex flex-col">

      <Navbar />

      {/* Impacto inicial */}
      <Hero />

      {/* Prueba real */}
      <Services />

      {/* Autoridad */}
      <About />

      {/* Oferta específica */}
      <Students />

      {/* Testimoniales */}
      <Testimonials />

      {/* Contacto */}
      <Footer />

      {/* Botón flotante */}
      <WhatsAppButton />

      

    </div>
  );
}

export default App;
