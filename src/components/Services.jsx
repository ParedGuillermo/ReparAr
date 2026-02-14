function Services() {
  return (
    <section id="servicios" className="py-24 px-6 bg-[#0f172a] text-white">
      <div className="max-w-6xl mx-auto">

        {/* Título */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">
            Reparación y Mantenimiento de{" "}
            <span className="text-primary">Consolas PlayStation</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Diagnóstico preciso y soluciones profesionales para fallas comunes.
            Atención personalizada en Corrientes Capital.
          </p>
        </div>

        {/* Problemas comunes */}
        <div className="grid md:grid-cols-2 gap-10">

          <div className="bg-[#1e293b] p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-6 text-primary">
              Problemas que reparamos
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li>• La consola no enciende</li>
              <li>• Se apaga sola o se sobrecalienta</li>
              <li>• Luz azul o errores de arranque</li>
              <li>• Fuente dañada</li>
              <li>• Botones que no funcionan</li>
              <li>• Limpieza interna y cambio de pasta térmica</li>
            </ul>
          </div>

          {/* Información técnica */}
          <div className="bg-[#1e293b] p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-6 text-primary">
              Servicio técnico profesional
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li>• 5 años de experiencia en reparación</li>
              <li>• Garantía escrita de 45 días</li>
              <li>• Diagnóstico responsable</li>
              <li>• Atención directa con el técnico</li>
              <li>• Precio base mantenimiento desde $25.000</li>
            </ul>

            <a
              href="https://wa.me/5491170607386"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-8 bg-primary text-black px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition"
            >
              Solicitar diagnóstico
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Services;
