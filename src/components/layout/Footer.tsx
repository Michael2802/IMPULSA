import { Facebook, Instagram, Linkedin, MapPin, Phone, Mail } from "lucide-react";
import logoImpulsa from "@/assets/logo-impulsa.png";

const Footer = () => {
  return (
    <footer className="bg-[#041620] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <img 
                src={logoImpulsa} 
                alt="IMPULSA - Dotación & Promocionales" 
                className="h-20 w-auto object-contain invert brightness-200"
              />
            </div>
            <p className="text-white/80 mb-6">
              Tu aliado estratégico en promocionales y dotaciones empresariales.
              Más de 5 años impulsando marcas.
            </p>
            <div className="flex gap-4">
              <a href="https://facebook.com/impulsa" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://instagram.com/impulsa" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/company/impulsa" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              <li><a href="#inicio" className="text-white/80 hover:text-primary transition-colors">Inicio</a></li>
              <li><a href="#servicios" className="text-white/80 hover:text-primary transition-colors">Servicios</a></li>
              <li><a href="#productos" className="text-white/80 hover:text-primary transition-colors">Productos</a></li>
              <li><a href="#nosotros" className="text-white/80 hover:text-primary transition-colors">Nosotros</a></li>
              <li><a href="#contacto" className="text-white/80 hover:text-primary transition-colors">Contacto</a></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-bold text-lg mb-6">Productos</h4>
            <ul className="space-y-3">
              <li><a href="/catalogo/dotaciones" className="text-white/80 hover:text-primary transition-colors">Dotaciones</a></li>
              <li><a href="/catalogo/tecnologia" className="text-white/80 hover:text-primary transition-colors">Tecnología</a></li>
              <li><a href="/catalogo/articulos" className="text-white/80 hover:text-primary transition-colors">Artículos</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-6">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span className="text-white/80">
                  Calle 123 #45-67, Bogotá, Colombia
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <a href="tel:+573001234567" className="text-white/80 hover:text-primary transition-colors">
                  +57 300 123 4567
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <a href="mailto:info@impulsa.com" className="text-white/80 hover:text-primary transition-colors">
                  info@impulsa.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-white/70">
          <p>© 2025 IMPULSA. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
