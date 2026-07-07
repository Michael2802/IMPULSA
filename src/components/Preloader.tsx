import { useState, useEffect } from "react";
import logoImpulsa from "@/assets/logo-impulsa.png";
import playerCharacter from "@/assets/preloader-player.png";

const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const duration = 2800;
    const interval = 20;
    const step = 100 / (duration / interval);

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + step + Math.random() * step * 0.4;
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
      const exitTimer = setTimeout(() => setIsExiting(true), 400);
      const completeTimer = setTimeout(() => onComplete(), 1000);
      return () => {
        clearTimeout(exitTimer);
        clearTimeout(completeTimer);
      };
    }
  }, [progress, onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-[#061E29] overflow-hidden transition-all duration-500 ease-in-out ${
        isExiting ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Fondo cinemático */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(29,84,109,0.4),transparent_70%)]" />
        <div className="absolute top-0 left-[-50%] w-[200%] h-full bg-gradient-to-r from-transparent via-[#FCD116]/[0.07] to-transparent preloader-sweep" />
        {/* Líneas de cancha */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#FCD116]/[0.04] to-transparent" />
      </div>

      {/* Contenido principal */}
      <div className="relative flex flex-col items-center gap-6 w-full max-w-md px-6">
        {/* Etiqueta superior */}
        <div className="flex items-center gap-3 preloader-reveal opacity-0" style={{ animationDelay: "0.2s" }}>
          <div className="h-[2px] w-8 bg-[#FCD116]" />
          <span className="text-[10px] uppercase tracking-[0.4em] text-white/60 font-medium italic">
            Transmisión Oficial
          </span>
          <div className="h-[2px] w-8 bg-[#CE1126]" />
        </div>

        {/* Personaje animado + balón */}
        <div className="relative w-full h-56 md:h-64 flex items-end justify-center preloader-reveal opacity-0" style={{ animationDelay: "0.3s" }}>
          {/* Sombra */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-40 h-3 bg-black/40 blur-md rounded-full shadow-anim" />

          {/* Personaje */}
          <img
            src={playerCharacter}
            alt="Jugador Colombia"
            className="relative h-full w-auto object-contain player-anim drop-shadow-[0_10px_25px_rgba(0,0,0,0.5)]"
          />

          {/* Balón */}
          <div className="absolute bottom-6 left-1/2 ball-anim">
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white shadow-[0_4px_12px_rgba(0,0,0,0.4)] flex items-center justify-center text-lg spin-anim">
              ⚽
            </div>
          </div>

          {/* Destellos */}
          <div className="absolute top-4 right-8 w-1 h-1 rounded-full bg-[#FCD116] sparkle-anim" />
          <div className="absolute top-12 left-6 w-1.5 h-1.5 rounded-full bg-white sparkle-anim" style={{ animationDelay: "0.6s" }} />
          <div className="absolute top-20 right-16 w-1 h-1 rounded-full bg-[#CE1126] sparkle-anim" style={{ animationDelay: "1.1s" }} />
        </div>

        {/* Logo */}
        <div className="relative preloader-reveal opacity-0" style={{ animationDelay: "0.5s" }}>
          <div className="absolute inset-0 bg-white/10 blur-2xl animate-pulse" />
          <img
            src={logoImpulsa}
            alt="IMPULSA"
            className="relative h-10 md:h-14 w-auto object-contain filter brightness-0 invert"
          />
        </div>

        {/* Sección de progreso */}
        <div className="w-full flex flex-col gap-3 items-center px-4 md:px-12">
          <div className="flex justify-between w-full text-[9px] font-black uppercase tracking-widest">
            <span className="text-[#FCD116]">Preparando</span>
            <span className="text-white/70">La</span>
            <span className="text-[#CE1126]">Selección</span>
          </div>

          <div className="relative w-full h-[3px] bg-white/10 overflow-hidden">
            <div
              className="absolute top-0 left-0 h-full flex transition-[width] duration-150 ease-out"
              style={{ width: `${Math.min(progress, 100)}%` }}
            >
              <div className="h-full w-[40%] bg-[#FCD116]" />
              <div className="h-full w-[30%] bg-[#003893]" />
              <div className="h-full w-[30%] bg-[#CE1126]" />
            </div>
            <div className="absolute inset-y-0 w-1/4 bg-gradient-to-r from-transparent via-white/40 to-transparent preloader-shine" />
          </div>

          <div className="flex items-center gap-2 mt-1">
            <div className="w-1 h-1 rounded-full bg-[#FCD116] animate-pulse" />
            <span className="text-[10px] text-white/40 uppercase tracking-[0.25em]">
              Sincronizando con el estadio · {Math.floor(progress)}%
            </span>
          </div>
        </div>
      </div>

      {/* Esquinas broadcast */}
      <div className="absolute top-6 left-6 md:top-8 md:left-8 w-10 h-10 md:w-12 md:h-12 border-t border-l border-white/20" />
      <div className="absolute top-6 right-6 md:top-8 md:right-8 w-10 h-10 md:w-12 md:h-12 border-t border-r border-white/20" />
      <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 w-10 h-10 md:w-12 md:h-12 border-b border-l border-white/20" />
      <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8 w-10 h-10 md:w-12 md:h-12 border-b border-r border-white/20" />

      <style>{`
        @keyframes preloader-sweep {
          0% { opacity: 0; transform: translateX(-100%) skewX(-20deg); }
          50% { opacity: 1; }
          100% { opacity: 0; transform: translateX(200%) skewX(-20deg); }
        }
        .preloader-sweep { animation: preloader-sweep 2.8s infinite ease-out; }

        @keyframes preloader-shine {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(500%); }
        }
        .preloader-shine { animation: preloader-shine 2.2s infinite linear; }

        @keyframes preloader-reveal {
          0% { opacity: 0; letter-spacing: 0.4em; filter: blur(8px); transform: translateY(10px); }
          100% { opacity: 1; letter-spacing: normal; filter: blur(0); transform: translateY(0); }
        }
        .preloader-reveal { animation: preloader-reveal 1s cubic-bezier(0.22, 1, 0.36, 1) forwards; }

        /* Personaje: rebote sutil + kick */
        @keyframes player-kick {
          0%, 100% { transform: translateY(0) rotate(-2deg); }
          35% { transform: translateY(-4px) rotate(-6deg); }
          50% { transform: translateY(-2px) rotate(4deg); }
          70% { transform: translateY(0) rotate(-1deg); }
        }
        .player-anim { animation: player-kick 1.8s ease-in-out infinite; transform-origin: bottom center; }

        /* Balón: patada en arco */
        @keyframes ball-kick {
          0% { transform: translate(-40%, 0) scale(1); opacity: 1; }
          40% { transform: translate(60%, -90px) scale(0.85); opacity: 1; }
          70% { transform: translate(180%, -40px) scale(0.7); opacity: 0.6; }
          71% { transform: translate(-60%, 0) scale(1); opacity: 0; }
          85% { transform: translate(-50%, 0) scale(1); opacity: 1; }
          100% { transform: translate(-40%, 0) scale(1); opacity: 1; }
        }
        .ball-anim { animation: ball-kick 1.8s ease-in-out infinite; }

        @keyframes ball-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(720deg); }
        }
        .spin-anim { animation: ball-spin 1.8s linear infinite; }

        /* Sombra que sigue el rebote */
        @keyframes shadow-pulse {
          0%, 100% { transform: translateX(-50%) scaleX(1); opacity: 0.5; }
          35% { transform: translateX(-50%) scaleX(0.7); opacity: 0.3; }
        }
        .shadow-anim { animation: shadow-pulse 1.8s ease-in-out infinite; }

        /* Destellos */
        @keyframes sparkle {
          0%, 100% { opacity: 0; transform: scale(0.5); }
          50% { opacity: 1; transform: scale(1.4); }
        }
        .sparkle-anim { animation: sparkle 1.6s ease-in-out infinite; }
      `}</style>
    </div>
  );
};

export default Preloader;