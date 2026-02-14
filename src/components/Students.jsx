function Students() {
  return (
    <section className="py-24 px-6 bg-[#0b1120] text-white">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">
            Soporte técnico para{" "}
            <span className="text-primary">Estudiantes de Sistemas</span>
          </h2>

          <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
            Soy estudiante de Lic. en Sistemas de la Información y sé lo
            importante que es no quedarse sin notebook en plena cursada.
            Reparaciones responsables, mantenimiento y optimización
            pensados para estudiantes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Servicios */}
          <div className="bg-[#1e293b] p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-6 text-primary">
              Servicios para notebooks
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li>• Limpieza interna y cambio de pasta térmica</li>
              <li>• Cambio de SSD y mejora de rendimiento</li>
              <li>• Ampliación de memoria RAM</li>
              <li>• Instalación y optimización de Windows</li>
              <li>• Recuperación de archivos</li>
              <li>• Preparación para entornos de programación</li>
            </ul>
          </div>

          {/* Beneficios */}
          <div className="bg-primary text-black p-8 rounded-xl shadow-lg flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-6">
              Beneficio exclusivo estudiantes
            </h3>

            <p className="mb-6">
              10% de descuento presentando constancia de alumno regular.
            </p>

            <p className="mb-8">
              Atención directa, diagnóstico claro y garantía escrita de 45 días.
            </p>

            <a
              href="https://wa.me/5491170607386"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition text-center"
            >
              Consultar reparación
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Students;
