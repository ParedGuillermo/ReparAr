function Footer() {
  return (
    <footer className="bg-[#0b1120] border-t border-gray-800 text-gray-400 py-16 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">

        {/* Marca */}
        <div>
          <h2 className="text-2xl font-bold text-white">
            Repar<span className="text-primary">Ar</span>
          </h2>
          <p className="mt-4 text-sm">
            Taller técnico especializado en reparación y mantenimiento de
            PC y consolas PlayStation en Corrientes Capital.
            Garantía escrita en todos los trabajos.
          </p>
        </div>

        {/* Contacto */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contacto</h3>
          <ul className="space-y-3 text-sm">
            <li>Corrientes Capital, Argentina</li>

            <li>
              <a
                href="https://wa.me/5491170607386"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                WhatsApp: 11 7060-7386
              </a>
            </li>

            <li>
              <a
                href="mailto:repararctes@gmail.com"
                className="hover:text-white transition"
              >
                repararctes@gmail.com
              </a>
            </li>
          </ul>
        </div>

        {/* Redes */}
        <div>
          <h3 className="text-white font-semibold mb-4">Redes</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <a
                href="https://instagram.com/repar_ar_"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                Instagram @repar_ar_
              </a>
            </li>

            <li>
              <a
                href="https://tiktok.com/@repar_ar"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                TikTok @repar_ar
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* Línea inferior */}
      <div className="mt-12 text-center text-xs text-gray-500 border-t border-gray-800 pt-6">
        © {new Date().getFullYear()} ReparAr — Taller técnico en Corrientes Capital
      </div>
    </footer>
  );
}

export default Footer;
