import React from 'react';
import { motion } from 'framer-motion';

export const SplashScreen = ({ onOpen }) => {
  const clouds = [
    { id: 1, top: '8%', left: '-20%', duration: 26, delay: 0, width: 'w-40 md:w-56' },
    { id: 2, top: '24%', left: '-35%', duration: 32, delay: -8, width: 'w-52 md:w-72' },
    { id: 3, top: '58%', left: '-25%', duration: 28, delay: -14, width: 'w-44 md:w-60' },
    { id: 4, top: '78%', left: '-30%', duration: 36, delay: -5, width: 'w-56 md:w-80' },
  ];

  return (
    <motion.div
      exit={{ y: '-100%', opacity: 0 }}
      transition={{ duration: 1.2, ease: [0.43, 0.13, 0.23, 0.96] }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden bg-[#FFF8E8]"
    >
      {/* Fondo suave */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#FFFDF6_0%,_#FFF4CC_35%,_#FFE7A3_100%)]" />

      {/* Nubes en movimiento */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {clouds.map((cloud) => (
          <motion.div
            key={cloud.id}
            initial={{ x: '-150%' }}
            animate={{ x: '150vw' }}
            transition={{
              duration: cloud.duration,
              repeat: Infinity,
              ease: 'linear',
              delay: cloud.delay,
            }}
            className={`absolute ${cloud.width} opacity-80`}
            style={{ top: cloud.top, left: cloud.left }}
          >
            <img
              src="/Nubes1.png"
              alt="Nube decorativa"
              className="w-full h-auto"
            />
          </motion.div>
        ))}
      </div>

      {/* Personaje principal */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: [-15, 15, -15] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="relative z-20 mb-8 md:mb-10"
      >
        <img
          src="/Personaj1.png"
          alt="Stefano constructor"
          className="w-40 md:w-56 drop-shadow-2xl"
        />
      </motion.div>

      {/* Tarjeta central */}
      <div className="relative z-30 max-w-[88vw] rounded-[42px] border-2 border-white/50 bg-white/75 p-8 text-center shadow-[0_20px_60px_rgba(120,90,20,0.18)] backdrop-blur-xl md:max-w-[520px] md:p-10">
        <h2 className="mb-3 font-serif text-4xl italic tracking-tight text-[#7A5C12] md:text-5xl">
          ¡Hola!
        </h2>

        <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.4em] text-[#9A7B18] opacity-90">
          Invitación de Stefano
        </p>

        <motion.button
          whileHover={{
            scale: 1.05,
            backgroundColor: '#FFE082',
            color: '#5E4A1F',
          }}
          whileTap={{ scale: 0.95 }}
          onClick={onOpen}
          className="rounded-full bg-[#7A5C12] px-10 py-4 text-[10px] font-bold uppercase tracking-[0.45em] text-white shadow-lg transition-all duration-500 md:px-14 md:py-5"
        >
          Abrir Invitación
        </motion.button>
      </div>
    </motion.div>
  );
};