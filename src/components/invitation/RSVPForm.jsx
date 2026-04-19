import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const RSVPForm = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    
    // Simulación de envío
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  if (status === 'success') {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-10 px-4"
      >
        <div className="text-4xl mb-4">🍼</div>
        <h3 className="font-serif text-2xl text-[#546E7A] mb-2">¡Gracias por confirmar!</h3>
        <p className="text-sm text-[#546E7A] opacity-70">Estamos deseando verte en el Baby Shower de Leo.</p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6 p-2">
      <div className="flex flex-col gap-2">
        <label className="text-[10px] uppercase tracking-[0.2em] text-[#546E7A] font-bold ml-2">Nombre Completo</label>
        <input 
          required
          type="text" 
          placeholder="Ej: Maria y Daniel"
          className="bg-white border border-[#E3F2FD] rounded-full px-6 py-3 text-sm outline-none focus:border-[#546E7A] transition-colors text-[#546E7A]"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-[10px] uppercase tracking-[0.2em] text-[#546E7A] font-bold ml-2">¿Venís a la fiesta?</label>
        <select className="bg-white border border-[#E3F2FD] rounded-full px-6 py-3 text-sm outline-none focus:border-[#546E7A] transition-colors text-[#546E7A] appearance-none">
          <option>Sí, ahí estaré!</option>
          <option>Perdón, no puedo ir</option>
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-[10px] uppercase tracking-[0.2em] text-[#546E7A] font-bold ml-2">Número de Adultos</label>
        <input 
          type="number" 
          min="1" 
          defaultValue="1"
          className="bg-white border border-[#E3F2FD] rounded-full px-6 py-3 text-sm outline-none focus:border-[#546E7A] transition-colors text-[#546E7A]"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-[10px] uppercase tracking-[0.2em] text-[#546E7A] font-bold ml-2">Alergias o comentarios</label>
        <textarea 
          placeholder="Contanos si tenes alguna alergia o comentario..."
          className="bg-white border border-[#E3F2FD] rounded-[25px] px-6 py-4 text-sm outline-none focus:border-[#546E7A] transition-colors text-[#546E7A] min-h-[100px] resize-none"
        />
      </div>

      <motion.button
        whileTap={{ scale: 0.95 }}
        type="submit"
        disabled={status === 'sending'}
        className="bg-[#546E7A] text-white rounded-full py-4 text-[11px] uppercase tracking-[0.3em] font-bold mt-4 hover:bg-[#E3F2FD] hover:text-[#546E7A] transition-all shadow-md disabled:opacity-50"
      >
        {status === 'sending' ? 'Enviando...' : 'Confirmar Asistencia'}
      </motion.button>
    </form>
  );
};