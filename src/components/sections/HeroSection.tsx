import { useState, useEffect } from "react";
import { Flag } from "lucide-react";
import heroProductos1 from "@/assets/7Agosto.png";
import heroProductos2 from "@/assets/Hallowen.jpeg";
import { useCountUp } from "@/hooks/useCountUp";
import CatalogViewer from "@/components/CatalogViewer";

const CountUpStat = ({ end, suffix, label }: { end: number; suffix: string; label: string }) => {
  const { count, elementRef } = useCountUp({ end, duration: 2500, suffix });
  return (
    <div ref={elementRef}>
      <div className="text-xl md:text-4xl font-bold text-white">{count}{suffix}</div>
      <div className="text-xs md:text-sm text-gray-light">{label}</div>
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

      {/* Background */}
      
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
        <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/95 via-navy-dark/80 to-navy-dark/50 md:from-navy-dark/90 md:via-navy-dark/75 md:to-navy-dark/30" />
        </div>

        {/* Background */}
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
  <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/95 via-navy-dark/80 to-navy-dark/50 md:from-navy-dark/90 md:via-navy-dark/75 md:to-navy-dark/30" />

  {/* Brasitas Halloween */}
<div className="halloween-ember absolute w-2 h-2 rounded-full" style={{ left: "10%", bottom: "0px", animationDelay: "0s", animationDuration: "4s" }} />
<div className="halloween-ember absolute w-3 h-3 rounded-full" style={{ left: "25%", bottom: "0px", animationDelay: "1s", animationDuration: "5s" }} />
<div className="halloween-ember absolute w-2 h-2 rounded-full" style={{ left: "40%", bottom: "0px", animationDelay: "0.5s", animationDuration: "3.5s" }} />
<div className="halloween-ember absolute w-3 h-3 rounded-full" style={{ left: "55%", bottom: "0px", animationDelay: "2s", animationDuration: "4.5s" }} />
<div className="halloween-ember absolute w-2 h-2 rounded-full" style={{ left: "70%", bottom: "0px", animationDelay: "0.8s", animationDuration: "5s" }} />
<div className="halloween-ember absolute w-3 h-3 rounded-full" style={{ left: "80%", bottom: "0px", animationDelay: "1.5s", animationDuration: "3.8s" }} />
<div className="halloween-ember absolute w-2 h-2 rounded-full" style={{ left: "90%", bottom: "0px", animationDelay: "3s", animationDuration: "4.2s" }} />
<div className="halloween-ember absolute w-3 h-3 rounded-full" style={{ left: "5%", bottom: "0px", animationDelay: "2.5s", animationDuration: "5.5s" }} />
<div className="halloween-ember absolute w-2 h-2 rounded-full" style={{ left: "45%", bottom: "0px", animationDelay: "1.2s", animationDuration: "4s" }} />
<div className="halloween-ember absolute w-3 h-3 rounded-full" style={{ left: "65%", bottom: "0px", animationDelay: "0.3s", animationDuration: "3s" }} />
</div>

        

      <div className="container mx-auto px-4 pt-20 relative z-10">
        <div className="max-w-3xl mx-auto lg:mx-0">
          <div className="text-left">

            {/* Badge — solo escritorio */}
            <div className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFFF]/20 border border-[#FF6600]/30 mb-6 animate-slide-up backdrop-blur-sm">
              <Flag className="w-4 h-4 text-[#FFFF]" />
              <span className="text-sm font-bold text-[#FFFF]">
                🎃 Octubre · Especial Halloween
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 animate-slide-up leading-tight">
              Este Halloween,{" "}
              <span className="relative">
                <span className="font-bold text-[#FF6600]">sorprende</span>
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                  <path d="M2 10C50 4 150 4 198 10" stroke="#FF6600" strokeWidth="3" strokeLinecap="round"/>
                </svg>
              </span>{" "}
              con regalos que dejan huella
            </h1>

            {/* Párrafo — solo escritorio */}
            <p className="hidden md:block text-lg md:text-xl text-gray-light mb-8 max-w-xl animate-slide-up-delayed">
              Haz que tu empresa sea recordada con regalos corporativos y dotaciones personalizadas para celebrar el Mes del Halloween.
            </p>

            <div className="flex gap-4 animate-slide-up-delayed mt-6 md:mt-0">
              <button
                onClick={() => setCatalogOpen(true)}
                className="group relative overflow-hidden rounded-full px-8 h-14 text-base font-semibold text-white border-2 border-white/40 backdrop-blur-sm transition-all duration-300 hover:border-white hover:scale-[1.02] hover:shadow-2xl"
              >
                <span aria-hidden="true" className="absolute inset-0 bg-navy-dark/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="relative z-10 tracking-wide drop-shadow-md">
                  Ver Catálogo
                </span>
              </button>
            </div>

            {/* Stats — solo escritorio */}
            <div className="hidden md:grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-white/20 animate-slide-up-delayed">
              <CountUpStat end={50} suffix="+" label="Clientes Satisfechos" />
              <CountUpStat end={10} suffix="K+" label="Productos Entregados" />
              <CountUpStat end={5} suffix="+" label="Años de Experiencia" />
            </div>

          </div>
        </div>
      </div>

      {/* Stats — solo móvil */}
      <div className="md:hidden absolute bottom-6 left-0 right-0 px-4 z-10">
        <div className="grid grid-cols-3 gap-2 pt-4 border-t border-white/20">
          <CountUpStat end={50} suffix="+" label="Clientes" />
          <CountUpStat end={10} suffix="K+" label="Productos" />
          <CountUpStat end={5} suffix="+" label="Años" />
        </div>
      </div>

      {/* Indicadores — solo escritorio */}
      <div className="hidden md:flex absolute bottom-24 left-1/2 -translate-x-1/2 gap-2 z-10">
        {heroImages.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentImage(idx)}
            aria-label={`Ir a imagen ${idx + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              idx === currentImage ? "w-8 bg-[#E41B17]" : "w-4 bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
      </div>

    </section>
  );
};

export default HeroSection;