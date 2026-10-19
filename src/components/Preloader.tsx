import { useEffect, useState } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import preloaderAnim from "@/assets/preloader-searching.json";

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
      className={`fixed inset-0 z-[9999] overflow-hidden bg-navy-dark transition-opacity duration-500 ${
        isExiting ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="relative flex flex-col items-center justify-center h-full gap-2 px-6">
        <Player
            autoplay
            loop
            src={preloaderAnim}
            style={{ width: "min(70vw, 320px)", height: "min(70vw, 320px)" }}
          />
        <h1 className="text-white text-4xl md:text-5xl font-black tracking-[0.3em]">
          IMPULSA
        </h1>
      </div>
    </div>
  );
};

export default Preloader;