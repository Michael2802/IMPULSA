import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail } from "lucide-react";

const CTASection = () => {
  return (
    <section id="contacto" className="py-24 relative overflow-hidden">
      {/* Background - Dark gradient for contrast */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-dark via-blue-medium to-navy-dark" />
      
      {/* Decorative */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            ¿Listo para impulsar tu marca?
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground mb-10 max-w-2xl mx-auto">
            Contáctanos hoy y recibe una cotización personalizada sin compromiso.
            Estamos listos para hacer realidad tu proyecto.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="hero" size="xl" asChild>
              <a href="https://wa.me/573001234567?text=Hola,%20quiero%20solicitar%20una%20cotización" target="_blank" rel="noopener noreferrer">
                Solicitar Cotización Gratis
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="tel:+573001234567">
                <Phone className="w-5 h-5" />
                Llamar Ahora
              </a>
            </Button>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-primary-foreground">
            <a href="tel:+573001234567" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone className="w-5 h-5" />
              <span>+57 300 123 4567</span>
            </a>
            <a href="mailto:info@impulsa.com" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail className="w-5 h-5" />
              <span>info@impulsa.com</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
