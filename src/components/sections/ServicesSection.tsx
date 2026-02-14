import { Shirt, Gift, Building2, Palette, Truck, Shield, Cpu, Monitor } from "lucide-react";

const services = [
  {
    icon: Shirt,
    title: "Dotaciones Empresariales",
    description: "Uniformes y ropa de trabajo personalizada con los más altos estándares de calidad.",
  },
  {
    icon: Gift,
    title: "Artículos Promocionales",
    description: "Merchandising creativo que conecta con tu audiencia y fortalece tu marca.",
  },
  {
    icon: Cpu,
    title: "Tecnología Corporativa",
    description: "Equipos, periféricos, memorias RAM, discos SSD, impresoras, webcams y accesorios tech para repotenciar y equipar tu empresa.",
  },
  {
    icon: Building2,
    title: "Soluciones Corporativas",
    description: "Programas integrales de dotación y tecnología para empresas de todos los tamaños.",
  },
  {
    icon: Palette,
    title: "Diseño Personalizado",
    description: "Creamos diseños únicos que reflejan la identidad de tu marca en cada producto.",
  },
  {
    icon: Truck,
    title: "Entrega Nacional",
    description: "Logística eficiente para llevar tus productos a cualquier parte del país.",
  },
];

const ServicesSection = () => {
  return (
    <section id="servicios" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4">
            Nuestros Servicios
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Todo lo que tu empresa{" "}
            <span className="gradient-text">necesita</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Ofrecemos soluciones completas en promocionales, dotaciones y tecnología para impulsar 
            la imagen y productividad de tu empresa.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card p-8 rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-500 hover:-translate-y-2 border border-border"
            >
              <div className="w-14 h-14 bg-secondary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-soft">
                <service.icon className="w-7 h-7 text-secondary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-card-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
