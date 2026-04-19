import React from 'react';
import { motion } from 'framer-motion';

export const Hero = () => (
  <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-[#FFF8E8] px-6">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#FFFBEF_0%,_#FFF2C8_55%,_#FDE7A1_100%)]" />

    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2 }}
      className="relative z-10 text-center"
    >
      <motion.img
        src="/Personaj1.png"
        alt="Stefano constructor"
        className="w-36 md:w-48 mx-auto mb-8 drop-shadow-xl"
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />

      <span className="text-[10px] tracking-[0.4em] uppercase text-[#9A7B18] opacity-70">
        Cumpleaños de
      </span>

      <h1 className="mt-4 mb-3 text-6xl md:text-8xl font-serif text-[#5E4A1F]">
        Stefano
      </h1>

      <p className="text-sm md:text-base tracking-[0.25em] uppercase text-[#8A6C18] font-semibold mb-8">
        cumple 3 años
      </p>

      <p className="mt-8 font-sans text-sm tracking-widest text-[#7A5C12] uppercase">
        9 . MAYO . 2026
      </p>
    </motion.div>
  </section>
);