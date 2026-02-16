function Hero() {
  const whatsappMessage = encodeURIComponent(
    "Hola ReparAr, quiero consultar por una reparación o mantenimiento."
  );

  return (
    <section className="relative bg-darkbg text-white py-24 px-6 overflow-hidden">

      {/* Glow decorativo */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute w-96 h-96 bg-primary rounded-full blur-3xl top-10 left-10"></div>
      </div>

      <div className="relative grid items-center max-w-6xl gap-12 mx-auto lg:grid-cols-2">

        {/* TEXTO */}
        <div className="text-center lg:text-left">

          {/* Badge autoridad */}
          <div className="inline-block px-4 py-1 mb-6 text-sm font-medium text-primary bg-primary/10 rounded-full border border-primary/20">
            Técnico certificado UTN • Estudiante de Sistemas
          </div>

          {/* Título */}
          <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            Servicio técnico especializado en{" "}
            <span className="text-primary">
              PlayStation y notebooks
            </span>
          </h1>

          {/* Subtítulo */}
          <p className="max-w-xl mx-auto mt-6 text-lg text-gray-400 lg:mx-0">
            Reparación profesional en Corrientes Capital. Diagnóstico preciso,
            mantenimiento completo y soluciones confiables con garantía escrita.
          </p>

          {/* Confianza */}
          <div className="flex flex-wrap justify-center gap-6 mt-6 text-sm text-gray-400 lg:justify-start">
            <span>✓ Garantía escrita 45 días</span>
            <span>✓ Atención personalizada</span>
            <span>✓ Diagnóstico profesional</span>
          </div>

          {/* Botones */}
          <div className="flex flex-wrap justify-center gap-4 mt-10 lg:justify-start">

            <a
              href={`https://wa.me/5491170607386?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 font-semibold text-black transition-all duration-200 rounded-lg bg-primary hover:scale-105 hover:shadow-lg hover:shadow-primary/30"
            >
              Consultar por WhatsApp
            </a>

            <a
              href="#servicios"
              className="px-8 py-4 transition-all duration-200 border border-gray-600 rounded-lg hover:border-primary hover:text-primary hover:scale-105"
            >
              Ver servicios
            </a>

          </div>

          {/* Prueba social */}
          <p className="mt-6 text-sm text-gray-500">
            Servicio técnico independiente en Corrientes Capital
          </p>

        </div>

        {/* IMAGEN */}
        <figure className="relative overflow-hidden border shadow-2xl bg-slate-800 border-slate-700 rounded-2xl">

          <img
            src="/images/hero/taller-principal.webp"
            alt="Técnico ReparAr realizando mantenimiento en consola PlayStation"
            loading="eager"
            decoding="async"
            className="w-full h-[360px] md:h-[420px] object-cover transition duration-500 hover:scale-105"
            onError={(event) => {
              event.currentTarget.src = "/social-preview.svg";
            }}
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

          <figcaption className="absolute bottom-0 px-5 py-4 text-sm text-gray-300">
            Taller técnico ReparAr — Corrientes Capital
          </figcaption>

        </figure>

      </div>

    </section>
  );
}

export default Hero;
