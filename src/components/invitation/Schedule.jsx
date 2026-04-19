import React from 'react';
import { motion } from 'framer-motion';

export const Schedule = () => {
  return (
    <section className="bg-white px-6 py-16 text-center">
      <h2 className="mb-10 font-serif text-3xl text-[#7A5C12]">
        Horario
      </h2>

      <div className="mx-auto max-w-md">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-[40px] border border-[#F3D67A] bg-[#FFF8E8] px-8 py-10 shadow-sm"
        >
          <div className="mx-auto mb-4 inline-block rounded-full bg-[#F3D67A] px-5 py-2 text-xs font-bold text-[#5E4A1F] shadow-sm">
            19:30 hs
          </div>

          <p className="text-sm leading-relaxed text-[#7A5C12]">
            Te esperamos para celebrar juntos el cumpleaños de Stefano.
          </p>
        </motion.div>
      </div>
    </section>
  );
};