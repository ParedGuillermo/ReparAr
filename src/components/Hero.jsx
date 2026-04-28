function Hero() {
  const whatsappMessage = encodeURIComponent(
    "Hola ReparAr, solicito presupuesto para un servicio técnico de alta complejidad."
  );

  return (
    <section id="inicio" className="relative px-6 py-24 overflow-hidden text-white bg-slate-900">

      {/* Glow decorativo */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute bg-blue-600 rounded-full w-96 h-96 blur-3xl top-10 left-10"></div>
      </div>

      <div className="relative grid items-center max-w-6xl gap-12 mx-auto lg:grid-cols-2">

        {/* TEXTO */}
        <div className="text-center lg:text-left">

          {/* Badge de Autoridad Corporativa */}
          <div className="inline-block px-4 py-1 mb-6 text-sm font-bold tracking-widest text-blue-400 uppercase border rounded-md bg-blue-400/10 border-blue-400/30">
            Laboratorio de Ingeniería Electrónica & Datos
          </div>

          {/* Título de Impacto */}
          <h1 className="text-4xl font-extrabold leading-tight md:text-5xl lg:text-7xl">
            Dominio Técnico <br />
            <span className="text-blue-500">
              Sin Fronteras
            </span>
          </h1>

          {/* Subtítulo: Foco en Soluciones de Alto Valor */}
          <p className="max-w-xl mx-auto mt-6 text-xl leading-relaxed text-gray-300 lg:mx-0">
            Especialistas en recuperación crítica de datos, microsoldadura avanzada 
            y arquitectura de hardware. Elevamos el estándar del soporte técnico en Corrientes.
          </p>

          {/* Pilares del Imperio */}
          <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm font-semibold text-gray-400 lg:justify-start">
            <span className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
              DATA RECOVERY
            </span>
            <span className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
              ADVANCED MICROSOLDERING
            </span>
            <span className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
              TECH CONSULTANCY
            </span>
          </div>

          {/* Botones de Acción */}
          <div className="flex flex-wrap justify-center gap-4 mt-12 lg:justify-start">

            <a
              href={`https://wa.me/5491170607386?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 font-bold text-white transition-all duration-300 rounded-sm bg-blue-600 hover:bg-blue-500 hover:shadow-[0_0_20px_rgba(37,99,235,0.5)]"
            >
              SOLICITAR DIAGNÓSTICO
            </a>

            <a
              href="#servicios"
              className="px-10 py-4 font-bold transition-all duration-300 border-2 rounded-sm border-slate-700 hover:border-blue-500 hover:text-blue-500"
            >
              PORTFOLIO DE SERVICIOS
            </a>

          </div>

        </div>

        {/* IMAGEN: Estética de Laboratorio */}
        <figure className="relative overflow-hidden border-2 rounded-lg shadow-2xl bg-slate-800 border-slate-700">

          <img
            src="/images/hero/taller-principal.webp"
            alt="Laboratorio de Repar.Ar"
            className="w-full h-[400px] lg:h-[500px] object-cover transition duration-700 hover:scale-110 grayscale-[30%] hover:grayscale-0"
            onError={(e) => {
              e.currentTarget.src = "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000"; 
            }}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>

          <figcaption className="absolute bottom-4 left-6 text-xs tracking-[0.2em] text-blue-400 font-bold uppercase">
            Repar.Ar Corrientes // High-End Technology Service
          </figcaption>

        </figure>

      </div>

    </section>
  );
}

export default Hero;