import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const Predictions = () => {
  const [form, setForm] = useState({
    deseo: '',
    feliz: '',
    mensaje: '',
  });

  const phoneNumber = '5493364007281';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSendWhatsApp = () => {
    const message = `
💛 Mensajito para Stefano 💛

¿Qué le deseás?
${form.deseo || '-'}

¿Qué creés que le hará más feliz?
${form.feliz || '-'}

Mensaje especial:
${form.mensaje || '-'}
    `.trim();

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section className="relative overflow-hidden bg-[#FFF8E8] px-6 py-20 text-center">
      <div className="absolute -left-20 top-0 h-64 w-64 rounded-full bg-[#FFE082] opacity-20 blur-3xl" />
      <div className="absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-[#FFD54F] opacity-20 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-3 font-serif text-4xl italic text-[#7A5C12]"
        >
          Dejale un mensajito a Stefano
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
          className="mx-auto mb-12 max-w-2xl text-sm leading-relaxed text-[#7A5C12] opacity-80"
        >
          Podés escribirle un deseo lindo, contar qué pensás que le hará más feliz
          o dejarle unas palabras especiales para su cumpleaños.
        </motion.p>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[38px] border border-[#F3D67A]/60 bg-white p-8 shadow-sm"
          >
            <img
              src="/Tractor4.png"
              alt="Tractor decorativo"
              className="mx-auto mb-5 w-24 drop-shadow-md"
            />
            <p className="mb-4 text-sm font-bold text-[#7A5C12]">
              ¿Qué le deseás a Stefano?
            </p>
            <textarea
              name="deseo"
              value={form.deseo}
              onChange={handleChange}
              placeholder="Escribí tu deseo..."
              className="min-h-[120px] w-full rounded-[22px] border border-[#F3D67A] bg-[#FFFDF8] px-4 py-4 text-sm text-[#7A5C12] outline-none transition placeholder:opacity-40 focus:border-[#D4A72C] focus:ring-2 focus:ring-[#F3D67A]/40"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="rounded-[38px] border border-[#F3D67A]/60 bg-white p-8 shadow-sm"
          >
            <img
              src="/Cono1.png"
              alt="Personaje decorativo"
              className="mx-auto mb-5 w-24 drop-shadow-md"
            />
            <p className="mb-4 text-sm font-bold text-[#7A5C12]">
              ¿Qué creés que le hará más feliz?
            </p>
            <textarea
              name="feliz"
              value={form.feliz}
              onChange={handleChange}
              placeholder="Ej: jugar, soplar la vela, reírse mucho..."
              className="min-h-[120px] w-full rounded-[22px] border border-[#F3D67A] bg-[#FFFDF8] px-4 py-4 text-sm text-[#7A5C12] outline-none transition placeholder:opacity-40 focus:border-[#D4A72C] focus:ring-2 focus:ring-[#F3D67A]/40"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="rounded-[38px] border border-[#F3D67A]/60 bg-white p-8 shadow-sm"
          >
            <img
              src="/Tractor2.png"
              alt="Grúa decorativa"
              className="mx-auto mb-5 w-24 drop-shadow-md"
            />
            <p className="mb-4 text-sm font-bold text-[#7A5C12]">
              Dejale un mensajito especial
            </p>
            <textarea
              name="mensaje"
              value={form.mensaje}
              onChange={handleChange}
              placeholder="Escribí aquí tu mensajito..."
              className="min-h-[120px] w-full rounded-[22px] border border-[#F3D67A] bg-[#FFFDF8] px-4 py-4 text-sm text-[#7A5C12] outline-none transition placeholder:opacity-40 focus:border-[#D4A72C] focus:ring-2 focus:ring-[#F3D67A]/40"
            />
          </motion.div>
        </div>

        <motion.button
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={handleSendWhatsApp}
          className="mt-12 rounded-full bg-[#7A5C12] px-10 py-4 text-xs font-bold uppercase tracking-[0.25em] text-white shadow-lg transition"
        >
          Enviar mensajito por WhatsApp
        </motion.button>
      </div>
    </section>
  );
};