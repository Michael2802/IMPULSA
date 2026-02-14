import { Heart, Gift, Calendar, PartyPopper, Box } from "lucide-react";
import { Button } from "@/components/ui/button";

const occasions = [
  {
    title: "Día del Amor y la Amistad",
    date: "14 de Febrero",
    icon: Heart,
    description: "Detalles personalizados para celebrar el amor",
    color: "from-pink-500/20 to-red-500/20",
    iconColor: "text-pink-500",
  },
  {
    title: "Cumpleaños",
    date: "Todo el año",
    icon: PartyPopper,
    description: "Regalos personalizados para celebrar",
    color: "from-violet-500/20 to-purple-500/20",
    iconColor: "text-violet-500",
  },
  {
    title: "Día de la Madre",
    date: "Mayo",
    icon: Heart,
    description: "Regalos que demuestran amor y gratitud",
    color: "from-rose-500/20 to-orange-500/20",
    iconColor: "text-rose-500",
  },
  {
    title: "Navidad y Fin de Año",
    date: "Diciembre",
    icon: Gift,
    description: "Anchetas, regalos corporativos y más",
    color: "from-red-500/20 to-green-500/20",
    iconColor: "text-red-500",
  },
];

const SpecialOccasionsSection = () => {
  return (
    <section id="ocasiones" className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-accent/20 text-accent-foreground font-semibold text-sm mb-4">
            <Calendar className="inline-block w-4 h-4 mr-2" />
            Fechas Especiales
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Celebra cada{" "}
            <span className="text-primary">ocasión especial</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Creamos detalles personalizados para que sorprendas a tus colaboradores, 
            clientes y seres queridos en las fechas más importantes del año.
          </p>
        </div>

        {/* 3D Figures Highlight Banner */}
        <div className="mb-12 p-6 md:p-8 rounded-3xl bg-gradient-to-r from-primary/10 via-teal-sage/20 to-blue-medium/10 border border-primary/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-teal-sage/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="relative flex flex-col md:flex-row items-center gap-6">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-teal-sage to-blue-medium flex items-center justify-center shadow-lg flex-shrink-0">
              <Box className="w-10 h-10 text-white" />
            </div>
            <div className="text-center md:text-left flex-1">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                🎨 Figuras 3D Personalizadas
              </h3>
              <p className="text-muted-foreground text-lg mb-3">
                <strong className="text-primary">¡Nuestro diferenciador!</strong> Creamos figuras y trofeos únicos en 3D 
                totalmente a la medida de tu evento, empresa o celebración especial.
              </p>
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">Trofeos únicos</span>
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">Figuras personalizadas</span>
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">Esculturas a medida</span>
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">Regalos exclusivos</span>
              </div>
            </div>
          </div>
        </div>

        {/* Occasions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {occasions.map((occasion, index) => {
            const Icon = occasion.icon;
            return (
              <div
                key={index}
                className={`group relative p-6 rounded-2xl bg-gradient-to-br ${occasion.color} border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden`}
              >
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                
                <div className="relative">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-xl bg-background shadow-md flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-7 h-7 ${occasion.iconColor}`} />
                  </div>

                  {/* Date badge */}
                  <span className="inline-block px-3 py-1 rounded-full bg-background/80 text-xs font-semibold text-muted-foreground mb-3">
                    {occasion.date}
                  </span>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {occasion.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {occasion.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="default" size="lg" asChild>
            <a href="#contacto">
              <Gift className="w-5 h-5 mr-2" />
              Cotizar Detalles Especiales
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SpecialOccasionsSection;
