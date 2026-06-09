import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare, Lightbulb, PenTool, Factory, Truck } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    title: "Asesoría gratuita",
    description:
      "Agenda una llamada sin costo. Escuchamos tu necesidad, presupuesto y objetivos de marca.",
  },
  {
    icon: Lightbulb,
    title: "Propuesta a la medida",
    description:
      "Te enviamos opciones de productos, materiales y referencias adaptadas a tu proyecto.",
  },
  {
    icon: PenTool,
    title: "Diseño y aprobación",
    description:
      "Nuestro equipo gráfico prepara la muestra digital de tu marca lista para tu visto bueno.",
  },
  {
    icon: Factory,
    title: "Producción con calidad",
    description:
      "Fabricamos y marcamos cada pieza con controles de calidad en cada etapa del proceso.",
  },
  {
    icon: Truck,
    title: "Entrega puntual",
    description:
      "Coordinamos el despacho a tu ciudad cumpliendo los tiempos pactados desde el inicio.",
  },
];

const CTASection = () => {
  return (
    <section id="contacto" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-dark via-blue-medium to-navy-dark" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6 backdrop-blur-sm">
            <MessageSquare className="w-4 h-4 text-teal-sage" />
            <span className="text-sm font-medium text-primary-foreground">
              Asesoría gratuita
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Así trabajamos contigo
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Un proceso claro y acompañado paso a paso, desde la primera idea hasta
            la entrega final de tu dotación o promocional.
          </p>
        </div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-16 max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={step.title}
                className="relative group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="absolute -top-3 -left-3 w-9 h-9 rounded-full bg-teal-sage text-navy-dark font-bold text-sm flex items-center justify-center shadow-lg">
                  {index + 1}
                </div>
                <div className="w-12 h-12 rounded-xl bg-teal-sage/20 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-teal-sage" />
                </div>
                <h3 className="text-lg font-bold text-primary-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-primary-foreground/80 leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="hero" size="xl" asChild>
            <a
              href="https://wa.me/573232336978?text=Hola,%20quiero%20agendar%20una%20asesoría%20gratuita"
              target="_blank"
              rel="noopener noreferrer"
            >
              Agendar asesoría gratuita
              <ArrowRight className="w-5 h-5" />
            </a>
          </Button>
          <p className="mt-4 text-sm text-primary-foreground/70">
            Sin costo · Sin compromiso · Respuesta Oportuna
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
