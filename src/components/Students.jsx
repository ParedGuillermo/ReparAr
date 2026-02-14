function Students() {
  const whatsappMessage = encodeURIComponent(
    "Hola ReparAr, quiero consultar por soporte técnico para mi notebook de estudio.",
  );

  return (
    <section className="py-24 px-6 bg-[#0b1120] text-white">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold">
            Soporte técnico para{" "}
            <span className="text-primary">Estudiantes de Sistemas</span>
          </h2>

          <p className="max-w-2xl mx-auto mt-6 text-gray-400">
            Soy estudiante de Lic. en Sistemas de la Información y sé lo
            importante que es no quedarse sin notebook en plena cursada.
            Reparaciones responsables, mantenimiento y optimización
            pensados para estudiantes.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2">
          {/* Servicios */}
          <div className="bg-[#1e293b] p-8 rounded-xl shadow-lg">
            <h3 className="mb-6 text-2xl font-semibold text-primary">
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
          <div className="flex flex-col justify-center p-8 text-black shadow-lg bg-primary rounded-xl">
            <h3 className="mb-6 text-2xl font-bold">
              Beneficio exclusivo estudiantes
            </h3>

            <p className="mb-6">
              10% de descuento presentando constancia de alumno regular.
            </p>

            <p className="mb-8">
              Atención directa, diagnóstico claro y garantía escrita de 45 días.
            </p>

            <a
              href={`https://wa.me/5491170607386?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 font-semibold text-center text-white transition bg-black rounded-lg hover:opacity-90"
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
