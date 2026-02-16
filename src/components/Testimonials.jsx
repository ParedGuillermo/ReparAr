function Testimonials() {
  const testimonials = [
    {
      name: "Juan Pérez",
      text: "Mi notebook se apagaba sola. ReparAr encontró la falla y ahora funciona perfecto. Muy recomendable.",
    },
    {
      name: "Lucía Fernández",
      text: "Excelente servicio. Limpió mi PlayStation y dejó de hacer ruido. Atención profesional.",
    },
    {
      name: "Martín Gómez",
      text: "Diagnóstico claro y sin vueltas. Reparó mi PC rápido y con garantía.",
    },
  ];

  return (
    <section className="py-24 px-6 bg-[#020617] text-white">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-16">

          <h2 className="text-4xl font-bold">
            Opiniones de <span className="text-primary">clientes</span>
          </h2>

          <p className="mt-4 text-gray-400">
            Experiencias reales de personas que confiaron en ReparAr
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-6">

          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-[#1e293b] p-6 rounded-xl border border-slate-700"
            >

              <p className="text-gray-300 mb-4">
                "{item.text}"
              </p>

              <p className="font-semibold text-primary">
                — {item.name}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Testimonials;
