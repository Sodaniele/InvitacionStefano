import React from 'react';
import { motion } from 'framer-motion';

export const Predictions = () => {
  const wishes = [
    {
      q: '¿Qué le deseás a Stefano?',
      img: '/Tractor4.png',
      imgClass: 'w-20 md:w-28 scale-100',
      placeholder: 'Escribí tu deseo...'
    },
    {
      q: '¿Qué creés que le hará más feliz?',
      img: '/Nubes1.png',
      imgClass: 'w-20 md:w-28 scale-100',
      placeholder: 'Ej: jugar, reír, soplar la vela...'
    },
    {
      q: 'Dejale un mensajito especial',
      img: '/Cono1.png',
      imgClass: 'w-20 md:w-28 scale-100',
      placeholder: 'Escribí aquí...'
    }
  ];

  return (
    <section className="bg-[#FAF9F6] px-6 py-20 text-center">
      <h2 className="mb-12 font-serif text-3xl italic text-[#7A5C12]">
        Dejale un mensajito a Stefano
      </h2>

      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 items-stretch md:grid-cols-3">
        {wishes.map((item, i) => (
          <div
            key={i}
            className="flex flex-col justify-between rounded-[40px] border border-[#F3D67A]/60 bg-white p-8 shadow-sm"
          >
            <div className="mb-4 flex h-40 items-center justify-center">
              <motion.img
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                src={item.img}
                alt="icono"
                className={`${item.imgClass} h-auto object-contain drop-shadow-md`}
              />
            </div>

            <div>
              <p className="mb-4 text-sm font-bold text-[#7A5C12]">
                {item.q}
              </p>

              <input
                type="text"
                placeholder={item.placeholder}
                className="w-full border-b border-[#F3D67A] bg-transparent py-2 text-center text-xs text-[#7A5C12] outline-none placeholder:opacity-30"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};