import { useEffect, useState } from "react";

// Declare custom element for TSX
declare global {
  namespace JSX {
    interface IntrinsicElements {
      "dotlottie-wc": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          src?: string;
          autoplay?: boolean;
          loop?: boolean;
        },
        HTMLElement
      >;
    }
  }
}

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
      <dotlottie-wc
  src="https://lottie.host/0d300b43-67ee-4d54-b36a-47eabca0148f/O0FikxAsfl.lottie"
  style={{ width: "min(300px, 80vw)", height: "min(300px, 80vw)" }}
  autoplay
  loop
/>
      <h1 className="text-white text-3xl md:text-4xl font-light tracking-[0.3em] mt-4">
  IMPULSA
</h1>
    </div>
  );
};

export default Preloader;