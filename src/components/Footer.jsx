function Footer() {
  const whatsappMessage = encodeURIComponent(
    "Hola ReparAr, quiero hacer una consulta por servicio técnico.",
  );

  return (
    <footer
      id="contacto"
      className="bg-[#0b1120] border-t border-gray-800 text-gray-400 py-16 px-6"
    >
      <div className="grid max-w-6xl gap-10 mx-auto md:grid-cols-3">
        {/* Marca */}
        <div>
          <h2 className="text-2xl font-bold text-white">
            Repar<span className="text-primary">Ar</span>
          </h2>
          <p className="mt-4 text-sm">
            Taller técnico especializado en reparación y mantenimiento de PC y
            consolas PlayStation en Corrientes Capital. Garantía escrita en todos
            los trabajos.
          </p>
        </div>

        {/* Contacto */}
        <div>
          <h3 className="mb-4 font-semibold text-white">Contacto</h3>
          <ul className="space-y-3 text-sm">
            <li>Corrientes Capital, Argentina</li>

            <li>
              <a
                href={`https://wa.me/5491170607386?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-white"
              >
                WhatsApp: 11 7060-7386
              </a>
            </li>

            <li>
              <a
                href="mailto:repararctes@gmail.com"
                className="transition hover:text-white"
              >
                repararctes@gmail.com
              </a>
            </li>
          </ul>
        </div>

        {/* Redes */}
        <div>
          <h3 className="mb-4 font-semibold text-white">Redes</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <a
                href="https://instagram.com/repar_ar_"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-white"
              >
                Instagram @repar_ar_
              </a>
            </li>

            <li>
              <a
                href="https://tiktok.com/@repar_ar"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-white"
              >
                TikTok @repar_ar
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Línea inferior */}
      <div className="pt-6 mt-12 text-xs text-center text-gray-500 border-t border-gray-800">
        © {new Date().getFullYear()} ReparAr — Taller técnico en Corrientes Capital
      </div>
    </footer>
  );
}

export default Footer;
