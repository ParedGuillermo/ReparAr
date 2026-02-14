function Services() {
  const whatsappMessage = encodeURIComponent(
    "Hola ReparAr, quiero solicitar un diagnóstico para mi PlayStation.",
  );

  const repairCases = [
    {
      title: "Caso 1 · Fuente de PS4",
      description: "Consola que no encendía. Se diagnosticó y reparó la fuente.",
      image: "/images/servicios/ps4-fuente-despues.webp",
      fallback: "/social-preview.svg",
      alt: "PlayStation 4 reparada luego de una falla en la fuente",
    },
    {
      title: "Caso 2 · Limpieza y mantenimiento",
      description: "Limpieza interna completa y cambio de pasta térmica.",
      image: "/images/servicios/ps4-limpieza-despues.webp",
      fallback: "/social-preview.svg",
      alt: "Consola PlayStation abierta durante mantenimiento técnico",
    },
    {
      title: "Caso 3 · Diagnóstico y entrega",
      description: "Pruebas finales y entrega con garantía escrita de 45 días.",
      image: "/images/servicios/ps5-test-entrega.webp",
      fallback: "/social-preview.svg",
      alt: "Consola PlayStation lista para entrega después de reparación",
    },
  ];

  return (
    <section id="servicios" className="py-24 px-6 bg-[#0f172a] text-white">
      <div className="max-w-6xl mx-auto">
        {/* Título */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold">
            Reparación y Mantenimiento de{" "}
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
                <span className="font-semibold text-white">1. Diagnóstico:</span>{" "}
                revisamos la falla y te explicamos el problema en lenguaje claro.
              </li>
              <li>
                <span className="font-semibold text-white">2. Presupuesto:</span>{" "}
                confirmamos costo y tiempos antes de avanzar con cualquier trabajo.
              </li>
              <li>
                <span className="font-semibold text-white">3. Reparación:</span>{" "}
                realizamos el servicio técnico con repuestos y mantenimiento
                responsable.
              </li>
              <li>
                <span className="font-semibold text-white">4. Entrega y garantía:</span>{" "}
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

        {/* Casos reales */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center md:text-3xl">
            Casos reales de reparación
          </h3>
          <p className="max-w-3xl mx-auto mt-3 text-center text-gray-400">
            Guardá tus fotos en <code>public/images/servicios/</code> con estos
            nombres para que aparezcan automáticamente.
          </p>

          <div className="grid gap-6 mt-8 md:grid-cols-3">
            {repairCases.map((item) => (
              <article key={item.title} className="bg-[#1e293b] rounded-xl overflow-hidden border border-slate-700">
                <img
                  src={item.image}
                  alt={item.alt}
                  loading="lazy"
                  className="object-cover w-full h-48"
                  onError={(event) => {
                    event.currentTarget.src = item.fallback;
                  }}
                />
                <div className="p-5">
                  <h4 className="font-semibold text-white">{item.title}</h4>
                  <p className="mt-2 text-sm text-gray-300">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
