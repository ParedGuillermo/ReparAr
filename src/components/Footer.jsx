function Footer() {
  const whatsappMessage = encodeURIComponent(
    "Hola Repar.Ar, solicito información sobre sus servicios de ingeniería y soporte técnico.",
  );

  return (
    <footer
      id="contacto"
      className="px-6 py-20 font-sans border-t bg-slate-950 border-slate-900 text-slate-500"
    >
      <div className="grid max-w-6xl gap-12 mx-auto md:grid-cols-4">
        
        {/* Columna 1: Identidad */}
        <div className="md:col-span-2">
          <h2 className="text-2xl italic font-black tracking-tighter text-white">
            REPAR.<span className="text-blue-600">AR</span>
          </h2>
          <p className="max-w-sm mt-6 text-sm leading-relaxed">
            Laboratorio especializado en arquitectura de hardware y recuperación crítica de datos. 
            Elevando el estándar del soporte técnico profesional en la región.
          </p>
          <div className="flex gap-4 mt-8">
             <div className="h-[1px] w-12 bg-blue-600 self-center"></div>
             <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-500">Corrientes Capital</span>
          </div>
        </div>

        {/* Columna 2: Canales Oficiales */}
        <div>
          <h3 className="mb-6 text-xs font-black tracking-widest text-white uppercase">Soporte Directo</h3>
          <ul className="space-y-4 text-xs">
            <li>
              <a
                href={`https://wa.me/5491170607386?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col gap-1 transition-colors hover:text-blue-500"
              >
                <span className="text-gray-600 font-bold uppercase text-[9px]">WhatsApp Business</span>
                +54 9 11 7060-7386
              </a>
            </li>
            <li>
              <a
                href="mailto:repararctes@gmail.com"
                className="flex flex-col gap-1 transition-colors hover:text-blue-500"
              >
                <span className="text-gray-600 font-bold uppercase text-[9px]">Email Corporativo</span>
                repararctes@gmail.com
              </a>
            </li>
          </ul>
        </div>

        {/* Columna 3: Ecosistema Digital */}
        <div>
          <h3 className="mb-6 text-xs font-black tracking-widest text-white uppercase">Ecosistema</h3>
          <ul className="space-y-4 text-xs">
            <li>
              <a
                href="https://instagram.com/repar_ar_"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold tracking-widest uppercase transition-colors hover:text-blue-500"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://tiktok.com/@repar_ar"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold tracking-widest uppercase transition-colors hover:text-blue-500"
              >
                TikTok
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Legal/Copyright */}
      <div className="flex flex-col items-center justify-between max-w-6xl gap-4 pt-10 mx-auto mt-20 border-t border-slate-900 md:flex-row">
        <p className="text-[10px] font-bold uppercase tracking-[0.2em]">
          © {new Date().getFullYear()} REPAR.AR // HIGH-END TECHNOLOGY SERVICE
        </p>
        <p className="text-[9px] text-slate-700 uppercase tracking-widest italic">
          Desarrollado por Repar.Ar Systems
        </p>
      </div>
    </footer>
  );
}

export default Footer;