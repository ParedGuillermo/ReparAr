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
      alert("Error al registrar: " + error.message);
    } else {
      setNombreCliente('');
      setNumeroSeleccionado(null);
      fetchOcupados();
      alert("¡Número registrado con éxito!");
    }
    setLoading(false);
  };

  const liberarNumero = async (id) => {
    if(!confirm("¿Seguro querés liberar este número?")) return;
    await supabase.from('sorteo_participantes').delete().eq('id', id);
    fetchOcupados();
  };

  return (
    <div className="min-h-screen p-6 text-gray-800 bg-gray-100">
      <h1 className="pb-2 mb-6 text-2xl font-bold text-blue-700 border-b">Panel Admin: Repar.Ar Sorteos</h1>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* Grilla de Selección */}
        <div>
          <h2 className="mb-4 text-lg font-semibold text-gray-700">Estado de la Grilla</h2>
          <div className="grid grid-cols-10 gap-1 p-4 bg-white rounded-lg shadow">
            {Array.from({ length: 100 }, (_, i) => {
              const ocupado = numerosOcupados.find(p => p.numero_elegido === i);
              return (
                <button
                  key={i}
                  onClick={() => !ocupado && setNumeroSeleccionado(i)}
                  className={`h-8 text-xs font-bold rounded ${
                    ocupado ? 'bg-red-500 text-white' : 'bg-green-100 text-green-700 hover:bg-green-200'
                  } ${numeroSeleccionado === i ? 'ring-2 ring-blue-500' : ''}`}
                  title={ocupado ? `Comprador: ${ocupado.nombre_comprador}` : 'Libre'}
                >
                  {i.toString().padStart(2, '0')}
                </button>
              );
            })}
          </div>
        </div>

        {/* Formulario de Registro */}
        <div className="self-start p-6 bg-white rounded-lg shadow">
          <h2 className="mb-4 text-lg font-semibold text-gray-700">Registrar Nueva Venta</h2>
          {numeroSeleccionado !== null ? (
            <form onSubmit={registrarVenta} className="space-y-4">
              <p className="text-sm font-medium">Registrando número: <span className="text-xl font-bold text-blue-600">{numeroSeleccionado.toString().padStart(2, '0')}</span></p>
              <input 
                type="text" 
                placeholder="Nombre del Cliente"
                className="w-full p-2 border rounded"
                value={nombreCliente}
                onChange={(e) => setNombreCliente(e.target.value)}
                required
              />
              <button 
                disabled={loading}
                className="w-full py-2 font-bold text-white bg-blue-600 rounded hover:bg-blue-700 disabled:bg-gray-400"
              >
                {loading ? 'Guardando...' : 'Confirmar Pago'}
              </button>
              <button type="button" onClick={() => setNumeroSeleccionado(null)} className="w-full text-sm text-gray-500">Cancelar</button>
            </form>
          ) : (
            <p className="py-10 italic text-center text-gray-400">Tocá un número verde en la grilla para registrar una venta.</p>
          )}
        </div>
      </div>

      {/* Lista de Ventas */}
      <div className="mt-10 overflow-hidden bg-white rounded-lg shadow">
        <table className="w-full text-left">
          <thead className="border-b bg-gray-50">
            <tr>
              <th className="p-3 text-sm">N°</th>
              <th className="p-3 text-sm">Comprador</th>
              <th className="p-3 text-sm text-right">Acción</th>
            </tr>
          </thead>
          <tbody>
            {numerosOcupados.sort((a,b) => a.numero_elegido - b.numero_elegido).map(p => (
              <tr key={p.id} className="border-b hover:bg-gray-50">
                <td className="p-3 font-bold text-blue-600">{p.numero_elegido.toString().padStart(2, '0')}</td>
                <td className="p-3 text-sm">{p.nombre_comprador}</td>
                <td className="p-3 text-right">
                  <button onClick={() => liberarNumero(p.id)} className="text-xs text-red-500 hover:underline">Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminPanel;