import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Flag } from "lucide-react";
import hero20Julio from "@/assets/hero-20julio.jpg";
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

const HeroSection = () => {
  const [catalogOpen, setCatalogOpen] = useState(false);
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      <CatalogViewer open={catalogOpen} onOpenChange={setCatalogOpen} />
      {/* Image Background */}
      <div className="absolute inset-0">
        <img
          src={hero20Julio}
          alt="Productos promocionales con los colores de Colombia"
          className="absolute inset-0 w-full h-full object-cover md:object-center object-[70%_center] scale-[1.05] md:scale-100"
        />
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
              <Button variant="hero" size="xl" asChild>
                <a href="#contacto">
                  Cotizar para el 20 de Julio
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="heroOutline" size="xl" onClick={() => setCatalogOpen(true)}>
                Ver Catálogo
              </Button>
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
    </section>
  );
};

export default HeroSection;