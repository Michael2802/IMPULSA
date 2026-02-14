import { CheckCircle2, Clock, Award, Users, Leaf, Scissors } from "lucide-react";

const benefits = [
  {
    icon: Award,
    title: "Calidad Garantizada",
    description: "Utilizamos materiales de primera calidad en todos nuestros productos.",
  },
  {
    icon: Scissors,
    title: "Desarrollo Textil",
    description: "Expertos en confección y desarrollo de prendas a medida con técnicas avanzadas.",
  },
  {
    icon: Leaf,
    title: "Materiales Biodegradables",
    description: "Comprometidos con el medio ambiente usando materiales eco-friendly y sostenibles.",
  },
  {
    icon: Clock,
    title: "Entregas Puntuales",
    description: "Cumplimos con los tiempos de entrega acordados, siempre.",
  },
];

const features = [
  "Precios competitivos del mercado",
  "Diseño gráfico incluido",
  "Muestras antes de producción",
  "Materiales ecológicos disponibles",
  "Envíos a nivel nacional",
  "Confección textil especializada",
];

const WhyUsSection = () => {
  return (
    <section id="nosotros" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4">
              ¿Por Qué Elegirnos?
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Somos tu mejor aliado en{" "}
              <span className="gradient-text">promocionales</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Con más de 5 años de experiencia en el mercado, en IMPULSA nos
              hemos consolidado como líderes en la industria de promocionales y 
              dotaciones empresariales.
            </p>

            {/* Benefits */}
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center flex-shrink-0 shadow-soft">
                    <benefit.icon className="w-6 h-6 text-secondary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">{benefit.title}</h3>
                    <p className="text-muted-foreground text-sm">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Features Card */}
          <div className="relative">
            <div className="bg-card p-8 md:p-10 rounded-3xl shadow-card border border-border">
              <h3 className="text-2xl font-bold text-card-foreground mb-8">
                Lo que obtienes con nosotros
              </h3>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-card-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mt-10 pt-8 border-t border-border">
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text">98%</div>
                  <div className="text-xs text-muted-foreground mt-1">Satisfacción</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text">24h</div>
                  <div className="text-xs text-muted-foreground mt-1">Cotización</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text">100%</div>
                  <div className="text-xs text-muted-foreground mt-1">Garantía</div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary rounded-2xl opacity-30 blur-xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent rounded-full opacity-30 blur-xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
