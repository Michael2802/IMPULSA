import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Flag } from "lucide-react";
import heroProductos1 from "@/assets/ChatGPT Image 12 jul 2026, 08_41_30.png";
import heroProductos2 from "@/assets/ChatGPT Image 12 jul 2026, 08_01_01.png";
import { useCountUp } from "@/hooks/useCountUp";
import CatalogViewer from "@/components/CatalogViewer";

const CountUpStat = ({ end, suffix, label }: { end: number; suffix: string; label: string }) => {
  const { count, elementRef } = useCountUp({ end, duration: 2500, suffix });

  return (
    <div ref={elementRef}>
      <div className="text-3xl md:text-4xl font-bold text-white">
        {count}{suffix}
      </div>
      <div className="text-sm text-gray-light">{label}</div>
    </div>
  );
};

const heroImages = [
  { src: heroProductos1, alt: "Productos promocionales con los colores de Colombia" },
  { src: heroProductos2, alt: "Merchandising corporativo personalizado" },
];

const HeroSection = () => {
  const [catalogOpen, setCatalogOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      <CatalogViewer open={catalogOpen} onOpenChange={setCatalogOpen} />
      {/* Rotating Image Background */}
      <div className="absolute inset-0">
        {heroImages.map((img, idx) => (
          <img
            key={idx}
            src={img.src}
            alt={img.alt}
            className={`absolute inset-0 w-full h-full object-cover md:object-center object-[70%_center] transition-opacity duration-1000 ease-in-out ${
              idx === currentImage ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/95 via-navy-dark/80 to-navy-dark/50 md:from-navy-dark/90 md:via-navy-dark/75 md:to-navy-dark/30" />
      </div>

      <div className="container mx-auto px-4 pt-20 relative z-10">
        <div className="max-w-3xl mx-auto lg:mx-0">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FCD116]/20 border border-[#FCD116]/30 mb-6 animate-slide-up backdrop-blur-sm">
              <Flag className="w-4 h-4 text-[#FCD116]" />
              <span className="text-sm font-bold text-[#FCD116]">
                20 de Julio · Independencia de Colombia
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 animate-slide-up leading-tight">
              Viste tu marca con{" "}
              <span className="relative">
                <span className="font-bold text-[#FCD116]">orgullo</span>
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                  <path d="M2 10C50 4 150 4 198 10" stroke="#FCD116" strokeWidth="3" strokeLinecap="round"/>
                </svg>
              </span>{" "}
              colombiano
            </h1>

            <p className="text-lg md:text-xl text-gray-light mb-8 max-w-xl mx-auto lg:mx-0 animate-slide-up-delayed">
              Dotaciones y promocionales con los colores de la patria para celebrar el Día de la Independencia.
              Polos, gorras, tazas y más — personalizados con tu logo.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up-delayed">
              {/* Ver catálogo con hover bandera de Colombia */}
              <button
                onClick={() => setCatalogOpen(true)}
                className="group relative overflow-hidden rounded-full px-8 h-14 text-base font-semibold text-white border-2 border-white/40 backdrop-blur-sm transition-all duration-300 hover:border-white hover:scale-[1.02] hover:shadow-2xl"
              >
                {/* Bandera de Colombia difuminada en hover */}
                <span
                  aria-hidden="true"
                  className="absolute inset-0 opacity-0 group-hover:opacity-90 blur-md group-hover:blur-sm transition-all duration-500"
                  style={{
                    background:
                      "linear-gradient(to bottom, #FCD116 0%, #FCD116 50%, #003893 50%, #003893 75%, #CE1126 75%, #CE1126 100%)",
                  }}
                />
                {/* Capa oscura para contraste del texto */}
                <span
                  aria-hidden="true"
                  className="absolute inset-0 bg-navy-dark/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
                <span className="relative z-10 tracking-wide drop-shadow-md">
                  Ver Catálogo
                </span>
              </button>
            </div>

            {/* Stats with animated counters */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-white/20 animate-slide-up-delayed">
              <CountUpStat end={50} suffix="+" label="Clientes Satisfechos" />
              <CountUpStat end={10} suffix="K+" label="Productos Entregados" />
              <CountUpStat end={5} suffix="+" label="Años de Experiencia" />
            </div>
          </div>
        </div>
      </div>

      {/* Indicadores de slide */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {heroImages.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentImage(idx)}
            aria-label={`Ir a imagen ${idx + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              idx === currentImage ? "w-8 bg-[#FCD116]" : "w-4 bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;