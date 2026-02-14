function Hero() {
  return (
    <section className="bg-[#0b1120] text-white py-28 px-6">
      <div className="max-w-6xl mx-auto text-center">

        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Servicio técnico especializado en{" "}
          <span className="text-primary">Consolas PlayStation</span>
          <br className="hidden md:block" />
          y soporte IT para{" "}
          <span className="text-primary">Estudiantes de FaCENA</span>
        </h1>

        <p className="mt-8 text-gray-400 max-w-3xl mx-auto text-lg">
          Taller técnico en Corrientes Capital. Soy estudiante de Licenciatura
          en Sistemas de la Información y ofrezco reparaciones responsables,
          mantenimiento profesional y soluciones claras certificado por la UTN B.A.
          Garantía escrita en todos los trabajos.
        </p>

        <div className="mt-10 flex justify-center gap-4 flex-wrap">
          <a
            href="https://wa.me/5491170607386"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-black px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition"
          >
            Consultar por WhatsApp
          </a>

          <a
            href="#servicios"
            className="border border-gray-600 px-8 py-3 rounded-lg hover:border-primary hover:text-primary transition"
          >
            Ver servicios
          </a>
        </div>

      </div>
    </section>
  );
}

export default Hero;
