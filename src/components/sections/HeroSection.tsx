import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/banner.png";
import { useCountUp } from "@/hooks/useCountUp";
import CatalogViewer from "@/components/CatalogViewer";

const CountUpStat = ({ end, suffix, label }: { end: number; suffix: string; label: string }) => {
  const { count, elementRef } = useCountUp({ end, duration: 2500, suffix });
  return (
    <div ref={elementRef}>
      <div className="text-3xl md:text-4xl font-bold text-white">{count}{suffix}</div>
      <div className="text-sm text-gray-light">{label}</div>
    </div>
  );
};

const HeroSection = () => {
  const [open, setOpen] = useState(false);

  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Hero background"
          className="absolute inset-0 w-full h-full object-cover md:object-center object-[70%_center] scale-[1.2] md:scale-100"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/95 via-navy-dark/80 to-navy-dark/40 md:from-navy-dark/90 md:via-navy-dark/70 md:to-transparent" />
      </div>

      <div className="container mx-auto px-4 pt-20 relative z-10">
        <div className="max-w-3xl mx-auto lg:mx-0">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6 animate-slide-up backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-white" />
              <span className="text-sm font-medium text-white">
                Dotaciones, Promocionales y Tecnología Personalizada para Empresas en Colombia
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 animate-slide-up leading-tight">
              Impulsa tu{" "}
              <span className="relative">
                <span className="font-bold text-teal-sage">marca</span>
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                  <path d="M2 10C50 4 150 4 198 10" stroke="hsl(var(--teal-sage))" strokeWidth="3" strokeLinecap="round"/>
                </svg>
              </span>{" "}
              al siguiente nivel
            </h1>

            <p className="text-lg md:text-xl text-gray-light mb-8 max-w-xl mx-auto lg:mx-0 animate-slide-up-delayed">
              En Impulsas ofrecemos dotaciones empresariales, artículos promocionales y tecnología personalizada con el logo de tu marca. Uniformes corporativos, regalos empresariales y accesorios tecnológicos con entrega a nivel nacional.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up-delayed">
              <Button variant="hero" size="xl" onClick={() => setOpen(true)}>
                Catálogo Día del Padre
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-white/20 animate-slide-up-delayed">
              <CountUpStat end={50} suffix="+" label="Clientes Satisfechos" />
              <CountUpStat end={10} suffix="K+" label="Productos Entregados" />
              <CountUpStat end={5} suffix="+" label="Años de Experiencia" />
            </div>
          </div>
        </div>
      </div>

      {/* Catalog Viewer */}
      <CatalogViewer
        open={open}
        onOpenChange={setOpen}
        title="Catálogo Día del Padre"
      />

    </section>
  );
};

export default HeroSection;