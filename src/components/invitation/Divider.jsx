import React from 'react';
import { motion } from 'framer-motion';

export const Divider = () => (
  <div className="py-4 bg-[#FAF9F6] flex justify-center overflow-hidden px-4">
    <motion.img 
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      src="/Berretin1.png" 
      alt="Separador ropa" 
      className="w-full max-w-lg object-contain" 
    />
  </div>
);