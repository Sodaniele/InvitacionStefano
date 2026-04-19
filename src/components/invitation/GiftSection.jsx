import React from 'react';
import { motion } from 'framer-motion';

export const GiftSection = () => (
  <section className="relative overflow-hidden bg-[#FFF8E8] px-6 py-20 text-center">
    <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#FFE082] opacity-30 blur-3xl" />

    <div className="relative z-10 mx-auto max-w-md">
      <motion.img
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        src="/Tractor1.png"
        alt="Stefano constructor"
        className="mx-auto mb-6 w-40 drop-shadow-md"
      />

      <h2 className="mb-4 font-serif text-3xl text-[#7A5C12]">
        Tu presencia es el mejor regalo
      </h2>

      <p className="mb-8 px-4 font-sans text-sm italic leading-relaxed text-[#7A5C12] opacity-80">
        Lo más importante para Stefano es compartir este día tan especial con
        las personas que lo quieren.
      </p>

      <div className="rounded-[30px] border border-[#F3D67A] bg-white/80 p-8 shadow-sm backdrop-blur-sm">
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#7A5C12]">
          ¡Te esperamos para celebrar juntos!
        </p>
      </div>
    </div>
  </section>
);