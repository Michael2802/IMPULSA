import { useState, useEffect } from "react";
import logoImpulsa from "@/assets/logo-impulsa.png";

const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const duration = 2000; // 2 segundos de carga
    const interval = 20;
    const step = 100 / (duration / interval);
    
    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + step + Math.random() * step;
        if (next >= 100) {
          clearInterval(timer);
          return 100;
        }
        return next;
      });
    }, interval);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      const exitTimer = setTimeout(() => {
        setIsExiting(true);
      }, 300);
      
      const completeTimer = setTimeout(() => {
        onComplete();
      }, 800);

      return () => {
        clearTimeout(exitTimer);
        clearTimeout(completeTimer);
      };
    }
  }, [progress, onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-navy-dark transition-opacity duration-700 ease-in-out ${
  isExiting ? "opacity-0 pointer-events-none" : "opacity-100"
}`}
    >
      {/* Logo con animación de pulso y escala */}
      <div className="relative mb-8 flex items-center justify-center w-40 h-40 md:w-56 md:h-56">
        {/* Anillos giratorios alrededor del logo */}
        <div className="absolute inset-2 rounded-full border-2 border-teal-sage/30 border-t-teal-sage animate-spin-slow" />
        <div className="absolute inset-0 rounded-full border border-teal-sage/20 border-b-teal-sage/60 animate-spin-reverse" />

        <div
          className={`relative transition-all duration-700 ease-out ${
  isExiting ? "opacity-0" : "opacity-100"
}`}
        >
          <img
            src={logoImpulsa}
            alt="IMPULSA"
            className="h-20 md:h-28 w-auto object-contain animate-pulse-glow-logo filter brightness-0 invert"
          />
        </div>
      </div>

      {/* Barra de progreso */}
      <div className="w-48 md:w-64 h-1 bg-white/10 rounded-full overflow-hidden mt-4">
        <div
          className="h-full bg-gradient-to-r from-teal-sage to-blue-medium rounded-full transition-all duration-150 ease-out"
          style={{ width: `${Math.min(progress, 100)}%` }}
        />
      </div>

      {/* Texto de carga */}
      <p className="text-gray-light/60 text-sm mt-4 font-medium tracking-widest uppercase animate-pulse">
        Cargando{Math.floor(progress / 34) === 0 ? "" : Math.floor(progress / 34) === 1 ? "." : ".."}...
      </p>
    </div>
  );
};

export default Preloader;