import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const whatsappMessage = encodeURIComponent(
    "Hola ReparAr, quiero consultar por un servicio técnico."
  );

  const navLinks = [
    { name: "Servicios", href: "#servicios" },
    { name: "Sorteos", href: "#sorteos" }, // Agregado para tu nueva sección
    { name: "Cómo trabajo", href: "#about" },
    { name: "Contacto", href: "#contacto" },
  ];

  return (
    // Cambié bg-darkbg por bg-slate-900 y text-primary por text-blue-500
    <nav className="sticky top-0 z-[100] border-b border-slate-800 bg-slate-900/95 backdrop-blur-sm">
      
      <div className="flex items-center justify-between px-6 py-4 mx-auto max-w-7xl">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold tracking-wide text-white select-none">
          Repar<span className="text-blue-500">Ar</span>
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
          className="hidden px-5 py-2 font-semibold text-white transition-all duration-200 bg-blue-600 rounded-lg md:block hover:bg-blue-500 hover:scale-105"
        >
          WhatsApp
        </a>

        {/* Mobile menu button */}
        <button
          className="p-2 text-2xl text-white md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? '✕' : '☰'}
        </button>

      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="px-6 pb-6 space-y-4 border-t border-slate-800 md:hidden bg-slate-900 animate-in fade-in slide-in-from-top-4">
          
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block py-2 text-lg text-gray-300 transition hover:text-white"
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}

          <a
            href={`https://wa.me/5491170607386?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block px-4 py-3 font-semibold text-center text-white bg-blue-600 rounded-lg"
          >
            WhatsApp
          </a>

        </div>
      )}

    </nav>
  );
}

export default Navbar;