function About() {
  return (
    <section
      id="about"
      className="px-6 py-24 text-white border-b bg-slate-950 border-slate-900"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid items-center gap-16 md:grid-cols-2">
          
          {/* Columna de Visión */}
          <div>
            <span className="text-xs font-black tracking-widest text-blue-500 uppercase">
              El Estándar Repar.Ar
            </span>
            <h2 className="mt-4 mb-8 text-4xl font-extrabold leading-tight md:text-5xl">
              Liderando la <br />
              <span className="text-blue-500 text-outline">Evolución Técnica</span>
            </h2>

            <p className="mb-6 text-lg leading-relaxed text-gray-300">
              En <span className="font-bold text-white">Repar.Ar</span> no solo reparamos dispositivos; gestionamos la integridad de su infraestructura tecnológica. Nuestra visión es establecer el laboratorio de hardware más avanzado de la región.
            </p>

            <p className="mb-10 text-gray-400">
              Combinamos habilidades manuales de alta precisión con un enfoque sistémico profesional. Cada intervención es ejecutada bajo protocolos de rigor industrial, asegurando que su equipo supere los estándares originales de fábrica.
            </p>

            {/* Métricas de Poder */}
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-slate-800">
              <div>
                <h3 className="text-4xl font-black text-blue-600">100%</h3>
                <p className="mt-1 text-xs font-bold tracking-widest text-gray-500 uppercase">Transparencia</p>
              </div>
              <div>
                <h3 className="text-4xl font-black text-blue-600">+45</h3>
                <p className="mt-1 text-xs font-bold tracking-widest text-gray-500 uppercase">Días de Garantía</p>
              </div>
            </div>
          </div>

          {/* Tarjeta de Identidad Corporativa */}
          <div className="relative">
            <div className="absolute rounded-sm opacity-25 -inset-1 bg-gradient-to-r from-blue-600 to-blue-900 blur"></div>
            <div className="relative p-10 border rounded-sm bg-slate-900 border-slate-800">
              <h3 className="mb-8 text-xl font-black uppercase tracking-[0.2em] text-blue-500">
                ADN Tecnológico
              </h3>

              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 font-bold text-blue-500 border bg-blue-600/10 border-blue-600/20">
                    I
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white uppercase">Innovación Constante</h4>
                    <p className="mt-1 text-xs text-gray-500">Actualización permanente en técnicas de microsoldadura y recuperación de datos.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 font-bold text-blue-500 border bg-blue-600/10 border-blue-600/20">
                    P
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white uppercase">Precisión Quirúrgica</h4>
                    <p className="mt-1 text-xs text-gray-500">Herramental de grado profesional para intervenciones a nivel de componente.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 font-bold text-blue-500 border bg-blue-600/10 border-blue-600/20">
                    E
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white uppercase">Escalabilidad</h4>
                    <p className="mt-1 text-xs text-gray-500">Desde mantenimiento preventivo hasta arquitectura de sistemas complejos.</p>
                  </div>
                </div>
              </div>

              <div className="pt-8 mt-12 border-t border-slate-800">
                <p className="text-[10px] text-gray-500 uppercase tracking-[0.3em] font-bold">
                  Repar.Ar // Corrientes Capital // 2026
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;