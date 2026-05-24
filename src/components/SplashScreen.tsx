// src/components/SplashScreen.tsx
import { useEffect, useState } from "react";
import logo from "@/assets/logo-impulsa.png"; // ajusta el path

const SplashScreen = () => {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFadeOut(true), 1800); // empieza a desvanecerse
    const hide = setTimeout(() => setVisible(false), 2400);  // desaparece
    return () => { clearTimeout(timer); clearTimeout(hide); };
  }, []);

  if (!visible) return null;

  return (
    <div className={`fixed inset-0 z-[9999] bg-background flex items-center justify-center transition-opacity duration-600 ${fadeOut ? "opacity-0" : "opacity-100"}`}>
      <img
        src={logo}
        alt="Logo"
        className="w-40 animate-pulse"
      />
    </div>
  );
};

export default SplashScreen;