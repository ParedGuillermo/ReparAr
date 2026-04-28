import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';

const Sorteos = () => {
  const [numerosOcupados, setNumerosOcupados] = useState([]);
  const [loading, setLoading] = useState(true);

  // Generamos los números del 00 al 99
  const numeros = Array.from({ length: 100 }, (_, i) => i);

  useEffect(() => {
    fetchNumeros();
  }, []);

  const fetchNumeros = async () => {
    const { data, error } = await supabase
      .from('sorteo_participantes')
      .select('numero_elegido');
    
    if (data) setNumerosOcupados(data.map(p => p.numero_elegido));
    setLoading(false);
  };

  const handleNumeroClick = (num) => {
    if (numerosOcupados.includes(num)) return;
    
    const mensaje = `Hola Repar.Ar! Quiero reservar el número ${num.toString().padStart(2, '0')} para el sorteo.`;
    window.open(`https://wa.me/TU_NUMERO_DE_TEL?text=${encodeURIComponent(mensaje)}`, '_blank');
  };

  return (
    <section className="px-4 py-12 text-white bg-gray-900">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="mb-4 text-3xl font-bold text-blue-500">Sorteos Repar.Ar</h2>
        <p className="mb-8 text-gray-400">Elegí tu número de la suerte (00-99). Los marcados en rojo ya tienen dueño.</p>
        
        <div className="grid grid-cols-10 gap-2">
          {numeros.map((num) => {
            const isOcupado = numerosOcupados.includes(num);
            return (
              <button
                key={num}
                onClick={() => handleNumeroClick(num)}
                className={`h-10 w-10 text-xs font-bold rounded flex items-center justify-center transition-all
                  ${isOcupado 
                    ? 'bg-red-600 cursor-not-allowed opacity-50' 
                    : 'bg-gray-800 hover:bg-blue-600 border border-gray-700'}`}
              >
                {num.toString().padStart(2, '0')}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Sorteos;