import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importación de Componentes
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Sorteos from './components/Sorteos'; // Componente de Cilindro de Datos
import Students from './components/Students';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

// El Panel de Control
import AdminPanel from './components/AdminPanel';

function App() {
  return (
    <Router>
      <div className="App bg-slate-950">
        <Routes>
          {/* RUTA PRINCIPAL */}
          <Route path="/" element={
            <>
              <Navbar />
              <Hero />
              
              {/* IMPACTO INMEDIATO: El Sorteo se mueve aquí */}
              <Sorteos /> 
              
              <About />
              <Services />
              <Students />
              <Testimonials />
              <Footer />
              <WhatsAppButton />
            </>
          } />

          {/* RUTA DE ADMINISTRACIÓN */}
          <Route path="/admin-reparar-2026" element={<AdminPanel />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;