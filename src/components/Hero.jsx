function Hero() {
  const whatsappMessage = encodeURIComponent(
    "Hola ReparAr, quiero consultar por una reparación/mantenimiento de PlayStation.",
  );

  return (
    <section className="bg-[#0b1120] text-white py-28 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold leading-tight md:text-5xl">
          Servicio técnico especializado en{" "}
          <span className="text-primary">Consolas PlayStation</span>
          <br className="hidden md:block" />
          y soporte IT para{" "}
          <span className="text-primary">Estudiantes de FaCENA</span>
        </h1>

        <p className="max-w-3xl mx-auto mt-8 text-lg text-gray-400">
          Taller técnico en Corrientes Capital. Soy estudiante de Licenciatura en
          Sistemas de la Información y ofrezco reparaciones responsables,
          mantenimiento profesional y soluciones claras certificado por la UTN B.A.
          Garantía escrita en todos los trabajos.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-10">
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
    </section>
  );
}

export default Hero;
