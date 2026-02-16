import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const whatsappMessage = encodeURIComponent(
    "Hola ReparAr, quiero consultar por un servicio técnico."
  );

  const navLinks = [
    { name: "Servicios", href: "#servicios" },
    { name: "Cómo trabajo", href: "#about" },
    { name: "Contacto", href: "#contacto" },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-800 bg-darkbg/95 backdrop-blur">
      
      <div className="flex items-center justify-between px-6 py-4 mx-auto max-w-7xl">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold tracking-wide text-white select-none">
          Repar<span className="text-primary">Ar</span>
        </h1>

        {/* Desktop navigation */}
        <div className="hidden gap-8 font-medium text-gray-300 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="transition duration-200 hover:text-white hover:scale-105"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop WhatsApp button */}
        <a
          href={`https://wa.me/5491170607386?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden px-5 py-2 font-semibold text-white transition-all duration-200 rounded-lg md:block bg-primary hover:opacity-90 hover:scale-105"
        >
          WhatsApp
        </a>

        {/* Mobile menu button */}
        <button
          className="text-white md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="px-6 pb-4 space-y-3 border-t border-gray-800 md:hidden bg-darkbg">
          
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block text-gray-300 transition hover:text-white"
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}

          <a
            href={`https://wa.me/5491170607386?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block px-4 py-2 font-semibold text-center text-white rounded-lg bg-primary hover:opacity-90"
          >
            WhatsApp
          </a>

        </div>
      )}

    </nav>
  );
}

export default Navbar;
