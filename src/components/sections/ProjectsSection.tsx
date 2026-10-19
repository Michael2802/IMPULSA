import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import chaquetaImg from "@/assets/proyecto-chaqueta-fonmitex.jpg";
import licoreraAsset from "@/assets/proyecto-licorera-autoniza.jpeg";
import powerbankAsset from "@/assets/proyecto-powerbank-autoniza.jpeg";
import kitAsset from "@/assets/proyecto-kit-isispharma.jpeg";
import logoImg from "@/assets/logo-impulsa.png";

const projects = [
  {
    category: "FONMITEX · Dotaciones",
    title: "Chaquetas impermeables",
    description: "Chaquetas azul oscuro personalizadas con el logo blanco de FONMITEX.",
    image: chaquetaImg,
    alt: "Representación de una chaqueta impermeable azul oscuro con logo blanco FONMITEX",
    reference: true,
    layout: "md:col-span-6 md:row-span-2",
  },
  {
    category: "AUTONIZA · Promocionales",
    title: "Licoreras personalizadas",
    description: "Licoreras con marcación corporativa para AUTONIZA.",
    image: licoreraAsset,
    alt: "Licorera negra personalizada entregada para AUTONIZA",
    reference: false,
    layout: "md:col-span-6",
  },
  {
    category: "AUTONIZA · Tecnología",
    title: "Power banks",
    description: "Cargadores portátiles con la identidad de AUTONIZA.",
    image: powerbankAsset,
    alt: "Power bank negro y bolsa personalizada con el logo AUTONIZA",
    reference: false,
    layout: "md:col-span-3",
  },
  {
    category: "ISISPHARMA · Regalos",
    title: "Kit cafetero",
    description: "Un kit cafetero preparado para ISISPHARMA.",
    image: kitAsset,
    alt: "Kit cafetero con prensa francesa, café y acompañamiento preparado para ISISPHARMA",
    reference: false,
    layout: "md:col-span-3",
  },
];

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const elements = Array.from(section.querySelectorAll<HTMLElement>("[data-project-reveal]"));
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")),
      { threshold: 0.14 },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="proyectos" className="bg-gray-light py-24 md:py-32" aria-labelledby="projects-title">
      <div className="container">
        <header className="mb-14 grid gap-8 md:mb-20 md:grid-cols-[1fr_0.58fr] md:items-end" data-project-reveal>
          <div>
            <div className="mb-5 flex items-center gap-4">
              <span className="h-1 w-12 bg-teal-sage" aria-hidden="true" />
              <p className="text-sm font-bold uppercase text-blue-medium">Proyectos realizados</p>
            </div>
            <h2 id="projects-title" className="max-w-4xl font-workshop-heading text-4xl font-bold uppercase leading-[0.98] text-navy-dark sm:text-5xl md:text-7xl">
              Ideas que toman forma y dejan huella.
            </h2>
          </div>
          <p className="border-l-2 border-teal-sage pl-6 text-base leading-relaxed text-foreground md:text-lg">
            Proyectos realizados para FONMITEX, AUTONIZA e ISISPHARMA: dotaciones, regalos corporativos y tecnología personalizada.
          </p>
        </header>

        <div className="grid auto-rows-[360px] grid-cols-1 gap-4 md:auto-rows-[330px] md:grid-cols-12 md:gap-6">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className={`project-tile group relative isolate min-w-0 overflow-hidden bg-navy-dark shadow-card ${project.layout}`}
              data-project-reveal
            >
              <img
                src={project.image}
                alt={project.alt}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/25 to-transparent transition-colors duration-500 group-hover:from-navy-dark/95" />
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-6 lg:p-8">
                <div className="mb-3 flex items-center gap-3">
                  <span className="font-workshop-heading text-sm font-bold text-teal-sage">0{index + 1}</span>
                  <span className="h-px w-8 bg-teal-sage" aria-hidden="true" />
                  <p className="text-xs font-bold uppercase text-primary-foreground">{project.category}</p>
                </div>
                <h3 className={`font-workshop-heading font-bold leading-tight text-primary-foreground ${index === 0 ? "max-w-xl text-3xl md:text-5xl" : "text-2xl"}`}>
                  {project.title}
                </h3>
                <p className="project-tile__description mt-4 max-w-lg text-sm leading-relaxed text-gray-light">
                  {project.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-6 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between" data-project-reveal>
          <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">
            Cada proyecto parte de una necesidad distinta y se desarrolla con acompañamiento durante todo el proceso.
          </p>
          <Button variant="default" size="lg" className="rounded-sm" asChild>
            <a href="https://wa.me/573001234567?text=Hola,%20quiero%20conocer%20más%20sobre%20los%20proyectos%20de%20IMPULSA" target="_blank" rel="noopener noreferrer">
              Cuéntanos tu proyecto <ArrowRight aria-hidden="true" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;