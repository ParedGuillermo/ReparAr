function Services() {
  const whatsappMessage = encodeURIComponent(
    "Hola, quiero solicitar un diagnóstico para mi PlayStation. ¿Podés indicarme el costo y tiempo estimado?",
  );

  const repairCases = [
    {
      title: "Reparación de fuente · PS4",
      description:
        "Consola que no encendía. Se diagnosticó falla en la fuente de alimentación y se restauró el funcionamiento completo con pruebas de estabilidad.",
      image: "/images/servicios/ps4-fuente-despues.webp",
      fallback: "/social-preview.svg",
      alt: "PlayStation 4 reparada luego de falla de encendido",
    },
    {
      title: "Mantenimiento completo",
      description:
        "Limpieza interna profesional y reemplazo de pasta térmica para reducir temperatura, ruido y prolongar la vida útil del equipo.",
      image: "/images/servicios/ps4-limpieza-despues.webp",
      fallback: "/social-preview.svg",
      alt: "Servicio técnico realizando mantenimiento interno en PlayStation",
    },
    {
      title: "Pruebas y entrega final",
      description:
        "Verificación completa de funcionamiento, pruebas de temperatura y rendimiento. Entrega con garantía escrita de 45 días.",
      image: "/images/servicios/ps5-test-entrega.webp",
      fallback: "/social-preview.svg",
      alt: "PlayStation funcionando correctamente luego de reparación",
    },
  ];

  return (
    <section id="servicios" className="py-24 px-6 bg-[#0f172a] text-white">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-16 text-center">

          <div className="inline-block px-4 py-1 mb-4 text-sm font-medium text-primary bg-primary/10 rounded-full border border-primary/20">
            Especialista en PlayStation
          </div>

          <h2 className="text-4xl font-bold">
            Servicio técnico profesional para{" "}
            <span className="text-primary">Consolas PlayStation</span>
          </h2>

          <p className="max-w-2xl mx-auto mt-4 text-gray-400">
            Diagnóstico preciso, mantenimiento preventivo y reparación de fallas
            reales. Atención técnica especializada en Corrientes Capital.
          </p>

        </div>

        {/* Problemas + proceso */}
        <div className="grid gap-10 md:grid-cols-2">

          {/* Problemas */}
          <div className="bg-[#1e293b] p-8 rounded-xl shadow-lg border border-slate-700">

            <h3 className="mb-6 text-2xl font-semibold text-primary">
              Fallas comunes que solucionamos
            </h3>

            <ul className="space-y-4 text-gray-300">

              <li className="flex items-center gap-2">
                <span className="text-primary">●</span>
                Consola que no enciende
              </li>

              <li className="flex items-center gap-2">
                <span className="text-primary">●</span>
                Apagado repentino o sobrecalentamiento
              </li>

              <li className="flex items-center gap-2">
                <span className="text-primary">●</span>
                Luz azul o errores de arranque
              </li>

              <li className="flex items-center gap-2">
                <span className="text-primary">●</span>
                Fuente de alimentación dañada
              </li>

              <li className="flex items-center gap-2">
                <span className="text-primary">●</span>
                Botones defectuosos
              </li>

              <li className="flex items-center gap-2">
                <span className="text-primary">●</span>
                Ruido excesivo del ventilador
              </li>

              <li className="flex items-center gap-2">
                <span className="text-primary">●</span>
                Mantenimiento preventivo completo
              </li>

            </ul>

          </div>

          {/* Proceso */}
          <div className="bg-[#1e293b] p-8 rounded-xl shadow-lg border border-slate-700">

            <h3 className="mb-6 text-2xl font-semibold text-primary">
              Proceso de trabajo profesional
            </h3>

            <ol className="space-y-4 text-gray-300">

              <li>
                <span className="font-semibold text-white">
                  1. Diagnóstico técnico completo:
                </span>{" "}
                identificamos la causa real de la falla.
              </li>

              <li>
                <span className="font-semibold text-white">
                  2. Presupuesto transparente:
                </span>{" "}
                confirmás el costo antes de cualquier reparación.
              </li>

              <li>
                <span className="font-semibold text-white">
                  3. Reparación profesional:
                </span>{" "}
                servicio técnico con mantenimiento responsable.
              </li>

              <li>
                <span className="font-semibold text-white">
                  4. Entrega con garantía escrita:
                </span>{" "}
                cobertura de 45 días en todos los trabajos.
              </li>

            </ol>

            <a
              href={`https://wa.me/5491170607386?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 mt-8 font-semibold text-black transition rounded-lg bg-primary hover:opacity-90 hover:scale-[1.02] hover:shadow-lg"
            >
              Solicitar diagnóstico
            </a>

          </div>

        </div>

        {/* Casos reales */}
        <div className="mt-20">

          <div className="mb-10 text-center">

            <h3 className="text-2xl font-bold md:text-3xl">
              Casos reales de reparación
            </h3>

            <p className="mt-3 text-gray-400">
              Ejemplos de trabajos realizados en el taller ReparAr
            </p>

          </div>

          <div className="grid gap-6 md:grid-cols-3">

            {repairCases.map((item) => (
              <article
                key={item.title}
                className="bg-[#1e293b] rounded-xl overflow-hidden border border-slate-700 hover:border-primary/40 hover:shadow-lg transition duration-300"
              >

                <img
                  src={item.image}
                  alt={item.alt}
                  loading="lazy"
                  width="400"
                  height="300"
                  className="object-cover w-full h-48"
                  onError={(event) => {
                    event.currentTarget.src = item.fallback;
                  }}
                />

                <div className="p-5">

                  <h4 className="font-semibold text-white">
                    {item.title}
                  </h4>

                  <p className="mt-2 text-sm text-gray-300">
                    {item.description}
                  </p>

                </div>

              </article>
            ))}

          </div>

          {/* CTA final */}
          <div className="mt-12 text-center">

            <a
              href={`https://wa.me/5491170607386?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 font-semibold text-black transition rounded-lg bg-primary hover:scale-[1.02] hover:shadow-lg"
            >
              Consultar por mi consola ahora
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Services;
