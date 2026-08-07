import { useEffect, useState } from "react";

const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const exitTimer = setTimeout(() => setIsExiting(true), 2400);
    const completeTimer = setTimeout(() => onComplete(), 3000);
    return () => {
      clearTimeout(exitTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#061E29] transition-opacity duration-500 ${
        isExiting ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <style>{`
        @keyframes cloudDrift {
          0% { transform: translateX(-120px); opacity: 0.55; }
          50% { opacity: 0.2; }
          100% { transform: translateX(120px); opacity: 0.55; }
        }
        @keyframes cloudDriftSlow {
          0% { transform: translateX(-140px); opacity: 0.45; }
          50% { opacity: 0.15; }
          100% { transform: translateX(140px); opacity: 0.45; }
        }
        .cloud-drift {
          animation: cloudDrift 7s ease-in-out infinite;
        }
        .cloud-drift-slow {
          animation: cloudDriftSlow 9s ease-in-out infinite;
        }
      `}</style>

      <div className="relative flex items-center justify-center w-[340px] h-[420px] md:w-[400px] md:h-[480px] overflow-hidden">
        {/* Nubes de fondo */}
        <div className="cloud-drift-slow absolute top-4 left-0 w-28 h-10 rounded-full bg-white/20 blur-md" />
        <div className="cloud-drift absolute top-20 right-0 w-24 h-8 rounded-full bg-white/18 blur-md [animation-delay:1s]" />
        <div className="cloud-drift-slow absolute top-32 left-10 w-32 h-11 rounded-full bg-white/14 blur-md [animation-delay:2.5s]" />
        <div className="cloud-drift absolute bottom-36 left-0 w-20 h-7 rounded-full bg-white/16 blur-md [animation-delay:0.5s]" />
        <div className="cloud-drift-slow absolute bottom-24 right-8 w-36 h-12 rounded-full bg-white/12 blur-md [animation-delay:3s]" />
        <div className="cloud-drift absolute top-52 left-1/4 w-16 h-6 rounded-full bg-white/10 blur-md [animation-delay:4s]" />

        <div className="flex flex-col items-center">
          <dotlottie-wc
            src="https://lottie.host/72ebce76-b589-4f54-8e02-d32c806e7026/djOxAJGLoD.lottie"
            style={{ width: "300px", height: "300px" }}
            autoplay
            loop
          />
        </div>
      </div>
      <h1 className="text-white text-4xl md:text-5xl font-black tracking-[0.3em] -mt-4">
        IMPULSA
      </h1>
    </div>
  );
};

export default Preloader;