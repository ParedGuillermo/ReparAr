import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';

const AdminPanel = () => {
  const [numerosOcupados, setNumerosOcupados] = useState([]);
  const [nombreCliente, setNombreCliente] = useState('');
  const [numeroSeleccionado, setNumeroSeleccionado] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchOcupados();
  }, []);

  const fetchOcupados = async () => {
    const { data } = await supabase
      .from('sorteo_participantes')
      .select('*');
    if (data) setNumerosOcupados(data);
  };

  const registrarVenta = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase
      .from('sorteo_participantes')
      .insert([
        { 
          numero_elegido: numeroSeleccionado, 
          nombre_comprador: nombreCliente,
          pago_confirmado: true 
        }
      ]);

    if (error) {
      alert("Error en la base de datos: " + error.message);
    } else {
      setNombreCliente('');
      setNumeroSeleccionado(null);
      fetchOcupados();
    }
    setLoading(false);
  };

  const liberarNumero = async (id) => {
    if(!confirm("¿CONFIRMAR ELIMINACIÓN? Esta acción liberará el slot en la base de datos.")) return;
    await supabase.from('sorteo_participantes').delete().eq('id', id);
    fetchOcupados();
  };

  return (
    <div className="min-h-screen p-4 font-sans bg-slate-950 text-slate-200 md:p-10">
      
      {/* Header Estilo Centro de Comando */}
      <header className="flex flex-col justify-between max-w-6xl gap-4 mx-auto mb-10 md:flex-row md:items-end">
        <div>
          <span className="text-blue-500 font-black tracking-[0.3em] text-xs uppercase">Terminal de Control</span>
          <h1 className="mt-1 text-3xl font-black text-white md:text-4xl">REPAR.AR <span className="text-blue-600">SYSTEMS</span></h1>
        </div>
        <div className="px-4 py-2 text-xs border rounded-sm bg-slate-900 border-slate-800">
          <span className="text-gray-500">ESTADO:</span> <span className="font-bold text-green-500">ONLINE</span>
        </div>
      </header>

      <main className="grid max-w-6xl grid-cols-1 gap-8 mx-auto lg:grid-cols-12">
        
        {/* Grilla de Selección (Col 7) */}
        <div className="p-6 border rounded-sm shadow-2xl lg:col-span-7 bg-slate-900 border-slate-800">
          <h2 className="mb-6 text-sm font-bold tracking-widest text-blue-500 uppercase">Monitoreo de Slots (00-99)</h2>
          <div className="grid grid-cols-5 gap-2 sm:grid-cols-10">
            {Array.from({ length: 100 }, (_, i) => {
              const ocupado = numerosOcupados.find(p => p.numero_elegido === i);
              const isSelected = numeroSeleccionado === i;
              return (
                <button
                  key={i}
                  onClick={() => !ocupado && setNumeroSeleccionado(i)}
                  className={`h-10 text-xs font-black rounded-sm transition-all border
                    ${ocupado 
                      ? 'bg-red-950/30 border-red-900 text-red-500 cursor-not-allowed' 
                      : isSelected 
                        ? 'bg-blue-600 border-blue-400 text-white scale-110 z-10 shadow-[0_0_15px_rgba(37,99,235,0.4)]'
                        : 'bg-slate-800 border-slate-700 text-slate-400 hover:border-blue-500 hover:text-white'
                    }`}
                >
                  {i.toString().padStart(2, '0')}
                </button>
              );
            })}
          </div>
        </div>

        {/* Registro (Col 5) */}
        <div className="space-y-6 lg:col-span-5">
          <div className="p-8 border rounded-sm shadow-2xl bg-slate-900 border-slate-800">
            <h2 className="mb-6 text-sm font-bold tracking-widest text-blue-500 uppercase">Gestión de Reserva</h2>
            
            {numeroSeleccionado !== null ? (
              <form onSubmit={registrarVenta} className="space-y-5">
                <div>
                  <label className="text-[10px] text-gray-500 uppercase font-black tracking-widest">Slot Seleccionado</label>
                  <div className="text-4xl italic font-black text-white">#{numeroSeleccionado.toString().padStart(2, '0')}</div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-[10px] text-gray-500 uppercase font-black tracking-widest">Identificación Cliente</label>
                  <input 
                    type="text" 
                    placeholder="NOMBRE COMPLETO"
                    className="w-full p-3 text-sm tracking-widest text-white uppercase transition-colors border bg-slate-950 border-slate-800 focus:outline-none focus:border-blue-600"
                    value={nombreCliente}
                    onChange={(e) => setNombreCliente(e.target.value)}
                    required
                  />
                </div>

                <button 
                  disabled={loading}
                  className="w-full py-4 font-black text-xs uppercase tracking-[0.2em] text-white bg-blue-600 hover:bg-blue-500 transition-all disabled:bg-slate-800"
                >
                  {loading ? 'PROCESANDO...' : 'CONFIRMAR INGRESO'}
                </button>
                <button type="button" onClick={() => setNumeroSeleccionado(null)} className="w-full text-[10px] text-gray-600 uppercase tracking-widest hover:text-white transition-colors">Abortar Operación</button>
              </form>
            ) : (
              <div className="py-12 text-center border-2 border-dashed border-slate-800">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-600 font-bold">Seleccione un slot libre para iniciar el registro</p>
              </div>
            )}
          </div>

          {/* Estadísticas Rápidas */}
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 border bg-slate-900 border-slate-800">
              <div className="text-[10px] text-gray-500 uppercase font-black">Ocupados</div>
              <div className="text-2xl font-black text-red-500">{numerosOcupados.length}</div>
            </div>
            <div className="p-4 border bg-slate-900 border-slate-800">
              <div className="text-[10px] text-gray-500 uppercase font-black">Disponibles</div>
              <div className="text-2xl font-black text-blue-500">{100 - numerosOcupados.length}</div>
            </div>
          </div>
        </div>

        {/* Listado Maestro (Col 12) */}
        <div className="overflow-hidden border rounded-sm lg:col-span-12 bg-slate-900 border-slate-800">
          <div className="px-6 py-4 border-b border-slate-800 bg-slate-800/50">
            <h2 className="text-xs font-bold tracking-widest text-white uppercase">Registro Maestro de Participantes</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="text-[10px] uppercase tracking-widest text-gray-500 border-b border-slate-800">
                  <th className="p-4">Slot</th>
                  <th className="p-4">Nombre del Titular</th>
                  <th className="p-4 text-right">Acciones</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                {numerosOcupados.sort((a,b) => a.numero_elegido - b.numero_elegido).map(p => (
                  <tr key={p.id} className="transition-colors hover:bg-blue-600/5 group">
                    <td className="p-4 text-lg font-black text-blue-500">#{p.numero_elegido.toString().padStart(2, '0')}</td>
                    <td className="p-4 text-sm font-bold tracking-widest uppercase">{p.nombre_comprador}</td>
                    <td className="p-4 text-right">
                      <button 
                        onClick={() => liberarNumero(p.id)} 
                        className="text-[10px] font-black text-red-900 group-hover:text-red-500 uppercase tracking-widest border border-red-900/50 px-2 py-1 hover:border-red-500 transition-all"
                      >
                        Eliminar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminPanel;