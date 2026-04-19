import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// IMPORTACIONES
import { SplashScreen } from './components/invitation/SplashScreen';
import { Hero } from './components/invitation/Hero';
import { Location } from './components/invitation/Location';
import { GiftSection } from './components/invitation/GiftSection';
import { Predictions } from './components/invitation/Predictions';
import { Schedule } from './components/invitation/Schedule';
import { Divider } from './components/invitation/Divider';
import { RSVPForm } from './components/invitation/RSVPForm';

export default function Invitacion() {
  const [isOpened, setIsOpened] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const audioRef = useRef(null);

  const handleOpen = () => {
    setIsOpened(true);

    if (audioRef.current) {
      audioRef.current.play().catch((error) => {
        console.log('Autoplay bloqueado:', error);
      });
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      const newMutedValue = !audioRef.current.muted;
      audioRef.current.muted = newMutedValue;
      setIsMuted(newMutedValue);
    }
  };

  return (
    <div className="relative min-h-screen bg-[#FFF8E8] font-sans">
      {/* AUDIO */}
      <audio ref={audioRef} src="/musica.mp3" loop playsInline />

      {/* BOTÓN DE MUTE */}
      <AnimatePresence>
        {isOpened && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleMute}
            className="fixed top-6 right-6 z-[100] rounded-full border border-[#F3D67A] bg-white/95 p-4 text-2xl shadow-2xl backdrop-blur-md"
          >
            {isMuted ? '🔇' : '🔊'}
          </motion.button>
        )}
      </AnimatePresence>

      {/* SPLASH */}
      <AnimatePresence mode="wait">
        {!isOpened && <SplashScreen key="splash" onOpen={handleOpen} />}
      </AnimatePresence>

      {/* CONTENIDO */}
      {isOpened && (
        <motion.div
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <Hero />
          <Location />
          <Schedule />
          <Divider />
          <Predictions />
          <Divider />
          <GiftSection />

          <section className="bg-white px-6 py-20">
            <div className="mx-auto max-w-xl text-center">
              <h2 className="mb-3 font-serif text-4xl italic text-[#7A5C12]">
                ¿Nos acompañás?
              </h2>

              <div className="mt-10 rounded-[50px] border border-[#F3D67A] bg-[#FFF8E8] p-8 shadow-inner">
                <RSVPForm />
              </div>
            </div>
          </section>

          <footer className="py-20 text-center text-[9px] uppercase tracking-[0.5em] text-[#7A5C12] opacity-40">
            Hecho con ♡ de su tía Sofia para el cumpleaños de Stefano 
          </footer>
        </motion.div>
      )}
    </div>
  );
}