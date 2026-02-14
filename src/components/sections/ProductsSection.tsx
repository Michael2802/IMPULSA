import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import logoImpulsa from "@/assets/logo-impulsa.png";
import productUniformes from "@/assets/product-uniformes.jpg";
import productOficina from "@/assets/product-oficina.jpg";
import productTecnologia from "@/assets/product-tecnologia.jpg";

// Categorías principales
const categories = [
  {
    title: "Dotaciones",
    description: "Uniformes corporativos, camisas, pantalones, overoles, batas y más prendas para tu equipo",
    image: productUniformes,
    color: "from-blue-600 to-blue-800",
    slug: "dotaciones",
  },
  {
    title: "Tecnología",
    description: "Equipos, periféricos, memorias RAM, impresoras, webcams y accesorios para equipar y repotenciar tu empresa",
    image: productTecnologia,
    color: "from-purple-600 to-indigo-700",
    slug: "tecnologia",
  },
  {
    title: "Artículos",
    description: "Agendas, esferos, bolsas, termos, morrales, relojes y mucho más para tu marca",
    image: productOficina,
    color: "from-amber-500 to-orange-600",
    slug: "articulos",
  },
];

const ProductsSection = () => {
  return (
    <section id="productos" className="py-24 bg-gradient-to-b from-background via-muted/30 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4">
            <Sparkles className="w-4 h-4" />
            Catálogo de Productos
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Impulsa tu marca con{" "}
            <span className="gradient-text">productos únicos</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Descubre nuestra amplia variedad de productos promocionales y dotaciones corporativas de alta calidad.
          </p>
        </div>

        {/* Categorías Principales - 3 Cards grandes */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {categories.map((category, index) => (
            <Link
              key={index}
              to={`/catalogo/${category.slug}`}
              className="group relative overflow-hidden rounded-3xl cursor-pointer block transform hover:-translate-y-2 transition-all duration-500 shadow-lg hover:shadow-2xl"
            >
              <div className="aspect-[3/4] overflow-hidden relative">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Logo overlay */}
                <div className="absolute top-4 left-4 bg-white/95 rounded-xl p-2.5 shadow-lg backdrop-blur-sm">
                  <img 
                    src={logoImpulsa} 
                    alt="IMPULSA" 
                    className="h-7 w-auto object-contain"
                  />
                </div>

                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-0 group-hover:opacity-70 transition-opacity duration-500`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                      {category.title}
                    </h3>
                    <p className="text-white/80 text-base opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 mb-4">
                      {category.description}
                    </p>
                    <div className="flex items-center gap-2 text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                      <span>Ver productos</span>
                      <ArrowRight className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300" />
                    </div>
                  </div>
                </div>

                {/* Floating Arrow */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0 shadow-lg">
                  <ArrowRight className="w-6 h-6 text-primary" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col sm:flex-row gap-4 items-center">
            <Button variant="default" size="lg" className="text-lg px-8 py-6" asChild>
              <a href="https://wa.me/573001234567?text=Hola,%20quiero%20ver%20el%20catálogo%20completo" target="_blank" rel="noopener noreferrer">
                Ver Catálogo Completo
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
            <p className="text-muted-foreground text-sm">
              ¿No encuentras lo que buscas? <a href="#contacto" className="text-primary hover:underline font-medium">Contáctanos</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
