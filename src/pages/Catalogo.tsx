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

import empresarialImg from "../assets/images/Empresarial.png";
import cocinalImg from "../assets/images/cocina.png";
import industrialImg from "../assets/images/industrial.png";
import medicoImg from "../assets/images/Uniformemedico.png";
import termicosImg from "../assets/images/termico.png";
import uniformesEPPImg from "../assets/images/uniformesEPP.png";

import powerbankImg from "../assets/images/powerbank.png";
import USbImg from "../assets/images/USB.jpg";
import audifonosImg from "../assets/images/audifonos.png";
import parlanteImg from "../assets/images/parlante.png";
import RAMImg from "../assets/images/RAM.png";
import camarawebImg from "../assets/images/camara.png";
import impresoraImg from "../assets/images/impresora.png";
import tecladoImg from "../assets/images/teclado.png";
import discoImg from "../assets/images/SD.png";
import mouseImg from "../assets/images/mousepad.png";
import cableImg from "../assets/images/cables.png";
import monitorImg from "../assets/images/monitor.png";

import agendaImg from "../assets/images/agendas.png";
import bolsasImg from "../assets/images/bolsas.png";
import botellasImg from "../assets/images/botilo.png";
import botonesImg from "../assets/images/botones.png";
import kitImg from "../assets/images/kit.png";
import morralesImg from "../assets/images/maleta.png";
import soporteImg from "../assets/images/soporte.png";
import sombrillasImg from "../assets/images/sombrilla.png";
import esferosImg from "../assets/images/esferos.png";
import camisaImg from "../assets/images/Camisa.png";
import hoodiesImg from "../assets/images/Hoodies.png";
import GorrasImg from "../assets/images/gorras.png";




const catalogData: Record<string, CategoryData> = {
  dotaciones: {
    title: "Dotaciones Empresariales",
    description: "Uniformes corporativos de alta calidad con personalización completa. Camisas, pantalones, overoles, batas médicas y más.",
    heroImage: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=1200&auto=format&fit=crop&q=80",
    products: [
      {
        name: "👔 Uniformes Corporativos y Empresariales",
        description: "Impacto y Elegancia. Uniformes corporativos de alta gama con personalización completa. Camisas, pantalones y sastrería que proyectan una imagen profesional y unida.",
        image: empresarialImg,
      },
      {
        name: "👨‍🍳 Uniformes de Cocina (Dotaciones Gastronómicas)",
        description: "Pasión con Estilo. Filipinas y delantales resistentes al calor y manchas. Indumentaria profesional que combina frescura y diseño para los expertos del sabor.",
        image: cocinalImg,

      },
      {
        name: "🏭 Planta de Producción (Uniformes Industriales)",
        description: "Resistencia Industrial. Dotación reforzada para el trabajo pesado. Telas de alta durabilidad diseñadas para soportar la exigencia diaria de la línea de producción.",
        image: industrialImg,
      },
      {
        name: "🩺 Sector Salud (Uniformes Médicos)",
        description: "Seguridad y Confort. Scrubs y batas médicas con tecnología antifluido. Diseños ergonómicos para profesionales que exigen libertad de movimiento y máxima higiene.",
        image: medicoImg,
      },
      {
        name: "❄️ Cuartos Fríos (Uniformes Térmicos)",
        description: "Protección Extrema. Overoles y chaquetas térmicas certificadas para temperaturas bajo cero. Mantenga a su equipo cálido, seco y productivo en ambientes de congelación.",
        image: termicosImg,
      },
      {
        name: "🛡️ Seguridad Industrial (EPP)",
        description: "Compromiso Total. Equipos de protección personal que cumplen normativas internacionales. Cascos, guantes y trajes especializados para minimizar riesgos laborales.",
        image: uniformesEPPImg,
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
        image: USbImg,
      },
      {
        name: "Power Banks",
        description: "Cargadores portátiles personalizados",
        image: powerbankImg,
      },
      {
        name: "Audífonos",
        description: "Audífonos bluetooth con caja personalizada",
        image: audifonosImg,
      },
      {
        name: "Parlantes",
        description: "Parlantes bluetooth promocionales",
        image: parlanteImg,
      },
      {
        name: "Memorias RAM",
        description: "Módulos de memoria RAM para repotenciar equipos",
        image: RAMImg,
      },
      {
        name: "Cámaras Web",
        description: "Webcams HD para videoconferencias y streaming",
        image: camarawebImg,
      },
      {
        name: "Impresoras",
        description: "Impresoras láser y multifuncionales para oficina",
        image: impresoraImg,
      },
      {
        name: "Teclados y Mouse",
        description: "Periféricos ergonómicos alámbricos e inalámbricos",
        image: tecladoImg,
      },
      {
        name: "Discos Duros y SSD",
        description: "Almacenamiento externo e interno para equipos",
        image: discoImg,
      },
      {
        name: "Mouse Pads",
        description: "Mouse pads personalizados con tu marca",
        image: mouseImg,
      },
      {
        name: "Cables y Adaptadores",
        description: "HDMI, USB-C, hubs y adaptadores multipuerto",
        image: cableImg,
      },
      {
        name: "Monitores",
        description: "Pantallas y monitores para oficina y diseño",
        image: monitorImg,
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
        image: agendaImg,
      },
     
      {
        name: "Bolsas Publicitarias",
        description: "Bolsas de tela, papel y ecológicas personalizadas",
        image: bolsasImg,
      },
      {
        name: "Botellas y Termos",
        description: "Termos y botellas de acero inoxidable con tu marca",
        image: botellasImg,
      },
      {
        name: "Botones Publicitarios",
        description: "Botones y pins personalizados para eventos",
        image: botonesImg,
      },
      {
        name: "Cuidado Personal",
        description: "Kits de aseo, espejos, neceseres y más",
        image: kitImg,
      },
      {
        name: "Morrales",
        description: "Morrales, tulas y maletines personalizados",
        image: morralesImg,
      },
      {
        name: "Soportes",
        description: "Soportes para tu celular personalizados y flexibles",
        image: soporteImg,
      },
      {
        name: "Sombrillas",
        description: "Sombrillas y paraguas personalizados",
        image: sombrillasImg,
      },
      {
        name: "Esferos",
        description: "Bolígrafos y esferos con grabado o impresión",
        image: esferosImg,
      },
      {
        name: "Camisa",
        description: "Camisas, Camisetas personalizadas",
        image: camisaImg,
      },
      {
        name: "Hoddies",
        description: "Hoddies, Buzos con tu marca personal",
        image: hoodiesImg,
      },
      {
        name: "Gorras",
        description: "Gorras, Cachuchas a tu estilo",
        image: GorrasImg,
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
                   
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-card-foreground mb-2">
                      {product.name}
                    </h3>
                    <p className="text-muted-foreground mb-4">{product.description}</p>
                    <Button variant="outline" size="sm" className="w-full" asChild>
                      <a href="https://wa.me/573232336978?text=Hola,%20me%20interesa%20información%20sobre%20{product.name}">
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
                <a href="https://wa.me/573232336978?text=Hola,%20quiero%20una%20cotización">
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
