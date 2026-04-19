import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const RSVPForm = () => {
  const [form, setForm] = useState({
    nombre: '',
    asistencia: 'Sí, iremos',
    adultos: '',
    ninos: '',
  });

  const phoneNumber = '34603273763';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSendWhatsApp = (e) => {
    e.preventDefault();

    const message = `
🎉 Confirmación cumpleaños de Stefano 🎉

Nombre o familia:
${form.nombre || '-'}

Asistencia:
${form.asistencia || '-'}

Cantidad de adultos:
${form.adultos || '-'}

Cantidad de niños:
${form.ninos || '-'}
    `.trim();

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <motion.form
      onSubmit={handleSendWhatsApp}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mx-auto w-full max-w-lg"
    >
      <div className="space-y-5 text-left">
        <div>
          <label className="mb-2 block text-xs font-bold uppercase tracking-[0.2em] text-[#7A5C12]">
            Nombre o familia
          </label>
          <input
            type="text"
            name="nombre"
            value={form.nombre}
            onChange={handleChange}
            placeholder="Ej: Maria, Daniel e hijos"
            className="w-full rounded-[22px] border border-[#F3D67A] bg-white px-5 py-4 text-sm text-[#7A5C12] outline-none transition placeholder:opacity-40 focus:border-[#D4A72C] focus:ring-2 focus:ring-[#F3D67A]/40"
            required
          />
        </div>

        <div>
          <label className="mb-2 block text-xs font-bold uppercase tracking-[0.2em] text-[#7A5C12]">
            Asistencia
          </label>
          <select
            name="asistencia"
            value={form.asistencia}
            onChange={handleChange}
            className="w-full rounded-[22px] border border-[#F3D67A] bg-white px-5 py-4 text-sm text-[#7A5C12] outline-none transition focus:border-[#D4A72C] focus:ring-2 focus:ring-[#F3D67A]/40"
          >
            <option>Sí, iremos</option>
            <option>No podremos asistir</option>
            <option>Lo confirmamos pronto</option>
          </select>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-xs font-bold uppercase tracking-[0.2em] text-[#7A5C12]">
              Adultos
            </label>
            <input
              type="number"
              min="0"
              name="adultos"
              value={form.adultos}
              onChange={handleChange}
              placeholder="0"
              className="w-full rounded-[22px] border border-[#F3D67A] bg-white px-5 py-4 text-sm text-[#7A5C12] outline-none transition placeholder:opacity-40 focus:border-[#D4A72C] focus:ring-2 focus:ring-[#F3D67A]/40"
            />
          </div>

          <div>
            <label className="mb-2 block text-xs font-bold uppercase tracking-[0.2em] text-[#7A5C12]">
              Niños
            </label>
            <input
              type="number"
              min="0"
              name="ninos"
              value={form.ninos}
              onChange={handleChange}
              placeholder="0"
              className="w-full rounded-[22px] border border-[#F3D67A] bg-white px-5 py-4 text-sm text-[#7A5C12] outline-none transition placeholder:opacity-40 focus:border-[#D4A72C] focus:ring-2 focus:ring-[#F3D67A]/40"
            />
          </div>
        </div>
      </div>

      <div className="mt-8 text-center">
        <motion.button
          type="submit"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="rounded-full bg-[#7A5C12] px-10 py-4 text-xs font-bold uppercase tracking-[0.25em] text-white shadow-lg transition"
        >
          Confirmar por WhatsApp
        </motion.button>
      </div>
    </motion.form>
  );
};