function About() {
  return (
    <section
      id="about"
      className="py-24 px-6 bg-[#020617] text-white"
    >
      <div className="max-w-6xl mx-auto">

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Texto */}
          <div>
            <h2 className="text-4xl font-bold mb-6">
              Cómo <span className="text-primary">trabajo</span>
            </h2>

            <p className="text-gray-400 mb-4">
              ReparAr es un servicio técnico profesional enfocado en
              diagnósticos precisos y soluciones reales.
            </p>

            <p className="text-gray-400 mb-6">
              Cada equipo pasa por un proceso claro para garantizar
              resultados confiables y duraderos.
            </p>

            {/* Indicadores */}
            <div className="grid grid-cols-2 gap-6 mt-8">

              <div>
                <h3 className="text-3xl font-bold text-primary">1</h3>
                <p className="text-gray-400 text-sm">Diagnóstico completo</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-primary">2</h3>
                <p className="text-gray-400 text-sm">Presupuesto claro</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-primary">3</h3>
                <p className="text-gray-400 text-sm">Reparación profesional</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-primary">4</h3>
                <p className="text-gray-400 text-sm">Entrega con garantía</p>
              </div>

            </div>
          </div>

          {/* Panel */}
          <div className="bg-[#0b1120] p-8 rounded-xl border border-gray-800">

            <h3 className="text-xl font-semibold mb-4 text-primary">
              Proceso de trabajo
            </h3>

            <ul className="space-y-3 text-gray-400 text-sm">
              <li>• Evaluación técnica completa</li>
              <li>• Explicación clara del problema</li>
              <li>• Reparación con herramientas profesionales</li>
              <li>• Pruebas de funcionamiento</li>
              <li>• Garantía escrita</li>
            </ul>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;
