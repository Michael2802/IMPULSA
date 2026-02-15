import clientLG from "@/assets/client-siscol.png";
import clientCroydon from "@/assets/client-metrex.png";
import clientAlpina from "@/assets/client-alpina.png";
import clientMercadoLibre from "@/assets/client-mercadolibre.png";
import clientAkairos from "@/assets/client-akairos.png";

const clients = [
  {
    name: "LG",
    logo: clientLG,
  },
  {
    name: "Croydon",
    logo: clientCroydon,
  },
  {
    name: "Alpina",
    logo: clientAlpina,
  },
  {
    name: "Mercado Libre",
    logo: clientMercadoLibre,
  },
  {
    name: "AKAIROS",
    logo: clientAkairos,
  },
];

const ClientsSection = () => {
  return (
    <section className="py-16 bg-muted/30 border-y border-border">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4">
            Confianza
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Empresas que confían en nosotros
          </h2>
        </div>

        {/* Logos Grid - No grayscale, full color */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center">
          {clients.map((client) => (
            <div
              key={client.name}
              className="group relative w-full max-w-[180px] h-24 flex items-center justify-center p-4 bg-background rounded-xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <img
                src={client.logo}
                alt={`Logo de ${client.name}`}
                className="max-h-16 max-w-full object-contain transition-all duration-300 group-hover:scale-105"
              />
            </div>
          ))}
        </div>

        <p className="text-center text-muted-foreground mt-8 text-sm">
          +50 empresas han impulsado su marca con nosotros
        </p>
      </div>
    </section>
  );
};

export default ClientsSection;
