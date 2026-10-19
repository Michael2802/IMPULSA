import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { ArrowDown, ArrowRight, Check, PackageCheck, Scissors, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import heroImg from "@/assets/nosotros-hero.png";
import confeccionImg from "@/assets/taller-confeccion.jpg";
import bordadoImg from "@/assets/proceso-bordado.jpg";
import alistamientoImg from "@/assets/taller-alistamiento.jpg";
import tallerVideo from "@/assets/taller-video.mp4.asset.json";
import "@fontsource/sora/600.css";
import "@fontsource/sora/700.css";
import "@fontsource/manrope/400.css";
import "@fontsource/manrope/600.css";

const stages = [
  {
    number: "01",
    eyebrow: "Dotación y confección",
    title: "La prenda empieza mucho antes de la primera puntada.",
    description:
      "Revisamos el uso, el entorno de trabajo y la identidad de tu empresa. Después elegimos materiales, ajustamos el patronaje y confeccionamos cada referencia para que funcione en la jornada real.",
    details: ["Selección de textiles", "Corte y confección", "Revisión de tallaje"],
    image: confeccionImg,
    alt: "Operarias confeccionando dotaciones empresariales en un taller colombiano",
    icon: Scissors,
  },
  {
    number: "02",
    eyebrow: "Marcado y personalización",
    title: "Tu identidad queda integrada, no simplemente añadida.",
    description:
      "Definimos la técnica según la prenda, el diseño y su frecuencia de uso. Bordado, DTF, sublimación o serigrafía se aplican con atención al color, la ubicación y la resistencia.",
    details: ["Bordado computarizado", "DTF y serigrafía", "Ubicación de marca"],
    image: bordadoImg,
    alt: "Máquina de bordado marcando una prenda corporativa",
    icon: Sparkles,
  },
  {
    number: "03",
    eyebrow: "Control y alistamiento",
    title: "Cada pedido sale revisado, organizado y listo para entregar.",
    description:
      "Verificamos costuras, acabados, marcación y cantidades. Clasificamos las prendas por referencia y talla, empacamos el pedido y lo preparamos para que llegue en orden a tu equipo.",
    details: ["Control pieza a pieza", "Organización por talla", "Empaque y despacho"],
    image: alistamientoImg,
    alt: "Control de calidad y alistamiento de uniformes corporativos",
    icon: PackageCheck,
  },
];

const Nosotros = () => {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-workshop-reveal]"));
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")),
      { threshold: 0.18 },
    );
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background font-workshop-body">
      <Helmet>
        <title>Nosotros | Taller de dotaciones IMPULSA Colombia</title>
        <meta name="description" content="Conoce cómo confeccionamos, marcamos, revisamos y alistamos dotaciones empresariales personalizadas en Colombia." />
        <link rel="canonical" href="https://impulsapd.lovable.app/nosotros" />
        <meta property="og:title" content="Nuestro taller | IMPULSA Dotaciones" />
        <meta property="og:description" content="Un recorrido por la confección, el marcado y el alistamiento de cada pedido IMPULSA." />
        <meta property="og:url" content="https://impulsapd.lovable.app/nosotros" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: "Nuestro taller - IMPULSA",
          url: "https://impulsapd.lovable.app/nosotros",
          about: {
            "@type": "Organization",
            name: "IMPULSA Dotación & Promocionales",
            description: "Taller colombiano de confección, marcado y alistamiento de dotaciones empresariales.",
            address: { "@type": "PostalAddress", addressCountry: "CO" },
          },
        })}</script>
      </Helmet>

      <Navbar />

      <main className="overflow-hidden">
        <section className="relative min-h-[92svh] bg-gray-light pt-20 flex items-end">
          <div className="absolute inset-x-0 top-20 bottom-0 lg:left-[46%] overflow-hidden">
            <img src={heroImg} alt="Polo confeccionado en el taller IMPULSA" className="h-full w-full object-cover object-center" />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-light via-transparent to-transparent lg:bg-gradient-to-r lg:from-gray-light lg:via-gray-light/20 lg:to-transparent" />
          </div>

          <div className="container relative z-10 pb-14 pt-28 md:pb-20 lg:pb-24">
            <div className="max-w-3xl" data-workshop-reveal>
              <p className="mb-6 text-sm font-semibold uppercase text-blue-medium">Procesos IMPULSA · Hecho en Colombia</p>
              <h1 className="font-workshop-heading text-5xl font-bold leading-[1.02] text-navy-dark sm:text-6xl lg:text-8xl">
                Más que prendas, herramientas para tu equipo.
              </h1>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-foreground md:text-xl">
                Confeccionamos, marcamos y alistamos dotaciones pensadas para el trabajo real. Este es el recorrido de cada pedido dentro del taller.
              </p>
              <Button variant="default" size="lg" className="mt-9 rounded-sm" asChild>
                <a href="#recorrido">Conoce el proceso <ArrowDown aria-hidden="true" /></a>
              </Button>
            </div>
          </div>
        </section>

        <section className="bg-navy-dark py-16 text-primary-foreground md:py-20">
          <div className="container grid gap-10 md:grid-cols-[1fr_1.3fr] md:items-end" data-workshop-reveal>
            <p className="font-workshop-heading text-3xl font-semibold leading-tight md:text-5xl">
              Todo sucede bajo una misma mirada.
            </p>
            <p className="max-w-2xl text-lg leading-relaxed text-gray-light">
              No se trata solo de producir. Acompañamos la elección de la prenda, cuidamos cómo se ve la marca y revisamos cómo sale cada unidad antes del despacho.
            </p>
          </div>
        </section>

        <section id="recorrido" className="bg-background py-24 md:py-32">
          <div className="container">
            <header className="mb-20 max-w-3xl md:mb-28" data-workshop-reveal>
              <p className="mb-4 text-sm font-semibold uppercase text-blue-medium">Dentro del taller</p>
              <h2 className="font-workshop-heading text-4xl font-bold leading-tight text-navy-dark md:text-6xl">
                Una prenda. Tres momentos decisivos.
              </h2>
            </header>

            <div className="relative space-y-28 md:space-y-40">
              <div className="absolute bottom-0 left-6 top-0 hidden w-px bg-border md:left-1/2 md:block" aria-hidden="true" />
              {stages.map((stage, index) => {
                const Icon = stage.icon;
                const imageFirst = index % 2 === 1;
                return (
                  <article key={stage.number} className="grid items-center gap-10 md:grid-cols-2 md:gap-16" data-workshop-reveal>
                    <div className={`${imageFirst ? "md:order-2 md:pl-10" : "md:pr-10 md:text-right"}`}>
                      <div className={`mb-6 flex items-center gap-4 ${imageFirst ? "" : "md:justify-end"}`}>
                        <span className="flex h-12 w-12 items-center justify-center bg-blue-medium font-workshop-heading text-lg font-bold text-primary-foreground">
                          {stage.number}
                        </span>
                        <Icon className="h-5 w-5 text-teal-sage" aria-hidden="true" />
                      </div>
                      <p className="mb-3 text-sm font-semibold uppercase text-blue-medium">{stage.eyebrow}</p>
                      <h3 className="font-workshop-heading text-3xl font-bold leading-tight text-navy-dark md:text-5xl">{stage.title}</h3>
                      <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">{stage.description}</p>
                      <ul className={`mt-7 flex flex-wrap gap-3 ${imageFirst ? "" : "md:justify-end"}`}>
                        {stage.details.map((detail) => (
                          <li key={detail} className="border border-border bg-card px-4 py-2 text-xs font-semibold uppercase text-foreground">
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className={`relative ${imageFirst ? "md:order-1" : ""}`}>
                      <div className="aspect-[4/3] overflow-hidden bg-muted shadow-card">
                        <img
                          src={stage.image}
                          alt={stage.alt}
                          loading="lazy"
                          width={index === 2 ? 1536 : 1024}
                          height={index === 2 ? 1024 : 1024}
                          className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.035]"
                        />
                      </div>
                      <div className={`absolute h-20 w-20 border-teal-sage ${imageFirst ? "-right-3 -top-3 border-r-2 border-t-2" : "-bottom-3 -left-3 border-b-2 border-l-2"}`} aria-hidden="true" />
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="relative min-h-[70svh] overflow-hidden bg-navy-dark py-24 text-primary-foreground md:py-32">
          <video src={tallerVideo.url} autoPlay muted loop playsInline className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-navy-dark/80" />
          <div className="container relative z-10 flex min-h-[50svh] items-end">
            <div className="max-w-4xl" data-workshop-reveal>
              <p className="mb-5 text-sm font-semibold uppercase text-teal-sage">Trabajo en movimiento</p>
              <h2 className="font-workshop-heading text-4xl font-bold leading-tight md:text-7xl">
                La calidad se nota en lo que revisamos antes de entregar.
              </h2>
              <div className="mt-10 grid gap-5 sm:grid-cols-3">
                {["Costuras y acabados", "Marcación y ubicación", "Cantidades y tallas"].map((item) => (
                  <div key={item} className="flex items-center gap-3 border-t border-teal-sage pt-4">
                    <Check className="h-5 w-5 flex-none text-teal-sage" aria-hidden="true" />
                    <span className="font-semibold">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-light py-24 md:py-32">
          <div className="container grid gap-10 md:grid-cols-[1fr_auto] md:items-end" data-workshop-reveal>
            <div className="max-w-3xl">
              <p className="mb-5 text-sm font-semibold uppercase text-blue-medium">Hablemos de tu dotación</p>
              <h2 className="font-workshop-heading text-4xl font-bold leading-tight text-navy-dark md:text-6xl">
                Cuéntanos qué hace tu equipo. Nosotros pensamos cómo vestirlo.
              </h2>
            </div>
            <Button variant="default" size="xl" className="rounded-sm" asChild>
              <a href="https://wa.me/573232336978?text=Hola,%20quiero%20recibir%20asesoría%20para%20una%20dotación" target="_blank" rel="noopener noreferrer">
                Solicitar asesoría <ArrowRight aria-hidden="true" />
              </a>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Nosotros;