import { Palette, Sparkles, Heart, Shield } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Tatuagem Personalizada",
    description: "Criamos designs únicos baseados nas suas ideias e referências. Cada peça é exclusiva.",
  },
  {
    icon: Sparkles,
    title: "Cover-up",
    description: "Transformamos tatuagens antigas em novas obras de arte. Consultoria especializada.",
  },
  {
    icon: Heart,
    title: "Fineline & Minimalista",
    description: "Traços delicados e precisos para quem busca elegância e sutileza.",
  },
  {
    icon: Shield,
    title: "Blackwork & Geométrico",
    description: "Designs ousados com preenchimentos sólidos e padrões geométricos complexos.",
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 md:mb-16">
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">
            O Que Oferecemos
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
            Nossos Serviços
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group card-gradient p-6 sm:p-8 rounded-lg border border-border hover:border-primary/50 transition-all duration-500 hover-lift"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
              </div>
              <h3 className="font-display text-lg sm:text-xl font-semibold text-foreground mb-2 sm:mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
