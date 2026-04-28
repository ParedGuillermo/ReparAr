import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';

const Sorteos = () => {
  const [participantes, setParticipantes] = useState([]);
  const [formData, setFormData] = useState({ igUser: '', nombreReal: '', dni: '' });
  const [uploading, setUploading] = useState(false);

  const nombresConfianza = [
    '@fran_gonzalez', '@mauri.tech', '@gonza_v8', '@sofi_ctes', '@el_negro_ok',
    '@lucas.gaming', '@agus_sistemas', '@vale_ctes', '@rama_repair', '@lauti_gamer',
    '@facu_corrientes', '@rodri_tech_ctes', '@cami.servicios', '@mateo_dev', '@enzo_reparaciones',
    '@ale_ps4', '@marce_sistemas', '@tobi_hardware', '@fede_ctes_ok', '@santi_gaming'
  ];

  const listaTotal = [...participantes.map(p => p.nombre_comprador), ...nombresConfianza];

  useEffect(() => {
    fetchParticipantes();
  }, []);

  const fetchParticipantes = async () => {
    const { data } = await supabase
      .from('sorteo_participantes')
      .select('nombre_comprador')
      .order('created_at', { ascending: true });
    if (data) setParticipantes(data);
  };

  const handleRegistro = async (e) => {
    e.preventDefault();
    const fileInput = document.getElementById('comprobante');
    const file = fileInput.files[0];
    if (!file || !formData.igUser) return alert("SISTEMA: Error en la integridad de los datos.");

    setUploading(true);
    try {
      const fileName = `ticket-${Date.now()}-${formData.igUser.replace('@', '')}`;
      await supabase.storage.from('comprobantes').upload(fileName, file);
      await supabase.from('sorteo_participantes').insert([{ 
        numero_elegido: participantes.length + 1, 
        nombre_comprador: formData.igUser.startsWith('@') ? formData.igUser : `@${formData.igUser}`,
        nombre_real: formData.nombreReal,
        dni: formData.dni,
        comprobante_url: fileName,
        pago_confirmado: false 
      }]);
      alert("TRANSACCIÓN COMPLETADA: Ticket enviado para validación técnica.");
      setFormData({ igUser: '', nombreReal: '', dni: '' });
      fetchParticipantes();
    } catch (err) {
      alert("ERROR DE NODO: " + err.message);
    } finally {
      setUploading(false);
    }
  };

  return (
    <section id="sorteos" className="relative px-6 py-24 overflow-hidden font-sans border-t bg-slate-950 border-slate-900">
      
      {/* BACKGROUND DATA STREAM */}
      <div className="absolute inset-0 flex justify-around pointer-events-none opacity-5">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="flex flex-col gap-10 animate-stream" style={{ animationDuration: `${25 + i}s` }}>
            {listaTotal.slice(0, 12).map((name, idx) => (
              <span key={idx} className="text-blue-500 font-black text-[9px] uppercase tracking-[0.4em] rotate-90">{name}</span>
            ))}
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        
        {/* CABECERA DE PREMIOS (IMAGEN REALISTA) */}
        <div className="mb-16 group">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-[1px] flex-grow bg-slate-800"></div>
            <span className="text-blue-600 font-black tracking-[0.5em] text-[10px] uppercase">Official Prize Pool 2026</span>
            <div className="h-[1px] flex-grow bg-slate-800"></div>
          </div>
          
          <div className="relative overflow-hidden border border-slate-800 bg-slate-900">
             {/* Reemplaza 'URL_DE_TU_IMAGEN' con la ruta de la imagen que guardaste */}
             <img 
               src="https://mjwuyqzaithuynaeoflk.supabase.co/storage/v1/object/public/sorteos/Gemini_Generated_Image_vmvkwdvmvkwdvmvk.png" 
               alt="Premios Sorteo Repar.Ar" 
               className="w-full h-auto object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-700 opacity-80 group-hover:opacity-100"
             />
             <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-slate-950">
                <h2 className="text-3xl italic font-black leading-none tracking-tighter text-white uppercase md:text-5xl">
                  EQUIPAMIENTO <span className="text-blue-600">HIGH-END</span>
                </h2>
             </div>
          </div>
        </div>

        <div className="grid items-start gap-16 lg:grid-cols-2">
          
          {/* IZQUIERDA: DETALLES Y CILINDRO */}
          <div className="space-y-12">
            <div className="grid grid-cols-2 gap-4">
               {[
                 { t: "DRON DJI FLIP", s: "Mando RC2 Incluido" },
                 { t: "GALAXY TAB A9+", s: "128GB High Performance" },
                 { t: "GTX 1660 SUPER", s: "Edición Gallardo" },
                 { t: "VAPE DRAG X PLUS", s: "Power Upgrade" }
               ].map((p, i) => (
                 <div key={i} className="p-3 border-l-2 border-blue-600 bg-slate-900/30">
                   <p className="text-xs font-black tracking-tighter text-white uppercase">{p.t}</p>
                   <p className="text-slate-500 text-[9px] uppercase font-bold">{p.s}</p>
                 </div>
               ))}
            </div>

            <div className="relative h-[224px] w-full max-w-sm overflow-hidden bg-slate-900/10 border-y border-slate-800/50 backdrop-blur-sm">
              <div className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-b from-slate-950 via-transparent to-slate-950 opacity-90"></div>
              <div className="flex flex-col animate-cylinder">
                {[...listaTotal, ...listaTotal].map((user, i) => (
                  <div key={i} className="h-[56px] flex items-center justify-between px-8 border-b border-slate-900/50 group">
                    <span className="text-slate-500 font-bold text-[11px] tracking-widest group-hover:text-blue-400 transition-colors uppercase italic">
                      {user}
                    </span>
                    <span className="text-[8px] text-blue-900 font-black">ID_CONFIRMED</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex gap-8">
               <div className="text-center">
                 <p className="text-2xl italic font-black tracking-tighter text-white">3.000</p>
                 <p className="text-blue-600 text-[9px] font-black uppercase tracking-widest">Valor Ticket</p>
               </div>
               <div className="h-10 w-[1px] bg-slate-800"></div>
               <div className="text-center">
                 <p className="text-2xl italic font-black tracking-tighter text-white">00-99</p>
                 <p className="text-blue-600 text-[9px] font-black uppercase tracking-widest">Rango Numérico</p>
               </div>
            </div>
          </div>

          {/* DERECHA: FORMULARIO DE PASOS */}
          <div className="p-1 overflow-hidden border rounded-sm shadow-2xl bg-slate-900/40 border-slate-800">
            <div className="p-8 border bg-slate-950 border-slate-800">
              <form onSubmit={handleRegistro} className="space-y-8">
                
                {/* PASO 1: INSTAGRAM */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-white font-black text-[10px] uppercase italic tracking-widest">
                     <span className="bg-blue-600 text-white px-2 py-0.5 not-italic">01</span> Requisitos de Red
                  </div>
                  <div className="p-4 space-y-2 border bg-slate-900/50 border-slate-800">
                    {["Seguir a @repar_ar_", "Like & Comentar Post", "Subir a Historias"].map((t, i) => (
                      <div key={i} className="flex items-center gap-3 text-slate-400 text-[10px] font-bold uppercase tracking-tight">
                        <div className="w-1 h-1 bg-blue-600"></div> {t}
                      </div>
                    ))}
                  </div>
                </div>

                {/* PASO 2: DATA */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-white font-black text-[10px] uppercase italic tracking-widest">
                     <span className="bg-blue-600 text-white px-2 py-0.5 not-italic">02</span> Identificación
                  </div>
                  <input 
                    type="text" placeholder="@USUARIO_IG"
                    className="w-full p-4 text-xs font-black tracking-widest text-blue-500 uppercase border outline-none bg-slate-900/50 border-slate-800 focus:border-blue-600"
                    value={formData.igUser} onChange={(e) => setFormData({...formData, igUser: e.target.value})} required
                  />
                  <div className="grid grid-cols-2 gap-3">
                    <input type="text" placeholder="DNI" className="bg-slate-900/50 border border-slate-800 p-4 text-white text-[11px] font-bold uppercase outline-none focus:border-blue-600" value={formData.dni} onChange={(e) => setFormData({...formData, dni: e.target.value})} required />
                    <input type="text" placeholder="NOMBRE" className="bg-slate-900/50 border border-slate-800 p-4 text-white text-[11px] font-bold uppercase outline-none focus:border-blue-600" value={formData.nombreReal} onChange={(e) => setFormData({...formData, nombreReal: e.target.value})} required />
                  </div>
                </div>

                {/* PASO 3: PAGO */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-white font-black text-[10px] uppercase italic tracking-widest">
                     <span className="bg-blue-600 text-white px-2 py-0.5 not-italic">03</span> Transferencia
                  </div>
                  <div className="p-5 text-center border bg-slate-900/80 border-blue-900/30">
                    <p className="mb-1 text-lg italic font-black tracking-widest text-blue-500">repar.ar.ctes</p>
                    <p className="text-[9px] text-slate-600 font-bold mb-4 uppercase">Pared Walter Guillermo</p>
                    <input id="comprobante" type="file" className="text-[10px] text-slate-500 file:bg-blue-600 file:text-white file:border-0 file:px-3 file:py-1 file:font-black file:uppercase cursor-pointer" required />
                  </div>
                </div>

                <button disabled={uploading} className="w-full bg-blue-600 text-white py-5 font-black uppercase text-xs tracking-[0.5em] hover:bg-blue-500 transition-all shadow-lg active:translate-y-1">
                  {uploading ? "PROCESANDO..." : "SOLICITAR TICKET OFICIAL"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes cylinder { 0% { transform: translateY(0); } 100% { transform: translateY(-50%); } }
        .animate-cylinder { animation: cylinder 40s linear infinite; }
        @keyframes stream { 0% { transform: translateY(-100%); } 100% { transform: translateY(100%); } }
        .animate-stream { animation: stream linear infinite; }
        .text-outline { -webkit-text-stroke: 1px #2563eb; color: transparent; }
      `}</style>
    </section>
  );
};

export default Sorteos;