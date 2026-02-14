function Services() {
  const whatsappMessage = encodeURIComponent(
    "Hola ReparAr, quiero solicitar un diagnóstico para mi PlayStation.",
  );

  return (
    <section id="servicios" className="py-24 px-6 bg-[#0f172a] text-white">
      <div className="max-w-6xl mx-auto">
        {/* Título */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold">
            Reparación y Mantenimiento de{' '}
            <span className="text-primary">Consolas PlayStation</span>
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-gray-400">
            Diagnóstico preciso y soluciones profesionales para fallas comunes.
            Atención personalizada en Corrientes Capital.
          </p>
        </div>

        {/* Problemas + proceso */}
        <div className="grid gap-10 md:grid-cols-2">
          <div className="bg-[#1e293b] p-8 rounded-xl shadow-lg">
            <h3 className="mb-6 text-2xl font-semibold text-primary">
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

          <div id="proceso" className="bg-[#1e293b] p-8 rounded-xl shadow-lg">
            <h3 className="mb-6 text-2xl font-semibold text-primary">
              Cómo trabajamos
            </h3>

            <ol className="space-y-4 text-gray-300">
              <li>
                <span className="font-semibold text-white">1. Diagnóstico:</span>{' '}
                revisamos la falla y te explicamos el problema en lenguaje claro.
              </li>
              <li>
                <span className="font-semibold text-white">2. Presupuesto:</span>{' '}
                confirmamos costo y tiempos antes de avanzar con cualquier trabajo.
              </li>
              <li>
                <span className="font-semibold text-white">3. Reparación:</span>{' '}
                realizamos el servicio técnico con repuestos y mantenimiento responsable.
              </li>
              <li>
                <span className="font-semibold text-white">4. Entrega y garantía:</span>{' '}
                retirás el equipo con garantía escrita de 45 días.
              </li>
            </ol>

            <a
              href={`https://wa.me/5491170607386?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 mt-8 font-semibold text-black transition rounded-lg bg-primary hover:opacity-90"
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
