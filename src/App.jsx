import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importación de Componentes
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Sorteos from './components/Sorteos'; // Tu nueva grilla 00-99
import Students from './components/Students';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

// El Panel de Control
import AdminPanel from './components/AdminPanel';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* RUTA PRINCIPAL (Lo que ven tus clientes) */}
          <Route path="/" element={
            <>
              <Navbar />
              <Hero />
              <About />
              <Services />
              <Sorteos /> {/* La grilla aparece después de servicios */}
              <Students />
              <Testimonials />
              <Footer />
              <WhatsAppButton />
            </>
          } />

          {/* RUTA DE ADMINISTRACIÓN (Solo para vos) */}
          {/* Podés cambiar "admin-reparar-2026" por algo más secreto si querés */}
          <Route path="/admin-reparar-2026" element={<AdminPanel />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;