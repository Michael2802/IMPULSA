import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import logoImpulsa from "@/assets/logo-impulsa.png";
import catalogPolo from "@/assets/catalog-polo-logo.jpg";
import catalogBotella from "@/assets/catalog-botella-logo.jpg";

interface Product {
  name: string;
  description: string;
  image: string;
}

interface CategoryData {
  title: string;
  description: string;
  heroImage: string;
  products: Product[];
}

const catalogData: Record<string, CategoryData> = {
  dotaciones: {
    title: "Dotaciones",
    description: "Uniformes corporativos de alta calidad con personalización completa. Camisas, pantalones, overoles, batas médicas y más.",
    heroImage: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=1200&auto=format&fit=crop&q=80",
    products: [
      {
        name: "Camisas Polo",
        description: "Polos bordados con logo empresarial",
        image: catalogPolo,
      },
      {
        name: "Camisetas",
        description: "Camisetas estampadas o bordadas",
        image: "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=600&auto=format&fit=crop&q=80",
      },
      {
        name: "Overoles",
        description: "Overoles industriales personalizados",
        image: "https://images.unsplash.com/photo-1618453292459-53424b66bb6a?w=600&auto=format&fit=crop&q=80",
      },
      {
        name: "Chaquetas",
        description: "Chaquetas corporativas con bordado",
        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&auto=format&fit=crop&q=80",
      },
      {
        name: "Pantalones",
        description: "Pantalones de trabajo de alta durabilidad",
        image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=600&auto=format&fit=crop&q=80",
      },
      {
        name: "Batas Médicas",
        description: "Uniformes para personal de salud",
        image: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=600&auto=format&fit=crop&q=80",
      },
    ],
  },
  tecnologia: {
    title: "Tecnología",
    description: "Equipos de cómputo, periféricos, memorias RAM, discos SSD, impresoras, webcams y accesorios tecnológicos para equipar y repotenciar tu empresa.",
    heroImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&auto=format&fit=crop&q=80",
    products: [
      {
        name: "USB Personalizadas",
        description: "Memorias USB con logo grabado",
        image: "https://images.unsplash.com/photo-1628557044797-f21a177c37ec?w=600&auto=format&fit=crop&q=80",
      },
      {
        name: "Power Banks",
        description: "Cargadores portátiles personalizados",
        image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=600&auto=format&fit=crop&q=80",
      },
      {
        name: "Audífonos",
        description: "Audífonos bluetooth con caja personalizada",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&auto=format&fit=crop&q=80",
      },
      {
        name: "Parlantes",
        description: "Parlantes bluetooth promocionales",
        image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&auto=format&fit=crop&q=80",
      },
      {
        name: "Memorias RAM",
        description: "Módulos de memoria RAM para repotenciar equipos",
        image: "https://images.unsplash.com/photo-1562976540-1502c2145186?w=600&auto=format&fit=crop&q=80",
      },
      {
        name: "Cámaras Web",
        description: "Webcams HD para videoconferencias y streaming",
        image: "https://images.unsplash.com/photo-1611532602666-4d68e5898f65?w=600&auto=format&fit=crop&q=80",
      },
      {
        name: "Impresoras",
        description: "Impresoras láser y multifuncionales para oficina",
        image: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=600&auto=format&fit=crop&q=80",
      },
      {
        name: "Teclados y Mouse",
        description: "Periféricos ergonómicos alámbricos e inalámbricos",
        image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600&auto=format&fit=crop&q=80",
      },
      {
        name: "Discos Duros y SSD",
        description: "Almacenamiento externo e interno para equipos",
        image: "https://images.unsplash.com/photo-1531492746076-161ca9bcad58?w=600&auto=format&fit=crop&q=80",
      },
      {
        name: "Mouse Pads",
        description: "Mouse pads personalizados con tu marca",
        image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=600&auto=format&fit=crop&q=80",
      },
      {
        name: "Cables y Adaptadores",
        description: "HDMI, USB-C, hubs y adaptadores multipuerto",
        image: "https://images.unsplash.com/photo-1625723044792-44de16ccb4e9?w=600&auto=format&fit=crop&q=80",
      },
      {
        name: "Monitores",
        description: "Pantallas y monitores para oficina y diseño",
        image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=600&auto=format&fit=crop&q=80",
      },
    ],
  },
  articulos: {
    title: "Artículos",
    description: "Amplia variedad de artículos promocionales para impulsar tu marca. Encuentra todo lo que necesitas para destacar.",
    heroImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&auto=format&fit=crop&q=80",
    products: [
      {
        name: "Agenda",
        description: "Agendas ejecutivas personalizadas con tu logo",
        image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=600&auto=format&fit=crop&q=80",
      },
      {
        name: "Alcancía",
        description: "Alcancías promocionales con diseños únicos",
        image: "https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?w=600&auto=format&fit=crop&q=80",
      },
      {
        name: "Bolsas Publicitarias",
        description: "Bolsas de tela, papel y ecológicas personalizadas",
        image: "https://images.unsplash.com/photo-1591129841117-3adfd313e34f?w=600&auto=format&fit=crop&q=80",
      },
      {
        name: "Botellas y Termos",
        description: "Termos y botellas de acero inoxidable con tu marca",
        image: catalogBotella,
      },
      {
        name: "Botones Publicitarios",
        description: "Botones y pins personalizados para eventos",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&auto=format&fit=crop&q=80",
      },
      {
        name: "Cuidado Personal",
        description: "Kits de aseo, espejos, neceseres y más",
        image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&auto=format&fit=crop&q=80",
      },
      {
        name: "Oficina y Escolar",
        description: "Libretas, porta documentos, organizadores",
        image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&auto=format&fit=crop&q=80",
      },
      {
        name: "Hogar",
        description: "Artículos para el hogar con tu marca",
        image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=600&auto=format&fit=crop&q=80",
      },
      {
        name: "Morrales",
        description: "Morrales, tulas y maletines personalizados",
        image: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=600&auto=format&fit=crop&q=80",
      },
      {
        name: "Relojes",
        description: "Relojes de pared y pulsera con tu logo",
        image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=600&auto=format&fit=crop&q=80",
      },
      {
        name: "Sombrillas",
        description: "Sombrillas y paraguas personalizados",
        image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=600&auto=format&fit=crop&q=80",
      },
      {
        name: "Esferos",
        description: "Bolígrafos y esferos con grabado o impresión",
        image: "https://images.unsplash.com/photo-1585336261022-680e295ce3fe?w=600&auto=format&fit=crop&q=80",
      },
    ],
  },
};

const Catalogo = () => {
  const { categoria } = useParams<{ categoria: string }>();
  const categoryData = categoria ? catalogData[categoria] : null;

  // Scroll to top when category changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [categoria]);

  if (!categoryData) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Navbar />
        <main className="flex-1 flex items-center justify-center pt-20">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">Categoría no encontrada</h1>
            <p className="text-muted-foreground mb-8">La categoría que buscas no existe.</p>
            <Button asChild>
              <Link to="/#productos">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Volver al catálogo
              </Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const categoryKeys = Object.keys(catalogData);
  const currentIndex = categoryKeys.indexOf(categoria!);
  const prevCategory = currentIndex > 0 ? categoryKeys[currentIndex - 1] : null;
  const nextCategory = currentIndex < categoryKeys.length - 1 ? categoryKeys[currentIndex + 1] : null;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero */}
        <section className="relative h-[40vh] min-h-[300px] flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={categoryData.heroImage}
              alt={categoryData.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-secondary/60" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <Link
              to="/#productos"
              className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground mb-4 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Volver al catálogo
            </Link>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4">
              {categoryData.title}
            </h1>
            <p className="text-lg text-primary-foreground/80 max-w-2xl">
              {categoryData.description}
            </p>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categoryData.products.map((product, index) => (
                <div
                  key={index}
                  className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300"
                >
                  <div className="aspect-square overflow-hidden relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {/* Logo overlay */}
                    <div className="absolute top-4 left-4 bg-white/90 rounded-lg p-2 shadow-md">
                      <img 
                        src={logoImpulsa} 
                        alt="IMPULSA" 
                        className="h-5 w-auto object-contain"
                      />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-card-foreground mb-2">
                      {product.name}
                    </h3>
                    <p className="text-muted-foreground mb-4">{product.description}</p>
                    <Button variant="outline" size="sm" className="w-full" asChild>
                      <a href="https://wa.me/573001234567?text=Hola,%20me%20interesa%20información%20sobre%20{product.name}">
                        Solicitar Cotización
                      </a>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Navigation between categories */}
        <section className="py-8 border-t border-border">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center">
              {prevCategory ? (
                <Link
                  to={`/catalogo/${prevCategory}`}
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>{catalogData[prevCategory as keyof typeof catalogData]?.title || prevCategory}</span>
                </Link>
              ) : (
                <div />
              )}
              {nextCategory ? (
                <Link
                  to={`/catalogo/${nextCategory}`}
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <span>{catalogData[nextCategory as keyof typeof catalogData]?.title || nextCategory}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              ) : (
                <div />
              )}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-primary-foreground mb-4">
              ¿Necesitas una cotización personalizada?
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              Contáctanos y te ayudamos a encontrar los productos perfectos para tu empresa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" asChild>
                <a href="https://wa.me/573001234567?text=Hola,%20quiero%20una%20cotización">
                  <Phone className="w-5 h-5 mr-2" />
                  Contactar por WhatsApp
                </a>
              </Button>
              <Button variant="outline" size="lg" className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground/10" asChild>
                <Link to="/#contacto">
                  Formulario de Contacto
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Catalogo;
