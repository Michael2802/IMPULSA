import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logoImpulsa from "@/assets/logo-impulsa.png";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/" || location.pathname === "";
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Inicio", href: "#inicio" },
    { name: "Servicios", href: "#servicios" },
    { name: "Productos", href: "#productos" },
    { name: "Nosotros", href: "#nosotros" },
    { name: "Contacto", href: "#contacto" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const sectionId = href.replace("/#", "#");
    
    if (!isHomePage) {
      navigate("/" + sectionId);
    } else {
      const element = document.querySelector(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? "bg-background/95 backdrop-blur-lg border-b border-border shadow-md" 
        : "bg-transparent border-b border-transparent"
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a 
            href="/#inicio" 
            onClick={(e) => handleNavClick(e, "/#inicio")}
            className="flex items-center group"
          >
            <img 
              src={logoImpulsa} 
              alt="IMPULSA - Dotación & Promocionales" 
              className={`h-16 md:h-20 w-auto object-contain transition-all duration-300 group-hover:scale-105 ${
                isScrolled || !isHomePage ? "" : "brightness-0 invert"
              }`}
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`font-medium transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full ${
                  isScrolled || !isHomePage 
                    ? "text-muted-foreground hover:text-primary" 
                    : "text-white/90 hover:text-white"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant={isScrolled || !isHomePage ? "default" : "outline"} size="lg" className={!isScrolled && isHomePage ? "border-white text-white hover:bg-white hover:text-navy-dark" : ""} asChild>
              <a href="https://wa.me/573232336978?text=Hola,%20quiero%20más%20información" target="_blank" rel="noopener noreferrer">WhatsApp</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 ${isScrolled || !isHomePage ? "text-foreground" : "text-white"}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border animate-slide-up">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary font-medium transition-colors duration-300 py-2"
                  onClick={(e) => {
                    handleNavClick(e, link.href);
                    setIsOpen(false);
                  }}
                >
                  {link.name}
                </a>
              ))}
              <Button variant="default" size="lg" className="mt-2" asChild>
                <a href="https://wa.me/573232336978?text=Hola,%20quiero%20más%20información" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)}>WhatsApp</a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
