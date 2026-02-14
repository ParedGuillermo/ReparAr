function Navbar() {
  return (
    <nav className="bg-darkbg border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold text-white">
          Repar<span className="text-primary">Ar</span>
        </h1>

        {/* Links */}
        <div className="hidden md:flex gap-8 text-gray-300 font-medium">
          <a href="#servicios" className="hover:text-white transition">
            Servicios
          </a>
          <a href="#proceso" className="hover:text-white transition">
            Cómo trabajamos
          </a>
          <a href="#contacto" className="hover:text-white transition">
            Contacto
          </a>
        </div>

        {/* Botón WhatsApp */}
        <a
          href="https://wa.me/549XXXXXXXXXX"
          target="_blank"
          className="bg-primary text-white px-5 py-2 rounded-lg font-semibold hover:opacity-90 transition"
        >
          WhatsApp
        </a>

      </div>
    </nav>
  );
}

export default Navbar;
