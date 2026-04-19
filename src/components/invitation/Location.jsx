import React from 'react';

export const Location = () => (
  <section className="bg-white px-6 py-20 text-center">
    <div className="relative mx-auto max-w-2xl rounded-[50px] border-2 border-dashed border-[#F3D67A] bg-[#FFF8E8] p-10">
      <img
        src="/Tractor2.png"
        alt="Decoración construcción"
        className="mx-auto mb-6 w-24 drop-shadow-sm"
      />

      <h2 className="mb-4 font-serif text-3xl text-[#7A5C12]">
        ¿Dónde va a ser la fiesta?
      </h2>

      <p className="mb-8 text-sm leading-relaxed text-[#7A5C12] opacity-80">
        Nos reuniremos en el salón <strong>“Peré Pepé”</strong>.
        <br />
        Av. Illia 1603
      </p>

      <a
        href="https://www.google.com/maps/place/Pres.+Illia+1603,+B2900+San+Nicol%C3%A1s+de+Los+Arroyos,+Provincia+de+Buenos+Aires,+Argentina/@-33.2980795,-60.2611113,17z/data=!3m1!4b1!4m5!3m4!1s0x95b7688a8c3fe163:0xc3fcdae274365b9e!8m2!3d-33.298084!4d-60.2585364?entry=ttu&g_ep=EgoyMDI2MDQxNS4wIKXMDSoASAFQAw%3D%3D"
        target="_blank"
        rel="noreferrer"
        className="inline-block rounded-full bg-[#F3D67A] px-8 py-3 text-xs font-bold uppercase tracking-widest text-[#5E4A1F] shadow-sm transition-colors hover:bg-[#FFE082]"
      >
        Ver en Google Maps
      </a>
    </div>
  </section>
);