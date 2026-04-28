function Services() {
  const whatsappMessage = encodeURIComponent(
    "Hola Repar.Ar, solicito una auditoría técnica para mi equipo. ¿Cuál es el protocolo de recepción?"
  );

  const specializedUnits = [
    {
      title: "Recuperación Crítica de Datos",
      description:
        "Protocolos avanzados para restauración de información en dispositivos de almacenamiento masivo y pendrives con daños físicos.",
      icon: "💾",
    },
    {
      title: "Ingeniería de Consolas",
      description:
        "Diagnóstico y reparación estructural en PlayStation y hardware de alto rendimiento. Restauración de ciclos de refrigeración y fuentes.",
      icon: "🎮",
    },
    {
      title: "Soporte de Arquitectura Portátil",
      description:
        "Evaluación y optimización de notebooks, reemplazo de componentes SMD y mantenimiento preventivo nivel industrial.",
      icon: "💻",
    },
  ];

  return (
    <section id="servicios" className="px-6 py-24 text-white border-t bg-slate-900 border-slate-800">
      <div className="max-w-6xl mx-auto">

        {/* Header Corporativo */}
        <div className="mb-20 text-center">
          <span className="text-blue-500 font-bold tracking-[0.3em] uppercase text-sm">
            Especialización Táctica
          </span>
          <h2 className="mt-4 text-4xl font-extrabold md:text-5xl">
            Unidades de <span className="text-blue-500">Servicio Avanzado</span>
          </h2>
          <div className="w-24 h-1 mx-auto mt-6 bg-blue-600"></div>
        </div>

        {/* Grid de Servicios de Alto Nivel */}
        <div className="grid gap-8 mb-20 md:grid-cols-3">
          {specializedUnits.map((unit) => (
            <div key={unit.title} className="p-8 transition-all border rounded-sm bg-slate-800/50 border-slate-700 hover:border-blue-500 group">
              <div className="mb-6 text-4xl transition-all grayscale group-hover:grayscale-0">{unit.icon}</div>
              <h3 className="mb-4 text-xl font-bold tracking-tight text-white uppercase">{unit.title}</h3>
              <p className="text-sm leading-relaxed text-gray-400">
                {unit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Protocolo de Trabajo (Infografía de texto) */}
        <div className="p-10 border-l-4 border-blue-600 rounded-sm bg-slate-800">
          <h3 className="mb-8 text-2xl font-bold tracking-wider uppercase">Protocolo de Operación</h3>
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <span className="text-2xl font-black text-blue-500">01.</span>
              <h4 className="mt-2 text-xs font-bold tracking-widest text-gray-300 uppercase">Diagnóstico</h4>
              <p className="mt-2 text-xs text-gray-500">Identificación de fallas mediante análisis de flujo.</p>
            </div>
            <div>
              <span className="text-2xl font-black text-blue-500">02.</span>
              <h4 className="mt-2 text-xs font-bold tracking-widest text-gray-300 uppercase">Auditoría</h4>
              <p className="mt-2 text-xs text-gray-500">Presupuesto detallado antes de la intervención física.</p>
            </div>
            <div>
              <span className="text-2xl font-black text-blue-500">03.</span>
              <h4 className="mt-2 text-xs font-bold tracking-widest text-gray-300 uppercase">Intervención</h4>
              <p className="mt-2 text-xs text-gray-500">Reparación técnica bajo estándares de laboratorio.</p>
            </div>
            <div>
              <span className="text-2xl font-black text-blue-500">04.</span>
              <h4 className="mt-2 text-xs font-bold tracking-widest text-gray-300 uppercase">Garantía</h4>
              <p className="mt-2 text-xs text-gray-500">Certificación de funcionamiento por 45 días.</p>
            </div>
          </div>
        </div>

        {/* CTA Final */}
        <div className="mt-16 text-center">
          <a
            href={`https://wa.me/5491170607386?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-12 py-5 bg-blue-600 font-black uppercase tracking-widest text-sm hover:bg-blue-500 transition-all hover:tracking-[0.4em]"
          >
            Ingresar Solicitud Técnica
          </a>
        </div>

      </div>
    </section>
  );
}

export default Services;