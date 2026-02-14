function Navbar() {
  const whatsappMessage = encodeURIComponent(
    "Hola ReparAr, quiero consultar por un servicio técnico.",
  );

  return (
    <nav className="border-b border-gray-800 bg-darkbg">
      <div className="flex items-center justify-between px-6 py-4 mx-auto max-w-7xl">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-white">
          Repar<span className="text-primary">Ar</span>
        </h1>

        {/* Links */}
        <div className="hidden gap-8 font-medium text-gray-300 md:flex">
          <a href="#servicios" className="transition hover:text-white">
            Servicios
          </a>
          <a href="#proceso" className="transition hover:text-white">
            Cómo trabajamos
          </a>
          <a href="#contacto" className="transition hover:text-white">
            Contacto
          </a>
        </div>

        {/* Botón WhatsApp */}
        <a
          href={`https://wa.me/5491170607386?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2 font-semibold text-white transition rounded-lg bg-primary hover:opacity-90"
        >
          WhatsApp
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
