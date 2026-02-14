function Hero() {
  const whatsappMessage = encodeURIComponent(
    "Hola ReparAr, quiero consultar por una reparación/mantenimiento de PlayStation.",
  );

  return (
    <section className="bg-[#0b1120] text-white py-20 px-6">
      <div className="grid items-center max-w-6xl gap-12 mx-auto lg:grid-cols-2">
        <div className="text-center lg:text-left">
          <h1 className="text-4xl font-bold leading-tight md:text-5xl">
            Servicio técnico especializado en{" "}
            <span className="text-primary">Consolas PlayStation</span>
            <br className="hidden md:block" />
            y soporte IT para{" "}
            <span className="text-primary">Estudiantes de FaCENA</span>
          </h1>

          <p className="max-w-3xl mx-auto mt-8 text-lg text-gray-400 lg:mx-0">
            Taller técnico en Corrientes Capital. Soy estudiante de Licenciatura en
            Sistemas de la Información y ofrezco reparaciones responsables,
            mantenimiento profesional y soluciones claras certificado por la UTN B.A.
            Garantía escrita en todos los trabajos.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-10 lg:justify-start">
            <a
              href={`https://wa.me/5491170607386?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 font-semibold text-black transition rounded-lg bg-primary hover:opacity-90"
            >
              Consultar por WhatsApp
            </a>

            <a
              href="#servicios"
              className="px-8 py-3 transition border border-gray-600 rounded-lg hover:border-primary hover:text-primary"
            >
              Ver servicios
            </a>
          </div>
        </div>

        <figure className="bg-[#1e293b] border border-slate-700 rounded-2xl overflow-hidden shadow-lg">
          <img
            src="/images/hero/taller-principal.webp"
            alt="Mesa de trabajo de ReparAr con consola PlayStation en reparación"
            loading="eager"
            className="w-full h-[360px] md:h-[420px] object-cover"
            onError={(event) => {
              event.currentTarget.src = "/social-preview.svg";
            }}
          />
          <figcaption className="px-5 py-4 text-sm text-gray-300">
            Sumá tu foto en <code>public/images/hero/taller-principal.webp</code> para
            personalizar esta portada.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

export default Hero;
